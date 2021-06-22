//we could add link by "<li><a href="">Some Link</a></li>" but by doing this new request will be sent to the server which is redundant 
//so we import link, where there will be a click which won't send a request but change the url bar as required
//we can name classes however we want but it will be a js object where all the css classes that we define in the css file will be properties of this object
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BTS</div>
      <nav>
        <ul>
          <li>
              <Link to='/'>Bon Voyage</Link>
          </li>
          <li>
              <Link to='/new-meetup'>Army Blog</Link>
          </li>
          <li>
              <Link to='/favorites'>Packages</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
