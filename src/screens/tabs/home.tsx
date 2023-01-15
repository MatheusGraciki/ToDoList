//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalendarPicker from '../../components/Calendar';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <CalendarPicker/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
