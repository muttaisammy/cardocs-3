import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import API from '../utils/lic';

//import API from "../utils/lic";


export default function Home() {

  const [lic, setLic] = useState([]);
  const [formObject, setFormObject] = useState({});

  // useEffect(() => {
  //   loadLic()
  // }, [])

  // function loadLic() {
  //   API.searchLic()
  //     .then(res => setLic(res.data.Results[0]))
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log(formObject)
    event.preventDefault();
    if (formObject.search) {
      API.searchLic(formObject.search)
        .then(res => {
          // console.log(res.data.Results[0].Make)
          console.log(res.data.Results)
          setLic(res.data.Results)
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  //save lic to dbase
  function saveLicSelection(lic) {
    // event.preventDefault();
    // savebook to dbase
    console.log("OnClick saveLicSelection--results: " + lic[0].LIC);
    API.saveLic({
      lic: lic[0].LIC,
      make: lic[0].Make,
      model: lic[0].Model,
      modelYear: lic[0].ModelYear,
      engineModel: lic[0].EngineModel,
      engineHp: lic[0].EngineHP,
      engineCylinders: lic[0].EngineCylinders,
      fuelInjection: lic[0].FuelInjectionType,
    })
      // .then(res => console.log('Saved to dbase'))
      .then(res => alert("SAVED"))
      .catch(err => console.log(err));
  };


  function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("US"));

    setInterval(() => setTime(new Date().toLocaleTimeString("US")), 1000);

    return <p>Current Time: {time} </p>

  }
  return (
    <div className="page">

      <form>
        <input style={{ height: 50, width: "60%", borderColor: 'grey', borderWidth: 1, borderRadius: 10, margin: 10, fontSize: 15 }}
          onChange={handleInputChange}
          name="search"
          placeholder="  Enter Software Licence No:  "
        />

        <button style={{ fontsize: 10, padding: 10, borderradius: 5, borderWidth: 1, margin: 5, backgroundColor: 'grey', }}
          disabled={!(formObject.search)}
          onClick={handleFormSubmit}
          type="light"
        >
          LIC Search
       </button>
      </form>
      {lic.length ? (
        <div className="licReturn" class="col-md-6 col-md-offset-3">
          <h2 style={{ color: 'white' }} className="f-weight-300">LIC Details </h2>
          <button onClick={() => saveLicSelection(lic)} variant="outline-success" className='ml-3' >Save</button>
          <div style={{ color: 'white' }}> LIC: {lic[0].LIC} </div>
          <div style={{ color: 'white' }}> Make: {lic[0].Make} || Model: {lic[0].Model} </div>
          <div style={{ color: 'white' }}> Model Year: {lic[0].ModelYear} </div>
          <div style={{ color: 'white' }}> Engine HP: {lic[0].EngineHP} </div>
          <div style={{ color: 'white' }}> Engine Cylinders: {lic[0].EngineCylinders} </div>
          <div style={{ color: 'white' }}> Displacement CC: {lic[0].DisplacementCC} </div>
          <div style={{ color: 'white' }}> Fuel Injection Type: {lic[0].FuelInjectionType} </div>
          <div style={{ color: 'white' }}> Drive Type: {lic[0].DriveType} </div>
          <div style={{ color: 'white' }}> Doors: {lic[0].Doors} </div>
          <div style={{ color: 'white' }}> Trim: {lic[0].Trim} </div>
        </div>
      ) : (
          <h3 style={{ color: 'blue' }} >No Results to Display</h3>
        )}
    </div>
  );
}