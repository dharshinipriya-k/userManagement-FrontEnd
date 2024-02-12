import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState("");
  let [role, setRole] = useState("");
  let [password, setPassword] = useState("");

  const addUser = async () => {
    try {
      let res = await axios.post(`${API_URL}/user`, {
        name,
        email,
        status,
        role,
        password,
      });

      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status as true/false"
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter role"
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter role"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => addUser()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddUser;
