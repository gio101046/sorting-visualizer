import 'styles/Array.css';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Array extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
        this.state = {
            containerHeight: -1
        };

        // weird javascript this thing
        this.updateContainerHeight = this.updateContainerHeight.bind(this);
    }

    updateContainerHeight() {
        const height = this.containerRef.current.offsetHeight;
        
        // only update if the height has changed
        if (this.state.containerHeight !== height) {
            console.log(height);
            this.setState({ containerHeight: height });
        }
    }

    componentDidMount() {
        this.updateContainerHeight(); // call to initialize height state after mount
        window.addEventListener('resize', this.updateContainerHeight);
    }

    render() {
        return (
            <Container className="array-container" ref={this.containerRef} fluid>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Array;