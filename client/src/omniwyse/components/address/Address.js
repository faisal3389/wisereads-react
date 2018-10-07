
import React, {Component } from 'react';
import { View, Container, Content, Card, 
        CardItem, Header, Body, Left, Right, Text
        } from 'native-base';


export class Address extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: {}
        };

    }

    render() {

        const { address } = this.props;

        return (
            <View>
                <Card>
                    <CardItem header  >
                    <Text>{address.name}</Text>
                    </CardItem>
                    <CardItem  >
                    <Body>
                        <Text>
                        {address.area}
                        </Text>
                        <Text>{address.city}</Text>
                    </Body>
                    </CardItem>
                    <CardItem footer button onPress={() => alert("As of now our services available here only")}>
                    <Text>Change / Add address</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }
}