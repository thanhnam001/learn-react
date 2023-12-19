import "./ProductView.scss";
import sneaker1 from "../../assets/images/sneaker1.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Product = () => {
  const [mainView, setMainView] = useState(sneaker1);
  const [slideView, setSlideView] = useState(false);
  const imageSet = [sneaker1, sneaker2, sneaker3, sneaker4];
  return (
    <div className="product-container">
      <div className="content-left">
        <div className="product-main-view">
          <img
            src={mainView}
            alt="main-view"
            onClick={() => setSlideView(true)}
          />
        </div>
        <Lightbox
          open={slideView}
          close={() => setSlideView(false)}
          plugins={[Thumbnails, Zoom]}
          thumbnails={{
            position: "bottom",
            width: 180,
            height: 120,
            border: 2,
            borderRadius: 15,
          }}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 2,
          }}
          index={imageSet.indexOf(mainView)}
          slides={[
            { src: sneaker1 },
            { src: sneaker2 },
            { src: sneaker3 },
            { src: sneaker4 },
          ]}
        />
        <div className="product-other-view">
          <div className="image-small">
            <img
              src={sneaker1}
              alt=""
              onClick={() => setMainView(sneaker1)}
              className={sneaker1 === mainView ? "active" : ""}
            />
          </div>
          <div className="image-small">
            <img
              src={sneaker2}
              alt=""
              onClick={() => setMainView(sneaker2)}
              className={sneaker2 === mainView ? "active" : ""}
            />
          </div>
          <div className="image-small">
            <img
              src={sneaker3}
              alt=""
              onClick={() => setMainView(sneaker3)}
              className={sneaker3 === mainView ? "active" : ""}
            />
          </div>
          <div className="image-small">
            <img
              src={sneaker4}
              alt=""
              onClick={() => setMainView(sneaker4)}
              className={sneaker4 === mainView ? "active" : ""}
            />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">Super shoes</div>
        <div className="price">30.000.000VND</div>
        <div className="size">Size: 40</div>
        <div className="action">
          <label className="quantity">Quantity</label>
          <input type="number" placeholder={1} min={1}></input>
          <button type="submit">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
