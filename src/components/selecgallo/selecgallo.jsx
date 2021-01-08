import React from 'react'
import './selecgallo.css'

export default function selecgallo() {
    return (
        <>
            <div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Selecciona el Pais</Form.Label>
                    <Form.Control as="select">
                        <option>PERÚ</option>
                        <option>ESPAÑA</option>
                        <option>ARGENTINA</option>
                        <option>CHILE</option>
                        <option>MEXICO</option>
                    </Form.Control>
                </Form.Group>
            </div>
        </>

    )
}
