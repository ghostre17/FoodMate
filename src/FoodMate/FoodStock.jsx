import React from "react";
import './Index.css'
import {Link} from 'react-router-dom'

class FoodStok extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default FoodStok;
