import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="
            Xiaomi 11T Pro 5G Hyperphone(Celestial Magic,8GB RAM,128GB Storage)|SD 888 5G|"
            price={39999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Od5yJbohL._SX679_.jpg"
          />

          <Product
            id="12321341"
            title="
            Lenovo Legion 5 AMD Ryzen 7 5800H 15.6 (39.62cm) Gaming Laptop"
            price={108990}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Er61SxBhL._SL1500_.jpg"
          />
          
          <Product
            id="49538094"
            title="ASUS ROG Strix Hero II GL504GV-ES034T 15.6-inch Gaming Laptop"
            price={14999}
            rating={4}
            image="https://m.media-amazon.com/images/I/810DqvwQKzL._AC_SX960_SY720_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={896}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

          <Product
            id="1232134"
            title="Canon Pixma G3000 All-in-One Wireless Ink Tank Colour Printer"
            price={13999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61saGX0RILL._SL1040_.jpg"
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={14999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={49999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9899}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59899}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id="3254354345"
            title="Adidas Men's Clinch-x M Running Shoe"
            price={1899}
            rating={4}
            image="https://m.media-amazon.com/images/I/812KE-vHKSL._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 139.7 cm (55 inches) 4K Ultra HD Smart LED TV UA55AU9070ULXL (Black) (2021 Model)"
            price={74999}
            rating={4}
            image="https://m.media-amazon.com/images/I/616iVJbOcXL._SX522_.jpg"
          />
          <Product
            id="90829332"
            title="Redmi 164 cm (65 inches) 4K Ultra HD Android Smart LED TV X65|L65M6-RA (Black) (2021 Model)"
            price={61999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71njEHrIybL._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
