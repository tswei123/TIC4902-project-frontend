import { Link } from "react-router-dom";

const HowitWorks = () => {
    return (
        <div>
            <div>
                <div>
                    <div class="container service">
                        <h1 id="serviceheading">Rental Services</h1>
                        <div class="card-group">
                            <div class="card"><img class="card-img-top w-100 d-block" src={`assets/img/rent-switch-001-01.png`} />
                                <div class="card-body">
                                    <h4 class="card-title">Nintendo Switch</h4>
                                    <p class="card-text">Bring the fun to your family gatherings and parties with our Nintendo Switch console and game rentals - the ideal choice for creating memorable moments and bonding over your favorite games!</p><Link class="btn btn-primary" type="button" to="/service">Party Now!</Link>
                                </div>
                            </div>
                            <div class="card"><img class="card-img-top w-100 d-block" src={`assets/img/rent-ps4-001-01.png`} />
                                <div class="card-body">
                                    <h4 class="card-title">PlayStation</h4>
                                    <p class="card-text">Experience the excitement of the latest Playstation games with our convenient console and game rentals - the ultimate solution for gaming enthusiasts on a budget!</p><Link class="btn btn-primary" type="button" to="/service">Enjoy Now!</Link>
                                </div>
                            </div>
                            <div class="card"><img class="card-img-top w-100 d-block" src={`assets/img/rent-meta-001-01.png`} />
                                <div class="card-body">
                                    <h4 class="card-title">Meta Quest</h4>
                                    <p class="card-text">Experience the immersive world of virtual reality with our Meta Quest rentals - the perfect choice for those looking to try out this cutting-edge technology without committing to a purchase!</p><Link class="btn btn-primary" type="button" to="/service">Explore Now!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="howtorentbanner" class="p-5 mb-4 round-3 position-relative" style={{ margin: "0;" }}>
                    <div class="container-fluid py-5" style={{ zIndex: "999999;" }}>
                        <h1 class="display-5 fw-bold">How to Rent?</h1>
                        <p class="col-md-8 fs-4">Not sure how? We are here to help! Read through our friendly quick guide below to
                            find out more.</p>
                    </div>
                </div>
                <section id="howtorentsection" class="py-4 py-xl-5">
                    <div class="container">
                        <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                            <div class="row g-0">
                                <div class="col-md-6 howtorent">
                                    <div class="text-white p-4 p-md-5">
                                        <h2 class="fw-bold text-white mb-3">Book a Rental Service</h2>
                                        <p class="mb-4">Make your reservation today! Choose a service and period or rental, select any add-on or include any special requirement, and choose between self-collection or delivery. Check out and confirm your reservation.&nbsp;</p>
                                        <div class="my-3"><Link class="btn btn-primary btn-lg me-2" role="button" to="/service">Book Now</Link></div>
                                    </div>
                                </div>
                                <div class="col-md-6 order-first order-md-last" style={{ minHeight: "250px;" }}><img class="w-100 h-100 fit-cover" src="assets/img/howtorent-2-1.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                            <div class="row g-0">
                                <div class="col-md-6 order-first order-md-last" style={{ minHeight: "250px;" }}><img class="w-100 h-100 fit-cover" src="assets/img/howtorent-2-3.png" /></div>
                                <div class="col-md-6 order-last howtorent">
                                    <div class="text-white p-4 p-md-5">
                                        <h2 class="fw-bold text-white mb-3">Collection</h2>
                                        <p class="mb-4">Let us deliver to your door step or self-collect at our friendly office. Be sure to check all the rental items!</p>
                                        <div class="my-3"><Link class="btn btn-primary btn-lg me-2" role="button" to="/aboutus">Our Location</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                            <div class="row g-0">
                                <div class="col-md-6 howtorent">
                                    <div class="text-white p-4 p-md-5">
                                        <h2 class="fw-bold text-white mb-3">Happy Time</h2>
                                        <p class="mb-4">Enjoy your rental! Contact us if you face any technical difficulties, our friendly staff would be there to help!</p>
                                        <div class="my-3"><Link class="btn btn-primary btn-lg me-2" role="button" to="/aboutus">Contact Us</Link></div>
                                    </div>
                                </div>
                                <div class="col-md-6 order-first order-md-last" style={{ minHeight: "250px;" }}><img class="w-100 h-100 fit-cover" src="assets/img/howtorent-2-2.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                            <div class="row g-0">
                                <div class="col-md-6 order-first order-md-last" style={{ minHeight: "250px;" }}><img class="w-100 h-100 fit-cover" src="assets/img/howtorent-2-4.png" /></div>
                                <div class="col-md-6 order-last howtorent">
                                    <div class="text-white p-4 p-md-5">
                                        <h2 class="fw-bold text-white mb-3">Return</h2>
                                        <p class="mb-4">Let us collect the item from you or return the item back to us at our office. We would return you the deposit upon checking and verification of all returned rental equipment.&nbsp;</p>
                                        <div class="my-3"><Link class="btn btn-primary btn-lg me-2" role="button" to="/aboutus">Our Location</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HowitWorks;