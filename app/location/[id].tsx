import { View, Text, Image   } from 'react-native'
import { useLocalSearchParams, Link } from 'expo-router'
import { useEffect, useState } from 'react';

export default function Login() {
    const { id } = useLocalSearchParams()

    const [location, setLocation] = useState<any>({})
    
    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://192.168.0.21:3001/locations/${id}`)
            const data = await response.json()

            setLocation(data.Location)
        }
        getData();
    }, []);
    
    return (
        <View className='bg-green h-full flex items-center justify-around' style={{rowGap: 0}}>
            <Text className='text-4xl text-white font-extrabold mt-4'>{location?.name}</Text>
            <View className='bg-gray h-72 w-72'>
                <Image source={{ uri: location?.photo }} className='w-full h-full'/>
            </View>
            <View className='w-72'>  
                <Text className='text-xl text-white text-center font-bold'>DESCRIÇÃO:</Text>
                <Text className='text-lg text-white '>{location?.description}</Text>
            </View>
            <View className='bg-white rounded-xl h-16 w-44 flex text-center justify-center items-center'>
            <Link href={{pathname: '/qrcodeRead', params: { id: id, type: 'locations' }} }>
                <Text className='text-xl text-green text-center '>Cadastrar um equipamento</Text>
            </Link>
            </View> 
        </View>
    )
}