import React from "react";
import "./Card.css";

class Card extends React.Component {
  handleBuyNow = () => {
    const { title, harga, deskripsi, gambar, stock } = this.props;
    const itemData = JSON.stringify({ title, harga, deskripsi, gambar, stock });
    window.location.href = `/Buy?item=${encodeURIComponent(itemData)}`;
  };

  render() {
    const { gambar, title, harga, deskripsi, stock } = this.props;
    return (
      <div className="Card-Container">
        {gambar ? (
          <img src={gambar} alt="Card" />
        ) : (
          <div className="img-placeholder"></div>
        )}
        <div className="Card-detail">
          <div className="Card-1">
            <h5 className="text">{title}</h5>
            <h5 className="text">{`Rp.${harga}`}</h5>
          </div>
          <hr />
          <div className="Card-2">
            <h5 className="text">{deskripsi}</h5>
            <button onClick={this.handleBuyNow}>Beli Sekarang</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
