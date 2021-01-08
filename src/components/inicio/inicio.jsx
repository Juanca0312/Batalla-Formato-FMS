import React from 'react'
import './inicio.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Carousel } from 'react-bootstrap';
import Yeis from '../../images/yeis.jpg';
import Trueno from '../../images/rayo.jfif';
import Bnet from '../../images/benet.jpg';
import {
    Link
  } from "react-router-dom";

// rfc

export default function inicio() {
    return (
        <>
            <div className='container-fluid'>
                <Row className='align-items-center fullheight padd'>
                    <Col xs={12} className='padd'>
                        <Carousel interval={5000} controls={false} indicators={false}>

                            <Carousel.Item className='si'>
                                <img
                                    className="d-block w-100"
                                    src={Yeis}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='fullheight'>
                                    <Row className='fullheight padd'>
                                        <Col xs={12} className='padd'>
                                            <Row className='align-items-center titulo'>
                                                <Col xs={12} className='padd'>
                                                    <h1>VOTA FORMATO FMS</h1>
                                                </Col>
                                            </Row>
                                            <Row className='cuerpo'>
                                                <Col xs={12} className='padd'>
                                                    <p>Elige a tus freestylers</p>
                                                    <Link to="/selecgallo">
                                                        <Button type="button">
                                                            Empezar
                                                        </Button>
                                                    </Link>
                                                    {/* <Button to='/selecgallo'>Empezar</Button> */}
                                                </Col>

                                            </Row>


                                        </Col>
                                    </Row>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='si'>
                                <img
                                    className="d-block w-100"
                                    src={Trueno}
                                    alt="Second slide"
                                />

                                <Carousel.Caption className='fullheight'>
                                    <Row className='fullheight padd'>
                                        <Col xs={12} className='padd'>
                                            <Row className='align-items-center titulo'>
                                                <Col xs={12} className='padd'>
                                                    <h1>VOTA FORMATO FMS</h1>
                                                </Col>
                                            </Row>
                                            <Row className='cuerpo'>
                                                <Col xs={12} className='padd'>
                                                    <p>Elige a tus freestylers</p>
                                                    <Link to="/selecgallo">
                                                        <Button type="button">
                                                            Empezar
                                                        </Button>
                                                    </Link>
                                                </Col>

                                            </Row>


                                        </Col>
                                    </Row>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='si' >
                                <img
                                    className="d-block w-100"
                                    src={Bnet}
                                    alt="Third slide"
                                />
                                <Carousel.Caption className='fullheight'>
                                    <Row className='fullheight padd'>
                                        <Col xs={12} className='padd'>
                                            <Row className='align-items-center titulo'>
                                                <Col xs={12} className='padd'>
                                                    <h1>VOTA FORMATO FMS</h1>
                                                </Col>
                                            </Row>
                                            <Row className='cuerpo'>
                                                <Col xs={12} className='padd'>
                                                    <p>Elige a tus freestylers</p>
                                                    <Link to="/selecgallo">
                                                        <Button type="button">
                                                            Empezar
                                                        </Button>
                                                    </Link>
                                                </Col>

                                            </Row>


                                        </Col>
                                    </Row>

                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>

            </div>
        </>

    )
}
