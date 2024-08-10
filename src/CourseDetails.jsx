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


const BasicsCourseContent = styled.div`
  background: rgb(102, 71, 242);
  padding: 15px 15px 30px 15px;
  width: 400px;
  color: white;
  margin: 0;
  border: 2px solid black;
  border-radius: 10px;

  > .heading > p {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }

  > .timing {
    padding: 20px 5px 0 20px;
    font-size: 15px;

    p {
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 15px;
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
    
    li {
      margin-bottom: 5px;
      font-size: 15px;
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


const AdvancedCourseContent = styled.div`
background: rgb(102, 71, 242);
padding: 15px 15px 30px 15px;
width: 400px;
color: white;
margin: 0;

border: 2px solid black;
border-radius: 10px;

> .heading > p {
  font-size: 20px;
  padding: 0;
  margin: 0;
}

> .timing {
  padding: 20px 5px 0 20px;
  font-size: 15px;

  p {
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 15px;
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
  
  li {
    margin-bottom: 5px;
    font-size: 15px;
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

          <div className="both-course"> 
            <BasicsCourseContent>
            <div className="heading">
              <h3>Solo Trader Tamil</h3>
              <p>Stock market basics</p>
              <p>Fee: 1000 rs</p>
              <b>Classes will be on weekends</b>
              <p className="timing">
                7am to 8am <br />
                Recording will be provided <br />for every class
              </p>
            </div>
              <div className="class-content">
                <h4>Contents:</h4>
                <ul>
                  <li><strong>Day 1:</strong> 
                    <ul>
                      <li>Introduction to IPOs</li>
                      <li>Bull and Bear Market Trends</li>
                      <li>Stock Market Crashes/Corrections</li>
                      <li>How to Buy/Sell Shares</li>
                    </ul>
                  </li>
                  <li><strong>Day 2:</strong>
                    <ul>
                      <li>Understanding How Investments Work</li>
                      <li>SIP vs. Lumpsum Investments</li>
                      <li>Fundamental Analysis of Stocks</li>
                    </ul>
                  </li>
                  <li><strong>Day 3:</strong>
                    <ul>
                      <li>Technical Analysis and Chart Reading</li>
                      <li>Swing Trading Strategies</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="guidance"> -- Note: Community group access only <br/> for advanced course</div>
            </BasicsCourseContent>
            <hr/>
            <hr/>

            <AdvancedCourseContent>
            <div className="heading">
              <h3>Solo Trader Tamil</h3>
              <p>Stock market Advance</p>
              <p>Fee: 4000 rs</p>
              <b>Classes will be on <br /> Weekdays and Weekends</b>
              <p className="timing">
                Weekend timings- 9am to 10am <br />
                Weekday timings - 9pm to 10pm<br />
                Recording will be provided <br />for every class
              </p>
            </div>
            <div className="class-content">
              <h4>Contents:</h4>
              <ul>
                <li><strong>Day 1:</strong> 
                  <ul>
                    <li>Options Basics + Double the Money Concept</li>
                    <li>Options - Trade Setup 1</li>
                  </ul>
                </li>
                <li><strong>Day 2:</strong>
                  <ul>
                    <li>Options - Trade Setup 2</li>
                    <li>Options - Gap Up/Down Strategy</li>
                  </ul>
                </li>
                <li><strong>Day 3:</strong>
                  <ul>
                    <li>Options - BTST Strategy</li>
                    <li>Options - OI Data Manipulation</li>
                  </ul>
                </li>
                <li><strong>Day 4:</strong>
                  <ul>
                    <li>Investment During Bear Market/Stock Market Crash</li>
                    <li>Long-Term Investment in Stocks and Mutual Funds</li>
                  </ul>
                </li>
                <li><strong>Day 5:</strong>
                  <ul>
                    <li>Volume-Based Swing Setup</li>
                    <li>Swing Screener</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="guidance">Complete guidance and support after classes with students group</div>
            </AdvancedCourseContent>
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
