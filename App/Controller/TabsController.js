import React from 'react';
import Tabs from '../View/Tabs';
import HomeController from './HomeController';
import SearchController from './SearchController';
import LikeController from './LikeController';
import ProfileController from './ProfileController';


const TabsController = ({navigation}) => {
    return (
        <Tabs
            navigation = {navigation} 
            home={HomeController} 
            search={SearchController} 
            like={LikeController}
            profile={ProfileController}    
        />
    );
} 

export default TabsController;