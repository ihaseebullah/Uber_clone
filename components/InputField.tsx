import React from "react";
import { Image, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const InputField = ({
    label,
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    rightIcon,  // New prop for the right icon
    onRightIconPress,  // New function for handling the right icon press
    ...props
}) => {
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className={`my-2 w-full`}>
                    {/* Label */}
                    <Text className={`text-lg font-JakartaSemiBold mb-3`}>
                        {label}
                    </Text>

                    {/* Input Field Container */}
                    <View
                        className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500`}
                    >
                        {/* Icon (if provided) */}
                        {icon && (
                            <Image
                                source={icon}
                                className={`w-6 h-6 ml-4`}
                            />
                        )}

                        {/* Text Input */}
                        <TextInput
                            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        />

                        {/* Right Icon (for password visibility toggle) */}
                        {rightIcon && (
                            <TouchableOpacity onPress={onRightIconPress} style={{ padding: 10 }}>
                                <Image
                                    source={rightIcon}
                                    className={`w-6 h-6 mr-4`}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;
