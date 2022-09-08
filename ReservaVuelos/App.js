
import React from "react";
import MainStack from "./components/MainStack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
    return(
        <SafeAreaProvider>
        <MainStack/>
        </SafeAreaProvider>
    )
}

