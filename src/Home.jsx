import logo from "./images/logo/stt-logo.jpg";
import styled from "styled-components";

const Logo = styled.img`
  width: 60%;
`;

const Message = styled.div`
  top: -50px;
  padding: 20px 20px 20px 40px;
  @media only screen and (max-width: 600px) {
    position: relative;
    .intro, .small-info {
      padding 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo-welcome {
        display:flex;
        flex-direction: column;
        align-items: center;
      }
      > img {
        width: 100%;
      }
      .welcome {
        align-items: center;
        text-align: center;
        font-size: 30px;
      }
    }
    > h2{
      text-align: center;
    } 
  }

  @media only screen and (min-width: 610px) {
    .logo-welcome {
      display: flex;
      justify-content: space-around;
      >.welcome {
        text-align: center;
        font-size: 40px;
      }
      > img {
        width: 20%;
      }
    }
    .who {
      font-size: 30px;
      padding: 40px;
      text-align:center;
    }
    .small-info{
      font-size: 20px;
      padding: 40px;
      text-align:center;
    }
    h2 {
      text-align: center;
    }
  }
  
`;

const Home = () => {
  return (
    <>
      <Message>
        <div className="intro">
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
        <div className="small-info">
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
          <p>
            Double the money means for example taking 5% profit everyday with
            capital of 5k for 20 days.
            <p>5% * 20 days = 100 %</p>
            <p>250 rs * 20 days = 5000 rs</p>
          </p>
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
