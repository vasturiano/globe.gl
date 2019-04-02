# Globe.GL

[![NPM](https://nodei.co/npm/globe.gl.png?compact=true)](https://nodei.co/npm/globe.gl/)

<p align="center">
     <a href="//vasturiano.github.io/globe.gl/example/world-population/"><img width="100%" src="https://vasturiano.github.io/globe.gl/example/world-population/sshot.png"></a>
</p>

A web component to represent data visualization layers on a 3-dimensional globe in spherical projection.
This library is a convenience wrapper around the [three-globe](https://github.com/vasturiano/three-globe) plugin, and uses [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL for 3D rendering.
Largely inspired by the [WebGL Globe](https://experiments.withgoogle.com/chrome/globe).

Check out the examples:
* [Basic](https://vasturiano.github.io/globe.gl/example/basic/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/basic/index.html))
* [World Population](https://vasturiano.github.io/globe.gl/example/world-population/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/world-population/index.html))
* [Arc Links](https://vasturiano.github.io/globe.gl/example/arcs/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/arcs/index.html))

## Quick start

```
import Globe from 'globe.gl';
```
or
```
const Globe = require('globe.gl');
```
or even
```
<script src="//unpkg.com/globe.gl"></script>
```
then
```
const myGlobe = Globe();
myGlobe(<myDOMElement>)
  .globeImageUrl(<imageUrl>)
  .pointsData(<myData>);
```

## API reference

### Initialisation
```
Globe({ configOptions })(<domElement>)
```
| Config options | Description | Default |
| --- | --- | :--: |
| <b>rendererConfig</b>: <i>object</i> | Configuration parameters to pass to the [ThreeJS WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) constructor. | `{ antialias: true, alpha: true }` |
| <b>animateIn</b>: <i>boolean</i> | Whether to animate the globe initialization, by scaling and rotating the globe into its inital position. | `true` |

### Container layout
| Method | Description | Default |
| --- | --- | :--: |
| <b>width</b>([<i>px</i>]) | Getter/setter for the canvas width. | *&lt;window width&gt;* |
| <b>height</b>([<i>px</i>]) | Getter/setter for the canvas height. | *&lt;window height&gt;* |
| <b>backgroundColor</b>([<i>str</i>]) | Getter/setter for the background color. | `#000011` |

### Globe Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>globeImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used in the material that wraps the globe. If no image is provided, the globe is represented as a black sphere. | `null` |
| <b>bumpImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used to create a [bump map](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.bumpMap) in the material, to represent the globe's terrain. | `null` |
| <b>showAtmosphere</b>([<i>boolean</i>]) | Getter/setter for whether to show a bright halo surrounding the globe, representing the atmosphere. | `true` |
| <b>showGraticules</b>([<i>boolean</i>]) | Getter/setter for whether to show a graticule grid demarking latitude and longitude lines at every 10 degrees. | `false` |

### Points Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>pointsData</b>([<i>array</i>]) | Getter/setter for the list of points to represent in the points map layer. Each point is displayed as a cylindrical 3D object rising perpendicularly from the surface of the globe. | `[]` |
| <b>pointLabel</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>pointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center latitude coordinate. | `lat` |
| <b>pointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center longitude coordinate. | `lat` |
| <b>pointColor</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for the cylinder color. | `() => '#ffffaa'` |
| <b>pointAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). | `0.1` |
| <b>pointRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. | `0.25` |
| <b>pointResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. | 12 |
| <b>pointsMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>pointsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate point changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New objects are animated by scaling them from the ground up. Only works if `pointsMerge=false`. | `1000` |
| <b>onPointClick</b>(<i>fn</i>) | Callback function for point (left-button) clicks. The point object is included as single argument `onPointClick(point)`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointRightClick</b>(<i>fn</i>) | Callback function for point right-clicks. The point object is included as single argument `onPointRightClick(point)`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointHover</b>(<i>fn</i>) | Callback function for point mouse over events. The point object (or `null` if there's no point under the mouse line of sight) is included as the first argument, and the previous point object (or null) as second argument: `onPointHover(point, prevPoint)`. Only works if `pointsMerge` is disabled. | - |

### Arcs Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>arcsData</b>([<i>array</i>]) | Getter/setter for the list of links to represent in the arcs map layer. Each link is displayed as an arc line that rises from the surface of the globe, connecting the start to the end coordinates. | `[]` |
| <b>arcLabel</b>([<i>str</i> or <i>fn</i>]) | Arc object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>arcStartLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start latitude coordinate. | `startLat` |
| <b>arcStartLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start longitude coordinate. | `startLng` |
| <b>arcEndLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end latitude coordinate. | `endLat` |
| <b>arcEndLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end longitude coordinate. | `endLng` |
| <b>arcColor</b>([<i>str</i> or <i>fn</i>]) | Arc object accessor function or attribute for the line's color. | `() => '#ffffaa'` |
| <b>arcAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the arc's maximum altitude (ocurring at the half-way distance between the two points) in terms of globe radius units (`0` = 0 altitude (ground line), `1` = globe radius). If a value of `null` or `undefined` is used, the altitude is automatically set proportionally to the distance between the two points, according to the scale set in `arcAltitudeAutoScale`.  | `null` |
| <b>arcAltitudeAutoScale</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the scale of the arc's automatic altitude, in terms of units of the great-arc distance between the two points. A value of `1` indicates the arc should be as high as its length on the ground. Only applicable if `arcAltitude` is not set. | `0.5` |
| <b>arcStroke</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry) is used. | `null` |
| <b>arcCurveResolution</b>([<i>num</i>]) | Getter/setter for the arc's curve resolution, expressed in how many straight line segments to divide the curve by. Higher values yield smoother curves. | 64 |
| <b>arcCircularResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each line, expressed in how many slice segments to divide the tube's circumference. Only applicable when using Tube geometries (defined `arcStroke`). | 6 |
| <b>arcsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate arc changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New arcs are animated by rising them from the ground up. | `1000` |
| <b>onArcClick</b>(<i>fn</i>) | Callback function for arc (left-button) clicks. The arc object is included as single argument `onArcClick(arc)`. | - |
| <b>onArcRightClick</b>(<i>fn</i>) | Callback function for arc right-clicks. The arc object is included as single argument `onArcRightClick(arc)`. | - |
| <b>onArcHover</b>(<i>fn</i>) | Callback function for arc mouse over events. The arc object (or `null` if there's no arc under the mouse line of sight) is included as the first argument, and the previous arc object (or null) as second argument: `onArcHover(arc, prevArc)`. | - |

### Custom Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>customLayerData</b>([<i>array</i>]) | Getter/setter for the list of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. | `[]` |
| <b>customLayerLabel</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>customThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). The callback method's signature includes the object's data as well as the globe radius: `customThreeObject((objData, globeRadius) => { ... })`. | `null` |
| <b>customThreeObjectUpdate</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for updating an existing custom 3d object with new data. This can be used for performance improvement on data updates as the objects don't need to be removed and recreated at each update. The callback method's signature includes the object to be update, its new data and the globe radius: `customThreeObjectUpdate((obj, objData, globeRadius) => { ... })`. | `null` |
| <b>onCustomLayerClick</b>(<i>fn</i>) | Callback function for custom object (left-button) clicks. The custom object is included as single argument `onCustomLayerClick(obj)`. | - |
| <b>onCustomLayerRightClick</b>(<i>fn</i>) | Callback function for custom object right-clicks. The custom object is included as single argument `onCustomLayerRightClick(obj)`. | - |
| <b>onCustomLayerHover</b>(<i>fn</i>) | Callback function for custom object mouse over events. The custom object (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous custom object (or null) as second argument: `onCustomLayerHover(obj, prevObj)`. | - |

### Render control
| Method | Description | Default |
| --- | --- | :--: |
| <b>pointOfView</b>({ <i>lat</i>, <i>lng</i>, <i>altitude</i>}, [<i>ms</i>]) | Getter/setter for the camera position, in terms of geographical `lat`, `lng`, `altitude` coordinates. Each of the coordinates is optional, allowing for motion in just some direction. The 2nd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. | By default the camera will aim at the cross between the equator and the prime meridian, at an altitude of `2.5` globe radii. |
| <b>pauseAnimation</b>() | Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | |
| <b>resumeAnimation</b>() | Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. | |
| <b>enablePointerInteraction</b>([<i>boolean</i>]) | Getter/setter for whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your chart performance it's recommended to switch off this property. | `true` |
| <b>scene</b>() | Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). Can be used to extend the current scene with additional objects not related to globe.gl. | |
| <b>camera</b>() | Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). | |
| <b>renderer</b>() | Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). ||
| <b>controls</b>() | Access the internal ThreeJS [orbit controls object](https://threejs.org/docs/#examples/controls/OrbitControls). ||

### Utility
| Method | Description | Default |
| --- | --- | :--: |
| <b>getCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` cartesian spatial coordinates. ||
| <b>toGeoCoords</b>({ <i>x</i>, <i>y</i>, <i>z</i>) | Utility method to translate cartesian coordinates to the geographic domain. Given a set of 3D cartesian coordinates `{x, y, z}`, returns the equivalent `{lat, lng, altitude}` spherical coordinates. Altitude is defined in terms of globe radius units. ||
