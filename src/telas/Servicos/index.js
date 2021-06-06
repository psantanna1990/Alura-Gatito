import React from "react"
import { Text, SafeAreaView, StatusBar, FlatList } from "react-native"
import Item from "./Item"

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Não de banho no seu gato! Mas se precisar nos damos.",
  },
  {
    id: 2,
    nome: "Vacina v4",
    preco: 89.9,
    descricao: "Uma dose da vacina v4 seu gato precisa de duas.",
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao:
      "Uma dose da vacina antirrábica seu gato precisa de uma por ano.",
  },
]

export default function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços!</Text>
      <FlatList
        data={servicos}
        renderItem={({ item }) => {
          //   Desta forma faço a descontrução do item e passo como parametro as suas propriedades
          return <Item {...item} />
        }}
        keyExtractor={({ id }) => String(id)}
      />
    </SafeAreaView>
  )
}
