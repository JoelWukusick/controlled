import styled, { ThemeProvider } from 'styled-components';

export const theme = {
  colorMedium: '#d5ccbe',
  colorDark: '#36383b',
  color3: 'teal',
  backgroundColor1: '#f5f2ed',
  backgroundColor2: '#E1E1E1',
  displayFont: 'Roboto, sans-serif',
  bodyFont: 'Arial'
}


export const Win = styled.div`
  min-width: 1800px;
  margin: 0;
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  grid-gap: 3px;
  background-color: ${props => props.theme.colorMedium};
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;
  background-color: ${props => props.theme.backgroundColor1};
  padding:0px 20px;
`
