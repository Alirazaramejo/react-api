import 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Screens/Home/Home';
import About from '../../Screens/About/About';
import Products from '../../Screens/Products/Products';
import Form from '../../Screens/Form/Form';
import Navbar from '../../Components/Navbar/Navbar';
import SinglePage from '../../Screens/SinglePage/SinglePage';

function MainRouter() {
  return (
    <>
      <BrowserRouter>
            <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/SinglePage/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
