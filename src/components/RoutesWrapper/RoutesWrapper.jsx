import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from "../../pages/Home/Home"
import Services from '../../pages/Services/Services';
import About from '../../pages/About/About';
import Our_team from '../../pages/Our_team/Our_team';
import Media from '../../pages/Media/Media';



const RoutesWrapper = () => {
  return (
    <Layout>   
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/team" element={<Our_team/>} />
            <Route path="/media" element={<Media/>} />
        </Routes>
    </Layout>
  );
};

export default RoutesWrapper;
