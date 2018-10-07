//libs
import { createStackNavigator } from 'react-navigation';
import {Platform} from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";

//app
import Login        from './login/Login';
import Signup       from './login/Signup'
import Home         from './home/Home'
import Cart         from './cart/Cart'
import Checkout     from './checkout/checkout';
import BookDetails  from './bookDetails/BookDetails';
import ForgotPassword from './login/ForgotPassword';
import SuccessPage from '../components/buy/SuccessPage';
import YourOrders from './orders/YourOrders';



const App = StackNavigator({
    
    Login: { screen: Login},

    Signup: { screen: Signup },

    Home: {screen: Home },

    YourOrders: { screen: YourOrders},

    BookDetails: {screen: BookDetails },

    Cart: {screen: Cart },

    Checkout: {screen: Checkout },

    ForgotPassword: {screen: ForgotPassword},

    SuccessPage: {screen: SuccessPage},

},

  {
    initialRouteName: "Login",
    headerMode: "none"
  });
export default App;