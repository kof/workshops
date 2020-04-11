import * as React from 'react';
import {Progress} from '../components/Progress';
import {Steps} from '../components/Steps';

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
    <div>
      <Progress
        step={currStep}
        autostart={autostart}
        icon={recipe.icon}
        onComplete={onComplete}
        onStop={() => setAutostart(false)}
      />
      <Steps steps={recipe.steps} selected={currStep} onSelect={setCurrStep} />
    </div>
  );
};
