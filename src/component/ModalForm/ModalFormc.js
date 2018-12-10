import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './ModalForm.css';
import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
import axios from 'axios';
import { Rate } from 'antd';

const FormItem = Form.Item;

class FormModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: 5,
        name: this.props.name,
        cate: this.props.cate,
        business_id: this.props.business_id,
        user_id:"Yimeng"
    }
}
handleSubmit = () => {
  const a = "fdsfd"
    this.handleSubmitForm = (this.state.user_id, this.state.business_id, a)
}
handleSubmit = (userId, bId, review) => {
  // console.log('user: ' + this.state.user_id)
  //  const a = "fdsfd"
    const form = this.postRate(userId, bId, review)
    .then(response => {
      if (response.data.user_id) {
        console.log(response.data.user_id)
        
      }
    })
    // if (!err) {
      //  console.log('Received values of form: ', values);
    // }
}
postRate = (userId, businessId, review) => {
  try {
      return axios.post('http://localhost:5000/write', {
          "user_id": userId,
          "stars": 0,
          "text": review,
          "business_id": businessId

      })
  } catch (error) {
      console.log(error)
  }
}
handleChange = (value) => {
  this.setState({ value: value });
}
render() {
  console.log(this.state + " ndis")
  const {
    visible, onCancel, onCreate, form,
  } = this.props;
  // const { getFieldDecorator } = form;
  const {name, cate, business_id} = this.state
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
    <div>
      <p>Name:{name}</p>
      <p>{cate}</p>
    </div>
    <Rate onChange={this.handleChange} value={this.state.value} />
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="Review">
        {(<Input type="textarea" />)}
        </FormItem>
        <FormItem className="collection-create-form_last-form-item">
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
      Submit
    </Button>
      </Form>
    </Modal>
  );
}
}


class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      name: this.props.name,
      cate: this.props.cate,
      business_id: this.props.business_id
    }
}
      showModal = () => {
        this.setState({ visible: true });
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
      handleCreate = () => {
        // const form = this.formRef.props.form;
        // form.validateFields((err, values) => {
        //   if (err) {
        //     return;
        //   }
    
        //   console.log('Received values of form: ', values);
        //   form.resetFields();
          // this.setState({ visible: false });
        // });
      }
    
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
    
      render() {
        const { name, cate, business_id } = this.state
        // console.log(this.state)
        // console.log(name)
        // console.log(cate)
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>New Collection</Button>
            {/* <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
              name = {name}
              cate = {cate}
              business_id = {business_id}

            /> */}
            <FormModal
              visible={this.state.visible}
              onCancel={this.handleCancel}
              name = {name}
              cate = {cate}
              business_id = {business_id}

            />
          </div>
        );
      }
}
export default ModalForm;