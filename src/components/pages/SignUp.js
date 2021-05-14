import React from 'react';
import '../../App.css';

export default function SignUp() {
  return (
  <>
    <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>
    <div className="container border rounded p-4 my-4" style={{backgroundColor: "#e3f2fd", fontSize: "20px"}}>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </>
  );
}
