import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';

const ResponsiveScreen = ({children}) => {
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    const [isPortrait, setIsPortrait] = useState(screenHeight > screenWidth);
    const [dimensions, setDimensions] = useState({ screenWidth, screenHeight });

    const updateOrientation = ({screen:any}) => {
        setIsPortrait(screen.height > screen.width);
        setDimensions({ screenWidth: screen.width, screenHeight: screen.height });
    };

    useEffect(() => {
        Dimensions.addEventListener('change', updateOrientation);
    }, []);

    return (
        <View style={{
            width: dimensions.screenWidth,
            height: dimensions.screenHeight
        }}>
            {children}
        </View>
    );
};

export default ResponsiveScreen;
