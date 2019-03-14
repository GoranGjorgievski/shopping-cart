import React, { Component } from 'react';
import {addItem} from '../../actions';
import { connect } from 'react-redux';
import './AddItemForm.css';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.amount = React.createRef();
    this.state = {
      valid: true,
    }
  }
  addItem = () => {
    if(this.name.current.value === '' || this.amount.current.value === ''){
      this.setState({
        valid: false,
      });
      return;
    }
    this.props.addItem(this.name.current.value, this.amount.current.value);
    this.name.current.value = '';
    this.amount.current.value = '';
  }
  render() {
    return <div className='add-form'>
     <h1>Add new product</h1>
     <hr />
     {!this.state.valid && <p className='error-msg'>Please fill both name and amount.</p>}
     <input ref={this.name} type="text" placeholder="Name" />
     <input ref={this.amount} type="number" min="0" placeholder="Amount" />
     <button onClick={this.addItem}>add</button>
    </div>
  }
}

export const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {addItem})(AddItemForm);
