import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import axios from "axios";
import RenderTransaction from './TransasctionView';
import { email } from '../redux/reducers/profileSlice'

const Transactions = () => {
    const [loading, setLoading] = useState(false);
    const [transactionInfo, setTransactionInfo] = useState([]);
    const userEmail = useSelector(email);
    useEffect(() => {
        const fetchTransactions = async () => {
            try{
                let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualServiceShipment?email=${userEmail}`)
                setTransactionInfo(res.data);
                setLoading(true);
            }
            catch (error){
                console.log(error)
            }
        }
        fetchTransactions();
    }, [loading]);
    

    return (
        loading?
        <div className="container">
            <RenderTransaction transactionInfo={transactionInfo}/>
        </div>
        :
        <>Loading...</>
    )
}

export default Transactions;

//