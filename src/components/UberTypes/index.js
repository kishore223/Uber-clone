import React from 'react';
import { View, Text, requireNativeComponent } from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes = (props) => {
    return (
        <View>
            {typesData.map(type => <UberTypeRow />) }
        </View>
    );
};

export default UberTypes;

