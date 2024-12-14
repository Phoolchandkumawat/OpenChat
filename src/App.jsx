import { Outlet } from 'react-router-dom'
import Body from './Components/Body/Body'

function App() {

  return (
    <>
    <div className="w-full h-screen relative">
      <Outlet/>
    </div>
    </>
  )
}

export default App
