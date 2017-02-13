import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import trips from './trips'
import user from './user'

// hierarchy
    // authentication (actions only)
    // users (profile info)
    // trips (list all, CRUD)
    // transportation

const rootReducer = combineReducers({
    routing,
    form,
    trips,
    user
})

export default rootReducer