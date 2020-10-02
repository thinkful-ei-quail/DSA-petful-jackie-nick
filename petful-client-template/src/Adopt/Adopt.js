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
      let pets = this.props.pets;
      let adopt = this.props.adopt;
      let user = this.props.user;
      let error = this.props.error;
      console.log(pets)
      if(pets.length > 0){

        return(
          <div>
            <img
              src={pets[index].imageURL}
              alt={pets[index].imageDescription}
            />
            <p> Description: {pets[index].imageDescription}</p>  
            <p> Name: {pets[index].name}</p>  
            <p> Sex: {pets[index].sex}</p>       
            <p> Breed: {pets[index].breed}</p>       
            <p> Age: {pets[index].age}</p>       
            <p> Story: {pets[index].story}</p> 

          </div>
        );
          
      }

      else if(pets.length !== 0){
        return(
          <div>
            <img
              src={pets[index].imageURL}
              alt={pets[index].imageDescription}
            />
            <p> Description: {pets[index].imageDescription}</p>  
            <p> Name: {pets[index].name}</p>  
            <p> Sex: {pets[index].sex}</p>       
            <p> Breed: {pets[index].breed}</p>       
            <p> Age: {pets[index].age}</p>       
            <p> Story: {pets[index].story}</p>
  
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
