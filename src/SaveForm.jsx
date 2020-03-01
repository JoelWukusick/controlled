import React from 'react';



function SaveForm({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Design Name
      <input type="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SaveForm;