import { useContext } from 'react';
import Card from '../ui/Card'
import classes from './BMeetupItem.module.css'
import BookmarkContext from '../../store/bookmark-context';
function BMeetupItem(props) {
    const bookmarkCtx = useContext(BookmarkContext);
    const itemIsBookmark = bookmarkCtx.itemIsBookmark(props.id);
    function toggleBookmarkStatusHandlr() {
        if (itemIsBookmark) {
            bookmarkCtx.removeBookmark(props.id);
        } else {
         bookmarkCtx.addBookmark({
             id: props.id,
             title: props.title,
             description: props.description,
             image: props.image,
             address: props.address
         });
        }
    }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>View</button>
          <button onClick= {toggleBookmarkStatusHandlr}>{itemIsBookmark ? 'Remove Bookmarks' : 'Bookmark'}</button>
        </div>
      </Card>
    </li>
  );
}

export default BMeetupItem;