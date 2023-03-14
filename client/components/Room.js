import React from 'react';
import upperView from '../../public/room/upper-view.png';
import frontView from '../../public/room/front-view.png';
import closeUpCorner from '../../public/room/close-up-corner.png';
import bottomUpView from '../../public/room/ball-bottom-up.png';
import frontViewGui from '../../public/room/front-view-with-gui.png';

const Room = () => {
  return (
    <main className="project-container">
      <section className="project-contributions">
        <h1>ROOM</h1>
        <h2 className="project-mini-desc">
          3D room created as a fun exploration of Three.js. <br />
          Bundled with Parcel.
        </h2>
        <h2 className="project-mini-desc">
          Visit the{' '}
          <a href="https://github.com/ssshhheeeyyy/A-Room" target="_blank">
            repository
          </a>{' '}
          on Github.
        </h2>
        <img
          src={upperView}
          className="section-image"
          alt="3D room on a black background. There are three purple walls, a torus knot on the right top corner of the room and a sphere on the center top."
        />
        <h2 className="three">
          Three.js is a JavaScript library used to create 3D content for the
          web.
        </h2>
      </section>
      <section className="project-contributions">
        <div className="images-container">
          <img
            src={frontView}
            className="aside-image"
            alt="Front view of a 3D room. There are three walls and a floor, all purple. There are images on the walls, a yellow torus knot on the right corner and a sphere on the top center."
          ></img>
        </div>
        <h2>
          I built a 3D room, rendering the images of my friend's pets, an
          animated ball on top and a torus knot on the corner. I also added
          different light sources and shadows to give a more realistic look, as
          well as a texture to the animated ball, using the texture loader.
        </h2>
      </section>
      <section className="project-contributions">
        <h2>
          In order to navigate the room and explore around, I added Orbit
          Controls.
        </h2>
        <div className="images-container">
          <img
            src={closeUpCorner}
            className="aside-image2"
            alt="Close up of a yellow torus knot sitting on the corner."
          ></img>
          <img
            src={bottomUpView}
            className="aside-image2"
            alt="Bottom up view of the sphere."
          ></img>
        </div>
      </section>
      <section className="project-contributions">
        <h2>
          To aid with the design of the room and intensity of the lights, I
          added an user interface that allowed me to play around with specified
          object properties, powered by Dat.GUI.
        </h2>
        <img
          src={frontViewGui}
          id="bottom"
          className="section-image"
          alt="Straight view of a 3D generated room with three green walls and purple floor. Images of gods on one wall, sphere on the top center and torus knot shape on the right top corner. There is algo a gui on the right top corner of the image."
        ></img>
      </section>
    </main>
  );
};

export default Room;
