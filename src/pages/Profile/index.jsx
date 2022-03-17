import './styles.css'
import { Link } from 'react-router-dom'
// Importo o hook
import { useAccount } from '../../hooks/useAccount'

export function Profile() {
  // Pego o userData, que é passado no AccountContext como value
  const { userData, setUserData } = useAccount()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Perfil</h1>
        <div className="inputContainer">
          <label htmlFor="changeName">Change Name</label>
          <input className="inputText" value={userData.name} id="changeName" type="text" onChange={e => setUserData(state => ({...state, name: e.target.value}))} />
        </div>
        {/* Aqui eu pego os valores do objeto userData */}
        <p>
          {`Olá ${userData.name}, você tem ${userData.age} anos e eu sei que seu e-mail é ${userData.email}!`}
        </p>
          <Link className="btn" type="button" to="/">
            Logout
          </Link>
      </header>
    </div>
  )
}
