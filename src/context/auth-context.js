import {createContext,useReducer} from 'react'
import { authReducer } from '../reducer';


export const AuthContext = createContext();

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


export const AuthProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,{
        userLogin:{
            userInfo:userInfoFromStorage,
            loading:null,
            error:null
        }
    })

    return(
        <AuthContext.Provider value={{userLogin:state.userLogin,dispatch}}>
           {children}
        </AuthContext.Provider>
    )
}