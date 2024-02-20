import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from '@firebase/firestore';
import { db } from './FirebaseConfig';

export default function CrudFirebase() {
    const [NewName, setNewName] = useState('');
    const [NewAge, setNewAge] = useState('');
    const [NewNumber, setNewNumber] = useState('');
    const [User, setUser] = useState([]);
    const usersCollectionRef = collection(db, "Wijdan");

    const UpdateUser = async (id) => {
        const userDoc = doc(db, "Wijdan", id);
        const changeName = { name: NewName };
        await updateDoc(userDoc, changeName);
    };

    const DeleteUser = async (id) => {
        const userDoc = doc(db, "Wijdan", id);
        await deleteDoc(userDoc);
    };

    const createUser = async () => {
        await addDoc(usersCollectionRef, { age: NewAge, name: NewName, phone: NewNumber });
    };

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(usersCollectionRef);
            setUser(data.docs.map((a) => ({ ...a.data(), id: a.id }))); // Changed 'doc' to 'docs'
        }
        getUser();
    }, [usersCollectionRef]);

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center m-5">
                    <div className="col-md-4">
                        <input type="text" placeholder='enter your Name' onChange={(e) => {
                            setNewName(e.target.value);
                        }} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder='enter your age' onChange={(e) => {
                            setNewAge(e.target.value);
                        }} />

                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder='enter your Phone number' onChange={(e) => {
                            setNewNumber(e.target.value);
                        }} />
                    </div>
                    <div className="col-md-4 m-5">
                        <button onClick={createUser}>submit</button> {/* Changed 'sumbit' to 'submit' */}
                    </div>
                </div>
            </div>

            {
                User.map((user) => {
                    return (
                        <div key={user.id}> {/* Added key prop for the list rendering */}
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Phone: {user.phone}</h1>
                            <button onClick={() => { UpdateUser(user.id); }}>update</button>
                            <button onClick={() => { DeleteUser(user.id); }}>delete</button>
                        </div>
                    );
                })
            }

        </div>
    );
}