import React, {
    Component
} from 'react';

import './Login.css';

class LoginPage extends Component {
    render() {
        return (
            <>
                <div className="container-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-9 mx-auto">
                                <div className="card card-signin flex-row my-5">
                                    <div className="card-img-left d-none d-md-flex">
                                        {/* <!-- Background image for card set in CSS! --> */}
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title text-center">Register</h5> */}
                                        <center>
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/CMYK_LOGO-01_pngs.png" 
                                                alt="" 
                                                width = "100"
                                                height = "100"
                                            />
                                        </center>
                                        <form className="form-signin">
                                            <div className="form-label-group">
                                                <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                                                <label for="inputUserame">Username</label>
                                            </div>

                                            {/* <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                                <label for="inputEmail">Email address</label>
                                            </div> */}
                                        
                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            
                                            <a className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" href="/dashboard">Sign In</a>
                                            <hr className="my-4"/>
                                            <a className="btn btn-lg btn-google btn-block text-uppercase" type="submit" href="/dashboard"><i className="fab fa-google mr-2"></i> Sign up with Google</a>
                                            <a className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit" href="/dashboard"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
            </>
        )
    }
}

export default LoginPage