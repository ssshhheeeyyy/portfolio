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
          <br /> Click{' '}
          <a href="https://github.com/ssshhheeeyyy/A-Room" target="_blank">
            here
          </a>{' '}
          to visit the repository on Github.
        </h2>
        <img src={upperView} className="section-image" />
        <h2 className="three">
          Three.js is a JavaScript library used to create 3D content for the
          web.
        </h2>
      </section>
      <section className="project-contributions">
        <div className="images-container">
          <img src={frontView} className="aside-image"></img>
        </div>
        <h2>
          I built a 3D room, rendering the images of my friend's pets, an
          animated ball on top and a torus knot on the corner. I also added
          different light sources and shadows to give a more realistic look, as
          well as a texture to the animated ball, using the texture loader.
        </h2>
      </section>
      <section className="project-contributions-2">
        <h2>
          In order to navigate the room and explore around, I added Orbit
          Controls.
        </h2>
        <div className="images-container">
          <img src={closeUpCorner} className="aside-image2"></img>
          <img src={bottomUpView} className="aside-image2"></img>
        </div>
      </section>
      <section className="project-contributions">
        <h2>
          To aid with the design of the room and intensity of the lights, I
          added an user interface that allowed me to play around with specified
          object properties, powered by Dat.GUI.
        </h2>
        <img src={frontViewGui} id="bottom" className="section-image"></img>
      </section>
    </main>
  );
};

export default Room;
