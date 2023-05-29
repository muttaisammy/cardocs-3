import React, { useState, useEffect } from "react";
import API from '../utils/lic'
//import API from "../utils/lic";
import { Link } from "react-router-dom";


function Saved() {

  const [saved, setSaved] = useState([]);

  // get all the lics from the database and set them in the array 
  useEffect(() => {
    loadLics()
  }, [saved])

  function loadLics() {
    API.loadSavedLic()
      .then(res => {
        setSaved(res.data);
      })
      .catch(err => console.log(err))
  }

  function deleteLic(id) {
    API.deleteLic(id)
      .then(res => res)
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h4 class="col-md-6 col-md-offset-3" style={{ color: 'white' }}>Saved LIC</h4>
      {saved.length ? (
        saved.map(lic => (
          <div class='row' key={lic._id}>
            {/* <div className="mb-4 border  p-3 rounded shadow "> */}
            <div class="col-md-6 col-md-offset-3">

              <button onClick={() => deleteLic(lic._id)}> DELETE </button>
              <link to={"/api/lic" + lic.id} />
              <strong className="m-4" style={{ color: 'white' }}>
               LIC: {lic.lic} 
              </strong>
              <p className="mt-3" style={{ color: 'white' }}>
                MAKE: {lic.make}
              </p>
              <p className="mt-3" style={{ color: 'white' }} >
                MODEL: {lic.model}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                MODEL YEAR: {lic.modelYear}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE MODEL: {lic.engineModel}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE HP: {lic.engineHp}
              </p>
              <p className="mt-3" style={{ color: 'white' }}>
                ENGINE CYCLINERS: {lic.engineCylinders}
              </p>
              <hr />

            </div>
          </div>
        ))) : (
          <h3 style={{ color: 'white' }}>No Saved LIC to Display</h3>
        )};
    </div>
  );
}


export default Saved;