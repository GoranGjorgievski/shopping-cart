import React, { Component } from 'react';
import './ShoppingCart.css';
import ReactTable from 'react-table';
import ContentEditable from "react-contenteditable";
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import {removeItem, updateItem} from '../../actions';
import {
  PAGE_SIZE,
} from '../../constants';

class ShoppingCart extends Component {
  handleUpdate = (e, id, type) => { // 0 == NAME, 1 == Amount -> use constants in case there are more variables
    const debounced = debounce(() => this.props.updateItem(e.target.value, type, id), 5000);
    debounced();
  }

  render() {
    const columns = [{
      Header: 'Name',
      accessor: 'name',
      Cell: props => {
        return (
          <ContentEditable
            html={props.original.name} // innerHTML of the editable div
            disabled={false}
            onChange={(e) => this.handleUpdate(e, props.original.id, 0)} // handle innerHTML change
          />
        )
      }
    }, {
      Header: 'Amount',
      accessor: 'amount',
      Cell: props => {
        return (
          <ContentEditable
            html={props.original.amount.toString()} // innerHTML of the editable div
            disabled={false}
            onChange={(e) => this.handleUpdate(e, props.original.id, 1)} // handle innerHTML change
          />
        )
      }
    }, {
      Header: '',
      accessor: '',
      sortable: false,
      Cell: props => <button onClick={() => this.props.removeItem(props.original.id)}>remove</button>
    }];

    return <ReactTable
      className='cart'
      defaultPageSize={PAGE_SIZE}
      data={this.props.cart}
      columns={columns}
    />
  }
}

export const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
    };
};

export default connect(mapStateToProps, {
  removeItem,
  updateItem
})(ShoppingCart);
