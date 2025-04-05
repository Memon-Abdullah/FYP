import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BarChart from "./BarChart"; 

const Dashboard = () => {
  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#2A1B5F", color: "white" }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Dashboard</h1>
          <p>Welcome to MoodMeet's analytics dashboard!</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="p-3" style={{ backgroundColor: "#3B2A70", color: "white" }}>
            <h3>Model Performance</h3>
            <BarChart />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3" style={{ backgroundColor: "#3B2A70", color: "white" }}>
            <h3>Recent Predictions</h3>
            <ul>
              <li>Audio 1: Positive</li>
              <li>Audio 2: Neutral</li>
              <li>Audio 3: Negative</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
