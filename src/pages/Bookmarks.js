import { useContext } from 'react';
import BookmarkContext  from '../store/bookmark-context';
import BMeetupList from '../components/meetups/BMeetupList';

function BookmarksPage() {
  const bookmarkCtx = useContext(BookmarkContext);

  let content;

  if (bookmarkCtx.totalBookmarks === 0) {
    content = <p>You have no bookmarks yet. Start adding some?</p>;
  } else {
    content = <BMeetupList meetups={bookmarkCtx.bookmarks} />;
  }
  return (
    <section>
      <h1>My Bookmarks</h1>
      {content}
    </section>
  );
}
export default BookmarksPage;