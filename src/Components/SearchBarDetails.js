import React from 'react'
import '../Styles/App.css'
/**
 * Representing the details from the searched character
 */
const SearchBarDetails = ({ searchedItemDetails, showSearchBarDetails }) => {

    let detailItems = Object.keys(searchedItemDetails.text).map((key, index) => {
        return <li key={index}> {[searchedItemDetails.text[key]]}</li>;
    });

    let showDetail = <h6> Search for a person in the input above, duh =) </h6>;
    if (showSearchBarDetails === false) {
        showDetail = <h6> Oops.. Cannot find info for that character</h6>;
    }
    else if (showSearchBarDetails === true) {
        showDetail = (
            <ul className="SearchBarDetails-ul"> <b>Details</b>
                {detailItems}
            </ul>);
    }

    return (
        <div>
            { showDetail }
        </div>
    )}

export default SearchBarDetails;