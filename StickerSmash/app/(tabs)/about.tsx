import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nós somos as alunas Raquel e Louise, da escola Etec Comendador João Rays, em Barra Bonita. 
        Criamos esse aplicativo com o objetivo de oferecer uma maneira simples, divertida e intuitiva para as pessoas criarem
        e salvarem suas próprias figurinhas personalizadas. A ideia surgiu da popularidade crescente das figurinhas em aplicativos 
        de mensagens, onde elas são usadas para se expressar de forma criativa, engraçada e muitas vezes mais eficaz do que palavras.
        Muitas vezes, sentimos vontade de transformar uma imagem engraçada, um momento especial ou até um personagem favorito em uma figurinha, 
        mas não encontramos ferramentas fáceis ou acessíveis para isso. Este site veio para preencher essa lacuna, permitindo que qualquer
        pessoa — mesmo sem conhecimentos técnicos — consiga montar suas próprias figurinhas, visualizá-las em tempo real, e salvá-las 
        com apenas alguns cliques.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#F8F8FF',
    textAlign: 'center',
  }
})