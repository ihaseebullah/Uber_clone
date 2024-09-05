import React from "react";
import { ButtonProps, Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: string) => {
    switch (variant) {
        case "secondary":
            return { backgroundColor: "gray" };
        case "danger":
            return { backgroundColor: "#ff0000" };
        case "success":
            return { backgroundColor: "#00ff00" };
        case "outline":
            return {
                backgroundColor: "transparent",
                borderColor: "#d3d3d3",
                borderWidth: 0.5,
            };
        default:
            return { backgroundColor: "#0286ff" };
    }
};

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    style,
    ...props
}: {
    onPress: () => void;
    title: string;
    bgVariant?: string;
    textVariant?: string;
    IconLeft?: React.FC;
    IconRight?: React.FC;
    style?: object;
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    width: "90%",  // Smaller width
                    alignSelf: 'center',  // Center the button horizontally
                    borderRadius: 50,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    padding: 12,
                    marginTop: 30,  // Move the button higher
                    marginBottom: 20,
                    ...getBgVariantStyle(bgVariant),
                },
                style,
            ]}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
                {title}
            </Text>
            {IconRight && <IconRight />}    
        </TouchableOpacity>
    );
};

export default CustomButton;
