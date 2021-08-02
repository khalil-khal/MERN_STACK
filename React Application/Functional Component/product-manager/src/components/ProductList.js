import axios from 'axios';
import React , {useState , useEffect} from 'react'

export default function ProductList() {

    const [prodcuts, setprodcuts] = useState([])

useEffect(() => {
    
    axios.get("http://localhost:8000/api/show")
    .then(res => setprodcuts(res.data))
    .catch(err => console.log(err))
    
}, [])


    return (
        <div>
            {prodcuts.map( (item,i) => {return (<h1 key={i}>item.name</h1>)} ) }
        </div>
    )
}
