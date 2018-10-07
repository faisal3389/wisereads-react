import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Container, Header, Left, 
  Body, Right, Button, Icon, Title, Content , 
  Input,Item, Form, Footer, FooterTab, CheckBox,
  ListItem,
  } from 'native-base';
import Toast, {DURATION} from 'react-native-easy-toast';

import Logo from '../../components/login/Logo';
import { resetPasswordRequest } from "../../actions/actions";
import SignupForm from '../../components/login/SignupForm';
import { styles } from "./styles";


 class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
        isEmailValid: false,
        email: '',
    }
  }
 
  goBack() {
    this.props.navigation.navigate("Login")
  }

  onSignupBtnClick(userObj){
    this.props.sendSignupRequest(userObj)
  }

  onChangeTextHandler(key, textValue) {
    switch(key){
      case 'email':     
            this.checkAndAssignStateValue(key, textValue, 'Please enter valid email');          
            break;
      default:  
            return value
      }
  }

    /* It will validate first, if it is true then it sets the value to the state */
    checkAndAssignStateValue(key, value, errorMsg) {
        const isValid = this.validate(key, value);
  
        if(!isValid && this.refs.toast !== undefined) {
            this.refs.toast.show(errorMsg, DURATION.LENGTH_LONG);
        }
        
      }

      /* Validating with the RegExp 
  this will handle email, mobile, username and password*/
  validate(key,value) {

    let isValid = false;
    switch(key){
      case 'email': 
            const emailReg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid        = emailReg.test(value);
            this.setState({isEmailValid: isValid})
            if(isValid) { this.setState({email: value}) }
            return isValid

      default:
              return value;
    }
  }

  onSendClick() {
      if(!this.state.isEmailValid) {
        this.refs.toast.show('Please enter valid email address', DURATION.LENGTH_LONG);
      }
      else {
          this.props.resetPasswordRequest(this.state.email);
      }

  }

  showMessage(message) {
    this.refs.toast.show( message, DURATION.LENGTH_LONG)
  }
 

	render() {
    const { message } = this.props
		return(
            
      <Container >
      <Header style={styles.signUpheaderContainer}>
        <Left/>
        
        <Body >
          <Logo/>
        </Body>

        <Right />
      </Header>

      <Content padder>
     
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
            <View style={styles.registerContainer}>
            <Text style={styles.loginText}>FORGOT PASSWORD?</Text>
            <Text style={styles.fadedText}>(Enter your registr email below)</Text>
            </View>
        
        <Form>
            
            <Item>
              <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="email" />
              <Input placeholder="E-Mail" value={this.state.email}
               onSubmitEditing={()=> this.password.focus()}
               onChangeText = {(email) => this.onChangeTextHandler('email', email)}
               ref= {(input) => this.email=input }
              keyboardType="email-address"/>
            </Item>

             <Button block style={{marginTop: 15}}
              onPress= {()=> this.onSendClick()}>
              <Text>Send</Text>
              </Button>

          </Form>
      </Content>
      { message && (
          
      <Footer>
        <FooterTab>
          <Button active onPress={() => this.goBack()}>
          <Text>Back To Login</Text>
          </Button>
        </FooterTab>
      </Footer>
      
      )}

      {
          message && (
              this.showMessage('Reset password link has been send to your email address')
          )

      }

    </Container>
			)
	}
}

ForgotPassword.propTypes = {
  navigation: PropTypes.object.isRequired,
  resetPasswordRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { message } = state.login
  return {
    message,
  }

}

export default connect(
mapStateToProps,
{
    resetPasswordRequest
}
)(ForgotPassword)





