import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Progress} from '../components/Progress';
import {Steps} from '../components/Steps';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1em;
    text-size-adjust: '100%'
  }
`;

const Player = styled.div`
  font-family: ${({theme}) => theme.fonts.base};
  line-height: ${({theme}) => theme.lineHeights.base};
  font-weight: ${({theme}) => theme.fontWeights.base};
  color: ${({theme}) => theme.colors.base};
  margin: 0 auto;
  padding: theme.space.m;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecipePlayer = ({recipe}) => {
  const [currStep, setCurrStep] = React.useState(recipe.steps[0]);
  const [autostart, setAutostart] = React.useState(false);

  const onComplete = () => {
    const index = recipe.steps.indexOf(currStep);
    const nextStep = recipe.steps[index + 1];
    if (nextStep) {
      setCurrStep(nextStep);
      setAutostart(true);
      return;
    }
    setAutostart(false);
  };

  return (
    <>
      <GlobalStyles />
      <Player>
        <Progress
          step={currStep}
          autostart={autostart}
          icon={recipe.icon}
          onComplete={onComplete}
          onStop={() => setAutostart(false)}
        />
        <Steps
          steps={recipe.steps}
          selected={currStep}
          onSelect={setCurrStep}
        />
      </Player>
    </>
  );
};
