import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import FlowChart from "./Pages/FlowChart/FlowChart";
import VissionAndMission from './Pages/VissionAndMisson/VissonAndMission'
import Token from "./Pages/Token/Token";
import RoadMap from "./Pages/RoadMap/RoadMap";
import Team from "./Pages/Team/Team";
import Base from "./Layout/Base";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flowchart" element={<FlowChart />} />
        <Route path="/vission_and_mission" element={<VissionAndMission />} />
        <Route path="/token" element={<Token />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/team" element={<Team />} />
      </Routes>


    </BrowserRouter>
  );
}
export default App;
