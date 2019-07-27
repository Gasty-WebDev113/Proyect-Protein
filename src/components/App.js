//Packages
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Layout from './Layout'

//Paginas
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'


//Styles and Images
import '../styles/App.css'


const App = (props) => (
    <BrowserRouter>
        <Layout/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Blogs" component={Blogs} />
    </BrowserRouter>
)


export default App