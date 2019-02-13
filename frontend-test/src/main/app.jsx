import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../layout/template/header/header'
import SideBar from '../layout/template/menu/sideBar'
import Footer from '../layout/template/footer/footer'


import Routes from './routes'

export default props => (
   <HashRouter>
        <div className='wrapper'>   
        <Header />
        <SideBar />
        <Routes/>
        <Footer />
    </div>
   </HashRouter>
    
)