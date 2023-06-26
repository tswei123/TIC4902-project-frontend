import {useState} from 'react';
import axios from 'axios';

const useModifyShipment = () => {
    const [shipmentModal, setShipmentModal] = useState(false);
    const [orderNumber, setOrderNumber] = useState({});
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(false);

    const showShipmentModal = (ordernumber) => {
        setShipmentModal(true);
        setOrderNumber(ordernumber);
      };

    const hideShipmentModal = () => {
        setShipmentModal(false);
      };

    const fetchTransactions = async () => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getServiceShipment`)
            setShipments(res.data);
            setLoading(true);
        }
        catch (error) {
            console.log(error)
        }
    }

    const completeShipment = async() => {
        try{
            let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/order/changeShipmentStatus?ordernumber=${orderNumber}`);
            if(res.status === 200){
                const newShipment = shipments.map(shipment => {
                    if(shipment.ordernumber === orderNumber){
                        return {...shipment, shipmentstatus: "item delivered"}
                    }
                    return shipment;
                })
                setShipments(newShipment);
            }
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setShipmentModal(false);
        }

    }

    return {completeShipment, hideShipmentModal, showShipmentModal, shipmentModal, fetchTransactions, shipments, loading, orderNumber};
};

export default useModifyShipment;