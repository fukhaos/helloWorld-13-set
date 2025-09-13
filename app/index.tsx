import SuperButton from '@/components/superButton';
import SuperTitle from '@/components/superTitle';
import { Button, Image, Text, View } from "react-native";

export default function Index() {



  const showMessage = () => {
    alert("Clicou no botão")
  }

  const uri_image = { uri: "https://picsum.photos/200/300" }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SuperTitle title="Bom dia" uppercase></SuperTitle>

      <SuperButton title='Mostra Mensagem' onPress={showMessage}></SuperButton>
      <SuperTitle title="Boa tarde" uppercase></SuperTitle>

      <Text>Hello World</Text>
      <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
      <Button title="Clique me" onPress={showMessage}></Button>
      <Image source={uri_image} style={{ width: 100, height: 100 }}></Image>
      <Image source={require('@/assets/images/react-logo.png')} ></Image>



    </View >
  );
}
