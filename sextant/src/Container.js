import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                <h2 className="ContainerHeading">{this.props.name}</h2>
                <div className="ContainerContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Container;
