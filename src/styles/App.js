import styled, { ThemeProvider } from 'styled-components';

export const theme = {
  color1: 'tan',
  colorDark: '#36383b',
  color3: 'teal',
  backgroundColor1: '#f5f5f5',
  backgroundColor2: 'lightgray',
  displayFont: 'Arial',
  bodyFont: 'cursive'
}


export const Win = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
`

export const Column = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
  padding: 15px;
`

export const Pad = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
  padding: 20px 0px;
`

export const Header = styled.div`
  font-weight: 100;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.backgroundColor1};
  padding: 8px 30px;
  font-size: 24pt;
  font-family: Arial;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  grid-gap: 3px;
  background-color: ${props => props.theme.color1};
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  background-color: ${props => props.theme.backgroundColor1};
  padding:0px 20px;
`
