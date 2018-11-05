import React from 'react';
import '../App.css';

class Zip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.zip(this.state.zip);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='zip' placeholder='Zip Code' value={this.state.zip} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Zip;
