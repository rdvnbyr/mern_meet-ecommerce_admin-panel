import { deleteProduct } from 'actions';
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

    const domain = 'http://localhost:8080/';

    const dispatch = useDispatch();
    // token must have for fetching products
    const token = useSelector(state => state.sessionAdmin.token);

    const products = useSelector(state => state.getProductsAdmin.products);
    const loading = useSelector(state => state.getProductsAdmin.loading);

    useEffect(() => {
        dispatch(getProducts(token));
    }, [dispatch, token]);

    const productCard = products.map( (product, index) => {
                    return (
                        <Card style={{ width: "14rem"}} className="mx-2 my-3" key={product._id}>
                        <CardImg
                            style={{width: '100%', height: '12rem'}}
                            alt={product.title}
                            src={ domain + product.image }
                            top
                        />

                        <CardBody>
                            <CardTitle style={{fontSize: '16px'}}>{product.title}</CardTitle>
                            <CardTitle style={{fontSize: '14px'}}>$ {product.price}</CardTitle>
                            <CardText style={{fontSize: '12px'}} className="text-truncate">
                                {product.details}
                            </CardText>
                            <div className="row justify-content-around">
                                <Button
                                    color="primary"
                                    href={`/admin/add-products/` + product._id }
                                >
                                    Update
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={() => {
                                        dispatch(deleteProduct(product._id, token));
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    )
    })

    return (
        <div style={{minHeight: '100vh'}} className="bg-dark ">
        {
            loading ? <div className="text-danger mx-auto mt-5">LOADING...</div> 
            :
            <Container className="row" style={{paddingTop: '100px'}} fluid>
                {productCard}
            </Container>
        }
        </div>
    )
    
}

export default AllProducts
