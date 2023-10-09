import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./css/Registration.css";
import features from "../assets/images/featuresSemi.webp";
import dsaPic from "../assets/images/featuresDsa.png";
import axios from "axios";
import {Triangle} from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from "react-router-dom";

export default function Registration() {
    const data = useLocation();
    const courseName = data.state.course
    const img = data.state.image
    console.log(courseName);
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [studentDetails, setStudentDetails] = useState({course:courseName});
    const [result, setResult] = useState(false);
    const [failed, setFailed] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            sendRequest();
        }
        setValidated(true);
    };

    const sendRequest = () => {
        setLoading(true);
        axios.post('https://backend-4uacademy.herokuapp.com/register', studentDetails)
            .then(response => {
                if (response.status === 200) {
                        setLoading(false);
                        setResult(true);
                        setFailed(false);
                }
                else {
                    setLoading(false);
                    setResult(false);
                    setFailed(true);
                }
            })
            .catch(response => {
                setLoading(false);
                setResult(false);
                setFailed(true);
        });
    };

    return <section className="registration-page" id="top">
        <h3 className="section-heading">Register Now !!!</h3>
        {
            failed && <div className="result-text">There was some error ;) please try again.</div>
        }
        {
            loading && <div className="loader"><Triangle
            height="250"
            width="250"
            color="#4fa94d"
            visible={true}
            className="loader"
            /></div>
        }
        {
            (!result && !loading) && <div className={`registration-page-content ${loading}`}>
            <div className="image-container">
                <img src={features} alt="features" />
            </div>
            <div className="registration-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mt-5 mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="name" onChange={(e)=>{setStudentDetails({...studentDetails ,name:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className="input" size="lg" required type="tel" name="contact" pattern="(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}" onChange={(e)=>{setStudentDetails({...studentDetails ,contact:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control className="input" size="lg" required type="email" name="email" onChange={(e)=>{setStudentDetails({...studentDetails ,email:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="college" onChange={(e)=>{setStudentDetails({...studentDetails ,college:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="branch" onChange={(e)=>{setStudentDetails({...studentDetails ,branch:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Year</Form.Label>                            
                            <Form.Select className="input" size="lg" required type="text" name="YearOfStudy" onChange={(e)=>{setStudentDetails({...studentDetails ,yearOfStudy:e.target.value})}}>
                                <option hidden value=""></option>
                                <option value="1st year">First Year</option>
                                <option value="2nd year">Second Year</option>
                                <option value="3rd year">Third Year</option>
                                <option value="4th year">Fourth Year</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Do you know any other programming languages? (If yes mention them)</Form.Label>                            
                            <Form.Control className="input" size="lg" type="text" name="langKnow" onChange={(e)=>{setStudentDetails({...studentDetails ,langKnow:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>What are your expectations from the course?</Form.Label>                            
                            <Form.Control as="textarea" className="input" required name="expectation" onChange={(e)=>{setStudentDetails({...studentDetails , expectation:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Button className="my-3 btn-submit" size="lg" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
        }
        {
            result && <div className="result-text">Your Registraion is successfull. Please do join our whatsapp group for further communication <a href="https://chat.whatsapp.com/DaOAwITNuwqFUkcQdnk4cM"> <FontAwesomeIcon icon={faWhatsapp}/> WhatsApp</a> </div>
        }
    </section>;
}
