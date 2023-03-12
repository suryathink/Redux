import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch ,useSelector} from 'react-redux'
import productsAction from "../../Action/productsAction";

const Products = (props) => {
    let productsData = useSelector((storeData)=>{
     return storeData.productReducer.products
    })
     
    const dispatch = useDispatch();

    var getData = async () => {
        try {
          var data = await fetch(`https://fakestoreapi.com/products`);
          data = await data.json();
          console.log(data);
          productsAction(data,dispatch)
        } catch (error) {
          console.log(error);
        }
      };
      
  useEffect(() => {
    if (productsData.length==0){
      getData()
    }
  }, []);

  return (
    <div>
      <h2 style={{ color: "blue" }}>Products Component</h2>
      <p>
        <h5>This is product Page . Below is the Dummy Product page description</h5>
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>

     {
        productsData.length > 0 ? (<div style={{ margin:"50px", display:"grid" , gridTemplateColumns:"1fr 1fr 1fr"}}>
           {
            productsData.map((ele)=>{
                return <div key={ele.id} style={{boxShadow:"0 0 10px black", padding:"10px", margin:"10px" }} >
                <Link to={`/productDetails/${ele.id}`}> 
                 <img src={ele.image} width="250px" height="250px" /> 
                 </Link>  
                    <h3>{ele.title}</h3>
                    <p>$ {ele.price}</p>
                    <Link to={`/productDetails/${ele.id}`}>
                    <button>More Information</button>
                    </Link>                
                 </div>
            })
           }
         </div> )  
         
         : (<h2 style={{color:"red",textAlign:"center"}} >Data not found yet. API is taking Time to fetch Data. Kindly wait for 5 seconds!</h2>)
     }


    </div>
  );
};

export default Products;
