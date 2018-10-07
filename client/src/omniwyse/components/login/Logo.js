import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  
          			source={require('../../../../assets/images/WiseReads-logo.png')}/>
          		{/* <Text style={styles.logoText}>Welcome to Wise Reads.</Text>	 */}
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
		alignItems: 'center',
		// backgroundColor: '#ffffff'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 1)'
  }
});