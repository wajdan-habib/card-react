import {React,useState} from 'react'
import { async } from '@firebase/util';
import { addDoc, collection } from '@firebase/firestore';
import { db } from "./FirebaseConfig";

export default function CrudFirebase() {
    const [NewName,setNewName] = useState();
    const [NewAge,setNewAge] = useState();
    const [NewNumber,setNewNumber] = useState();
    const [User,setUser] = useState();
    const usersCollectionRef = collection(db,"Wijdan")

    const createUser = async()=>{
        await addDoc(usersCollectionRef, {age:NewAge, name:NewName,  phone:NewNumber})
    }
  return (
    <div>
      <div className="container">
          <div className="row justify-content-center m-5">
              <div className="col-md-4 ">
                  <input type="text" placeholder='enter your Name' onChange={(e)=>{
                    setNewName(e.target.value)
                  }}/>
              </div>
              <div className="col-md-4 ">
                  <input type="text" placeholder='enter your age' onChange={(e)=>{
                    setNewAge(e.target.value)
                  }}/>

              </div>
              <div className="col-md-4 ">
                  <input type="text" placeholder='enter your Phone number' onChange={(e)=>{
                    setNewNumber(e.target.value)
                  }}/>
              </div>
              <div className="col-md-4 m-5">
              <button onClick={createUser}>sumbit</button>
              </div>
          </div>
      </div>
    </div>
  )
}
