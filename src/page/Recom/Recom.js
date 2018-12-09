import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Recom.css';
import { List, Icon } from 'antd';
import { Rate } from 'antd';
import ModalForm from '../../component/ModalForm/ModalForm';

class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
 handleClick = () => {
        this.setState({
            visible: true,
        });
    }
    render() {
        const datas = [
            {
                href: '',
                title: `Bird On The Run`,
                src: require('../../assest/res1.jpg'),
                description: 'Chicken Shop',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 2
            },
            {
                href: '',
                title: `El Mecs`,
                src: require('../../assest/res9.jpg'),
                description: 'Mexican',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 3
            },
            {
                href: '',
                title: `Hidder Harbor`,
                src: require('../../assest/res2.jpg'),
                description: 'Hawaiian',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 4
            },
            {
                href: '',
                title: `Independent Brewing Company`,
                src: require('../../assest/res3.jpg'),
                description: 'Pubs',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 1
            },
            {
                href: '',
                title: `Aladdin Eatery`,
                src: require('../../assest/res4.jpg'),
                description: 'Middle Eastern',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 2
            },
            {
                href: '',
                title: 'Ramen Bar',
                src: require('../../assest/res5.jpg'),
                description: 'Ramen',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 3
            },
            {
                href: '',
                title: `Green Peppe`,
                src: require('../../assest/res6.jpg'),
                description: 'Korean',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 4
            },
            {
                href: '',
                title: `El Mecs`,
                src: require('../../assest/res7.jpg'),
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 2
            },
            {
                href: '',
                title: `El Mecs`,
                src: require('../../assest/res8.jpg'),
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                rating: 1
            },
        ];

        const listData = [];
         datas.map((data) => {
            listData.push({
                href: data.href,
                title: data.title,
                src: data.src,
                description: data.description,
                content: data.content,
                rating: data.rating
            })      
            }
        );

        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 8,
                    }}
                    dataSource={listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={<img width={272} alt="logo" src={item.src} />}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                            <div><Rate disabled defaultValue={item.rating} /></div>
                            {/* <Modal 
                      title = 'Rate Me'
                      visible = {this.state.visible}
                      onClick={() => this.handleClick()}
                      onCancel = {() => this.setState({visible: false})}
                    ></Modal>  */}
                    <ModalForm></ModalForm>
                        </List.Item>
                    )}
                />,
                mountNode
            </div>)
    };
};
export default Recommend;

 