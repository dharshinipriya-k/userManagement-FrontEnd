import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../App";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser({ user, setUser }) {
  let params = useParams();
  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState("");
  let [role, setRole] = useState("");
  let [password, setPassword] = useState("");

  const handleEdit = async () => {
    let { id } = params;
    try {
      let res = await axios.put(`${API_URL}/user/${id}`, {
        id,
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

  const getData = async () => {
    let { id } = params;
    // console.log(id);
    try {
      let res = await axios.get(`${API_URL}/user/${id}`);
      // console.log(res);
      if (res.status === 200) {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setPassword(res.data.user.password);
        setStatus(res.data.user.status);
        setPassword(res.data.user.password);
        setRole(res.data.user.role);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => handleEdit()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditUser;
