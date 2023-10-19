Globe.GL
========

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/world-population/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/world-population/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/airline-routes/us-international-outbound.html"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/airline-routes/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/countries-population/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/countries-population/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/submarine-cables/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/submarine-cables/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/hexed-polygons/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/hexed-polygons/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/world-cities/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/world-cities/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/population-heatmap/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/population-heatmap/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/clouds/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/clouds/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/satellites/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/satellites/preview.png"></a>
   <a href="//vasturiano.github.io/globe.gl/example/moon-landing-sites/"><img width="48%" src="https://vasturiano.github.io/globe.gl/example/moon-landing-sites/preview.png"></a>
</p>

A web component to represent data visualization layers on a 3-dimensional globe in a spherical projection.
This library is a convenience wrapper around the [three-globe](https://github.com/vasturiano/three-globe) plugin, and uses [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL for 3D rendering.

See also the [AR version](https://github.com/vasturiano/globe-ar).

And check out the [React bindings](https://github.com/vasturiano/react-globe.gl).

## Examples

* [Basic](https://vasturiano.github.io/globe.gl/example/basic/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/basic/index.html))
* [Arc Links](https://vasturiano.github.io/globe.gl/example/random-arcs/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/random-arcs/index.html))
* [Highlight links](https://vasturiano.github.io/globe.gl/example/airline-routes/highlight-links.html) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/airline-routes/highlight-links.html))
* [Choropleth](https://vasturiano.github.io/globe.gl/example/choropleth-countries/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/choropleth-countries/index.html))
* [Elevated Polygons](https://vasturiano.github.io/globe.gl/example/countries-population/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/countries-population/index.html))
* [Hollow Globe](https://vasturiano.github.io/globe.gl/example/hollow-globe/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/hollow-globe/index.html))
* [Path Lines](https://vasturiano.github.io/globe.gl/example/random-paths/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/random-paths/index.html))
* [Heatmap](https://vasturiano.github.io/globe.gl/example/heatmap/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/heatmap/index.html))
* [Map Labels](https://vasturiano.github.io/globe.gl/example/world-cities/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/world-cities/index.html))
* [HTML Markers](https://vasturiano.github.io/globe.gl/example/html-markers/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/html-markers/index.html))
* [Hexed Country Polygons](https://vasturiano.github.io/globe.gl/example/hexed-polygons/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/hexed-polygons/index.html))
* [Tiles](https://vasturiano.github.io/globe.gl/example/tiles/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/tiles/index.html))
* [Ripple Rings](https://vasturiano.github.io/globe.gl/example/random-rings/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/random-rings/index.html))
* [Emit Arcs on Click](https://vasturiano.github.io/globe.gl/example/emit-arcs-on-click/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/emit-arcs-on-click/index.html))
* [Clouds](https://vasturiano.github.io/globe.gl/example/clouds/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/clouds/index.html))
* [Solar Terminator](https://vasturiano.github.io/globe.gl/example/solar-terminator/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/solar-terminator/index.html))
* [Custom Globe Styling](https://vasturiano.github.io/globe.gl/example/custom-globe-styling/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/custom-globe-styling/index.html))
* [Custom Layer](https://vasturiano.github.io/globe.gl/example/custom-layer/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/custom-layer/index.html))
* [World Population](https://vasturiano.github.io/globe.gl/example/world-population/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/world-population/index.html))
* [Population Heatmap](https://vasturiano.github.io/globe.gl/example/population-heatmap/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/population-heatmap/index.html))
* [Recent Earthquakes](https://vasturiano.github.io/globe.gl/example/earthquakes/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/earthquakes/index.html))
* [World Volcanoes](https://vasturiano.github.io/globe.gl/example/volcanoes/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/volcanoes/index.html))
* [Volcanoes Heatmap](https://vasturiano.github.io/globe.gl/example/volcanoes-heatmap/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/volcanoes-heatmap/index.html))
* [US outbound international airline routes](https://vasturiano.github.io/globe.gl/example/airline-routes/us-international-outbound.html) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/airline-routes/us-international-outbound.html))
* [Earth Shield](https://vasturiano.github.io/globe.gl/example/earth-shield/) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/earth-shield/index.html))
* [Satellites](https://vasturiano.github.io/globe.gl/example/satellites/index.html) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/satellites/index.html))
* [Submarine Cables](https://vasturiano.github.io/globe.gl/example/submarine-cables/index.html) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/submarine-cables/index.html))
* [Moon Landing Sites](https://vasturiano.github.io/globe.gl/example/moon-landing-sites/index.html) ([source](https://github.com/vasturiano/globe.gl/blob/master/example/moon-landing-sites/index.html))

## Quick start

```js
import Globe from 'globe.gl';
```
or using a *script* tag
```html
<script src="//unpkg.com/globe.gl"></script>
```
then
```js
const myGlobe = Globe();
myGlobe(myDOMElement)
  .globeImageUrl(myImageUrl)
  .pointsData(myData);
```

## API reference

* [Initialisation](#initialisation)
* [Container Layout](#container-layout)
* [Globe Layer](#globe-layer)
* [Points Layer](#points-layer)
* [Arcs Layer](#arcs-layer)
* [Polygons Layer](#polygons-layer)
* [Paths Layer](#paths-layer)
* [Heatmaps Layer](#heatmaps-layer)
* [Hex Bin Layer](#hex-bin-layer)
* [Hexed Polygons Layer](#hexed-polygons-layer)
* [Tiles Layer](#tiles-layer)
* [Rings Layer](#rings-layer)
* [Labels Layer](#labels-layer)
* [HTML Elements Layer](#html-elements-layer)
* [3D Objects Layer](#3d-objects-layer)
* [Custom Layer](#custom-layer)
* [Render Control](#render-control)
* [Utility](#utility)

### Initialisation

```js
Globe({ configOptions })(<domElement>)
```

| Config options | Description | Default |
| --- | --- | :--: |
| <b>rendererConfig</b>: <i>object</i> | Configuration parameters to pass to the [ThreeJS WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) constructor. | `{ antialias: true, alpha: true }` |
| <b>waitForGlobeReady</b>: <i>boolean</i> | Whether to wait until the globe wrapping or background image has been fully loaded before rendering the globe or any of the data layers. | `true` |
| <b>animateIn</b>: <i>boolean</i> | Whether to animate the globe initialization, by scaling and rotating the globe into its inital position. | `true` |

### Container Layout

| Method | Description | Default |
| --- | --- | :--: |
| <b>width</b>([<i>px</i>]) | Getter/setter for the canvas width. | *&lt;window width&gt;* |
| <b>height</b>([<i>px</i>]) | Getter/setter for the canvas height. | *&lt;window height&gt;* |
| <b>backgroundColor</b>([<i>str</i>]) | Getter/setter for the background color. | `#000011` |
| <b>backgroundImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image to be used as background to the globe. If no image is provided, the background color is shown instead. | `null` |

### Globe Layer

| Method | Description | Default |
| --- | --- | :--: |
| <b>globeImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used in the material that wraps the globe. If no image is provided, the globe is represented as a black sphere. | `null` |
| <b>bumpImageUrl</b>([<i>url</i>]) | Getter/setter for the URL of the image used to create a [bump map](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.bumpMap) in the material, to represent the globe's terrain. | `null` |
| <b>showGlobe</b>([<i>boolean</i>]) | Getter/setter for whether to show the globe surface itself. | `true` |
| <b>showGraticules</b>([<i>boolean</i>]) | Getter/setter for whether to show a graticule grid demarking latitude and longitude lines at every 10 degrees. | `false` |
| <b>showAtmosphere</b>([<i>boolean</i>]) | Getter/setter for whether to show a bright halo surrounding the globe, representing the atmosphere. | `true` |
| <b>atmosphereColor</b>([<i>str</i>]) | Getter/setter for the color of the atmosphere. | `lightskyblue` |
| <b>atmosphereAltitude</b>([<i>str</i>]) | Getter/setter for the max altitude of the atmosphere, in terms of globe radius units. | 0.15 |
| <b>globeMaterial</b>([<i>material</i>]) | Getter/setter of the ThreeJS material used to wrap the globe. Can be used for more advanced styling of the globe, like in [this example](https://github.com/vasturiano/globe.gl/blob/master/example/custom-globe-styling/index.html). | [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial) |
| <b>onGlobeReady</b>(<i>fn</i>) | Callback function to invoke immediately after the globe has been initialized and visible on the scene. | - |
| <b>onGlobeClick</b>(<i>fn</i>) | Callback function for (left-button) clicks on the globe. The clicked globe coordinates and the event object are included as arguments: `onGlobeClick({ lat, lng }, event)`. | - |
| <b>onGlobeRightClick</b>(<i>fn</i>) | Callback function for right-clicks on the globe. The clicked globe coordinates and the event object are included as arguments: `onGlobeRightClick({ lat, lng }, event)`. | - |

### Points Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/basic/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/basic/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>pointsData</b>([<i>array</i>]) | Getter/setter for the list of points to represent in the points map layer. Each point is displayed as a cylindrical 3D object rising perpendicularly from the surface of the globe. | `[]` |
| <b>pointLabel</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>pointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center latitude coordinate. | `lat` |
| <b>pointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's center longitude coordinate. | `lng` |
| <b>pointColor</b>([<i>str</i> or <i>fn</i>]) | Point object accessor function or attribute for the cylinder color. | `() => '#ffffaa'` |
| <b>pointAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). | 0.1 |
| <b>pointRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. | 0.25 |
| <b>pointResolution</b>([<i>num</i>]) | Getter/setter for the radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. | 12 |
| <b>pointsMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>pointsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate point changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New objects are animated by scaling them from the ground up. Only works if `pointsMerge` is disabled. | 1000 |
| <b>onPointClick</b>(<i>fn</i>) | Callback function for point (left-button) clicks. The point object, the event object and the clicked coordinates are included as arguments: `onPointClick(point, event, { lat, lng, altitude })`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointRightClick</b>(<i>fn</i>) | Callback function for point right-clicks. The point object, the event object and the clicked coordinates are included as arguments: `onPointRightClick(point, event, { lat, lng, altitude })`. Only works if `pointsMerge` is disabled. | - |
| <b>onPointHover</b>(<i>fn</i>) | Callback function for point mouse over events. The point object (or `null` if there's no point under the mouse line of sight) is included as the first argument, and the previous point object (or `null`) as second argument: `onPointHover(point, prevPoint)`. Only works if `pointsMerge` is disabled. | - |

### Arcs Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/random-arcs/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/random-arcs/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>arcsData</b>([<i>array</i>]) | Getter/setter for the list of links to represent in the arcs map layer. Each link is displayed as an arc line that rises from the surface of the globe, connecting the start and end coordinates. | `[]` |
| <b>arcLabel</b>([<i>str</i> or <i>fn</i>]) | Arc object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>arcStartLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start latitude coordinate. | `startLat` |
| <b>arcStartLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's start longitude coordinate. | `startLng` |
| <b>arcEndLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end latitude coordinate. | `endLat` |
| <b>arcEndLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Arc object accessor function, attribute or a numeric constant for the line's end longitude coordinate. | `endLng` |
| <b>arcColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Arc object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors, or a color interpolator function. | `() => '#ffffaa'` |
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
| <b>onArcClick</b>(<i>fn</i>) | Callback function for arc (left-button) clicks. The arc object, the event object and the clicked coordinates are included as arguments: `onArcClick(arc, event, { lat, lng, altitude })`. | - |
| <b>onArcRightClick</b>(<i>fn</i>) | Callback function for arc right-clicks. The arc object, the event object and the clicked coordinates are included as arguments: `onArcRightClick(arc, event, { lat, lng, altitude })`. | - |
| <b>onArcHover</b>(<i>fn</i>) | Callback function for arc mouse over events. The arc object (or `null` if there's no arc under the mouse line of sight) is included as the first argument, and the previous arc object (or `null`) as second argument: `onArcHover(arc, prevArc)`. | - |

### Polygons Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/choropleth-countries/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/choropleth-countries/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>polygonsData</b>([<i>array</i>]) | Getter/setter for the list of polygon shapes to represent in the polygons map layer. Each polygon is displayed as a shaped cone that extrudes from the surface of the globe. | `[]` |
| <b>polygonLabel</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>polygonGeoJsonGeometry</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. | `geometry` |
| <b>polygonCapColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the top surface. | `() => '#ffffaa'` |
| <b>polygonCapMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the top surface. This property takes precedence over `polygonCapColor`, which will be ignored if both are defined. | - |
| <b>polygonSideColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color of the cone sides. | `() => '#ffffaa'` |
| <b>polygonSideMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the cone sides. This property takes precedence over `polygonSideColor`, which will be ignored if both are defined. | - |
| <b>polygonStrokeColor</b>([<i>str</i> or <i>fn</i>]) | Polygon object accessor function or attribute for the color to stroke the polygon perimeter. A falsy value will disable the stroking. | - |
| <b>polygonAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or a numeric constant for the polygon cone's altitude in terms of globe radius units (`0` = 0 altitude (flat polygon), `1` = globe radius). | 0.01 |
| <b>polygonCapCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the cap surface curvature. The finer the resolution, the more the polygon is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>polygonsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate polygon altitude changes. A value of `0` will size the cone immediately to their final altitude. New polygons are animated by rising them from the ground up. | 1000 |
| <b>onPolygonClick</b>(<i>fn</i>) | Callback function for polygon (left-button) clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onPolygonClick(polygon, event, { lat, lng, altitude })`. | - |
| <b>onPolygonRightClick</b>(<i>fn</i>) | Callback function for polygon right-clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onPolygonRightClick(polygon, event, { lat, lng, altitude })`. | - |
| <b>onPolygonHover</b>(<i>fn</i>) | Callback function for polygon mouse over events. The polygon object (or `null` if there's no polygon under the mouse line of sight) is included as the first argument, and the previous polygon object (or `null`) as second argument: `onPolygonHover(polygon, prevPolygon)`. | - |

### Paths Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/random-paths/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/random-paths/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>pathsData</b>([<i>array</i>]) | Getter/setter for the list of lines to represent in the paths map layer. Each path is displayed as a line that connects all the coordinate pairs in the path array. | `[]` |
| <b>pathLabel</b>([<i>str</i> or <i>fn</i>]) | Path object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>pathPoints</b>([<i>array</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or an array for the set of points that define the path line. By default, each path point is assumed to be a 2-position array (`[<lat>, <lon>]`). This default behavior can be modified using the `pathPointLat` and `pathPointLng` methods. | `pnts => pnts` |
| <b>pathPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the latitude coordinate. | `arr => arr[0]` |
| <b>pathPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the longitude coordinate. | `arr => arr[1]` |
| <b>pathPointAlt</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path point object accessor function, attribute or a numeric constant for the point altitude, in terms of globe radius units (`0` = 0 altitude (ground), `1` = globe radius). | 0.001 |
| <b>pathResolution</b>([<i>num</i>]) | Getter/setter for the path's angular resolution, in lat/lng degrees. If the ground distance (excluding altitude) between two adjacent path points is larger than this value, the line segment will be interpolated in order to approximate the curvature of the sphere surface. Lower values yield more perfectly curved lines, at the cost of performance. | 2 |
| <b>pathColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Path object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors, or a color interpolator function. Transparent colors are not supported in Fat Lines with set width. | `() => '#ffffaa'` |
| <b>pathStroke</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [FatLine](https://github.com/vasturiano/three-fatline) is used. | `null` |
| <b>pathDashLength</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the dashed segments in the path line, in terms of relative length of the whole line (`1` = full line length). | 1 |
| <b>pathDashGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. | 0 |
| <b>pathDashInitialGap</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. | 0 |
| <b>pathDashAnimateTime</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Path object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. | 0 |
| <b>pathTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate path changes. A value of `0` will move the paths immediately to their final position. New paths are animated from start to end. | 1000 |
| <b>onPathClick</b>(<i>fn</i>) | Callback function for path (left-button) clicks. The path object, the event object and the clicked coordinates are included as arguments: `onPathClick(path, event, { lat, lng, altitude })`. | - |
| <b>onPathRightClick</b>(<i>fn</i>) | Callback function for path right-clicks. The path object, the event object and the clicked coordinates are included as arguments: `onPathRightClick(path, event, { lat, lng, altitude })`. | - |
| <b>onPathHover</b>(<i>fn</i>) | Callback function for path mouse over events. The path object (or `null` if there's no path under the mouse line of sight) is included as the first argument, and the previous path object (or `null`) as second argument: `onPathHover(path, prevPath)`. | - |

### Heatmaps Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/heatmap/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/heatmap/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>heatmapsData</b>([<i>array</i>]) | Getter/setter for the list of heatmap datasets to represent in the heatmaps map layer. Each set of points is represented as an individual global heatmap with varying color and/or altitude, according to the point density. It uses a [Gaussian KDE](https://en.wikipedia.org/wiki/Kernel_density_estimation) to perform the density estimation, based on the great-arc distance between points. | `[]` |
| <b>heatmapPoints</b>([<i>array</i>, <i>str</i> or <i>fn</i>]) | Heatmap object accessor function, attribute or an array for the set of points that define the heatmap. By default, each point is assumed to be a 2-position array (`[<lat>, <lon>]`). This default behavior can be modified using the `heatmapPointLat` and `heatmapPointLng` methods. | `pnts => pnts` |
| <b>heatmapPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap point object accessor function, attribute or a numeric constant for the latitude coordinate. | `arr => arr[0]` |
| <b>heatmapPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap point object accessor function, attribute or a numeric constant for the longitude coordinate. | `arr => arr[1]` |
| <b>heatmapPointWeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap point object accessor function, attribute or a numeric constant for the weight of the point. The weight of a point determines its influence on the density of the surrounding area. | 1 |
| <b>heatmapBandwidth</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap object accessor function, attribute or a numeric constant for the heatmap bandwidth, in angular degrees. The bandwidth is an internal parameter of the [Gaussian kernel function](https://en.wikipedia.org/wiki/Gaussian_function) and defines how localized is the influence of a point on distant locations. A narrow bandwidth leads to a more spiky representation, while a broad one has smoother curves. | 4 |
| <b>heatmapColorFn</b>([<i>str</i> or <i>fn</i>]) | Heatmap object accessor function or attribute for the color interpolator function to represent density in the heatmap. This function should receive a number between `0` and `1` (or potentially higher if saturation > 1), and return a color string. | [Turbo colormap](https://blog.research.google/2019/08/turbo-improved-rainbow-colormap-for.html) interpolator with fading opacity |
| <b>heatmapColorSaturation</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap object accessor function, attribute or a numeric constant for the color scale saturation. The saturation is a multiplier of the normalized density value (`[0,1]`) before passing it to the color interpolation function. It can be used to dampen outlier peaks in density and bring the data floor into view. | 1.5 |
| <b>heatmapBaseAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap object accessor function, attribute or a numeric constant for the heatmap base floor altitude in terms of globe radius units (`0` = 0 altitude, `1` = globe radius). | 0.01 |
| <b>heatmapTopAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Heatmap object accessor function, attribute or a numeric constant for the heatmap top peak altitude in terms of globe radius units (`0` = 0 altitude, `1` = globe radius). An equal value to the base altitude will yield a surface flat heatmap. If a top altitude is set, the variations in density will be used to define the altitude curves between base and top. | - |
| <b>heatmapsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate heatmap changes. A value of `0` will set the heatmap colors/altitudes immediately in their final position. New heatmaps are animated by rising them from the ground up and gently fading in through the color scale. | 0 |
| <b>onHeatmapClick</b>(<i>fn</i>) | Callback function for heatmap (left-button) clicks. The heatmap object, the event object and the clicked coordinates are included as arguments: `onHeatmapClick(heatmap, event, { lat, lng, altitude })`. | - |
| <b>onHeatmapRightClick</b>(<i>fn</i>) | Callback function for heatmap right-clicks. The heatmap object, the event object and the clicked coordinates are included as arguments: `onHeatmapRightClick(heatmap, event, { lat, lng, altitude })`. | - |
| <b>onHeatmapHover</b>(<i>fn</i>) | Callback function for heatmap mouse over events. The heatmap object (or `null` if there's no heatmap under the mouse line of sight) is included as the first argument, and the previous heatmap object (or `null`) as second argument: `onHeatmapHover(heatmap, prevHeatmap)`. | - |

### Hex Bin Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/earthquakes/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/earthquakes/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>hexBinPointsData</b>([<i>array</i>]) | Getter/setter for the list of points to aggregate using the hex bin map layer. Each point is added to an hexagonal prism 3D object that represents all the points within a tesselated portion of the space. | `[]` |
| <b>hexLabel</b>([<i>str</i> or <i>fn</i>]) | Hex object accessor function or attribute for label (shown as tooltip). An hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Supports plain text or HTML content. | - |
| <b>hexBinPointLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the latitude coordinate. | `lat` |
| <b>hexBinPointLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the longitude coordinate. | `lng` |
| <b>hexBinPointWeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Point object accessor function, attribute or a numeric constant for the weight of the point. Weights for points in the same bin are summed and determine the hexagon default altitude. | 1 |
| <b>hexBinResolution</b>([<i>num</i>]) | The geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. | 4 |
| <b>hexMargin</b>([<i>num</i> or <i>fn</i>]) | The radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons and serve only a visual purpose, as the data points within the margin still contribute to the hexagon's data. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexMargin(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | 0.2 |
| <b>hexAltitude</b>([<i>num</i> or <i>fn</i>]) | The altitude of each hexagon, in terms of globe radius units (`0` = 0 altitude (flat hexagon), `1` = globe radius). This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexAltitude(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. | `({ sumWeight }) => sumWeight * 0.01` |
| <b>hexTopCurvatureResolution</b>([<i>num</i>]) | The resolution (in angular degrees) of the top surface curvature. The finer the resolution, the more the top area is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>hexTopColor</b>([<i>fn</i>]) | Accessor method for each hexagon's top color. The method should follow the signature: `hexTopColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. | `() => '#ffffaa'` |
| <b>hexSideColor</b>([<i>fn</i>]) | Accessor method for each hexagon's side color. The method should follow the signature: `hexSideColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. | `() => '#ffffaa'` |
| <b>hexBinMerge</b>([<i>boolean</i>]) | Getter/setter for whether to merge all the hexagon meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. | `false` |
| <b>hexTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate hexagon changes related to geometry modifications (altitude, radius). A value of `0` will move the hexagons immediately to their final position. New hexagons are animated by scaling them from the ground up. Only works if `hexBinMerge` is disabled. | 1000 |
| <b>onHexClick</b>(<i>fn</i>) | Callback function for hexagon (left-button) clicks. The hex object including all points binned, the event object and the clicked coordinates are included as arguments: `onHexClick({ points, sumWeight, center: { lat, lng } }, event, { lat, lng, altitude })`. Only works if `hexBinMerge` is disabled. | - |
| <b>onHexRightClick</b>(<i>fn</i>) | Callback function for hexagon right-clicks. The hex object including all points binned, the event object and the clicked coordinates are included as arguments: `onHexRightClick({ points, sumWeight, center: { lat, lng } }, event, { lat, lng, altitude })`. Only works if `hexBinMerge` is disabled. | - |
| <b>onHexHover</b>(<i>fn</i>) | Callback function for hexagon mouse over events. The hex object (or `null` if there's no hex under the mouse line of sight) is included as the first argument, and the previous hex object (or `null`) as second argument: `onHexHover(hex, prevHex)`. Each hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Only works if `hexBinMerge` is disabled. | - |

### Hexed Polygons Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/hexed-polygons/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/hexed-polygons/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>hexPolygonsData</b>([<i>array</i>]) | Getter/setter for the list of polygon shapes to represent in the hexed polygons map layer. Each polygon is displayed as a tesselated group of hexagons that approximate the polygons shape according to the resolution specified in `hexPolygonResolution`. | `[]` |
| <b>hexPolygonLabel</b>([<i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>hexPolygonGeoJsonGeometry</b>([<i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. | `geometry` |
| <b>hexPolygonColor</b>([<i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function or attribute for the color of each hexagon in the polygon. | `() => '#ffffaa'` |
| <b>hexPolygonAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the polygon's hexagons altitude in terms of globe radius units (`0` = 0 altitude, `1` = globe radius). | 0.001 |
| <b>hexPolygonResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. | 3 |
| <b>hexPolygonMargin</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons within a polygon. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. | 0.2 |
| <b>hexPolygonUseDots</b>([<i>boolean</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a boolean constant for whether to represent each polygon point as a circular dot instead of an hexagon. | `false` |
| <b>hexPolygonCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of each hexed polygon surface curvature. The finer the resolution, the more the polygon hexes are fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>hexPolygonDotResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Hexed polygon object accessor function, attribute or a numeric constant for the resolution of each circular dot, expressed in how many slice segments to divide the circumference. Higher values yield smoother circles, at the cost of performance. This is only applicable in dot representation mode. | 12 |
| <b>hexPolygonsTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate hexed polygons altitude and margin changes. A value of `0` will move the hexagons immediately to their final state. New hexed polygons are animated by sizing each hexagon from `0` radius. | 0 |
| <b>onHexPolygonClick</b>(<i>fn</i>) | Callback function for hexed polygon (left-button) clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onHexPolygonClick(polygon, event, { lat, lng, altitude })`. | - |
| <b>onHexPolygonRightClick</b>(<i>fn</i>) | Callback function for hexed polygon right-clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onHexPolygonRightClick(polygon, event, { lat, lng, altitude })`. | - |
| <b>onHexPolygonHover</b>(<i>fn</i>) | Callback function for hexed polygon mouse over events. The polygon object (or `null` if there's no polygon under the mouse line of sight) is included as the first argument, and the previous polygon object (or `null`) as second argument: `onHexPolygonHover(polygon, prevPolygon)`. | - |

### Tiles Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/tiles/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/tiles/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>tilesData</b>([<i>array</i>]) | Getter/setter for the list of tiles to represent in the tiles map layer. Each tile is displayed as a spherical surface segment. The segments can be placed side-by-side for a tiled surface and each can be styled separately. | `[]` |
| <b>tileLabel</b>([<i>str</i> or <i>fn</i>]) | Tile object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>tileLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's centroid latitude coordinate. | `lat` |
| <b>tileLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's centroid longitude coordinate. | `lng` |
| <b>tileAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's altitude in terms of globe radius units. | 0.01 |
| <b>tileWidth</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's longitudinal width, in angular degrees. | 1 |
| <b>tileHeight</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the segment's latitudinal height, in angular degrees. | 1 |
| <b>tileUseGlobeProjection</b>([<i>boolean</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a boolean constant for whether to use the globe's projection to shape the segment to its relative tiled position (`true`), or break free from this projection and shape the segment as if it would be laying directly on the equatorial perimeter (`false`). | `true` |
| <b>tileMaterial</b>([<i>material</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) used to style the segment's surface. | `() => new MeshLambertMaterial({ color: '#ffbb88' })` |
| <b>tileCurvatureResolution</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Tile object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the surface curvature. The finer the resolution, the more the tile geometry is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. | 5 |
| <b>tilesTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate tile changes involving geometry modifications. A value of `0` will move the tiles immediately to their final position. New tiles are animated by scaling them from the centroid outwards. | 1000 |
| <b>onTileClick</b>(<i>fn</i>) | Callback function for tile (left-button) clicks. The tile object, the event object and the clicked coordinates are included as arguments: `onTileClick(tile, event, { lat, lng, altitude })`. | - |
| <b>onTileRightClick</b>(<i>fn</i>) | Callback function for tile right-clicks. The tile object, the event object and the clicked coordinates are included as arguments: `onTileRightClick(tile, event, { lat, lng, altitude })`. | - |
| <b>onTileHover</b>(<i>fn</i>) | Callback function for tile mouse over events. The tile object (or `null` if there's no tile under the mouse line of sight) is included as the first argument, and the previous tile object (or `null`) as second argument: `onTileHover(tile, prevTile)`. | - |

### Rings Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/random-rings/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/random-rings/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>ringsData</b>([<i>array</i>]) | Getter/setter for the list of self-propagating ripple rings to represent in the rings map layer. Each data point is displayed as an animated set of concentric circles that propagate outwards from (or inwards to) a central point through the spherical surface. | `[]` |
| <b>ringLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for each circle's center latitude coordinate. | `lat` |
| <b>ringLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for each circle's center longitude coordinate. | `lng` |
| <b>ringAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for the circle's altitude in terms of globe radius units. | 0.0015 |
| <b>ringColor</b>([<i>str</i>, <i>[str, ...]</i> or <i>fn</i>]) | Ring object accessor function or attribute for the stroke color of each ring. Also supports radial color gradients by passing an array of colors, or a color interpolator function. | `() => '#ffffaa'` |
| <b>ringResolution</b>([<i>num</i>]) | Getter/setter for the geometric resolution of each circle, expressed in how many slice segments to divide the circumference. Higher values yield smoother circles. | 64 |
| <b>ringMaxRadius</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for the maximum outer radius of the circles, at which the rings stop propagating and are removed. Defined in angular degrees. | 2 |
| <b>ringPropagationSpeed</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for the propagation velocity of the rings, defined in degrees/second. Setting a negative value will invert the direction and cause the rings to propagate inwards from the `maxRadius`. | 1 |
| <b>ringRepeatPeriod</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Ring object accessor function, attribute or a numeric constant for the interval of time (in ms) to wait between consecutive auto-generated concentric circles. A value less or equal than `0` will disable the repetition and emit a single ring. | 700 |

### Labels Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/world-cities/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/world-cities/preview.png"></a>
</p>

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
| <b>onLabelClick</b>(<i>fn</i>) | Callback function for label (left-button) clicks. The label object, the event object and the clicked coordinates are included as arguments: `onLabelClick(label, event, { lat, lng, altitude })`. | - |
| <b>onLabelRightClick</b>(<i>fn</i>) | Callback function for label right-clicks. The label object, the event object and the clicked coordinates are included as arguments: `onLabelRightClick(label, event, { lat, lng, altitude })`. | - |
| <b>onLabelHover</b>(<i>fn</i>) | Callback function for label mouse over events. The label object (or `null` if there's no label under the mouse line of sight) is included as the first argument, and the previous label object (or `null`) as second argument: `onLabelHover(label, prevlabel)`. | - |

### HTML Elements Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/html-markers/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/html-markers/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>htmlElementsData</b>([<i>array</i>]) | Getter/setter for the list of objects to represent in the HTML elements map layer. Each HTML element is rendered using [ThreeJS CSS2DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer). | `[]` |
| <b>htmlLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | HTML element accessor function, attribute or a numeric constant for the latitude coordinate of the element's central position. | `lat` |
| <b>htmlLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | HTML element accessor function, attribute or a numeric constant for the longitude coordinate of the element's central position. | `lng` |
| <b>htmlAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | HTML element accessor function, attribute or a numeric constant for the altitude coordinate of the element's position, in terms of globe radius units. | 0 |
| <b>htmlElement</b>([<i>str</i> or <i>fn</i>]) | Accessor function or attribute to retrieve the DOM element to use. Should return an instance of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). | `null` |
| <b>htmlTransitionDuration</b>([<i>num</i>]) | Getter/setter for duration (ms) of the transition to animate HTML elements position changes. A value of `0` will move the elements immediately to their final position. | 1000 |

### 3D Objects Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/satellites/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/satellites/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>objectsData</b>([<i>array</i>]) | Getter/setter for the list of custom 3D objects to represent in the objects layer. Each object is rendered according to the `objectThreeObject` method. | `[]` |
| <b>objectLabel</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for its own tooltip label. Supports plain text or HTML content. | `name` |
| <b>objectLat</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Object accessor function, attribute or a numeric constant for the latitude coordinate of the object's position. | `lat` |
| <b>objectLng</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Object accessor function, attribute or a numeric constant for the longitude coordinate of the object's position. | `lng` |
| <b>objectAltitude</b>([<i>num</i>, <i>str</i> or <i>fn</i>]) | Object accessor function, attribute or a numeric constant for the altitude coordinate of the object's position, in terms of globe radius units. | 0.01 |
| <b>objectRotation</b>([<i>{[x], [y], [z]}</i>, <i>str</i> or <i>fn</i>]) | Object accessor function, attribute or a `{x, y, z}` object for the object's rotation (in degrees). Each dimension is optional, allowing for rotation only in some axes. Rotation is applied in the order **X**->**Y**->**Z**. | - |
| <b>objectFacesSurface</b>([<i>boolean</i>, <i>str</i> or <i>fn</i>]) | Object accessor function, attribute or a boolean constant for whether the object should be rotated to face (away from) the globe surface (`true`), or be left in its original universe orientation (`false`). | `true` |
| <b>objectThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for defining a custom 3d object to render as part of the objects map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). | *A yellow sphere* |
| <b>onObjectClick</b>(<i>fn</i>) | Callback function for object (left-button) clicks. The object itself, the event and the clicked coordinates are included as arguments: `onObjectClick(obj, event, { lat, lng, altitude })`. | - |
| <b>onObjectRightClick</b>(<i>fn</i>) | Callback function for object right-clicks. The object itself, the event and the clicked coordinates are included as arguments: `onObjectRightClick(obj, event, { lat, lng, altitude })`. | - |
| <b>onObjectHover</b>(<i>fn</i>) | Callback function for object mouse over events. The object itself (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous object (or `null`) as second argument: `onObjectHover(obj, prevObj)`. | - |

### Custom Layer

<p align="center">
   <a href="//vasturiano.github.io/globe.gl/example/custom-layer/"><img width="70%" src="https://vasturiano.github.io/globe.gl/example/custom-layer/preview.png"></a>
</p>

| Method | Description | Default |
| --- | --- | :--: |
| <b>customLayerData</b>([<i>array</i>]) | Getter/setter for the list of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. | `[]` |
| <b>customLayerLabel</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. | `name` |
| <b>customThreeObject</b>([<i>Object3d</i>, <i>str</i> or <i>fn</i>]) | Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). | `null` |
| <b>customThreeObjectUpdate</b>([<i>str</i> or <i>fn</i>]) | Object accessor function or attribute for updating an existing custom 3d object with new data. This can be used for performance improvement on data updates as the objects don't need to be removed and recreated at each update. The callback method's signature includes the object to be update and its new data: `customThreeObjectUpdate((obj, objData) => { ... })`. | `null` |
| <b>onCustomLayerClick</b>(<i>fn</i>) | Callback function for custom object (left-button) clicks. The custom object, the event object and the clicked coordinates are included as arguments: `onCustomLayerClick(obj, event, { lat, lng, altitude })`. | - |
| <b>onCustomLayerRightClick</b>(<i>fn</i>) | Callback function for custom object right-clicks. The custom object, the event object and the clicked coordinates are included as arguments: `onCustomLayerRightClick(obj, event, { lat, lng, altitude })`. | - |
| <b>onCustomLayerHover</b>(<i>fn</i>) | Callback function for custom object mouse over events. The custom object (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous custom object (or `null`) as second argument: `onCustomLayerHover(obj, prevObj)`. | - |

### Render Control

| Method | Description | Default |
| --- | --- | :--: |
| <b>pointOfView</b>({ <i>lat</i>, <i>lng</i>, <i>altitude</i> }, [<i>ms</i>]) | Getter/setter for the camera position, in terms of geographical `lat`, `lng`, `altitude` coordinates. Each of the coordinates is optional, allowing for motion in just some direction. The 2nd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. | By default the camera will aim at the cross between the equator and the prime meridian (`0,0` coordinates), at an altitude of `2.5` globe radii. |
| <b>pauseAnimation</b>() | Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. | |
| <b>resumeAnimation</b>() | Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. | |
| <b>enablePointerInteraction</b>([<i>boolean</i>]) | Getter/setter for whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your globe performance it's recommended to switch off this property. | `true` |
| <b>pointerEventsFilter</b>([<i>fn</i>]) | Getter/setter for the filter function which defines whether a particular object can be the target of pointer interactions. In general, objects that are closer to the camera get precedence in capturing pointer events. This function allows having ignored object layers so that pointer events can be passed through to deeper objects in the various globe layers. The ThreeJS object and its associated data (if any) are passed as arguments: `pointerEventsFilter(obj, data)`. The function should return a boolean value. | `() => true` |
| <b>lineHoverPrecision</b>([<i>num</i>]) | Getter/setter for the precision to use when detecting hover events over [Line](https://threejs.org/docs/#api/objects/Line) objects, such as arcs and paths. | 0.2 |
| <b>onZoom</b>(<i>fn</i>) | Callback function for point-of-view changes by zooming or rotating the globe using the orbit controls. The current point of view (with the syntax `{ lat, lng, altitude }`) is included as sole argument. | |
| <b>lights</b>([<i>array</i>]) | Getter/setter for the list of lights to use in the scene. Each item should be an instance of [Light](https://threejs.org/docs/#api/en/lights/Light). | [AmbientLight](https://threejs.org/docs/?q=ambient#api/en/lights/AmbientLight) + [DirectionalLight](https://threejs.org/docs/#api/en/lights/DirectionalLight) (from above) |
| <b>scene</b>() | Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). Can be used to extend the current scene with additional objects not related to globe.gl. | |
| <b>camera</b>() | Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). | |
| <b>renderer</b>() | Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). ||
| <b>postProcessingComposer</b>() | Access the [post-processing composer](https://threejs.org/docs/#examples/en/postprocessing/EffectComposer). Use this to add post-processing [rendering effects](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/postprocessing) to the scene. By default the composer has a single pass ([RenderPass](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/postprocessing/RenderPass.js)) that directly renders the scene without any effects. || 
| <b>controls</b>() | Access the internal ThreeJS [orbit controls object](https://threejs.org/docs/#examples/controls/OrbitControls). ||

### Utility

| Method | Description |
| --- | --- |
| <b>getGlobeRadius</b>() | Returns the cartesian distance of a globe radius in absolute spatial units. |
| <b>getCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates to cartesian. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` cartesian spatial coordinates. |
| <b>getScreenCoords</b>(<i>lat</i>, <i>lng</i> [,<i>altitude</i>]) | Utility method to translate spherical coordinates to the viewport domain. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the current equivalent `{x, y}` in viewport coordinates. |
| <b>toGeoCoords</b>({ <i>x</i>, <i>y</i>, <i>z</i> }) | Utility method to translate cartesian coordinates to the geographic domain. Given a set of 3D cartesian coordinates `{x, y, z}`, returns the equivalent `{lat, lng, altitude}` spherical coordinates. Altitude is defined in terms of globe radius units. |
| <b>toGlobeCoords</b>(<i>x</i>, <i>y</i>) | Utility method to translate viewport coordinates to the globe surface coordinates directly under the specified viewport pixel. Returns the globe coordinates in the format `{ lat, lng }`, or `null` if the globe does not currently intersect with that viewport location. |

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-img]: https://img.shields.io/npm/v/globe.gl
[npm-url]: https://npmjs.org/package/globe.gl
[build-size-img]: https://img.shields.io/bundlephobia/minzip/globe.gl
[build-size-url]: https://bundlephobia.com/result?p=globe.gl
[npm-downloads-img]: https://img.shields.io/npm/dt/globe.gl
[npm-downloads-url]: https://www.npmtrends.com/globe.gl
