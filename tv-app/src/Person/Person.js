import React, { Component } from 'react';
import './Person.css';
//  const person = props => {
//     return  props.show? <p onKeyDown={props.clicked} className="Person" tabIndex="0" id={props.focus? 'shouldFocus' : null}>I'm the Person named {props.name} and {props.index} year's old</p> : null  
// }
class Person extends Component{
constructor(props){
    super(props)
}

shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {
  }

render(){
  return this.props.show? <a href="www.google.com" onKeyDown={this.props.clicked} className="Person" tabIndex="0" id={'person'+this.props.index+this.props.stateIndex}>I'm the Person named {this.props.name} and {this.props.age} year's old</a>  : null 
}

componentDidUpdate() {
    console.log('componentDidUpdate parent', this.props.stateIndex);
    //   if(document.querySelectorAll('.Person')[this.props.stateIndex]){
            // if(this.props.stateIndex >=4){
            //     document.querySelectorAll('.Person')[3].focus() ;
            //     return
            // }
            // if(this.props.stateIndex >=4){
            //     document.querySelectorAll('.Person')[3].focus() ;
            //     return
            // }
            console.log('inde',this.props.fo)
            document.querySelector('#person'+this.props.focusIndex).focus()
      
        
    //   }
  }

}




export default Person;