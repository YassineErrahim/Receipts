import React from 'react';
import Order from "../View/Order";
import {burgers , hotdogs, pizzas, salads, sushis,datas} from './../Model/dao/ReceiptProvider';

function findCard({id}){
    for(var i=0;i<datas.length;i++){
        if(datas[i].id == id) return datas[i];
    }
    return null;
}
const OrderController = ({route,navigation}) => {
    var id = route.params;
    var selectedCategory = route.params;
    return (
        <Order navigation={navigation} card={findCard(id,selectedCategory)}/>
    );
} 

export default OrderController;