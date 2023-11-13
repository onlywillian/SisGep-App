import { View, Text, TextInput } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import SendButton from '../components/SendButton';

export default function Login() {
    return (
        <View className='bg-white h-full flex items-center justify-center' style={{rowGap: 40}}>
            <StatusBar backgroundColor='#58AF9B'/> 
            <Text className='text-5xl text-green font-extrabold'>Login</Text>
            <TextInput className='bg-gray rounded-xl w-80 px-4 py-4' placeholder='Nome' />
            <TextInput className='bg-gray rounded-xl w-80 px-4 py-4' placeholder='Senha' />
            <Link href="/register" className=' text-green'>
                <Text>Ainda não possuo uma conta</Text>
            </Link>
            <SendButton content="Entrar"/>
        </View> 
    )
}