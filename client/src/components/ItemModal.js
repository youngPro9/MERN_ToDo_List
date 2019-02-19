import React from 'react';
import { Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addItem(this.state.name);

    this.toggle();
  }

  onChange =(e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Button className="mt-3" color="danger" onClick={this.toggle}> Add Item</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
               <Input onChange={this.onChange} type="text" name="name" placeholder="Enter the to-do..." />
               <Button className="mt-3" color="primary">ADD</Button>{' '}
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);