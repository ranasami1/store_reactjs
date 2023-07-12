import React from "react";
import { Link } from "react-router-dom";
import"./signup.css";
const SignUp = ()=>{
    return(
            <section>
        <div>
            <div class="container">
            <div class="row">
                <div class="col-5 main">
                <div class="card">
                    <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-3"style={{color:"#E6A900"}}>Create an account</h2>

                    <form>

                        <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Your Name</label>
                        </div>

                        <div class="form-outline mb-3">
                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example3cg">Your Email</label>
                        </div>

                        <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Password</label>
                        </div>

                        <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label class="form-check-label" for="form2Example3g">
                            I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                        </label>
                        </div>
                        <div class="d-flex justify-content-center">
                        <button type="button"
                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>
                        <p class="text-center text-muted mt-3 mb-0">Have already an account? <Link to="/login" href="#!"
                            class="fw-bold text-body"><u>Login here</u></Link></p>

                    </form>

                    </div>
                </div>
                </div>
                <img className="col-7" src="https://npr.brightspotcdn.com/dims4/default/ffb8c2e/2147483647/strip/true/crop/900x506+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F03%2F9c%2F3a2e47fc412a857e60875267fc30%2Fclothing-istock-vectorikart-2021-0730.jpg"/>
            </div>
            </div>
        </div>
    </section>
    )
}
export default SignUp;