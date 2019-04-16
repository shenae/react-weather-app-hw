import React, { Component } from 'react';
import './WeatherForm.css';

class WeatherForm extends Component {
    render() { 
        return ( 
  <div>      
<form onSubmit={this.props.click}>
  <label>
    Enter Zip Code
    <input type="text" name="name" value={this.props.zipcode} 
    onChange={this.props.click}/>
  </label>
  <input type="submit" onClick={this.props.getWeather} value="Get Weather" />
</form> 
</div>    
        );
    }
} 
 
export default WeatherForm;