import 'styles/Toolbar.css';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Toolbar extends React.Component {
    render() {
        return (
            <Container className="toolbar-container pt-3 pb-3">
                <Row>
                    <Col>
                        <Button className="ms-1 me-1">Sort</Button>
                        <Button className="ms-1 me-1">Reset</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Toolbar;