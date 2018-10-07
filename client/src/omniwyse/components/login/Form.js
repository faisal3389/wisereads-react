import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import { Container, Header, Left, 
  Body, Right, Button, Icon, Title, Content , 
  Input,Item, Form, Footer, FooterTab,
  } from 'native-base';

import {LoginInfo} from './loginInfo';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: null,
      email: 'raju@test.com',
      password: 'Raju@1234'
    };
  }

  onChangeTextHandler(value) {
    const emailReg      =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail  = emailReg.test(value);

    if(isValidEmail){
      this.setState({email: value})
    }
    else {
      this.setState({username: value})
    }
  }

  onBtnClick(){
    let loginInfo       = new LoginInfo();
    loginInfo.username  = this.state.username;
    loginInfo.email     = this.state.email;
    loginInfo.password  = this.state.password;

    this.props.onButtonPress(loginInfo)
  }

	render(){
    const { username, email } = this.state;

		return(
			<View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>LOGIN</Text>
          <Text style={styles.fadedText}>(Enter Mobile no./ Email to login)</Text>
        </View>
      
          <Form>
              <Item>
                <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="person-outline" />
                <Input placeholder="Mobile / E-Mail" 
                onChangeText = {(value) => this.onChangeTextHandler(value)}
                value= {username!== null? username: email}
                onSubmitEditing={()=> this.password.focus()}
                />
              </Item>
              <Item style={{marginTop: 15}}>
              <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="lock" />
                <Input placeholder="Password" 
                ref={(input) => this.password = input}
                onChangeText = {(password) => this.setState({password})}
                value= {this.state.password}
                />
              </Item>
                <Button block style={{marginTop: 30}}
                onPress= {()=> this.onBtnClick()}
                >
                <Text>Login</Text>
                </Button>
                <Text style={ styles.TextStyle } >Forgot Password</Text>
        </Form>
  	</View>
			)
	}
}

const styles = StyleSheet.create({

  loginContainer: {
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 40,
},
  TextStyle: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
    color: 'rgba(31,105,156,1)',
    textDecorationLine: 'underline',
  },
loginText: {
  fontSize:18,
  color: 'rgba(31,105,156,1)'
},
fadedText: {
  color:'rgba(175,175,175,1)',
  fontSize:12,
},

});