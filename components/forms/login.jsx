import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import StyleLogin from '../../styles/forms/login.module.css'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);
        formData.append("grant_type", "password");
        formData.append("client_id", "test-application");
        const response = await axios.post("https://localhost:8443/auth/realms/essaguiar/protocol/openid-connect/token", { data: formData })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => { console.log(error) })
    }
    return (
        <>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className={StyleLogin.container}>
                <Row>
                    <h1 className={StyleLogin.heading}>Connectez-vous.</h1>
                </Row>
                <Form onSubmit={submitLogin}>
                    <Form.Group>
                        <Form.Label className={StyleLogin.formLabel}>E-mail : </Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Veuillez saisir votre adresse mail" className={StyleLogin.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={StyleLogin.formLabel}>Password : </Form.Label>
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Veuillez saisir votre password" className={StyleLogin.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" className={StyleLogin.btn}>Se connecter</Button>
                    </Form.Group>
                </Form>
            </Col>
        </>
    )
}