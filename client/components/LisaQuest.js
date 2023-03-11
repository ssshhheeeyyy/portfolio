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
      <section className="project-contributions">
        <h1>LISA QUEST</h1>
        <h2 className="project-mini-desc">
          Classic arcade style platformer game, developed with Phaser 3.
        </h2>
        <h2 className="project-mini-desc">
          Visit{' '}
          <a
            href="http://lisaquest.onrender.com/"
            target="_blank"
            aria-label="Link to deployed project website"
          >
            Lisa Quest Deployed Website
          </a>{' '}
          to play.
        </h2>
        <img
          src={opening}
          className="section-image"
          alt="Start scene on Lisa Quest. The background is black with stars, there is a Score and health bar at the top left, a platform simulating the ground with plants and rocks where the character, Lisa, stands. Hearts on the mid section of the screen."
        />
        <h2>
          Phaser is a 2D game framework for making HTML5 games for desktop and
          mobile web browsers, supporting Canvas and WebGL rendering.
        </h2>
      </section>

      <section className="project-contributions">
        <div className="images-container">
          <img
            src={firstFight}
            className="aside-image3"
            alt="First fight scene on Lisa Quest. This level has a golden yellow background, there is a floating platform and platform erupting from the ground where Lisa stands. There are enemies in the shape of robots coming from the top section of the screen and spiky plants and mushrooms on the ground."
          ></img>
          <img
            src={thirdFight}
            className="aside-image3"
            alt="Third fight scene from Lisa Quest. Lisa is in a cave with steel platforms, there are lights on the top of the cave and there is an enemy in the shape of a floating robot on the top center of the cave. There is also a pile of trash on the left bottom of the cave. "
          ></img>
          <img
            src={bossFight}
            className="aside-image3"
            alt="This is the Boss fight from Lisa Quest. Lisa is in a dark space with black walls and dark grated floor that also populate the ceiling. The boss is a large orange robot facing Lisa. There are traces of blood on the walls, a drilling machine on the far left with trash under it. There is also alien decor on the back wall. "
          ></img>
        </div>
        <h2>
          As part of my contributions to the team, I designed the world of the
          game by creating tilemaps in{' '}
          <a
            href="https://www.mapeditor.org/"
            target="_blank"
            aria-label="Link to the Tiled website."
          >
            Tiled
          </a>
          , created the scene component for each level and integrated the tiles
          into the scenes. I also designed the backgrounds in Illustrator.
        </h2>
      </section>
      <section className="project-contributions">
        <h2>
          I instantiated a local server, designed the leaderboard and created
          the form that allows the user to enter their score into the database.
          For this purpose, I created the back end routes that communicate with
          the database.
        </h2>
        <img
          src={leaderBoard}
          className="section-image"
          alt='  Leaderboad showing rank, score and names for users ranking from 1 to 5, with a black background filled with stars. Number 1, with score 30525 is user "ssss". Number 2 with score 28401 is user "ET". Number 3 with score 28400 is user "HAHA". Number 4 with score 20415 is user "NOMI". Number 5 with score 19040 is user "SSSS". There is also a Main Menu button on the bottom left corner. '
        ></img>
      </section>
      <section className="project-contributions">
        <h2>
          For the credits, I used sprites created by a team member and put
          together a fun clickable credit section. When you click on our names,
          you are redirected to our LinkedIn profiles.{' '}
          <img
            src={credits}
            id="bottom"
            className="section-image"
            alt='Credits section for Lisa Quest. The background is black with stars. There are 4 different sprites accounting for each member of the team, each with a white thought bubble coming from the sprites head. From top left to top right: Sprite wearing a hat, blue overalls and black and red striped top, its thought bubble reads: Jackie Manginelli. Next of it there is a sprite wearing grey pants and a mustard top with a thought bubble that reads "Naomi Brender". On the bottom right, the sprite is wearing a dark green jumper tied at the waist and a black top, its thought bubble reads "Lauren Baca" and on the bottom left, the sprite is wearing blue pants, purple top and sunglasses and its thought bubble reads "Sheyla De los Santos". There is a Main Menu bottom on the bottom left corner.'
          ></img>
        </h2>
      </section>
    </main>
  );
};

export default LisaQuest;
