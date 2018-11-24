import React, { Component } from 'react'
import { Link } from "@reach/router";
import '../Styles/App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


class Categories extends Component {

    render(){
        const categories = ['People','Planets','Species','Starships','Vehicles','Films'];
        const categoryItems = categories.map((category,index)=>           
            <Link to="categoryDetails" state={{category}} key={index} >
                <ListItem button>
                    <ListItemText inset primary={category} />
                </ListItem>
            </Link>
        );

        return(
            <div className="Categories">
                <div className="SearchBar-card">
                <h2 className="Category-details-h1">Choose a category:</h2>
                    <List component="nav">                   
                        {categoryItems}                
                    </List>                    
                </div>       
            </div>
            )
        }
    }
    
export default Categories;