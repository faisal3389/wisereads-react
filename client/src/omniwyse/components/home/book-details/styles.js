import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
    },
    itemBlock: {
      flexDirection: 'row',
      paddingBottom: 10,
    },
    itemImage: {
      flex: 1,
      width: null,
      height: 300,
      borderRadius: 40,
      marginTop: 30,
    },
    itemMeta: {
      
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemName: {
      fontSize: 20,
     
    },
    author: {
      fontSize: 20,
    
    },
    textblock: {
      color: "#111",
      justifyContent: 'center',
      alignItems:'center',
    },
    separator: {
      height: 0.5,
      width: "80%",
      alignSelf: 'center',
      backgroundColor: "#555",
    },
    header: {
      padding: 10,
    },
    footer: {
      width: '100%',
      bottom:0,
      alignItems:'center',
      justifyContent:'center',
      position: 'absolute',

    },
    headerText: {
      fontSize: 30,
      fontWeight: '900'
    },
  button: {
    width:300,
    height: 30,
    backgroundColor:'#1c313a',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  });





  /* const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1
    },
    header: {
      alignItems: 'center',
      backgroundColor: '#FAFAFF',
      paddingBottom: 4,
      borderBottomColor: '#F2F2F7',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    manager: {
      paddingBottom: 10,
      alignItems: 'center'
    },
    picture: {
      width: 80,
      height: 80,
      borderRadius: 40
    },
    smallPicture: {
      width: 40,
      height: 40,
      borderRadius: 20
    },
    mediumText: {
      fontSize: 16,
    },
    bigText: {
      fontSize: 20
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#AAAAAA',
    },
    list: {
      flex: 1,
    },
    emptyList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    lightText: {
      color: '#C7C7CC'
    }
  }); */