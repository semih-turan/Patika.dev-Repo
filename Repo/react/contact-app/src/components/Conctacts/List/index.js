import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>

      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span>{contact.phonenumber}</span>
          </li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
