import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchBarDetails from './Components/SearchBarDetails';
import * as Constants from './Constants/Constants';
import './Styles/App.css';
import Image from './Images/slide_1.jpeg'
import Image2 from './Images/slide_2.jpg'
import Image3 from './Images/slide_3.jpg'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;

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
      },
      loading:false
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

    this.setState({loading:true});

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
    this.setState({loading:false});
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
    const { searchedItemDetails, foundDetails, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          animationSpeed={1000}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          >
            <img src={Image} alt="bla" height="550" width="600" />
            <img src={Image2} alt="ble" height="550" width="600" />
            <img src={Image3} alt="blu" height="550" width="600" />
        </Carousel> 
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
            loading = {loading}
          />
     
        </header>


      </div>
    );
  }
}

export default App;
