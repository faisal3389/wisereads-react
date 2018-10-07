
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
      backgroundColor:'#ff00ff',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      TextStyle: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 14,
        color: 'rgba(31,105,156,1)',
        textDecorationLine: 'underline',
      },
    headerContainer: {
        //flex: 1,
        height: 150,
        marginTop: 15,
        marginBottom: 35,
        justifyContent: 'center',
        alignItems:'center'
    },
    signUpheaderContainer: {
        //flex: 1,
        height: 150,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 40,
    },
    registerContainer: {
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 20,
    },
    loginText: {
        fontSize:18,
        color: 'rgba(31,105,156,1)'
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    fadedText: {
        color:'rgba(175,175,175,1)',
        fontSize:12,
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
  });


  