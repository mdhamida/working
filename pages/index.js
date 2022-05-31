import Head from 'next/head'
import Image from 'next/image'
import  '../styles/Home.module.css'
import Axios from "axios";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Link from "next/link";
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'  
import bgi1 from '../public/bgi1.jpg';
import slide2 from '../public/bg12.jpg';
import slide3 from '../public/bgi3.jpg';
import slide5 from '../public/bgi4.jpg';
import slide4 from '../public/bgi4.webp';


const Index = (props) => {
  const vehicles = props.data;

  return (
      <>

<Navbar style={{backgroundColor:"red"}}  expand="lg">
    <Container  fluid>
    <Navbar.Brand href="#">CarDekho</Navbar.Brand>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/1">Cars</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
        id="searchBar"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel fade className="mt-0">
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={bgi1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to car dekho</h3>
      <p>CarBike360 is one of the best car and bike searching platforms, which helps people to search for car and bikes online according to their needs and budget..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Welcome to car dekho</h3>
      <p>CarBike360 is one of the best car and bike searching platforms, which helps people to search for car and bikes online according to their needs and budget..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Welcome to car dekho</h3>
      <p>CarBike360 is one of the best car and bike searching platforms, which helps people to search for car and bikes online according to their needs and budget..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide4}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Welcome to car dekho</h3>
      <p>CarBike360 is one of the best car and bike searching platforms, which helps people to search for car and bikes online according to their needs and budget..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={slide5}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Welcome to car dekho</h3>
      <p>CarBike360 is one of the best car and bike searching platforms, which helps people to search for car and bikes online according to their needs and budget..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div className="mt-10 popular">
<Row>

   
    {vehicles.map((vehicle) => (
   <Col style={{textAlign:"center"}}>
        <Card  className="my-6" key={vehicle.id}>
          <div className="img-box">
            <Image variant="top"   width={400} height={200} layout="responsive"  src={vehicle.Image} alt="" title="" />
          </div>
      
      <Card.Body>
        <Card.Title style={{color:"oink"}}>{vehicle.Name}</Card.Title>
        <Card.Text >
        {vehicle.Price}
        </Card.Text>
        <Link
              href={{
                pathname: "/[id]",
                query: { id: vehicle.id },
              }}
            >
               <Button style={{color:"black" , backgroundColor:"red"}}>Diwali Offer</Button>
              
            </Link>
       
      </Card.Body>
    </Card>
    </Col>
  ))}
  </Row>
</div>


      </>
  
  );
};
export default Index;

export const getStaticProps = async () => {
  const res = await Axios.get("https://6197c5b4164fa60017c22e0d.mockapi.io/vehicles");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};