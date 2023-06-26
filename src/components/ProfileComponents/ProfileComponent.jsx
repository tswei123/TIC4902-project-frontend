import { useSelector, useDispatch } from 'react-redux'
import React, {useState, useEffect} from 'react';
import RenderProfile from './Profile'
import { profile } from '../../redux/reducers/profileSlice'
import { setProfile } from '../../redux/reducers/profileSlice.js'
import axios from "axios";

const Profile = () => {
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const profileInfo = useSelector(profile);
    const dispatch = useDispatch();

    const showUpdateModal = () => {
        setDisplayConfirmationModal(true);
    };

    const hideUpdateModal = () => {
        setDisplayConfirmationModal(false);
    };

    const handleUpdate = async (profile) => {
        const email = profile.email;
        const username = profile.username;
        const address = profile.address;
        const contact = profile.contact;
        try{
            let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/auth/updateParticular?email=${email}&username=${username}&address=${address}&contact=${contact}`)
            if(res.status === 200){
                setDisplayConfirmationModal(false);
                dispatch(setProfile(profile));
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <RenderProfile profileInfo={profileInfo} showUpdateModal={showUpdateModal} hideUpdateModal={hideUpdateModal} handleUpdate={handleUpdate} displayConfirmationModal={displayConfirmationModal}/>   
        </div> 
    )
}

export default Profile;

