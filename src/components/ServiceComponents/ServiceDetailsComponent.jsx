import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardText,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';    
import { useParams } from "react-router-dom";
import axios from 'axios';
import ServiceForm from './ServiceForm.jsx';


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const ServiceDetail = () => {
    const [servicedata, setServiceData] = useState(null);
    const { serviceId } = useParams();
    const [loading, setLoading] = useState(false);


    let componentMounted = true;

    useEffect(() => {
        const getData = async () => {
            await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualService?id=${serviceId}`)
            .then(response => {
                if (componentMounted) {
                    setServiceData(response.data);
                    setLoading(true);
                }
                return () => {
                    componentMounted = false;
                }
            })
        }
        getData();
    }, []);

    


    const RenderService = () => {
        return (
            <div class="col">
                <div class="card">
                    <img class="card-img-top w-100 d-block" src={`${process.env.REACT_APP_SPRING_URL}/order` + servicedata.imagepath} alt={servicedata.name} />
                    <div class="card-body">
                        <h4 class="card-title">{servicedata.servicename}</h4><p class="card-text">{servicedata.servicedesc}</p>
                    </div>
                    <div className="">
                        {servicedata.prices?.sort((a, b) => a.days - b.days).map((individualPrice) => {
                            return (
                                <div><i class="icon ion-ios-pricetags" style={{ fontSize: "16px;" }}></i><span class="pricetag">${individualPrice.price} / {individualPrice.days} days</span></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        loading ?
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/service">Services</Link></BreadcrumbItem>
                            <BreadcrumbItem active aria-label="bc-service-name" >{servicedata.servicename}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div className="row">
                        <div className="col-sm col-md-5">
                            <RenderService/>
                        </div>
                        <div className="col-sm col-md-7">
                            <ServiceForm servicedata = {servicedata} setServiceData={setServiceData}/>
                        </div>
                    </div>

                </div>
        </>
        :
        <>
            <h2>Loading...</h2>
        </>
    )

}

export default ServiceDetail;