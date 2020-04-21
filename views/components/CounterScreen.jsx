import React from 'react'

// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>props.kota</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.arai}</h1>
            </div>
                            // <h1>{this.props.terserah}</h1>
                            // <h2>{this.props.nama}</h2>    
                            // class yg bisa pake this.props        
        )
    }
}
export default CounterScreen