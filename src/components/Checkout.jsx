import { Table } from "reactstrap";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import StripeComponent from "./StripeComponents/StripeComponent";

const Checkout = () => {
  const location = useLocation();
  const [items, setItems] = useState( location.state ? location.state.items : []);

  return (
    <div class="container" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div class="row">
        <div class="col-12 col-lg-5">
          {items?.map(item => {
            return (
              <div class="card shadow mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <p class="mt-2"><strong>{item.servicename}</strong></p>
                      <p class="mt-2"><i class="fa fa-dollar-sign"></i><strong>{item.totalprice}</strong></p>
                      <div class="row">
                        <div class="col-12 col-sm-6">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
          <div class="col-12 col-lg-7">
            <div class="card shadow">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <p>Product Cost</p>
                  </div>
                  <div class="col text-end">
                    <p><i class="fa fa-dollar-sign"></i>{items.reduce((total, cartItem) => {
                      return total + cartItem.totalprice
                    }, 0)
                    }</p>
                  </div>
                </div>
                <hr style={{ background: "#323232" }} />
                <div class="row">
                  <div class="col">
                    <p>Discount</p>
                  </div>
                  <div class="col text-end">
                    <p>-&nbsp;<i class="fa fa-dollar-sign"></i>&nbsp;0</p>
                  </div>
                </div>
                <hr style={{ background: "#323232" }} />
                <div class="row">
                  <div class="col">
                    <p style={{ fontSize: "18px" }}><strong>Total</strong></p>
                  </div>
                  <div class="col text-end">
                    <p style={{ fontSize: "18px" }}><i class="fa fa-dollar-sign"></i><strong>{items.reduce((total, cartItem) => {
                      return total + cartItem.totalprice
                    }, 0) - 0
                      //discount not implemented so always at 0
                    }</strong></p>
                  </div>
                </div>
                <hr style={{ background: "#323232" }} />

                <div class="row">
                  <StripeComponent />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

  )
};

export default Checkout;
  /*
  <div>
      <h2>Selected Services</h2>
      <Table
        borderless
        hover
        responsive
        size="sm"
      >
        <thead>
          <tr>
            <th>
              Service Name
            </th>
            <th>
              Rent From
            </th>
            <th>
              Rent To
            </th>
            <th>
              Sub Total
            </th>
          </tr>
        </thead>
        <tbody>
          {items?.map(item => {
            return (
              <tr>
                <td>{item.servicename}</td>
                <td>{item.rentfrom}</td>
                <td>{item.rentto}</td>
                <td>${item.totalprice}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </Table>
      <hr />
      <h3>Total Price</h3>
      <div>
        ${items.reduce((total, cartItem) => {
          return total + cartItem.totalprice
        }, 0)
        }
      </div>
      <StripeComponent/>
    </div>
            */