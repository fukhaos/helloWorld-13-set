import SuperButton from '@/components/superButton';
import SuperTextInput from '@/components/superTextInput';
import SuperTitle from '@/components/superTitle';
import { useState } from 'react';
import { Text, View } from "react-native";

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
      <SuperTextInput
        value={texto}
        onChangeText={setTexto}
      ></SuperTextInput>


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
