import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchBarDetails from './Components/SearchBarDetails';
import * as Constants from './Constants/Constants';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      searchedItem: { text: '', key: '' },
      foundDetails: null,
      searchedItemDetails:{ 
        text: {
          name:'',
          height:'',
          mass:'',
          birthday:'',
          gender:''
        },
        key: '' }
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
      const searchedItemDetails = {
        text:response,
        key:Date.now()
      }

      this.setState({foundDetails:true});

      this.setState({searchedItemDetails});
    }).catch(e=> {
      console.log(e);
      
      this.setState({foundDetails:false});
    })

    // Set the state back to empty
    this.setState({searchedItem})
  }

  async handleUrl(item){
    try {

      const url = `${Constants.STARWARS_API_URL}?search=${item}`;
      const response = await fetch(url);
      const json = await response.json();
      
      if (json.count >= 1) {
        const resultObject={
          name:json.results[0].name,
          height:json.results[0].height,
          mass:json.results[0].mass,
          birthday: json.results[0].birth_year,
          gender:json.results[0].gender
        }
        return Promise.resolve(resultObject);
      }
      else {
          return Promise.reject(console.error('Cannot fetch the name'));
      }
    }
    catch(e){
      console.log(e);
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            * Star Wars Goodness *
            <SearchBar
             inputElement= {this.inputElement}
             onChangeInput = {this.handleSearchInput}
             currentItem={this.state.searchedItem}
             addItemForSearch={this.addItemForSearch} 
              />
            <SearchBarDetails 
            searchedItemDetails={this.state.searchedItemDetails.text}
            showSearchBarDetails={this.state.foundDetails}
             />
        </header>       
      </div>
    );
  }
}

export default App;
