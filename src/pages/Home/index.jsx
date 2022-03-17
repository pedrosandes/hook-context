import './styles.css'
import { Link } from 'react-router-dom'
// Importo o useAccount que é um context e um hook personalizado
import { useAccount } from '../../hooks/useAccount'

export function Home() {
  // Desestruturo e pego o setUserData que eu passo como value no AccountContext
  const { setUserData } = useAccount() 

  return (
    <div className="App">
       <main className="App-header">
          <section className="register">
            <h1>Cadastro</h1>
            
            <div className="inputContainer">
              <label htmlFor="name">Nome</label>
              {/* Atualizo os valores do state  userData */}
              <input className="inputText" id="name" type="text" onChange={(e) => setUserData(state => ({...state, name: e.target.value}))}/>
            </div>
            <div className="inputContainer">
              {/* Atualizo os valores do state  userData */}
              <label htmlFor="name">Idade</label>
              <input className="inputText" id="age" type="text" onChange={(e) => setUserData(state => ({...state, age: e.target.value}))}/>
            </div>
            <div className="inputContainer">
              <label htmlFor="name">Email</label>
              {/* Atualizo os valores do state  userData */}
              <input className="inputText" id="email" type="text" onChange={(e) => setUserData(state => ({...state, email: e.target.value}))}/>
            </div>

            <Link className="btn" type="button" to="profile">
              Login
            </Link>
          </section>
        </main>
    </div>
  )
}


