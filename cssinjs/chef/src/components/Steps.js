import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles({
  steps: {
    padding: 0
  },
  stepContainer: {
    listStyle: 'none',
    counterIncrement: 'steps-counter',
    padding: 0,
    margin: ({theme}) => theme.space.m
  },
  stepButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: ({theme}) => theme.colors.base,
    fontSize: ({theme}) => theme.fontSizes.l,
    textDecoration: 'none',
    '&::before': {
      content: 'counter(steps-counter)',
      display: 'inline-block',
      minWidth: ({theme}) => theme.fontSizes.l,
      color: ({theme}) => theme.colors.primary,
      fontWeight: ({theme}) => theme.fontWeights.bold
    },
    '&:hover, &[data-state="active"]': {
      color: ({theme}) => theme.colors.primary
    }
  }
});

export const Steps = ({steps, selected, onSelect}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <ol className={classes.steps}>
      {steps.map((step, index) => (
        <li className={classes.stepContainer} key={index}>
          <button
            type="button"
            data-state={step === selected ? 'active' : 'inactive'}
            onClick={() => onSelect(step)}
            className={classes.stepButton}
          >
            {step.description}
          </button>
        </li>
      ))}
    </ol>
  );
};
