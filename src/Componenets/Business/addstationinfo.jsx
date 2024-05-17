import React from 'react';
import './styles/addstationinfo.css';

const AddStationInfoPage = () => {
    return (
        <div className="info-page">
            <h1>How to Add a Charging Station on ChargeMate</h1>
            <section>
                <h2>Step-by-Step Instructions</h2>
                <ol>
                    <li>Log in to your ChargeMate vendor account.</li>
                    <li>Navigate to the Vendor Dashboard.</li>
                    <li>Click on the "Add Station" button to open the form.</li>
                    <li>Fill in the form with the necessary details of your charging station:
                        <ul>
                            <li>Station Name</li>
                            <li>Location</li>
                            <li>Latitude and Longitude</li>
                            <li>Rate (Rs/hr)</li>
                            <li>Charger Type (e.g., CCS, CHAdeMO)</li>
                            <li>Power (kW)</li>
                        </ul>
                    </li>
                    <li>Click the "Add Station" button to submit the form.</li>
                    <li>Your new charging station will be added to the ChargeMate network.</li>
                </ol>
            </section>
            <section>
                <h2>Example Form</h2>
                <p>Below is an example form that you would fill out to add a new charging station:</p>
                <form className="add-station-form">
                    <label>

                        <input type="text" placeholder="Enter station name" required />
                    </label>
                    <label>

                        <input type="text" placeholder="Enter location" required />
                    </label>
                    <label>
                        
                        <input type="number" placeholder="Enter latitude" step="any" required />
                    </label>
                    <label>
       
                        <input type="number" placeholder="Enter longitude" step="any" required />
                    </label>
                    <label>

                        <input type="number" placeholder="Enter rate" required />
                    </label>
                    <label>
      
                        <input type="text" placeholder="Enter charger type" required />
                    </label>
                    <label>

                        <input type="number" placeholder="Enter power(kW)" required />
                    </label>
                    <button type="submit">Add Station</button>
                </form>
            </section>
            <br />
            <br />
            <p>Join our network and help create a seamless EV charging experience for users.Add your charging station to ChargeMate. Ensure all details are accurate to provide the best service to our users. </p>
        </div>
    );
};

export default AddStationInfoPage;
