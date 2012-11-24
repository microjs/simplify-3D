var simplify = require('simplify-base');

/**
 * square distance between 2 points
 * @param  {Point}  p1
 * @param  {Point}  p2
 * @return {Number}
 */
function getSquareDistance(p1, p2) { // square distance between 2 points

  var dx = p1.x - p2.x,
      dz = p1.z - p2.z,
      dy = p1.y - p2.y;

  return dx * dx +
         dz * dz +
         dy * dy;
}

/**
 * square distance from a point to a segment
 * 
 * @param  {Point}  p  The point
 * @param  {Point}  p1 The start of the segment
 * @param  {Point}  p2 The end of the segment
 * @return {Number}
 */
function getSquareSegmentDistance(p, p1, p2) { // square distance from a point to a segment

  var x = p1.x,
      y = p1.y,
      z = p1.z,

      dx = p2.x - x,
      dy = p2.y - y,
      dz = p2.z - z,

      t;

  if (dx !== 0 || dy !== 0) {

    t = ((p.x - x) * dx +
         (p.z - z) * dz +
         (p.y - y) * dy) /
            (dx * dx +
             dz * dz +
             dy * dy);

    if (t > 1) {
      x = p2.x;
      y = p2.y;
      z = p2.z;

    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
      z += dz * t;
    }
  }

  dx = p.x - x;
  dy = p.y - y;
  dz = p.z - z;

  return dx * dx +
         dz * dz +
         dy * dy;
}

module.exports = simplify(getSquareDistance, getSquareSegmentDistance);