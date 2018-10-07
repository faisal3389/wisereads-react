import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View
} from "native-base";
import styles from "./style";
import { connect } from 'react-redux';

import { ConfirmDialog } from 'react-native-simple-dialogs';

const drawerCover = require("../../../../assets/images/drawer-cover.png");
const drawerImage = require("../../../../assets/images/WiseReads-logo.png");

const datas = [
  {
    name: "user",
    mobile: '8985598255',
    route: "User",
    icon: "person-outline",
    bg: "#C5F442"
  },
  {
    name: "Your Orders",
    route: "YourOrders",
    icon: "shopping_basket",
    bg: "#DA4437",
  },
  {
    name: "About us",
    route: "AboutUs",
    icon: "info",
    bg: "#477EEA",
  },
  {
    name: "Contact us",
    route: "Footer",
    icon: "chat",
    bg: "#DA4437",
  },
  {
    name: "Logout",
    route: "Login",
    icon: "input",
    bg: "#C5F442",
  },
  
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      dialogVisible: false,
      currentRoute: '',
      userProfile: {}
    };
  }

  onItemClickHandler(data) {
    if(data.name === 'Logout')
      {
        this.setState({dialogVisible: true});
        this.setState({currentRoute: data.route});
      }else if(data.route === 'YourOrders') {
        this.props.navigator.navigate(data.route);
      }
  }

  onConfirmMessage(message) {
    this.setState({dialogVisible: false});
    this.props.navigator.navigate(this.state.currentRoute);
  }

  render() {
    const { navigator, userProfile } = this.props;

    if(userProfile !== undefined && userProfile!== this.state.userProfile) {
      this.setState({userProfile: userProfile});
    }
    return (
      <Container>
        <ConfirmDialog
          ref= {(input) => this.confirmBox=input }
          title="Confirm Logout"
          message="Are you sure you want to Logout?"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({dialogVisible: false})}
          positiveButton={{
              title: "YES",
              onPress: (title) => this.onConfirmMessage(title)
          }}
          negativeButton={{
              title: "NO",
              onPress: () => this.setState({dialogVisible: false})
          }}
            />


        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} /> 
          
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.onItemClickHandler(data)}
              >
                <Left>
                  <Icon
                    active
                    type='MaterialIcons'
                    name={data.icon}
                    style={{ color: "#2196F3", fontSize: 26, width: 30 }}
                  />
                 
                    {
                      userProfile && (
                        <View>
                            <Text style={styles.text}>
                            {this.state.userProfile.name}
                          </Text>
                            <Text style={styles.text}>
                              {this.state.userProfile.mobile}
                            </Text>
                    </View>
                      )
                    }
                    <View>
                        <Text style={styles.text}>
                            {(data.name ==='user' && userProfile!== undefined)? this.state.userProfile.name: data.name}
                          </Text>
                        <Text style={styles.text}>
                          {userProfile !== undefined? this.state.userProfile.mobile: data.mobile}
                        </Text>
                    </View>
                </Left>
              
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {

  const userProfile = state.login.userProfile;

  return {
    userProfile,
  }

}

export default connect(
  mapStateToProps,
)(SideBar)
