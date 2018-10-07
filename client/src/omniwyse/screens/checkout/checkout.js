import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Header, Left, 
    Body, Right, Button, Icon, Title, Content,
    Footer, FooterTab
    } from 'native-base';

import Payment  from "../../components/buy/Payment";


export default class Checkout extends Component {

constructor(props) {
    super (props)
}

onBackToStoreHandler() {
    this.props.navigation.navigate("Cart")
}

onProceedHandler() {
    
    this.props.navigation.navigate("SuccessPage");
}

render() {

    return(

        <Container>
        <Header>
            <Left>
                <Button transparent onPress={() => this.onBackToStoreHandler()}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Payment</Title>
            </Body>
            <Right />
        </Header>

        <Content>
           <Payment />
           
        </Content>

        <Footer >
        <FooterTab>

          <Button active onPress={() => this.onProceedHandler()}>
          <Text>Proceed</Text>
          </Button>
          
        </FooterTab>
        </Footer>
    </Container>
    )
}

}