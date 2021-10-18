import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
    return (
        <div className="footer container-fluid row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3 ">
                <img src={logo} alt="" className="p-3" />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                <i class="fab fa-facebook  p-2  fs-4 text-info"></i>
                <i class="fab fa-linkedin  p-2 fs-4 text-info"></i>
                <i class="fab fa-instagram  p-2 fs-4 text-info"></i>
                <i class="fab fa-twitter  p-2 fs-4 text-info"></i>
                <p>©copyrights-2021 | Developer: Taseenul Hoque Bappi</p>
            </div>

        </div>
    );
};

export default Footer;