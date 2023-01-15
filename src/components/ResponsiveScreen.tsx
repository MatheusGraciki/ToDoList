import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const ResponsiveScreen: React.FC<Props> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const handleOrientationChange = () => {
      setScreenWidth(Dimensions.get('window').width);
      setScreenHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  

  return (
    <View style={{
        width: screenWidth,
        height: screenHeight
    }}>
      {children}
    </View>
  );
};

export default ResponsiveScreen;
