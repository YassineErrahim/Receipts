
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button , Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, icons,HEIGHT, images, WIDTH } from '../../constants';

const HeightHeadContainer = (HEIGHT - 24 - 45) * .439;

const Order = ({navigation,card}) => {
    return (
        <View style={styles.container}>
            <StatusBar animated={true}
                backgroundColor={COLORS.lightGray4}
                barStyle={'light-content'}
                hidden={false}
                style={{color:'#fff'}}
                />
            <AppBar navigation={navigation} title={card.title}/>
            <Body card={card} title={card.title}/>
        </View>
    );
};

const AppBar = ({navigation,title}) => {
    return (
        <View style={styles.appBar}>
            <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                <Image source={icons.back} style={{width:30,height:30,marginLeft:20}} resizeMode={'contain'}/>
            </TouchableOpacity>
        </View>
    );
}


const Body = ({card}) => {
    var imageSizeWidth = WIDTH * .65;
    var imageRadius = imageSizeWidth /2;
    const [foodQuantity,setFoodQuantity] = useState(1);
    const [dotPosition,setDotPosition] = useState(card.ingredients[0]);
    var color = foodQuantity == 1 ? COLORS.lightGray : COLORS.black;
    return (
        <View style={styles.body}>
            <View style={{flex:1,width:WIDTH}}>
                <View style={{height:imageSizeWidth+28,justifyContent:'center',alignItems:'center',backgroundColor:COLORS.lightGray4}}>
                    <View style={{position:'absolute',justifyContent:'center',alignItems:'center',height:imageSizeWidth+4,width:imageSizeWidth+4,borderRadius:imageRadius,elevation:5}}>
                            <Image  source={card.image} style={{height:imageSizeWidth,width:imageSizeWidth,borderRadius:imageRadius}} resizeMode={'cover'}/>
                    </View>
                    <View style={{position:'absolute',flexDirection:'row',justifyContent:'space-around',marginBottom:4,width:imageSizeWidth * .53,height:49,borderRadius:35,bottom:5,backgroundColor:COLORS.lightGray2,alignItems:'center',elevation:5}}>
                        <TouchableOpacity onPress={() =>{setFoodQuantity(foodQuantity-1);}} disabled={foodQuantity==1 ? true : false}>
                            <Image source={icons.minus} style={{height:20,width:20}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily:'Rubik-Medium',fontSize:24,color:COLORS.black}}>{foodQuantity}</Text>
                        <TouchableOpacity onPress={() =>{setFoodQuantity(foodQuantity+1);}}>
                            <Image source={icons.add} style={{height:20,width:20}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',width:WIDTH}}>
                   <View style={{flex:1,width:WIDTH,backgroundColor:COLORS.lightGray4}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontFamily:'Rubik-Medium',fontSize:20,paddingLeft:10,paddingBottom:3,color:COLORS.black}}>{card.title}</Text>
                            <Text style={{fontFamily:'Rubik-Medium',fontSize:20,paddingRight:10,paddingBottom:3,color:COLORS.black}}>{card.price} $</Text>
                        </View>
                        <Text style={{fontFamily:'Rubik-Regular',fontSize:15,paddingLeft:10,color:COLORS.black}}>{card.description} $</Text>
                        <View style={{flex:1}}>
                            <ScrollView style={{width:WIDTH}} 
                                        onScroll={event => 
                                                {
                                                    var contX = Math.floor(event.nativeEvent.contentOffset.x);
                                                    var widX = Math.floor(WIDTH);
                                                    var val = Math.floor(contX/widX);
                                                    if(val<= card.ingredients.length && val >=0)
                                                            setDotPosition(card.ingredients[val]);
                                                }} 
                                        bouncesZoom={true} bounces={true} snapToInterval={WIDTH}  showsHorizontalScrollIndicator={false} style={{flex:1}} decelerationRate='fast' horizontal>
                                {card.ingredients.map((name) => 
                                    {   
                                        return (   
                                        <View style={{fontFamily:'Rubik-Medium',width:WIDTH,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{color:COLORS.black}}>🔥  {name}</Text>
                                        </View>);})}
                            </ScrollView>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20}}>
                                {card.ingredients.map((name) => 
                                        {return (   
                                            <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
                                                <Image source={dotPosition == name ? icons.circle_primary : icons.circle_black} style={dotPosition == name ? styles.dotClicked : styles.dotNotClicked} resizeMode={'contain'} />
                                            </View>);})}
                            </View>
                        </View>
                   </View>
                   <View style={{flex:1,width:WIDTH,backgroundColor:COLORS.white,backgroundColor:COLORS.lightGray4}}>
                        <View style={{flex:1,paddingTop:1}}>
                            <View style={
                                {flex:1,backgroundColor:'white',borderTopRightRadius:30,
                                borderTopLeftRadius:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:14,paddingRight:10}}>
                                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <View><Text style={{fontFamily:'Rubik-Medium',fontSize:19,color:COLORS.black}}>{foodQuantity} Items in Cart</Text></View>
                                            <View><Text style={{fontFamily:'Rubik-Medium',fontSize:19,color:COLORS.black}}>{foodQuantity * card.price} $</Text></View>
                                    </View>
                            </View>
                            <View style={{height:0.5,backgroundColor:'lightgrey'}}></View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:COLORS.white}}>
                                <TouchableOpacity onPress={modifyLocationCardNumber} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1,width:WIDTH}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={icons.pin} style={{width:20,height:20,marginLeft:10}} resizeMode={'contain'} />
                                        <Text style={{fontFamily:'Rubik-Regular',marginLeft:10,color:COLORS.black}}>12010 Hey Nahda 3</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <Image source={icons.master_card} style={{width:20,height:20,marginRight:10}} resizeMode={'contain'} />
                                        <Text style={{marginRight:4,marginBottom:10,fontSize:20,fontFamily:'Rubik-Regular',color:COLORS.black,textAlign:'center'}}>....</Text><Text style={{fontFamily:'Rubik-Regular',marginRight:10,color:COLORS.black}}>5893</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:10,backgroundColor:COLORS.white}}>
                                <TouchableOpacity>
                                    <View style={{flex:1,width:WIDTH-40,borderRadius:40,justifyContent:'center',alignItems:'center',backgroundColor:COLORS.primary}}>
                                        <Text style={{fontFamily:'Rubik-Regular',fontSize:23,color:COLORS.white}}>Order</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>    
                        </View>
                   </View>
                </View>
            </View>
        </View>
    );
}


const modifyLocationCardNumber = () => {

}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : COLORS.white,
    },
    'appBar':{
        flexDirection:'row',
        height : 45,
        justifyContent:'space-between',
        alignItems:'center',
        color : COLORS.black,
        marginTop:24,
        backgroundColor:COLORS.lightGray4
    },
    'body' :{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column',
        'justifyContent':'flex-start',
        alignItems:'center',
    },
    'dotClicked':{
        width:7,
        height:7,
        marginRight:5
    },
    'dotNotClicked':{
        width:4,
        height:5,
        marginRight:5,
    },
});

export default Order;