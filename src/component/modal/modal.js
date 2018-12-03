import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { Modal, Button } from 'antd';


class Modal_ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible,
        }
    }
    state = {
        ModalText: 'Content of the modal',
        // visible: false,
        confirmLoading: false,
      }
    
    //   showModal = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   }
    
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
    
    render() {
        // const { visible, confirmLoading, ModalText } = this.state;
        const {confirmLoading, ModalText } = this.state;
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}> */}
         <Button type="primary" onClick={() => this.props.onClick()}>
          {this.props.title}
        </Button>
        <Modal
          title="Title"
          visible={this.props.visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
        //   onCancel={this.handleCancel}
          onCancel={this.props.onCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}
export default Modal_;