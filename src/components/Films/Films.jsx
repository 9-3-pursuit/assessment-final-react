// For readability purposes, I will include smaller components inside this big file
// When I do this I will avoid passing props to the smaller components
// aka prop drilling
// aka creating dumb components/stateless components

import { useState } from "react";
import { useGhibliData } from "../../hooks/useGhibliData";

const Film = ({ film }) => {
  return (
    <aside>
      <p>
        <strong>Title:</strong> {film.title}
      </p>
      <p>
        <strong>Release Date:</strong> {film.release_date}
      </p>
      <p>
        <strong>Description:</strong> {film.description}
      </p>
    </aside>
  );
};

const Films = () => {};

export default Films;
