import React from 'react';
import { useState } from 'react';
import Home from "../View/Home";
import {datas} from './../Model/dao/ReceiptProvider';

const HomeController = ({navigation}) => {
    const [selectedCategoriesNumber,setSelectedCategoriesNumber] = useState(0);
    const [searchInput,setSearchInput] = useState("");
    return (
        <Home navigation={navigation} 
              cards={getCards(selectedCategoriesNumber,searchInput)}
              selectedCategoriesNumber={selectedCategoriesNumber} 
              setSelectedCategoriesNumber={setSelectedCategoriesNumber}
              searchInput={searchInput}
              setSearchInput={setSearchInput}    
              />
    );
} 
const getCards = (selectedCategory,searchInput) => {
    return getCardsWithFilter(getSpecifiedDataFilterCategory(datas,selectedCategory),searchInput);

}
function getCardsWithFilter(content,text){
    var expectedCards = [];
    var texts = text.trim().toLowerCase().split(' ');
    var isTrue = false;
    for(var i=0;i<content.length;i++){
        for(var j=0;j<texts.length;j++){
            if(content[i].title.toLowerCase().includes(texts[j])){
                isTrue = true;
                break;
            }
        }
        if(isTrue){
            expectedCards.push(content[i]);
            isTrue = false;
        }
        
    }
    return expectedCards;
}
function getSpecifiedDataFilterCategory(datas,category){
    var expected = [];
    for(var i=0;i<datas.length;i++){
        if(datas[i].category == category) expected.push(datas[i]);
    }
    return expected;
}
export default HomeController;