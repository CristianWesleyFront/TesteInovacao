import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header/header'
import SideBar from '../common/template/menu/sideBar'
import Footer from '../common/template/footer/footer'
//import Messages from '../common/msg/messages'

import Routes from './routes'

export default props => (
   <HashRouter>
        <div className='wrapper'>   
        <Header />
        <SideBar />
        <Routes/>
        <Footer />
       
        {/* <Messages /> */}
    </div>
   </HashRouter>
    
)