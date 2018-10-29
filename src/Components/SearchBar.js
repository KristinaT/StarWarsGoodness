import React, { Component } from 'react'

class SearchBar extends Component {

render(){
    return(
        <div>
            <form onSubmit={this.props.addItemForSearch}>
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