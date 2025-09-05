import { Object3D, Light, Scene, Camera, WebGLRenderer, WebGLRendererParameters } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ThreeGlobeGeneric, ConfigOptions as ThreeGlobeConfigOptions } from 'three-globe';

export interface ConfigOptions extends ThreeGlobeConfigOptions {
  rendererConfig?: WebGLRendererParameters
}

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;

type Label = string | HTMLElement;

interface HexBin {
  points: object[],
  sumWeight: number,
  center: { lat: number, lng: number }
}

interface GeoCoords {
  lat: number;
  lng: number;
  altitude: number;
}

type PointerEventsFilterFn = (object: Object3D, data?: object) => boolean;

// don't surface these internal props from inner ThreeGlobe
type ExcludedInnerProps = 'setPointOfView' | 'pauseAnimation' | 'resumeAnimation';

interface GlobeGenericInstance<ChainableInstance>
  extends Omit<ThreeGlobeGeneric<ChainableInstance>, ExcludedInnerProps> {

  resetProps(): ChainableInstance;
  _destructor(): void;

  // Container layout
  width(): number;
  width(width: number): ChainableInstance;
  height(): number;
  height(height: number): ChainableInstance;
  globeOffset(): [number, number];
  globeOffset(offset: [number, number]): ChainableInstance;
  backgroundColor(): string;
  backgroundColor(color: string): ChainableInstance;
  backgroundImageUrl(): string | null;
  backgroundImageUrl(url: string | null): ChainableInstance;

  // Labels
  pointLabel(): ObjAccessor<Label>;
  pointLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  arcLabel(): ObjAccessor<Label>;
  arcLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  polygonLabel(): ObjAccessor<Label>;
  polygonLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  pathLabel(): ObjAccessor<Label>;
  pathLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  hexLabel(): Accessor<HexBin, Label>;
  hexLabel(textAccessor: Accessor<HexBin, Label>): ChainableInstance;
  tileLabel(): ObjAccessor<Label>;
  tileLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  particleLabel(): ObjAccessor<Label>;
  particleLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  labelLabel(): ObjAccessor<Label>;
  labelLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  objectLabel(): ObjAccessor<Label>;
  objectLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;
  customLayerLabel(): ObjAccessor<Label>;
  customLayerLabel(textAccessor: ObjAccessor<Label>): ChainableInstance;

  // Interaction events
  onGlobeClick(callback: (coords: { lat: number, lng: number }, event: MouseEvent) => void): ChainableInstance;
  onGlobeRightClick(callback: (coords: { lat: number, lng: number }, event: MouseEvent) => void): ChainableInstance;
  onPointClick(callback: (point: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPointRightClick(callback: (point: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPointHover(callback: (point: object | null, prevPoint: object | null) => void): ChainableInstance;
  onArcClick(callback: (arc: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onArcRightClick(callback: (arc: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onArcHover(callback: (arc: object | null, prevArc: object | null) => void): ChainableInstance;
  onPolygonClick(callback: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPolygonRightClick(callback: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPolygonHover(callback: (polygon: object | null, prevPolygon: object | null) => void): ChainableInstance;
  onPathClick(callback: (path: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPathRightClick(callback: (path: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onPathHover(callback: (path: object | null, prevPath: object | null) => void): ChainableInstance;
  onHeatmapClick(callback: (heatmap: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHeatmapRightClick(callback: (heatmap: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHeatmapHover(callback: (heatmap: object | null, prevHeatmap: object | null) => void): ChainableInstance;
  onHexClick(callback: (hex: HexBin, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHexRightClick(callback: (hex: HexBin, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHexHover(callback: (hex: HexBin | null, prevHex: HexBin | null) => void): ChainableInstance;
  onHexPolygonClick(callback: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHexPolygonRightClick(callback: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onHexPolygonHover(callback: (polygon: object | null, prevPolygon: object | null) => void): ChainableInstance;
  onTileClick(callback: (tile: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onTileRightClick(callback: (tile: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onParticleHover(callback: (particle: object | null, prevParticle: object | null) => void): ChainableInstance;
  onParticleClick(callback: (particle: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onParticleRightClick(callback: (particle: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onTileHover(callback: (tile: object | null, prevTile: object | null) => void): ChainableInstance;
  onLabelClick(callback: (label: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onLabelRightClick(callback: (label: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onLabelHover(callback: (label: object | null, prevLabel: object | null) => void): ChainableInstance;
  onObjectClick(callback: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onObjectRightClick(callback: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onObjectHover(callback: (obj: object | null, prevObj: object | null) => void): ChainableInstance;
  onCustomLayerClick(callback: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onCustomLayerRightClick(callback: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void): ChainableInstance;
  onCustomLayerHover(callback: (obj: object | null, prevObj: object | null) => void): ChainableInstance;

  // Render control
  pointOfView(): GeoCoords;
  pointOfView(pov: { lat?: number, lng?: number, altitude?: number }, transitionMs?: number): ChainableInstance;
  pauseAnimation(): ChainableInstance;
  resumeAnimation(): ChainableInstance;
  enablePointerInteraction(): boolean;
  enablePointerInteraction(enable: boolean): ChainableInstance;
  pointerEventsFilter(): PointerEventsFilterFn;
  pointerEventsFilter(filterFn: PointerEventsFilterFn): ChainableInstance;
  lineHoverPrecision(): number;
  lineHoverPrecision(precision: number): ChainableInstance;
  showPointerCursor(): boolean | ((objType: string, objData: object) => boolean);
  showPointerCursor(objAccessor: boolean | ((objType: string, objData: object) => boolean)): ChainableInstance;
  onZoom(callback: (pov: GeoCoords) => void): ChainableInstance;
  lights(): Light[];
  lights(lights: Light[]): ChainableInstance;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  postProcessingComposer(): EffectComposer;
  controls(): OrbitControls;

  // Utility
  getScreenCoords(lat: number, lng: number, altitude?: number): { x: number, y: number };
  toGlobeCoords(x: number, y: number): { lat: number, lng: number} | null;
}

export type GlobeInstance = GlobeGenericInstance<GlobeInstance>;

declare const Globe: {
  new(element: HTMLElement, configOptions?: ConfigOptions): GlobeInstance;
}

export default Globe;
