# Typed-Dva
Evolve Dva's gene, in a Typescript way.
Original project: https://github.com/dvajs/dva

## Usage
* npm install typed-dva

```javascript
import dva from 'typed-dva'
import count from './models/count'
import router from './router'
import { browserHistory } from "react-router"
import { sagaMonitor } from "./sagaMonitor"

const app = dva({
	history: browserHistory,
	sagaMonitor
})
app.model(model)
app.router(router)
let renderFunc = app.start('#root')

// for react-hot-loader
declare var module: any
if (module.hot) {
	module.hot.accept('./router_admin', () => {
		renderFunc(router_admin)
	})
}
```

## Few Changes from Official Dva:
* Needs explicitly importing from react-router, instead from dva/router
* Needs explicitly importing from react-router-redux, instead of routerRedux from dva/router
* Other improvements

## Based on Dva commit: 
* 1.3.0-beta1
* f5f8690d4f32fea23f4afbaf788e7981a0468a1f
