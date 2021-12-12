import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Emprendimientos.css";

function Emprendimientos() {
  const url = "http://localhost:8080/emprendimientos/";
  const [emprendimientos, setEmprendimientos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEmprendimientos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {" "}
          {!emprendimientos
            ? "Cargando..."
            : emprendimientos.map((emprendimientos, index) => {
                return (
                  <div className="col-md-4 p-3">
                    <Card className="text-center">
                      <Card.Header> {emprendimientos.name} </Card.Header>{" "}
                      <Card.Body>
                        <Card.Title> {emprendimientos.description} </Card.Title>{" "}
                        <Card.Text className="secondary-text">
                          {" "}
                          {emprendimientos.content}{" "}
                        </Card.Text>{" "}
                        <Link to={"/emprendimientos/" + emprendimientos.id}>
                          <Button className="btn-"> Ver </Button>{" "}
                        </Link>{" "}
                      </Card.Body>{" "}
                      <Card.Footer className="text-muted">
                        Creado el {emprendimientos.created}
                      </Card.Footer>{" "}
                    </Card>{" "}
                  </div>
                );
              })}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Emprendimientos;
