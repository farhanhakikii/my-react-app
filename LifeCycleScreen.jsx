import React from 'react'

class LifeCycleScreen extends React.Component{
    componentDidMount(){
        alert("Hallo!")
    }
    // componentWillMount(){
    //     alert("Hello!")
    // }
    //this.setstate ndk boleh dlm component did update
    //beda waktu aja mount update dan unmount
    //cari beda will dan did
    //saat ini pake did mount dan did update
    render(){
        return(
            <div className="text-center">
                <h1>LifeCycle Screen</h1>
            </div>
        )
    }
}

export default LifeCycleScreen;