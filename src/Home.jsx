import logo from "./images/logo/stt-logo.jpg";
import styled from "styled-components";

const Logo = styled.img`
  width: 60%;
  max-width: 420px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
`;

const Message = styled.div`
  top: -50px;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .section-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    padding: 24px;
  }

  .intro, .small-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .logo-welcome {
    display:flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
  }

  .welcome {
    align-items: center;
    text-align: center;
    font-size: 32px;
    line-height: 1.2;
    margin: 0;
  }

  .who {
    font-size: 22px;
    padding: 16px 0 0 0;
    text-align:center;
    margin: 0;
  }

  .small-info{
    font-size: 18px;
    text-align:left;
  }

  h2 {
    text-align: center;
    margin: 8px 0 0 0;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    padding: 20px;
    .logo-welcome {
      flex-direction: column;
    }
    > h2{
      text-align: center;
    }
  }

  @media only screen and (min-width: 610px) {
    .logo-welcome {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
    > .intro .welcome {
      text-align: center;
      font-size: 42px;
    }
    .who {
      font-size: 28px;
      padding: 16px 24px;
    }
    .small-info{
      font-size: 20px;
      padding: 8px 24px 24px 24px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Message>
        <div className="intro section-card">
          <div className="logo-welcome">
            <p className="welcome">
              Welcome <br /> to <br />
              Solo Trader Tamil
            </p>
            <Logo src={logo} alt="Logo" style={{ alignItems: "center" }}></Logo>
          </div>
          <p className="who">
            This is Santhosh M R, doing trading for two things building my
            wealth through investment and generating passive income from stocks.
          </p>
          <h2 className="start">_______________</h2>
        </div>
        <div className="small-info section-card">
          <h2> Quick intro about me</h2>
          <h3> How i become a trader instead of investor?</h3>
          <p>
            I started from investment, investing in mutual funds as a first
            thing and am believing mutual funds will make me rich one day and
            then i realised it will take more time lets say it will take about
            20 years, then i slowly checking for investing in stocks. Stocks
            like growth stocks, dividend stock and seasonal stocks, then
            realised stocks will make me rich but not too soon, so i planned to
            do intraday in stocks and then made only few money but more losses.
            Started checking about courses of stock market in instagram and
            learned few things from 3 courses but not know how to do it
            properly, so i started designing by own way of doing trading, faced
            heavy losses because of emotional trading, gambling and not having
            patience, then analysed trading stuffs everyday and in weekend
            checked how i did in past week, slowly tried double the money
            concept and did that in almost 20 days with capital of 7k.
          </p>
          <h3>After double the money concept how it changed me?</h3>
          <div>
            <p>
              Double the money means for example taking 5% profit everyday with
              capital of 5k for 20 days.
            </p>
            <p>5% * 20 days = 100 %</p>
            <p>250 rs * 20 days = 5000 rs</p>
          </div>
          <p>
            The thing here is when we did this then we will get to know about
            patience, emotions and how to be cool in difficult times, then slowly
            increased lots in options trading and make it consistency. 
          </p>
        </div>
        <h2 id="about">_______________</h2>
      </Message>
    </>
  );
};

export default Home;
