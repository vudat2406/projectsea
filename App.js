import React from 'react';
import {StyleSheet, Text,View,Image,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Contact from './src/screen/contact'
import ContactDetail from './src/screen/contactDetail'

function App() {
  const HomeStack = createNativeStackNavigator();
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Contact" component={Contact}  
          options={{
            header: () => (
              <View style={{
                backgroundColor:'#C0D17D',
                borderBottomLeftRadius:10,
                borderBottomRightRadius:10,
                height:84,
                justifyContent:'center'
              }}>
                <Image
                  source={require('./assets/icon/Asset16.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:15,
                    width:20,
                    height:20,
                    left:15,
                  }}
                />
                <Image
                  source={require('./assets/icon/Asset15.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:15,
                    width:90,
                    height:20,
                    left:55,
                  }}
                />
                <Image
                  source={require('./assets/icon/Asset9.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:15,
                    width:15,
                    height:15,
                    right:105,
                  }}
                />
                <Image
                  source={require('./assets/icon/12.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:20,
                    width:15,
                    height:15,
                    right:95,
                  }}
                />
                <Image
                  source={require('./assets/icon/Asset10.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:15,
                    width:15,
                    height:15,
                    right:60,
                  }}
                />
                <Image
                  source={require('./assets/icon/Asset13.png')}
                  resizeMode='contain'
                  style={{
                    position:'absolute',
                    bottom:15,
                    width:15,
                    height:15,
                    right:15,
                  }}
                />
              </View>
            )
          }} 
        />
        <HomeStack.Screen name="ContactDetail" component={ContactDetail} options={{
          header: () => (
            <View style={{
              backgroundColor:'#C0D17D',
              borderBottomLeftRadius:10,
              borderBottomRightRadius:10,
              height:84,
              justifyContent:'center'
            }}>
              <Image
                source={require('./assets/icon/Asset16.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:15,
                  width:20,
                  height:20,
                  left:15,
                }}
              />
              <Image
                source={require('./assets/icon/Asset15.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:15,
                  width:90,
                  height:20,
                  left:55,
                }}
              />
              <Image
                source={require('./assets/icon/Asset9.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:15,
                  width:15,
                  height:15,
                  right:105,
                }}
              />
              <Image
                source={require('./assets/icon/12.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:20,
                  width:15,
                  height:15,
                  right:95,
                }}
              />
              <Image
                source={require('./assets/icon/Asset10.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:15,
                  width:15,
                  height:15,
                  right:60,
                }}
              />
              <Image
                source={require('./assets/icon/Asset13.png')}
                resizeMode='contain'
                style={{
                  position:'absolute',
                  bottom:15,
                  width:15,
                  height:15,
                  right:15,
                }}
              />
            </View>
          )
            
        }}/>
      </HomeStack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <HomeStackScreen/>
    </NavigationContainer>
  );
}

export default App;
