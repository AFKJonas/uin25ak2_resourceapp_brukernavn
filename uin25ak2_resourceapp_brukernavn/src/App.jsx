//Importerte filer, slik at jeg kan bruke de forskjellige komponentene i de filene
//Måtte importere BrowserRouter, slik at jeg kunne bruke Routes og Route
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
import './style/style.scss'
import './App.css'
import Resources from './components/Resources'
import './style/PageTitle.scss';
import './style/Layout.scss';
import './style/Nav.scss'
import './style/Resources.scss';



function App() {

  return (
    <>
     <Router>
      <Layout>
        <Routes>
          {/* Satt opp route slik at for hver kategori, så vil den sende 
           den spesifikke kategorien som en prop til Resources-komponenten */}
          <Route path="/" element={<Resources category="html" />} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}
export default App
