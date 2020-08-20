import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <div className="d-flex align-items-center navbar-left">
                    <a href="#" className="menu-button d-none d-md-block">
                        <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                            <rect x="0.48" y="0.5" width="7" height="1" />
                            <rect x="0.48" y="7.5" width="7" height="1" />
                            <rect x="0.48" y="15.5" width="7" height="1" />
                        </svg>
                        <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                            <rect x="1.56" y="0.5" width="16" height="1" />
                            <rect x="1.56" y="7.5" width="16" height="1" />
                            <rect x="1.56" y="15.5" width="16" height="1" />
                        </svg>
                    </a>
            
                    <a href="#" className="menu-button-mobile d-xs-block d-sm-block d-md-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                            <rect x="0.5" y="0.5" width="25" height="1" />
                            <rect x="0.5" y="7.5" width="25" height="1" />
                            <rect x="0.5" y="15.5" width="25" height="1" />
                        </svg>
                    </a>
            
                    <a className="btn btn-sm btn-outline-primary ml-3 d-none d-md-inline-block"
                        href="https://discord.gg/AHXjwKb">&nbsp;DISCORD&nbsp;</a>
                </div>
            
                <Link to={'/'} className={'navbar-logo'}>
                    <span className="logo d-none d-xs-block"></span>
                    <span className="logo-mobile d-block d-xs-none"></span>
                </Link>
            
                <div className="navbar-right">
                    <div className="header-icons d-inline-block align-middle">
                        <div className="d-none d-md-inline-block align-text-bottom mr-3">
                            <div className="custom-switch custom-switch-primary-inverse custom-switch-small pl-1" 
                                data-toggle="tooltip" data-placement="left" title="Dark Mode">
                                <input className="custom-switch-input" id="switchDark" type="checkbox" checked />
                                <label className="custom-switch-btn" for="switchDark"></label>
                            </div>
                        </div>
                        <div className="position-relative d-inline-block">
                            <button className="header-icon btn btn-empty" type="button" id="notificationButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="simple-icon-bell"></i>
                                <span className="count">1</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="notificationDropdown">
                                <div className="scroll">
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img src="img/profile-pic-l-2.jpg" alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-sm btn-secondary ml-3 d-none d-md-inline-block"
                        href="/">&nbsp;GET NITRO&nbsp;</a>
                    </div>
            
                    <div className="user d-inline-block">
                        <button className="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <span className="name"></span>
                            <span>
                                <img alt="Profile Picture" src="img/default_avatar.png" />
                            </span>
                        </button>
            
                        <div className="dropdown-menu dropdown-menu-right mt-3">
                            <Link className={"dropdown-item"} to={"/settings"}>Settings</Link>
                            <a className="dropdown-item" href="/logout">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}