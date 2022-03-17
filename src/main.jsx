import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRoute from "./router"
import { AccountProvider } from "./contexts/AccountContext"

ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <AppRoute />
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
