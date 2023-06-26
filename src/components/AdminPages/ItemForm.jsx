import {useState, useEffect} from 'react';
import axios from "axios";
import useAdminForm from './AdminFormContainer';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ItemForm = () => {
  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getService`)
    .then(response => {
        if(componentMounted){
            setServices(response.data);
            setLoading(true);
        }
        return () => {
            componentMounted = false;
        }
    })

}, [loading]);
const { inputs, message, handleChange, handlePriceChange, handlePriceKeyPress, handleItemSubmit } = useAdminForm();

  return (
    loading ?
    <div className="container">
      {/*Add better CSS for message*/}
      <Form onSubmit={handleItemSubmit}>
        <h2>Add Item</h2>
        <FormGroup>
          <Label for="exampleSelect">Service ID</Label>
          <Input type="select" name="serviceid" id="serviceid" value={inputs?.serviceid || ""} onChange={handleChange}>
           <option disabled={true} value="">Select service id</option>
            {services?.map(service => <option key={service.id} value={service.id}>{service.id} - {service.servicename}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Item Name</Label>
          <Input type="text" name="itemname" id="itemname" placeholder="Enter Item Name" value={inputs?.itemname} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input type="text" name="price" id="price" placeholder="Enter Price" min="0" value={inputs?.price} onChange={handlePriceChange} onKeyPress={handlePriceKeyPress}/>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <hr/>
      <h3>{message}</h3> 
    </div>
    :
    <div className="container">
      Loading...
    </div>
  )
};

export default ItemForm;