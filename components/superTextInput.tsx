import { styles } from "@/components/styles";
import { TextInput } from "react-native";

interface ISuperTextInput {
    value: string;
    onChangeText: (text: string) => void;
}

const SuperTextInput = ({ value, onChangeText }: ISuperTextInput) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder='Digite algo...'
            style={styles.inputText}
        ></TextInput>
    )
}
export default SuperTextInput;