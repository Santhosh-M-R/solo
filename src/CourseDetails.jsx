import styled from "styled-components";
import weekend from "./images/logo/weekend.jpeg";
import alldays from "./images/logo/alldays.jpeg";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Logo = styled.img`
  width: 60%;
`;
const CourseMessage = styled.div`
  padding: 20px;
  position: relative;
  padding 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 0;
    margin: 0;
  }
  >.course-info{
    padding: 0 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .timing {
        padding: 10px;
    }
    > b{
        text-align: center;
        padding: 10px;
    }
  }
`;
const CourseDetails = () => {
  return (
    <>
      <CourseMessage>
        <h2>Course Details</h2>
        <div className="course-info">
          <p>Namme course la two timings eruku</p>
          <p className="timing">
            1. All days 9pm to 10pm <br /> 2. Only on weekends 10am - 11am and
            3pm - 4pm
          </p>

          <b>All days course details</b>
          <Logo
            src={alldays}
            alt="alldays"
            style={{ alignItems: "center" }}
          ></Logo>
          <b>Only on weekends course details</b>
          <Logo
            src={weekend}
            alt="weekend"
            style={{ alignItems: "center" }}
          ></Logo>
          <p> For registration message me in whatsapp</p>
          <p style={{ margin: "0" }}>
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
            <ArrowDownwardIcon />
          </p>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              href="https://api.whatsapp.com/send/?phone=918778890619&text&app_absent=0"
              style={{ background: "#00FF00" }}
              target="__blank"
              className="message_send"
            >
              <WhatsAppIcon />
              <b style={{ margin: "0", padding: "0 5px", color: "#FFFFFF" }}>
                Whatsapp
              </b>
            </Button>
          </Stack>
        </div>
        <h2 id="contact">_______________</h2>
      </CourseMessage>
    </>
  );
};

export default CourseDetails;
