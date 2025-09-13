import SuperButton from '@/components/superButton';
import SuperTitle from '@/components/superTitle';
import { useState } from 'react';
import { Text, TextInput, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [texto, setTexto] = useState('');


  const showMessage = () => {
    setCount(count + 1);
  }

  const maiorQue20 = texto.length > 20;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder='Digite algo...'
        style={{ borderColor: 'gray', width: 200, borderWidth: 1, marginBottom: 20 }}
      ></TextInput>


      <SuperTitle title={"Contador: " + count} uppercase></SuperTitle>
      <SuperButton
        title={'Mais um a ' + count}
        onPress={showMessage}
        disabled={texto.length < 10}
      />
      <Text>{texto}</Text>

      {texto.length > 10 && <Text>Texto maior que 10</Text>}
      {texto.length > 15 && <Text>Texto maior que 15</Text>}
      {maiorQue20 && <Text>Texto maior que 20</Text>}

    </View >
  );
}
