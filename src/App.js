import React  from 'react'
import Cannabiscapitalindex from './Cannabiscapitalindex';
import './style/css/style.css';
//import {Route,Switch,Router} from "react-router-dom";
// import Pagination from './Pagination';
function App() {
// const [currentPage, setCurrentPage]=useState(1);
// const [postsPerPage]=useState(10);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = Cannabiscapitalindex.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div >
      <Cannabiscapitalindex />
      {/* <Router>
      <Switch>
      <Route  exact path="/" component={Cannabiscapitalindex}/>
        {/* <Route   path="/about" component={About} />
        <Route   path="/contact" component={Contact} />
        <Route   path="/service/:id" component={Service} />
        <Route   path="/user/:name" component={User}/> }
        </Switch>
        </Router> */}
    </div>
  );
}

export default App;

