import axios from 'axios';
import React , {useState} from 'react'

export default function ProductForm() {

    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

const createUser = (e) => {

e.preventDefault();
axios.post('http://localhost:8000/api/new',{
title : title,
price: price,
description: description
})
.then(res => console.log(res))
.catch(err => console.log(err))

}

    return (
        <div>
            <h1>Add new Product: </h1>
            <form  onSubmit={createUser}  style={{display : "flex" , flexDirection: "column"}}  >
                <input onChange={(e) => {settitle(e.target.value)} }    placeholder={"Title"} />
                <input onChange={(e) => setprice(e.target.value)} placeholder={"Price"}  />
                <input onChange={(e) => setdescription(e.target.value)} placeholder={"Description"} />
                <input type="submit" value="Add Product"/>
            </form>
        </div>
    )
}
