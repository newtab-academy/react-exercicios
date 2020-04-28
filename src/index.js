import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/SegundoComponente'
// import Time from './componentes/TimeComponentes'
// import ComponenteFuncao from './componentes/ComponenteFuncao'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
// import Hook from './componentes/Hook'

import Home from './componentes/Home'
import About from './componentes/About'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const elemento = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobre" component={About} />
        </Switch>
    </BrowserRouter>
    // <div>
    //     <Home />
    //     <About />
    // </div>
    // <Hook />
    // <Contador numero={50}/>
    // <ComponenteClasse />
    // <ComponenteFuncao />
    // <Time />
    // <div>
    //     <CompA valor="1" />
    //     <CompB valor="3" />
    // </div>

//  <PrimeiroComponente valor="olá" nome={(Math.pow(2,10))}/>
    , elemento)