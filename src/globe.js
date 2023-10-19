import { AmbientLight, DirectionalLight, Vector2 } from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const THREE = {
  ...(window.THREE
      ? window.THREE // Prefer consumption from global THREE, if exists
      : { AmbientLight, DirectionalLight, Vector2 }
  ),
  CSS2DRenderer
};

import ThreeGlobe from 'three-globe';
import ThreeRenderObjects from 'three-render-objects';

import accessorFn from 'accessor-fn';
import Kapsule from 'kapsule';
import * as TWEEN from '@tweenjs/tween.js';

import linkKapsule from './kapsule-link.js';

//

// Expose config from ThreeGlobe
const bindGlobe = linkKapsule('globe', ThreeGlobe);
const linkedGlobeProps = Object.assign(...[
  'globeImageUrl',
  'bumpImageUrl',
  'showGlobe',
  'showGraticules',
  'showAtmosphere',
  'atmosphereColor',
  'atmosphereAltitude',
  'onGlobeReady',
  'pointsData',
  'pointLat',
  'pointLng',
  'pointColor',
  'pointAltitude',
  'pointRadius',
  'pointResolution',
  'pointsMerge',
  'pointsTransitionDuration',
  'arcsData',
  'arcStartLat',
  'arcStartLng',
  'arcEndLat',
  'arcEndLng',
  'arcColor',
  'arcAltitude',
  'arcAltitudeAutoScale',
  'arcStroke',
  'arcCurveResolution',
  'arcCircularResolution',
  'arcDashLength',
  'arcDashGap',
  'arcDashInitialGap',
  'arcDashAnimateTime',
  'arcsTransitionDuration',
  'polygonsData',
  'polygonGeoJsonGeometry',
  'polygonCapColor',
  'polygonCapMaterial',
  'polygonSideColor',
  'polygonSideMaterial',
  'polygonStrokeColor',
  'polygonAltitude',
  'polygonCapCurvatureResolution',
  'polygonsTransitionDuration',
  'pathsData',
  'pathPoints',
  'pathPointLat',
  'pathPointLng',
  'pathPointAlt',
  'pathResolution',
  'pathColor',
  'pathStroke',
  'pathDashLength',
  'pathDashGap',
  'pathDashInitialGap',
  'pathDashAnimateTime',
  'pathTransitionDuration',
  'heatmapsData',
  'heatmapPoints',
  'heatmapPointLat',
  'heatmapPointLng',
  'heatmapPointWeight',
  'heatmapBandwidth',
  'heatmapColorFn',
  'heatmapColorSaturation',
  'heatmapBaseAltitude',
  'heatmapTopAltitude',
  'heatmapsTransitionDuration',
  'hexBinPointsData',
  'hexBinPointLat',
  'hexBinPointLng',
  'hexBinPointWeight',
  'hexBinResolution',
  'hexMargin',
  'hexTopCurvatureResolution',
  'hexTopColor',
  'hexSideColor',
  'hexAltitude',
  'hexBinMerge',
  'hexTransitionDuration',
  'hexPolygonsData',
  'hexPolygonGeoJsonGeometry',
  'hexPolygonColor',
  'hexPolygonAltitude',
  'hexPolygonResolution',
  'hexPolygonMargin',
  'hexPolygonUseDots',
  'hexPolygonCurvatureResolution',
  'hexPolygonDotResolution',
  'hexPolygonsTransitionDuration',
  'tilesData',
  'tileLat',
  'tileLng',
  'tileAltitude',
  'tileWidth',
  'tileHeight',
  'tileUseGlobeProjection',
  'tileMaterial',
  'tileCurvatureResolution',
  'tilesTransitionDuration',
  'ringsData',
  'ringLat',
  'ringLng',
  'ringAltitude',
  'ringColor',
  'ringResolution',
  'ringMaxRadius',
  'ringPropagationSpeed',
  'ringRepeatPeriod',
  'labelsData',
  'labelLat',
  'labelLng',
  'labelAltitude',
  'labelRotation',
  'labelText',
  'labelSize',
  'labelTypeFace',
  'labelColor',
  'labelResolution',
  'labelIncludeDot',
  'labelDotRadius',
  'labelDotOrientation',
  'labelsTransitionDuration',
  'htmlElementsData',
  'htmlLat',
  'htmlLng',
  'htmlAltitude',
  'htmlElement',
  'htmlTransitionDuration',
  'objectsData',
  'objectLat',
  'objectLng',
  'objectAltitude',
  'objectRotation',
  'objectFacesSurface',
  'objectThreeObject',
  'customLayerData',
  'customThreeObject',
  'customThreeObjectUpdate'
].map(p => ({ [p]: bindGlobe.linkProp(p)})));
const linkedGlobeMethods = Object.assign(...[
  'globeMaterial',
  'getGlobeRadius',
  'getCoords',
  'toGeoCoords'
].map(p => ({ [p]: bindGlobe.linkMethod(p)})));

