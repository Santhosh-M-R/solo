import styled from "styled-components";
import weekend from "./images/logo/weekend.jpeg";
import alldays from "./images/logo/alldays.jpeg";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Logo = styled.img`
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 610px) {
    width: 30%;
  }
`;
const CourseMessage = styled.div`
  padding: 20px;
  @media only screen and (max-width: 600px) {
    display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    position: relative;
    h2 {
      padding: 0;
      margin: 0;
      text-align: center;
    }
    > .course-info .daily,
    .satandsun {
      padding: 0 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .timing {
        padding: 10px;
      }
      > b {
        text-align: center;
        padding: 10px;
      }
    }
    .registration {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 610px) {
    .registration {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
    font-size: 20px;
    .course-info,
    .daily,
    .satandsun {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
    h2 {
      text-align: center;
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

          <div className="daily">
            <b>All days course details</b>
            <Logo
              src={alldays}
              alt="alldays"
              style={{ alignItems: "center" }}
            ></Logo>
          </div>
          <div className="satandsun">
            <b>Only on weekends course details</b>
            <Logo
              src={weekend}
              alt="weekend"
              style={{ alignItems: "center" }}
            ></Logo>
          </div>
          <div className="registration">
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
        </div>
        <h2 id="contact">_______________</h2>
      </CourseMessage>
    </>
  );
};

export default CourseDetails;
