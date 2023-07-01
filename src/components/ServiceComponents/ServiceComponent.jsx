import React, {useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardText,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactGA from "react-ga4";

//Filter for future search implementations
const Service = () => {
    const [servicedata, setServiceData] = useState([]);
    //const [filter, setFilter] = useState(servicedata);
    let componentMounted = true;


    useEffect(() => {
        const getService = async() => {
            const response = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getService`);
            if(componentMounted && response){
                setServiceData(await response.data);
            }
            return () => {
                componentMounted = false;
            }
        }

        getService();
    }, []);
    
    const handleClick = (service) => {
        ReactGA.event({
            category: service.servicename,
            action: "User clicked on service",
            label: service.servicedesc, 
          });
    } 

    const RenderService = () => {
        return (
            servicedata.map((service) => {
                if (service.prices.length !== 0) {    //remove those with prices not implemented
                    return (
                        <div class="col-md-6 col-sm-3" onClick={() => handleClick(service)}>
                            <Link aria-label={service.id} to={`/service/${service.id}`}>
                                <div class="card">
                                <img class="card-img-top w-100 d-block" src={`${process.env.REACT_APP_SPRING_URL}/order` + service.imagepath} alt={service.name} />
                                <div class="card-body">
                                    <h4 class="card-title">{service.servicename}</h4><p class="card-text">{service.servicedesc}</p>
                                </div>
                                    <div className="">
                                        {service.prices?.sort((a, b) => a.days - b.days).map((individualPrice) => {
                                            return (
                                                <div><i class="icon ion-ios-pricetags" style={{ fontSize: "16px;" }}></i><span class="pricetag">${individualPrice.price} / {individualPrice.days} days</span></div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                }
            })
        )

    }
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Services</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Services Provided</h3>
                    <hr />
                </div>
            </div>
            <div class="card-group text-center row">
                <RenderService />    
            </div>
            <hr/>
        </div>
    );
}
export default Service;