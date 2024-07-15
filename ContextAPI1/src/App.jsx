
import './App.css'
import CreateAccount from './component/CreateAccount'
import Dashboard from './component/Dashboard'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1 className='bg-black text-white h-24 flex items-center justify-center font-bold text-3xl'>Hello Anuj</h1>
      <CreateAccount/>
      <Dashboard />
    </UserContextProvider>
  )
}

export default App
