import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { normalize } from 'react-native-elements';
import TAB_HOME from './assets/home.png';
import TAB_PROFILE from './assets/profile.png';
import TAB_SETTING from './assets/setting.png';
import TAB_CART from './assets/cart.png';
import TAB_PLUS from './assets/plus.png';

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={styles.screen}>
      <Text>History Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function AnotherScreen() {
  return (
    <View style={styles.screen}>
      <Text>Another Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  // Create animated value
  const scale = React.useRef(new Animated.Value(1)).current;

  // Handle press in and out animations
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 2,
      useNativeDriver: true,
    }).start(onPress);
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={styles.customTabButton}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff',
            position: 'absolute',
            height: 72,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
        }}
        initialRouteName='Add Data'
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={focused ? '#e91e63' : '#000000'}
                  source={TAB_HOME}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={focused ? '#e91e63' : '#000000'}
                  source={TAB_SETTING}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={focused ? '#e91e63' : '#000000'}
                  source={TAB_PLUS}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={AnotherScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={focused ? '#e91e63' : '#000000'}
                  source={TAB_CART}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <Image
                  style={styles.icon}
                  tintColor={focused ? '#e91e63' : '#000000'}
                  source={TAB_PROFILE}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  activeIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 36,
  },
  inactiveIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
    marginHorizontal: 'auto',
  },
});
