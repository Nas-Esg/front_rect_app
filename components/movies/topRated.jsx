import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import StyleTopRated from '../../styles/movies/topRated.module.css'


export default function TopRated(){
    return (
        <>
        <Col xl={4} lg={4} md={12} sm={12} xs={12} className={StyleTopRated.container}>
                <Row data-aos="fade-right" data-aos-duration="1000">
                    <h1 className={StyleTopRated.heading}>Top rated movies :</h1>
                </Row>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTopRated.cardContainer}>

                            <div className={StyleTopRated.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:"url('/bb.jpg')"}}>
                                
                            </div>
                            <Card className={StyleTopRated.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleTopRated.cardBody}>
                                    <h2 className={StyleTopRated.movieHeading}>Movie title</h2>
                                    <p className={StyleTopRated.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleTopRated.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                    <h1 className={StyleTopRated.movieInfo}>Rating : 7.4 / 10</h1> 
                                    <h1 className={StyleTopRated.movieInfo}>Views : 12 520</h1> 
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleTopRated.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTopRated.cardContainer}>

                            <div className={StyleTopRated.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:"url('/jj.jpg')"}}>
                                
                            </div>
                            <Card className={StyleTopRated.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleTopRated.cardBody}>
                                    <h2 className={StyleTopRated.movieHeading}>Movie title</h2>
                                    <p className={StyleTopRated.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleTopRated.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                    <h1 className={StyleTopRated.movieInfo}>Rating : 7.4 / 10</h1> 
                                    <h1 className={StyleTopRated.movieInfo}>Views : 12 520</h1> 
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleTopRated.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTopRated.cardContainer}>

                            <div className={StyleTopRated.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:"url('/cc.jpg')"}}>
                                
                            </div>
                            <Card className={StyleTopRated.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleTopRated.cardBody}>
                                    <h2 className={StyleTopRated.movieHeading}>Movie title</h2>
                                    <p className={StyleTopRated.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleTopRated.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                    <h1 className={StyleTopRated.movieInfo}>Rating : 7.4 / 10</h1> 
                                    <h1 className={StyleTopRated.movieInfo}>Views : 12 520</h1> 
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleTopRated.moreBtn}>More details</a>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTopRated.cardContainer}>

                            <div className={StyleTopRated.imgConatiner} data-aos="fade-right" data-aos-duration="1000" style={{backgroundImage:"url('/ss.jpg')"}}>
                                
                            </div>
                            <Card className={StyleTopRated.card} data-aos="fade-right">
                                <Card.Body variant="top" className={StyleTopRated.cardBody}>
                                    <h2 className={StyleTopRated.movieHeading}>Movie title</h2>
                                    <p className={StyleTopRated.movieDesc}>This is some awesome movie desciption that will tell evetything there is to know about the movie.</p>
                                </Card.Body>
                                <Card.Footer className={StyleTopRated.cardFooter}>
                                    <Row>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>

                                    <h1 className={StyleTopRated.movieInfo}>Rating : 7.4 / 10</h1> 
                                    <h1 className={StyleTopRated.movieInfo}>Views : 12 520</h1> 
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end align-items-center">
                                            <a href="#" className={StyleTopRated.moreBtn}>More details</a>
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