import React from 'react';
import homeSnap from '../../public/all-matcha/home-snap.png';
import productsView from '../../public/all-matcha/products-view.png';
import inventoryView from '../../public/all-matcha/inventory-view.png';
import singleProduct from '../../public/all-matcha/single-product.png';
import singleProductAdmin from '../../public/all-matcha/single-product-admin.png';
import addProduct from '../../public/all-matcha/add-product.png';

const AllMatcha = () => {
  return (
    <main className="project-container">
      <section className="project-contributions">
        <h1>ALL MATCHA</h1>
        <h2 className="project-mini-desc">
          Fictional e-commerce website selling all things matcha.
        </h2>
        <h2 className="project-mini-desc">
          Visit the{' '}
          <a
            href="https://allmatcha.onrender.com"
            target="_blank"
            aria-label="Link to deployed project website."
          >
            All Matcha
          </a>{' '}
          deployed website to see the project.
        </h2>
        <img
          src={homeSnap}
          className="section-image"
          alt='Website All Matcha. The background is pink and green gradient. The navbar has a Home, Products, Users, Cart and Logout button, as well as a personalized Welcome message that reads: "Welcome Audrey! How about a cup of tea? The logo is centered on the screen and it reads all matcha. There is a center product image on the page with the following message: "Where you find all things Matcha. Shop now."'
        />
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
            alt="All matcha products view of a guest or regular user. There are nine products showcased with their names, price and an add to cart button per product."
          ></img>
          <img
            src={inventoryView}
            className="aside-image2"
            alt="All matcha products view of a logged in admin user. The products are itemized in a list. There is an add product button that allows the admin to add a product to inventory, there is also a delete button assigned to each product that allows for deletion of any specific product."
          ></img>
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
          <img
            src={addProduct}
            className="small-image"
            alt="Add a product dashboard view with the following fields to be filled out: product name, description, quantity, image url, price and a category dropdown to select from, as well as an add product button to submit the form."
          ></img>
        </div>
      </section>
      <section className="project-contributions">
        <h2>
          Equally, I produced two versions of the single products view. For the
          admin version, the user can update any field by simply typing on the
          specific boxes and clicking the update button.
        </h2>
        <div className="images-container">
          <img
            src={singleProduct}
            className="aside-image2"
            alt="Single product view for a regular user showing an image of the product on the left side. And on the right side the name of the product. A description below, its price and an add to cart button with a quantity selector."
          ></img>
          <img
            src={singleProductAdmin}
            className="aside-image2"
            alt="The single product for the admin view in which the admin can update an existing product. There is an image of the product to the left. And to the right there are the following pre-filled fields to be updated if necessary: product name, description, quantity, image url, proce and category. Followed by an update button to submit."
          ></img>
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
