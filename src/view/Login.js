// import {useState,useEffect} from 'react'
// import { useAuth } from '../hook/useAuth';

export const Login = () => {

    // const [email, setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [view,setView] = useState('form')

    // const {login,error,userInfo} = useAuth();

    // useEffect(() => {
    //     if (userInfo) {
    //      setView('message')
    //     }
    //   }, [ userInfo])
    

    // function submitHandeller(e){
    //     e.preventDefault()
    //     login(email,password)
    // }


    

    return (
        <>
        {/* {error&&(<div>login unsuccessful</div>)}
        {view==='form'&&(
            <form onSubmit={submitHandeller}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button>submit</button>
            </form>
        )}
        {view==='message'&&(
            <div>
                <h1>login ho gaya age badho</h1>
            </div>
        )} */}
        <div className="container">
            <div className="flex-row">
                <div className="flex-col-lg-6">
                    <div className="container">
                        <form className="login-form">
                            <input type="email"/>
                            <input type="password"/>
                            <button>Submit</button>
                        </form>
                        <div className="container">
                            <h5>new user ? signup here</h5>
                        </div>
                    </div>
                </div>
                <div className="flex-col-lg-6">
                    <div className="container center-vertically">
                        <h3>Login</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
