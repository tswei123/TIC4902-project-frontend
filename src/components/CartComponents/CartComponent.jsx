import { Card, CardImg, CardBody, CardText,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartitem } from '../../redux/reducers/cartSlice'
import { profile } from '../../redux/reducers/profileSlice'
import CartDeleteConfirmation from "../ModalComponents/CartDeleteConfirmationModal";
import useCart from './CartContainer.jsx';

const Cart = () => {
    const { displayConfirmationModal, loading, removeItem, showDeleteModal, hideDeleteModal } = useCart();
    const cartItems = useSelector(cartitem); 
    const profileInfo = useSelector(profile);
    const RenderCart = () => {
        if(cartItems.length > 0){
            return (
                cartItems.map((details)=>{
                    return (
                        <tr aria-label={details.id}>
                          <th scope="row" class="border-0">
                            <div class="p-2">
                              <div class="ml-3 d-inline-block align-middle">
                                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{details.servicename}</a></h5><span
                                  class="text-muted font-weight-normal font-italic d-block">{details.servicedesc}</span>
                              </div>
                            </div>
                          </th>
                          <td class="border-0 align-middle"><strong>${details.totalprice}</strong></td>
                          <td class="border-0 align-middle"><strong>{details.rentfrom}</strong></td>
                          <td class="border-0 align-middle"><strong>{details.rentto}</strong></td>
                          <td class="border-0 align-middle"><Link onClick={() => showDeleteModal(details)} class="text-dark"><i
                                class="fa fa-trash"></i></Link></td>
                                <CartDeleteConfirmation showModal={displayConfirmationModal} confirmModal={removeItem} hideModal={hideDeleteModal} />
                        </tr>
                    );
                })
            )
        }
    }

    const RenderCheckoutButton = () => {
        if (profileInfo.address && profileInfo.contact && cartItems.length >= 1) {
            return (
                <Link class="btn btn-dark rounded-pill py-2 btn-block" data-testid="checkout-link" to="/checkout" state={{ items: cartItems, profileInfo: profileInfo }}>
                        Procceed to checkout
                </Link>
            )
        }
        else if (cartItems.length < 1) {
            return (
                <>
                    <a class="btn btn-dark rounded-pill py-2 btn-block disabled" aria-label="checkout-btn" disabled={true}>
                        Proceed to checkout
                    </a>
                    <br />
                    <span>You cart is empty</span>
                </>
            )
        }
        else {
            return (
                <>
                    <a class="btn btn-dark rounded-pill py-2 btn-block disabled" aria-label="checkout-btn" disabled={true}>
                        Proceed to checkout
                    </a>
                    {!profileInfo.address && (
                        <>
                        <br/>
                            Shipping Address required
                        </>
                    )}
                    {!profileInfo.contact && (
                        <>
                        <br/>
                            Contact Number required
                        </>
                    )}
                </>
            )

        }
    }
    return (
        !loading ?
            <div>
                <div class="container" style={{ marginTop: "30px" }}>
                    <div class="shopping-cart">
                        <div class="px-4 px-lg-0">

                            <div class="pb-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" class="border-0 bg-light">
                                                                <div class="p-2 px-3 text-uppercase">Service</div>
                                                            </th>
                                                            <th scope="col" class="border-0 bg-light">
                                                                <div class="py-2 text-uppercase">Price</div>
                                                            </th>
                                                            <th scope="col" class="border-0 bg-light">
                                                                <div class="py-2 text-uppercase">Rent From</div>
                                                            </th>
                                                            <th scope="col" class="border-0 bg-light">
                                                                <div class="py-2 text-uppercase">Rent To</div>
                                                            </th>
                                                            <th scope="col" class="border-0 bg-light">
                                                                <div class="py-2 text-uppercase">Remove</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <RenderCart />
                                                    </tbody>
                                                </table>
                                                {cartItems.length < 1 && (
                                                        <h2 class="text-center">
                                                            Cart is empty
                                                        </h2>
                                                    )}
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row py-5 p-4 bg-white rounded shadow-sm">
                                        <div class="col-lg-6">
                                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller
                                            </div>
                                            <div class="p-4">
                                                <p class="font-italic mb-4">If you have some information for the seller you can leave them in the
                                                    box below</p>
                                                <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                            <div class="p-4">
                                                <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have
                                                    entered.</p>
                                                <ul class="list-unstyled mb-4">
                                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order
                                                        Total </strong><strong>$
                                                            {cartItems.reduce((total, cartItem) => {
                                                            return total + cartItem.totalprice
                                                        }, 0)
                                                        }</strong></li>
                                                </ul>
                                                <RenderCheckoutButton />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        /*

              ///////////////////
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cart</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Cart Items</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCart />
                </div>
                <hr />
                <h3>Total Price</h3>
                <div>$ 
                    {cartItems.reduce((total, cartItem) => {
                        return total + cartItem.totalprice
                    }, 0)
                    }
                </div>
                <RenderCheckoutButton/>
                <hr/>
            </div>*/
            :
            <div>
                Loading...
            </div>
    )
}

export default Cart;