import React, { useEffect } from 'react';
import { deleteProduct } from 'actions';
import { getProducts } from 'actions';
import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
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
    CardHeader
  } from "reactstrap";

function AllProducts() {

    const dispatch = useDispatch();

    const {products, loading, apiUrl} = useSelector(
      (state) => ({
        products: state.product.products,
        loading: state.product.loading,
        apiUrl: state.session.apiUrl
      }),
      shallowEqual
    );

    const [ toggleGrid, setToggleGrid] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const toggleHandler = () => setToggleGrid(!toggleGrid);

    const productCard = products.map( (product, index) => {
            return (
                  <Card style={{ width: "18rem"}} className="mx-2 my-3" key={product._id}>
                    <CardHeader className="p-5" style={{height: "18rem", width: "100%"}}>
                      <div style={{height: "100%", width: "100%"}}>
                        <CardImg
                            style={{height: "100%"}}
                            alt={product.title}
                            src={ `${apiUrl}/${product.image}` }
                        />
                      </div>
                    </CardHeader>
                    <CardBody>
                        <CardTitle><Link to={`/admin/product-details/${product._id}`}>{`${product.brand} / ${product.title}`}</Link></CardTitle>
                        <CardText><span className="text-muted" >Price: </span>${product.price}</CardText>
                        <CardText><span className="text-muted">State: </span>{product.state}</CardText>
                        <CardText><span className="text-muted">Rating: </span>{product.rating}</CardText>
                        <CardText><span className="text-muted">Stock: </span>{product.countInStock}</CardText>
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
                                    dispatch(deleteProduct(product._id));
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            );
    });

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
                              src={ `${apiUrl}/${product.image}`}
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
                                dispatch(deleteProduct(product._id));
                            }}
                            >
                              Delete Product
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
            )
        
    });

    return (
        <div style={{minHeight: '100vh'}} className=" bg-default">
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
                            <th scope="col" >Action</th>
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

export default AllProducts;