import React from "react";
import { StyledSearchField } from "../../../globalCSS/styledComponents";

import { useSelector, useDispatch } from "react-redux";
import { searchList } from "../../../actions";

function SearchField() {
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(searchList(value));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "10px",
      }}
    >
      <StyledSearchField
        type="text"
        placeholder="Search.."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchField;
