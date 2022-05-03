import React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (

    <form>
        <div className="row mb-3">
            <label for="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="username" className="form-control" id="inputUsername3"/>
                </div>
            </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"/>
                </div>
        </div>
  
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
        )
    }
}