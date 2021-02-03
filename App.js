/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import {Text,View,Button,} from 'react-native'

const Contador = () =>{
  const [contador, setContador] = useState(0)


  function incremental(){
    setContador((contador) + 1)
  }

  return(
      <View>
        <View>
          <Text>{contador}</Text>

        </View>
        <Button
            title='Contando'
            onPress={incremental}
          />     
      </View>
  );
}

export default Contador;