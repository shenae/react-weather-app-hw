import React from 'react';

const Form = props => {
  return (
    <div>
      <form
        onSubmit={props.handleSubmit}
        >
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
