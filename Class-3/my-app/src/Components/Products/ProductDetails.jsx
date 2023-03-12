import React , {useEffect , useState}from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const [State,setState] = useState([]);
  const { id } = useParams();

  const getData = async (url) => {
    try {
        var data = await fetch (url);
        data = await data.json();
        console.log(data)
        setState(data)
    } catch (error) {
        console.log(error)
    }
  };
   
  useEffect(() => {
    
  getData(`https://fakestoreapi.com/products/${id}`);
   
  }, [])
  
  return (
    <div>
      <h2 style={{ color: "orangered" }}>ProductDetails {id}</h2>
    
      <div>
      <div style={{boxShadow:"0 0 10px black", padding:"10px", margin:"10px"}} >
                 <img src={State.image} width="250px" height="250px" /> 
                    <h3>{State.title}</h3>
                    <p>$ {State.price}</p>       
                 </div>
      </div>
    </div>
  );
};

export default ProductDetails;
