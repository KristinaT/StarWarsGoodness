import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import "../Styles/App.css";

/**
 * Input form for searching for a Star Wars character
 */

const styles = {
  multilineColor: {
    color: "#E7D80C"
  }
};
class SearchBar extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      inputVal: '',
    }
  }

  _handleInputChange = e => {
    console.log(e.target.value)
    this.setState({ inputVal: e.target.value })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          InputProps={{
            classes: {
              input: classes.multilineColor,
              underline: classes.underline
            }
          }}
          placeholder="Search ... "
          ref={this.props.inputElement}
          onChange={this._handleInputChange}
        />
        <Button
          className="SearchBar-btn"
          type="submit"
          size="small"
          color="primary"
          onClick={() => this.props.addItemForSearch(this.state.inputVal)}
        >
          {" "}
          Search{" "}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
