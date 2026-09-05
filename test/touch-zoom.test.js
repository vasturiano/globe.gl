import assert from 'node:assert/strict';
import test from 'node:test';
import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import fixTouchZoom from '../src/fix-touch-zoom.js';

function createControls(patched = true) {
  const camera = new PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 350;
  const controls = new OrbitControls(camera);
  controls.domElement = {
    getBoundingClientRect: () => ({ left: 40, top: 100, width: 600, height: 600 })
  };
  controls.zoomToCursor = true;
  controls.enablePan = false;
  if (patched) fixTouchZoom(controls);
  return controls;
}

function pinch(controls, scrollX, scrollY) {
  const pointer = (pointerId, clientX, clientY) => ({
    pointerId, clientX, clientY,
    pageX: clientX + scrollX, pageY: clientY + scrollY
  });
  const first = pointer(1, 300, 350);
  const second = pointer(2, 400, 350);
  controls._addPointer(first);
  controls._addPointer(second);
  controls._trackPointer(first);
  controls._trackPointer(second);
  controls._handleTouchStartDolly(second);
  const moved = pointer(2, 440, 390);
  controls._trackPointer(moved);
  controls._handleTouchMoveDolly(moved);
  controls.update();
}

for (const [scrollX, scrollY] of [[0, 0], [0, 7000], [900, 0], [900, 7000]]) {
  test(`pinch camera is independent of page scroll (${scrollX}, ${scrollY})`, () => {
    const reference = createControls(false);
    const corrected = createControls();
    pinch(reference, 0, 0);
    pinch(corrected, scrollX, scrollY);
    assert.ok(reference.object.position.distanceTo(corrected.object.position) < 1e-10);
    assert.ok(reference.target.distanceTo(corrected.target) < 1e-10);
  });
}

test('mouse-wheel camera movement is unchanged', () => {
  const reference = createControls(false);
  const corrected = createControls();
  const event = { clientX: 380, clientY: 370, deltaY: -100 };
  reference._handleMouseWheel(event);
  corrected._handleMouseWheel(event);
  assert.deepEqual(corrected.object.position, reference.object.position);
  assert.deepEqual(corrected.target, reference.target);
});

test('pinch still works with zoomToCursor disabled', () => {
  const reference = createControls(false);
  const corrected = createControls();
  reference.zoomToCursor = corrected.zoomToCursor = false;
  pinch(reference, 0, 0);
  pinch(corrected, 900, 7000);
  assert.deepEqual(corrected.object.position, reference.object.position);
});
