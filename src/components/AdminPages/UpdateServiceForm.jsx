import useAdminForm from './AdminFormContainer';
import useAdminModify from './AdminModifyContainer';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useEffect, useRef } from 'react';

const UpdateServiceForm = ({servicedata}) => {
    const { inputs, imagePreview, message, status, loading, handleChange, handlePriceChange, handlePriceKeyPress, handleImageChange, handleNumberKeyPress, loadInputs, handleUpdateServiceSubmit } = useAdminForm();
    const inputRef = useRef();
    function inputUpload() {
        inputRef.current.click();
    }
    useEffect(() => {
        loadInputs(servicedata);
    }, []);
    return (
        <div class="container">
            <h3>Modify Service</h3>
            <Input innerRef={inputRef} type="file" name="imagepath" accept="image/*" id="imagepath" onChange={handleImageChange} style={{ display: 'none' }} />
            <br />
            {imagePreview && (
                <img src={`${process.env.REACT_APP_SPRING_URL}/order` + imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} /> //Change this into CSS file
            )}
            <br />
            <Label><Button onClick={inputUpload}>Upload Image</Button></Label>
            <Form onSubmit={handleUpdateServiceSubmit}>
                <FormGroup>
                    <Label>Service Name</Label>
                    <Input required type="text" name="servicename" id="servicename" placeholder="Enter Service Name" value={inputs?.servicename || ""} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Service Description</Label>
                    <Input required type="text" name="servicedesc" id="servicedesc" placeholder="Enter Service Description" value={inputs?.servicedesc || ""} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Delivery Price</Label>
                    <Input required type="text" name="deliveryprice" id="deliveryprice" placeholder="Enter Delivery Price" min="0" value={inputs?.deliveryprice || ""} onChange={handlePriceChange} onKeyPress={handlePriceKeyPress} />
                </FormGroup>
                <FormGroup>
                    <Label>Return Price</Label>
                    <Input required type="text" name="returnprice" id="returnprice" placeholder="Enter Return Price" min="0" value={inputs?.returnprice || ""} onChange={handlePriceChange} onKeyPress={handlePriceKeyPress} />
                </FormGroup>
                <FormGroup>
                    <Label>Deposit Price</Label>
                    <Input required type="text" name="depositprice" id="depositprice" placeholder="Enter Deposit Price" min="0" value={inputs?.depositprice || ""} onChange={handlePriceChange} onKeyPress={handlePriceKeyPress} />
                </FormGroup>
                <FormGroup>
                    <Label>Quantity</Label>
                    <Input required type="text" name="quantity" id="quantity" placeholder="Enter Quantity" min="0" value={inputs?.quantity || ""} onChange={handleChange} onKeyPress={handleNumberKeyPress} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <hr />
            <h3>{message}</h3>
            <br/>
        </div>
    )
};

export default UpdateServiceForm;