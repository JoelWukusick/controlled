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

const ColumnsContainer = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 3px;
`

const Column = styled.div`
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  font-size: 1vw;
  /* background-color: ${props => props.theme.backgroundColor1}; */
`

const SaturationContainer = styled.div`
  position: relative;
  width: 95%;
  padding-top: 53%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.backgroundColor2};

`

const HueContainer = styled.div`
  position: relative;
  width: 95%;
  padding-top: 4%;
  margin-top: 2%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.backgroundColor2};
`

const Apply = styled.button`
  position: relative;
  width: 100%;
  margin-top: 4%;
  padding: '15px ';
  padding-right: '0px';
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-size: 12pt;
  font-weight: 300;
  color: ${props => props.theme.colorDark};
`

const PrevColors = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5% 10%;
  padding: 10%;
  padding-top: 0px;
`

const PrevColor = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.backgroundColor2};
  width: 100%;
  padding-top: 100%;
  background-color: ${props => props.color};
`

class ColorPicker extends React.Component {
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
        <ColumnsContainer>
          <Column>
            <EditableInput
              {...this.props}
              style={{
                wrap: {
                  width: '100%',
                  padding: '2%',
                  paddingLeft: '0px'
                },
                input: {
                  padding: '14px',
                  width: '100%',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderColor: this.props.theme.backgroundColor2,
                  textAlign: 'center',
                  fontFamily: this.props.theme.displayFont,
                  fontWeight: '300',
                  fontSize: '16pt',
                  color: rotateGrey(this.props.color),
                  boxSizing: 'border-box',
                  backgroundColor: this.props.color
                }
              }}
              value={this.props.color}
              onChange={this.props.onChange} />
            <Apply onClick={this.props.handleClick}>APPLY COLOR</Apply>
          </Column>
          <Column>
          </Column>
        </ColumnsContainer>
      </div>

      // </PickerContainer >
    )
  }
}

export default CustomPicker(ColorPicker);