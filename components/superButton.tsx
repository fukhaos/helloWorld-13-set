import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
}

/**
 * Um super botão estilizado roxão lindo demais
 * @param title Título do botão
 * @param onPress Função a ser executada ao pressionar o botão 
 * @param disabled Se o botão está desabilitado ou não  
 * @returns um lindo botão roxão
 */

const SuperButton = ({ title, onPress, disabled }: ISuperButton) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={disabled ? styles.button_disabled : styles.button}
            onPress={onPress}
        >
            <Text style={styles.button_title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default SuperButton;