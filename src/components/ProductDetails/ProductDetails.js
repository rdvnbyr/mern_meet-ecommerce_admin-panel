import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Reviews} from "./Reviews";
// reactstrap components
import {
    Button,
  } from "reactstrap";
import { getOneProduct } from 'actions';


const ProductDetails = () => {

    const productId = useLocation().pathname.split('/')[3];

    const dispatch = useDispatch();
    const {product, loading,apiUrl} = useSelector(
        (state) => ({
            product: state.product.product,
            loading: state.product.loading,
            apiUrl: state.session.apiUrl
        }),
        shallowEqual
    );

    useEffect(() => {
        if(productId) {
          dispatch(getOneProduct( productId));
        }
      }, [dispatch, productId]);

    return(
        <div className="container py-5" style={{minHeight: '100vh'}}>
        {
            loading ? <div>LOADING....</div>
             :
             <>
                <div className="row mt-5">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={ `${apiUrl}/${product.image}` } className="img-fluid" alt="product"/>
                    </div>      
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-white">
                        <h2 className=" text-white"> {`${product.brand} / ${product.title}`} </h2>
                        <h4 className="text-title text-white text-uppercase text-muted mt-3 mb-2"> {'' } </h4>
                        <h4 className="text-white"><span className="mr-3">Price: </span>{product.price}<span className ="mr-1"> € </span> </h4>
                        <h4 className="text-white"><span className="mr-3">Price: </span>{product.rating}</h4>
                        <h4 className="text-white"><span className="mr-3">Stock: </span>{product.countInStock}</h4>
                        <h4 className="text-white"><span className="mr-3">State: </span>{product.state}</h4>
                        <div className="mt-3 mb-0 text-muted lead text-white"> <small>{product.details} </small></div>
                        <div>
                            <Link to="/admin/all-products" className="text-decoration-none">
                                <Button
                                    className="mx-auto my-5"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"     
                                >
                                    Back to Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    ?
                </div>
             </>
        }
                
        </div>
    )
}

export default ProductDetails;