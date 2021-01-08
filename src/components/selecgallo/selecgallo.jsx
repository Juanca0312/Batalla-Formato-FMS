import React from 'react'
import './selecgallo.css'
import Form from 'react-bootstrap/Form';


export default function selecgallo() {
    let arr = ["PERU", "CHILE", "ESPAÑA", "ARGENTINA", "MEXICO"];
    return (
        <>
            <div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Selecciona el Pais</Form.Label>
                    <Form.Control as="select">
                        {arr.map((country, index) => (
                            <option value={country} key={index}>{country}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </div>
        </>

    )
}
