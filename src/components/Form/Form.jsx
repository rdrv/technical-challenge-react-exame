import "./Form.css";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";

function Form(props) {
  useEffect(() => {
    const loadingStatus = (status) => {
      setLoading(status);
    };
    props.subscribe(loadingStatus);
  });

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  function _searchFunc(e) {
    e.preventDefault();
    props.search(search);
    setSearch("");
  }

  return (
    <form className="Form" onSubmit={_searchFunc}>
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
        startIcon={
          loading ? (
            <CircularProgress color="inherit" size={22} />
          ) : (
            <SearchIcon />
          )
        }
        disabled={loading}
      >
        Find User
      </Button>
    </form>
  );
}

export default Form;
