/*
* @Author: mark
* @Date:   2017-03-01 15:31:23
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 14:11:44
*/


import React from 'react';
import Notification from '../notification/Notification';

/* Styling */
import '../../Assets/styles/main.scss';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
        };

        this.authHandler = this.authHandler.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.saveUserDetails = this.saveUserDetails.bind(this);
        this.setNotification = this.setNotification.bind(this);
    }

    componentWillMount() {
        Twitch.init({
            clientId: 'g6n1uf895omlb58t1w4s7pij2p1547',
        }, (error, status) => {
            console.log(error, status);

            if (status.authenticated) {
                this.authHandler(null, status.token);
                return;
            }

            let user = localStorage.getItem('user');

            if (!user) {
                return;
            }

            user = JSON.parse(user);
            this.saveUserDetails(user);
        });
    }

    authHandler(err, token) {
        if (err) {
            console.log(err);
            return;
        }

        if (!token) {
            return;
        }

        this.saveUserDetails({
            token: token,
        });
    }

    logoutUser() {
        let user = {...this.state.user};
        user = null;
        this.setState({user});
        localStorage.removeItem('user');
    }

    saveUserDetails(userdata) {
        let user = {...this.state.user};
        user = userdata;
        this.setState({user});
        localStorage.setItem('user', JSON.stringify(user));

        this.props.router.push('/chat');
    }

    setNotification(type = 'error', message, title) {
        const notification = {...this.state.notification};
        notification.title = title;
        notification.message = message;
        notification.type = type;
        this.setState({notification});
    }

    render() {
        return(
            <div>
                {
                    this.state.notification &&
                    <Notification
                        type={this.state.notification.type}
                        title={this.state.notification.title}
                        message={this.state.notification.message}
                        clearNotification={() => {
                            this.setState({notification: null});
                        }}
                    />
                }

                {
                    this.props.children &&
                    React.cloneElement(this.props.children, {
                        user: this.state.user,
                        authHandler: this.authHandler,
                        logoutUser: this.logoutUser,
                        notification: this.setNotification,
                    })
                }
            </div>
        );
    }
}

export default App;
