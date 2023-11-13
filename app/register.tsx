import { View, Text, TextInput } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import SendButton from '../components/SendButton';
import SelectDropdown from 'react-native-select-dropdown'

export default function Register() {
  const offices = ["Professor(a)", "Gestor(a)", "Aluno(a)"];
  return (
    <View className='bg-white h-full flex items-center justify-center' style={{rowGap: 40}}>
            <StatusBar backgroundColor='#58AF9B'/> 
            <Text className='text-5xl text-green font-extrabold'>Registrar</Text>
            <TextInput className='bg-gray rounded-xl w-80 px-4 py-4' placeholder='Nome' />
            <TextInput className='bg-gray rounded-xl w-80 px-4 py-4' placeholder='Senha' />
            <SelectDropdown buttonStyle={{borderRadius: 20,backgroundColor: "#EAEAEA"}}defaultButtonText='Cargo:' data={offices} onSelect={()=>console.log("oi")}/>
            <SendButton content="Entrar"/>
        </View> 
    )
}
