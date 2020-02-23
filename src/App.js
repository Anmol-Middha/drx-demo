import React, { Component } from 'react';
import { Container, Form, Row, Col, Button, Dropdown, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton, Alert } from 'react-bootstrap';
import Axios from 'axios';

export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    frequency: "101",
    duration: "1",
    durationType: "days",
    instructions: "After Meal",
    medicine: "",
    medicineGroup: []
  }
  this.handleConcatFunction = this.handleConcatFunction.bind(this);
  this.handleChangeFunction = this.handleChangeFunction.bind(this);
  this.addMedicince = this.addMedicince.bind(this);
  this.clearMedicine = this.clearMedicine.bind(this);
}

componentDidMount(){
  Axios.get("https://bfhlapiservice.azure-api.net/self-learning-dev/rest/masterListrx/medicine", {
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "a42d2bc16d9142c8bb598d3e40f4ba24"
    },
    params: {
      name: "dolo"
    },
  })
  .then(rslt=>{
    console.log(rslt);
  })
  .catch(err=>{
    console.log(err);
  })
}

addMedicince(){
  let prevState = this.state.medicineGroup;
  prevState.push(this.state.medicine);
  this.setState(({
    medicineGroup: prevState
  }))
}

clearMedicine(medicine){
  const temparray = this.state.medicineGroup;
  const index = temparray.indexOf(medicine);
  if (index > -1) {
  temparray.splice(index, 1);
  this.setState({
    medicineGroup: temparray
  })
}
  // let prevState = this.state.medicineGroup;
  // prevState.filter(item => item !== medicine)
  // console.log(prevState);
  // this.setState({
  //   medicineGroup: prevState
  // })
}

handleChangeFunction(e){
 

  this.setState({
    medicine: e.target.value
  })
}

handleConcatFunction(e){
  this.setState({
    [e.target.name] : e.target.value,
    // medicine: this.state.frequency + this.state.duration + this.state.instructions
  }, ()=>{
    this.setState({
      medicine: this.state.frequency + "/" + this.state.duration +  this.state.durationType + "/" + this.state.instructions
    })
  })
}

  render() {
    return (
      <Container>
        <br/>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Control value={this.state.medicine} placeholder="Search Medicine" type="text" onChange={this.handleChangeFunction}/>
            <hr/>
            <Row>
            <Col xs={3}>
            <label>Frequency</label>
            </Col>
            <Col xs={9}>
            <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="frequency" defaultValue={101} onClick={this.handleConcatFunction}>
              <ToggleButton variant="outline-info" value={101}>101</ToggleButton>
              <ToggleButton variant="outline-info" value={111}>111</ToggleButton>
              <ToggleButton variant="outline-info" value={110}>110</ToggleButton>
            </ToggleButtonGroup>
            </ButtonToolbar>
            </Col>
            </Row>
            <br/>
            <Row>
            <Col xs={3}>
            <label>Duration</label>
            </Col>
            <Col xs={2}>
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="duration" defaultValue={1} onClick={this.handleConcatFunction}>
                <ToggleButton variant="outline-info" value={1}>1</ToggleButton>
                <ToggleButton variant="outline-info" value={2}>2</ToggleButton>
                <ToggleButton variant="outline-info" value={3}>3</ToggleButton>
                <ToggleButton variant="outline-info" value={4}>4</ToggleButton>
                <ToggleButton variant="outline-info" value={5}>5</ToggleButton>
                <ToggleButton variant="outline-info" value={6}>6</ToggleButton>
                <ToggleButton variant="outline-info"  value={7}>7</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
            </Col>
            <Col xs={{span: 2, offset: 1}}>
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="durationType" defaultValue={"days"} onClick={this.handleConcatFunction}>
                <ToggleButton variant="outline-info" value={"days"}>days</ToggleButton>
                <ToggleButton variant="outline-info" value={"weeks"}>weeks</ToggleButton>
                <ToggleButton variant="outline-info" value={"months"}>months</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
            </Col>
            </Row>
            <br/>
            <Row>
            <Col xs={3}>
            <label>Instructions</label>
            </Col>
            <Col xs={9}>
              <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="instructions" defaultValue={"After Meal"} onClick={this.handleConcatFunction}>
                <ToggleButton variant="outline-info" value={"Before Meal"}>Befor Meal</ToggleButton>
                <ToggleButton variant="outline-info" value={"After Meal"}>After Meal</ToggleButton>
              </ToggleButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <br/>
          </Form.Group>
        </Form>
        <Row>
          <Col xs={{offset: 11, span:1}}>
            <Button variant="info" onClick={this.addMedicince}>Add</Button>
          </Col>
        </Row>
        <hr/>
        {this.state.medicineGroup.length>0 ?
        <h5>Medicines</h5>: <></>}
        {this.state.medicineGroup.length>0?
          this.state.medicineGroup.map((string)=>{
            return(
            <Alert style={{maxHeight: '50px'}} variant="info" dismissible  onClose={() => this.clearMedicine(string)} >
              <p>{string}</p>
            </Alert>)
          })
        :<></>}
      </Container>
    )
  }
}
