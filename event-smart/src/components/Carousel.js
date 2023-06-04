import Carousel from 'react-bootstrap/Carousel';
import home_image1 from '../home_images/jake-game-night-1024x359.jpeg';
import home_image2 from '../home_images/lm-01-1024x359.jpeg';
import home_image3 from '../home_images/jcc-curved-archway-1024x359.jpeg';
import home_image4 from '../home_images/phc-conv1-1024x359.jpeg';
import home_image5 from '../home_images/jumping-jake-1024x359.jpeg';
import home_image6 from '../home_images/FullSizeRender-2-1024x335.jpeg';
import home_image7 from '../home_images/stage1-1024x359.jpeg';
import home_image8 from '../home_images/mask-1024x359.jpeg';
import home_image9 from '../home_images/jonah-sean-1024x359.jpeg';
import home_image10 from '../home_images/IMG_5905.JPG-1024x267.jpeg';






function CarouselItem() {
  return (
    <Carousel className='mt-3 mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>4 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 5 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 6 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image6}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 7 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 8 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image8}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 9 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image9}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> 10 slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_image10}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselItem;
