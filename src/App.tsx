
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { Navbar } from './Components/Navbar/Navbar'
import LandPage from './Pages/LandingPage/LandPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthModal } from './auth/Auth'

function App() {
  const queryclient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryclient}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandPage />} />
            <Route path='/auth' element={<AuthModal />} />

          </Routes>
        </BrowserRouter>
      </QueryClientProvider>



    </>
  )
}

export default App
