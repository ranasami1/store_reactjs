import { Link } from "react-router-dom";
const Login = ()=>{
    return(
        <div className="container mt-5" style={{maxWidth:400}}>
            <div className="row">
            <form className="mt-5">
    <div class="form-outline mb-4">
        <input type="email" id="email" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
    </div>

    
    <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
    </div>


    <div class="row mb-4">
        <div class="col d-flex justify-content-center">
        
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
        </div>

        <div class="col">
        <Link className="link" href="#!">Forgot password?</Link>
        </div>
    </div>
    <button type="button" class="btn btn-success btn-block text-body" style={{width:400,backgroundColor:"#E6A900"}}><Link to="/">Sign in
    </Link></button>
    <div class="text-center">
        <p>Not a member? <Link className="link" to ="/signup" className="link" href="#!">Register</Link></p>
    </div>
    </form>
    <img src="https://img.freepik.com/free-vector/sticker-template-clothes-racks-with-many-clothes-hangers-white-background_1308-61192.jpg?w=2000"/>
   </div>
</div>
    );
}
export default Login;