import React, { Component } from "react";
import * as Constants from "../Constants/Constants";
import CategoryDetailsInfo from "./CategoryDetailsInfo";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../Styles/App.css";
import { Link } from "@reach/router";
import LoadingImg from "../Images/loader.svg";
class CategoryDetails extends Component {
  constructor() {
    super();
    this.state = {
      categoryResult: [],
      isLoading: true
    };
  }

  handleClick = async category => {
    console.log(category);
    try {
      const response = await this.handleFetch(category);
      console.log(response);
      this.setState({ categoryResult: response });
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  handleFetch = async category => {
    try {
      const url = `${Constants.STARWARS_API_URL}/${category}`;
      const response = await fetch(url);
      const json = await response.json();

      if (json.count >= 1) {
        return Promise.resolve(json.results);
      } else {
        return Promise.reject(console.error("Cannot fetch the category"));
      }
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const category = this.props.location.state.category.toLowerCase();
      const response = await this.handleFetch(category);

      this.setState({
        categoryResult: response,
        isLoading: false
      });

      return response;
    } catch (e) {
      console.log(e);
      this.setState({
        categoryResult: e,
        isLoading: false
      });
    }
  }

  render() {
    const { categoryResult, isLoading } = this.state;
    const { category } = this.props.location.state;

    let itemForRender = <img src={LoadingImg} alt="Loading..." />;

    if (isLoading === false) {
        itemForRender = categoryResult.map((item, index) => (
        <div key={index}>
          <CategoryDetailsInfo name={item.name} item={item} />
        </div>
      ));
    }

    return (
      <div className="Category-details">
        <div>
          <h1 className="Category-details-h1">{category}</h1>
          <div className="Div-positioning">
            <Link to="/">
              <Button size="small" color="secondary">
                Back
              </Button>
            </Link>
          </div>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          {itemForRender}
        </Grid>
      </div>
    );
  }
}
export default CategoryDetails;
