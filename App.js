// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './app/RegistrationScreen';
import LoginScreen from './app/LoginScreen';
import Sidebar from './app/home/Sidebar';
import Layout from './app/home/Layout'
import { ThemeProvider } from './app/context/ThemeContext';
import Dashboard from './app/home/Dashboard.js';
import Header from './app/home/Header.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Layout}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
