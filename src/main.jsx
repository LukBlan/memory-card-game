import ReactDOM from 'react-dom/client'
import { App } from './components/App.jsx'
import "./styles.css"

const app = <App />
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
