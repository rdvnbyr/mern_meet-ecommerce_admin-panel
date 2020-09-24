import { getProducts } from 'actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import {
    Container,
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
  } from "reactstrap";

function AllProducts() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.getProducts.products);
    const loading = useSelector(state => state.getProducts.loading);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuZGUiLCJ1c2VyaWQiOiI1ZjYyNjZiYWMwNTJlNWJjZjdmYTJlOTAiLCJpYXQiOjE2MDA5ODM2MzYsImV4cCI6MTYwMDk5NDQzNn0.zK3oVlvKHY0f6vvvozzhZEnwm6WDwE-2Yzcoq6MelIQ';

    useEffect(() => {
        dispatch(getProducts(token));
    }, [dispatch]);

    const productCard = products.map( (product, index) => {
                    return (
                        <Card style={{ width: "16rem"}} className="mx-2" key={product._id}>
                        <CardImg
                            style={{width: '100%', height: '16rem'}}
                            alt={product.title}
                            src={product.image}
                            top
                        />

                        <CardBody>
                            <CardTitle style={{fontSize: 'calc(12px + 0.4vw)'}}>{product.title}</CardTitle>
                            <CardTitle style={{fontSize: 'calc(8px + 0.4vw)'}}>$ {product.price}</CardTitle>
                            <CardText style={{fontSize: 'calc(8px + 0.3vw)'}}>
                                {product.details}
                            </CardText>
                            <div className="row justify-content-around">
                                <Button
                                    color="primary"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Update
                                </Button>
                                <Button
                                    color="primary"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    )
    })

    return (
        <div>
        {
            loading ? <div className="text-danger mx-auto mt-5">LOADING...</div> 
            :
            <Container className="h-100vh bg-dark row" style={{paddingTop: '100px'}} fluid>
                {productCard}
            </Container>
        }
        </div>
    )
    
}

export default AllProducts
