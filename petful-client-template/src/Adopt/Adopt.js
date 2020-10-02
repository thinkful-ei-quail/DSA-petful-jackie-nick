import React, { Component } from 'react';

export default class Adopt extends Component{

    state = {
      index: 0,
    }

    next = () => {
      this.setState({
        index: this.state.index + 1
      });
    }

    back = () => {
      this.setState({
        index: this.state.index - 1
      });
    }

    render(){

      const { index } = this.state;
      let dogs = this.props.dogs;
      let cats = this.props.cats;
      let adopt = this.props.adopt;
      let user = this.props.user;
      let error = this.props.error;
      if(cats){
        return(
          <div>
            <img
              src={cats.imageURL}
              alt={cats.imageDescription}
            />
            <p> Description: {cats.imageDescription}</p>  
            <p> Name: {cats.name}</p>  
            <p> Sex: {cats.sex}</p>       
            <p> Breed: {cats.breed}</p>       
            <p> Age: {cats.age}</p>       
            <p> Story: {cats.story}</p> 
          </div>
        );
          
      }

      else if(dogs){
        return(
          <div>
            <img
              src={dogs.imageURL}
              alt={dogs.imageDescription}
            />
            <p> Description: {dogs.imageDescription}</p>  
            <p> Name: {dogs.name}</p>  
            <p> Sex: {dogs.sex}</p>       
            <p> Breed: {dogs.breed}</p>       
            <p> Age: {dogs.age}</p>       
            <p> Story: {dogs.story}</p>
  
          </div>
        );
            
      }

      else{
        return(
          <div>
            {error && <h2>Sorry, all pets have been adopted, please come back later!</h2>}
          </div>
        );
      }

      
    }
}
