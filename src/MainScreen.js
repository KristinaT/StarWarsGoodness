import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import SearchBarDetails from './Components/SearchBarDetails';
import Categories from './Components/Categories';
import * as Constants from './Constants/Constants';
import './Styles/App.css';
import images from './Images/images'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

var Carousel = require('react-responsive-carousel').Carousel;
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ffffff',
      main: '#000000',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: '#E7D80C',
        borderRadius: 1,
        border: 0,
        color: 'black', 
            
      },
    },
  }
});
class MainScreen extends Component {

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
      const url = `${Constants.STARWARS_API_PEOPLE_URL}?search=${item}`;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json,'json')

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

    const imageDivs = Object.values(images).map((img, index)=>{
      return(
        <img key={index} src={img} alt="img" height="750" width="600" />
      );
    })

    return (
       <MuiThemeProvider theme={theme}>
       <div className="App">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          animationSpeed={1000}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          >
            {imageDivs}
        </Carousel> 
          <h1 className="Category-details-h1">Star Wars Goodness</h1>
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
        <Categories />  
      </div>
       </MuiThemeProvider>

    );
  }
}

export default MainScreen;
