import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"

import styles from './styles';

const HomeSearch = (props) => {
	return (
		<View >
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>   
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text>Now</Text>
                    <MaterialIcon name={'keyboard-arrow-down'} size={16}/>
                </View> 
            </View>   
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>   
            </View>
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={16} color={'#ffffff'}/>
                </View>
                <Text style={styles.destinationText}>Home</Text>   
            </View>
		</View>
	);
};
export default HomeSearch;