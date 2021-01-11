import styles from './Header.module.scss';
import bgImage from '../assets/img/Bg-Hero-Blue.png';
import logo from '../assets/img/KT-Logo.png';

export const Header = () => {
    return (
      <section id={styles.container}>
          <img src={bgImage} alt="Baggrund"/>
          <div>
              <a href="/">
                  <img src={logo} alt="Logo"/>
              </a>
          </div>
          <article>
              <p>"Det er rigtigt, at vi hver især kun bidrage lidt til den samlede løsning"</p>
              <p>"Lige så vigtigt er det, at vi slet ikke kan nå målet, uden at hver især bidrager en smule til det"</p>
          </article>
      </section>
    )
}