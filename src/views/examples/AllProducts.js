import { deleteProduct } from 'actions';
import { getProducts } from 'actions';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import {
    Container,
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Table,
  } from "reactstrap";

function AllProducts() {

    const domain = 'http://localhost:8080/';

    const dispatch = useDispatch();
    // token must have for fetching products
    const token = useSelector(state => state.sessionAdmin.token);

    const products = useSelector(state => state.getProductsAdmin.products);
    const loading = useSelector(state => state.getProductsAdmin.loading);

    const [ toggleGrid, setToggleGrid] = useState(false)

    useEffect(() => {
        dispatch(getProducts(token));
    }, [dispatch, token]);

    const toggleHandler = () => setToggleGrid(!toggleGrid);

    const productCard = products.map( (product, index) => {
            return (
                    <Card style={{ width: "14rem"}} className="mx-2 my-3" key={product._id}>
                    <a href={`/admin/product-details/` + product._id }>
                        <CardImg
                            style={{width: '100%', height: '12rem'}}
                            alt={product.title}
                            src={ domain + product.image }
                            top
                        />
                    </a>
    
                    <CardBody>
                        <CardTitle style={{fontSize: '16px'}}>{product.title}</CardTitle>
                        <CardTitle style={{fontSize: '14px'}}>$ {product.price}</CardTitle>
                        <CardText style={{fontSize: '12px'}} className="text-truncate">
                            {product.details}
                        </CardText>
                        <CardTitle style={{fontSize: '12px'}}>State: {product.state}</CardTitle>
                        <CardTitle style={{fontSize: '12px'}}>{product.brand}</CardTitle>
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

    const productTable = products.map( (product, index) => {
            return (
                    <tr className="text-white" key={index}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href={`/admin/product-details/` + product._id }
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={ domain + product.image }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {product.title}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{product.brand}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          $ {product.price}
                        </Badge>
                      </td>
                        <td>
                        {product.countInStock}
                        </td>
                        <td>
                        {product.state}
                        </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href={`/admin/product-details/` + product._id }
                            >
                              Details
                            </DropdownItem>
                            <DropdownItem
                                href={`/admin/add-products/` + product._id }
                            >
                              Update Product
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => {
                                dispatch(deleteProduct(product._id, token));
                            }}
                            >
                              Delete Product
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>

            )
        
    })

    return (
        <div style={{minHeight: '100vh'}} className="bg-dark ">
            <div>
                <Button
                    color="secondary"
                    className="ml-5"
                    style={{marginTop: '100px'}}
                    onClick={toggleHandler}
                >
                    Grid
                </Button>
            </div>
        {
            loading ? <div className="text-danger mx-auto mt-5">LOADING...</div> 
            :
            <Container className="row" style={{paddingTop: '100px'}} fluid>
                { !toggleGrid ?
                     productCard : 
                        <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">In Stock</th>
                            <th scope="col">State</th>
                            <th scope="col" />
                        </tr>
                        </thead>
                        <tbody>
                        {productTable}
                        </tbody>
                        </Table>
                }
            </Container>
        }
        </div>
    )
    
}

export default AllProducts
