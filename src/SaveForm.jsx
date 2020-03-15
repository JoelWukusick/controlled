import React from 'react';
import styled from 'styled-components';

const DesignNameLabel = styled.label`
  padding-right: 10px;
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  width: 100%;
`

const FormContainer = styled.div`
  padding: 15px 0px;
`

function SaveForm({ handleChange, handleSubmit, theme, settingName }) {
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <DesignNameLabel theme={theme}>
          DESIGN NAME
      </DesignNameLabel>
        <input type="text" name='name' onChange={handleChange} />
        <input type="submit" value="SAVE" />
      </form>
    </FormContainer>
  )
}

export default SaveForm;