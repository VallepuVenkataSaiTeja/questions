import { useState } from 'react'
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
       <Callback />
    </div>
  )
}

export default App
