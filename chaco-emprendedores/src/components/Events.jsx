import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Emprendimientos.css";

function Emprendimientos() {
  const url = "http://localhost:8080/events/";
  const [events, setEvents] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEvents(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {" "}
          {!events
            ? "Cargando..."
            : events.map((events, index) => {
                return (
                  <div className="col-md-4 p-3">
                    <Card className="text-center">
                      <Card.Header> {events.name} </Card.Header>{" "}
                      <Card.Body>
                        <Card.Title> {events.details} </Card.Title>{" "}
                        <Card.Text className="secondary-text">
                          {" "}
                          {events.status}{" "}
                        </Card.Text>{" "}
                        <Link to={'/events/'+events.id}>
                          <Button className="btn-success m-1 p-1">Participantes</Button>
                        </Link>
                      </Card.Body>{" "}
                      <Card.Footer className="text-muted">
                        Creado el {events.created}
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
