// Sidebar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Sidebar = () => {
  const navigation = useNavigation();
  const [showIconNames, setShowIconNames] = useState(true);

  const toggleIconNames = () => {
    setShowIconNames(!showIconNames);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.sidebar}>
       <View style={styles.sidebarTitle}>
          <TouchableOpacity >
            <View style={styles.sidebarBrand}>
              <Icon name="chart-line" size={24} color="white" style={styles.iconHeader} />
              <Text style={styles.sidebarText}>Stock Market</Text>
            </View>
          </TouchableOpacity>
        </View>
      <TouchableOpacity onPress={toggleIconNames} style={styles.menuIcon}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>
      {showIconNames && (
        <View>
          <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.sidebarItem}>
            <Icon name="home" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Dashboard')} style={styles.sidebarItem}>
            <Icon name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Stocks')} style={styles.sidebarItem}>
          <Icon name="grid" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Stock & Fund</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarItem}>
          <Icon name="account" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Registration')} style={styles.sidebarItem}>
          <Icon name="lock" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Charts')} style={styles.sidebarItem}>
          <Icon name="chart-bar" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Charts</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Settings')} style={styles.sidebarItem}>
          <Icon name="cog" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Contact')} style={styles.sidebarItem}>
          <Icon name="email" size={24} color="white" style={styles.icon} />
          <Text style={styles.sidebarText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#2c3e50', // Change this to your desired sidebar color
    width: '40%', // Fixed 30% width
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1, // Ensure the sidebar is above other content
  },
  menuIcon: {
    marginBottom: 20,
  },
  sidebarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  sidebarText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;



















// // Sidebar.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { useTheme } from '../context/ThemeContext';
// import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// function Sidebar({ openSidebarToggle, OpenSidebar, navigation }) {
//   const { theme } = useTheme();
//   const iconSize = 24;

//   const navigateToScreen = (screenName) => {
//     navigation.navigate(screenName);
//     OpenSidebar(); // Close the sidebar after navigation
//   };

//   return (
//     <View style={[styles.sidebar, { backgroundColor: theme.background, color: theme.text }]}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
        // <View style={styles.sidebarTitle}>
        //   <TouchableOpacity onPress={OpenSidebar}>
        //     <View style={styles.sidebarBrand}>
        //       <Icon name="chart-line" size={24} color={theme.text} style={styles.iconHeader} />
        //       <Text style={styles.brandText}>Stock Market</Text>
        //     </View>
        //   </TouchableOpacity>
        //   <TouchableOpacity style={styles.closeIcon} onPress={OpenSidebar}>
        //     <Text style={styles.closeText}>X</Text>
        //   </TouchableOpacity>
        // </View>

//         <View style={styles.sidebarList}>
//           <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.sidebarListItem}>
//             <Icon name="home" size={iconSize} color={theme.text} style={styles.icon} />
//             <Text style={styles.listText}>Home</Text>
//           </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigateToScreen('Dashboard')} style={styles.sidebarListItem}>
//           <Icon name="archive" size={iconSize} color={theme.text} style={styles.icon} />
//           <Text style={styles.listText}>Dashboard</Text>
//         </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Stocks')} style={styles.sidebarListItem}>
      //     <Icon name="grid" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Stock & Fund</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarListItem}>
      //     <Icon name="account" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Login</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Register')} style={styles.sidebarListItem}>
      //     <Icon name="lock" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Register</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Charts')} style={styles.sidebarListItem}>
      //     <Icon name="chart-bar" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Charts</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Settings')} style={styles.sidebarListItem}>
      //     <Icon name="cog" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Settings</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity onPress={() => navigateToScreen('Contact')} style={styles.sidebarListItem}>
      //     <Icon name="email" size={iconSize} color={theme.text} style={styles.icon} />
      //     <Text style={styles.listText}>Contact Us</Text>
      //   </TouchableOpacity>
      // </View>
//     </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sidebar: {
//     flex: 1,
//     width: '80%',
//     paddingTop: 40,
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   sidebarTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   sidebarBrand: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconHeader: {
//     marginRight: 10,
//   },
//   brandText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   closeIcon: {
//     padding: 10,
//   },
//   closeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   sidebarList: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
//   sidebarListItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   listText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default Sidebar;
