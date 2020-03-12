import React from 'react';
import styled from 'styled-components';
import { CustomPicker } from 'react-color';
const { EditableInput, Saturation, Hue } = require('react-color/lib/components/common');
const { rotateGrey } = require('./colorFunctions/hexFunctions.js');

// const PickerContainer = styled.div`
//   display: grid;
//   grid-template-columns: 70% 30%;
//   background-color: ${props => props.theme.backgroundColor1};
//   grid-gap: 5%;
// `
const Column = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
`

const SaturationContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 65%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.backgroundColor2};

`

const HueContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 7%;
  margin-top: 2%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.backgroundColor2};
`

const Apply = styled.button`
  position: relative;
  width: 100%;
  padding: '15px 2%';
  padding-right: '0px';
  margin-bottom: 15%;
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-size: 1.3vw;
  font-weight: 300;
  color: ${props => props.theme.colorDark};
`



class ColorPicker extends React.Component {
  render() {
    return (
      // <PickerContainer>
      <div>

        <SaturationContainer>
          <Saturation
            {...this.props}
            onChange={this.props.onChange} />
        </SaturationContainer>
        <HueContainer>
          <Hue
            {...this.props}
            onChange={this.props.onChange}
            direction={'horizontal'} />
        </HueContainer>
        <EditableInput
          {...this.props}
          style={{
            wrap: {
              width: '100%',
              padding: '2%',
              marginTop: '10%',
              paddingLeft: '0px'
            },
            input: {
              padding: '10%',
              width: '100%',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: this.props.theme.backgroundColor2,
              textAlign: 'center',
              fontFamily: this.props.theme.displayFont,
              fontWeight: '300',
              fontSize: '1.3vw',
              color: rotateGrey(this.props.color),
              boxSizing: 'border-box',
              backgroundColor: this.props.color
            },
            label: {
              fontFamily: 'Arial',
              fontSize: '.7vw',
              padding: '10%'
            }
          }}
          value={this.props.color}
          onChange={this.props.onChange} />
        <Apply onClick={this.props.handleClick}>APPLY</Apply>
      </div>

      // </PickerContainer >
    )
  }
}

export default CustomPicker(ColorPicker);