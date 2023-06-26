import { Card, CardImg, CardBody, CardText,
    CardTitle, Button } from 'reactstrap';
import useAdminModify from './AdminModifyContainer';
import DeleteConfirmationModal from '../ModalComponents/DeleteConfirmationModal';

const DeletePrice = ({pricedata, setUpdateStatus}) => {
    const { displayDeleteModal, showDeleteModal, hideDeleteModal, deletePrice } = useAdminModify();
    setUpdateStatus(false);
    const RenderPrice = () => {
        if(pricedata.length > 0){
            return (
                pricedata.sort((a, b) => a.days - b.days).map((details)=>{
                    return (
                        <div className='col-sm-3 col-3'>
                        <Card style={{ width: '15rem', height: '12rem', margin: 'auto'}} >
                            <CardBody>
                                <CardText>{"Days: " + details.days}</CardText>
                                <CardText>{"Price: $" + details.price}</CardText>
                                <Button color="primary" onClick={() => showDeleteModal(details)}>Delete Price</Button>
                            </CardBody>
                        </Card>
                        <DeleteConfirmationModal showModal={displayDeleteModal} confirmModal={deletePrice} hideModal={hideDeleteModal} deleteInfo={{setUpdateStatus}} />
                        </div>
                    );
                })
            )
        }
        else{
            return (
            <>
                <h2>
                    There are no prices currently.
                </h2>
            </>
            )
        }
    }
    return (
        <div className="row">
            <h3>Delete Price Packages</h3>
            <br/>
            <RenderPrice />
        </div>

    )
}

export default DeletePrice;