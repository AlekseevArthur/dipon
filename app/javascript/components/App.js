import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import Form1 from "./Form1/Form1"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Form1/>}/>
          <Route path = '/Form1' element={<h1> Dsfsdfsdfsdfsdfss</h1>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
