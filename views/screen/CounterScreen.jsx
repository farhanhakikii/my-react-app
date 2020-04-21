import React from 'react'

class CounterScreen2 extends React.Component{
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0,
    }
    render(){
        return (
            <div className="d-flex flex-column">
            <div>
                <h1 className="d-flex">Counter 1 = {this.state.counter1}</h1>
                <input
                    type="button"
                    value="+"
                    onClick={() => this.setState({ counter1: this.state.counter1 + 1 })}
                />
                <input
                    type="button"
                    value="-"
                    onClick={() => this.setState({ counter1: this.state.counter1 - 1 })}
                />
            </div>
            <div>
            <h1 className="d-flex">Counter 2 = {this.state.counter2}</h1>
            <input
                type="button"
                value="+"
                onClick={() => this.setState({ counter2: this.state.counter2 + 2 })}
            />
            <input
                type="button"
                value="-"
                onClick={() => this.setState({ counter2: this.state.counter2 - 2 })}
            />
        </div>
            <div>
            <h1 className="d-flex">Counter 3 = {this.state.counter3}</h1>
            <input
                type="button"
                value="+"
                onClick={() => this.setState({ counter3: this.state.counter3 + 3 })}
            />
            <input
                type="button"
                value="-"
                onClick={() => this.setState({ counter3: this.state.counter3 - 3 })}
            />
        </div>
        <div>
            <h1 className="d-flex">All Counter</h1>
            <input
                type="button"
                value="+"
                onClick={() => this.setState({ counter1: this.state.counter1 + 1,counter2: this.state.counter2 + 2,counter3: this.state.counter3 + 3 })}
            />
            <input
                type="button"
                value="-"
                onClick={() => this.setState({ counter1: this.state.counter1 - 1,counter2: this.state.counter2 - 2,counter3: this.state.counter3 - 3 })}
            />
        </div>
            <input
                type="button"
                value="Reset"
                onClick={() => this.setState({ counter1: 0, counter2: 0, counter3: 0 })}
            />
            </div>
)
    }
}
export default CounterScreen2
