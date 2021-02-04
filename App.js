/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const Contador = () =>{
  const [contador, setContador] = useState(0)


  function incremental(){
    setContador((contador) + 1)
  }

  return(
      <View style={styles.container}>
        <View style={styles.boxview}>
          <Text style={styles.contador}>{contador}</Text>
        </View>
        <View style={styles.button}>
          <Button
              title='INICIALIZAR CONTEO'
              onPress={incremental}
            />     
        </View>    
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "space-between",
    backgroundColor: `darkgrey`,
    padding: 20,
    margin: 10,
  },
  boxview:{
    flex: 1,
    backgroundColor: "burlywood",
    borderWidth: 5,
  
  },
  button:{
    flex:1,
    justifyContent:'center',
  },

  contador:{
    fontSize:90,
    position:'absolute',
    top:100,
    left:115,
  }
});

export default Contador;