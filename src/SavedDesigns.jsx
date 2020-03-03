import React from 'react';
import styled from 'styled-components';
import Matrix from './Matrix.jsx';

const DesignsDisplay = styled.div`
  padding: 10px;
`

const DesignName = styled.div`
  padding: 8px 0px 15px;
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-weight: 200;
  text-transform: uppercase;
`

const ThumbContainer = styled.div`
  padding: 0px 18%;
`

function SavedDesigns({ designs, theme, n, selected, handleSelectSaved }) {
  if (designs) {
    return (
      <DesignsDisplay>
        {designs.map((design, i) => {
          return (
            <div
            onClick={(e) => {handleSelectSaved(e, design)}}>
              <ThumbContainer theme={theme} >
                <Matrix
                  thumbnail={true}
                  n={n}
                  theme={theme}
                  colors={design.colors}
                  selected={selected} />
              </ThumbContainer>
              <DesignName
              >
                {design.name}</DesignName>
            </div>

          )
        }
        )}
      </DesignsDisplay>
    )
  } else {
    return <ThumbContainer theme={theme}>
      No items saved yet
    </ThumbContainer>
  }
}

export default SavedDesigns;
