import React, { useEffect, useState } from "react";
import Tmem from "./Tmem";

function OurTeams() {
  let [teamsData, setTeamsData] = useState([])
  useEffect(() => {
    const apiFetch = async () => {
      const response = await fetch("http://localhost:8000/about/teams")
      const jsonResponse = await response.json()
      setTeamsData(jsonResponse["data"])
    }
    apiFetch()
  }, [])
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {teamsData.map((item, index) => (
              <Tmem one={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeams;
