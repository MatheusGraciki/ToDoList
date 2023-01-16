//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

// create a component
const CalendarPicker = () => {
    return (
        <Calendar
            style={[ {height: 300}]}
            dayComponent={({date, state}) => {
                return (
                    <View>
                        <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date?.day}</Text>
                    </View>
                );
            }}
        />
    );
};

//make this component available to the app
export default CalendarPicker;
