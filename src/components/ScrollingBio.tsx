import React from 'react';
// import './ScrollingBio.scss';

function ScrollingBio() {
  return (
    <section className='ScrollingBio'>
      <div className='appContainer'>
        <p id='start'>
          Welcome to my coding adventures!
        </p>
        <h1 className='episodeTitle'>
          EPISODE 2019
        </h1>
        <sub>
          Full Stack Engineering
        </sub>
        <div id='titles'>
          <div id='titlecontent'>
            <p>
              It is a period of career transition. 
              In the last episode, I worked my way to the top of the EDA software team. 
              I specialized in circuit design software for radio-frequency semiconductors.
            </p>
            <p>
              In this episode, I plunge into the world of full stack software. 
              The industry is an area of great opportunity and significant challenge. 
              I bring with me tools of past success: my work ethic, a sharp eye for detail, 
              and a knowledge that no learning curve is too steep.
            </p>
            <p>
              Success will be judged by those people I can help. 
              Customers will use the software. 
              I will put myself in their shoes and gain their perspective to guide my decisions.
              I will help my teammates. Foremost, we will have fun while we work. 
              I believe great accomplishments are a sign of even greater teamwork. 
              I strive to bring my full self to the team 
              and to foster an environment where this feels natural for all teammates.
            </p>
            <p>
              Now let's get coding ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingBio;
