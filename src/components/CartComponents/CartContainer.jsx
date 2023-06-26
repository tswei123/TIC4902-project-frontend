import {useState, useEffect} from 'react';
import { addCartItem, setCartItem, removeCartItem, cartitem } from '../../redux/reducers/cartSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const useCart = () => {
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [selectedService, setSelectedService] = useState({});
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    let componentMounted = false;

    const getCart = async (useremail) => {
        if (!componentMounted) {
            try {
                let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualServiceCart?email=${useremail}`);
                if (res.status === 200) {
                    dispatch(setCartItem({
                        allCartItem: res.data,
                        totalItemCount: res.data.length
                    }
                    ));
                }
            }
            catch (error) {
                console.log(error);
                alert(error.message);
            }
            finally {
                setLoading(true);
                return () => {
                    componentMounted = true;
                }
            }
        }
    } 


    const showDeleteModal = (details) => {
        setDisplayConfirmationModal(true);
        setSelectedService(details);
      };

    const hideDeleteModal = () => {
        setDisplayConfirmationModal(false);
        setSelectedService({});
      };

    const addItem = (cartitems) => {
        dispatch(addCartItem(cartitems));
    }

    const removeItem = async(details) => {
        try{
            console.log(details);
            let res = await axios.delete(`${process.env.REACT_APP_SPRING_URL}/order/deleteServiceCart?id=${selectedService.id}&ordernumber=${selectedService.ordernumber}`);
            if (res.status === 200){
                dispatch(removeCartItem({
                    ordernumber: selectedService.ordernumber
                })
                );
            }
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setDisplayConfirmationModal(false);
        }

    }

    return {displayConfirmationModal, loading, addItem, removeItem, hideDeleteModal, showDeleteModal, getCart};
};

export default useCart