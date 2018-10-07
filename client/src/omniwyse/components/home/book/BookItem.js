import React, { Component } from 'react';
import { 
        TouchableOpacity, 
         View,
         Text,
        Image } from 'react-native';
import { styles } from "./styles";
import { Container, Footer, Left, Right, Card, CardItem, 
  Thumbnail, Content, Icon, Body, Picker
  } from "native-base";


class BookItem extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      selected: "5"
    };
  }
    onPress () {
      this.props.onPressItem(this.props.product);
    }

    onBtnClick(){
        this.props.onAddToCart(this.props.id, this.props.title)
      }

      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

      onRentBtnClick() {
        this.props.onRentBtnClick(this.props.product);
      }
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      let image_url  = this.props.imageUrl;
      if(image_url === null) {
          image_url = 'https://omniwyse-library.s3.us-east-2.amazonaws.com/book-images/11-brown-book-png-image-image.png'
        }

      return (

        <View >

        <Card>
          <TouchableOpacity onPress= {() => this.onPress()}>
            <CardItem>
              <Left>
                <View style={styles.itemBlock}>
                  <Image source={{uri: image_url}} style={styles.itemImage}/>
                  </View>
              </Left>
              <Right>
                <View style={styles.itemMeta}>
                <Text style={styles.itemName}>{this.props.title}</Text>
                <Text style={styles.itemLastMessage}>{this.props.author}</Text>
                {/* <Text style={styles.itemLastMessage}>{price}</Text> */}
                </View>
              </Right>
            </CardItem>
          </TouchableOpacity>
          
          <CardItem footer bordered>
          <Left>

            <View style={styles.itemBlock}>
              <Text>Rent For </Text>
            </View>

            <View style={styles.itemBlock}>
                <Picker
              mode="dropdown"
              iosHeader="Rent For"
              iosIcon={<Icon  name="arrow-dropdown" style={{ color: "#007aff", fontSize: 25 }} />}
              
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={(value) => this.onValueChange(value)}
            >
              <Picker.Item label="1 day" value="5" />
              <Picker.Item label="3 days" value="10" />
              <Picker.Item label="1 week" value="40" />
              <Picker.Item label="15 days" value="60" />
              <Picker.Item label="1 month" value="80" />
            </Picker>

               
              </View>
              <View style={styles.itemBlock}>
              <Text>Rs. {this.state.selected}</Text>
              </View>
          </Left>
          <Right button>
         
            <TouchableOpacity style={[styles.itemBlock, styles.buttonStyle]} onPress={() => this.onRentBtnClick()}>
                <Text style={{color: 'blue'}}>RENT</Text>
              </TouchableOpacity>
          </Right>
          </CardItem>
        </Card>
      
    
        

    </View>  


      );
    }
  }


  export default BookItem