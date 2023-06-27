import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAdminForm = () => {
    const [inputs, setInputs] = useState({ });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const loadInputs = (loadedData) => {
      if(!(Object.keys(loadedData).length === 0)){
        setInputs({
          servicename: loadedData?.servicename,
          servicedesc: loadedData?.servicedesc,
          deliveryprice: loadedData?.deliveryprice,
          returnprice: loadedData?.returnprice,
          depositprice: loadedData?.depositprice,
          quantity: loadedData?.quantity,
          id: loadedData?.id
        });
        setImage({name: loadedData?.imagepath.split("img/")[1]});
        setImagePreview(loadedData?.imagepath);
      }
      setLoading(true);
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
  
    const handlePriceChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const regex = /^\d*\.?\d{0,2}$/; // Only allow numbers and up to 2 decimal places
  
      if (value === '' || regex.test(value)) {
        setInputs(values => ({ ...values, [name]: value }))
      }
    };
  
    const handlePriceKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const regex = /^\d*\.?\d{0,2}$/; // Only allow numbers and up to 2 decimal places
    
      if (!regex.test(keyValue)) {
        event.preventDefault();
      }
    };
  
    const handleNumberKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const regex = /^[0-9\b]+$/; // Only allow numeric keys and backspace
  
      if (!regex.test(keyValue)) {
        event.preventDefault();
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
      } else {
        setImagePreview(null);
      }
      setImage(e.target.files[0]);
    };


  
  const handleImageFile = () => {
    const formData = new FormData();
    formData.append('file', image);
    fetch('${process.env.REACT_APP_SPRING_URL}/order/addImage', {
      method: 'post',
      body: formData
    }).then(res => {
      if (res.ok) {
        alert("File uploaded successfully.")
      }
    });

  }

  const handleServiceSubmit = async (event) => {
    event.preventDefault();
    const servicename = inputs.servicename;
    const servicedesc = inputs.servicedesc;
    const deliveryprice = inputs.deliveryprice;
    const returnprice = inputs.returnprice;
    const depositprice = inputs.depositprice;
    const quantity = inputs.quantity;
    const imagepath = "/assets/img/" + image.name;

    const service = { servicename, servicedesc, deliveryprice, returnprice, depositprice, quantity, imagepath };
    try {
      let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/order/addService`, service)
      if (res.status === 200) {
        setMessage(servicename + " successfully added")
      }
    } catch (error) {
      setMessage(error.message)
      alert(error.message);
    } finally {
      handleImageFile()
    }
  }

    const handlePriceSubmit = async(event) => {
        event.preventDefault();
        const serviceid = inputs.serviceid;
        const days = inputs.days;
        const price = inputs.price;

        const prices = { serviceid, days, price };
        try {
            let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/order/addPrice`, prices)
            if (res.status === 200) {
                setMessage("Successfully added to service id " + serviceid)
            }
        } catch (error) {
            setMessage(error.message)
            alert(error.message);
        }
    }

      const handleItemSubmit = async(event) => {
        event.preventDefault();
        const itemname = inputs.itemname;
        const serviceid = inputs.serviceid;
        const price = inputs.price;
    
        const item = {serviceid, itemname, price};
        try {
            let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/order/addItem`, item)
            if (res.status === 200) {
                setMessage(itemname + " successfully added to service ID " + serviceid)
            }
        } catch (error) {
            setMessage(error.message)
            alert(error.message);
        }
      }

      const handleUpdateServiceSubmit = async (event) => {
        event.preventDefault();
        const servicename = inputs.servicename;
        const servicedesc = inputs.servicedesc;
        const deliveryprice = inputs.deliveryprice;
        const returnprice = inputs.returnprice;
        const depositprice = inputs.depositprice;
        const quantity = inputs.quantity;
        const imagepath = "/assets/img/" + image.name;
        const service = { servicename, servicedesc, deliveryprice, returnprice, depositprice, quantity, imagepath };
        try {
            let res = await axios.put(`${process.env.REACT_APP_SPRING_URL}/order/updateService/${inputs.id}`, service)
            if (res.status === 200) {
                setMessage(servicename + " successfully modified")
            }
        } catch (error) {
            setMessage(error.message)
            alert(error.message);
        } finally {

        }
    }

  
    return { inputs, image, imagePreview, message, loading, setInputs, handleChange, handlePriceChange, handlePriceKeyPress, handleImageChange, handleNumberKeyPress, handleImageFile, 
        handleServiceSubmit, handlePriceSubmit, handleItemSubmit, handleUpdateServiceSubmit, loadInputs }
  
  };
  
  export default useAdminForm;
