import { Card, Container, Row, Col, Image } from "react-bootstrap";
// import spiderman from "../assets/images/spiderman.jpg";

const filmsData = [{
  film_id: 1,
  title: 'Toy Sttory',
  image: 'https://c4.wallpaperflare.com/wallpaper/430/680/1019/movie-toy-story-4-bo-peep-buzz-lightyear-forky-toy-story-hd-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},
{
  film_id: 2,
  title: 'Penguins of Madasgar',
  image: 'https://c4.wallpaperflare.com/wallpaper/308/457/73/penguins-of-madagascar-funny-movie-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},
{
  film_id: 3,
  title: 'Sponge on the Run, Patrick Star',
  image: 'https://c4.wallpaperflare.com/wallpaper/475/403/828/movie-the-spongebob-movie-sponge-on-the-run-patrick-star-spongebob-squarepants-hd-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},
{
  film_id: 4,
  title: 'Cek Toko Sebelah',
  image: 'https://infokost.id/blog/wp-content/uploads/2023/10/CTS02-03.webp',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},
{
  film_id: 5,
  title: 'Dora and the Lost City of Gold',
  image: 'https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/07/film-dora.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},
{
  film_id: 6,
  title: 'A Time Called You',
  image: 'https://asset-2.tstatic.net/jatim/foto/bank/images/A-Time-Called-You-sebenarnya-merupakan-drama-yang-diadaptasi-dari-serial-populer-Taiwan.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
  alt: 'Card-image'
},


]

export default function SuperHero() {

  return (
    <div>
      <Container>
        <br />
        <h1 className="mt-4 text-center judul">TRENDING MOVIES</h1>
        <Row>
          {filmsData.map((film) => (
            <Col key={film.film_id} md={4} className="movieWrapper" id="trending">
              <Card className="text-dark mt-3 movieImage">
                <Image src={film.image} alt={film.alt} className="images"/>
                <div className="m-1 p-2">
                  <Card.Title className="text-center">{film.title}</Card.Title>
                  <Card.Text className="text-left">
                    {film.desc}
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
