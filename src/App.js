import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/SearchBar';
import SearchBarDetails from './Components/SearchBarDetails';
import * as Constants from './Constants/Constants';
import './Styles/App.css';
import Image from './Images/slide_1.png'
import Image2 from './Images/slide_2.png'
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

    const arr = [Image, Image2]
  }

  render() {
    const { searchedItemDetails, foundDetails, loading } = this.state;

    return (
      <div className="App">
        {/* <header className="App-header">
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
          
        </header> */}
        {/* <Carousel
        autoPlay={2000}
        animationSpeed={1000}
        slides= {this.arr}
        >
            <img src={Image} alt="bla" height="242" width="242" />
            <img src={Image2} alt="ble" height="242" width="242" />
        </Carousel> */}
        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval='2000'
        showArrows={false}
        showIndicators={false}
        useKeyboardArrows={true}
        dynamicHeight={true}
        showThumbs={false}
        transitionTime='1000'
        >
          <div>
              <img src={Image} />
              
          </div>
          <div>
              <img src={Image2} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
