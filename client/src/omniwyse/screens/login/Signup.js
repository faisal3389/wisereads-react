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

import Logo from '../../components/login/Logo';
import { sendSignupRequest } from "../../actions/actions";
import SignupForm from '../../components/login/SignupForm';
import { styles } from "./styles";


 class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
    }
  }
 
  goBack() {
    this.props.navigation.navigate("Login")
  }

  onSignupBtnClick(userObj){
    this.props.sendSignupRequest(userObj)
  }

 

	render() {
    const { signedUpUser } = this.props
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
      <SignupForm type="Signup" onButtonPress= {(userObj)=> this.onSignupBtnClick(userObj) }/>
      </Content>

      <Footer>
        <FooterTab>
          <Button active onPress={() => this.goBack()}>
          <Text>Login Account</Text>
          </Button>
          <Button  >
          <Text>Skip Registration</Text>
          </Button>
        </FooterTab>
      </Footer>
        {
          signedUpUser && (
          this.props.navigation.navigate('Login')
        )
        }
    </Container>
			)
	}
}

Signup.propTypes = {
  navigation: PropTypes.object.isRequired,
  sendSignupRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { signedUpUser } = state.signup
  return {
    signedUpUser,
  }

}

export default connect(
mapStateToProps,
{
  sendSignupRequest
}
)(Signup)



{/* <View style={styles.container}>
<Logo/>
 <SignupForm type="Signup" onButtonPress= {(userObj)=> this.onSignupBtnClick(userObj) }/> 
<View style={styles.signupTextCont}>
  <Text style={styles.signupText}>Already have an account?</Text>
  <TouchableOpacity onPress={() => this.goBack()}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
</View>
{
  signedUpUser && (
    this.props.navigation.navigate('Login')
  )
}
</View> */}	

