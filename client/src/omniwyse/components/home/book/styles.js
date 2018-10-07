import { StyleSheet } from "react-native";

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    itemBlock: {
      flexDirection: 'row',
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
    buttonStyle: {
      color:'#ffffff',
      fontSize:16,
      fontWeight:'500'
  },
    itemImage: {
      width: 90,
      height: 80,
      borderRadius: 10,
    },
    itemMeta: {
      marginLeft: 15,
      justifyContent: 'center',
    },
    itemName: {
      fontSize: 20,
    },
    author: {
      fontSize: 14,
      color: "#111",
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