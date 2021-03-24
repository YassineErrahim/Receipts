import React from 'react';
import {Image , View, Text, ImageBackground} from 'react-native'
import {BottomTabBar,createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg , {Path} from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import {HomeController,ProfileController,LikeController,SearchController} from '../Controller';
import {Home,Like,Search,Profile} from './';


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected;
        if(isSelected){
            return (
                <View style={{ flex: 1, alignItems: "center"}}>
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0 ,elevation:15}}>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                        <Svg
                            width={75}
                            height={61}
                            viewBox="0 0 75 61">
                            <Path d="M0 0.999997C0 0.999997 1.5 -4 8.5 17C15.5 38 32.5 38.5 38 38.5C43.5 38.5 59.5 38 66.5 17C73.5 -4 75 0.999997 75 0.999997V62H0V0.999997Z" fill="white"/>


                        </Svg>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    </View>
    
                    <TouchableOpacity
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 23,
                            backgroundColor: COLORS.white,
                            elevation:10,
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            )
        }else {
            return (
                <View style={{ flex: 1, alignItems: "center",backgroundColor:'white',}}>
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                        <View style={{width:75,height:61}} />
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    </View>
    
                    <View style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.white}}>
                            <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        width:60,
                                        height: 60,
                                        backgroundColor: COLORS.white
                                    }}
                                    activeOpacity={1}
                                    onPress={onPress}
                            >
                                {children}
                            </TouchableOpacity>
                    </View>
                </View>
            )
        }

}



const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const Tabs = ({home,search,like,profile,props}) => {
    return (
        <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        borderTopWidth: 0,
                        backgroundColor: "transparent",
                        elevation: 0
                    }
                }}
                tabBar={(props) => (
                    <CustomTabBar
                        props={props}
                    />
                )}>
        <Tab.Screen  name="Home"
            component={home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.cutlery}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
        />

        <Tab.Screen name="Search"
            component={search}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
        />

        <Tab.Screen name="Like"
            component={like}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.like}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
        />

        <Tab.Screen name="Profile"
            component={profile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
        />

    </Tab.Navigator>

   )
}

export default Tabs;