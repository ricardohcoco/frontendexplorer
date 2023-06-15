import { useNavigate } from "react-router-dom"
import FormLogin from "../../components/FormLogin/FormLogin"


function Login() {
  const navigate = useNavigate()

function goHome(e) {
  e.preventDefault()
  navigate("/home")
}  

function goRegister(e) {
  e.preventDefault()
  navigate("/register")
}  
  
  return (
  <div> 
    <FormLogin goRegister={goRegister} goHome={goHome}/>
  </div>
  )
}

export default Login