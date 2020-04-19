import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewLayar from './NewScreen'
import NewScreen from './NewScreen';
import TableProduct from './views/components/TableProduct';
import CounterScreen from './views/screens/CounterScreen'
import ProductCard from './views/components/ProductCard';
import CounterScreen2 from './views/components/CounterScreen';
import InputScreen from './views/components/InputScreen';

function App() {
  let arr = ["Jakarta", "Bandung", "Tangerang"]
  let barang = [
                {
                  nama: "Sepatu Renang",
                  harga: 2000000,
                  desc: "Sepatu yang mustahil dibeli",
                  diskon: 20,
                  stok: 50
                },
                {
                  nama: "Bola Lari",
                  harga: 250000,
                  desc: "Bola tak berguna",
                  diskon: 30,
                  stok: 0
                },
                {
                  nama: "Raket Volli",
                  harga: 500000,
                  desc: "Raket super kuat",
                  diskon: 40,
                  stok: 20
                }
                ]
  
  const renderData = () => {
    return barang.map((val) => {
      return <ProductCard productData={val}/>
    })
  }
  return (
    <div className="App">
      {/* <h1>Hello World!</h1>
      <h2 style={{border:'1px solid red',marginTop: '30px'}}>Test</h2> */}
      {/* {arr.map(val => {
        return (
          <>
          <p>{val}</p>
          <NewLayar/>
          </>
        )
      })} */}
      {/* <TableProduct/> */}
      {/* <CounterScreen arai={arr.map(val => {
        return <p>{val}</p>
        })}/> */}
    {/* <ProductCard nama={barang.map(val => {return val.nama})} 
                 harga={barang.map(val => {return val.harga})} 
                 desc={barang.map(val => {return val.desc})}/> */}
                 {/* {renderData()} */}
                 {/* <CounterScreen2/> */}
                 <InputScreen/>
    </div>
    //<CounterScreen terserah="pakkau" nama="njay"/>
  );
}
//harus 2 kurawal untuk styling dan value pake string
//class jadi clasName
//imporrt jika tidak ada ./ maka dari node module
//penamaan dan pembuatan class dan komponent harus pake huruf besar
//export bisa banyak,tapi tidak default, namun umunya hanya 1 dan pake export default
//pembungkus function hanya 1, misal <div>

export default App;
