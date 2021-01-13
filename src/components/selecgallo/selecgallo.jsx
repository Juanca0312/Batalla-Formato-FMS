import React, { useState } from 'react'
import './selecgallo.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fondo from '../../images/fondo.jpg';
import Button from 'react-bootstrap/Button';
import {
    Link
  } from "react-router-dom";


export default function Selecgallo() {
    let arr = ["PERU", "CHILE", "ESPAÑA", "ARGENTINA", "MEXICO"];
    let peru = ["JAZE", "NEKROSS", "STICK", "STRIKE", "SKILL", "RAMSET", "NEW ERA", "CHOQUE", "JOTA", "LITZEN"];
    let argentina = ["STUART", "PAPO", "MECHA", "KLAN", "NACHO", "WOLF", "CACHA", "DTOKE", "SUB", "MKS"];
    let mexico = ["RAPDER", "LOBO ESTEPARIO", "SKIPER", "RC", "YOIKER", "GARZA", "JONY BELTRÁN", "POTENCIA", "ZTICMA", "B.ONE"];
    let espana = ["GAZIR", "BNET", "ZASKO", "MNAK", "TIRPA", "SWEET PAIN", "BLON", "MISTER EGO", "ERRECÉ", "KHAN"];
    let chile = ["PEPE GRILLO", "NITRO", "RICTO", "JOQERR", "TEOREMA", "ESEZETA", "TOM CROWLEY", "JOKKER", "ACERTIJO", "EL MENOR"];
    const [country, setCountry] = useState(peru);
    const [galloActual, setGallo] = useState("JAZE");
    const [galloActual2, setGallo2] = useState("NEKROSS");




    function handleChange(e) {
        let pais = e.target.value;
        if (pais === "ARGENTINA") {
            setCountry(argentina);
            setGallo2("PAPO");
        }
        if (pais === "PERU") {
            setCountry(peru);
            setGallo2("NEKROSS");
        }
        if (pais === "CHILE") {
            setCountry(chile);
            setGallo2("NITRO");
        }
        if (pais === "MEXICO") {
            setCountry(mexico);
            setGallo2("LOBO ESTEPARIO");
        }
        if (pais === "ESPAÑA") {
            setCountry(espana);
            setGallo2("BNET");
        }
    }

    function handleChange2(e) {
        let gallo = e.target.value;
        setGallo(gallo);
    }

    function handleChange3(e) {
        let gallo = e.target.value;
        setGallo2(gallo);
    }

    const Gallo = () => (
        <Form.Group controlId="peladita">
            <Form.Label className='titulos'>Selecciona el Gallo</Form.Label>
            <Form.Control value={galloActual} as="select" onChange={handleChange2}>
                {country.map((gallo, index) => (
                    <option value={gallo} key={index}>{gallo}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )

    const Gallo2 = () => (
        <Form.Group controlId="peladita2">
            <Form.Label className='titulos'>Selecciona el Gallo 2</Form.Label>
            <Form.Control value={galloActual2} as="select" onChange={handleChange3}>
                {country.map((gallo, index) => (
                    <option disabled={galloActual === gallo} value={gallo} key={index}>{gallo}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )




    return (
        <div className='container-fluid alto' style={{ backgroundImage: `url(${Fondo})` }}>
            <Row className="justify-content-center">
                <Col xs='auto'>
                    <h1>Elige tus Gallos</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className='titulos'>Selecciona el Pais</Form.Label>
                        <Form.Control as="select" onChange={handleChange}>
                            {arr.map((country, index) => (
                                <option value={country} key={index}>{country}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row >
                <Col xs={12} sm={6} >
                    {country.length > 0 ? <Gallo /> : null}
                </Col>
                <Col xs={12} sm={6} >
                    {country.length > 0 ? <Gallo2 /> : null}
                </Col>
            </Row>


            <Row className="justify-content-center mt-5" >
                <Col xs='auto'>
                    <Link to="/round1">
                        <Button type="button">
                            Empezar
                        </Button>
                    </Link>
                </Col>
            </Row>




        </div>

    )
}
