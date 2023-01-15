import React, { Component } from 'react';

class PlusOneButton extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 0};
    }

    handleClick = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Plus One: {this.state.quantity}
            </button>
        )
    }
}


export default PlusOneButton;