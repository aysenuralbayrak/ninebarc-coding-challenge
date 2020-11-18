import React, { Component } from 'react';
import webHeader from "../webHeader.jpg"
export default class Header extends Component {
    render() {
        return (
            <div className="header_container">

                <div className="header_content">

                    <img src={webHeader} className="header_logo" alt="web-header" />

                </div>
            </div>
        );
    }
}