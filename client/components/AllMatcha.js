import React from 'react';
import homeSnap from '../../public/all-matcha/home-snap.png';
import productsView from '../../public/all-matcha/products-view.png';
import inventoryView from '../../public/all-matcha/inventory-view.png';
import singleProduct from '../../public/all-matcha/single-product.png';
import singleProductAdmin from '../../public/all-matcha/single-product-admin.png';
import addProduct from '../../public/all-matcha/add-product.png';
import closeUp from '../../public/all-matcha/close-up.png';

const AllMatcha = () => {
  return (
    <main className="project-container">
      <section className="project-contributions">
        <h1>ALL MATCHA</h1>
        <h2 className="project-mini-desc">
          Fictional e-commerce website selling all things matcha.
          <br /> Click{' '}
          <a href="https://allmatcha.onrender.com" target="_blank">
            here
          </a>{' '}
          to visit website.
        </h2>
        <img src={homeSnap} className="section-image" />
        <h2>
          In creating this project, my team and I instantiated a local server
          powered by Express, designed the database schema and built a RESTful
          API. For the front end, we used React to construct our app and Redux
          to handle state.
        </h2>
      </section>

      <section className="project-contributions">
        <div className="images-container">
          <img
            src={productsView}
            id="single-product-view"
            className="aside-image2"
          ></img>
          <img src={inventoryView} className="aside-image2"></img>
        </div>
        <div className="inner-container">
          <h2>
            I developed the product's slice, from designing the database schema,
            creating the back end routes, as well as the react components and
            reducers for products. <br />
            There are two versions of the products view, one for a guest or
            signed in user, and another one for admins. In the admin view, the
            user is able to see the product's details and delete products. I
            also created a dashboard {'('}seen below{')'}, for the admin to add
            a new product.
          </h2>
          <img src={addProduct} className="small-image"></img>
        </div>
      </section>
      <section className="project-contributions-2">
        <h2>
          Equally, I produced two versions of the single products view. For the
          admin version, the user can update any field by simply typing on the
          specific boxes and clicking the update button.
        </h2>
        <div className="images-container">
          <img src={singleProduct} className="aside-image2"></img>
          <img src={singleProductAdmin} className="aside-image2"></img>
        </div>
      </section>
      <section className="project-contributions">
        <h2 id="bottom">
          In terms of styling, my team and I created wireframes on Figma and
          designed our site to have a fresh look. <br />I took charge of
          designing the logo and applying the CSS that styles the background,
          navigation bar, home page and products views, all while making sure I
          followed a responsive design approach.
        </h2>
      </section>
    </main>
  );
};

export default AllMatcha;
