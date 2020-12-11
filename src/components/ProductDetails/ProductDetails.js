import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import { ProductsActions } from '../../actions';
// reactstrap components
import {
    Button,
  } from "reactstrap";
import { getOneProduct } from 'actions';


const ProductDetails = () => {


    const productId = useLocation().pathname.split('/')[3];
    const domain = 'https://shopapi.apps.salevali.de/';

    const dispatch = useDispatch();
    const token = useSelector(state => state.sessionAdmin.token);
    const product = useSelector(state => state.getProductsAdmin.product);
    const loading = useSelector(state => state.getProductsAdmin.loading);

    useEffect(() => {
        if(productId) {
          dispatch(getOneProduct(token, productId));
        }
      }, [dispatch, productId, token]);

    return(
        <div className="container py-5" style={{margin: '120px', minHeight: '100vh'}}>
        {
            loading ? <div>LOADING....</div>
             :
             <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <img src={domain + product.image} className="img-fluid" alt="product"/>
                 </div>      
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <h2> {product.title} </h2>
                     <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> {'' } </h4>
                     <h4><strong> Price: {product.price}
                                 <span className ="mr-1"> € </span> 
                         </strong> 
                     </h4>
                     <p className=" mt-3 mb-0 text-muted lead"> {product.details} </p>
                     <div>
                         <Link to="/shopping" className="text-decoration-none">
                             <Button
                                 className="mx-auto my-5"
                                 type="submit"
                                 variant="contained"
                                 color="dark"     
                             >
                                 Back to Products
                             </Button>
                         </Link>
                         <Button
                             className="ml-5 my-5"
                             type="submit"
                             variant="contained" color="dark"
                             // onClick={() => {
                             //     value.addToCart(id);
                             //     value.openModal(id);
                             // } }
                         >
                         </Button>
                     </div>
                 </div>
             </div>
        }
                
        </div>
    )
}

export default ProductDetails;