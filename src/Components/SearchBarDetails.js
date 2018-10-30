import React from 'react'

/**
 * Representing the details from the searched character
 */
const SearchBarDetails = ({ searchedItemDetails, showSearchBarDetails }) => {

    var divStyle = {
        fontSize: '18px',
        padding:0
        };

    let detailItems = Object.keys(searchedItemDetails).map((key, index) => {
        return <li key={index}> {[searchedItemDetails[key]]}</li>;
    });

    let showDetail = <h6> Search for a person in the input above, duh =) </h6>;
    if (showSearchBarDetails === false) {
        showDetail = <h6> Oops.. Cannot find info for that character</h6>;
    }
    else if (showSearchBarDetails === true) {
        showDetail = (
            <ul style={divStyle} > <b>Details</b>
                {detailItems}
            </ul>);
    }


    return (
        <div >
            { showDetail }
        </div>

    )}

export default SearchBarDetails;