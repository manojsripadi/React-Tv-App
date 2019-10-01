import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Person from './Person/Person';
//  class App extends Component{
//    constructor(props){
//      super(props);
//      this.textinput = React.createRef();
//    }
//    state = {
//      persons:[
//        {name:'manoj', age:25, show:true, focus:false},
//        {name:'Kumar', age:26, show:true, focus:false},
//        {name:'John', age:27, show:true, focus:false},
//        {name:'Joseph', age:28, show:true, focus:false},
//        {name:'Brian', age:29, show:true, focus:false},
//        {name:'Khali', age:30, show:true, focus:false}
//      ],
//      index:0
//    }
//    newPersonCopy = [...this.state.persons];
//    onButtonClick = (event,index) => {
//     const length = this.state.persons.length;
//     if(event.keyCode === 37){  // left arrow 
//       if(index === 0){
//         return;
//        } else if (this.newPersonCopy[index-1].show === false){
//         this.newPersonCopy[index-1].show=true;
//         this.newPersonCopy[index+3].show=false;
//        }
//       this.setState({
//         persons:this.newPersonCopy,
//         index: index-1
//       })
//     } else if(event.keyCode === 39){ //right arrow
//       if(index+1 === length){
//         return
//       }
//       if(index >=3){
//       this.newPersonCopy[index+1].show=true;
//       this.newPersonCopy[index-3].show=false;
//       }
//       this.setState({
//         persons:this.newPersonCopy,
//         index: index+1
//       })
     
//     }
//    }
//    componentDidMount(){
//     this.state.persons.forEach((elem,index) => {
//       if(index > 3){
//       this.newPersonCopy[index] = {name:elem.name, age:elem.age, show: false, focus:elem.focus}
//       }
//     });
//     this.setState({
//       persons: this.newPersonCopy
//     })
//     console.log(this.newPersonCopy,this.state.persons)
//    }
//    shouldComponentUpdate() {
//     return true;
//   }
//   componentWillUpdate() {
//   }
//   render(){
//     return (
//       <div>
//       <div className="App">
//      <h1>I am a React App!</h1>
//      </div>
//      <h1>Latest Videos:</h1>
//      <div className="carousel latest">
//      {this.state.persons.map((person, index) => {
//      return <Person name={person.name} show={person.show} age={person.age}  stateIndex={this.state.index} index={index} clicked={(event) => this.onButtonClick(event,index) } key={index}  />
//      })}
//      </div>
//      <h1>Recommended Videos</h1>
//      <div className="carousel recommended">
//      {this.state.persons.map((person, index) => {
//      return <Person name={person.name} show={person.show} age={person.age}  stateIndex={this.state.index} index={index} clicked={(event) => this.onButtonClick(event,index) } key={index}  />
//      })}
//      </div>
//     </div>
//     )
//   }
//   componentDidUpdate() {
//   }
// }

class App extends Component{
constructor(props){
super(props);
}
state={
  videos: [
    {
id:'latest',
name:'Latest Videos',
videos: [
       {name:'manoj', age:25, show:true, focus:false},
       {name:'Kumar', age:26, show:true, focus:false},
       {name:'John', age:27, show:true, focus:false},
       {name:'Joseph', age:28, show:true, focus:false},
       {name:'Brian', age:29, show:true, focus:false},
       {name:'Khali', age:30, show:true, focus:false}
]
    },
    {
      id:'recommended',
      name:'Recommended Videos',
      videos: [
             {name:'John', age:25, show:true, focus:false},
             {name:'Brian', age:26, show:true, focus:false},
             {name:'Mark', age:27, show:true, focus:false},
             {name:'Hiral', age:28, show:true, focus:false},
             {name:'Alex', age:29, show:true, focus:false},
             {name:'Wang', age:30, show:true, focus:false}
      ]
          },
          {
            id:'comedy',
            name:'Comedy Videos',
            videos: [
                   {name:'Gulam', age:25, show:true, focus:false},
                   {name:'Shaik', age:26, show:true, focus:false},
                   {name:'Altaf', age:27, show:true, focus:false},
                   {name:'Sundar', age:28, show:true, focus:false},
                   {name:'Ali Baba', age:29, show:true, focus:false},
                   {name:'Wang', age:30, show:true, focus:false}
            ]
                }
  ],
  index:'00'
}
stateNewCopy=[...this.state.videos];
onButtonClick = (event,index) => {
  const indexArray= index;
      const length = this.state.videos[indexArray[0]].videos.length;
      if(event.keyCode === 37){  // left arrow 
        if(indexArray[1] === 0){
          return;
         } else if (this.stateNewCopy[indexArray[0]].videos[indexArray[1]-1].show === false){
          this.stateNewCopy[indexArray[0]].videos[indexArray[1]-1].show=true;
          this.stateNewCopy[indexArray[0]].videos[indexArray[1]+3].show=false;
         }
         indexArray[1]=indexArray[1]-1
        this.setState({
          persons:this.stateNewCopy,
          index: indexArray.join('')
        })
      } else if(event.keyCode === 39){ //right arrow
        console.log('indexlength',length);
        console.log(indexArray)
        if(parseInt(indexArray[1])+1 === length){
          return
        }
        if(indexArray[1] >=3){
        this.stateNewCopy[indexArray[0]].videos[indexArray[1]+1].show=true;
        this.stateNewCopy[indexArray[0]].videos[indexArray[1]-3].show=false;
        }
        indexArray[1]=parseInt(indexArray[1])+1;
        console.log('indexarray',indexArray)
        this.setState({
          persons:this.stateNewCopy,
          index: indexArray.join('')
        })
       
      }
      else if(event.keyCode === 38){ //up arrow

        if(parseInt(indexArray[1]) === 0){
          return
        }
        indexArray[0]=parseInt(indexArray[0])-1;
        this.setState({
          index:indexArray.join('')
        })

      }
      else if(event.keyCode === 40){ //up arrow

        if(parseInt(indexArray[1])+1 === this.state.videos.length){
          return
        }
        indexArray[0]=parseInt(indexArray[0])+1;
        this.setState({
          index:indexArray.join('')
        })

      }
     }
componentDidMount(){
  console.log(this.stateNewCopy)
  this.state.videos.forEach((elem,i) => {
    elem.videos.forEach((elem,index) => {
      if(index > 3){
      this.stateNewCopy[i].videos[index] = {name:elem.name, age:elem.age, show: false, focus:elem.focus}
      }
    });
  })
      
      this.setState({
        persons: this.stateNewCopy
      })
      console.log(this.newPersonCopy,this.state.videos)
     }

render(){
  return (
    <div>
       <div className="App">
     <h1>I am a React App!</h1>
     </div>
     {this.state.videos.map((elem,index) => {
      //  <div className="latest">
      console.log('elem',elem)
  return  ( <div >
      <h1>{elem.name}:</h1>
      <div className="carousel">
    {elem.videos.map((person, i) => {
     return <Person name={person.name} show={person.show} age={person.age}  stateIndex={i} index={index} clicked={(event) => this.onButtonClick(event,[index,i]) } focusIndex={this.state.index} key={i}  />
     })}
     </div>
     </div>
    //  </div>
    )
     })}
     </div>
  )
}


}
export default App;
