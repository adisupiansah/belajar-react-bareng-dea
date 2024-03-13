import { Card, Container, Row, Col, Image } from "react-bootstrap";
// import spiderman from "../assets/images/spiderman.jpg";

const filmsData = [{
  film_id: 11,
  title: 'Superman',
  image: 'https://c4.wallpaperflare.com/wallpaper/535/30/421/batman-v-superman-dawn-of-justice-superman-dc-comics-henry-cavill-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},
{
  film_id: 12,
  title: 'Avengers',
  image: 'https://c4.wallpaperflare.com/wallpaper/389/978/477/avengers-age-of-ultron-movie-review-chris-hemsworth-thor-captain-amerika-chris-evans-robert-downey-jr-iron-man-hulk-mark-ruffalo-1920%C3%971080-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},
{
  film_id: 13,
  title: 'Venom',
  image: 'https://c4.wallpaperflare.com/wallpaper/563/215/659/venom-tom-hardy-4k-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},
{
  film_id: 14,
  title: 'Dead Pool',
  image: 'https://c4.wallpaperflare.com/wallpaper/945/620/996/dead-pool-artwork-digital-art-digital-painting-fan-art-hd-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},
{
  film_id: 15,
  title: 'Wonder woman',
  image: 'https://c4.wallpaperflare.com/wallpaper/840/876/23/wonder-woman-dc-comics-gal-gadot-sword-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},
{
  film_id: 16,
  title: 'Black Adam',
  image: 'https://c4.wallpaperflare.com/wallpaper/464/460/2/movie-shazam-black-adam-dwayne-johnson-wallpaper-preview.jpg',
  desc: 'This is a wider card with supporting text below as a natural leadin to additional content',
},


]

export default function SuperHero() {

  return (
    <div>
      <Container>
        <br />
        <h1 className="mt-4 text-center judul">SUPER HERO MOVIES</h1>
        <Row>
          {filmsData.map((film) => (
            <Col key={film.film_id} md={4} className="movieWrapper" id="superhero">
              <Card className="text-dark mt-3 movieImage">
                <Image src={film.image} alt="Card image" className="images"/>
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
