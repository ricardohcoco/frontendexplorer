import { useState } from "react"

function FormRegister( { goLogin }) {

const [name, setName] = useState("")   
const [emailLogin, setEmailLogin] = useState("") 
const [passwordLogin, setPasswordLogin] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setEmailLogin(e.target.value)
  }
  return ( 
    <div>
       <h1>Crie sua Conta</h1>

       <form> 
        <label for="text">Seu nome</label> 
        <input type="text" onChange={handleChange} placeholder="Exemplo: Maria da Silva" />
        <label for="email">E-mail</label>
        <input type="email" onChange={handleChange} placeholder="Exemplo: exemplo@exemplo.com" />
        <label for="password">Senha</label>
        <input type="password" placeholder="No mínimo 6 caracteres" />
        <button type="submit">Criar conta</button>
        <button type="submit" onClick={goLogin}>Já tenho uma conta</button>
       </form>
    </div>
    
  )
}

export default FormRegister