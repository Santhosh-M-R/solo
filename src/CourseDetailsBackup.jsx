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
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    text-align: center;
    margin: 0;
  }

  .course-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .live-course, .both-course {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .registration {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    .timing { padding: 10px; }
  }

  @media only screen and (min-width: 610px) {
    font-size: 18px;
    .live-course, .both-course {
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    }
  }
`;

const BasicsCourseContent = styled.div`
  background: rgb(102, 71, 242);
  padding: 20px;
  width: 100%;
  color: white;
  margin: 0;
  border: 2px solid rgba(0,0,0,0.15);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);

  > .heading > p {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }

  > .duration-details {
    text-align: left; /* Align content to the left */
    h5 {
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }

    b {
      margin: 0;
      padding: 0;
    }
  }

  > .timing {
    padding: 12px 0 0 0;
    font-size: 15px;

    p {
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 15px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
    }
  }

  > .class-content {
    padding-left: 4px;
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
  }

  > .guidance {
    text-align: center;
    font-size: 22px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    padding: 12px;
  }
`;

const AdvancedCourseContent = styled.div`
  background: rgb(102, 71, 242);
  padding: 20px;
  width: 100%;
  color: white;
  margin: 0;
  border: 2px solid rgba(0,0,0,0.15);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);

  > .heading > p {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }

  > .timing {
    padding: 12px 0 0 0;
    font-size: 15px;

    p {
      margin: 0;
      padding: 0;
      text-align: left;
      font-size: 15px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
    }
  }

  > .class-content {
    padding-left: 4px;
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
      font-size: 22px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      padding: 12px;
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
          {/* <p>Either you can take live classes or recorded classes</p> */}

          <div className="live-course">
            <AdvancedCourseContent>
              <div className="heading">
                <h3>Solo Trader Tamil</h3>
                <p>Stock market end to end live course </p>
                <p>
                  Duration: 6 Days <br />
                  Fee: 6000 rs
                </p>
                <b>
                  Classes will be on <br /> Friday, saturday, sunday and monday
                </b>
                <p className="timing">
                  Timings - 9pm to 10pm <br />
                  Recording will be provided <br />
                  for every class
                </p>
              </div>
              <div className="class-content">
                <h4>Contents:</h4>
                <ul>
                  <li>
                    <strong>Day 1:</strong>
                    <ul>
                      <li>Introduction to IPOs</li>
                      <li>Bull and Bear Market Trends</li>
                      <li>Stock Market Crashes/Corrections</li>
                      <li>How to Buy/Sell Shares</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 2:</strong>
                    <ul>
                      <li>Understanding How Investments Work</li>
                      <li>SIP vs. Lumpsum Investments</li>
                      <li>Investment During Bear Market/Stock Market Crash</li>
                      <li>Long-Term Investment in Stocks and Mutual Funds</li>
                      <li>Technical Analysis and Chart Reading</li>
                      <li>Fundamental Analysis of Stocks</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 3:</strong>
                    <ul>
                      <li>Options Basics + Double the Money Concept</li>
                      <li>Options - Trade Setup - Groww 4 chart</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 4:</strong>
                    <ul>
                      <li>OI tool</li>
                      <li>Market conditions</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 5:</strong>
                    <ul>
                      <li>Level based entries</li>
                      <li>Options - BTST Strategy</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 6:</strong>
                    <ul>
                      <li>Volume-Based Swing Setup</li>
                      <li>Swing Screener</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="guidance">
              <br></br>
                ------------------------------------------
                <br></br>
                Guidance and support in batch group only for 2 months
                <br></br>
                ------------------------------------------
                <br></br>
                For furthur Solo Trader Tamil community support 
                check One time premium subscription
              </div>
            </AdvancedCourseContent>
          </div>

          <hr />
          <hr />

          <div className="both-course">
            {/* <BasicsCourseContent>
              <div className="heading">
                <h3>Solo Trader Tamil</h3>
                <p>Stock Market Basics</p>
                <div className="duration-details">
                  <p>
                    Duration: 3 Days <br />
                    Fee: ₹1500 <br />
                    <b>Recorded Classes</b>
                  </p>
                </div>
              </div>
              <div className="class-content">
                <h4>Contents:</h4>
                <ul>
                  <li>
                    <strong>Day 1:</strong>
                    <ul>
                      <li>Introduction to IPOs</li>
                      <li>Bull and Bear Market Trends</li>
                      <li>Stock Market Crashes/Corrections</li>
                      <li>How to Buy/Sell Shares</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 2:</strong>
                    <ul>
                      <li>Understanding How Investments Work</li>
                      <li>SIP vs. Lumpsum Investments</li>
                      <li>Fundamental Analysis of Stocks</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 3:</strong>
                    <ul>
                      <li>Technical Analysis and Chart Reading</li>
                      <li>Swing Trading Tips</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="guidance">
                Note: Batch group support only for advanced or end to end live course
              </div>
            </BasicsCourseContent> */}

            <hr />
            <hr />

            {/* <AdvancedCourseContent>
              <div className="heading">
                <h3>Solo Trader Tamil</h3>
                <p>Stock market Advanced course </p>
                <p>
                  Duration: 5 Days <br />
                  Fee: 5000 rs
                </p>
                <b>Recorded classes</b>
              </div>
              <div className="class-content">
                <h4>Contents:</h4>
                <ul>
                  <li>
                    <strong>Day 1:</strong>
                    <ul>
                      <li>Options Basics + Double the Money Concept</li>
                      <li>Options - Trade Setup 1</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 2:</strong>
                    <ul>
                      <li>Options - Trade Setup 2</li>
                      <li>Options - Gap Up/Down Strategy</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 3:</strong>
                    <ul>
                      <li>Options - BTST Strategy</li>
                      <li>Options - OI Data Manipulation</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 4:</strong>
                    <ul>
                      <li>Investment During Bear Market/Stock Market Crash</li>
                      <li>Long-Term Investment in Stocks and Mutual Funds</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Day 5:</strong>
                    <ul>
                      <li>Volume-Based Swing Setup</li>
                      <li>Swing Screener</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="guidance">
                Complete guidance and support in batch group for 2 months
              </div>
            </AdvancedCourseContent>

            <hr /> */}

            <AdvancedCourseContent>
              <h4>
                For furthur Solo Trader Tamil students community support
                <br></br>
                One time premium subscription
                <br></br>
                Fee: ₹4,000 (one-time payment only) Get lifetime access
                <br></br>
                Solo Trader Tamil community includes three groups
                <ul className="community">
                  <li>STT - Common [General information and two weeks once sunday morning 11.30 am weekend meeting]</li>
                  <li>STT - Options [Everyday levels info and one entry info will be posted]</li>
                  <li>STT - Swing [Stocks which are ready to take swing entries will be posted]</li>
                </ul>
              </h4>
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
