import './App.css'
import img from './logo.jpg'
import { useState } from 'react'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')
  function calcularImc() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if (imc < 18.6) {
      setMensagem('Você está abaixo do peso! O seu IMC é  ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem(
        'Parabéns, você está no peso ideal ! O seu IMC é  ' + imc.toFixed(2)
      )
    } else if (imc >= 24.9 && imc <= 34.9) {
      setMensagem(
        'Cuidado você está levemente acima do peso ! O seu IMC é ' +
          imc.toFixed(2)
      )
    } else if (imc > 34.9) {
      setMensagem('Atenção OBESIDADE !!! O seu IMC é  ' + imc.toFixed(2))
    }
  }
  return (
    <div className="app">
      <h1>Calculando o seu IMC</h1>
      <p>Vamos calcular o seu IMC</p>

      <div className="area-input">
        <input
          type="number"
          placeholder="Seu peso em Kg  ex: 90"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sua altura em cm  ex: 170"
          value={altura}
          onChange={e => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>Calcular</button>
      </div>

      <span>{mensagem}</span>
      <footer>
        <img src={img} alt="logo" />
        <a
          href="https://www.linkedin.com/in/sergio-tormente-garcia-a3a934a3/"
          target="_blanck"
        >
          SergioDev
        </a>
      </footer>
    </div>
  )
}
