import React from 'react';
import './Workout.scss';

const Workout = () => {
    return (
        <div className="container workOut d-flex align-items-center">
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body img-1">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body img-2">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body img-2">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Workout;