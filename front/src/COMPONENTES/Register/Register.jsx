import { Field, Form, Formik } from "formik";
import React from "react";
import axios from "axios";

export const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleForm = async (values) => {
    console.log("values:", values);
    try {
      const response = await axios.post("http://localhost:5000/auth/register", values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registrarse</h1>
          <Formik initialValues={initialValues} onSubmit={handleForm}>
            <Form>
              <div className="form-floating">
                <Field
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
                
              
              
              </div>
              <button
                className="btn btn-primary w-100 py-2"
                type="submit"
                onClick={handleForm}
              >
                Sign in
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Register;