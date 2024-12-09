



import Navigation from './components/Navigation'
import { useRoutes } from 'react-router-dom'


function App() {
  const routes = useRoutes ([
    
  ]);

  return (
   <div className='app'>
      <Navigation />
      </div>
  )
}

export default App
