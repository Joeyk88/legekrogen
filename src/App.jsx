
import Navigation from './components/Navigation'
import { useRoutes } from 'react-router-dom'
import ShippingHeader from './components/shipping/ShippingHeader';


function App() {
  const routes = useRoutes ([
    
  ]);

  return (
   <div className='app'>
      <ShippingHeader/>
      <Navigation />
      </div>
  )
}

export default App
