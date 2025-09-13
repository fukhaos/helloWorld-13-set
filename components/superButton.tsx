import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
    title: string;
    onPress?: () => void;
}

/**
 * Um super botão estilizado roxão lindo demais
 * @param title Título do botão
 * @param onPress Função a ser executada ao pressionar o botão 
 * @returns um lindo botão roxão
 */

const SuperButton = ({ title, onPress }: ISuperButton) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.button_title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default SuperButton;