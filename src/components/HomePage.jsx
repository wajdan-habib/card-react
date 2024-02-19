import React from 'react'
import {data} from './Data.js';
import '../styles/Card.css'
import { Link } from "react-router-dom";

export default function home() {
  // const {}
  return (
    <div>
      <div className="container ">
        <div className="row ">
          {
            data.map((a)=>(
              <>
              <div class="card col-md-3 g-md-5 m-3 shadow">
          <img class="card-img-top mt-3 shadow" src={a.img} alt="Card cap"/>
          <div class="card-body">
            <div><p>{a.cat}</p></div>
            <div><h5>{a.name}</h5></div>
            <p class="card-text">{a.descrip}</p>
            <hr/>
            <img className="col-sm-2 rounded-5" src={a.pfp} alt="text"/>
            <h5><Link to={`profile/${a.id}`}>{a.name}</Link></h5>

          </div>
        </div>
            </>
            ))
          }
          <div></div>
          
        </div>
      </div>
    </div>
  )
}
