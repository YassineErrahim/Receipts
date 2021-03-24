
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View , Image, TouchableHighlightBase,SafeAreaView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity ,TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {COLORS, icons, images, WIDTH, HEIGHT} from '../../constants';


const Home = ({navigation,cards,selectedCategoriesNumber,setSelectedCategoriesNumber,searchInput,setSearchInput}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true}
                backgroundColor="transparent"
                barStyle={'dark-content'}
                hidden={false}
                />
                <View style={{height:25}}/>
            <HeaderSection searchInput={searchInput} setSearchInput={setSearchInput}/>
            <TitleSection />
            <CategoriesSection selectedCategoriesNumber={selectedCategoriesNumber} setSelectedCategoriesNumber={setSelectedCategoriesNumber} setSearchInput={setSearchInput}/>
            <BodySection navigation={navigation} cards={cards} selectedCategoriesNumber={selectedCategoriesNumber}/>
        </SafeAreaView>
    );
};

const HeaderSection = ({searchInput,setSearchInput}) => {
    return (
        <View style={styles.headerSection}>
            <TouchableOpacity onPress={onMapClick}>
                <Image source={icons.location} resizeMode='contain' style={{width:25,height:25,marginLeft:20}}/>
            </TouchableOpacity>
            <TextInput defaultValue={searchInput} onSubmitEditing={(txt)=>setSearchInput(txt.nativeEvent.text)}  style={{width:250,height:40,marginRight:20,borderRadius:20,backgroundColor:'#F6F6F6',paddingLeft:14,paddingRight:14,fontSize:14,fontWeight:'bold'}}/>
            <TouchableOpacity onPress={onShopClick}>
                <Image source={icons.shopping} resizeMode='contain' style={{width:25,height:25,marginRight:20}}/>
                </TouchableOpacity>
        </View>
    );
};
const TitleSection = () => {
    return (
        <View style={styles.titleSection}>
            <Text style={styles.titleSectionText}>Main</Text>
            <Text style={styles.titleSectionText}>Categories</Text>
        </View>
    );
}

const CategoriesSection = ({selectedCategoriesNumber,setSelectedCategoriesNumber,setSearchInput}) => {
    return (
        <View style={styles.categoriesSection}>
            <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(0);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 0 ? <SelectedCategorie title={'Burgers'} icon={icons.hamburger} /> : <UnSelectedCategorie title={'Burgers'} icon={icons.hamburger} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(1);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 1 ? <SelectedCategorie title={'Pizza'} icon={icons.pizza} /> : <UnSelectedCategorie title={'Pizza'} icon={icons.pizza} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(2);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 2 ?  <SelectedCategorie title={'Hot Dog'} icon={icons.hotdog} /> :  <UnSelectedCategorie title={'Hot Dog'} icon={icons.hotdog} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(3);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 3 ?  <SelectedCategorie title={'Sushi'} icon={icons.sushi} /> :  <UnSelectedCategorie title={'Sushi'} icon={icons.sushi} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(4);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 4 ? <SelectedCategorie title={'Salads'} icon={icons.salad} /> : <UnSelectedCategorie title={'Salads'} icon={icons.salad} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(5);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 5 ? <SelectedCategorie title={'Donuts'} icon={icons.donut} /> : <UnSelectedCategorie title={'Donuts'} icon={icons.donut} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(6);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 6 ?  <SelectedCategorie title={'Drunks'} icon={icons.drink} /> :  <UnSelectedCategorie title={'Drunks'} icon={icons.drink} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelectedCategoriesNumber(7);setSearchInput("");}} style={styles.touchableOpacity}>
                {selectedCategoriesNumber == 7 ?  <SelectedCategorie title={'Snacks'} icon={icons.fries} /> :  <UnSelectedCategorie title={'Snacks'} icon={icons.fries} />}
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}

