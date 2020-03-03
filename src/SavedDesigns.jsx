import React from 'react';
import styled from 'styled-components';
import Matrix from './Matrix.jsx';

const miniMatrix = styled.div`

`

function SavedDesigns({ designs, theme, n, selected }) {
  if (designs) {
    return (
      <div>Saved
      <div>
          {designs.map((design, i) => {
            return (
              <div>
                <Matrix
                  thumbnail={true}
                  n={n}
                  theme={theme}
                  colors={design.colors}
                  selected={selected} />
                <div>{design.name}</div>
              </div>
            )
          }
          )}
        </div>
      </div >
    )
  } else {
    return <div>
      saved
    </div>;
  }
}

export default SavedDesigns;
