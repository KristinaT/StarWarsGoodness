import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../Styles/App.css'
/**
 * Representing the details from the searched character
 */
const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const SearchBarDetails = ({ searchedItemDetails, showSearchBarDetails, loading }) => {

    let detailItems = Object.keys(searchedItemDetails.text).map((key, index) => {
        return (
            <ListItem button>
                <ListItemText  color="Green" key={index} inset primary={[searchedItemDetails.text[key]]} />              
            </ListItem>         
        )
        
    });

    let showDetail;
    if(loading === true){
        showDetail = <h6> Fetching data.... </h6>;
    }
    else{
        if (showSearchBarDetails === false) {
            showDetail = <h6> Oops.. Cannot find info for that character</h6>;
        }
        else if (showSearchBarDetails === true) {
            showDetail = (
                <div className="SearchBar-card">
                    <List component="nav">                   
                        <ListItem>
                            <ListItemText inset primary="Details" />
                        </ListItem>
                        {detailItems}                
                    </List>           
                </div>
            );
        }
    }

    return (
        <MuiThemeProvider theme={theme}>
        <div>
            {/* <h4>Details</h4> */}
            { showDetail }
        </div>
        </MuiThemeProvider>

    )}

export default SearchBarDetails;