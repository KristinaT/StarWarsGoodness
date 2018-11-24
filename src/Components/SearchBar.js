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
  //   underline: {
  //     borderBottom: '3px solid green',
  //     '&:after': {
  //       // The source seems to use this but it doesn't work
  //       borderBottom: '3px solid green',
  //     },
  //   }
};
class SearchBar extends Component {
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
          onChange={this.props.onChangeInput}
        />
        <Button
          className="SearchBar-btn"
          type="submit"
          size="small"
          color="primary"
          onClick={this.props.addItemForSearch}
        >
          {" "}
          Search{" "}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
