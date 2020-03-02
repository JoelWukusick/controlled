import React from 'react';
import styled from 'styled-components';

const DesignNameLabel = styled.label`
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  width: 100%;
`

function SaveForm({ handleChange, handleSubmit, theme, settingName }) {
  return (
    <form onSubmit={handleSubmit}>
      <DesignNameLabel theme={theme}>
        DESIGN NAME
      </DesignNameLabel>
      <input type="text" onChange={handleChange} />
      <input type="submit" value="SAVE" />
    </form>
  )
}

export default SaveForm;