import React, {Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

import BookItem from '../book/BookItem';
import Details from '../book-details/Details';

class BooksList extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
          //selected: (new Map())
      };

    }
  
    onPressItemHandler(product) {
     /*  this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(product.id, !selected.get(product.id)); // toggle
        return {selected};
      }); */
      //this.props.navigatation.navigate('BookDetails')
      this.props.onItemClick(product)
    }

      onAddToCartBtnClick= (id, name) => {
        // send cart info to server
        alert(name)
      }

      onSearchResults(results) {
        alert(results);
      }

      onChangeTextHandler(result) {
        alert(result);
      }

      onRentBtnClick(product) {
        this.props.onRentBtnClick(product);
      }
  
    _renderItem = ({item}) => (
      <BookItem
        id={item.id}
        product = {item}
        onPressItem={(keyItem) => this.onPressItemHandler(keyItem)}
        /* selected={!!this.state.selected.get(item.id)} */
        title={item.title}
        imageUrl= {item.image_url}
        author= {item.author}
        onAddToCart= {this.onAddToCartBtnClick}
        onRentBtnClick = {(product) => this.onRentBtnClick(product)}
      />
    );
  
    render() {
      return (
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          renderItem={this._renderItem}
        />
      );
    }
  }

  BooksList.prototypes = {
    navigation: PropTypes.object.isRequired,
  }

  export default BooksList


