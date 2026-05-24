import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Ref from './hooks/Ref'
import { UserContext } from './hooks/Context'
import Child from './hooks/Child'
import Reducer from './hooks/Reducer'
import Memo from './hooks/Memo'
import Callback from './hooks/Callback'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Dashboard from './components/Dashboard'
const Profile = lazy(()=>import('./components/Profile'))
import Settings from './components/Settings'
import DashboardHome from './components/DashboardHome'

function App() {

  const [count, setCount] = useState(0);
  const user = {name: 'teja'}

  function increase(){
    setCount(prev => prev+1)
  }

  return (
    <div>
       <h1>App</h1>
       {/* <State /> */}
       {/* <Effect /> */}
       {/* <Ref /> */}
       {/* <UserContext.Provider value={{user, count, increase}}>
           <Child />
       </UserContext.Provider> */}
       {/* <Reducer /> */}
       {/* <Memo /> */}
       {/* <Callback /> */}
       <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<h1>Page not found</h1>} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/dashboard' element={<Dashboard />} >
                <Route index element={<DashboardHome />} />
                <Route path='profile' element={<Profile />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Routes>
       </Suspense>
       <Navbar />
    </div>
  )
}

export default App
