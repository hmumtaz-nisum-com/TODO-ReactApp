import React, { Component } from 'react';
import { Modal,Button,Form,FormGroup,Col,FormControl } from 'react-bootstrap';

class AddTodoModal extends Component {

	constructor(props){
		super(props);
		this.state = {
			todoItem : props.editableItem ? Object.assign({},props.editableItem) : {},
			isEditMode : props.isEditMode
		};
	}

	componentWillReceiveProps(props){
		this.setState({todoItem : props.editableItem})
		this.setState({isEditMode : props.isEditMode});
	}

	btnClickHandler(){
		if (!this.state.isEditMode) {
			this.props.addTodoCallBack(this.titleInput.value,this.descInput.value);	
		}else{
			this.props.updateTodoCallBack(this.state.todoItem.id,this.titleInput.value,this.descInput.value);
		}
	}

	titleChangeHandler(){
		const todoItem = Object.assign({}, this.state.todoItem);
		todoItem.title = this.titleInput.value;
		this.setState({todoItem : todoItem});
	}

	descChangeHandler(){
		const todoItem = Object.assign({}, this.state.todoItem);
		todoItem.desc = this.descInput.value;
		this.setState({todoItem : todoItem});
	}

	render(){
		return (
			  <Modal bsSize="large" show={this.props.isShow} onHide={this.props.closeCallBack}>
		          <Modal.Header closeButton>
		            <Modal.Title>Add TODO</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          		<Form horizontal>
						  <FormGroup controlId="formHorizontalEmail">
						    <Col sm={2}>
						      Title
						    </Col>
						    <Col sm={10}>
						      <FormControl type="text" placeholder="Title" inputRef={input => this.titleInput = input} value={this.state.todoItem.title} onChange={()=>this.titleChangeHandler()} />
						    </Col>
						  </FormGroup>
						   <FormGroup controlId="formControlsTextarea">
						      <Col sm={2}>
						      	Description
						      </Col>
						      <Col sm={10}>
						      <FormControl componentClass="textarea" placeholder="Description" inputRef={input => this.descInput = input} value={this.state.todoItem.desc} />
						      </Col>
						    </FormGroup>
						</Form>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.btnClickHandler.bind(this)}>{this.props.isEditMode && 'Update'} {!this.props.isEditMode && 'Add'}</Button>
		          </Modal.Footer>
		      </Modal>
		);
	}
}

export default AddTodoModal;