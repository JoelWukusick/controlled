import React from 'react';
import styled from 'styled-components';
import { CustomPicker } from 'react-color';
var { EditableInput, Saturation, Hue } = require('react-color/lib/components/common');

const PickerContainer = styled.div`
  display: flex;
  grid-template-columns: 70% 30%;
  background-color: ${props => props.theme.backgroundColor1};
  grid-gap: 5%;
`
const Column = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
`

const SaturationContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 65%;
`

const HueContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 10%;
  margin-top: 10%;
`

const Apply = styled.button`
  position: relative;
  width: 100%;
  height: 10%;
  padding: '15px';
  padding-right: '0px';
  text-align: center;
  border: none;
  font-size: 14pt;
`

const ColorBlock = styled.div`
  width: 100%;
  height: 0px;
  padding-top: 100%;
  background-color:${props => props.color} ;
`

const inputStyle = {
  wrap: {
    width: '100%',
    padding: '10%',
    paddingLeft: '0px'
  },
  input: {
    width: '100%',
    textAlign: 'center',
    fontSize: '.7em',
    boxSizing: 'border-box'
  },
  label: {
    fontFamily: 'Arial',
    fontSize: '.7em',
    padding: '10%'
  }
}

class MyColorPicker extends React.Component {
  render() {
    return (
      <PickerContainer>
        <Column>
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
        </Column>
        <Column>
          <ColorBlock color={this.props.color} />
          <EditableInput
            style={inputStyle}
            value={this.props.color} />
          <Apply onClick={this.props.handleClick}>APPLY</Apply>
        </Column>
      </PickerContainer >
    )
  }
}

export default CustomPicker(MyColorPicker);