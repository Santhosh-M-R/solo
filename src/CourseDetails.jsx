import styled from "styled-components";
import weekend from "./images/logo/weekend.jpeg";
import alldays from "./images/logo/alldays.jpeg";
import community from "./images/Community/community.jpeg";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const curriculum = [
  {
    day: "Day 1",
    topics: [
      "Introduction to IPOs",
      "Bull and Bear Market Trends",
      "Stock Market Crashes/Corrections",
      "How to Buy/Sell Shares",
    ],
  },
  {
    day: "Day 2",
    topics: [
      "Market conditions",
      "Options Basics",
      "How options working",
      "How to escape from trap"
    ],
  },
  {
    day: "Day 3",
    topics: [
      "Options - Trade Setup - Groww 4 chart",
      "Levels based entries",
    ],
  },
  {
    day: "Day 4",
    topics: ["OI tool", "Double the Money Concept"],
  },
  {
    day: "Day 5",
    topics: [
      "Understanding How Investments Work",
      "SIP vs. Lumpsum Investments",
      "Investment During Bear Market/Stock Market Crash",
      "Long-Term Investment in Stocks and Mutual Funds",
      "Technical Analysis and Chart Reading",
      "Fundamental Analysis of Stocks",
    ],
  },
  {
    day: "Day 6",
    topics: ["Volume-Based Swing Setup", "Swing Screener"],
  },
];

const communityGroups = [
  {
    title: "STT - Common",
    description:
      "General information, plus a weekend meeting every two weeks (Sunday 11:30am)",
  },
  {
    title: "STT - Options",
    description:
      "Everyday levels info and one entry info will be posted, two weeks once nifty expiry day live google meet session with entry info",
  },
  {
    title: "STT - Swing",
    description: "Stocks that are ready for swing entries are posted regularly",
  },
];

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

  .pricing-summary {
    background: #eef1ff;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    font-weight: 600;
  }

  .pricing-summary p {
    margin: 0;
    font-size: 16px;
  }

  .flow {
    background: #f7fbff;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    line-height: 1.5;
  }

  .flow-item {
    background: #ffffff;
    border-radius: 10px;
    padding: 12px;
    border: 1px solid rgba(102, 71, 242, 0.2);
  }

  .whatsapp-cta {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  .live-course,
  .both-course {
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
    .timing {
      padding: 10px;
    }
  }

  @media only screen and (min-width: 610px) {
    font-size: 18px;
    .live-course,
    .both-course {
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
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

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
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

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

  .community-offer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .community-fee {
    margin: 0;
    font-size: 16px;
  }

  .combo-note {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #00ff00;
  }
`;

const CourseDetails = () => {
  return (
    <>
      <CourseMessage>
        <h2>Course Details</h2>
        <div className="course-info">
          <h3>Mode of training: Online via zoom</h3>
          <div className="pricing-summary">
            <p>
              <strong>Course fee:</strong> ₹6,000
            </p>
            <p>
              <strong>Community fee (one-time):</strong> ₹6,000
            </p>
            <p>
              <strong>Course + Community combo:</strong>{" "}
              <s style={{ color: "#999" }}>₹12,000</s>{" "}
              <strong style={{ color: "#00FF00", fontSize: "18px" }}>
                ₹8,899
              </strong>
            </p>
          </div>
          <div className="flow">
            <strong>Simple registration flow</strong>
            <div className="flow-item">
              <p>
                <strong>Step 1:</strong> Choose whether you want the course only
                (₹6,000) or the course + community support combo (₹8,899). Note:
                Community support is available only for course students.
              </p>
            </div>
            <div className="flow-item">
              <p>
                <strong>Step 2:</strong> Pay ₹6,000 for course-only{" "}
                <strong>or ₹8,899 for combo (course + community)</strong>.
              </p>
            </div>
            <div className="flow-item">
              <p>
                <strong>Step 3:</strong> Message via WhatsApp for confirmation
                and we will send you the relevant access details. Please pay the
                chosen amount to 8778890619 through Gpay or paytm, then share the payment screenshot
                on WhatsApp to confirm registration.
              </p>
            </div>
          </div>
          <div className="whatsapp-cta">
            <Button
              variant="contained"
              href="https://api.whatsapp.com/send/?phone=918778890619&text&app_absent=0"
              target="__blank"
              style={{ background: "#00FF00" }}
            >
              <WhatsAppIcon style={{ marginRight: 6 }} />
              Chat on WhatsApp
            </Button>
          </div>
          {/* <p>Either you can take live classes or recorded classes</p> */}

          <div className="live-course">
            <AdvancedCourseContent>
              <div className="heading">
                <h2>NEXT BATCH : March 06th, 2026</h2>
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
                  {curriculum.map((session) => (
                    <li key={session.day}>
                      <strong>{session.day}:</strong>
                      <ul>
                        {session.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="guidance">
                <br></br>
                ------------------------------------------
                ------------------------------------------
                <br></br>
                For Solo Trader Tamil community support check One time premium
                subscription
              </div>
            </AdvancedCourseContent>
          </div>

          <hr />
          <hr />

          <div className="both-course">
            <AdvancedCourseContent>
              <div className="community-offer">
                <h4>
                  Solo Trader Tamil Community Support
                  <br />
                  <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                    (Available only for course students)
                  </span>
                </h4>
                <p className="community-fee">
                  <strong>Community fee (one-time):</strong> ₹6,000
                  <br />
                  <span style={{ fontSize: "14px" }}>
                    One-time payment for lifetime access
                  </span>
                  <br />
                  <br />
                  <strong>Combo offer (Course + Community):</strong>{" "}
                  <s style={{ color: "#ccc" }}>₹12,000</s>{" "}
                  <strong style={{ color: "#00FF00" }}>₹8,899</strong> for
                  course + community
                </p>
                <p>Solo Trader Tamil community includes three groups</p>
                <img
                  src={community}
                  alt="Community"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    margin: "10px 0",
                    borderRadius: "8px",
                  }}
                />
                <ul className="community">
                  {communityGroups.map((group) => (
                    <li key={group.title}>
                      <strong>{group.title}:</strong> {group.description}
                    </li>
                  ))}
                </ul>
              </div>
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
