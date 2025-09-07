import styled from "styled-components";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const ContactsMessage = styled.div`
padding: 20px 20px 20px 40px;
  top: 20px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  > .contact-info {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 20px;
    width: 100%;
    .contact-title {
      grid-column: 1 / -1;
      width: 100%;
      text-align: center;
      padding: 12px 16px;
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      font-size: 20px;
    }
    > div{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    .telegram-channel, .telegram-investment, .telegram-trading, .instagram, .youtube {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 100%;
      max-width: 520px;
      margin: 10px;
      padding: 12px 20px 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      border-radius: 16px;
      background: #ffffff;
    }
    .instagram-button {
        background: #f09433; 
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
        background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }
  }
  @media only screen and (max-width: 600px) { 
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    > h2 {
      margin: 0;
    }
    .contact-info { width: 100%; }
    .MuiButton-root { width: 100%; }
  }


  @media only screen and (min-width: 610px) { 
    font-size: 20px;
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    > h2 {
      margin: 0;
    }
    > .contact-info { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  
`;

const Contact = () => {
  return (
    <>
      <ContactsMessage>
        <h2>Contact</h2>
        <div className="contact-info">
            <div className="contact-title">
              <b>Solo Trader Tamil</b>
            </div>
            <div className="instagram">
              <p>Instagram</p>
              <p style={{ margin: "0" }}>
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
              </p>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  href="https://instagram.com/solo.trader.tamil?igshid=YmMyMTA2M2Y="
                  target="__blank"
                  className="instagram-button"
                >
                  <InstagramIcon />
                  <b
                    style={{ margin: "0", padding: "0 5px", color: "#FFFFFF" }}
                  >
                    Instagram
                  </b>
                </Button>
              </Stack>
            </div>

            <div className="youtube">
              <p>Youtube</p>
              <p style={{ margin: "0" }}>
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
              </p>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  href="https://appopener.com/yt/6t3cxuuxi"
                  style={{ background: "#FE0000" }}
                  target="__blank"
                >
                  <YouTubeIcon />
                  <b
                    style={{ margin: "0", padding: "0 5px", color: "#FFFFFF" }}
                  >
                    Youtube
                  </b>
                </Button>
              </Stack>
            </div>

            <div className="telegram-channel">
              <p>Telegram channel</p>
              <p style={{ margin: "0" }}>
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
                <ArrowDownwardIcon />
              </p>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  href="https://t.me/solo_trader_tamil"
                  style={{ background: "#0088cc" }}
                  target="__blank"
                  className="message_send"
                >
                  <TelegramIcon />
                  <b
                    style={{ margin: "0", padding: "0 5px", color: "#FFFFFF" }}
                  >
                    Telegram channel
                  </b>
                </Button>
              </Stack>
            </div>
        </div>
        <h2 id="students-profits">_______________</h2>
      </ContactsMessage>
    </>
  );
};

export default Contact;
