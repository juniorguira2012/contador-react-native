/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const Contador = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      
      <View style={styles.countContainer}>
        <Text style={styles.contador}>Turno: {count}</Text>
      </View>


      <Button
        title='Start Conteo'
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: `darkgrey`,
    padding: 20,
    margin: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
   
  },
  
  contador:{
    fontSize:30,
    position:'absolute',
    top:-300,
    left:30,
    borderWidth: 2,
    padding:90,
    color:"blue"
  }
});

export default Contador;



/*const Contador = () =>{
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
    top:105,
    left:125,
  }
});

export default Contador;*/