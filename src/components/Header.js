import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#bbdefb'}} className="pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo-circle">
                                <img src={require('./../images/logo.png')} height={70} width={70}/>
                            </div>
                        </div>
                        <div className="col-md-8 navItemsRight">
                            <ul className="nav justify-content-end ">
                                <li className="nav-item pl-3 pr-3 navItems">About</li>
                                <li className="nav-item pl-3 pr-3 navItems">Work</li>
                                <li className="nav-item pl-3 pr-3 navItems">Notes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;