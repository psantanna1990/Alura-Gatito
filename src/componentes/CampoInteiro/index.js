import React from "react"
import { TextInput } from "react-native"

export default function CampoInteiro({ valor, acao }) {
  // converte o inteiro que vem na propriedade para String, para que possa ser mostrado no TextInput
  const numeroEmTexto = String(valor)

  return (
    <TextInput
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(novoValor) => {
        acao(novoValor)
      }}
      value={numeroEmTexto}
    />
  )
}
