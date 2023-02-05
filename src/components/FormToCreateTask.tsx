/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { HStack, Text, VStack, } from "native-base";
import { StyleSheet } from "react-native";
// components
import { Input } from './Input';
import { Button } from './Button';

interface FormInputs {
    taskName: string;
    taskDescription: string;
    priorityLevel: string;

}


function FormToCreateTask() {
    const [selectedButton, setSelectedButton] = useState('');

    const { handleSubmit, setValue, control, formState: { errors } } = useForm<FormInputs>();



    const onButtonPress = (selectedButtonName: string,) => {
        // setValue registers the name of the pressed button in the Form when one of three buttons is pressed
        setValue("priorityLevel", selectedButtonName);
        setSelectedButton(selectedButtonName);

    };
    const onSubmit: SubmitHandler<FormInputs> = (data)=> {console.log(data);};


    return (
        <VStack style={styles.container}>
            <Controller
                name="taskName"
                control={control}
                rules={{ required: "Informe um nome para a tarefa" }}
                render={({ field: { onChange, }, }) => (
                    <Input
                        variant={'underlined'}
                        placeholder='Nome da tarefa'
                        onChangeText={onChange}
                        errorMessage={errors.taskName?.message}
                    />
                )}
            />
            <Controller
                name="taskDescription"
                rules={{
                    maxLength: {
                        value: 20,
                        message: " A descrição da tarefa deve ter no máximo 20 caracteres"
}
                }}
                control={control}
                render={({ field: { onChange, } }) => (
                    <Input
                        variant={'underlined'}
                        placeholder='Descrição da tarefa'
                        onChangeText={onChange}
                        errorMessage={errors.taskDescription?.message}
                    />
                )}
            />


            <HStack style={styles.btnGroup} >
                <Button
                    onPress={() => onButtonPress('Baixa')}
                    selected={selectedButton === 'Baixa'}
                    buttonText='Baixa'
                    onPressBgColorValue='#4dcdaa'
                    style={{ marginRight: '2%', width: '40%', }}
                    maxWidth={'container'}

                />
                <Button
                    onPress={() => {
                        setSelectedButton('Média');
                    }}
                    selected={selectedButton === 'Média'}
                    buttonText='Média'
                    onPressBgColorValue='#ffb393'
                    style={{ marginRight: '2%', width: '40%', }}
                />
                <Button
                    onPress={() => {
                        setSelectedButton('Alta');
                    }}
                    selected={selectedButton === 'Alta'}
                    buttonText='Alta'
                    onPressBgColorValue='#ff5d5d'
                    style={{ width: '40%', }}
                />

            </HStack>

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <Button

                onPress={handleSubmit(onSubmit)}
                maxWidth={'container'}
                style={styles.submitBtn}
            >
                <Text style={styles.submitBtn} >
                    A
                </Text>
            </Button>



        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '15%'

    },
    submitBtn: {
        backgroundColor: '#4dcdaa',
    },
    btnGroup: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '10%'
    },

});


export default FormToCreateTask;
