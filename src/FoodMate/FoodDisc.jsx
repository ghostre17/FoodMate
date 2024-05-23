import React, { Component } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from './Header'
import Footer from './Footer'

class FoodDisc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      barang: JSON.parse(localStorage.getItem('items')) || [],
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startCountdown() {
    this.timer = setInterval(() => {
      const currentTime = new Date();

      const remainingMilliseconds =
        24 * 60 * 60 * 1000 -
        (currentTime.getHours() * 60 * 60 * 1000 +
          currentTime.getMinutes() * 60 * 1000 +
          currentTime.getSeconds() * 1000);

      const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
      const minutes = Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

      this.setState({ hours, minutes, seconds }, () => {
        document.getElementById(
          "countdownHours"
        ).innerHTML = `${this.state.hours.toString().padStart(2, "0")}`;
        document.getElementById(
          "countdownMinutes"
        ).innerHTML = `${this.state.minutes.toString().padStart(2, "0")}`;
        document.getElementById(
          "countdownSeconds"
        ).innerHTML = `${this.state.seconds.toString().padStart(2, "0")}`;
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          <div className="FoodDisc">
            <div className="FoodStok-1">
              <h1>DISKON MAKANAN AKAN DIMULAI DALAM :</h1>
              <div className="Timer">
                <h1 id="countdownHours"></h1>
                <h1>:</h1>
                <h1 id="countdownMinutes"></h1>
                <h1>:</h1>
                <h1 id="countdownSeconds"></h1>
              </div>
              <h4>
                Ayo siapkan mental dan kecepatan jarimu dalam berburu makanan
                murah lebay malam ini!
              </h4>
              <div className="Beranda-1-List">
                <p>4,2k Orang</p>
                <hr />
                <p>Telah berkonstribusi dalam keberlanjutan pangan Indonesia</p>
              </div>
            </div>
          </div>
          <div className="FoodDisc-2">
            <h1>Spesial Diskon Murah Lebay!</h1>
            <Link className={`FoodDisc-2-link`} to="/FoodDisc">
              Selengkapnya
            </Link>
          </div>
         <div className="Card-Grid">
           {this.state.barang.map((item, index) => 
            <Card
            key={index}
            title={item.name}
            harga={item.harga}
            deskripsi={item.description}
            gambar={item.gambar}
            stock={item.stock}
            />
          )}
         </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default FoodDisc;
