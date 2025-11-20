import {useDispatch} from "react-redux"
import { useState ,useEffect} from 'react'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import {Header,Footer} from "./components/index.js"
import {Outlet} from "react-router-dom"
function App() {

  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //used for keep user login by cookies
  useEffect(() => {
   authService.getCurrentUser()
    .then((userData) => {
      // console.log('userData main app', userData)
      if (userData) {
        
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !Loading ? (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  ) : (<div className="min-h-screen flex flex-wrap">loading</div>)
}

export default App
