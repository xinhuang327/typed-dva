import * as ReactRouter from "react-router"
import * as RouterRedux from 'react-router-redux'

let toExport = { ...ReactRouter, routerRedux: RouterRedux }
export = toExport

// module.exports = require('react-router');
// module.exports.routerRedux = require('react-router-redux');
