import React from 'react';
import Search from "../View/Search";
import { datas} from './../Model/dao/ReceiptProvider';

const SearchController = ({navigation}) => {
    return (
        <Search content={datas.filter(item => item.id < 30)} navigation={navigation}/>
    );
} 

export default SearchController;