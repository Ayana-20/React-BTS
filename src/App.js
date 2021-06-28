//routing is basically staying on the same page but giving an illusion that it's not, like netflix.
//route component defines different paths in the URL and which component shuld be loaded for these different paths
//we use switch to tell react that only one of the rotes should be active.(routes-allmeetups, favorites, newmeetups)
//so now when path=/ is seen by switch it will automatically only render all meetups. so we put exact=true in that path
//exact tells switch to match the path entirely not just if the path begins here
import {Route, Switch} from'react-router-dom';
import BtsContent from './pages/BtsContent';
import Blogs from './pages/Blogs';
import ArmyExpress from './pages/ArmyExpress';
import BookmarksPage from './pages/Bookmarks';
import Layout from './components/layout/Layout';

function App() {
  return (
    
      <Layout>
      <Switch>
        <Route path="/" exact>
          <BtsContent />
        </Route>
        <Route path="/army-express">
          <ArmyExpress />
        </Route>
        <Route path="/blogs">
          <Blogs />
          </Route>
        <Route path="/bookmarks">
          <BookmarksPage />
        </Route>
      </Switch>
      </Layout>
    
  );
}

export default App;
