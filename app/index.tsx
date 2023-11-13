import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { router, useLocalSearchParams } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';
export default function App() {
  
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleRefreshPage = () => { router.replace("/") };

  const handleBarCodeScanned = async ({ type, data }: any) => {
    setScanned(true);

    const [id, dataType] = data.split("-");

    router.push({ pathname: `/${dataType}/${id}` });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className='bg-green h-full flex items-center justify-around' >  
      <Text className='text-4xl font-extrabold text-white'>Escanear QR code</Text>
      <View className='h-80 w-72 border-2 border-white'>
          <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              className='w-full h-full'
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <Text className='text-lg text-white w-2/3 text-center'>
        Toque no botão abaixo para ler o QRcode novamente
      </Text>
      <TouchableOpacity 
        className='bg-white rounded-full h-16 w-16 flex items-center justify-center' 
        onPress={handleRefreshPage}
      >
        <EvilIcons name="refresh" size={60} color="green"></EvilIcons>
      </TouchableOpacity>
    </View>
  )
}