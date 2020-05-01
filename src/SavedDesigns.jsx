import React from 'react';
import styled from 'styled-components';
import Matrix from './Matrix.jsx';

const DesignsDisplay = styled.div`
  padding: 10%;
  cursor: pointer;
`

const DesignName = styled.div`
  padding: 5% 0px 15%;
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-weight: 200;
  text-transform: uppercase;
  font-size: 12pt;
`

const ThumbContainer = styled.div`
  padding: 0px 18%;
`

function SavedDesigns({ designs, theme, n, selected, handleSelectSaved }) {
  if (designs.length > 0) {
    return (
      <DesignsDisplay>
        {designs.map((design, i) => {
          return (
            <div key={i} onClick={(e) => {handleSelectSaved(e, design)}}>
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
    return <DesignName>
      No items saved yet
    </DesignName>
  }
}

export default SavedDesigns;
