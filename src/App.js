import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchBarDetails from './Components/SearchBarDetails';
import * as Constants from './Constants/Constants';
import './Styles/App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchedItem: { text: '', key: '' },
      foundDetails: null,
      searchedItemDetails: {
        text: {
          name: '',
          height: '',
          mass: '',
          birth_year: '',
          gender: ''
        },
        key: ''
      }
    }
  }

  handleSearchInput = e => {

    const itemText = e.target.value;
    const searchedItem = {
      text: itemText,
      key: Date.now()
    }
    this.setState({ searchedItem });
  }

  addItemForSearch = async e => {
    const itemForSearch = this.state.searchedItem.text;

    const searchedItem = {
      text: '',
      key: ''
    }

    // GET request
    try {
      const response = await this.handleUrl(itemForSearch);
      console.log('response', response)
      const searchedItemDetails = {
        text: response,
        key: Date.now()
      }

      this.setState({ foundDetails: true, searchedItemDetails, searchedItem });
    }
    catch (e) {
      console.log(e);
      
      this.setState({ foundDetails: false, searchedItem });
    }

  }

  handleUrl = async (item) => {

    try {
      const url = `${Constants.STARWARS_API_URL}?search=${item}`;
      const response = await fetch(url);
      const json = await response.json();

      if (json.count >= 1) {
        const { name, height, mass, birth_year, gender } = json.results[0];

        const resultObject = {
          name,
          height,
          mass,
          birth_year,
          gender
        }

        return Promise.resolve(resultObject);
      }
      else {
        return Promise.reject(console.error('Cannot fetch the name'));
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    const { searchedItemDetails, foundDetails } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          * Star Wars Goodness *
            <SearchBar
            inputElement={this.inputElement}
            onChangeInput={this.handleSearchInput}
            currentItem={this.state.searchedItem}
            addItemForSearch={this.addItemForSearch}
          />
          <SearchBarDetails
            searchedItemDetails={searchedItemDetails}
            showSearchBarDetails={foundDetails}
          />
        </header>
      </div>
    );
  }
}

export default App;
