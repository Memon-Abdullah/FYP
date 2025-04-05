// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import BarChart from "./BarChart"; 

// const Dashboard = () => {
//   return (
//     <Container fluid className="p-4" style={{ backgroundColor: "#2A1B5F", color: "white" }}>
//       <Row className="justify-content-center">
//         <Col md={8} className="text-center">
//           <h1>Dashboard</h1>
//           <p>Welcome to MoodMeet's analytics dashboard!</p>
//         </Col>
//       </Row>

//       <Row className="mt-4">
//         <Col md={6}>
//           <Card className="p-3" style={{ backgroundColor: "#3B2A70", color: "white" }}>
//             <h3>Model Performance</h3>
//             <BarChart />
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="p-3" style={{ backgroundColor: "#3B2A70", color: "white" }}>
//             <h3>Recent Predictions</h3>
//             <ul>
//               <li>Audio 1: Positive</li>
//               <li>Audio 2: Neutral</li>
//               <li>Audio 3: Negative</li>
//             </ul>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;

import React from "react";
import "../assets/style/dashboard.css"; 

const Dashboard = ({ userName = "User’s Name" }) => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <ul>
          <li>HOME</li>
          <li>CHAT</li>
          <li>ABOUT</li>
          <li>RESULTS</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>Hello, <span className="username">* {userName} ! *</span></h1>

        <div className="audio-box">
          <button className="icon-button">＋</button>
          <span className="audio-placeholder">insert speech audio here</span>
          <button className="icon-button">🎤</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