const UnSelectedCategorie = ({title,icon}) => {
    return (
        <View style={{borderRadius:50,height:130,width:80,backgroundColor:COLORS.white,elevation:5,justifyContent:'flex-start',alignItems:'center',marginRight:10}}>
                <View style={{backgroundColor:COLORS.lightGray,width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <Image source={icon} style={{width:25,height:25}} resizeMode='contain'/>
                </View>
                <Text style={{fontFamily: "Rubik-Medium",color:'#000',marginTop:10}}>{title}</Text>
        </View>
               
    );
}
const SelectedCategorie = ({title,icon}) => {
    return (
        <View style={{borderRadius:50,height:130,width:80,backgroundColor:COLORS.primary,justifyContent:'flex-start',alignItems:'center',marginRight:0,elevation:7}}>
            <View style={{backgroundColor:'#fff',width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <Image source={icon} style={{width:25,height:25}} resizeMode='contain'/>
            </View>
            <Text style={{fontFamily: "Rubik-Medium",color:'#fff',marginTop:10}}>{title}</Text>
        </View>        
    );
}

const BodySection = ({navigation,cards,selectedCategoriesNumber}) =>{
    return (
        <View style={styles.bodySection}>
            <ScrollView style={{flex:1,width:WIDTH}} >
                {cards.map((card)=> {return (<BodyCard  navigation={navigation} key={card.id} card={card} selectedCategoriesNumber={selectedCategoriesNumber}/>);})}
                <View style={{height:65,width:WIDTH}}></View>
            </ScrollView>
        </View>
    );
}
const BodyCard = ({navigation,card,isEnd,selectedCategoriesNumber}) => {
    var wid = WIDTH - 40;
    var wid2 = wid + 5;
    var hei = isEnd ? 340 : 270;
    var id = card.id;
    //navigation.navigate("Order")
    return (
        <View key={card.id} style={{height:hei,marginTop:17,marginBottom:17}}>
            <TouchableOpacity onPress={() => {navigation.navigate("Order",{'id' : id,'selectedCategory':selectedCategoriesNumber})}} style={{height:205}}>
                <View style={{width:WIDTH,height:200,justifyContent:'center',alignItems:'center',borderRadius:45,backgroundColor:'white'}}>
                    <View style={{width:wid2,paddingLeft:5,paddingRight:5,height:200,elevation:3,borderRadius:45,height:200,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                        <Image source={card.image} resizeMode='cover' 
                            style={{width:wid,height:200,borderRadius:40,borderRadius:45}}/>
                    </View>
                    <Text style={{position:'absolute',marginLeft:20,elevation:6,bottom:0,left:0,padding:20,fontSize:18,fontWeight:'bold',backgroundColor:COLORS.white,color:COLORS.black,borderTopRightRadius:50,borderBottomLeftRadius:40}}>{card.timing}</Text>    
                </View>
            </TouchableOpacity>
            <Text style={styles.titleBodyCardText}>{card.title}</Text>
            <View style={{height:50,flexDirection:'row',alignItems:'center',marginLeft:20}}>
                <Image source={icons.star} style={{height:23,width:23}}/>
                <Text style={{marginLeft:6,color:COLORS.black,fontSize:17}}>{card.stars}</Text>
                <View style={{flex:1}}>
                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                        {card.ingredients.map((ingredient) => {
                        return (
                                <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
                                    <Text style={{marginLeft:20,color:COLORS.black,fontSize:17}}>{ingredient}</Text>
                                    <Image source={icons.circle} style={{height:6,width:6,marginLeft:8,marginTop:2}} />
                                </View>
                            
                            );
                            })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}


//methods for onClicks Buttons or Areas
const onMapClick = () => {
    alert('Map Clicked ');
}
const onShopClick = () => {
    alert('Shop Clicked');
}

const onReceiptClick = () => {
    alert('Hello');
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#fff',
    },
    'headerSection':{
        height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50, backgroundColor:'#fff'
    },
    'titleSection':{
        justifyContent:'center',
        alignItems:'flex-start',
        height:100,
        
    },
    'titleSectionText':{
        fontFamily:'Rubik-Medium',color:'#000',fontSize:30,paddingLeft:20,
    },
    'titleBodyCardText':{
        fontFamily:'Rubik-Medium',
        color:'#000',
        fontSize:21,
        paddingLeft:20,
        marginLeft:3,
        marginTop:5,
    },
    'touchableOpacity' : {
        height:140,
        width:100,
        paddingTop:5,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    'categoriesSection':{
        height:140
    },
    'bodySection':{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
});

export default Home;