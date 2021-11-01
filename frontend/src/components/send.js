import React, { Component } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

const postEndpoint = '/add_transaction'
const getEndpoint = '/get_chain'
class Send extends Component {
  constructor(props){
    super(props);
    this.state = {
      Receiver: '',
      Sender:'',
      Amount:'',
      time: '',
      Sender: '',
    }
    this.handleSender = this.handleSender.bind(this);
    this.handleReceiver = this.handleReceiver.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReceiver(event){
    this.setState({ Receiver: event.target.value});
  }
  handleSender(event){
    this.setState({ Sender: event.target.value});
  }
  handleAmount(event){
    this.setState({ Amount: event.target.value});
  }
  handleAmount(event){
    this.setState({ amount: event.target.value});
  }
  componentDidMount() {
    axios.get(getEndpoint)
      .then(res => {
        const Sender = res.data.chain[1].transactions[0].receiver;
        this.setState({ Sender });
      })
    }

  handleSubmit(event) {
    event.preventDefault();

      axios.post(postEndpoint, { "Sender": this.state.Sender,
      "Receiver": this.state.Receiver,
      "Amount": this.state.Amount,
      "time": this.state.time })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
  }

  render(){
    return (
        <Container>
  <br/>
  <h3><b>Morris International Bank</b></h3>
  <h4><b style={{color: '#007bff'}}>World's Most Prestigious Bank</b> </h4>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Sender
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={this.handleSender} value={this.state.Sender} placeholder="Enter Sender Account number" />
         </Col>
       </Form.Group>

       <Form.Group as={Row}>
         <Form.Label column sm="2">
           Receiver
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={this.handleReceiver} value={this.state.Receiver} placeholder="Enter Receiver Account number" />
         </Col>
       </Form.Group>

       <Form.Group as={Row}>
        <Form.Label column sm="2">
          Amount
        </Form.Label>
        <Col sm="2">
          <Form.Control onChange={this.handleAmount} placeholder="Amount" value={this.state.Amount} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
      <Col sm="5">
      <Button variant="primary" type="submit">
    Send
  </Button>
  </Col>
  </Form.Group>
     </Form>
     <br/><br/>
      </Container>
    );
  }
}

export default Send;
