import React, {useState} from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {Agenda, AgendaEntry} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



interface AgendaItem extends AgendaEntry {
    name: string;
    height: number;
    description: string;
}

interface Items {
    [key: string]: AgendaItem[];
}

const timeToString = (time: number) : string => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};


const CalendarPicker: React.FC = () => {
    const navigation = useNavigation();

    const [items, setItems] = useState<Items>({});

    const addItem = () => {
        const newItems = {...items};
        const key = '2023-01-15';
        if (!newItems[key]) {
            newItems[key] = [];
        }
        newItems[key].push({
            name: 'Novo Item',
            description:'oiii',
            height: 50,
            day: key,
        });
        setItems(newItems);
    };


    const loadItems = (day: {timestamp: number}) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems =  1;
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' ,
                            description: '22',
                            height: 50,
                            day:strTime,
                        });
                    }
                }
            }
            const newItems: Items = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item: AgendaItem) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>

                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1}}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2023-01-10'}
                renderItem={renderItem}



            />
            <TouchableOpacity onPress={() =>  navigation.navigate("CreateTask")}>
                <Text>Adicionar Item</Text>
            </TouchableOpacity>


        </View>
    );
};

export default CalendarPicker;
