import "./login.css";
import React,{ useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

const Login = ()=>{
        const navigate = useNavigate();
        const [email,setEmail] = useState("");
        const [pwd,setPwd]= useState("");
        const [data,setData]= useState([0])
        const user = email;
        const password = pwd;
   
        const handelSubmit = async (e)=>
        {
            e.preventDefault();
            fetch("http://localhost:5500/user")
            .then((res)=>res.json())
            .then((data)=>{setData(data)})   

            if(data.find((i)=> i.email === user) && ((i)=> i.pwd === password)){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'LogIn Successfully',
                    showConfirmButton: false,
                    timer: 2000,
                  }) 
                  setTimeout(navigate("/"),1000)
                  localStorage.setItem("user",email)
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You entered invalid email or password',
                    timer: 2000,
                  })
                  setTimeout(navigate("/login"),1000);
                  setEmail("")
                  setPwd("")

            }
            
               
        }


    return(
        <div className="container content" style={{maxWidth:400}}>
            <div className="row main">
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={(e) =>setEmail(e.target.value)}
                    value={email}
                    required
                    className="input"
                    />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                onChange={(e) =>setPwd(e.target.value)}
                value={pwd}
                required
                className="input"
                />
                <button className="btnn">Sign In</button>
                <p>
                    Creat an Account?
                    <Link to="/signup" className="link">Sign Up </Link>
                   
                </p>
            </form>
    <img src="https://img.freepik.com/free-vector/sticker-template-clothes-racks-with-many-clothes-hangers-white-background_1308-61192.jpg?w=2000" alt=""/>
   </div>
</div>
    );
}
export default Login;