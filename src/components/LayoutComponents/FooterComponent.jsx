import React from 'react';

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-4 footer-navigation">
                        <h3><a href="#"><img class="img-fluid" src="assets/img/logo.png" style={{ width: '238px' }} /></a ></h3>
                        <p class="links"><a href="#">Nintendo Switch</a><strong> · </strong><a
                            href="#">PlayStation</a><strong> · </strong><a href="#">Meta Quest</a></p>
                        <p class="company-name">TIC4902 Group 3 © 2023</p>
                    </div>
                    <div class="col-sm-6 col-md-4 footer-contacts">
                        <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                            <p id="footer-location"> 63 Jalan Pemimpin<br />#03-10, 577219<br /> Singapore</p>
                        </div>
                        <div><i class="fa fa-phone footer-contacts-icon"></i>
                            <p class="footer-center-info email text-start"> +65 9820 1526</p>
                        </div>
                        <div><i class="fa fa-envelope footer-contacts-icon"></i>
                            <p> <a href="#" target="_blank">enquiry@archwizard.tech</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 footer-about">
                        <h4>About the company</h4>
                        <p style={{ textAlign: 'justify' }}><span style={{ color: 'rgb(44, 44, 45)' }}>Welcome to ArchWizard, your
                            one-stop-shop for all things gaming! Shop the latest games and electronics at ArchWizard.
                            Our warm and family-friendly environment caters to gamers of all ages. Retail, Trade &amp;
                            Rental available. #gaming #affordable</span></p>
                        <div class="social-links social-icons"><a href="https://www.facebook.com/ArchWizardSG/"><i class="fa fa-facebook-square"></i></a><a
                            href="https://www.instagram.com/archwizardsg/"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a
                                href="#"><i class="fa fa-github"></i></a></div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;