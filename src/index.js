import React, { ReactDOM }  from "react"
import {BrowserRouter as Router} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<ContextProvider>
    <Router>
        <App />
    </Router>
</ContextProvider>)