import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { API_URL } from "../App";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  let [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(`${API_URL}/user`);

      if (res.status === 200) {
        setUsers(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/user/${id}`);
      if (res.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>User Enrolled At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* { console.log(users)} */}
            {users.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>

                  <td>{e.status ? "Permanent" : "Temporary"}</td>
                  <td>{e.role}</td>
                  <td>{e.createdAt}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => navigate(`/edit-user/${e._id}`)}
                    >
                      Edit User
                    </Button>
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(e._id)}
                    >
                      Delete
                    </Button>
                    {/* {console.log(e._id)} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
