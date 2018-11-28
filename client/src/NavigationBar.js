import React, {Component} from 'react';
import './NavigationBar.css'
import './Lot.css'

class NavigationBar extends Component {
    render() {
        return (
            <div className="Nav">

                <div className="Nav-login">
                    login
                </div>

                <div className="Nav-search">
                    Search
                </div>

                <div className="Nav-menu">
                    menu
                </div>

            </div>
        );
    }
}

export default NavigationBar;