import React from 'react';
import './../scss/LoginPage.scss'

const LoginPage =()=> {
    return <div className='login'>
        <label htmlFor=""> Podaj login <input className='log' type="text"/></label>
        <label htmlFor=""> Podaj hasło <input className='pass' type="password"/></label>
        <button>Zaloguj się</button>
    </div>
}

export default LoginPage;