import Button from '../UI/Button';
import classes from './Home.module.css';

const Home = () => {

    const tracks = [
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        },
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        },
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        },
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        },
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        },
        {
          id: "",
          Book: "",
          Author: "",
          Description: "",
        }
      ];

      const trackList = tracks.map((item) => {
        return (
            <li className={classes['tour-item']} key={item.id}>
                <span className={classes['tour-book']}>{item.date}</span>
                <span className={classes['tour-author']}>{item.place}</span>
                <span className={classes['tour-description']}>{item.description}</span>
                <Button className={classes.button}> BUY BOOK</Button>
            </li>
        );
      });

    return(
        <section className={classes.home}>
            <h2>Books</h2>
            <div className={classes.wrapper}>
              {trackList}
            </div>
        </section>
    );
};

export default Home;