import React, {Component } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import CartItem from "./CartItem";
import BookItem from '../home/book/BookItem';

class CartList extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
          selected: (new Map())
      };
    }  
    onPressItemHandler(product) {
    /*   this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
      }); */
      this.props.onItemClick(product)
    }

    onRemoveItemFromCart(product) {
      this.props.removeItemFromCart(product)
    }

    onNotifyQuantityChange(product) {
      this.props.onNotifyQuantityChange(product);
    }

    _renderItem = ({item}) => (
      <CartItem
      id={item.id}
      product = {item}
      onPressItem={(item) => this.onPressItemHandler(item)}
      removeItemFromCart = {(item) => this.onRemoveItemFromCart(item)}
      selected={!!this.state.selected.get(item.id)}
      onNotifyQuantityChange = { (product) => this.onNotifyQuantityChange(product)}
      /* title={item.title}
      imageUrl= {item.image_url}
      author= {item.author}
      price = {item.price} */
    />
    );

    renderSeparator = () => (
      <View
        style={{
          backgroundColor: 'red',
          height: 0.5,
        }}
      />
    );

    render() {
      return (
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          renderItem={this._renderItem}
         /*  ItemSeparatorComponent={this.renderSeparator} */
        />
      );
    }
  }

  CartList.prototypes = {
    navigation: PropTypes.object.isRequired,
  }

  export default CartList