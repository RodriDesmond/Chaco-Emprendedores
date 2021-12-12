import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Ranking = () => {
  const { id } = useParams();
  const [rankingDelEvento, setRankingDelEvento] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`http://localhost:8080/events/${id}`);
      const responseJSON = await response.json();
      setRankingDelEvento(responseJSON);
      console.log(responseJSON)
    }
    fetchApi()
  }, [id]);
  return (
    <div className="App">
      <div className="container p-3">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Emprendimiento</th>
              <th>Creador</th>
              <th>Votos</th>
              <th>Detalles</th>
            </tr>
          </thead>
          {!rankingDelEvento
            ? "Cargando..."
            : rankingDelEvento.emprendimientos.map((emprendimiento, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{emprendimiento.name}</td>
                      <td>{emprendimiento.creator}</td>
                      <td>{emprendimiento.votesCount}</td>
                      <td><Link to={'/emprendimientos/'+ emprendimiento.id}>
                          <Button className="btn btn-secondary">Ver</Button>
                        </Link> </td>
                    </tr>
                  </tbody>
                );
              })}
        </Table>
      </div>
    </div>
  );
};

export default Ranking;
