import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'

class ToDoList extends Component {
  componentDidMount(){
    this.props.getItems();
  }


  deleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    return (
      <div>
      <ListGroup className="mt-3">
        {items.map( ({_id, name}) => (
          <ListGroupItem key={_id}>
            <Button
              size="sm"
              className="mr-3"
              color="danger"
              onClick={this.deleteClick.bind(this, _id)}
            >
              &times;
            </Button>
              {name}
          </ListGroupItem>
        ))}
      </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item  // item from index.js
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ToDoList);
