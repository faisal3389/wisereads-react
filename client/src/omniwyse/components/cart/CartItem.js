import React, { Component } from 'react';
import { StyleSheet,
        TouchableOpacity, 
         View,
         Text,
        Image } from 'react-native';
import QuantitySelector from './QuantitySelector';
import NumericInput,{ calcSize } from 'react-native-numeric-input';

import { Container, Footer, Left, Right, Card, CardItem, 
          Thumbnail, Content, Icon, Body, 
          } from "native-base";


export default class CartItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 1,
      price: 0,
      rent: 10,
      totalPrice: 0,
    }
  }

    onPress (){
      this.props.onPressItem(this.props.product);
    }

    onRemoveItemFromCart() {
      this.props.removeItemFromCart(this.props.product)
    }

    onQunatityValueChange(value) {
      if(value >= 0)
      {
        let { product }   = this.props;
        product.quantity  = value;
        this.props.onNotifyQuantityChange(product)
        this.setState({value})
      }
    }

    componentDidMount() {

    }
  
    render() {
      const { title, author, image_url, price, totPrice, quantity } = this.props.product;
      if(this.state.totalPrice !== totPrice)
        this.setState({totalPrice: totPrice});
      
        if(this.state.value !== quantity)  
          this.setState({value: quantity});

      return (
              // <View>

                <Card>
                  <CardItem>
                    <Left>
                      <View style={styles.itemMeta}>
                      <Text style={styles.itemName}>{title}</Text>
                      <Text style={styles.itemLastMessage}>{author}</Text>
                      <Text style={styles.itemLastMessage}>{price}</Text>
                      </View>
                    </Left>
                    <Right>
                      <View style={styles.itemBlock}>
                        <TouchableOpacity onPress={() => this.onPress()}>
                        <Image source={{uri: image_url}} style={styles.itemImage}/>
                        </TouchableOpacity>
                        </View>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                  <Left>
                    <View style={styles.itemBlock}>
                        <Text>Quantity</Text>
                        <NumericInput 
                          value={this.state.value} 
                          minValue={1}
                          maxValue={10}
                          onChange={value => this.onQunatityValueChange(value)} 
                          totalWidth={calcSize(150)} 
                          totalHeight={calcSize(50)} 
                          iconSize={calcSize(25)}
                          step={1}
                          valueType='integer'
                          rounded 
                          textColor='#B0228C' 
                          iconStyle={{ color: 'white' }} 
                          rightButtonBackgroundColor='#81d4fa' 
                          leftButtonBackgroundColor='#9adcfb'/>
                      </View>
                  </Left>
                  <Right button>
                    <TouchableOpacity style={styles.itemBlock} onPress={() => this.onRemoveItemFromCart()}>
                        <Icon type='MaterialIcons' 
                               name="delete" />
                        <Text>Remove</Text>
                      </TouchableOpacity>
                  </Right>
                  </CardItem>
                </Card>
              
            
                

            // </View>  
           
      );
    }
  }

  const styles = StyleSheet.create({
    itemBlock: {
      flexDirection: 'row',
      paddingBottom: 10,
      marginTop: 15,
      justifyContent: 'center',
        alignItems:'center',
    },
    block: {
      flexDirection: 'row',
      paddingHorizontal:50,
      /* paddingBottom: 10,
      marginTop: 15,
       */
    },
    itemImage: {
      width: 70,
      height: 80,
      borderRadius: 25,
    },
    itemMeta: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    qtyText: {
      marginLeft: 50,
      justifyContent:'center'
    }, 
    itemName: {
      fontSize: 20,
    },
    priceName: {
      fontSize: 20,
      marginLeft:40,
    },
    itemLastMessage: {
      fontSize: 14,
      // color: "#111",
    },
    separator: {
      height: 0.5,
      width: "80%",
      alignSelf: 'center',
      backgroundColor: "#555"
    },
    header: {
      padding: 10,
    },
    headerText: {
      fontSize: 30,
      fontWeight: '900'
    } ,
  button: {
    width:100,
    backgroundColor:'#1c313a',
     borderRadius: 10,
      marginVertical: 5,
      paddingVertical: 6
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  });
