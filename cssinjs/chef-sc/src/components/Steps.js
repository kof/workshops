import * as React from 'react';
import styled from 'styled-components';

const StepsList = styled.ol`
  padding: 0;
`;

const StepItem = styled.li`
  list-style: none;
  counter-increment: steps-counter;
  padding: 0;
  margin: ${({theme}) => theme.space.m};
`;

const StepButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.colors.base};
  font-size: ${({theme}) => theme.fontSizes.l};
  text-decoration: none;
  &::before {
    content: counter(steps-counter);
    display: inline-block;
    min-width: ${({theme}) => theme.fontSizes.l};
    color: ${({theme}) => theme.colors.primary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }
  &:hover,
  &[data-state='active'] {
    color: ${({theme}) => theme.colors.primary};
  }
`;

export const Steps = ({steps, selected, onSelect}) => {
  return (
    <StepsList>
      {steps.map((step, index) => (
        <StepItem key={index}>
          <StepButton
            type="button"
            data-state={step === selected ? 'active' : 'inactive'}
            onClick={() => onSelect(step)}
          >
            {step.description}
          </StepButton>
        </StepItem>
      ))}
    </StepsList>
  );
};
