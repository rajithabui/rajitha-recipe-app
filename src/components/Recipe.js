import React from "react";


const API_KEY = "c21722ee6f2c5b7a5b1f5cb870188786";

class Recipe extends React.Component{
    state = {
        activeRecipe: []
    }
    componentDidMount = async () =>{
        const title = this.props.location.state.recipe;

        // e.preventDefault();
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)

        // console.log(recipeName);

        const res = await req.json();
        // console.log(data.recipes[0].recipe_id);

        // this.setState({recipes: data.recipes});
        // console.log(res.recepies[0]);
        this.setState({activeRecipe: res.recipes[0]})
}
    render() {
        const recipe = this.state.activeRecipe;
        console.log(this.props);
        return (
            <div className="container">
                <div className="active-recipe">
                    <img className="active-recipe__img"
                         src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>
                        {recipe.publisher}
                    </span>
                    </h4>
                    <p className="active-recipe__website">Website:
                        <span>
                            <a href={recipe.publisher_url}></a>
                        </span>
                    </p>
                    <button className="active-recipe__button">Go Home</button>
                </div>
            </div>
        )
    }

}

export default Recipe;