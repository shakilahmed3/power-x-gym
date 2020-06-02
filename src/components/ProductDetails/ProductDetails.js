import React, { useState, useEffect } from 'react';
import './ProductDetails.scss';
import { useParams } from 'react-router-dom';

import Psycho from '../../Images/victor-freitas-546919-unsplash.png';
// import Self from '../../Images/baylee-gramling-5m4Z14SDL80-unsplash.jpg';
// import Advance from '../../Images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
// import Cardio from '../../Images/alora-griffiths-TuzrzArccvc-unsplash.jpg';
// import Strength from '../../Images/john-fornander-FIu48iuo_4g-unsplash.jpg';
// import Psycho2 from '../../Images/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import check from '../../Images/checkmark-square-2.png';


const ProductDetails = () => {

    const { category } = useParams();


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 trainingImage">
                    <img className="titileImage" src={Psycho} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error fugiat eos eveniet dolores numquam, inventore quam vero, perferendis, mollitia quibusdam. Aliquid expedita quisquam assumenda qui tenetur at voluptate tempore.Adipisci, quaerat nam alias quia eveniet, ad consequatur possimus accusamus eius eos corporis impedit eligendi mollitia facilis nihil delectus beatae dignissimos. Voluptatibus, eos numquam atque saepe aliquam cum iste ut?</p>

                    <h6><img src={check} alt="" /> Having Slimmer</h6>
                    <h6><img src={check} alt="" /> Getting Stronger</h6>
                    <h6><img src={check} alt="" /> Increased Metabolism</h6>
                    <h6><img src={check} alt="" /> Increased Muscular Endurance</h6>
                    <h6><img src={check} alt="" /> Maximum results in Less Time</h6>
                    <h6><img src={check} alt="" /> Firm Hips and Tummy</h6>

                </div>
                <div className="col-md-6">
                    <h3><span className="text-warning">CLASS</span> SCHEDULE</h3>

                    <div className="d-flex justify-content-between card-back">
                        <div className="card card1">
                            <h3>Monday</h3>
                            <h5 className="text-warning">8:00 AM - 9:00AM</h5>
                        </div>
                        <div className="card card1">
                            <h3>Tuesday</h3>
                            <h5 className="text-warning">10:00 AM - 11:00AM</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between card-back">
                        <div className="card1 card">
                            <h3>Wednesday</h3>
                            <h5 className="text-warning">7:00 AM - 8:00 AM</h5>
                        </div>
                        <div className="card1 card">
                            <h3>Thursday</h3>
                            <h5 className="text-warning">5:00 PM - 6:00 PM</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between card-back">
                        <div className="card1 card">
                            <h3>Friday</h3>
                            <h5 className="text-warning">6:00 AM - 7:00 AM</h5>
                        </div>
                        <div className="card1 card">
                            <h3>Saturday</h3>
                            <h5 className="text-warning">7:00 PM - 8:00 PM</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;