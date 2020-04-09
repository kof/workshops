import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const VIEWBOX_SIZE = 100;
const STROKE_WIDTH = 6;
const CIRCLE_RATIO = 1;

// The radius of the path is defined to be in the middle, so for the path to
// fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
const PATH_RADIUS = VIEWBOX_SIZE / 2 - STROKE_WIDTH / 2;

// Move to center of canvas
// Relative move to top canvas
// Relative arc to bottom of canvas
// Relative arc to top of canvas
const PATH = `
  M ${VIEWBOX_SIZE / 2},${VIEWBOX_SIZE / 2}
  m 0,-${PATH_RADIUS}
  a ${PATH_RADIUS},${PATH_RADIUS} ${0} 1 1 0,${2 * PATH_RADIUS}
  a ${PATH_RADIUS},${PATH_RADIUS} ${0} 1 1 0,-${2 * PATH_RADIUS}
`;

const getDashStyle = (dashRatio = CIRCLE_RATIO) => {
  const diameter = Math.PI * 2 * PATH_RADIUS;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    // Have dash be full diameter, and gap be full diameter
    strokeDasharray: `${diameter}px ${diameter}px`,
    // Shift dash backward by gapLength, so gap starts appearing at correct distance
    strokeDashoffset: `${gapLength}px`
  };
};

// Ratio of path length to trail length, as a value between 0 and 1
const getPathRatio = ({value, min, max}) => {
  const boundedValue = Math.min(Math.max(value, min), max);
  return (boundedValue - min) / (max - min);
};

const useStyles = createUseStyles({
  root: {
    overflow: 'hidden'
  },
  progress: ({theme, ...rest}) => ({
    stroke: theme.colors.primary,
    transition: 'stroke-dashoffset 0.5s ease 0s',
    ...getDashStyle(getPathRatio(rest))
  }),
  trail: {
    stroke: ({theme}) => theme.colors.border,
    strokeLinecap: 'round',
    ...getDashStyle()
  }
});

const Path = ({className}) => (
  <path
    className={className}
    d={PATH}
    strokeWidth={STROKE_WIDTH}
    fillOpacity={0}
  />
);

export const CircularProgress = ({value, min, max, className}) => {
  const theme = useTheme();
  const classes = useStyles({theme, value, min, max});

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      className={`${classes.root} ${className}`}
    >
      <Path className={classes.trail} />
      <Path className={classes.progress} />
    </svg>
  );
};
