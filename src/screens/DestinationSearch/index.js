import React, {useState, useEffect} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

	const [orginPlaces, setOriginPlaces] = useState([null]);
	const [destinationPlaces, setDestinationPlaces] = useState([null]);

	useEffect(() => {
		console.warn('useEffect is called');
		if (orginPlaces && destinationPlaces) {
            console.warn('redirect to results');
        }
	}, [orginPlaces, destinationPlaces])

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<GooglePlacesAutocomplete
					placeholder='From?'
					onPress={(data, details = null) => {
						setOriginPlaces({ data, details });
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
					}}
					styles={{
						textInput: styles.textInput,
					}}
					fetchDetails
					query={{
						key: 'AIzaSyAUQnCnoWpvJ2EhkLj5fSwXVL7DxJfXCoU',
						language: 'en',
					}}
				/>
				<GooglePlacesAutocomplete
					placeholder='Where to?'
					onPress={(data, details = null) => {
						setDestinationPlaces({ data, details });
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
					}}
					styles={{
						textInput: styles.textInput,
					}}
					fetchDetails
					query={{
						key: '',
						language: 'en',
					}}
				/>
		</View>	
		</SafeAreaView>
	);
};
export default DestinationSearch;