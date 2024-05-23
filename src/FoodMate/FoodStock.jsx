import React from "react";
import './Index.css'
import {Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

class FoodStok extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
        <div className="FoodStok">
            <div className="FoodStok-1">
              <h1>Daftarkan Bahan Panganmu Segera!</h1>
              <p>
              dan Kami Akan Mengingatkan Mengenai Ketersediaan Bahan Panganmu
              </p>
              <Link className={`link-event-FoodStok`} to="/FoodStok">
                Yuk Pantau Kadaluarsa Pangan!
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default FoodStok;
