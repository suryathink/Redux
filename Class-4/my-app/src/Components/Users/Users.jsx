import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);


  const [searchParam,setSearchParam] = useSearchParams()


  // this getter will return the value of this query parameter "page"
  // returned value will be in string format

 
   let initialPage = searchParam.get("page");

   if (+initialPage ==0){
    initialPage=1;
   }
 
  //   console.log((initialPage));
 
  const [page,setPage] = useState(Number(initialPage));
 
  const getUsers = async () => {
    var res = await fetch(`https://reqres.in/api/users?page=${page}`);
    var data = await res.json();
    console.log(data);
    setUsers(data.data);
  };

  useEffect(() => {
    getUsers();
  }, [page]);


// How to add query parameter to existing url
  useEffect(()=>{
  setSearchParam({
    page:page,
    // name:"Surya",
    // sort:"asc",
  })
  },[page])



  const handlePage = (value) => {
   let pageNumber = page + value;
   if (pageNumber >=1 && pageNumber<=2){
    // to minimise api call and to reduce server cost
    setPage(pageNumber)
   }
   
  }

  return (
    <div>
      <h2>Users</h2>
      <p>
        Phasellus dolor nunc, facilisis a eleifend et, tincidunt non libero.
        Vivamus placerat magna at nisi porta, eget porta ante faucibus. Praesent
        viverra lacus purus, vel aliquam mauris hendrerit et. Praesent
        consectetur, lectus in lobortis accumsan, mauris turpis condimentum
        mauris, vel blandit dui lectus in purus. Praesent non eros id turpis
        dapibus fringilla. Quisque ut lorem ex. Nulla quis elit et eros ultrices
        auctor. Donec feugiat ex ac sem accumsan pretium. Integer felis nisl,
        dictum in luctus eget, euismod eu ligula. Nullam eget sapien sit amet
        erat tincidunt lacinia. Suspendisse sagittis euismod faucibus. Aenean
        nec augue nec sapien ultrices tristique ut eu odio. Mauris ultricies sed
        ligula in eleifend. Nulla accumsan felis vel ex malesuada lobortis. Nam
        aliquam arcu quis lectus dapibus mattis. Sed et pharetra velit. Etiam
        mauris nibh, sollicitudin a lacinia sed, varius vel erat. Vestibulum
        viverra placerat lectus, sed pellentesque tortor commodo ac. Nulla at
        nisl condimentum, vestibulum tellus ultrices, congue justo. Aenean
        molestie arcu velit, quis sollicitudin mauris mattis sit amet.
        Vestibulum auctor vehicula turpis, at rutrum neque fringilla et.
        Pellentesque a elementum leo, at vestibulum metus. Vivamus consequat
        tempus egestas. Vivamus id erat at mauris placerat dapibus. Aliquam eu
        ante porttitor, laoreet nisi eu, imperdiet velit.
      </p>

      {users.length > 0 && (
        <div>
          <table style={{ width: "80%", margin: "30px auto", boxShadow:"0 0 10px black" , padding:"20px"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                  <td>{user.id}</td>
                    <td><img src = {user.avatar} width="70" height={70}/></td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                  
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        
        </div>
      )}

      <div style={{margin:"20px 0 50px"}} >
          <button disabled = {page == 1 } onClick={()=>{handlePage(-1)}} >Prev</button> &nbsp; &nbsp;
          <button>{page}</button>  &nbsp; &nbsp;
          <button  disabled = {page >= 2 }  onClick={()=>{handlePage(1)}}>Next</button> 
          </div>
    </div>
  );
};

export default Users;
