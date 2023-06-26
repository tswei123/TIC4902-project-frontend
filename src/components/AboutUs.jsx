const AboutUs = () => {
    return (
        <div>
            <div class="container" style={{ marginTop: "20px", marginBottom: "20px" }}>

                <form id="contactForm-2" action="javascript:void();" method="get"><input class="form-control" type="hidden" name="Introduction" value="This email was sent from www.mywebsite.com" /><input class="form-control" type="hidden" name="subject" value="My Contact Form" /><input class="form-control" type="hidden" name="to" value="email@mywebsite.com" />
                    <div class="row">
                        <div class="col-md-6">
                            <div id="successfail"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6" id="message">
                            <fieldset>
                                <legend><i class="fa fa-envelope"></i> Contact Us</legend>
                            </fieldset>
                            <div class="has-feedback form-group mb-3"><label class="form-label" for="from_name">Name</label><input class="form-control" type="text" id="from_name" tabindex="-1" name="from_name" required="" placeholder="Full Name" /></div>
                            <div class="has-feedback form-group mb-3"><label class="form-label" for="from_email">Email</label><input class="form-control" type="email" id="from_email" name="from_email" required="" placeholder="Email Address" /></div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="has-feedback form-group mb-3"><label class="form-label" for="from_phone">Phone</label><input class="form-control" type="text" id="from_phone" name="from_phone" placeholder="Primary Phone" /></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group mb-3"><label class="form-label" for="calltime">Best Time to Call</label><select class="form-select" id="calltime" name="Call Time">
                                        <option value="Morning" selected="">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                    </select></div>
                                </div>
                            </div>
                            <div class="form-group mb-3"><label class="form-label" for="comments">Comments</label><textarea class="form-control" id="comments" name="Comments" placeholder="Enter comments here" rows="5"></textarea></div>
                            <div class="form-group mb-3"><button class="btn btn-primary d-block w-100" type="submit">Send <i class="fa fa-chevron-circle-right"></i></button></div>
                            <hr />
                        </div>
                        <div class="col-md-6">
                            <fieldset>
                                <legend> <i class="fa fa-location-arrow"></i> Locate Us</legend>
                            </fieldset>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="static-map"><a href="https://www.google.com/maps/place/ArchWizard/@1.3513768,103.840521,17z/data=!3m1!4b1!4m6!3m5!1s0x31da116f8f445439:0x623162a4c491c02d!8m2!3d1.3513714!4d103.8430959!16s%2Fg%2F11q3cm8b86" target="_blank"><img class="img-fluid"  src="assets/img/Map.png" alt="Google Map of ArchWizard"/></a></div>
                                </div>
                                <div class="col-sm-6">
                                    <fieldset>
                                        <legend><i class="fa fa-envelope"></i> Contact Us</legend>
                                    </fieldset>
                                    <div><span><strong>ArchWizard</strong></span></div>
                                    <div><span>enquiry@archwizard.tech</span></div>
                                    <div></div>
                                    <hr />
                                </div>
                                <div class="col-sm-6">
                                    <fieldset>
                                        <legend><i class="fa fa-location-arrow"></i> Our Address</legend>
                                    </fieldset>
                                    <div><span><strong>Office Name</strong></span></div>
                                    <div><span>Pemimpin Industrial Building</span></div>
                                    <div><span>63 Jalan Pemimpin, #03-10</span></div>
                                    <div><span>Singapore 577219</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default AboutUs;


/*
<div class="modal fade" role="dialog" tabindex="-1" id="modal1">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header"><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                                <h4>Contact Information</h4>
                            </div>
                            <div class="modal-body">
                                <form id="contactForm-1" action="javascript:void();" method="get"><input class="form-control" type="hidden" name="Introduction" value="This email was sent from www.mywebsite.com" /><input class="form-control" type="hidden" name="subject" value="My Contact Form" /><input class="form-control" type="hidden" name="to" value="email@mywebsite.com" />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div id="modal-successfail"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6" id="modal-message">
                                            <fieldset>
                                                <legend><i class="fa fa-envelope"></i> Contact Us</legend>
                                            </fieldset>
                                            <div class="has-feedback form-group mb-3"><label class="form-label" for="modal_from_name">Name</label><input class="form-control" type="text" id="modal_from_name" tabindex="-1" name="from_name" required="" placeholder="Full Name" /></div>
                                            <div class="has-feedback form-group mb-3"><label class="form-label" for="modal_from_email">Email</label><input class="form-control" type="email" id="modal_from_email" name="from_email" required="" placeholder="Email Address" /></div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="has-feedback form-group mb-3"><label class="form-label" for="modal_from_phone">Phone</label><input class="form-control" type="text" id="modal_from_phone" name="from_phone" placeholder="Primary Phone" /></div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group mb-3"><label class="form-label" for="modal_calltime">Best Time to Call</label><select class="form-select" id="modal_calltime" name="Call Time">
                                                        <option value="Morning" selected="">Morning</option>
                                                        <option value="Afternoon">Afternoon</option>
                                                        <option value="Evening">Evening</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div class="form-group mb-3"><label class="form-label" for="modal_comments">Comments</label><textarea class="form-control" id="modal_comments" name="Comments" placeholder="Enter comments here" rows="5"></textarea></div>
                                            <div class="form-group mb-3"><button class="btn btn-primary d-block w-100" type="submit">Send <i class="fa fa-chevron-circle-right"></i></button></div>
                                            <hr />
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <legend> <i class="fa fa-location-arrow"></i> Locate Us</legend>
                                            </fieldset>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="static-map"><a href="https://www.google.com/maps/place/2+15th+St+NW+Washington+DC+20024" target="_blank"><img class="img-fluid" src="assets/img/Map.png" alt="Google Map of Washington Monument" /></a></div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <fieldset>
                                                        <legend><i class="fa fa-envelope"></i> Contact Us</legend>
                                                    </fieldset>
                                                    <div><span><strong>Name</strong></span></div>
                                                    <div><span>email@address.com</span></div>
                                                    <div><span>www.awebsite.com</span></div>
                                                    <hr />
                                                </div>
                                                <div class="col-sm-6">
                                                    <fieldset>
                                                        <legend><i class="fa fa-location-arrow"></i> Our Address</legend>
                                                    </fieldset>
                                                    <div><span><strong>Office Name</strong></span></div>
                                                    <div><span>55 Icannot Dr.</span></div>
                                                    <div><span>Daytona Beach, FL 81500</span></div>
                                                    <div><abbr data-toggle="tooltip" data-placement="top" title="Office Phone: 555-867-5309">O:</abbr> 555-867-5309</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>*/
