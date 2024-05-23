import React from "react";
import "./Buy.css";
import Footer from "./Footer";
import Header from "./Header";

class Buy extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item') ? JSON.parse(decodeURIComponent(params.get('item'))) : null;

    this.state = {
      item: item,
      quantity: 1,
    };
  }

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  handleSubmit = () => {
    alert(`Item: ${this.state.item.title}\nQuantity: ${this.state.quantity}`);
  };

  render() {
    const { item, quantity } = this.state;

    if (!item) {
      return <div>No item selected.</div>;
    }

    return (
      <div>
        <Header />
        <div className="TransactionPage">
          <h1>Transaksi</h1>
          <div className="TransactionCard">
            <img src={item.gambar} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.deskripsi}</p>
            <h3>Rp.{item.harga}</h3>
            <div className="Quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={this.handleQuantityChange}
                min="1"
                max={item.stock} // memastikan quantity tidak melebihi stock
              />
            </div>
            <button className="Buy" onClick={this.handleSubmit}>Konfirmasi Pembelian</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Buy;
