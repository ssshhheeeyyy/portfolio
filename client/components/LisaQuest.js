import React from 'react';
import opening from '../../public/lisa/opening.png';
import leaderBoard from '../../public/lisa/leader-board.png';
import firstFight from '../../public/lisa/first-fight.png';
import thirdFight from '../../public/lisa/third-fight.png';
import bossFight from '../../public/lisa/boss-fight.png';
import credits from '../../public/lisa/credits.png';

const LisaQuest = () => {
  return (
    <main className="project-container">
      <section className="project-intro">
        <h1>LISA QUEST</h1>
        <h2 className="project-mini-desc">
          Classic arcade style platformer game developed with Phaser 3.
          <br /> Click{' '}
          <a href="http://lisaquest.onrender.com/" target="_blank">
            here
          </a>{' '}
          to play.
        </h2>
        <img src={opening} className="section-image" />
        <h2>
          Phaser is a 2D game framework for making HTML5 games for desktop and
          mobile web browsers, supporting Canvas and WebGL rendering.
        </h2>
      </section>

      <section className="project-contributions1">
        <div className="images-container">
          <img src={firstFight} className="aside-image"></img>
          <img src={thirdFight} className="aside-image"></img>
          <img src={bossFight} className="aside-image"></img>
        </div>
        <h2>
          As part of my contributions to the team, I designed the world of the
          game by creating tilemaps in{' '}
          <a href="https://www.mapeditor.org/" target="_blank">
            Tiled
          </a>
          , created the scene component for each level and integrated the tiles
          into the scenes. I also designed the backgrounds in Illustrator.
        </h2>
      </section>
      <section className="project-contributions2">
        <h2>
          I developed the leaderboard and instantiated the form that allows the
          user to enter their score in the database. For this purpose, I
          instantiated a local server and implemented a RESTful API to
          communicate with the database.
        </h2>
        <img src={leaderBoard} className="aside-image"></img>
      </section>
      <section className="project-contributions3">
        <img src={credits} className="section-image"></img>
        <h2 id="bottom">
          For the credits section, I used sprites created by a team member and
          put together a fun clickable credit section. When you click on our
          names, you are redirected to our LinkedIn profiles.{' '}
        </h2>
      </section>
    </main>
  );
};

export default LisaQuest;
