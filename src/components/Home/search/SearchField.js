import React from "react";
import { StyledSearchField } from "../../../globalCSS/styledComponents";

import { useDispatch, useSelector } from "react-redux";
import { searchList, searchTrueOrFalse } from "../../../actions";
import ApiCaller from "../../../reducers/callApi";

function SearchField() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.ApiCaller);
  console.log("searchValue", searchValue);
  const onChange = (value) => {
    if (value !== "") {
      dispatch(searchList(value));
      dispatch(searchTrueOrFalse(true));
      console.log("searchvalue: ", value);
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
