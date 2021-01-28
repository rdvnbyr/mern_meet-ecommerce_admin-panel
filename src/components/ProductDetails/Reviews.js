import React from 'react';
import { Card, CardBody, CardTitle } from  'reactstrap';



export function Reviews({
    reviews
}) {
    return (
        <div
            className="container"
            style={{
                margin: "50px auto",
                minHeight: "25vh",
                boxSizing: "border-box"
            }} >
            {
                reviews &&
                    reviews.map( (review, index) => {
                        return(
                                <Card key={review._id} className="my-4 mx-auto" style={{borderLeft: "none",borderRight: "none"}}>
                                    <div className="row justify-content-between pt-3 px-5">
                                        <div className="column text-left">
                                            <div className="">
                                                {review.reviewer.username}
                                            </div>
                                            <div className="text-danger">
                                                <small>{review.reviewer.email}</small>
                                            </div>
                                            <div>{review.rating}</div>
                                        </div>

                                    </div>
                                    <CardBody className="pl-5">
                                        <CardTitle className="font-weight-bold text-left">
                                            {review.title}
                                        </CardTitle>
                                        <Card.Title className="text-left">
                                            {review.comment}
                                        </Card.Title>
                                    </CardBody>
                                    {/*
                                        <Card.Footer className="border-0 product-review-footer row justify-content-end">
                                            <div className="mr-5">Was this review helpful?</div>
                                            <div className="mr-4">
                                                <i 
                                                    className="fas fa-thumbs-up"
                                                    onClick={''}
                                                ><span className="ml-1">2</span>
                                                </i>
                                            </div>
                                            <div className="">
                                                <i className="fas fa-thumbs-down"><span className="ml-1">2</span></i>
                                            </div>
                                        </Card.Footer>
                                    */}
                                </Card>
                        )
                    })
            }
        </div>
    )
};



