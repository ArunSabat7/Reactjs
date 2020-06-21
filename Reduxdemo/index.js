// Redux

console.log('redux first code')

// const {redux,createStore,combineReducers}=require('redux')
const redux=require('redux')
const createStore=redux.createStore
const combineReducer=redux.combineReducers
const applymiddleware=redux.applyMiddleware

const initialStateBook={
noofbooks:10
}
const initialStatePen={
    noofpens:20
}
// action Book
const actionBook={
type:'buyBooks',info:'first redux action'
}
// action Pen
const actionPen={
type:'buyPens',info:'second redux action'
}

// multiple action creators

// 1st action creator: wrapping action in single function
function Book(){
    return actionBook
}
// 2nd action creator: wrapping action in single function
function Pen(){
    return actionPen
}
// (prevState,action)---> newState

// multiple reducers
const BookReducer=(state=initialStateBook,action)=>{

    switch(action.type){
        case 'buyBooks':return({
            ...state,  
            noofbooks:state.noofbooks-1
        })
       
    default: return state
    }
}
const PenReducer=(state=initialStatePen,action)=>{

    switch(action.type){
        case 'buyPens':return({
            ...state,
            noofpens:state.noofpens-1
        })
       
    default: return state
    }
}

// combine Reducers
const reducer=combineReducer({
book:BookReducer,pen:PenReducer
})

// redux middleware: create logger 
const logger=(store)=>{
    return (next)=>{
        return (action)=>{
            const result=next(action)
            console.log('middleware logs:',result)
        return result
        }
    }
}
const store=createStore(reducer,applymiddleware(logger))


console.log('initialState:',store.getState() )
const unsubscribe= store.subscribe(()=>{
    console.log('updated State Value',store.getState())
})
store.dispatch(Book())
store.dispatch(Book())
store.dispatch(Book())
store.dispatch(Pen())
store.dispatch(Pen())
store.dispatch(Pen())
unsubscribe()