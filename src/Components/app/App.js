/*
* @Author: mark
* @Date:   2017-03-01 15:31:23
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 15:29:56
*/


import React from 'react';

/* Styling */
import '../../Assets/styles/main.scss';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
        };
    }

    render() {
        return(
            <div>
                {
                    this.props.children &&
                    React.cloneElement(this.props.children, {
                        user: this.state.user,
                    })
                }
            </div>
        );
    }
}

export default App;
