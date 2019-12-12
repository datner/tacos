import React from 'react'
import ReactMarkdown from 'react-markdown'


const Recipes = ({ recipes }) => recipes.map((recipe,i) => <ReactMarkdown key={"recipe_"+i} source={recipe} />)

Recipes.defaultProps = {
    recipes: []
}

export default Recipes
