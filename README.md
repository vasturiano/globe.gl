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
| <b>rendererConfig</b>: <i>object</i> | Configuration parameters to pass to the [ThreeJS WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) constructor. | `{ alpha: true }` |

### Container layout
| Method | Description | Default |
| --- | --- | :--: |
| <b>width</b>([<i>px</i>]) | Getter/setter for the canvas width. | *&lt;window width&gt;* |
| <b>height</b>([<i>px</i>]) | Getter/setter for the canvas height. | *&lt;window height&gt;* |
| <b>backgroundColor</b>([<i>str</i>]) | Getter/setter for the background color. | `#000011` |
| <b>globeImageUrl</b>([<i>string</i>]) | Getter/setter for the URL of the image used in the material that wraps the globe. If no image is provided, the globe is represented as a black sphere. | `null` |

### Points Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>pointsData</b>([<i>array</i>]) | Getter/setter for the list of points to represent in the points map layer. Each point is displayed as a cylindrical 3D object rising perpendicular from the surface of the globe. | `[]` |
| <b>pointLabel</b>([<i>str</i> or <i>fn</i>]) <br/> | Point object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>pointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center latitude coordinate. | `lat` |
| <b>pointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center longitude coordinate. | `lat` |
| <b>pointColor</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for the cylinder color. | `() => '#ffffaa'` |
| <b>pointHeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). | `0.1` |
| <b>pointRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. | `0.25` |
| <b>pointResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. | 12 |
| <b>pointsMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>onPointClick</b>(<i>fn</i>) | Callback function for point (left-button) clicks. The point object is included as single argument `onPointClick(point)`. | - |
| <b>onPointRightClick</b>(<i>fn</i>) | Callback function for point right-clicks. The point object is included as single argument `onPointRightClick(point)`. | - |
| <b>onPointHover</b>(<i>fn</i>) | Callback function for point mouse over events. The point object (or `null` if there's no point under the mouse line of sight) is included as the first argument, and the previous point object (or null) as second argument: `onPointHover(point, prevPoint)`. | - |


### Custom Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>customLayerData</b>([<i>array</i>]) | Getter/setter for the list of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. | `[]` |
| <b>customThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). The callback method's signature includes the object item as well as the globe radius: `customThreeObject((item, globeRadius) => { ... })`. | `null` |

### Render control
| Method | Description | Default |
| --- | --- | :--: |
| <b>pauseAnimation</b>() <br/><sub>(alias: <i>stopAnimation</i>)</sub> | Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | |
| <b>resumeAnimation</b>() | Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. | |
| <b>cameraPosition</b>([<i>{x,y,z}</i>], [<i>lookAt</i>], [<i>ms</i>]) | Getter/setter for the camera position, in terms of `x`, `y`, `z` coordinates. Each of the coordinates is optional, allowing for motion in just some dimensions. The optional second argument can be used to define the direction that the camera should aim at, in terms of an `{x,y,z}` point in the 3D space. The 3rd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. | By default the camera will face the center of the globe at a sensible `z` distance. |
| <b>scene</b>() | Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). Can be used to extend the current scene with additional objects not related to globe.gl. | |
| <b>camera</b>() | Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). | |
| <b>renderer</b>() | Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). ||
| <b>controls</b>() | Access the internal ThreeJS [orbit controls object](https://threejs.org/docs/#examples/controls/OrbitControls). ||

### Utility
| Method | Description |
| --- | --- |
| <b>getCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` euclidean spatial coordinates. ||
