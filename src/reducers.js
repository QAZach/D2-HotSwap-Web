import {combineReducers} from 'redux';
import {
    SIGNIN
} from './actions';

const user = (state=null, action) => {
    switch (action.type) {
        case SIGNIN:
            return action.user;
        default:
            return state;
    }
}
const characters = (state=null, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const equipment = (state=null, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const loadouts = (state=null, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const hotswapApp = combineReducers({
    user,
    characters,
    equipment,
    loadouts,    
})

export default hotswapApp;