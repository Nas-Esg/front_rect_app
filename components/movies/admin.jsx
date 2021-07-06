import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StyleAdmin from '../../styles/movies/admin.module.css'
import axios from 'axios'
export default function Admin(props) {
    if (props.Movies === undefined) {

        return <h1>loading data</h1>
    } else {
        const [title, setTitle] = useState('')
        const [category, setCategory] = useState('')
        const [description, setDescription] = useState('')
        const [movieDirector, setMovieDirector] = useState('')
        const [releaseDate, setReleaseDate] = useState('')
        const getOneMovie = async (id) => {
            await axios.get(`http://localhost:8080/apiman-gateway/essaguiar/put_movie_api/1.0/${id}`)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const onChangeID = async (e) => {
            e.preventDefault()
            getOneMovie(e.target.value)
        }
        const updateMovie = async (e) => {
            e.preventDefault()
            await axios.post(`http://localhost:8080/apiman-gateway/essaguiar/put_movie_api/1.0/${id}`, {
                title: title,
                category: category,
                description: description,
                movieDirector: movieDirector,
                releaseDate: releaseDate
            })
                .then((res) => {
                    window.alert('Movie Created Successfully !')
                    window.location.href = "/admin"
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const deleteMovie = async (id) => {
            await axios.delete(`http://localhost:8080/apiman-gateway/essaguiar/put_movie_api/1.0/${id}`)
                .then((res) => {
                    window.alert(res.data.message)
                    window.location.href = "/admin"
                }).catch((error) => {
                    console.log(error)
                })
        }
        return (
            <>
                <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleAdmin.container}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Liste des films disponibles">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Catergory</th>
                                        <th>Description</th>
                                        <th>Director</th>
                                        <th>Realease Date</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.Movies.map((e, i) => {
                                        return (<tr key={i}>
                                            <td>{e._id}</td>
                                            <td>{e.title}</td>
                                            <td>{e.description}</td>
                                            <td>{e.category}</td>
                                            <td>{e.movieDirector}</td>
                                            <td>{e.releaseDate}</td>
                                            <td className="d-flex justify-content-center"><Button onClick={
                                                () => { deleteMovie(e._id) }

                                            } variant="danger">Supprimer</Button></td>
                                        </tr>)
                                    })}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="profile" title="Créer un nouveau film">
                            <Form>
                                <h3 style={{ color: "#fff", marginBottom: "25px" }}>add a new movie to the catalogue:</h3>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Movie Title :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Category :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Description :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Release Date :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Director of the movie :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Button className={StyleAdmin.btn} type="submit">Créer un nouveau film</Button>
                                </Form.Group>
                            </Form>
                        </Tab>
                        <Tab eventKey="contact" title="Modifier un film">
                            <Form>
                                <h3 style={{ color: "#fff", marginBottom: "25px" }}>select the movie to be modified  :</h3>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Movie ID :</Form.Label>
                                    <select onChange={onChangeID} className={StyleAdmin.formControl}>
                                        <option >Select the movie to be delted</option>
                                        {props.Movies.map((e, i) => {
                                            return (
                                                <option key={i} value={e._id}>{e.title}</option>
                                            )
                                        })}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Movie Title :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Category :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Description :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Release Date :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={StyleAdmin.formLabel}>Director of the movie :</Form.Label>
                                    <Form.Control className={StyleAdmin.formControl} type="text" placeholder="Tapez ici les informations" />
                                </Form.Group>
                                <Form.Group>
                                    <Button className={StyleAdmin.btn} type="submit">Modifier le film</Button>
                                </Form.Group>
                            </Form>
                        </Tab>
                    </Tabs>
                </Col>
            </>
        )

    }

}