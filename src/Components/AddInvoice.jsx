import { TextField, Typography, Box, Button, styled } from "@mui/material";
import React, { useState } from "react";

import { saveInvoice } from "../services/api";

const Component = styled(Box)({
  marginTop: 20,
  "& > p": {
    fontSize: 26,
    marginBottom: 10,
  },
  "& > div > div": {
    marginRight: 20,
    minWidth: 200,
  },
});

const defaultObj = {
  vendor: "",
  product: "",
  amount: 0,
  date: "",
  action: "Pending",
};

function AddInvoice({ setAddInvoice }) {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const addNewInvoice = async () => {
    await saveInvoice({ ...invoice, amount: Number(invoice["amount"]) });
    setAddInvoice(false);
  };
  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
          variant="standard"
          placeholder="Enter vendor name"
          type="text"
          name="vendor"
          // autoComplete="off"
          required
          onChange={(e) => onValueChange(e)}
        />

        <TextField
          variant="standard"
          placeholder="Enter product name"
          type="text"
          name="product"
          // autoComplete="off"
          required
          onChange={(e) => onValueChange(e)}
        />

        <TextField
          variant="standard"
          placeholder="Enter amount(in ₹)"
          type="number"
          name="amount"
          // autoComplete="off"
          required
          onChange={(e) => onValueChange(e)}
        />

        <TextField
          variant="standard"
          placeholder="Enter date"
          type="date"
          name="date"
          // autoComplete="off"
          required
          onChange={(e) => onValueChange(e)}
        />

        <Button variant="contained" onClick={() => addNewInvoice()}>
          Add Invoice
        </Button>
      </Box>
    </Component>
  );
}

export default AddInvoice;
