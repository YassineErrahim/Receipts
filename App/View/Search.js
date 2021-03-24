
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {SafeAreaView, Button, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import {WIDTH , HEIGHT, images, icons, COLORS , FONTS} from './../../constants';

const Search = ({navigation,content}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{height:24}}></View>
            <TitleSection />
            <HeaderSection />
            <View style={{height:10}} />
            <BodySection navigation={navigation}  content={content}/>
        </SafeAreaView>
    );
};
const TitleSection = () => {
    return (
        <View style={{height:62,width:WIDTH,marginBottom:13,color:COLORS.black,flexDirection:'row',justifyContent:'center',alignItems:'center',fontWeight:'bold'}}>
            <Text style={FONTS.titleAppBar}>Products</Text>
            <TouchableOpacity onPress={() => {alert('filter')}} style={{position:'absolute',right:0,marginRight:20}}>
                <Image source={icons.filter} style={{width:25,height:25}} resizeMode={'contain'} />
            </TouchableOpacity>
        </View>
    );
}
const HeaderSection = ({}) => {
    return (
        <View style={{height:60,width:WIDTH,flexDirection:'row',paddingLeft:20,paddingTop:10,paddingBottom:10,paddingRight:20,justifyContent:'space-between',alignItems:'center'}}>
            {/* <View style={{flex:6,paddingRight:20}}>
                <TextInput style={{flex:1,color:COLORS.black,fontWeight:'700',elevation:4,borderRadius:30,paddingLeft:30,borderWidth:2,borderColor:'#FC6D3F'}} />
            </View> */}
            <View style={{justifyContent:'space-between'}}>
                <Text style={FONTS.h3}>Discover</Text>
                <Text style={{fontSize:16,fontWeight:'200',color:'grey'}}>New Receipts && Ideas</Text>
            </View>
            <View style={{flex:1}}></View>
            <View style={{width:WIDTH * .32,height:53,paddingRight:4,borderRadius:3,backgroundColor:COLORS.lightGray3,justifyContent:'center',alignItems:'center',elevation:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TextInput placeholder={'Search...'} style={{flex:1,color:COLORS.black,fontWeight:'700',borderRadius:30,paddingLeft:30}} />
                <Image source={icons.search_grey} style={{width:25,height:25,borderRadius:15}} resizeMode={'contain'} /> 
            </View>
        </View>
    );
}

const BodySection = ({content,navigation}) => {
    return (
        <View style={{flex:1,width:WIDTH}} >
            <ScrollView style={{paddingTop:10}}>
                {content.map((item)=>{return(<BodyCard navigation={navigation} card={item} />);})}
                <View style={{height:70}}/>
            </ScrollView>
        </View>
    );
}
const BodyCard = ({card,navigation}) => {
    var [isLikePressed,setLikeIsPressed] = useState(false);
    var [isAddToCardPressed,setAddToCardPressed] = useState(false);
    return (
        <TouchableOpacity key={card.id}  onPress={() => {navigation.navigate('Order',{id:card.id,'selectedCategory':card.category})}}>
                    <View style={{flex:1,height:163,elevation:5,borderBottomLeftRadius:10,borderTopRightRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,flexDirection:'row',alignItems:'center',margin:13}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={card.image} style={{width: WIDTH *.4,height:159,marginTop:3.5,borderTopLeftRadius:10,borderBottomLeftRadius:10}} resizeMode={'cover'} />
                            </View>
                            <View style={{height:160,flex:1,borderTopRightRadius:5,borderBottomRightRadius:5,justifyContent:'space-around',alignItems:'flex-start',padding:10,marginRight:5}}>
                                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={FONTS.cardTitle}>{card.title}</Text>
                                    <View style={{flex:1}} />
                                    <TouchableOpacity onPress={() => {setAddToCardPressed(!isAddToCardPressed);}}>
                                        <Image source={isAddToCardPressed ? icons.addToCartPrimary : icons.addToCart} style={{width:25,height:25}} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,flexDirection:"row",justifyContent:'flex-start',alignItems:'center'}}>
                                    <Text style={{color:COLORS.black,fontSize:19,marginRight:20}}>{card.price} $</Text>
                                    <Text style={{color:COLORS.darkgray,fontSize:12,textDecorationLine:'line-through'}}>{Math.floor(card.price * 1.4)} $</Text>
                                </View>
                            
                                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                        <Image source={icons.star} style={{width:25,height:25,marginRight:10}} />
                                        <Text style={{color:'lightgrey'}}>({Math.floor(card.stars * 100)} Reviews)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {setLikeIsPressed(!isLikePressed);}}>
                                        <Image source={isLikePressed ? icons.heart_primary: icons.heart} style={{width:25,height:25}} resizeMode={'contain'}/>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                    </View>
        </TouchableOpacity>
   );
}

const onCardPressed = ({card}) => {
    alert('hello '+card.id);
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : COLORS.white,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    text : {
        color : 'white',
        fontSize:24,
        fontWeight:'bold'
    },
    button : {
        backgroundColor : '#999306',
        width : 100,
        height : 100,
        alignSelf : 'flex-end',
    },
});

export default Search;