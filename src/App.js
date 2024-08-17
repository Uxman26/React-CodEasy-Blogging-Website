import "./App.css";
import Footer from "./layout/Footer";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import Social from "./layout/Social";
import Epoxy from "./components/blogs/Epoxy";
import WebDevelopment from "./components/blogs/WebDevelopment";
import FrontFramework from "./components/blogs/FrontFramework";
import BackFramework from "./components/blogs/BackFramework";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container fluid>
          <Row>
            <Col md={2}><Social/></Col>
            <Col md={7}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/blog/epoxy" element={<Epoxy />} />
                <Route path="/blog/webdevelopment" element={<WebDevelopment />} />
                <Route path="/blog/frontframework" element={<FrontFramework />} />
                <Route path="/blog/backframework" element={<BackFramework />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
              </Routes>
            </Col>
            <Col md={3}>Advertisements</Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
