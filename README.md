# Globe.GL

[![NPM](https://nodei.co/npm/globe.gl.png?compact=true)](https://nodei.co/npm/globe.gl/)

<p align="center">
     <a href="//vasturiano.github.io/globe.gl/example/world-population/"><img width="100%" src="https://vasturiano.github.io/globe.gl/example/world-population/sshot.png"></a>
</p>

A web component to represent data visualization layers on a 3-dimensional globe in a spherical projection.
This library is a convenience wrapper around the [three-globe](https://github.com/vasturiano/three-globe) plugin, and uses [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL for 3D rendering.

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
| <b>pointAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). | 0.1 |
| <b>pointRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. | 0.25 |
| <b>pointResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. | 12 |
| <b>pointsMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>pointsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate point changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New objects are animated by scaling them from the ground up. Only works if `pointsMerge` is disabled. | 1000 |
| <b>onPointClick</b>(<i>fn</i>) | Callback function for point (left-button) clicks. The point object is included as single argument: `onPointClick(point)`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointRightClick</b>(<i>fn</i>) | Callback function for point right-clicks. The point object is included as single argument: `onPointRightClick(point)`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointHover</b>(<i>fn</i>) | Callback function for point mouse over events. The point object (or `null` if there's no point under the mouse line of sight) is included as the first argument, and the previous point object (or `null`) as second argument: `onPointHover(point, prevPoint)`. Only works if `pointsMerge` is disabled. | - |

### Arcs Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>arcsData</b>([<i>array</i>]) | Getter/setter for the list of links to represent in the arcs map layer. Each link is displayed as an arc line that rises from the surface of the globe, connecting the start and end coordinates. | `[]` |
| <b>arcLabel</b>([<i>str</i> or <i>fn</i>]) | Arc object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>arcStartLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start latitude coordinate. | `startLat` |
| <b>arcStartLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start longitude coordinate. | `startLng` |
| <b>arcEndLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end latitude coordinate. | `endLat` |
| <b>arcEndLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end longitude coordinate. | `endLng` |
| <b>arcColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Arc object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors. | `() => '#ffffaa'` |
| <b>arcAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the arc's maximum altitude (ocurring at the half-way distance between the two points) in terms of globe radius units (`0` = 0 altitude (ground line), `1` = globe radius). If a value of `null` or `undefined` is used, the altitude is automatically set proportionally to the distance between the two points, according to the scale set in `arcAltitudeAutoScale`.  | `null` |
| <b>arcAltitudeAutoScale</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the scale of the arc's automatic altitude, in terms of units of the great-arc distance between the two points. A value of `1` indicates the arc should be as high as its length on the ground. Only applicable if `arcAltitude` is not set. | 0.5 |
| <b>arcStroke</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry) is used. | `null` |
| <b>arcCurveResolution</b>([<i>num</i>]) | Getter/setter for the arc's curve resolution, expressed in how many straight line segments to divide the curve by. Higher values yield smoother curves. | 64 |
| <b>arcCircularResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each line, expressed in how many slice segments to divide the tube's circumference. Only applicable when using Tube geometries (defined `arcStroke`). | 6 |
| <b>arcDashLength</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the dashed segments in the arc, in terms of relative length of the whole line (`1` = full line length). | 1 |
| <b>arcDashGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. | 0 |
| <b>arcDashInitialGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. | 0 |
| <b>arcDashAnimateTime</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. | 0 |
| <b>arcsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate arc changes involving geometry modifications. A value of `0` will move the arcs immediately to their final position. New arcs are animated by rising them from the ground up. | 1000 |
| <b>onArcClick</b>(<i>fn</i>) | Callback function for arc (left-button) clicks. The arc object is included as single argument: `onArcClick(arc)`. | - |
| <b>onArcRightClick</b>(<i>fn</i>) | Callback function for arc right-clicks. The arc object is included as single argument: `onArcRightClick(arc)`. | - |
| <b>onArcHover</b>(<i>fn</i>) | Callback function for arc mouse over events. The arc object (or `null` if there's no arc under the mouse line of sight) is included as the first argument, and the previous arc object (or `null`) as second argument: `onArcHover(arc, prevArc)`. | - |

### Polygons Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>polygonsData</b>([<i>array</i>]) | Getter/setter for the list of polygon shapes to represent in the polygons map layer. Each polygon is displayed as a shaped cone that extrudes from the surface of the globe. | `[]` |
| <b>polygonLabel</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>polygonGeoJsonGeometry</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. | `geometry` |
| <b>polygonCapColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the top surface. | `() => '#ffffaa'` |
| <b>polygonSideColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the cone sides. | `() => '#ffffaa'` |
| <b>polygonAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or a numeric constant for the polygon cone's altitude in terms of globe radius units (`0` = 0 altitude (flat polygon), `1` = globe radius). | 0.1 |
| <b>polygonsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate polygon altitude changes. A value of `0` will size the cone immediately to their final altitude. New polygons are animated by rising them from the ground up. | 1000 |
| <b>onPolygonClick</b>(<i>fn</i>) | Callback function for polygon (left-button) clicks. The polygon object is included as single argument: `onPolygonClick(polygon)`. | - |
| <b>onPolygonRightClick</b>(<i>fn</i>) | Callback function for polygon right-clicks. The polygon object is included as single argument: `onPolygonRightClick(polygon)`. | - |
| <b>onPolygonHover</b>(<i>fn</i>) | Callback function for polygon mouse over events. The polygon object (or `null` if there's no polygon under the mouse line of sight) is included as the first argument, and the previous polygon object (or `null`) as second argument: `onPolygonHover(polygon, prevPolygon)`. | - |

### Hex Bin Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>hexBinPointsData</b>([<i>array</i>]) | Getter/setter for the list of points to aggregate using the hex bin map layer. Each point is added to an hexagonal prism 3D object that represents all the points within a tesselated portion of the space. | `[]` |
| <b>hexLabel</b>([<i>str</i> or <i>fn</i>]) | Hex object accessor function or attribute for label (shown as tooltip). An hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Supports plain text or HTML content. | - |
| <b>hexBinPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the latitude coordinate. | `lat` |
| <b>hexBinPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the longitude coordinate. | `lng` |
| <b>hexBinPointWeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the weight of the point. Weights for points in the same bin are summed and determine the hexagon default altitude. | 1 |
| <b>hexRadius</b>([<i>num</i>]) | The radius of the hexagons that tesselate the globe's surface. The radius is specified in terms of degrees of the globe's great circle perimeter. | 0.25 |
| <b>hexMargin</b>([<i>num</i> or <i>fn</i>]) | The radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons and serve only a visual purpose, as the data points within the margin still contribute to the hexagon's data. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexMargin(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | 0.2 |
| <b>hexAltitude</b>([<i>num</i> or <i>fn</i>]) | The altitude of each hexagon, in terms of globe radius units (`0` = 0 altitude (flat hexagon), `1` = globe radius). This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexAltitude(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | `({ sumWeight }) => sumWeight * 0.01` |
| <b>hexColor</b>([<i>fn</i>]) | Accessor method for each hexagon's color. The method should follow the signature: `hexColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. | `() => '#ffffaa'` |
| <b>hexBinMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the hexagon meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>hexTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate hexagon changes related to geometry modifications (altitude, radius). A value of `0` will move the hexagons immediately to their final position. New hexagons are animated by scaling them from the ground up. Only works if `hexBinMerge` is disabled. | 1000 |
| <b>onHexClick</b>(<i>fn</i>) | Callback function for hexagon (left-button) clicks. The hex object including all points binned is included as single argument: `onHexClick({ points, sumWeight, center: { lat, lng } })`. Only works if `hexBinMerge` is disabled. | - |
| <b>onHexRightClick</b>(<i>fn</i>) | Callback function for hexagon right-clicks. The hex object including all points binned is included as single argument: `onHexRightClick({ points, sumWeight, center: { lat, lng } })`. Only works if `hexBinMerge` is disabled. | - |
| <b>onHexHover</b>(<i>fn</i>) | Callback function for hexagon mouse over events. The hex object (or `null` if there's no hex under the mouse line of sight) is included as the first argument, and the previous hex object (or `null`) as second argument: `onHexHover(hex, prevHex)`. Each hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Only works if `hexBinMerge` is disabled. | - |

### Labels Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>labelsData</b>([<i>array</i>]) | Getter/setter for the list of label objects to represent in the labels map layer. | `[]` |
| <b>labelLabel</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for its own tooltip label. Supports plain text or HTML content. | - |
| <b>labelLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the latitude coordinate. | `lat` |
| <b>labelLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the longitude coordinate. | `lng` |
| <b>labelText</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the label text. | `text` |
| <b>labelColor</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the label color. | `() => 'lightgrey'` |
| <b>labelAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label altitude in terms of globe radius units. | 0 |
| <b>labelSize</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label text height, in angular degrees. | 0.5 |
| <b>labelTypeFace</b>([<i>typeface </i>]) | Getter/setter for the text font typeface JSON object. Supports any typeface font generated by [Facetype.js](http://gero3.github.io/facetype.js/). | [helvetiker regular](https://github.com/mrdoob/three.js/blob/dev/examples/fonts/helvetiker_regular.typeface.json) |
| <b>labelRotation</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the label rotation in degrees. The rotation is performed clockwise along the axis of its latitude parallel plane. | 0 |
| <b>labelResolution</b>([<i>num</i>]) | Getter/setter for the text geometric resolution of each label, expressed in how many segments to use in the text curves. Higher values yield smoother labels. | 3 |
| <b>labelIncludeDot</b>([<i>bool</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a boolean constant for whether to include a dot marker next to the text indicating the exact `lat`, `lng` coordinates of the label. If enabled the text will be rendered offset from the dot. | `true` |
| <b>labelDotRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Label object accessor function, attribute or a numeric constant for the radius of the dot marker, in angular degrees. | 0.1 |
| <b>labelDotOrientation</b>([<i>str</i> or <i>fn</i>]) | Label object accessor function or attribute for the orientation of the label if the dot marker is present. Possible values are `right`, `top` and `bottom`. | `() => 'bottom'` |
| <b>labelsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate label changes involving position modifications (`lat`, `lng`, `altitude`, `rotation`). A value of `0` will move the labels immediately to their final position. New labels are animated by scaling their size. | 1000 |
| <b>onLabelClick</b>(<i>fn</i>) | Callback function for label (left-button) clicks. The label object is included as single argument: `onlabelClick(label)`. | - |
| <b>onLabelRightClick</b>(<i>fn</i>) | Callback function for label right-clicks. The label object is included as single argument: `onlabelRightClick(label)`. | - |
| <b>onLabelHover</b>(<i>fn</i>) | Callback function for label mouse over events. The label object (or `null` if there's no label under the mouse line of sight) is included as the first argument, and the previous label object (or `null`) as second argument: `onlabelHover(label, prevlabel)`. | - |

### Custom Layer
| Method | Description | Default |
| --- | --- | :--: |
| <b>customLayerData</b>([<i>array</i>]) | Getter/setter for the list of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. | `[]` |
| <b>customLayerLabel</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>customThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). The callback method's signature includes the object's data as well as the globe radius: `customThreeObject((objData, globeRadius) => { ... })`. | `null` |
| <b>customThreeObjectUpdate</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for updating an existing custom 3d object with new data. This can be used for performance improvement on data updates as the objects don't need to be removed and recreated at each update. The callback method's signature includes the object to be update, its new data and the globe radius: `customThreeObjectUpdate((obj, objData, globeRadius) => { ... })`. | `null` |
| <b>onCustomLayerClick</b>(<i>fn</i>) | Callback function for custom object (left-button) clicks. The custom object is included as single argument: `onCustomLayerClick(obj)`. | - |
| <b>onCustomLayerRightClick</b>(<i>fn</i>) | Callback function for custom object right-clicks. The custom object is included as single argument: `onCustomLayerRightClick(obj)`. | - |
| <b>onCustomLayerHover</b>(<i>fn</i>) | Callback function for custom object mouse over events. The custom object (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous custom object (or `null`) as second argument: `onCustomLayerHover(obj, prevObj)`. | - |

### Render control
| Method | Description | Default |
| --- | --- | :--: |
| <b>pointOfView</b>({ <i>lat</i>, <i>lng</i>, <i>altitude</i> }, [<i>ms</i>]) | Getter/setter for the camera position, in terms of geographical `lat`, `lng`, `altitude` coordinates. Each of the coordinates is optional, allowing for motion in just some direction. The 2nd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. | By default the camera will aim at the cross between the equator and the prime meridian (`0,0` coordinates), at an altitude of `2.5` globe radii. |
| <b>pauseAnimation</b>() | Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | |
| <b>resumeAnimation</b>() | Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. | |
| <b>enablePointerInteraction</b>([<i>boolean</i>]) | Getter/setter for whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your globe performance it's recommended to switch off this property. | `true` |
| <b>scene</b>() | Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). Can be used to extend the current scene with additional objects not related to globe.gl. | |
| <b>camera</b>() | Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). | |
| <b>renderer</b>() | Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). ||
| <b>controls</b>() | Access the internal ThreeJS [orbit controls object](https://threejs.org/docs/#examples/controls/OrbitControls). ||

### Utility
| Method | Description |
| --- | --- |
| <b>getCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` cartesian spatial coordinates. ||
| <b>toGeoCoords</b>({ <i>x</i>, <i>y</i>, <i>z</i>) | Utility method to translate cartesian coordinates to the geographic domain. Given a set of 3D cartesian coordinates `{x, y, z}`, returns the equivalent `{lat, lng, altitude}` spherical coordinates. Altitude is defined in terms of globe radius units. ||

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!
