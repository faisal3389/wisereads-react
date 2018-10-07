import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Left, 
    Body, Right, Button, Icon, Title, Content,
    Drawer,  
    } from 'native-base';

import  BooksList  from '../../components/home/books-list/BooksList';
import { SearchBar } from 'react-native-elements';
import HomeService from '../../services/homeService';


import { getVisibleProducts } from '../../reducers/products';
import { connect } from 'react-redux';


import { addToCart, 
          cartRequest,
          searchRequest,
          orderRequest,
         } from '../../actions/actions'
import SideBar from '../../components/sidebar/SideBar';

 class Home extends Component {

constructor(props){
    super(props)
    this.state = {
      showSearchBar: false,
      visibleProducts: [],
      isSearched: false,
      isRent: false,
    }
}

  componentDidMount() {
    this.props.navigation.setParams({ onPress: this.onCartPress });
  }

  onCartPress () {
    this.props.cartRequest(this.props.userProfile.email);
    this.props.navigation.navigate('Cart');
  }

  onSearchIconHandler() {
    this.setState({showSearchBar : !this.state.showSearchBar})
  }

showBookDescription(product) {
    this.props.navigation.navigate('BookDetails', { 'product': product});
}

closeDrawer () {
  this.drawer._root.close()
}

openDrawer () {
  this.drawer._root.open()
}

componentDidCatch (error, info) {
  console.log(`${error} and ${info}`);
}

// Rent
onRentHandler(product) {
//this.props.addToCart(this.state.product, this.props.userProfile.email);
this.sendOrderRequest();
this.setState({isRent: true});
  this.props.navigation.navigate('Checkout');
}

sendOrderRequest() {

  let order = new Order();
    order.total_amount  = this.state.totalPrice;
    order.email         = this.state.userProfile.email;
    let today           = new Date();
    let tomorrow        = new Date();
    order.order_date    = today;
    tomorrow.setDate(today.getDate()+1);
    order.delivery_time = tomorrow;

    this.props.orderRequest(order);
    
}

onSearch(value) {
  if(value.length >=3) {
    this.props.searchRequest(value)
    this.setState({isSearched: !this.state.isSearched});
  }
  else if(value.length === 0 && this.state.isSearched) {
    this.props.filteredProducts.splice(0,this.props.filteredProducts.length);
    this.setState({isSearched: !this.state.isSearched});
    this.setState({visibleProducts: []});
  }
}

render(){
    const { products, addToCart, filteredProducts, userProfile } = this.props;

    if(filteredProducts === undefined || filteredProducts.length === 0)  {
      if(products.length >0 && products !== this.state.visibleProducts) 
      this.setState({visibleProducts: products});
    } else if (filteredProducts !== this.state.visibleProducts) {
      this.setState({visibleProducts: filteredProducts});
    }

    return (

      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar
        userProfile = {userProfile}
        navigator={this.props.navigation} />}
      onClose={() => this.closeDrawer()} >

        <View> 
         <Header>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon type='MaterialIcons' name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Wise Reads</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.onSearchIconHandler()}>
              <Icon type='MaterialIcons' name='search' />
            </Button>
            
            <Button transparent onPress= {() => this.onCartPress()}>
              <Icon type='MaterialIcons' name='shopping-cart' />
            </Button>
          </Right>
        </Header>

            <SearchBar disabled={true} data={products} 
                 showloading  placeholder="Search ..." lightTheme round 
                 onChangeText={(value) => this.onSearch(value)}
                 />
            <View>
                <BooksList data={this.state.visibleProducts} 
                onItemClick= {(product) => this.showBookDescription(product)}
                onRentBtnClick = {(product) => this.onRentHandler(product)}
                />
            </View>
        </View>
        </Drawer>
    )
}

}

Home.proptyes = {
  
    navigation: PropTypes.object.isRequired,
    cartRequest: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    searchRequest: PropTypes.func.isRequired,
    orderRequest: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  let { products: mainProducts, filteredProducts } = state.search;
  if(mainProducts)
    filteredProducts = mainProducts.books;

  const  products   = getVisibleProducts(state.products) 
  const userProfile = state.login.userProfile;

  return {
    filteredProducts,
    products,
    userProfile,
  }

}

export default connect(
    //state => ({ products: getVisibleProducts(state.products) }),
    mapStateToProps,
    { addToCart, cartRequest, searchRequest, orderRequest },
  )(Home)


