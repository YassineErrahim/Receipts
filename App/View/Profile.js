import React from 'react';
import {View , Text , StyleSheet , Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS , WIDTH , HEIGHT , FONTS, images, icons} from './../../constants';
import { Home , Like} from './';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();



const Profile = () => {
    return (
        <View style={{flex:1,backgroundColor: COLORS.white}}>
            <View style={{height:24}}/>
            <TitleSection />
            <HeaderSection />
            <BodySection />
        </View>
    );
}

const TitleSection = () => {
    return (
        <View style={styles.titleSection}>
            <Text style={FONTS.titleAppBar}>Settings</Text>
        </View>
    );
}

const HeaderSection = () => {
    return (
        <View style={styles.headerSection}>
            <View style={{height: HEIGHT * .2,flexDirection:'row',width:163,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:HEIGHT * .2,height:HEIGHT * .2,elevation:8,borderRadius: (HEIGHT * .2)/2,backgroundColor:COLORS.white,justifyContent:'center',alignItems:'center'}}>
                    <Image source={icons.man} style={{width:HEIGHT * 0.17,height:HEIGHT * 0.17,borderRadius:58}} />
                </View>
                <View style={{width:50,height:50,elevation:8,position:'absolute',right:0,borderRadius:25,backgroundColor:'rgba(252, 109, 63, 0.75)',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                        <Image source={icons.camera} style={{width:26,height:26}} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={FONTS.userName}>Yassine Errahimi</Text>
                <Text style={FONTS.userProfession}>Mobile Developer</Text>
            </View>
        </View>
    );
}

const BodySection = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="About" component={AboutSection} />
                <Tab.Screen name="Posts" component={PostsSection} />
                <Tab.Screen name="Settings" component={SettingsSection} />
            </Tab.Navigator>
    );
}


const AboutSection = () => {
    var skills = ["Team Work","Mobile Developer","Problem Solving","Self Learning","English","French","German","Arabic"];
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor:COLORS.white}}>
            <View style={{flex:2,justifyContent:'space-evenly'}}>
                <TouchableOpacity><Text style={{color: 'grey',fontSize:13,paddingLeft:9,fontFamily:'Rubik-Medium'}}>Edit Description</Text></TouchableOpacity>
                <Text style={{fontSize:16,width:WIDTH,paddingLeft:9,fontFamily:'Rubik-Medium'}}>Mobile Developer, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for.</Text>
            </View>
            <View style={{flex:3,width:WIDTH}}>
                <Text style={{color: 'grey',fontSize:13,paddingLeft:9,fontFamily:'Rubik-Medium'}}>Manage Your Skills</Text>
                <ScrollView style={{flex:1,width:WIDTH}}>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',paddingLeft:5,paddingTop:5}}>
                        {skills.map(item => {return (
                            <Skill skill={item}/>
                        );})}
                        <TouchableOpacity>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:10,paddingVertical:5,margin:4,backgroundColor:COLORS.primary,borderRadius:15}}>
                                <Image source={icons.add} style={{width:14,height:14,marginRight:3}} resizeMode={'contain'}/>
                                <Icon name="add" size={30} color="#900" />
                                <Text style={{fontSize:15,fontFamily:'Rubik-Medium',color:COLORS.white}}>Add Note</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:61}}></View>
                </ScrollView>
            </View>
        </View>
    );
}
const Skill = ({skill}) => {
    return (
        <View style={{paddingHorizontal:10,paddingVertical:5,margin:4,backgroundColor:COLORS.primary,borderRadius:15}}>
            <Text style={{fontSize:15,fontFamily:'Rubik-Bold',fontWeight:'600',color:COLORS.white}}>{skill}</Text>
        </View>
    );
}
const PostsSection = () => {
    return (
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity>
                <View style={{backgroundColor:COLORS.primary,paddingHorizontal:20,paddingVertical:10,borderRadius:10}}><Text style={{color:COLORS.white,fontWeight:'bold',fontSize:16}}>Add Post</Text></View>
            </TouchableOpacity>
        </View>
    );
}
const SettingsSection = () => {
    return (
        <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontWeight:'bold'}}>Settings Section</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    'titleSection':{
        justifyContent:'center',
        alignItems:'center',
        height:60,
    },
    'headerSection':{
        width:WIDTH,
        height:HEIGHT * .32,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    'bodySection':{
        backgroundColor:'red'
    }
    
});
export default Profile;