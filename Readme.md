[![Build Status](https://secure.travis-ci.org/microjs/simplify-3D.png?branch=master)](https://travis-ci.org/microjs/simplify-3D)
# simplify-3D

  simplify-3D is a high-performance JavaScript 3D polyline simplification library.

  If you need a 2D simplification library, check out [microjs/simplify-2D](https://github.com/microjs/simplify-2D).

## Installation

    $ component install microjs/simplify-3D

    $ npm install simplify-3d

## API

  ```javascript
  var simplify = require('simplify-2D');
  simplify(points, tolerance, highQuality)
  ```

  Returns a simplified array of points

  - `points` - An array of points in the format: `{x: Number, y: Number, z: number}`
  - `tolerance` - Optional number (defaulting to 1) Affects the amount of simplification (in the same metric as the point coordinates).
  - `highQuality - Optional boolean (defaults to false) - Excludes distance-based preprocessing step which leads to higher quality but runs ~10-20 times slower.

## License

  MIT
