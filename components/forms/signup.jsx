import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import StyleSignup from '../../styles/forms/signup.module.css'
import axios from 'axios'
export default function SignUp() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const submitSignUp = async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:8080/apiman-gateway/essaguiar/user_api/1.0", { email: email, firstName: firstName, lastName: lastName, gender: gender, birthday: birthday })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => { console.log(error) })
    }
    return (
        <>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className={StyleSignup.container}>
                <Row>
                    <h1 className={StyleSignup.heading}>Créer un nouveau compte.</h1>
                </Row>
                <Form onSubmit={submitSignUp}>
                    <Form.Group>
                        <Form.Label className={StyleSignup.formLabel}>First name : </Form.Label>
                        <Form.Control onChange={(e) => {
                            setFirstName(e.target.value)
                        }} type="text" placeholder="add your firstname" className={StyleSignup.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={StyleSignup.formLabel}>Last name : </Form.Label>
                        <Form.Control onChange={(e) => {
                            setLastName(e.target.value)
                        }} type="text" placeholder="add your last name" className={StyleSignup.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={StyleSignup.formLabel}>E-mail : </Form.Label>
                        <Form.Control onChange={(e) => {
                            setEmail(e.target.value)
                        }} type="email" placeholder="add your email" className={StyleSignup.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={StyleSignup.formLabel}>Birhtday : </Form.Label>
                        <Form.Control onChange={(e) => {
                            setBirthday(e.target.value)
                        }} type="text" placeholder="add your birhtday" className={StyleSignup.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={StyleSignup.formLabel}>Gneder : </Form.Label>
                        <Form.Control onChange={(e) => {
                            setGender(e.target.value)
                        }} type="text" placeholder="gender(type MALE for male and FEMALE for female)" className={StyleSignup.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Button className={StyleSignup.btn} type="submit" >S'enregistrer</Button>
                    </Form.Group>
                </Form>
            </Col>
        </>
    )
}