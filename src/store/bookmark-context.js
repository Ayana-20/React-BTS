import { createContext, useState } from "react";
const BookmarkContext = createContext({
    bookmarks: [],
    totalBookmarks: 0,
    addBookmark: (bookmarkMeetup) =>{},
    removeBookmark: (meetupId) => {},
    itemIsBookmark: (meetupId) => {},
});

export function BookmarkContextProvider(props){
    const [userBookmarks, setUserBookmarks] = useState([]);

    function addBookmarkHandler(bookmarkMeetup) {
        setUserBookmarks((prevUserBookmarks) => {
            return prevUserBookmarks.concat(bookmarkMeetup);
        });
    }
    function removeBookmarkHandler(meetupId) {
        setUserBookmarks(prevUserBookmarks => {
            return prevUserBookmarks.filter(meetup => meetup.id !== meetupId);
        });
    }
    function itemIsBookmarkHandler(meetupId) {
        return userBookmarks.some(meetup => meetup.id === meetupId);
    }
    const context = {
        bookmarks:userBookmarks,
        totalBookmarks: userBookmarks.length,
        addBookmark: addBookmarkHandler,
        removeBookmark: removeBookmarkHandler,
        itemIsBookmark: itemIsBookmarkHandler
    };
    return <BookmarkContext.Provider value={context}>
        {props.children}
    </BookmarkContext.Provider>
}

export default BookmarkContext;