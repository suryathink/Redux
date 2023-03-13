import { Link } from "react-router-dom";
function Nav() {
  var routes = [
    {
      title:"Home",
      path:"/",
    },
    {
      title:"Users",
      path:"/users",
    },
    {
      title:"redux",
      path:"/redux",
    },
    {
      title:"Products",
      path:"/products",
    },
    {
      title:"ContactUs",
      path:"/contact",
    },
    {
      title:"Login",
      path:"/login",
    }
  ]
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <div style={divStyle}>
     {
      routes.map((route,index)=>{
        return <Link style={aStyle} key ={index+1}  to={route.path}>{route.title}</Link>
      })
     }
    </div>
  );
}

export default Nav;
