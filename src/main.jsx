import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { tienda } from './Tienda/Tienda.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={tienda}>
    <App />
  </Provider>
)
