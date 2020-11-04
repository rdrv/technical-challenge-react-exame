import "./Form.css";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

function Form(props) {
  
  const [search, setSearch] = useState("");

  function searchFunc(e) {
    e.preventDefault();
    props.search(search);
    setSearch("");
  }

  return (
    <form className="Form" onSubmit={searchFunc}>
      <TextField
        id="user"
        label="User's name"
        variant="outlined"
        autoComplete="off"
        margin="normal"
        fullWidth
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<SearchIcon />}
      >
        Find User
      </Button>
    </form>
  );
}

export default Form;
