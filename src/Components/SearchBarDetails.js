import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LoadingImg from "../Images/loader.svg";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "../Styles/App.css";
/**
 * Representing the details from the searched character
 */

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class SearchBarDetails extends Component {
  state = {
    open: true
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      loading,
      searchedItemDetails,
      showSearchBarDetails,
      classes
    } = this.props;

    let detailItems = Object.keys(searchedItemDetails.text).map(
      (key, index) => {
        return (
          <ListItem button>
            <ListItemText
              color="Green"
              key={index}
              inset
              primary={[searchedItemDetails.text[key]]}
            />
          </ListItem>
        );
      }
    );

    let showDetail;
    if (loading === true) {
      if(!this.state.open){
          this.setState({ open: !this.state.open})
      }
      showDetail = (
        <img src={LoadingImg} width="50" height="50" alt="Loading..." />
      );
    } else {
      if (this.props.showSearchBarDetails === false) {
        showDetail = <h6> Oops.. Cannot find info for that character =( </h6>;
      } else if (showSearchBarDetails === true) {
    
        showDetail = (
          <div>
            {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                  Details
                </Typography>
                <List component="nav">
                  <ListItem>
                    <ListItemText inset primary="Details" />
                  </ListItem>
                  {detailItems}
                </List>
              </div>
            </Modal>
          </div>
        );
      }
    }
    return (
      <div>
        {/* <h4>Details</h4> */}
        {showDetail}
      </div>
    );
  }
}

export default withStyles(styles)(SearchBarDetails);