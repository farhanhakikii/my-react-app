import React from 'react'

const ProductCard = (props) => {
    const {productData} = props
    const {nama,harga,desc,diskon,stok} = productData
    return (
        <div style={{width: "240px", 
                     padding: "16px", 
                     border: "2px solid black", 
                     borderRadius: "7px"}}>
            {
                stok > 0 ?  <div>
                            <p>Nama: {nama}</p>
                            <p>Price: Rp. {harga}</p>
                            <p>{desc}</p>
                            {
                                diskon > 0 ?<p>Diskon: {diskon}% menjadi Rp. {harga-(harga*diskon/100)}</p>:null
                            }
                            <p>Stok: {stok}</p>
                            </div> : "Stok Kosong!"
            }
        </div>
    )
}
// class ProductCard extends React.Component {
//     render() {
//         return (
//             <div style={{width: "240px", 
//                          padding: "16px", 
//                          border: "2px solid black", 
//                          borderRadius: "7px"}}>
//                 <p>{this.props.nama}</p>
//                 <p>{this.props.harga}</p>
//                 <p>{this.props.desc}</p>
//             </div>
//         )
//     }
// }
export default ProductCard