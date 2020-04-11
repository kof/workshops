import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

const useStyles = createUseStyles();

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
