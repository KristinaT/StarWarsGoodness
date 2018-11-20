import React, { Component } from 'react'
import { Link } from "@reach/router";

class Categories extends Component {

    handleClick = () => {

    }

    render(){

        const categories = ['People','Planets','Species','Starships','Vehicles','Films'];

        const categoryItems = categories.map((category,index)=>
            <li key={index} onClick={this.handleClick}>{category}</li>
        );
        return(
            <div>
            <h2>Choose a category:</h2>
                <ul>
                <Link to="categoryDetails" >{categoryItems}              
                </Link>         
                </ul>              
            </div>
            )
        }
    }
    
export default Categories;