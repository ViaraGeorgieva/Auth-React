import { useState } from 'react';
import './App.css';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         signInWithEmailAndPassword } from 'firebase/auth'


function App() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {setUser(currentUser)})


    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user)
      } catch (error) {
        console.log(error.message)
      }
    }
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user)
      } catch (error) {
        console.log(error.message)
      }
    }

    const logout = async () => {
      await signOut(auth);
    };

  return (
    <div className='App'>
      <div>
        <h3>Register User</h3>
        <input 
        placeholder='Email...'
        onChange={(event) => {setRegisterEmail(event.target.value)}}>

        </input>
        <input 
        placeholder='Password...'
        onChange={(event) => {setRegisterPassword(event.target.value)}}>

        </input>
        <button onClick={register}>Create User</button>
      </div>

      <div>
      <h3>Login</h3>
        <input 
        placeholder='Email...'
        onChange={(event) => {setLoginEmail(event.target.value)}}>

        </input>
        <input 
        placeholder='Password...'
        onChange={(event) => {setLoginPassword(event.target.value)}}></input>
        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In:</h4>
      {user?.email}


      <button onClick={logout}>signOut</button>


    </div>
  );
}

export default App;
