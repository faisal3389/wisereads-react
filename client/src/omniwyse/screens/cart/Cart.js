import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Container, Button, Header, Footer, FooterTab, 
        Left, Body, Right, Icon, Title, Content, Text
    } from 'native-base';


import  CartList  from '../../components/cart/CartList';
import {DATA} from '../../mockService/BooksData'
import styles from './styles';
import { cartSuccess, removeFromCart, orderRequest, deleteCartRequest } from "../../actions/actions";
import { Address } from '../../components/address/Address';
import { Order } from "../../models/Order";

class Cart extends Component {

constructor(props){
    super(props)
    this.state = {
        order: null,
        isCheckoutAllowed: false,
        productsData: [],
        userProfile: null,
        product: null,
        totalPrice: 0,
        itemsCount: 0,
        address: {
            name: 'Raju',
            city: 'Hyderabad',
            area: 'Gayatri Nagar',
            pin: 500018,
        }
    }
}

showBookDescription(product) {
    this.props.navigation.navigate('BookDetails',  { 'product': product});
}

onCheckoutHandler() {

    let order = new Order();
    order.total_amount  = this.state.totalPrice;
    order.email         = this.state.userProfile.email;
    let today           = new Date();
    let tomorrow        = new Date();
    order.order_date    = today;
    tomorrow.setDate(today.getDate()+1);
    order.delivery_time = tomorrow;

    this.props.orderRequest(order);
    this.setState({isCheckoutAllowed: true});
}

onBackToStoreHandler() {
    this.props.navigation.navigate("Home");
}

onRemoveItemFromCart(product) {
    this.props.removeFromCart(product.id);
    this.setState({product});

}

onRemoveItemFromCartSuccess() {
    let { cartDetails } = this.props
    if(this.state.product !== null && cartDetails !== undefined) {
        const index = cartDetails.indexOf(this.state.product);
    
        if (index !== -1) {
            cartDetails.splice(index, 1);
            this.setState({productsData: cartDetails});
        }
    }
}

componentDidUpdate() {
    this.updateTotalPrice();
}

updateTotalPrice() {
    const { cartDetails:cartData } = this.props;
    if(cartData !== undefined)
    {
        const totalPrice = cartData.reduce(function (acc, obj) { return acc + obj.price* obj.quantity; }, 0);
        if(totalPrice !== this.state.totalPrice) {
            this.setState({totalPrice});
        }
    }
}

onQuantityChange() {
    this.updateTotalPrice();
}

onOrderSuccessful() {
    const { order, isCheckoutAllowed } = this.state;

    if(order != null && order !== undefined && isCheckoutAllowed)
    {
        this.setState({isCheckoutAllowed: false});
        this.props.deleteCartRequest(this.props.userProfile.email);
        this.props.navigation.navigate('Checkout', { 'order': order.order});
    }
}


render(){

  const { cartDetails, userProfile, order } = this.props;
  const { itemsCount }  = this.state;

  if(this.state.order !== order.order)
    this.setState({order: order.order});

if(this.state.userProfile !== userProfile)
    this.setState({userProfile});

  if(this.state.productsData !== cartDetails)
    this.setState({productsData: cartDetails})

  if(cartDetails !== undefined && cartDetails.length >=0 && itemsCount !== cartDetails.length)  {
      this.setState({ itemsCount: cartDetails.length});
  }

    return (
      
        <Container > 
             
            <Header>
                <Left>
                    <Button transparent onPress={() => this.onBackToStoreHandler()}>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>My Cart ( {this.state.itemsCount} )</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <View>
                {
                        order.order && (
                            this.onOrderSuccessful()
                        )
                    }
                    <Address address={this.state.address}/>
                </View>
                    { cartDetails && (
                        <View>
                            <CartList 
                                data={this.state.productsData} 
                                onItemClick= {(product) => this.showBookDescription(product)}
                                removeItemFromCart= {(product) => this.onRemoveItemFromCart(product)}
                                onNotifyQuantityChange = { (product) => this.onQuantityChange(product) }/>
                        </View>
                    ) }
                    
                   
            </Content>

            <Footer>
                    <FooterTab>
                        <Button>
                            <Text>{this.state.totalPrice}</Text>
                            <Text>Payable amount</Text>
                        </Button>
                        <Button active 
                        disabled= {this.state.itemsCount>=1?false:true}
                        onPress= { () => this.onCheckoutHandler()}>
                            <Text>Checkout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
          {
              isItemRemoved && (
                this.onRemoveItemFromCartSuccess()
              )
          }
            
        </Container>
        
    )
}

}

Cart.proptyes = {
    navigation:     PropTypes.object.isRequired,
    cartSuccess:    PropTypes.func.isRequired,
    orderRequest:   PropTypes.func.isRequired,
    deleteCartRequest:   PropTypes.func.isRequired,
}


function mapStateToProps(state) {
  const { cartDetails, error } = state.cart.cartDetailsStatus;
  const { quantityById, order }   = state.cart;
  const { userProfile }         = state.login;

  if(quantityById !== undefined) {
      isItemRemoved = quantityById.isItemRemoved;
  }
  return {
      cartDetails, error,
      isItemRemoved,
      order,
      userProfile,
  }
}

export default connect(
mapStateToProps,
{
  cartSuccess,
  removeFromCart,
  orderRequest,
  deleteCartRequest
}
)(Cart)