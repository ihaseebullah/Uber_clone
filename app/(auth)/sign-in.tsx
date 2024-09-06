import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import InputField from "@/components/InputField"; // Assuming InputField is correctly set up
import { icons, images } from "@/constants";  // Import your icons and images
import OAuth from "@/components/OAuth"; // Import OAuth if needed
import { router } from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSignInPress = async () => {
        // Implement your sign-up logic here
    };

    const handleGoogleSignIn = async () => {
        // Implement Google Sign-In logic here
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: 250, position: 'relative' }}>
                    <Image source={images.signUpCar} style={{ width: '100%', height: 250 }} />
                    <Text style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: '#333',
                    }}>
                        Welcome 👋
                    </Text>
                </View>

                <View style={{ padding: 20 }}>
                    <InputField
                        label="Name"
                        placeholder="Enter name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                   
                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        secureTextEntry={!showPassword}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                        rightIcon={showPassword ? icons.eyecross : icons.eyecross}
                        onRightIconPress={() => setShowPassword(!showPassword)}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#007BFF',
                            padding: 15,
                            borderRadius: 50,
                            alignItems: 'center',
                            marginBottom: 10,
                            marginTop: 30,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                        onPress={onSignInPress}
                    >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <View style={{ height: 1, backgroundColor: '#ccc', flex: 1 }} />
                        <Text style={{ marginHorizontal: 10, color: 'black', fontWeight: "bold", fontSize: 20 }}>Or</Text>
                        <View style={{ height: 1, backgroundColor: '#ccc', flex: 1 }} />
                    </View>
                     
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f1f1f1',
                            padding: 15,
                            borderRadius: 50,
                            marginBottom: 20,
                        }}
                        onPress={handleGoogleSignIn} // Call handleGoogleSignIn function
                    >
                        <Image source={icons.google} style={{ width: 20, height: 20, marginRight: 10 }} />
                        <Text style={{ color: '#333', fontSize: 18, fontWeight: 'bold' }}>
                            Log In with Google
                        </Text>
                   </TouchableOpacity>

                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center' }}
                        onPress={() => router.replace("/sign-up")} // Replace with your navigation logic
                    >
                        <Text style={{ color: '#333', marginRight: 5 }}>Dont have an account?</Text>
                        <Text style={{ color: '#007BFF', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default SignUp;
