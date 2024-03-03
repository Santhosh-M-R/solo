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
  padding: 10px;
  height: 600px;

  @media only screen and (min-width: 610px) {  
    font-size: 30px;
    padding: 40px;
  }
`;

const StudentsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between the columns */
`;

const StudentsProfits = () => {
  return (
    <StudentsMessage>
      <h2>Students group results</h2>
      <StudentsGroup>
        <div>
          <iframe
            src="https://www.instagram.com/reel/C3RkrHxPGH3/embed/"
            width="400"
            height="500"
            frameborder="0"
            allowtransparency="true">
          </iframe>
        </div>
        
        <div>
          <iframe
            src="https://www.instagram.com/reel/C28_1NACeGf/embed/"
            width="400"
            height="500"
            frameborder="0"
            allowtransparency="true">
          </iframe>
        </div>
      </StudentsGroup>

      <h2>My live trade recordings</h2>
      <div>
        <iframe
          src="https://www.instagram.com/reel/C3osP0FPD05/embed/"
          width="400"
          height="500"
          frameborder="0"
          allowtransparency="true">
        </iframe>
      </div> 
      
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3>Wait for upcoming videos....</h3>
        <CircularProgress/>
      </Box>
    </StudentsMessage>
  );
};

export default StudentsProfits;
