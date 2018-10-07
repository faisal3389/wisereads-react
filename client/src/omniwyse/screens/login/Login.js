import React, { Component } from 'react';
import {
  StyleSheet,
  
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Container, Header, Left, 
        Body, Right, Button, Icon, Title, Content , 
        Input,Item, Form, Footer, FooterTab, StyleProvider, Text
        } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';


import Logo from '../../components/login/Logo';
import { styles } from "./styles";
import { sendLoginRequest, getAllProducts } from "../../actions/actions";
import { LoginInfo } from '../../components/login/loginInfo'
import commonColor from '../../../../native-base-theme/variables/commonColor';
import platform from '../../../../native-base-theme/variables/platform';

//import {Actions} from 'react-native-router-flux';

 class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: 'raj.virtuali@gmail.com',
      password: 'Raju@123'
    };
  }

	signup() {
  //	Actions.signup()
  this.props.navigation.navigate("Signup")
  }
  
  onLoginBtnClick() {

    let loginInfo       = new LoginInfo();
    loginInfo.username  = this.state.username;
    loginInfo.email     = this.state.email;
    loginInfo.password  = this.state.password;

    /* let userCredentials = {}
    userCredentials.email  = emailId;
    userCredentials.password  = password; */
    this.props.sendLoginRequest(loginInfo);
  }

  onForgotPasswordClick() {
    this.props.navigation.navigate("ForgotPassword");
  }

	render() {
    const { user, sendLoginRequest, getAllProducts } = this.props
    const { username, email } = this.state;
    console.log(username.length)
		return(

      <StyleProvider style={getTheme(platform)}>
      <Container >
      <Header style={styles.headerContainer}>
        <Left>
        
        </Left>
        <Body >
          <Logo/>
        </Body>
        <Right />
      </Header>
      <Content padder>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
          <Text style={styles.fadedText}>(Enter Mobile no./ Email to login)</Text>
      </View>
      {/* To-Do - refactor with the Form  */}
      <Form>
            <Item>
              <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="person-outline" />
              <Input placeholder="Mobile / E-Mail" 
               onChangeText = {(value) => this.onChangeTextHandler(value)}
               value= {username.length >=3? username: email}
               onSubmitEditing={()=> this.password.focus()}
              />
            </Item>
            <Item style={{marginTop: 15}}>
            <Icon type='MaterialIcons' style={{color: '#2196F3'}} active name="lock" />
              <Input placeholder="Password" 
              ref={(input) => this.password = input}
              onChangeText = {(password) => this.setState({password})}
              value= {this.state.password}
              secureTextEntry={true}
              />
              
            </Item>
              <Button block style={{marginTop: 30}}
              onPress= {()=> this.onLoginBtnClick()}
              >
              <Text>Login</Text>
              </Button>
              <TouchableOpacity onPress= {()=> this.onForgotPasswordClick()}>
              <Text style={ styles.TextStyle } >Forgot Password</Text>
              </TouchableOpacity>

          </Form>
      </Content>
      <Footer>
        <FooterTab style={{tabBarTextColor: '#fff'}}>
          <Button active onPress={() => this.signup()}>
          <Text>Rigester Account</Text>
          </Button>
          <Button  >
          <Text>Skip account</Text>
          </Button>
        </FooterTab>
      </Footer>

      {
        user && (
        this.props.getAllProducts(),
        this.props.navigation.navigate('Home'))
      }
    </Container>
    </StyleProvider>




      
			)
	}
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  sendLoginRequest: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state.login
  return {
    user,
  }

}

export default connect(
 mapStateToProps, 
  {
    getAllProducts,
    sendLoginRequest
  },
)(Login)

/* <Form type="Login" onButtonPress= {(emailId, password)=> this.onLoginBtnClick(emailId, password) }/>
<View style={styles.signupTextCont}>
  <Text style={styles.signupText}>Don't have an account yet?</Text>
  <TouchableOpacity onPress={() => this.signup()}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
</View>
{
  user && (
    this.props.getAllProducts(),
    this.props.navigation.navigate('Home'))
} */

