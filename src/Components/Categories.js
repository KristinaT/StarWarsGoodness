import React, { Component } from 'react'
import { Link } from "@reach/router";

class Categories extends Component {

    handleClick = (category) => {
        
    }

    render(){

        const categories = ['People','Planets','Species','Starships','Vehicles','Films'];

        const categoryItems = categories.map((category,index)=>           
            <Link to="categoryDetails" key={index} >
                <li onClick={()=>this.handleClick(category)}>{category}</li>
            </Link>
        );
        return(
            <div>
            <h2>Choose a category:</h2>
                <ul>
                    {categoryItems}                                 
                </ul>              
            </div>
            )
        }
    }
    
export default Categories;