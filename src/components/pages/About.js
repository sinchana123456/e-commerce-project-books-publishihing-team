// import image from '../images/';
import classes from './About.module.css';

const About = () => {
    return(
        <section className={classes.about}>
        <h1>About</h1>
        <div className={classes.wrapper}>
          <img src={image} alt="music-band"/>
          <p>
            Codex International Publishers
            <br />
            Codex International Publishers
          </p>
        </div>
      </section>
    )
};

export default About;