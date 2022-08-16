import React, { useState } from "react";
import "./App.css";
import data from "./mock-data";

function App() {
  const [contacts, setContacts] = useState(data);

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
        <tbody>
          {contacts.map((contact) => {
            return (
              <>
                <tr>
                  <td>Myra Foster</td>
                  <td>KC001</td>
                  <td>Enterprise</td>
                  <td>Auto Debit</td>
                  <td>actions</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
