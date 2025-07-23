import { Routes, Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Layout from './components/Layout/Layout'
import Pagenotfound from './pages/Pagenotfound'
import Especialidades from './Especialidades/Especialidades'




function App() {
 

  return (
    <>
    <Layout>
     <Routes>
          <Route path="" element={<Menu />} />
          <Route path="location" element={<Location/>} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="especialidades" element={<Especialidades/>} />
     </Routes>
     </Layout>
    </>
  )
}

export default App
