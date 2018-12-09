import React from 'react';
import ReactDOM from 'react-dom';
import './ModalForm.css';
import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
  
import { Rate } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    // eslint-disable-next-line
    
    class extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
      handleChange = (value) => {
        this.setState({ value: value });
    }
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
          <div>
            <p>Name:</p>
            <p>photo</p>
            <p>cate</p>
            <p>address</p>
          </div>
          <Rate onChange={this.handleChange} value={this.state.value} />
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="Review">
                {getFieldDecorator('description')(<Input type="textarea" />)}
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
  );
class ModalForm extends React.Component {
    state = {
        visible: false,
      };
    
      showModal = () => {
        this.setState({ visible: true });
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
      handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
      }
    
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
    
      render() {
        return (
          <div>
            <Button type="primary" onClick={this.showModal}>New Collection</Button>
            <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
          </div>
        );
      }
}
export default ModalForm;