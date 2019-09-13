import {combineReducers} from 'redux'

const todos = (state=[{id:1, todo:'clean room'}], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state;
    }
}
const count = (state=0, action) => {
    switch(action.type){
        case 'add':
            return state + 1
        case 'subtract' :
            return state - 1
        default:
            return state;
    }
}
const todoText = (state='', action) => {
    switch(action.type){
        case 'UPDATE_TODO_TEXT':
            return action.payload
        case 'ADD_TODO':
            return ''
        default:
            return state;
    }
}
const name = (state='', action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({todos, count, todoText, name})