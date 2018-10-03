import React, { Component } from 'react';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

import './App.css';

const API_KEY = "c21722ee6f2c5b7a5b1f5cb870188786";

class App extends Component {
    state = {
        recipes: []
    }
    getRecipe =async (e) => {

        const recipeName = e.target.elements.recipeName.value;

        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)

        // console.log(recipeName);

        const data = await api_call.json();
        // console.log(data.recipes[0].recipe_id);

        this.setState({recipes: data.recipes});
        console.log(this.state.recipes);

    }


  render() {
    return (
      <div>
          <header className="App-header">
              <h1 className="App-title">Recipe Search</h1>
          </header>
        <Form getRecipe={this.getRecipe}/>

          <Recipes recipes={this.state.recipes}/>

      </div>
    );
  }
}

export default App;
