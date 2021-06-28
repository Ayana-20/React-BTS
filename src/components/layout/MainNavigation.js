//we could add link by "<li><a href="">Some Link</a></li>" but by doing this new request will be sent to the server which is redundant 
//so we import link, where there will be a click which won't send a request but change the url bar as required
//we can name classes however we want but it will be a js object where all the css classes that we define in the css file will be properties of this object
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import BookmarkContext from '../../store/bookmark-context';

function MainNavigation() {
  const bookmarkCtx = useContext(BookmarkContext);
  return (
    <header className={classes.header}>
 
      <ul className={classes.logo}>BTS</ul>
      <nav>
        <ul>
          <li>
            <Link to="/">BTS Content</Link>
          </li>
          <li>
            <Link to="/army-express">Army Express</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/bookmarks">
              Bookmarks 
              <span className={classes.badge}>{bookmarkCtx.totalBookmarks} </span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
