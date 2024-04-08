import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="Beranda-Container">
          <div className="Beranda">
            <div className="Beranda-1">
              <h1>Menjaga Keberlanjutan Pangan Indonesia</h1>
              <p>
                Bersama FOODMATE mari mencegah dan mengantisipasi FoodLoss dan
                FoodWaste
              </p>
              <Link className={`link-event`} to="/FoodStok">
                Yuk Pantau Kadaluarsa Pangan!
              </Link>
              <div className="Beranda-1-List">
                <p>4,2k Orang</p>
                <hr />
                <p>Telah berkonstribusi dalam keberlanjutan pangan Indonesia</p>
              </div>
            </div>
            <ul className="Beranda-List">
              <li>Membantu</li>
              <li>Pantau</li>
              <li>Diskon</li>
              <li>Terpercaya</li>
              <li>Edukasi</li>
            </ul>
          </div>
          <div className="Beranda-2-Container">
            <div className="Beranda-2">
              <p>
                <h1>Rekomendasi Diskon</h1><hr/>
                FoodDisc memudahkan melihat dan membeli diskon makanan dari
                berbagai perusahaan menjelang jam tutup. Sebagai kepala
                perusahaan, Anda bisa memanfaatkannya untuk menjual produk
                makanan langsung disini
              </p>
              <div className="Beranda-2-Button">
                <Link className="Beranda-2-Link" to="/FoodDisc">
                  Mulai Membeli
                </Link>
                <Link className="Beranda-2-Link">Jelajahi Diskon</Link>
              </div>
            </div>
            <div className="Beranda-2-Main">
              <div className="Beranda-2-Main-First-Container">
                <div className="Beranda-2-Main-First">
                  <h1>
                    Dengan <span>Foodmate</span> kamu{" "}
                  </h1>
                  <h1>
                    bisa <span>order makanan</span>
                  </h1>
                  <h1>
                    di <span>malam hari</span>
                  </h1>
                  <h1>
                    {" "}
                    dengan <span>harga</span> sangat
                  </h1>
                  <h1>terjangkau</h1>
                </div>
              </div>
              <div className="Beranda-2-Main-Second">
                <div className="Beranda-2-Main-Second-one">
                  <h2>
                    Makan <br />
                    Murah <br />
                    <span>Setiap Hari!!</span>
                  </h2>
                </div>
                <div className="Beranda-2-Main-Second-two">
                  <h2>
                    <span>Diskon</span> Akan <br />
                    Selalu <span>Update</span>
                    <br /> <span>Setiap Hari</span>nya
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="Beranda-3-Main">
            <div className="Beranda-3-Main-Text">
              <h1>Yuk Pantau Terus Ketersediaan Pangan Kamu</h1>
              <ul>
                <li>Terhindar dari makanan yang terbuang sia-sia</li>
                <li>Dapat Berkontribusi dalam Revitalisasi pangan Indonesia</li>
                <li>
                  Notifikasi akan selalu mengingatkanmu pada tanggal kadaluarsa
                  pangan kamu!
                </li>
              </ul>
              <Link className="link-event" to="/FoodStok">
                Yuk Pantau Kadaluarsa Pangan!
              </Link>
            </div>
          </div>
          <div className="Beranda-4-Main">
            <div className="Beranda-4-Main-one"></div>
            <div className="Beranda-4-Main-two">
              <h1>KINI BELAJAR TENTANG PANGAN INDONESIA JADI LEBIH MUDAH</h1>
              <ul>
                <li>Akses Edukasi Pangan Jadi Lebih Mudah</li>
                <li>Lebih Paham Terkait Analisis Pangan Pada Saat Ini</li>
                <li>
                  Dapat Berkontribusi Untuk Keberlangsungan Pangan Indonesia
                </li>
                <li>Konten Edukasi yang Eye Catching </li>
              </ul>
              <Link className="link-event-4" to="/FoodStok">
                Belajar Sekarang Yuk!
              </Link>
            </div>
          </div>
          <div className="Beranda-5-Main">
            <div className="Beranda-5-Main-Text">
              <p>
                <h2>Tuliskan Kritik dan Saranmu Disini</h2>Bantu kami selangkah
                lebih maju
              </p>
            </div>
            <div className="Beranda-5-Main-Input">
              <input type="text" placeholder="Tuliskan Disini..."></input>
              <input type="submit"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
