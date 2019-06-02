import { AmbientLight, DirectionalLight } from 'three';

const three = window.THREE
  ? window.THREE // Prefer consumption from global THREE, if exists
  : { AmbientLight, DirectionalLight };

import ThreeGlobe from 'three-globe';
import ThreeRenderObjects from 'three-render-objects';

import accessorFn from 'accessor-fn';
import Kapsule from 'kapsule';
import TWEEN from '@tweenjs/tween.js';

import linkKapsule from './kapsule-link.js';

//

// Expose config from ThreeGlobe
const bindGlobe = linkKapsule('globe', ThreeGlobe);
const linkedGlobeProps = Object.assign(...[
  'globeImageUrl',
  'bumpImageUrl',
  'showAtmosphere',
  'showGraticules',
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
  'polygonSideColor',
  'polygonAltitude',
  'polygonsTransitionDuration',
  'hexBinPointsData',
  'hexBinPointLat',
  'hexBinPointLng',
  'hexBinPointWeight',
  'hexRadius',
  'hexMargin',
  'hexColor',
  'hexAltitude',
  'hexBinMerge',
  'hexTransitionDuration',
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
  'customLayerData',
  'customThreeObject',
  'customThreeObjectUpdate'
].map(p => ({ [p]: bindGlobe.linkProp(p)})));
const linkedGlobeMethods = Object.assign(...[
  'getCoords',
  'toGeoCoords'
].map(p => ({ [p]: bindGlobe.linkMethod(p)})));

// Expose config from renderObjs
const bindRenderObjs = linkKapsule('renderObjs', ThreeRenderObjects);
const linkedRenderObjsProps = Object.assign(...[
  'width',
  'height',
  'backgroundColor',
  'enablePointerInteraction'
].map(p => ({ [p]: bindRenderObjs.linkProp(p)})));

//

