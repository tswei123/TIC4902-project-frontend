import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const useAdminModify = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [servicedata, setServiceData] = useState({});
    const { serviceId } = useParams();
    const [selectedService, setSelectedService] = useState({});
    

  const showDeleteModal = (details) => {
    setDisplayDeleteModal(true);
    console.log(details)
    setSelectedService(details);
  };

const hideDeleteModal = () => {
    setDisplayDeleteModal(false);
    setSelectedService({});
  };
    

  
  const getData = async () => {
    try{
        let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualService?id=${serviceId}`)
        if (res.status === 200) {
            setServiceData(res.data);
            setLoading(true);
        }
    }
    catch(error){
        alert(error)
    }
}

    const fetchServices = async () => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getService`)
            setServices(res.data);
            setLoading(true);
        }
        catch (error) {
            alert(error)
        }
    }
    
      const deleteService = async() => {
        try{
            let res = await axios.delete(`${process.env.REACT_APP_SPRING_URL}/order/deleteService/${selectedService.id}`);
            console.log(res);
            setLoading(false);
        }
        catch(error) {
            alert(error);
        }
        finally {
            setDisplayDeleteModal(false);
        }
    }

    const deletePrice = async(props) => {
        try{
            let res = await axios.delete(`${process.env.REACT_APP_SPRING_URL}/order/deletePrice/${selectedService.id}`);
            props.setUpdateStatus(true);
        }
        catch(error) {
            alert(error);
        }
        finally {
            setDisplayDeleteModal(false);
        }
    }

    const deleteItem = async(props) => {
        try{
            let res = await axios.delete(`${process.env.REACT_APP_SPRING_URL}/order/deleteItem/${selectedService.id}`);
            props.setUpdateStatus(true);
        }
        catch(error) {
            alert(error);
        }
        finally {
            setDisplayDeleteModal(false);
        }
    }

    return {loading, services, displayDeleteModal, servicedata, selectedService, showDeleteModal, hideDeleteModal, fetchServices, deleteService, deletePrice, deleteItem, getData}
}

export default useAdminModify;