import React from "react";

export default function Location({ location }) {
  return (
    <div className="col mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{location.name}</h5>
          <p className="card-text">
            <strong>Climate:</strong> {location.climate}
          </p>
          <p className="card-text">
            <strong>Terrain:</strong> {location.terrain}
          </p>
        </div>
      </div>
    </div>
  );
}
