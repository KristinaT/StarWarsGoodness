import React, { Component } from 'react'

/**
 * Input form for searching for a Star Wars character
 */
class SearchBar extends Component {


render(){
    return(
        <div>
            <form>
                <input
                 placeholder="Search ... "
                 ref = {this.props.inputElement}
                 onChange = {this.props.onChangeInput}
                              
                  />
            </form>
            <button type="submit" onClick={this.props.addItemForSearch}> Search </button>
        </div>
        )
    }
}


export default SearchBar;