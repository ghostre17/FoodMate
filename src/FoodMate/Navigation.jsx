import React from "react";
import {Routes, Route} from 'react-router-dom'

import Main from "./Main";
import FoodDisc from "./FoodDisc";
import FoodEdu from "./FoodEdu";
import FoodStok from "./FoodStock";
import Error from "./404";
import AdminAdd from "./AdminAdd";
import Login from "./Login";
import Buy from "./Buy";
import Register from "./Register";
import LoginAdmin from "./LoginAdmin";

class Navigation extends React.Component {
    render(){
        return(
            <Routes>
                <Route exact path="/Login" Component={Login}></Route>
                <Route path="/" Component={Main}></Route>
                <Route path="/FoodStok" Component={FoodStok}/>
                <Route path="/FoodEdu" Component={FoodEdu}/>
                <Route path="/FoodDisc" Component={FoodDisc}/>
                <Route path="/404" Component={Error}/>
                <Route path="/AdminAdd" Component={AdminAdd}/>
                <Route path="/Buy" Component={Buy}/>
                <Route path="/Register" Component={Register}/>
                <Route path="/LoginAdmin" Component={LoginAdmin}/>
            </Routes>
        )
    }
}

export default Navigation