import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import data from "../mock-data";

export default function TableX() {
  const [contacts, setContacts] = useState(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>CRN</TableCell>
            <TableCell>GROUP</TableCell>
            <TableCell>BILLING</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact.NAME}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contact.NAME}
              </TableCell>
              <TableCell>{contact.CRN}</TableCell>
              <TableCell>{contact.GROUP}</TableCell>
              <TableCell>{contact.BILLING}</TableCell>
              <TableCell>{contact.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
