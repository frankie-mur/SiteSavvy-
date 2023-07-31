//import {BrowserRouter as Router} from 'react-router-dom';
import * as React from 'react';
import Home from './components/Home';
import McDetails from './components/McDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import McDetails from './components/McDetails';
// import {
//   Routes,
//   Route,
//   Link,
//   // useNavigate,
//   // useLocation,
//   // Navigate,
//   Outlet,
// } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/McDetails">
              <McDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
       {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homei />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/IG" element={<McDetails />} />
        </Route>
      </Routes> */}
      
    </>
  );
}
// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function Homei() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }


export default App;
