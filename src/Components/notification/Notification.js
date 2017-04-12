/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:54:36
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-03-28 16:56:47
*/

import React from 'react';

class Notification extends React.Component {
    constructor() {
        super();

        this.state = {
            width: 0,
            height: 0,
        };

        this.defaults = this.defaults.bind(this);
    }

    componentDidMount() {
        const element = document.querySelector('#notification > div');

        this.setState({
            height: element.clientHeight,
            width: element.clientWidth,
        });
    }

    defaults() {
        let defaults = {};

        switch (this.props.type.toLowerCase()) {
            case 'error':
                defaults.className = 'alert alert-danger';
                defaults.title = 'Error';
                break;

            case 'success':
                defaults.className = 'alert alert-success';
                defaults.title = 'Success';
                break;

            case 'hint':
                defaults.className = 'alert alert-info';
                defaults.title = 'Hint';
                break;

            default:
                defaults.className = 'alert alert-warning';
                defaults.title = 'Invalid';
                break;
        }

        return defaults;
    }

    render() {
        const defaults = this.defaults();
        const positionStyles = {
            'marginLeft': ((this.state.width / 2) * -1) + 'px',
            'margintop': ((this.state.height / 2) * -1) + 'px',
        };

        return(
            <div id="notification" onClick={this.props.clearNotification} >
                <div
                    className={defaults.className}
                    style={positionStyles}
                    role="alert"
                    onClick={this.props.clearNotification}
                >
                    <strong>{this.props.title || defaults.title}</strong>
                    <p>{this.props.message}</p>
                    <small>Click anywhere to dismiss this notification.</small>
                </div>
            </div>
        );
    }
}

export default Notification;
