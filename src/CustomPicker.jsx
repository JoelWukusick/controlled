import React from 'react';
import styled from 'styled-components';
import { CustomPicker } from 'react-color';
var { EditableInput, Saturation, Hue } = require('react-color/lib/components/common');

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
  text-align: 'center';
  position: relative;
  width: 30%;
  padding: '15px'
  padding-right: '0px';
`

const inputStyle = {
  wrap: {
    width: '100%',
    padding: '15px',
    paddingLeft: '0px',
  },
  input: {
    width: '50%',
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
          style={inputStyle}
          value={this.props.color} />
        <Apply onClick={this.props.handleClick}>APPLY</Apply>
      </div>
    )
  }
}

export default CustomPicker(MyColorPicker);