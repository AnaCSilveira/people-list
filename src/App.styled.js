import styled from "styled-components";
import { Button } from "@fluentui/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledDiv = styled.div`
  min-height: 100vh;
  background: #abb4b3;
`;

export const StyledH1 = styled.h1`
  color: #002755;
  font-size: 50px;
  font-weight: bold;
  padding: 2%;
`;

export const StyleButton = styled(Button)`
  margin: 2%;
`;
export const StyleUl = styled.ul`
  display: flex;
  flex-direction: column;
  background: #dcd8d3;
  height: 70vh;
  width: 30%;
  border-radius: 8px;
  margin: 0 auto;
`;
export const StyleLi = styled.li`
  display: flex;
  font-size: 15px;
  margin: 8px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 15px;
`;

export const StyleIcons = styled.div`
  position: fixed;
  margin-left: 25%;
`;
