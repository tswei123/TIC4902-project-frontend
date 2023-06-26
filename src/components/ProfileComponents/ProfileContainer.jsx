import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../../redux/reducers/profileSlice.js'
import axios from "axios";


const useProfile = () => {
    const dispatch = useDispatch();
    //Uses username and password for user login
    //Possible to remove array since it is always size of 1?
    const getProfile = async (userEmail) => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_SPRING_URL}/auth/getIndividualUser?email=${userEmail}`);
            if (res.status === 200) {
                dispatch(setProfile({
                    email: res.data[0].email,
                    username: res.data[0].username,
                    address: res.data[0].address,
                    contact: res.data[0].contact
                }))
            }
        } catch (error) {
            alert(error.message);
        } finally {

        }
    }

    const handleUpdate = (profile) => {
        const email = profile.email;
        const username = profile.username;
        const address = profile.address;
        const contact = profile.contact;
        try{
            let res = axios.post(`${process.env.REACT_APP_SPRING_URL}/auth/updateParticular?email=${email}&username=${username}&address=${address}&contact=${contact}`);
            if(res.status === 200){
                //setDisplayConfirmationModal(false);
                console.log(res.data)
            }
        } catch(error) {
            alert(error.message);
        }
    }

    return { getProfile, handleUpdate };
};
export default useProfile;