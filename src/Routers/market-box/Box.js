import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'

function Box() {

    const [data, setData] = useState([])

    useEffect(() => {
        db.collection("Products").onSnapshot(product => {
            setData(product.docs.map((pro) => ({
                uniqueId: pro.id,
                data: pro.data()
            })
            ))
        })
    }, [])

    console.log(data)


    return (
        <div className="product">
            {
                data?.map((pro) => (
                    <div key={pro}>
                    <p>{pro.data.productName}</p>
                    <p>{pro.data.productCost}</p>
                    <p>{pro.data.productImage}</p>
                    <p>{pro.data.productWho}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Box
