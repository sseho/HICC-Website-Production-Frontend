import React from 'react';
import styled from 'styled-components';

const pixelToRem = size => `${size / 16}rem`;

//<!-- Rounded switch -->

// const pixelToRem = size => `${size / 16}rem`;

function SliderButton(props){
  return (
    <SliderContainer>
      <SliderInput type="checkbox" />
      <SliderSpan className="slider round" />
    </SliderContainer>
  );
}

const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }  
`;

const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SliderSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;
