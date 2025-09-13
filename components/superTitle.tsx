import { styles } from "@/components/styles";
import { Text } from "react-native";

interface ISuperTitle {
    title: string;
    uppercase?: boolean;
}

const SuperTitle = (props: ISuperTitle) => {
    let texto = props.title;

    if (props.uppercase) {
        texto = texto.toUpperCase()
    }

    return <Text style={styles.title}>{texto}</Text>
}

export default SuperTitle;