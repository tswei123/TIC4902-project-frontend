import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import ShipmentCompletion from './CompleteShipmentModal';
import { Link } from 'react-router-dom';
import useModifyShipment from './ShipmentContainer';

const ViewShipment = () => {
    const { completeShipment, hideShipmentModal, showShipmentModal, shipmentModal, shipments, fetchTransactions, loading, orderNumber } = useModifyShipment();

    useEffect(() => {
        fetchTransactions();
    }, [loading]);
    
    return (
        loading?
        <div className="container">
            <Table striped>
            <thead>
                <tr>
                    <th>
                        Order Number
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Customer Email
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Phone Number
                    </th>
                    <th>
                        Rent From
                    </th>
                    <th>
                        Rent To
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>
                <tbody>
                    {shipments?.map(shipment => {
                        return (
                            <tr>
                                <th>{shipment.ordernumber}</th>
                                <td>{shipment.username}</td>
                                <td>{shipment.email}</td>
                                <td>{shipment.address}</td>
                                <td>{shipment.contactnumber}</td>
                                <td>{shipment.rentfrom}</td>
                                <td>{shipment.rentto}</td>
                                <td>
                                    {
                                        (shipment.shipmentstatus === 'pending shipment')
                                        ?
                                        <Link onClick={() => showShipmentModal(shipment.ordernumber)}>{shipment.shipmentstatus}</Link>
                                        :
                                        <>{shipment.shipmentstatus}</>
                                    }
                                </td>
                                <ShipmentCompletion showModal={shipmentModal} confirmModal={completeShipment} hideModal={hideShipmentModal} orderNumber={orderNumber} />
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </div>
        :
        <>Loading...</>
    );
}

export default ViewShipment;