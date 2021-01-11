import styles from './Section.module.scss';

export const Section = (props) => {
    return (
      <section id={styles.container} style={{backgroundColor: props.info.color}}>
        <article>
          <h2>{props.info.h2}</h2>
          <section>
            <div>
              <img src={require('../../assets/img/' + props.info.img).default} alt={props.info.h1}/>
            </div>
            <article>
              <h3>{props.info.h3}</h3>
              <p>{props.info.text}</p>
              <a href={props.info.url}>Læs mere</a>
            </article>
          </section>
        </article>
      </section>
    )
}