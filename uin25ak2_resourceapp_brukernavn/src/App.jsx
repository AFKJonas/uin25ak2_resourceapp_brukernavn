import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import  Layout from './components/Layout'
import Nav from './components/Nav'
import PageTitle from './components/PageTitle'
import { resources } from './resources/ressurser.js'
import './App.css'
import './style/style.scss'


function App() {
  return (
    <>
    <Nav resources={resources} />
    <Layout>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
