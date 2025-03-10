import React, { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import './style/style.scss'
import Resources from './components/Resources'


function App() {
  const [category] = useState("html");
  return (
    <>
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Resources category={category} />} />
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
