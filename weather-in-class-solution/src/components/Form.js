import React from 'react';

const Form = props => {
  const labelStyle = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden"
  }
  return (
    <div>
      <form
        onSubmit={props.handleSubmit}
        >
        { /* label tag is the only way the input has context for screen reader users. 
          Placeholder text is invisible to screen readers. 
          Hide visually with CSS since sighted users can rely on placeholder text. */ }
        <label style={labelStyle}>Enter Zip: </label>
        <input
          type="text"
          placeholder="Enter Zip"
          onChange={props.onInputChange}
          value={props.zip}
          />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
