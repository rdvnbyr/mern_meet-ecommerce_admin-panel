import { addProduct, getOneProduct, updateProduct } from '../../actions';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// reactstrap components
import {
    Container,
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroup,
    Col
} from "reactstrap";


function AddProducts() {

    const productId = useLocation().pathname.split('/')[3];

    const dispatch = useDispatch();
    const token = useSelector(state => state.sessionAdmin.token);
    const loading = useSelector( state => state.addProductAdmin.loading);
    const product = useSelector( state => state.getProductsAdmin.product);

    const [ title, setTitle ] = useState('');
    const [ details, setDetails ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ image, setImage ] = useState(null);
    const [ category, setCategory ] = useState('');
    const [ state, setState ] = useState('');

    useEffect(() => {
      if(productId) {
        dispatch(getOneProduct(token, productId));
      }
    }, [dispatch, productId, token]);
 
    const onSubmit = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
        dataForm.append('title', title === '' ? product.title : title);
        dataForm.append('details', details === '' ? product.details : details);
        dataForm.append('image', image === null ? product.image : image);
        dataForm.append('price', (price === '' | 0) ? product.price : price);
        dataForm.append('category', category === '' ? product.category : category);
        dataForm.append('state', state === '' ? product.state : state);

        productId ? dispatch(updateProduct( dataForm, token, productId )) : dispatch(addProduct(dataForm, token));
    };

    return (
      <div>
      {
        loading || (productId & !product ) ? <div>LOADING...</div>
        :
        <Container className="h-100vh bg-dark" fluid>
          <Col lg="6" md="8" className="mx-auto pt-7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-3">
                <div className="text-muted text-center">
                  <small>{ productId !== '' ? 'Update Product' : 'Add Product' }</small>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={onSubmit}>
                  <FormGroup>
                  <label className="text-muted"><small>Title</small></label>
                    <InputGroup className="input-group-alternative mb-3">
                        <Input
                            type="text"
                            name="title"
                            onChange={ (e) => setTitle(e.target.value)}
                            defaultValue={ productId ? product.title : title }
                        />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  <label className="text-muted"><small>Image</small></label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        type="file"
                        name="image"
                        onChange={ (e) => setImage(e.target.files[0]) }
                        />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  <label className="text-muted"><small>Price</small></label>
                    <InputGroup className="input-group-alternative">
                        <Input
                          type="number"
                          name="price"
                          min="0"
                          onChange={ (e) => setPrice(e.target.value) }
                          defaultValue={productId ? product.price : price }
                          />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  <label className="text-muted"><small>Category</small></label>
                  <InputGroup className="input-group-alternative mb-3">
                      <Input
                          type="text"
                          name="category"
                          onChange={ (e) => setCategory(e.target.value) }
                          defaultValue={productId ? product.category : category }
                      />
                  </InputGroup>
                </FormGroup>
                  <FormGroup>
                  <label className="text-muted"><small>State</small></label>
                  <InputGroup className="input-group-alternative mb-3">
                      <select
                          className="w-100 border-0 py-2"
                          as="select"
                          name="state"
                          onChange={ (e) => setState(e.target.value) }
                          defaultValue={productId ? product.state : state }
                      >
                      <option>none</option>
                      <option>Weeks Deal</option>
                      <option>Best Seller</option>
                      </select>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                <label className="text-muted"><small>Details</small></label>
                <InputGroup className="input-group-alternative mb-3">
                    <Input
                    className="form-control-alternative"
                    rows="4"
                    defaultValue={productId ? product.details : details }
                    type="textarea"
                    name="details"
                    onChange={ (e) => setDetails(e.target.value) }
                  />
                </InputGroup>
              </FormGroup>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      {productId !== '' ? 'Update Product' : 'Create Product'}
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      }
      </div>
    )
}

export default AddProducts;