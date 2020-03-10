import React from 'react';
import styled from 'styled-components';
import { CustomPicker } from 'react-color';
var { EditableInput, Saturation, Hue } = require('react-color/lib/components/common');

const PickerContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 3px;
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
  padding-top: 6%;
  margin-top: 20px;
`

const Apply = styled.button`
  position: relative;
  width: 30%;
  padding: '15px'
  padding-right: '0px';

`

const ColorBlock = styled.div`
  margin-top: 15px;
  width: 30%;
  height: 80px;
  background-color:${props => props.color} ;
`

const inputStyle = {
  wrap: {
    width: '100%',
    padding: '15px',
    paddingLeft: '0px',
  },
  input: {
    width: '30%',
    textAlign: 'left'
  },
  label: {
    fontFamily: 'Arial',
    fontSize: '18',
    padding: '10px'
  }
}

class MyColorPicker extends React.Component {
  render() {
    return (
        <PickerContainer>
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
        <ColorBlock color={this.props.color} />
        <EditableInput
          style={inputStyle}
          value={this.props.color} />
        <Apply onClick={this.props.handleClick}>APPLY</Apply>
        </PickerContainer>
    )
  }
}

export default CustomPicker(MyColorPicker);