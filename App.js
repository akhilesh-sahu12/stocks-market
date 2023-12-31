import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './app/RegistrationScreen';
import LoginScreen from './app/LoginScreen';
import Layout from './app/home/Layout'
import { ThemeProvider } from './app/context/ThemeContext';
import DashboardScreen from './app/home/DashboardScreen.js';
import NewsFetcher from './app/news/NewsFetcher.js';
import StockDataFetcher from './app/charts/StockDataFetcher.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Layout}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Charts" component={StockDataFetcher} />
        <Stack.Screen name="News" component={NewsFetcher}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
