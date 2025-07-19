import React from 'react';
import "../App.css";

export default function SelectMenu({ setRegion }) {
  return (
    <select
      className="filter-by-region"
      defaultValue=""
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="" hidden>Filter by Region</option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
