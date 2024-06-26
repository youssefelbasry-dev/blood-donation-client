import React from "react";
import './components/Header/Header.css'
import {BrowserRouter, Routes,Route , Navigate } from "react-router-dom";
import Products from "./products"
import Container from "./components/Container/Container.js";
import Header from "./components/Header/Header.js";
import Groups from "./components/groupsang/Groups";
import First from "./components/Prin-img/First";
import Rows from "./components/Rows/Rows";
import Text from "./components/text/Text";
import Botn from "./components/botn/Botn";
import Card from "./components/Card/Card";
import Banner from "./components/Banner/Banner";
import ScrollToTop from "./components/Scrolltotop";
import Insc from "./components/insc/Insc";
import Test from "./components/Testt/Test";
import Find from "./components/trouverdnt/Find";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useSelector } from "react-redux";


function App(){
   const user = useSelector((state) => state.user.currentUser);

   return(
      <div> 
         <BrowserRouter>
            <ScrollToTop/>
           {user &&  <Header/>}
            <Routes>
            {user ? (
              <>
                <Route exact path="/" element={<><First/><Products/><Container/><Groups/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>}/>
                <Route exact path="/Faire-un-don" element={<><Rows/><Text/><Botn/><br/><br/><Card/><Banner/><br/><br/><br/><br/><br/><br/></>}/>
                <Route exact path="/Donate-sang" element={<><Test/></>}/>
                <Route exact path="/insc" element={<><Insc/></>}/>
                <Route exact path="/Trouver-donneur" element={<><Find/></>}/>
               </>
               ):(
               <>
                  <Route exact path="/Login" element={<><Login/></>}/>
                  <Route exact path="/register" element={<><Register/></>}/>
               </>
            )}
            <Route path='/Login' element={user ? <Navigate to='/'/> : <Navigate to="/Login" />} />
            <Route path='*' element={user ? <Navigate to='/'/> : <Navigate to="/Login" />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;