import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {Progress} from '../components/Progress';
import {Steps} from '../components/Steps';

const useStyles = createUseStyles({});

export const Player = ({recipe}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const [currStep, setCurrStep] = React.useState(recipe.steps[0]);

  return (
    <div className={classes.root}>
      <Progress step={currStep} />
      <Steps steps={recipe.steps} onSelect={setCurrStep} />
    </div>
  );
};
