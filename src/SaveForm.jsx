import React from 'react';
import styled from 'styled-components';

const DesignNameLabel = styled.label`
  margin-top: 5%;
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  display: block;
`

const FormContainer = styled.div`
  padding: 15px 0px;
  display: block;
  width: 30%;
`

const InputText = styled.input`
  margin: 2%;
  margin-left: 0px;
  size: 60;
  width = 50%;
`

const Save = styled.input`
  display: block;
  position: relative;
  width: 100%;
  padding: '15px ';
  padding-right: '0px';
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-size: 12pt;
  font-weight: 300;
  color: ${props => props.theme.colorDark};
`

function SaveForm({ handleChange, handleSubmit, theme, settingName }) {
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <DesignNameLabel theme={theme}>
          DESIGN NAME
      </DesignNameLabel>
        <InputText type="text" name='name' size='35' onChange={handleChange} />
        <Save type="submit" value="SAVE" />
      </form>
    </FormContainer>
  )
}

export default SaveForm;