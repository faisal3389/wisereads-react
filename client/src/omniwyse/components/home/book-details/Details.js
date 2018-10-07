import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Toast, {DURATION} from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/FontAwesome';


import { styles } from './styles';
import {    addToCart, 
            addToCartSuccess, 
            addToCartFailure,
            cartRequest,} from "../../../actions/actions";
import { Container, Card, CardItem, Body, Left, Right } from 'native-base';

export default class Details extends Component {

    constructor (props) {
        super(props);
        this.state = {
            product : {},
            isDisable: false,
        }
    }


    

    render() {
        const { product } = this.props

        return (

            <Container >
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: product.image_url}} style={styles.itemImage} />
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text style={{color: 'blue'}}>{product.title}</Text>
                                <Text>{product.author}</Text>
                                <Text>Rent: {product.rent?product.rent.day:10}</Text>
                                <Text>Buy: {product.price}</Text>
                                <Text>{product.description}</Text>
                            </Body>
                    </CardItem>

                </Card>
            </Container>
        )
    }
}

