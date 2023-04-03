import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      <Fab title='-1' onPress={() => setContador(contador - 1)} position='bl' />
      <Fab title='+1' onPress={() => setContador(contador + 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15
  }
})
