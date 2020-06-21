// Async Actions: Redux thunk, Axios

const redux=require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')

const initialState={
    loading:false,users:[],error:''
}

const USERREQUEST='userRequest'
const USERSUCCESS='userSuccess'
const USERERROR='userError'

const userRequest=()=>{
    return {
        type:USERREQUEST
    }
}
const userSuccess=(users)=>{
    return {
        type:USERSUCCESS,
payload:users
    }
}
const userError=(error)=>{
    return {
        type:USERERROR,
        payload:error
    }
}

const fetchUser=()=>{
    return function(dispatch){
dispatch(userRequest())
axios.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
// response.data
const users=response.data.map(user=>user.name)
dispatch(userSuccess(users))
})
.catch((error)=>{
// error message
dispatch(userError(error.message))
})
    }
}

const Reducer=(state=initialState,action)=>{
switch(action.type){
    case 'userRequest':return {
        ...state,
        loading:true
    }
    case 'userSuccess':return {
        
        loading:false,users:action.payload
    }
    case 'userError':return {
        
        loading:false,users:[],error:action.payload

    }
}

}
const store=createStore(Reducer,applyMiddleware(thunkMiddleware))
const unsub= store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUser())
// unsub()