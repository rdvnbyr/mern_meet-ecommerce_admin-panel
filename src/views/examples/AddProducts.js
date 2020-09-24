import { addProduct } from '../../actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";

function AddProducts() {

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    const [ title, setTitle ] = useState('');
    const [ details, setDetails ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ image, setImage ] = useState('');
    const [ category, setCategory ] = useState('');
 
    const onSubmit = (e) => {
        e.preventDefault();
        const product = {
            title: title,
            details: details,
            image: image,
            price: price,
            category: category
        };
        dispatch(addProduct(product, token));
    };


    return (
        <Container className="h-100vh bg-dark" fluid>
        <Col lg="6" md="8" className="mx-auto pt-7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-1">
              <small>Add Product</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={onSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                    <Input
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={ (e) => setTitle(e.target.value)}
                        value={title}
                    />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="image"
                    type="text"
                    name="image"
                    onChange={ (e) => setImage(e.target.value) }
                    value={ image }
                    />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Price"
                    type="number"
                    name="price"
                    min="0"
                    onChange={ (e) => setPrice(e.target.value) }
                    value={ price }
                    />
                </InputGroup>
              </FormGroup>
              <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>
                  <Input
                      placeholder="Category"
                      type="text"
                      name="category"
                      onChange={ (e) => setCategory(e.target.value) }
                      value={ category }
                  />
              </InputGroup>
            </FormGroup>
            <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
                <textarea
                    className="w-100 p-2"
                    placeholder="Details"
                    type="text"
                    name="details"
                    onChange={ (e) => setDetails(e.target.value) }
                ></textarea>
            </InputGroup>
          </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create Product
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
        </Container>
    )
}

export default AddProducts;