import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import UpdateProfile from '../ModalComponents/UpdateProfileModal.jsx';

const RenderProfile = ({ profileInfo, showUpdateModal, hideUpdateModal, handleUpdate, displayConfirmationModal }) => {


    return (
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-6 col-md-12">
                        <div class="card user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25">
                                        </div>
                                        <h2>Welcome!</h2>
                                        <h6 class="f-w-600">{profileInfo?.username}</h6>
                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">{profileInfo?.email}</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <h6 class="text-muted f-w-400">{profileInfo?.contact ? profileInfo?.contact : <Link onClick={() => showUpdateModal(profileInfo)}>Set Now</Link>}</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="m-b-10 f-w-600">Address</p>
                                                <h6 class="text-muted f-w-400">{profileInfo?.address ? profileInfo?.address : <Link onClick={() => showUpdateModal(profileInfo)}>Set Now</Link>}</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <Link onClick={() => showUpdateModal(profileInfo)}><Button class="f-w-400 row-sm-4 justify-content-end">Update Profile</Button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateProfile showModal={displayConfirmationModal} confirmModal={handleUpdate} hideModal={hideUpdateModal} profile={profileInfo} />
        </div>
    );
}

export default RenderProfile;