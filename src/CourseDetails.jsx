import styled from "styled-components";
import weekend from "./images/logo/weekend.jpeg";
import alldays from "./images/logo/alldays.jpeg";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Logo = styled.img`
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 610px) {
    width: 50%;
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
    .both-course {
      display: flex;
      justify-content: 
    }
    h2 {
      text-align: center;
    }
  }

  @media only screen and (min-width: 610px) {
    width: 600px;
    margin: 0 auto;
    padding: 0 auto;
    > .heading > p {
      font-size: 30px;
    }

    > .timing {
      padding: 30px 10px 0 30px;

      p {
        font-size: 30px;
      }
    }

    > .class-content {
      padding-left: 20px;

      h2 {
        font-size: 30px;
      }

      ul {
        padding-left: 30px;
      }

      .guidance {
        font-size: 30px;
        padding: 20px;
      }
    }
  }
`;


const CourseContent = styled.div`
  background: rgb(102, 71, 242);
  padding: 15px;
  width: 400px;
  color: white;
  margin: 0;
  padding: 0;
  border: 2px solid black;
  border-radius: 10px;

  > .heading > p {
    font-size: 25px;
    padding: 0;
    margin: 0;
  }

  > .timing {
    padding: 20px 5px 0 20px;

    p {
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 25px;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
    }
  }
  
  > .class-content {
    padding-left: 10px;
    text-align: left;

    h2 {
      text-align: left;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
    }
    
    /* Optional: Style individual list items */
    li {
      margin-bottom: 5px;
    }

    .guidance {
      text-align: center;
      font-size: 25px;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      padding: 15px;
    }
  }

  
`;


const CourseDetails = () => {
  return (
    <>
      <CourseMessage>
        <h2>Course Details</h2>
        <div className="course-info">
          <p>Mode of training: Online via zoom</p>
          <b>Namma course timings <br /></b>
        
          <b className="timing">
            All days 9pm to 10pm <br /> 
            Everyday classes.... <br /> 
            Recording will be provided <br />for everyday classes
          </b>
          <br /> 

          <div className="both-course"> 
            {/* <div className="daily">
              <b>All days course details</b>
              <Logo
                src={alldays}
                alt="alldays"
                style={{ alignItems: "center" }}
              ></Logo>
            </div> */}
            <CourseContent>
              <div className="heading">
                <h2>Solo Trader Tamil</h2>
                <p>Trading classes</p>
              </div>
              <div className="timing">
                <p>All days classes</p>
                <p>Timing: 9pm to 10pm</p>
                <p>Duration: 10 days classes, After classes full support with students group</p>
                <p>Fee: 5000 rs</p>
                <p>Payment mode: gpay or paytm 8778890619</p>
              </div>

              <div className="class-content">
                <h2>Contents:</h2>
                <ul>
                  <li>Basic of stock market</li>
                  <li>Intraday and swing trading in stocks</li>
                  <li>Index options and stock options</li>
                  <li>1st candle entry </li>
                  <li>BTST holding</li>
                  <li>How to handle psychological stuff</li>
                  <li>Trading setup</li>
                  <li>Investment things [end to end]</li>
                  <li>Trend confirmation before market starts</li>
                  <li>Tips about how the market is trapping</li>
                  <li>Fundamental and technical analysis in stocks</li>
                </ul>

                <div className="guidance">Complete guidance and support after classes with students group</div>
              </div>
            </CourseContent>
          
            {/* <div className="satandsun">
              <b>Only on weekends course details</b>
              <Logo
                src={weekend}
                alt="weekend"
                style={{ alignItems: "center" }}
              ></Logo>
            </div> */}
          </div>
          <div className="registration">
            <p>For registration message me in whatsapp</p>
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
