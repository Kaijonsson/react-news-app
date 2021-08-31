import React, { createRef, useEffect, useState } from "react";
import { StyledSearchField } from "../../../globalCSS/styledComponents";

import { useDispatch } from "react-redux";
import { searchList, searchTrueOrFalse } from "../../../actions";

function SearchField(boolean) {
  const dispatch = useDispatch();
  const inputRef = createRef();

  useEffect(() => {
    if (boolean === true) {
      inputRef.current.value = "";
    }
  }, [boolean]);

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
        ref={inputRef}
        type="text"
        placeholder="Search titles..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchField;
