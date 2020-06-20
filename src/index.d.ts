import { Scene, Camera, WebGLRenderer, WebGLRendererParameters } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ThreeGlobeGeneric, ConfigOptions as ThreeGlobeConfigOptions } from 'three-globe';

export interface ConfigOptions extends ThreeGlobeConfigOptions {
  rendererConfig?: WebGLRendererParameters
}

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;

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

export interface GlobeGenericInstance<ChainableInstance> extends ThreeGlobeGeneric<ChainableInstance> {
  (element: HTMLElement): ChainableInstance;
  resetProps(): ChainableInstance;
  _destructor(): void;

  // Container layout
  width(): number;
  width(width: number): ChainableInstance;
  height(): number;
  height(height: number): ChainableInstance;
  backgroundColor(): string;
  backgroundColor(color: string): ChainableInstance;
  backgroundImageUrl(): string | null;
  backgroundImageUrl(url: string | null): ChainableInstance;

  // Labels
  pointLabel(): ObjAccessor<string>;
  pointLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  arcLabel(): ObjAccessor<string>;
  arcLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  polygonLabel(): ObjAccessor<string>;
  polygonLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  pathLabel(): ObjAccessor<string>;
  pathLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  hexLabel(): Accessor<HexBin, string>;
  hexLabel(textAccessor: Accessor<HexBin, string>): ChainableInstance;
  labelLabel(): ObjAccessor<string>;
  labelLabel(textAccessor: ObjAccessor<string>): ChainableInstance;
  customLayerLabel(): ObjAccessor<string>;
  customLayerLabel(textAccessor: ObjAccessor<string>): ChainableInstance;

  // Interaction events
  onPointClick(callback: (point: object) => void): ChainableInstance;
  onPointRightClick(callback: (point: object) => void): ChainableInstance;
  onPointHover(callback: (point: object | null, prevPoint: object | null) => void): ChainableInstance;
  onArcClick(callback: (arc: object) => void): ChainableInstance;
  onArcRightClick(callback: (arc: object) => void): ChainableInstance;
  onArcHover(callback: (arc: object | null, prevArc: object | null) => void): ChainableInstance;
  onPolygonClick(callback: (polygon: object) => void): ChainableInstance;
  onPolygonRightClick(callback: (polygon: object) => void): ChainableInstance;
  onPolygonHover(callback: (polygon: object | null, prevPolygon: object | null) => void): ChainableInstance;
  onPathClick(callback: (path: object) => void): ChainableInstance;
  onPathRightClick(callback: (path: object) => void): ChainableInstance;
  onPathHover(callback: (path: object | null, prevPath: object | null) => void): ChainableInstance;
  onHexClick(callback: (hex: HexBin) => void): ChainableInstance;
  onHexRightClick(callback: (hex: HexBin) => void): ChainableInstance;
  onHexHover(callback: (hex: HexBin | null, prevHex: HexBin | null) => void): ChainableInstance;
  onHexPolygonClick(callback: (polygon: object) => void): ChainableInstance;
  onHexPolygonRightClick(callback: (polygon: object) => void): ChainableInstance;
  onHexPolygonHover(callback: (polygon: object | null, prevPolygon: object | null) => void): ChainableInstance;
  onLabelClick(callback: (label: object) => void): ChainableInstance;
  onLabelRightClick(callback: (label: object) => void): ChainableInstance;
  onLabelHover(callback: (label: object | null, prevLabel: object | null) => void): ChainableInstance;
  onCustomLayerClick(callback: (obj: object) => void): ChainableInstance;
  onCustomLayerRightClick(callback: (obj: object) => void): ChainableInstance;
  onCustomLayerHover(callback: (obj: object | null, prevObj: object | null) => void): ChainableInstance;

  // Render control
  pointOfView(): GeoCoords;
  pointOfView(pov: { lat?: number, lng?: number, altitude?: number }, transitionMs?: number): ChainableInstance;
  pauseAnimation(): ChainableInstance;
  resumeAnimation(): ChainableInstance;
  enablePointerInteraction(): boolean;
  enablePointerInteraction(enable: boolean): ChainableInstance;
  onZoom(callback: (pov: GeoCoords) => void): ChainableInstance;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  postProcessingComposer(): EffectComposer;
  controls(): object;

  // Utility
  getScreenCoords(lat: number, lng: number, altitude?: number): { x: number, y: number };
}

export type GlobeInstance = GlobeGenericInstance<GlobeInstance>;

declare function Globe(configOptions?: ConfigOptions): GlobeInstance;

export default Globe;