// Expose config from renderObjs
const bindRenderObjs = linkKapsule('renderObjs', ThreeRenderObjects);
const linkedRenderObjsProps = Object.assign(...[
  'width',
  'height',
  'backgroundColor',
  'backgroundImageUrl',
  'enablePointerInteraction'
].map(p => ({ [p]: bindRenderObjs.linkProp(p)})));
const linkedRenderObjsMethods = Object.assign(...[
  'lights',
  'postProcessingComposer'
].map(p => ({ [p]: bindRenderObjs.linkMethod(p)})));

//

export default Kapsule({

  props: {
    onZoom: { triggerUpdate: false },
    onGlobeClick: { triggerUpdate: false },
    onGlobeRightClick: { triggerUpdate: false },
    pointLabel: { default: 'name', triggerUpdate: false },
    onPointClick: { triggerUpdate: false },
    onPointRightClick: { triggerUpdate: false },
    onPointHover: { triggerUpdate: false },
    arcLabel: { default: 'name', triggerUpdate: false },
    onArcClick: { triggerUpdate: false },
    onArcRightClick: { triggerUpdate: false },
    onArcHover: { triggerUpdate: false },
    polygonLabel: { default: 'name', triggerUpdate: false },
    onPolygonClick: { triggerUpdate: false },
    onPolygonRightClick: { triggerUpdate: false },
    onPolygonHover: { triggerUpdate: false },
    pathLabel: { default: 'name', triggerUpdate: false },
    onPathClick: { triggerUpdate: false },
    onPathRightClick: { triggerUpdate: false },
    onPathHover: { triggerUpdate: false },
    onHeatmapClick: { triggerUpdate: false },
    onHeatmapRightClick: { triggerUpdate: false },
    onHeatmapHover: { triggerUpdate: false },
    hexLabel: { triggerUpdate: false },
    onHexClick: { triggerUpdate: false },
    onHexRightClick: { triggerUpdate: false },
    onHexHover: { triggerUpdate: false },
    hexPolygonLabel: { triggerUpdate: false },
    onHexPolygonClick: { triggerUpdate: false },
    onHexPolygonRightClick: { triggerUpdate: false },
    onHexPolygonHover: { triggerUpdate: false },
    tileLabel: { default: 'name', triggerUpdate: false },
    onTileClick: { triggerUpdate: false },
    onTileRightClick: { triggerUpdate: false },
    onTileHover: { triggerUpdate: false },
    labelLabel: { triggerUpdate: false },
    onLabelClick: { triggerUpdate: false },
    onLabelRightClick: { triggerUpdate: false },
    onLabelHover: { triggerUpdate: false },
    objectLabel: { default: 'name', triggerUpdate: false },
    onObjectClick: { triggerUpdate: false },
    onObjectRightClick: { triggerUpdate: false },
    onObjectHover: { triggerUpdate: false },
    customLayerLabel: { default: 'name', triggerUpdate: false },
    onCustomLayerClick: { triggerUpdate: false },
    onCustomLayerRightClick: { triggerUpdate: false },
    onCustomLayerHover: { triggerUpdate: false },
    pointerEventsFilter: {
      default: () => true,
      triggerUpdate: false,
      onChange: (filterFn, state) => state.renderObjs.hoverFilter(obj => filterFn(obj, obj.__data))
    },
    lineHoverPrecision: {
      default: 0.2,
      triggerUpdate: false,
      onChange: (val, state) => state.renderObjs.lineHoverPrecision(val)
    },
    ...linkedGlobeProps,
    ...linkedRenderObjsProps
  },

  methods: {
    pauseAnimation: function(state) {
      if (state.animationFrameRequestId !== null) {
        cancelAnimationFrame(state.animationFrameRequestId);
        state.animationFrameRequestId = null;
      }
      state.globe?.pauseAnimation();
      return this;
    },
    resumeAnimation: function(state) {
      if (state.animationFrameRequestId === null) {
        this._animationCycle();
      }
      state.globe?.resumeAnimation();
      return this;
    },
    _animationCycle(state) {
      // Frame cycle
      state.renderObjs.tick();
      state.animationFrameRequestId = requestAnimationFrame(this._animationCycle);
    },
    pointOfView: function(state, geoCoords = {}, transitionDuration = 0) {
      const curGeoCoords = getGeoCoords();

      // Getter
      if (geoCoords.lat === undefined && geoCoords.lng === undefined && geoCoords.altitude === undefined) {
        return curGeoCoords;
      } else { // Setter
        const finalGeoCoords = Object.assign({}, curGeoCoords, geoCoords);
        ['lat', 'lng', 'altitude'].forEach(p => finalGeoCoords[p] = +finalGeoCoords[p]); // coerce coords to number
        
        if (!transitionDuration) { // no animation
          setCameraPos(finalGeoCoords);
        } else {
          // Avoid rotating more than 180deg longitude
          while ((curGeoCoords.lng - finalGeoCoords.lng) > 180) curGeoCoords.lng -= 360;
          while ((curGeoCoords.lng - finalGeoCoords.lng) < -180) curGeoCoords.lng += 360;

          new TWEEN.Tween(curGeoCoords)
            .to(finalGeoCoords, transitionDuration)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(setCameraPos)
            .start();
        }
        return this;
      }

      //

      function getGeoCoords() {
        return state.globe.toGeoCoords(state.renderObjs.cameraPosition());
      }

      function setCameraPos({ lat, lng, altitude }) {
        state.renderObjs.cameraPosition(state.globe.getCoords(lat, lng, altitude));
      }
    },
    getScreenCoords: (state, ...geoCoords) => {
      const cartesianCoords = state.globe.getCoords(...geoCoords);
      return state.renderObjs.getScreenCoords(cartesianCoords.x, cartesianCoords.y, cartesianCoords.z);
    },
    toGlobeCoords: (state, x, y) => {
      const globeIntersects = state.renderObjs.intersectingObjects(x, y).find(d => d.object.__globeObjType === 'globe');
      if (!globeIntersects) return null; // coords outside globe

      const { lat, lng } = state.globe.toGeoCoords(globeIntersects.point);
      return { lat, lng };
    },
    scene: state => state.renderObjs.scene(), // Expose scene
    camera: state => state.renderObjs.camera(), // Expose camera
    renderer: state => state.renderObjs.renderer(), // Expose renderer
    controls: state => state.renderObjs.controls(), // Expose controls
    _destructor: function(state) {
      state.globe._destructor();
      this.pauseAnimation();
      this.pointsData([]);
      this.arcsData([]);
      this.polygonsData([]);
      this.pathsData([]);
      this.heatmapsData([]);
      this.hexBinPointsData([]);
      this.hexPolygonsData([]);
      this.tilesData([]);
      this.labelsData([]);
      this.htmlElementsData([]);
      this.objectsData([]);
      this.customLayerData([]);
    },
    ...linkedGlobeMethods,
    ...linkedRenderObjsMethods
  },

  stateInit: ({ rendererConfig, waitForGlobeReady = true, ...globeInitConfig }) => {
    const globe = new ThreeGlobe({ waitForGlobeReady, ...globeInitConfig });
    return {
      globe,
      renderObjs: ThreeRenderObjects({
        controlType: 'orbit',
        rendererConfig,
        waitForLoadComplete: waitForGlobeReady,
        extraRenderers: [new THREE.CSS2DRenderer()] // Used in HTML elements layer
      })
        .skyRadius(globe.getGlobeRadius() * 500)
        .showNavInfo(false)
        .objects([globe]) // Populate scene
        .lights([
          new THREE.AmbientLight(0xcccccc, Math.PI),
          new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI),
        ])
    };
  },

  init: function(domNode, state) {
    // Wipe DOM
    domNode.innerHTML = '';

    // Add relative container
    domNode.appendChild(state.container = document.createElement('div'));
    state.container.style.position = 'relative';

    // Add renderObjs
    const roDomNode = document.createElement('div');
    state.container.appendChild(roDomNode);
    state.renderObjs(roDomNode);

    // inject renderer size on three-globe
    state.globe.rendererSize(state.renderObjs.renderer().getSize(new THREE.Vector2()));

    // set initial distance
    this.pointOfView({ altitude: 2.5 });

    // calibrate orbit controls
    const globeR = state.globe.getGlobeRadius();
    const controls = state.renderObjs.controls();
    controls.minDistance = globeR * 1.01; // just above the surface
    controls.maxDistance = globeR * 100;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.3;
    controls.zoomSpeed = 0.3;
    controls.addEventListener('change', () => {
      // adjust controls speed based on altitude
      const pov = this.pointOfView();
      controls.rotateSpeed = pov.altitude * 0.2; // Math.pow(pov.altitude + 1, 2) * 0.025;
      controls.zoomSpeed = (pov.altitude + 1) * 0.1; // Math.sqrt(pov.altitude) * 0.2;

      // Update three-globe pov when camera moves, for proper hiding of elements
      state.globe.setPointOfView(state.renderObjs.camera().position);

      state.onZoom && state.onZoom(pov);
    });

    // config renderObjs
    const getGlobeObj = object => {
      let obj = object;
      // recurse up object chain until finding the globe object
      while (obj && !obj.hasOwnProperty('__globeObjType')) {
        obj = obj.parent;
      }
      return obj;
    };

    const dataAccessors = {
      point: d => d,
      arc: d => d,
      polygon: d => d.data,
      path: d => d,
      heatmap: d => d,
      hexbin: d => d,
      hexPolygon: d => d,
      tile: d => d,
      label: d => d,
      object: d => d,
      custom: d => d
    };

    state.renderObjs.renderer().useLegacyLights = false; // force behavior of three < 155
    state.renderObjs
      .hoverOrderComparator((a, b) => {
        const aObj = getGlobeObj(a);
        const bObj = getGlobeObj(b);

        // de-prioritize background / non-globe objects
        const isBackground = o => !o; // || o.__globeObjType === 'globe' || o.__globeObjType === 'atmosphere';
        return isBackground(aObj) - isBackground(bObj);
      })
      .tooltipContent(obj => {
        const objAccessors = {
          point: state.pointLabel,
          arc: state.arcLabel,
          polygon: state.polygonLabel,
          path: state.pathLabel,
          hexbin: state.hexLabel,
          hexPolygon: state.hexPolygonLabel,
          tile: state.tileLabel,
          label: state.labelLabel,
          object: state.objectLabel,
          custom: state.customLayerLabel
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj && globeObj.__globeObjType;

        return globeObj && objType && objAccessors.hasOwnProperty(objType) && dataAccessors.hasOwnProperty(objType)
          ? accessorFn(objAccessors[objType])(dataAccessors[objType](globeObj.__data)) || ''
          : '';
      })
      .onHover(obj => {
        // Update tooltip and trigger onHover events
        const hoverObjFns = {
          point: state.onPointHover,
          arc: state.onArcHover,
          polygon: state.onPolygonHover,
          path: state.onPathHover,
          heatmap: state.onHeatmapHover,
          hexbin: state.onHexHover,
          hexPolygon: state.onHexPolygonHover,
          tile: state.onTileHover,
          label: state.onLabelHover,
          object: state.onObjectHover,
          custom: state.onCustomLayerHover
        };

        const clickObjFns = {
          globe: state.onGlobeClick,
          point: state.onPointClick,
          arc: state.onArcClick,
          polygon: state.onPolygonClick,
          path: state.onPathClick,
          heatmap: state.onHeatmapClick,
          hexbin: state.onHexClick,
          hexPolygon: state.onHexPolygonClick,
          tile: state.onTileClick,
          label: state.onLabelClick,
          object: state.onObjectClick,
          custom: state.onCustomLayerClick
        };

        let hoverObj = getGlobeObj(obj);

        // ignore non-recognised obj types
        hoverObj && !hoverObjFns.hasOwnProperty(hoverObj.__globeObjType) && (hoverObj = null);

        if (hoverObj !== state.hoverObj) {
          const prevObjType = state.hoverObj ? state.hoverObj.__globeObjType : null;
          const prevObjData = state.hoverObj ? dataAccessors[prevObjType](state.hoverObj.__data) : null;
          const objType = hoverObj ? hoverObj.__globeObjType : null;
          const objData = hoverObj ? dataAccessors[objType](hoverObj.__data) : null;
          if (prevObjType && prevObjType !== objType) {
            // Hover out
            hoverObjFns[prevObjType] && hoverObjFns[prevObjType](null, prevObjData);
          }
          if (objType) {
            // Hover in
            hoverObjFns[objType] && hoverObjFns[objType](objData, prevObjType === objType ? prevObjData : null);
          }

          // set pointer if hovered object is clickable
          state.renderObjs.renderer().domElement.classList[(objType && clickObjFns[objType]) ? 'add' : 'remove']('clickable');

          state.hoverObj = hoverObj;
        }
      })
      .onClick((obj, ev, point) => {
        if (!obj) return; // ignore background clicks

        // Handle click events on objects
        const objFns = {
          globe: state.onGlobeClick,
          point: state.onPointClick,
          arc: state.onArcClick,
          polygon: state.onPolygonClick,
          path: state.onPathClick,
          heatmap: state.onHeatmapClick,
          hexbin: state.onHexClick,
          hexPolygon: state.onHexPolygonClick,
          tile: state.onTileClick,
          label: state.onLabelClick,
          object: state.onObjectClick,
          custom: state.onCustomLayerClick
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj.__globeObjType;
        if (globeObj && objFns.hasOwnProperty(objType) && objFns[objType]) {
          const args = [ev];

          // include click coords
          if (objType === 'globe') {
            const { lat, lng } = this.toGeoCoords(point);
            args.unshift({ lat, lng });
          } else {
            args.push(this.toGeoCoords(point));
          }

          dataAccessors.hasOwnProperty(objType) && args.unshift(dataAccessors[objType](globeObj.__data));
          objFns[objType](...args);
        }
      })
      .onRightClick((obj, ev, point) => {
        if (!obj) return; // ignore background clicks

        // Handle right-click events
        const objFns = {
          globe: state.onGlobeRightClick,
          point: state.onPointRightClick,
          arc: state.onArcRightClick,
          polygon: state.onPolygonRightClick,
          path: state.onPathRightClick,
          heatmap: state.onHeatmapRightClick,
          hexbin: state.onHexRightClick,
          hexPolygon: state.onHexPolygonRightClick,
          tile: state.onTileRightClick,
          label: state.onLabelRightClick,
          object: state.onObjectRightClick,
          custom: state.onCustomLayerRightClick
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj.__globeObjType;
        if (globeObj && objFns.hasOwnProperty(objType) && objFns[objType]) {
          const args = [ev];

          // include click coords
          if (objType === 'globe') {
            const { lat, lng } = this.toGeoCoords(point);
            args.unshift({ lat, lng });
          } else {
            args.push(this.toGeoCoords(point));
          }

          dataAccessors.hasOwnProperty(objType) && args.unshift(dataAccessors[objType](globeObj.__data));
          objFns[objType](...args);
        }
      });

    //

    // Kick-off renderer
    this._animationCycle();
  }
});