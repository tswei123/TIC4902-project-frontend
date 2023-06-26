import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from "../ModalComponents/DeleteConfirmationModal";
import useAdminModify from './AdminModifyContainer';
import { useLocation } from 'react-router-dom';
const ViewService = () => {
    const { services, loading, fetchServices, displayDeleteModal, showDeleteModal, hideDeleteModal, deleteService  } = useAdminModify();
    useEffect(() => {
        fetchServices();
    }, [loading]);
    return (
        loading?
        <div className="container">
            <Table striped>
                <thead>
                    <tr>
                        <th>Service ID</th>
                        <th>Service Name</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services?.map(service => {
                        return (
                            <tr>
                                <th scope="row">{service.id}</th>
                                <td>{service.servicename}</td>
                                <td>{service.quantity}</td>
                                <td class="d-flex justify-content-around">
                                    <Link to={`/view_service/${service.id}`}>View</Link>
                                    <Link onClick={() => showDeleteModal(service)}>Delete</Link>
                                </td>
                                <DeleteConfirmationModal showModal={displayDeleteModal} confirmModal={deleteService} hideModal={hideDeleteModal} deleteInfo={service.id} />
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </div>
        :
        <div>
        Loading...
        </div>
    );
}

export default ViewService;

//<ModifyServiceModal showModal={displayModifyModal} confirmModal={deleteService} hideModal={hideModifyModal} service={service} />