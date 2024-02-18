import React from 'react'
import { useParams } from 'react-router';
import {data} from './Data.js';

// import { profile } from './Profile'
export default function UserProfile() {
  const{ id } = useParams();
  const Data = data.find((p)=>p.id == id);
  return (
    <div>
      <div className="container">
          <div className="row">
              <div className="col-4">
                <img className="rounded-5 h-50" src={Data.pfp} alt="cake"/>               
              </div>
              <div className="col-6 g-5">
                  <h1>{Data.name}</h1>
              </div>
          </div>
      </div>
    </div>
  )
}
