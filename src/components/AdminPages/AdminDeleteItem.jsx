import { Card, CardImg, CardBody, CardText,
    CardTitle, Button } from 'reactstrap';
import useAdminModify from './AdminModifyContainer';
import DeleteConfirmationModal from '../ModalComponents/DeleteConfirmationModal';

const DeleteItem = ({itemdata, setUpdateStatus}) => {
    const { displayDeleteModal, showDeleteModal, hideDeleteModal, deleteItem } = useAdminModify();
    setUpdateStatus(false);
    const RenderPrice = () => {
        if(Object.keys(itemdata).length > 0){
            return (
                itemdata.sort((b, a) => a.id - b.id).map((details)=>{
                    return (
                        <div className='col-sm-3 col-3'>
                        <Card style={{ width: '15rem', height: '12rem', margin: 'auto'}} >
                            <CardBody>
                                <CardText>{"Itemname: " + details.itemname}</CardText>
                                <CardText>{"Price: $" + details.price}</CardText>
                                <Button color="primary" onClick={() => showDeleteModal(details)}>Delete Item</Button>
                            </CardBody>
                        </Card>
                        <DeleteConfirmationModal showModal={displayDeleteModal} confirmModal={deleteItem} hideModal={hideDeleteModal} deleteInfo={{setUpdateStatus}} />
                        </div>
                    );
                })
            )
        }
        else{
            return (
            <>
                <h2>
                    There are no items currently.
                </h2>
            </>
            )
        }
    }
    return (
        <div className="row">
            <h3>Delete Item</h3>
            <br/>
            <RenderPrice />
        </div>

    )
}

export default DeleteItem;