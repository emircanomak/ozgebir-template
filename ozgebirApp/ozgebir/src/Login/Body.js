import React from "react";
import { useForm } from "react-hook-form";
import logo from "./logo.jpg";





function Body() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


 
 

  return (
    <div className="auth option2">
      <div className="auth_left">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <a className="header-brand" href="#">
              <img src={logo} alt="logo" />
              </a>
              <div className="card-title mt-3">ÖZGEBİR</div>
            </div>
            <div className="form-group">
              <input {...register("number")}
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder= "TC No" 
              
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                <a href="#" className="float-right small">
                  Şifremi Unuttum
                </a>
              </label>
              <input {...register("password")}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Şifre"
              />
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary btn-block"
                title=""
              >
                DEVAM
              </a>
    
              </div>

            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Body;
