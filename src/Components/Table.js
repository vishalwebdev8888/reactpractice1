import React, { useState } from "react";
import data from "../mock-data";
import "../App.css";

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const renderedContacts = contacts.map((contact) => {
    return (
      <tr>
        <td>{contact.NAME}</td>
        <td>{contact.CRN}</td>
        <td>{contact.GROUP}</td>
        <td>{contact.BILLING}</td>
        <td>{contact.actions}</td>
      </tr>
    );
  });

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>CRN</th>
            <th>GROUP</th>
            <th>BILLING</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{renderedContacts}</tbody>
      </table>
    </div>
  );
};

export default Table;
