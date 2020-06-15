/**
 * Represents a convex 3D polygon consisting of a list of vertices.
 * @see {@link poly3} for data structure information.
 * @module modeling/geometry/poly3
 */
module.exports = {
  clone: require('./clone'),
  create: require('./create'),
  equals: require('./equals'),
  fromPoints: require('./fromPoints'),
  fromPointsAndPlane: require('./fromPointsAndPlane'),
  invert: require('./invert'),
  isA: require('./isA'),
  isConvex: require('./isConvex'),
  measureArea: require('./measureArea'),
  measureBoundingBox: require('./measureBoundingBox'),
  measureBoundingSphere: require('./measureBoundingSphere'),
  measureSignedVolume: require('./measureSignedVolume'),
  toPoints: require('./toPoints'),
  toString: require('./toString'),
  transform: require('./transform')
}
