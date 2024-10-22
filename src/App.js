import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Pages/home';
import Introduction from './Pages/Introduction';
import Skills from './Pages/Skills';
import Project from './Pages/project';
import Certificates from "./Pages/Certificates";
import Contact from "./Pages/Contact";

import Project1 from './Limit/project-Limit';
import Limit from './Limit/Limit';
import LimitMain from './Limit/Limit-main';
import LimitProduct from './Limit/Limit-product';
import LimitDetail from './Limit/Limit-detail';
import LimitSearch from './Limit/Limit-search';
import LimitProblem from './Limit/Limit-problem-solving';

import Project2 from './Trakpack/project-Trakpack';
import Trakpack from './Trakpack/Trakpack';
import TrakpackCity from './Trakpack/Trakpack-city';
import TrakpackDate from './Trakpack/Trakpack-date';
import TrakpackPlan from './Trakpack/Trakpack-plan';
import TrakpackProblem from './Trakpack/Trakpack-problem-solving';

import Project3 from './PlaniT/project-PlaniT';
import PlaniT from './PlaniT/PlaniT';
import PlaniTMain from './PlaniT/PlaniT-main';
import PlanitProblem from './PlaniT/PlaniT-problem-solving';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/project-1" element={<Project1 />} />
        <Route path="/limit" element={<Limit />} />
        <Route path="/limit-main" element={<LimitMain />} />
        <Route path="/limit-product" element={<LimitProduct />} />
        <Route path="/limit-detail" element={<LimitDetail />} />
        <Route path="/limit-search" element={<LimitSearch />} />
        <Route path="/limit-problem-solving" element={<LimitProblem />} />

        <Route path="/project-2" element={<Project2 />} />
        <Route path="/trakpack" element={<Trakpack />} />
        <Route path="/trakpack-city" element={<TrakpackCity />} />
        <Route path="/trakpack-date" element={<TrakpackDate />} />
        <Route path="/trakpack-plan" element={<TrakpackPlan />} />
        <Route path="/trakpack-problem-solving" element={<TrakpackProblem />} />

        <Route path="/project-3" element={<Project3 />} />
        <Route path="/planit" element={<PlaniT />} />
        <Route path="/planit-main" element={<PlaniTMain />} />
        <Route path="/planit-problem-solving" element={<PlanitProblem />} />

      </Routes>
    </Router>
  );
}

export default App;
