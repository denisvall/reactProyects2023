import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', { "data-id": 123 }, 'Boton 1')


root.render(button);