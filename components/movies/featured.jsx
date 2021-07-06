import React,{useState, useEffect} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import StyleFeatured from '../../styles/movies/featured.module.css'

export default function Featured(props) {
    if (props.Movies === undefined) {
        return <h1>loading data</h1>
    } else {
        return (
            <>
                <Col xl={8} lg={8} md={12} sm={12} xs={12} className={StyleFeatured.container}>
                    <Row data-aos="fade-right" data-aos-duration="1000">
                        <h1 className={StyleFeatured.heading}>Recently featured movies :</h1>
                    </Row>
                    <Row>{props.Movies.map((e, i) => {
                        return (<Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer} key={i}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/bb.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>{e.title}</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>)
                    })}
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/bb.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/jj.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/cc.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/ss.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/bb.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/jj.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/cc.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className={StyleFeatured.cardContainer}>

                            <div className={StyleFeatured.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{ backgroundImage: "url('/ss.jpg')" }}>

                            </div>
                            <Card className={StyleFeatured.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleFeatured.cardBody}>
                                    <h2 className={StyleFeatured.movieHeading}>Movie title</h2>
                                    <p className={StyleFeatured.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleFeatured.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                            <h1 className={StyleFeatured.movieInfo}>Rating : 7.4 / 10</h1>
                                            <h1 className={StyleFeatured.movieInfo}>Views : 12 520</h1>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleFeatured.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>

                        </Col>

                    </Row>
                </Col>
            </>
        )
    }
}