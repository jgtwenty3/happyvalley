
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';


function App() {

  return (
    <Router>
      <main>
        <NavBar/>
        <Routes>
          <Route path="/" element={
              <>
               <Hero/>
              </>
            } />

        </Routes>
      </main>
    </Router>
  )
}

export default App
