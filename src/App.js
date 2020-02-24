import React, { Component } from 'react';
import './App.css';
import { Container, Form, Row, Col, Button, Dropdown, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton, Alert, ListGroup } from 'react-bootstrap';
import Axios from 'axios';

export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    frequency: "101",
    duration: "5",
    durationType: "days",
    instructions: "After Meal",
    medicineName: "",
    medicine: "",
    medicineGroup: [],
    medicineSuggestion: [],
    toggleHover: false,
  }
  this.handleConcatFunction = this.handleConcatFunction.bind(this);
  this.handleChangeFunction = this.handleChangeFunction.bind(this);
  this.addMedicince = this.addMedicince.bind(this);
  this.clearMedicine = this.clearMedicine.bind(this);
  this.handleDuration = this.handleDuration.bind(this);
  this.handleListClick = this.handleListClick.bind(this);
  this.toggleHover = this.toggleHover.bind(this);
}

componentDidUpdate(){
  console.log(this.state.medicine);
  console.log(this.state.medicineSuggestion);
}

componentDidMount(){

}

toggleHover(e){
  console.log(e.target);
  this.setState({
    toggleHover: !this.toggleHover
  })
}

handleDuration(){
  let durationArray = ["days", "weeks", "months"];
  let index = durationArray.indexOf(this.state.durationType);

  if(index == 3){
    this.setState({
      durationType: durationArray[0]
    })
  }
  else{
    this.setState({
      durationType: durationArray[index+1]
    })
  }
}

addMedicince(){
  let prevState = this.state.medicineGroup;
  prevState.push(this.state.medicine);
  this.setState(({
    medicine: "",
    medicineGroup: prevState
  }))
}

handleListClick(e){
  // e.parentElement.style.visibility = "hidden";
  this.setState({
    medicine: e.target.className,
    medicineName: e.target.className
  },()=>{
  })
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
}

handleChangeFunction(e){
  this.setState({
    medicine: e.target.value
  }, ()=>{
    Axios.get("http://13.71.4.239:4401/rest/masterListrx/medicine", {
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "a42d2bc16d9142c8bb598d3e40f4ba24"
    },
    params: {
      name: this.state.medicine
    },
  })
  .then(rslt=>{
    this.setState({
      medicineSuggestion: rslt.data.MedicineList.slice(0, 10).map(i =>{return i.Name})
    })
  })
  .catch(err=>{
    console.log(err);
  })
  })
}

handleConcatFunction(e){
  this.setState({
    [e.target.name] : e.target.value,
    // medicine: this.state.frequency + this.state.duration + this.state.instructions
  }, ()=>{
    this.setState({
      medicine: this.state.medicineName + " " + this.state.frequency + " for " + this.state.duration + " " + this.state.durationType + " " + this.state.instructions
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
            {(this.state.medicineSuggestion.length>0 && this.state.medicine.length > 3)?
              <ListGroup>
              <div style={{height: '200px', overflow: 'scroll', visibility: "visible"}}>
                {this.state.medicineSuggestion.map(medicine=>{
                  return <p style={{cursor: "pointer"}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.handleListClick} className={medicine}>{medicine}</p>
                })}
              </div>
              </ListGroup>
            :<></>}
            <hr/>
            <Row>
            <Col xs={3}>
            <label>Frequency</label>
            </Col>
            <Col xs={9}>
            <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="frequency" defaultValue={"1-0-1"} onClick={this.handleConcatFunction}>
              <ToggleButton variant="outline-info" value={"1-1-1"}>1-1-1</ToggleButton>
              <ToggleButton variant="outline-info" value={"1-0-1"}>1-0-1</ToggleButton>
              <ToggleButton variant="outline-info" value={"1-1-1-1"}>1-1-1-1</ToggleButton>
              <ToggleButton variant="outline-info" value={"1-0-0"}>1-0-0</ToggleButton>
              <ToggleButton variant="outline-info" value={"S.O.S"}>S.O.S</ToggleButton>
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
              <ToggleButtonGroup type="radio" name="duration" defaultValue={5} onClick={this.handleConcatFunction}>
                <ToggleButton variant="outline-info" value={3}>3</ToggleButton>
                <ToggleButton variant="outline-info" value={5}>5</ToggleButton>
                <ToggleButton variant="outline-info" value={7}>7</ToggleButton>
                <ToggleButton variant="outline-info" value={15}>15</ToggleButton>
                <ToggleButton variant="outline-info" value={30}>30</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
            </Col>
            <Col xs={{span: 2, offset: 1}}>
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="durationType" defaultValue={"days"} onClick={this.handleConcatFunction}>
                <ToggleButton variant="outline-info" value={this.state.durationType} onClick={this.handleDuration}>{this.state.durationType}</ToggleButton>
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
                <ToggleButton variant="outline-info" value={"Before Meal"}>Before Meal</ToggleButton>
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
