import * as React from 'react';

export const Steps = ({steps, selected, onSelect}) => {
  return (
    <ol>
      {steps.map((step, index) => (
        <li key={index}>
          <button
            type="button"
            data-state={step === selected ? 'active' : 'inactive'}
            onClick={() => onSelect(step)}
          >
            {step.description}
          </button>
        </li>
      ))}
    </ol>
  );
};
