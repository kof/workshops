import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {Progress} from '../components/Progress';
import {Steps} from '../components/Steps';

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontSize: '1em',
      textSizeAdjust: '100%'
    }
  },
  player: ({theme}) => ({
    fontFamily: theme.fonts.base,
    lineHeight: theme.lineHeights.base,
    fontWeight: theme.fontWeights.base,
    color: theme.colors.base,
    margin: '0 auto',
    padding: theme.space.m,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  })
});

export const RecipePlayer = ({recipe}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const [currStep, setCurrStep] = React.useState(recipe.steps[0]);

  return (
    <div className={classes.player}>
      <Progress step={currStep} />
      <Steps steps={recipe.steps} selected={currStep} onSelect={setCurrStep} />
    </div>
  );
};
