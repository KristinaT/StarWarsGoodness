import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

const starWarsApiUrl ='https://swapi.co/api/people/';

class App extends Component {

  constructor(){
    super()
    this.state = {
      searchedItem: { text: '', key: '' }
    }
    this.handleSearchInput.bind(this);
    this.addItemForSearch.bind(this);
  }

  handleSearchInput = e =>{
 
    const itemText = e.target.value;
    const searchedItem = {
      text:itemText,
      key:Date.now()
    }
    this.setState({searchedItem});
  }
 
  addItemForSearch = e => {
    
    const itemForSearch = this.state.searchedItem.text;

    const searchedItem = {
      text:'',
      key:''
    }

    // GET request
    this.handleUrl(itemForSearch).then(response => {
      console.log('response', response)
    }).catch(e=> {
      console.log(e);
    })

    // Set the state back to empty
    this.setState({searchedItem})
  }

  async handleUrl(item){
    try {

      const url = `${starWarsApiUrl}?search=${item}`;
      const response = await fetch(url);
      const json = await response.json();
      
      // TODO: change logic here
      if (json.count >= 1) {
        return Promise.resolve(json.results[0].name);
      }
      else {
          return Promise.reject(console.error('Cannot fetch the name'));
      }
    }
    catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Star Wars goodness 
            <SearchBar
             inputElement= {this.inputElement}
             onChangeInput = {this.handleSearchInput}
             currentItem={this.state.searchedItem}
             addItemForSearch={this.addItemForSearch} 
              />
        </header>       
      </div>
    );
  }
}

export default App;
