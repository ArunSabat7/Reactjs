import {Buy_Book} from './Booktype'
const initialState={
    noofbooks:10
}

const Bookreducer=(state=initialState,action)=>{
switch(action.type){
    case Buy_Book:return{
        ...state,
        noofbooks:state.noofbooks-action.payload
    }
default:return state
}
}
export default Bookreducer 