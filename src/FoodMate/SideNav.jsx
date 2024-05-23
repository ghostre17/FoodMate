import React from "react";
import './AdminAdd.css'

class SideNav extends React.Component {

  LogOut = () => {
    window.location.href = `/Login`
  }

    render() {
        return (
            <div className="sidebar">
        <h2>FoodMate</h2>
        <ul>
          <li><a href="#"><i className="fas fa-home"></i>FoodStock</a></li>
          <li><a href="#"><i className="fas fa-user"></i>Profile</a></li>
          <li><a href="#"><i className="fas fa-address-card"></i>Transaksi</a></li>
          <li><a href="#"><i className="fas fa-project-diagram"></i>Statistik</a></li>
          <hr />
          <li><a href="#"><i className="fas fa-blog"></i>Blogs</a></li>
          <li><a href="#"><i className="fas fa-address-book"></i>Contact</a></li>
          <li><a href="#"><i className="fas fa-map-pin"></i>Map</a></li>
          <li><a href="#" className="logout" onClick={this.LogOut}><i ></i>Logout</a></li>
        </ul>
      </div>
        )
    }
}

export default SideNav