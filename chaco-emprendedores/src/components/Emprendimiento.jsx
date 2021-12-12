import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Emprendimiento = () => {
  const { id } = useParams();
  const [emprendimiento, setEmprendimiento] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:8080/emprendimientos/${id}`);
      const emp = await data.json();
      setEmprendimiento(emp);
    };
    getData();
  }, [id]);
  return (
    <div className="container p-3">
      {!emprendimiento? "Cargando...": emprendimiento.map((emprendimiento) => { return (
        <div className="card text-center">
        <div className="card-header ">{emprendimiento.name}</div>
        <div className="card-body">
          <h5 className="card-title ">{emprendimiento.description}</h5>
          <p className="card-text ">{emprendimiento.content}</p>
          <a className="btn btn-success  m-2 p-2 ">Votar</a>
        </div>
        <div className="card-footer text-muted">
          Meta: ${emprendimiento.goal} - Votos: {emprendimiento.votesCount}
        </div>
      </div>

      )})}
      
    </div>

  );
};

export default Emprendimiento;