export default Kapsule({

  props: {
    pointLabel: { default: 'name', triggerUpdate: false },
    onPointClick: { default: () => {}, triggerUpdate: false },
    onPointRightClick: { default: () => {}, triggerUpdate: false },
    onPointHover: { default: () => {}, triggerUpdate: false },
    arcLabel: { default: 'name', triggerUpdate: false },
    onArcClick: { default: () => {}, triggerUpdate: false },
    onArcRightClick: { default: () => {}, triggerUpdate: false },
    onArcHover: { default: () => {}, triggerUpdate: false },
    polygonLabel: { default: 'name', triggerUpdate: false },
    onPolygonClick: { default: () => {}, triggerUpdate: false },
    onPolygonRightClick: { default: () => {}, triggerUpdate: false },
    onPolygonHover: { default: () => {}, triggerUpdate: false },
    hexLabel: { triggerUpdate: false },
    onHexClick: { default: () => {}, triggerUpdate: false },
    onHexRightClick: { default: () => {}, triggerUpdate: false },
    onHexHover: { default: () => {}, triggerUpdate: false },
    labelLabel: { triggerUpdate: false },
    onLabelClick: { default: () => {}, triggerUpdate: false },
    onLabelRightClick: { default: () => {}, triggerUpdate: false },
    onLabelHover: { default: () => {}, triggerUpdate: false },
    customLayerLabel: { default: 'name', triggerUpdate: false },
    onCustomLayerClick: { default: () => {}, triggerUpdate: false },
    onCustomLayerRightClick: { default: () => {}, triggerUpdate: false },
    onCustomLayerHover: { default: () => {}, triggerUpdate: false },
    ...linkedGlobeProps,
    ...linkedRenderObjsProps
  },

  methods: {
    pauseAnimation: function(state) {
      if (state.animationFrameRequestId !== null) {
        cancelAnimationFrame(state.animationFrameRequestId);
        state.animationFrameRequestId = null;
      }
      return this;
    },
    resumeAnimation: function(state) {
      if (state.animationFrameRequestId === null) {
        this._animationCycle();
      }
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

        if (!transitionDuration) { // no animation
          setCameraPos(finalGeoCoords);
        } else {
          // Avoid rotating more than 180deg longitude
          while ((curGeoCoords.lng - finalGeoCoords.lng) > 180) curGeoCoords.lng -= 360;
          while ((curGeoCoords.lng - finalGeoCoords.lng) < -180) curGeoCoords.lng += 360;

          console.log(curGeoCoords.lng - finalGeoCoords.lng);

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
    scene: state => state.renderObjs.scene(), // Expose scene
    camera: state => state.renderObjs.camera(), // Expose camera
    renderer: state => state.renderObjs.renderer(), // Expose renderer
    controls: state => state.renderObjs.controls(), // Expose controls
    _destructor: function() {
      this.pauseAnimation();
      this.pointsData([]);
      this.arcsData([]);
      this.polygonsData([]);
      this.hexBinPointsData([]);
      this.labelsData([]);
      this.customLayerData([]);
    },
    ...linkedGlobeMethods
  },

  stateInit: ({ rendererConfig, animateIn }) => ({
    globe: new ThreeGlobe({ animateIn }),
    renderObjs: ThreeRenderObjects({ controlType: 'orbit', rendererConfig })
      .showNavInfo(false)
  }),

  init: function(domNode, state) {
    // Wipe DOM
    domNode.innerHTML = '';

    // Add relative container
    domNode.appendChild(state.container = document.createElement('div'));
    state.container.style.position = 'relative';

    const GLOBE_RADIUS = 100;

    // Add renderObjs
    const roDomNode = document.createElement('div');
    state.container.appendChild(roDomNode);
    state.renderObjs(roDomNode);

    // set initial distance
    this.pointOfView({ altitude: 2.5 });

    // calibrate orbit controls
    const controls = state.renderObjs.controls();
    controls.minDistance = GLOBE_RADIUS * 1.01; // just above the surface
    controls.maxDistance = GLOBE_RADIUS * 100;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.1;
    controls.zoomSpeed = 0.3;

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
      hexbin: d => d,
      label: d => d,
      custom: d => d
    };

    state.renderObjs
      .objects([ // Populate scene
        new three.AmbientLight(0xbbbbbb),
        new three.DirectionalLight(0xffffff, 0.6),
        state.globe
      ])
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
          hexbin: state.hexLabel,
          label: state.labelLabel,
          custom: state.customLayerLabel
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj.__globeObjType;

        return globeObj && objAccessors.hasOwnProperty(objType) && dataAccessors.hasOwnProperty(objType)
          ? accessorFn(objAccessors[objType])(dataAccessors[objType](globeObj.__data)) || ''
          : '';
      })
      .onHover(obj => {
        // Update tooltip and trigger onHover events
        const hoverObjFns = {
          point: state.onPointHover,
          arc: state.onArcHover,
          polygon: state.onPolygonHover,
          hexbin: state.onHexHover,
          label: state.onLabelHover,
          custom: state.onCustomLayerHover
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
            hoverObjFns[prevObjType](null, prevObjData);
          }
          if (objType) {
            // Hover in
            hoverObjFns[objType](objData, prevObjType === objType ? prevObjData : null);
          }

          state.hoverObj = hoverObj;
        }
      })
      .onClick(obj => {
        // Handle click events on objects
        const objFns = {
          point: state.onPointClick,
          arc: state.onArcClick,
          polygon: state.onPolygonClick,
          hexbin: state.onHexClick,
          label: state.onLabelClick,
          custom: state.onCustomLayerClick
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj.__globeObjType;
        if (globeObj && objFns.hasOwnProperty(objType) && dataAccessors.hasOwnProperty(objType)) {
          objFns[objType](dataAccessors[objType](globeObj.__data));
        }
      })
      .onRightClick(obj => {
        // Handle right-click events
        const objFns = {
          point: state.onPointRightClick,
          arc: state.onArcRightClick,
          polygon: state.onPolygonRightClick,
          hexbin: state.onHexRightClick,
          label: state.onLabelRightClick,
          custom: state.onCustomLayerRightClick
        };

        const globeObj = getGlobeObj(obj);
        const objType = globeObj.__globeObjType;
        if (globeObj && objFns.hasOwnProperty(objType) && dataAccessors.hasOwnProperty(objType)) {
          objFns[objType](dataAccessors[objType](globeObj.__data));
        }
      });

    //

    // Kick-off renderer
    this._animationCycle();
  }
});