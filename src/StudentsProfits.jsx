import styled from "styled-components";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const StudentsMessage = styled.div`
padding: 20px;
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding 10px;
  height: 600px;
  @media only screen and (min-width: 610px) {  
    font-size: 30px;
    padding 40px;
  }
`;

const StudentsProfits = () => {
  return (
    <StudentsMessage>
      <h2>Students profits</h2>
      <p>
        Collecting and gathering information is in progress soon it will be
        available here in upcoming days
      </p>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </StudentsMessage>
  );
};

export default StudentsProfits;
