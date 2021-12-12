import React, { useState, useEffect } from "react";
import { ListGroup, Accordion } from "react-bootstrap";

function Users() {
  const url = "http://localhost:8080/users/";
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    };
    fetchApi();
  }, []);
  return (
    <div className="App">
      {!users
        ? "Cargando.."
        : users.map((user) => {
            return (
              <div className="container p-3">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {user.id}. {user.username}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        Nombre: {user.firstname} {user.lastname}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Localidad: {user.city}, {user.province} - {user.country}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        ROL: {user.role}
                      </ListGroup.Item>
                      <ListGroup.Item className="center">
                        Alta: {user.createdDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="center">
                        Ultima Modificacion: {user.lastUpdated}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
            );
          })}
    </div>
  );
}

export default Users;
