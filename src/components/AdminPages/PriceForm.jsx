import {useState, useEffect} from 'react';
import axios from "axios";
import useAdminForm from './AdminFormContainer';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PriceForm = () => {
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
  const { inputs, message, handleChange, handlePriceChange, handlePriceKeyPress, handleNumberKeyPress, handlePriceSubmit } = useAdminForm();

  return (
    loading ?
      <div className="container">
        <Form onSubmit={handlePriceSubmit}>
          <h2>Add Price</h2>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="serviceid" id="serviceid" value={inputs?.serviceid || ""} onChange={handleChange}>
              <option disabled={true} value="">Select service id</option>
              {services?.map(service => <option key={service.id} value={service.id}>{service.id} - {service.servicename}</option>)}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Number Of Days</Label>
            <Input required type="text" name="days" id="days" placeholder="Enter Number Of Days" min="0" value={inputs?.days} onChange={handleChange} onKeyPress={handleNumberKeyPress} />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input required type="text" name="price" id="price" placeholder="Enter Price" min="0" value={inputs?.price} onChange={handlePriceChange} onKeyPress={handlePriceKeyPress} />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
        <hr />
        <h3>{message}</h3>
      </div>
      :
      <div className="container">
        Loading...
      </div>
  )
};

export default PriceForm;