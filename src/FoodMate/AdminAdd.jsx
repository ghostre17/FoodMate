import React, { Component } from "react";
import './AdminAdd.css';
import SideNav from "./SideNav";

class AdminAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem('items')) || [
        { name: "Apel", description: "Buah apel segar dari perkebunan lokal.", gambar: "", harga: "5000", stock: 20 },
        { name: "Roti", description: "Roti tawar buatan rumah.", gambar: "", harga: "10000", stock: 15 },
        { name: "Susu", description: "Susu sapi murni tanpa pengawet.", gambar: "", harga: "15000", stock: 10 },
      ],
      isPopupOpen: false,
      currentItem: { name: "", description: "", gambar: "", harga: "", stock: "" },
      isEdit: false,
    };
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  handleAdd = () => {
    this.setState({
      isEdit: false,
      currentItem: { name: "", description: "", gambar: "", harga: "", stock: "" },
      isPopupOpen: true,
    });
  };

  handleEdit = (index) => {
    const { items } = this.state;
    this.setState({
      isEdit: true,
      currentItem: { ...items[index], index },
      isPopupOpen: true,
    });
  };

  handleDelete = (index) => {
    const { items } = this.state;
    const newItems = items.filter((item, i) => i !== index);
    this.setState({ items: newItems });
  };

  handleSave = () => {
    const { isEdit, currentItem, items } = this.state;
    if (isEdit) {
      const newItems = items.map((item, index) => (index === currentItem.index ? currentItem : item));
      this.setState({ items: newItems });
    } else {
      this.setState({ items: [...items, currentItem] });
    }
    this.setState({ isPopupOpen: false });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentItem: {
        ...prevState.currentItem,
        [name]: value,
      },
    }));
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState((prevState) => ({
        currentItem: {
          ...prevState.currentItem,
          gambar: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { items, isPopupOpen, currentItem, isEdit } = this.state;

    return (
      <div className="wrapper">
        <SideNav />
        <div className="main_content">
         
          <div className="Header">Foods</div>
          <table>
            <thead className="Table-Head">
              <tr>
                <th>| Name</th>
                <th>| Deskripsi</th>
                <th>| Gambar</th>
                <th>| Harga</th>
                <th>| Stock</th>
                <th>
                  <button className="tambah" onClick={this.handleAdd}>Tambah</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td><img src={item.gambar} alt="gambar" style={{ maxWidth: '50px' }} /></td>
                  <td>{item.harga}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button className="hapus" onClick={() => this.handleDelete(index)}>Hapus</button>|
                    <button className="edit" onClick={() => this.handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isPopupOpen && (
            <div className="popup">
              <div className="popup-inner">
                <h2>{isEdit ? "Edit Barang" : "Tambah Barang"}</h2>
                <form>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={currentItem.name}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Deskripsi:
                    <input
                      type="text"
                      name="description"
                      value={currentItem.description}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Gambar:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={this.handleImageChange}
                    />
                  </label>
                  <label>
                    Harga:
                    <input
                      type="text"
                      name="harga"
                      value={currentItem.harga}
                      onChange={this.handleInputChange}
                    />
                  </label>
                  <label>
                    Stock:
                    <input
                      type="number"
                      name="stock"
                      value={currentItem.stock}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </form>
                <button className="form-button" onClick={this.handleSave}>{isEdit ? "Save Changes" : "Add Item"}</button>
                <button className="form-cancel" onClick={() => this.setState({ isPopupOpen: false })}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AdminAdd;
