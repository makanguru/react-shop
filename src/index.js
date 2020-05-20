import './main.css'

import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware( history )]
const store = createStore(
    createRootReducer( history ),
    composeWithDevTools(applyMiddleware(...middlewares))
)

document.write('Hello React/Redux!')
