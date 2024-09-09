import { Stack } from "expo-router";

export default function rootlayot() {

    return(
        <Stack screenOptions={{
            headerTitleAlign: 'center',
            
        }}>
            <Stack.Screen name="index" options={{title: 'HOME', headerShown: false}}/>
            <Stack.Screen name="about" options={{title: 'Sobre', headerShown: false}}/>
        </Stack>
    );

}