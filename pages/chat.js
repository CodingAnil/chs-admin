"use client";
import { Container, Col, Row, Card } from "react-bootstrap";
import ChatList from "../components/chat/chat-list";
import ChatMessage from "../components/chat/chat-message";

const Chat = () => {
  return (
    <div className="block">
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2 mb-lg-0">
                    <h3 className="mb-0  text-white text-xl">Message</h3>
                  </div>
                </div>
              </div>
            </Col>
            <Card className="mt-5 px-0">
              <div className="flex flex-col md:flex-row items-start">
                <ChatList />
                <ChatMessage />
              </div>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Chat;
