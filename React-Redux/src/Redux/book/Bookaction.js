 import {Buy_Book} from './Booktype'

 export const Buy=(number=1)=>{
     return {
        type:Buy_Book,
        payload:number
     }
 }