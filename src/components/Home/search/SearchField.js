import React from "react";
import { StyledSearchField } from "../../../globalCSS/styledComponents";

import { useDispatch } from "react-redux";
import { searchList, searchTrueOrFalse } from "../../../actions";

function SearchField() {
  const dispatch = useDispatch();

  const onChange = (value) => {
    if (value !== "") {
      dispatch(searchList(value));
      dispatch(searchTrueOrFalse(true));
    } else {
      dispatch(searchTrueOrFalse(false));
    }
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
        placeholder="Search titles..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchField;
