import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { styles } from "./styles";
import Toast, {DURATION} from 'react-native-easy-toast';

import { Container, Header, Left, 
  Body, Right, Button, Icon, Title, Content , 
  Input,Item, Form, Footer, FooterTab, CheckBox,
  ListItem,
  } from 'native-base';

import  InputValidator  from "./InputValidator";
import { RegisterUserInfo } from './registerUserInfo';

export default class SignupForm extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { 
      username: 'Raju',
      email: 'raju@test.com',
      mobile: '8987767544',
      password: 'Raju@1234',
      isUsernameValid: false,
      isEmailValid: false,
      isMobileValid: false,
      isPasswordValid: false

    };
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

      case 'mobile':
            const mobileReg = /^[0]?[789]\d{9}$/;
             isValid        = mobileReg.test(value)
             this.setState({isMobileValid: isValid})
            if(isValid) { this.setState({ mobile: value}) }
            return isValid

      case 'username':
            const usernameReg = /^[a-zA-Z0-9.\-_$@*!]{4,30}$/;
             isValid          = usernameReg.test(value);
             this.setState({username: value})
            if(isValid) { this.setState({isUsernameValid: isValid}) }
            return isValid

      case 'password': 
            const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            
             isValid          = passwordReg.test(value);
            this.setState({isPasswordValid: isValid})
            if(isValid) { this.setState({password: value})}
            return isValid

      default:
              return value;
    }
  }
    /* It will validate first, if it is true then it sets the value to the state */
    checkAndAssignStateValue(key, value, errorMsg) {
      const isValid = this.validate(key, value)

      if(!isValid) {
        this.refs.toast.show(errorMsg, DURATION.LENGTH_LONG)
      }
    }

  onChangeTextHandler(key, textValue) {
    switch(key){
      case 'email':     this.checkAndAssignStateValue(key, textValue, 'Please enter valid email');          break;
      case 'mobile':    this.checkAndAssignStateValue(key, textValue, 'Please enter valid mobile number');  break;
      case 'username':  this.checkAndAssignStateValue(key, textValue, 'Please enter valid username\n min 4 letters');       break;
      case 'password':  this.checkAndAssignStateValue(key, textValue, 'Please enter valid password');       break;
      default:  return value
      }
  }

  testing() {
        let userObj       = {};
        userObj.email     = this.state.email
        userObj.username  =  this.state.username
        userObj.password  = this.state.password
        userObj.mobile    = this.state.mobile
        this.props.onButtonPress(userObj)
  }

  onBtnClick(){
    const { isEmailValid, isUsernameValid, isMobileValid, isPasswordValid } = this.state

    if(!this.state.isChecked) {
     return this.refs.toast.show('Please accept terms & conditions', DURATION.LENGTH_LONG)
    }
   
    if(isEmailValid && isUsernameValid && isMobileValid && isPasswordValid)
    {
        let registerUser       = new RegisterUserInfo();
        registerUser.email     = this.state.email
        registerUser.username  =  this.state.username
        registerUser.password  = this.state.password
        registerUser.mobile    = this.state.mobile
        
        this.props.onButtonPress(registerUser)
    }else {

      let message = '';
      if(!isUsernameValid)        message = 'username, must have minimum 4 letters';
      else if(!isEmailValid)      message = 'please enter proper email address';
      else if(!isPasswordValid)   message = 'password, must have 1 uppercase, 1 numeric and 1 special character'
      else if(!isMobileValid)     message = 'please enter valid mobile number'

        this.showToastMessage(message)
    }
  }

  showToastMessage(message) {
    this.refs.toast.show(message, DURATION.LENGTH_LONG)
  }

  toggleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

	render(){
		return(
			<View >

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
            <Text style={styles.loginText}>REGISTER</Text>
            <Text style={styles.fadedText}>(Enter Mobile no./ Email to register)</Text>
            </View>
        
        <Form>
            <Item>
              <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="person-outline" />
              <Input placeholder="Name" value={this.state.username}
              onSubmitEditing={()=> this.email.focus()}
              onChangeText = {(username) => this.onChangeTextHandler('username', username)}
              keyboardType="default"/>
            </Item>
            <Item>
              <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="email" />
              <Input placeholder="E-Mail" value={this.state.email}
               onSubmitEditing={()=> this.password.focus()}
               onChangeText = {(email) => this.onChangeTextHandler('email', email)}
               ref= {(input) => this.email=input }
              keyboardType="email-address"/>
            </Item>
            <Item>
            <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="lock" />
              <Input placeholder="Password" value={this.state.password}
              keyboardType="email-address"
              onSubmitEditing={()=> this.mobile.focus()}
              onChangeText = {(password) => this.onChangeTextHandler('password', password)}
              ref={(input) => this.password = input}
              secureTextEntry={true}/>
            </Item>
            <Item>
            <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="phone-android" />
              <Input placeholder="Mobile Number" value={this.state.mobile}
              onChangeText = {(mobile) => this.onChangeTextHandler('mobile', mobile)}
              ref={(input) => this.mobile = input}
              keyboardType="phone-pad"/>
            </Item>

            <ListItem button onPress={() => this.toggleCheckbox()}>
            <CheckBox checked={this.state.isChecked} 
            style={{marginTop:15}}
            color="green"
            onPress={() => this.toggleCheckbox()}/>
            <Body>
              <Text style={ [styles.TextStyle, { marginRight:100}] }>Terms & Conditions</Text>
            </Body>
            </ListItem>

              <Button block style={{marginTop: 15}}
              onPress= {()=> this.onBtnClick()}>
              <Text>Register</Text>
              </Button>
              
          </Form>



  		</View>
			)
	}
}


  /* <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "#00D318"
              selectionColor="#fff"
              keyboardType="default"
              onSubmitEditing={()=> this.email.focus()}
              onChangeText = {(username) => this.onChangeTextHandler('username', username)}
              value= {this.state.username}
              />
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor = "#00D318"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.mobile.focus()}
            onChangeText = {(email) => this.onChangeTextHandler('email', email)}
            ref= {(input) => this.email=input }
            value= {this.state.email}
            />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Mobile "
              placeholderTextColor = "#00D318"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {(mobile) => this.onChangeTextHandler('mobile', mobile)}
              ref={(input) => this.mobile = input}
              value= {this.state.mobile}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#00D318"
              ref={(input) => this.password = input}
              onChangeText = {(password) => this.onChangeTextHandler('password', password)}
              value= {this.state.password}
              />  
           <TouchableOpacity style={[styles.button, 
              onPress= {()=> this.onBtnClick()}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>   */
