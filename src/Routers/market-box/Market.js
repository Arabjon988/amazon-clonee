import React, {useState} from 'react'
import {db} from '../../firebase'

function Market() {


        const [name, setName] = useState()
        const [cost, setCost] = useState()
        const [image, setImage] = useState()
        const [who, setWho] = useState()

        const sendProductTodb = () => {
            db.collection("Products").add({
                product:{
                    productName: name,
                    productCost: Number(cost),
                    productImage: image,
                    productWho: who
                }
            })
        }
    

    
    return (
        <div className="adder">
            <input type="text" placeholder="Product name "  value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Product Cost" value={cost} onChange={e => setCost(e.target.value) }  />
            <input type="text" placeholder="Product Image URL" value={image} onChange={e => setImage(e.target.value) }  />
            <input type="text" placeholder="Who created" value={who} onChange={e => setWho(e.target.value) }  />
            <button className="btn" onClick={sendProductTodb}>Send Product db</button>
        </div>
    )
}

export default Market
