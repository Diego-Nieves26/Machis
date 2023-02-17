import ahorcadoIcon from "../../assets/ahorcado_icon.png";
import snakeIcon from "../../assets/snake_icon.png";
import mbIcon from "../../assets/MB_icon.png";
import img1 from "../../assets/img-1.png";
import { motion } from "framer-motion";
import {
  Nav,
  CardNintendo,
  InfoCard,
  Button,
  Carrusel,
  Logo,
  Footer,
} from "../../components";
import "./css/styles.css";

const Home = () => {
  const navLinks = [
    { name: "Sobre GC", id: "abaut" },
    { name: "Juegos", id: "previewGames" },
    { name: "Funciones", id: "functions" },
    { name: "Futuros Juegos", id: "futureGames" },
  ];

  const carouselImgs = [
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/04/pac-man-2682107.jpg?itok=yBql9xXZ",
    "https://3.bp.blogspot.com/-0v6lrIWFK-s/XRJWmOAvqII/AAAAAAAABKs/kgyYC3qzqcQoCR0Am4bHU91n-B-Osen6gCLcBGAs/s1600/ahorcadokotlin.png",
    "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2020/10/Super-Mario-Bros-1-1280x720-1.jpg?resize=1250%2C720&ssl=1",
  ];

  return (
    <motion.div
      id="Home"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 1.5,
        },
      }}
    >
      <Nav links={navLinks} />
      <header className="header">
        <Logo font={6} />
        <h2 className="header__h2">Diversion para todos</h2>
        <Button content="Empezar" color="#32d4a4" />
        <div className="svg-home svg-header">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-0.27,149.52 C-0.27,149.52 -0.84,149.52 505.36,2.48 L500.00,150.00 L-0.84,149.52 Z"></path>
          </svg>
        </div>
      </header>
      <main>
        <section id="abaut" className="abaut">
          <h3>Sobre GAME CENTER</h3>
          <div>
            <div>
              <h4>¿Que es?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                vero eum dolores officia nulla dolorem numquam aut ut quis
                excepturi?
              </p>
              <h4>¿Por que es?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                vero eum dolores officia nulla dolorem numquam aut ut quis
                excepturi?
              </p>
              <Button content="Empezar" color="#1a202c" />
            </div>
            <div>
              <img src={img1} alt="Mando" />
            </div>
          </div>
          <div className="svg-home svg-section">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-0.27,149.52 C-0.27,149.52 -0.84,149.52 505.36,2.48 L500.00,150.00 L-0.84,149.52 Z"></path>
            </svg>
          </div>
        </section>
        <div id="previewGames" className="previewGames">
          <CardNintendo img={ahorcadoIcon} titleGame="Ahorcado" />
          <CardNintendo img={mbIcon} titleGame="Mario Bross" />
          <CardNintendo img={snakeIcon} titleGame="Snake" />
          <div className="svg-home svg-header">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-0.27,149.52 C-0.27,149.52 -0.84,149.52 505.36,2.48 L500.00,150.00 L-0.84,149.52 Z"></path>
            </svg>
          </div>
        </div>
        <section id="functions" className="functions">
          <h3>Funciones</h3>
          <div className="gallery">
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={1}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={2}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={3}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={4}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={5}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={6}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={7}
            />
            <InfoCard
              name="Diviertete"
              img="https://imagenesparapeques.com/wp-content/uploads/2019/09/Emojis-diversion-fiest.png"
              description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, perspiciatis?"
              i={8}
            />
          </div>
          <div className="svg-home svg-section">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-0.27,149.52 C-0.27,149.52 -0.84,149.52 505.36,2.48 L500.00,150.00 L-0.84,149.52 Z"></path>
            </svg>
          </div>
        </section>
        <div id="futureGames" className="futureGames">
          <h3>Futuros Juegos</h3>
          <Carrusel imgs={carouselImgs} />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
