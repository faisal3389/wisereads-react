import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { connect } from "react-redux";

import { styles } from './styles'
import { Container, Content } from 'native-base';

 class Payment extends Component {

constructor(props) {
    super (props);
}

render() {

    const { order } = this.props;

    return(

        <View style={styles.container}>
                <View >
                    <Text style={ styles.headerText}>Cash On Delivery </Text>
                </View>
                <View style= {styles.textblock}>
                    <Text>As of Today, we only accepting Cash On Delivery </Text> 
                    <Text> {`Payable Amount : ${order.order.total_amount}`}</Text>
                </View>
        </View>
    )
}

}


function mapStateToProps(state) {
    const { order }   = state.cart;
    return {
        order,
    }
  }

export default connect(
    mapStateToProps,
  
    )(Payment)