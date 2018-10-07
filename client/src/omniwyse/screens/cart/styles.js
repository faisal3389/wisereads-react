import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
    },
    itemBlock: {
      flexDirection: 'row',
      paddingBottom: 10,
    },
    itemImage: {
      width: 200,
      height: 200,
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

  export default styles
