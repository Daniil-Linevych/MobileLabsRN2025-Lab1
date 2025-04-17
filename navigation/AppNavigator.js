import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Gallery') {
                iconName = focused ? 'image' : 'image-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account' : 'account-outline';
              }

              return <Icon name={iconName} size={24} color={color} />;
            },
            tabBarShowIcon: true,
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
                {route.name === 'Home' ? 'Головна' : route.name === 'Gallery' ? 'Фотогалерея' : 'Профіль'}
              </Text>
            ),
            tabBarStyle: { backgroundColor: '#b5b5b5' }, 
            tabBarIndicatorStyle: { backgroundColor: 'white' },
          })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;