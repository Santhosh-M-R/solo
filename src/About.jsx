import styled from "styled-components";

const AboutMessage = styled.div`
  padding: 20px;
  top: -50px;
  @media only screen and (max-width: 600px) { 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      padding: 0;
      margin: 0;
    }
    >.about-info{
      padding: 0 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      > b{
          text-align: center;
      }
    }
  }
  


  @media only screen and (min-width: 610px) {
    padding: 40px;
    font-size: 20px;
    display: flex: 
    flex-direction: column;
    text-align: center;
    h2 {
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <>
      <AboutMessage>
        <h2>About</h2>
        <div className="about-info">
          <p>
            We <b>Solo Trader Tamil</b> offering complete beginner to advanced
            course in tamil to make everyone to earn money in trading
          </p>
          <p>
            Namma trading classes la join pannanum nu nenaikuravanga check the
            course details in course details menu.
          </p>
          <b>
            "Earning money is easy but earning money using the earned money is
            difficult"
          </b>
          <p>
            Oru job kedacha namaku regular income varum konjama earn pannalam
            athu easy because any job pannale money konjama kedaikum but antha
            job la earn panra money ah vachu again money earn panrathu than
            kastam, trading la pannalam but nalla learn panitu pannanum ilana
            heavy ah losses aagum
          </p>
        </div>
        <h2 id="course-details">_______________</h2>
      </AboutMessage>
    </>
  );
};

export default About;
