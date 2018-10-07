import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Header, Left, 
    Body, Right, Button, Icon, Title, Content,
    Footer, FooterTab
    } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast'

import { addToCart, 
        addToCartSuccess, 
        addToCartFailure,
        cartRequest,
      } from "../../actions/actions";
import Details from '../../components/home/book-details/Details';


class BookDetails extends Component {

constructor(props) {
    super (props)
    this.state = {
        product : {},
        isDisable: false,
    }
}

componentWillMount()  {
    const { navigation }    = this.props;
    const product           = navigation.getParam('product', 'no product Object');
    if(product !== this.state.product)
        this.setState({product:product})
}

onBackToStoreHandler() {
    this.props.navigation.navigate("Home");
}

onCartPress () {
    this.props.cartRequest(this.props.userProfile.email);
    this.props.navigation.navigate('Cart');
  }

onSearchIconHandler() {
    this.setState({showSearchBar : !this.state.showSearchBar});
}

onProductAdded() {
    this.refs.toast.show("successfully added to Cart", DURATION.LENGTH_LONG)
}

onAddToCartHandler() {
    this.setState({isDisable: true});
    this.props.addToCart(this.state.product, this.props.userProfile.email);
}

onRentHandler() {
    this.props.navigation.navigate('Checkout');
}

render() {

    const { product, userProfile } = this.props;

    return(

        <Container>
             <Toast
                    ref="toast"
                    style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'white'}}
                />
        <Header>
            <Left>
                <Button transparent onPress={() => this.onBackToStoreHandler()}>
                <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body />
            <Right>
                <Button transparent onPress={() => this.onSearchIconHandler()}>
                    <Icon type='MaterialIcons' name='search' />
                </Button>
                <Button transparent onPress= {() => this.onCartPress()}>
                    <Icon type='MaterialIcons' name='shopping-cart' />
                </Button>
            </Right>
        </Header>

        <Content>
           <Details product={this.state.product}/>
           
        </Content>

        <Footer >
        <FooterTab>

          <Button active onPress={() => this.onAddToCartHandler()} >
          <Text>Add To Cart </Text>
          </Button>
          <Button  onPress={() => this.onRentHandler()}>
          <Text>Rent</Text>
          </Button>
          
        </FooterTab>
        </Footer>
        {
            product && this.refs.toast && (
                this.onProductAdded()
            )
        }
    </Container>
    )
}

}
BookDetails.proptyes = {
    navigation: PropTypes.object.isRequired,
    cartRequest: PropTypes.func.isRequired,
    addToCartSuccess: PropTypes.func.isRequired,
    addToCartFailure: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const { product, error } = state.cart.cartDetailsStatus

  const userProfile = state.login.userProfile;
    return {
        product, error, userProfile
    }
  }

export default connect(
    mapStateToProps,
    { cartRequest,
      addToCart,
      addToCartSuccess,
      addToCartFailure,
    },
  )(BookDetails)