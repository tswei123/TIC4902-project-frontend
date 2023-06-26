const Home = () => {
    
    return (
        <div>
            <div id="promo">
                <div id="promo-container" class="mb-4">
                    <div class="container-fluid py-5" id="promo-container-2">
                        <h1 class="display-5 fw-bold">Fantasy Offer!</h1>
                        <p id="promo-p" class="col-md-8 fs-4" style={{ marginBottom: '6px' }}>We have a special treat to our
                            customer. Order now and get a free gift on your first rental!</p><a
                                class="btn btn-primary btn-lg d-inline-flex" role="button" href="/service" style={{ marginTop: '19px' }}>Bring
                            Me!</a>
                    </div>
                </div>
            </div>
            <div class="container site-section" id="welcome">
                <h1>Rent the Latest Console Games!</h1>
                <p>Welcome to ArchWizard, your ultimate destination for console game rentals! We specialize in providing rental
                    services for the Meta Quest 2, Nintendo Switch, and PlayStation, with a wide selection of family-friendly
                    games suitable for all ages and skill levels. Our rental process is simple and hassle-free, with affordable
                    options to suit every budget. Plus, our friendly and&nbsp; now ledgeable staff are always on hand to help
                    you choose the perfect games for your family. Visit us today and experience the joy of gaming without
                    breaking the bank!</p>
            </div>
            <div class="dark-section">
                <div class="container site-section" id="why">
                    <h1>Why Choose Us</h1>
                    <div class="row">
                        <div class="col-auto item col-sm-4"><i class="fas fa-gamepad icon"></i>
                            <h2>Many Games</h2>
                            <p>From the latest releases to classic favorites, we have a wide selection of console games for the
                                Meta Quest 2, Nintendo Switch, and PlayStation that will keep you entertained for hours.</p>
                        </div>
                        <div class="col-auto item col-sm-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            width="1em" height="1em" fill="currentColor"
                            class="icon">
                            <path
                                d="M256 0C397.4 0 512 114.6 512 256C512 368.9 438.9 464.7 337.5 498.8C346.7 484 352 466.6 352 448V401.1C376.3 383.5 395.6 359.5 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C116.9 359.3 135.1 383.1 160 400.7V448C160 466.6 165.3 484 174.5 498.8C73.07 464.7 0 368.9 0 256C0 114.6 114.6 .0003 256 .0003L256 0zM118.8 148.8L154.8 192L118.8 235.2C116.1 237.4 116 240.1 116 242.9C116 251.8 125.6 257.6 133.5 253.3L223.4 205.4C234.1 199.7 234.1 184.3 223.4 178.6L133.5 130.7C125.6 126.4 116 132.2 116 141.1C116 143.9 116.1 146.6 118.8 148.8V148.8zM288.6 178.6C277.9 184.3 277.9 199.7 288.6 205.4L378.5 253.3C386.4 257.6 396 251.8 396 242.9C396 240.1 395 237.4 393.2 235.2L357.2 192L393.2 148.8C395 146.6 396 143.9 396 141.1C396 132.2 386.4 126.4 378.5 130.7L288.6 178.6zM256 512C220.7 512 192 483.3 192 448V402.6C192 387.9 203.9 376 218.6 376H220.6C231.9 376 241.7 383.9 244.2 394.9C247 407.5 264.1 407.5 267.8 394.9C270.3 383.9 280.1 376 291.4 376H293.4C308.1 376 320 387.9 320 402.6V448C320 483.3 291.3 512 256 512V512z">
                            </path>
                        </svg>
                            <h2>Much Fun</h2>
                            <p class="text-center">Our knowledgeable staff are always on hand to help you choose the perfect
                                games for your family, and we provide a safe and welcoming environment for all our customers.
                            </p>
                        </div>
                        <div class="col-auto item col-sm-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            width="1em" height="1em" fill="currentColor"
                            class="icon">
                            <path
                                d="M256 80C256 88.84 248.8 96 240 96C195.8 96 160 60.18 160 16C160 7.164 167.2 0 176 0C220.2 0 256 35.82 256 80zM104 16C117.3 16 128 26.75 128 40C128 53.25 117.3 64 104 64H56C42.75 64 32 53.25 32 40C32 26.75 42.75 16 56 16H104zM136 88C149.3 88 160 98.75 160 112C160 125.3 149.3 136 136 136H24C10.75 136 0 125.3 0 112C0 98.75 10.75 88 24 88H136zM32 184C32 170.7 42.75 160 56 160H104C117.3 160 128 170.7 128 184C128 197.3 117.3 208 104 208H56C42.75 208 32 197.3 32 184zM272 16C272 7.164 279.2 0 288 0C332.2 0 368 35.82 368 80C368 88.84 360.8 96 352 96C307.8 96 272 60.18 272 16zM480 80C480 88.84 472.8 96 464 96C419.8 96 384 60.18 384 16C384 7.164 391.2 0 400 0C444.2 0 480 35.82 480 80zM400 224C391.2 224 384 216.8 384 208C384 163.8 419.8 128 464 128C472.8 128 480 135.2 480 144C480 188.2 444.2 224 400 224zM352 128C360.8 128 368 135.2 368 144C368 188.2 332.2 224 288 224C279.2 224 272 216.8 272 208C272 163.8 307.8 128 352 128zM176 224C167.2 224 160 216.8 160 208C160 163.8 195.8 128 240 128C248.8 128 256 135.2 256 144C256 188.2 220.2 224 176 224zM0 304C0 277.5 21.49 256 48 256H464C490.5 256 512 277.5 512 304V464C512 490.5 490.5 512 464 512H48C21.49 512 0 490.5 0 464V304zM48 464H96C96 437.5 74.51 416 48 416V464zM48 304V352C74.51 352 96 330.5 96 304H48zM464 416C437.5 416 416 437.5 416 464H464V416zM416 304C416 330.5 437.5 352 464 352V304H416zM256 320C220.7 320 192 348.7 192 384C192 419.3 220.7 448 256 448C291.3 448 320 419.3 320 384C320 348.7 291.3 320 256 320z">
                            </path>
                        </svg>
                            <h2>Wow Price</h2>
                            <p class="text-center">We offer rental options to suit every budget, so you can enjoy the latest
                                games without having to make large investment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-section">
                <h1>What We Have for You</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card"><a href="#"><img class="img-fluid" src={`${process.env.REACT_APP_SPRING_URL}/order/assets/img/Rental%202-1.png`} /></a></div>
                        </div>
                        <div class="col-md-4"><a href="#"><img class="img-fluid" src={`${process.env.REACT_APP_SPRING_URL}/order/assets/img/rent-ps4-001-01.png`}/></a></div>
                        <div class="col-md-4"><a href="#"><img class="img-fluid" src={`${process.env.REACT_APP_SPRING_URL}/order/assets/img/Rent%203-01.png`} /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

//<CarouselFront />