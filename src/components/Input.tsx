/* eslint-disable react/react-in-jsx-scope */
import {Input as NativeBaseInput, IInputProps, FormControl} from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest}: Props){
    const invalid = !!errorMessage || isInvalid;
    return (
        <FormControl
            isInvalid={invalid}
            mb={2}
        >
            <NativeBaseInput
                fontSize= 'md'
                h={12}
                isInvalid={invalid}
                {...rest}
            />
            <FormControl.ErrorMessage
                mb={0}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}
