import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles'
import { Container, Header, Left, 
    Body, Right, Button, Icon, Title, Content , 
    Input,Item, Form, Footer, FooterTab, CheckBox,
    ListItem,
    } from 'native-base';
import Logo from '../../components/login/Logo';

export default class SuccessPage extends Component {

constructor(props) {
    super (props);
}

onBackToStoreHandler() {
    this.props.navigation.navigate("Home")
}

render() {

    return(


        <Container>
         <Header style={styles.signUpheaderContainer}>
        <Left/>
        
        <Body >
          <Logo/>
        </Body>

        <Right />
      </Header>

        <Content>
        <View style={styles.container}>
                <View >
                    <Image source={require('../../../../assets/images/checked.png')}/>
                </View>
                <View style= {styles.textblock}>
                    <Text style={ styles.headerText}>Order completed successfully!!  </Text>
                    <Text>Thank you for ordering with us. </Text> 
                    <Text> We received your order  will begin proccecing it soon </Text>
                </View>
        </View>
           
        </Content>

        <Footer >
        <FooterTab>

          <Button active onPress={() => this.onBackToStoreHandler()}>
          <Text>Rent More </Text>
          </Button>
          
        </FooterTab>
        </Footer>
    </Container>

        
    )
}

}