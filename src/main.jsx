import React from 'react' // v18
import ReactDOM from 'react-dom/client' // v18

// cargar la libreria de bootstrap
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// javascript bootsstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'

// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.min.css'


// nuestro contenido prueba
import App from './App'

// ubicacion para renderizar todo el contenido 
const root = document.getElementById('root')

// renderizamos el contenido en la ubicacion deseada
ReactDOM.createRoot(root).render(<App />)