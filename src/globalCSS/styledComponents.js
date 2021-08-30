import globalStyles from "./globalStyles";
import styled from "styled-components";

export const HomeContainer = styled.div`
  background: ${globalStyles.mainBackground};
  display: flex;
  flex-direction: column;
  padding: 5%;
`;
export const StyledButton = styled.button`
  background-color: ${globalStyles.lightBlue};
  border-radius: ${globalStyles.buttonBorderRadius};
  border-style: none;
  font-size: ${globalStyles.fontSize};
  font-weight: 500;
  margin-top: ${globalStyles.elementMargin};
  margin-bottom: ${globalStyles.elementMargin};

  &:hover {
    cursor: pointer;
    background-color: ${globalStyles.darkerBlue};
    padding: 5px;
  }
`;
export const ItemSeparatorDiv = styled.div`
  height: 3px;
  border-bottom: 3px solid ${globalStyles.mainBorderColor};
  width: 100%;
`;
