import { useState } from "react"

function FormLogin({ goRegister, goHome }) {

const [emailLogin, setEmailLogin] = useState("") 
const [passwordLogin, setPasswordLogin] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setEmailLogin(e.target.value)
  }
  return (
    <div>  
      <div className="title">
          <h1>food explorer</h1>
      </div>

      <div className="login">
          <h1>Faça seu Login</h1>

        <form> 
          <label for="email">E-mail</label>
          <input type="email" onChange={handleChange} placeholder="Exemplo: exemplo@exemplo.com" />
          <label for="password">Senha</label>
          <input type="password" placeholder="No mínimo 6 caracteres" />
          <button type="submit" onClick={goHome}>Entrar</button>
          <button type="submit" onClick={goRegister}>Criar uma Conta</button>
        </form>
      </div>
    </div>
  )
}

export default FormLogin