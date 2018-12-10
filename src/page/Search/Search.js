import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Search.css';
import { List, Icon } from 'antd';
import { Input } from 'antd';
import { Rate } from 'antd';
import ModalForm from '../../component/ModalForm/ModalForm';
import Axios from 'axios';

const Search = Input.Search;

class SearchList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: this.props.data,
            // value: '',
            // isSearched: false
            // url: ''
        }
    }

    render() {
        const { datas } = this.state;
        const listData = [];
        let n = 1;
        datas.map((data) => {
            listData.push({
                href: "",
                title: data.name,
                src: require(('../../assest/res' + n + '.jpg')),
                description: data.categories,
                content: "",
                rating: data.stars,
                business_id: data.business_id
            })     
            n ++
        });
    
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
                    <ModalForm 
                        name = {item.name}
                        cate = {item.categories}
                        business_id = {item.business_id}></ModalForm>
                        </List.Item>
                    )}
                    
                />
            </div>
        )
    }
}

class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            // userId: "Yimeng",
            data: [],
            value: '',
            isSearched: false
        }
    }
    handleSearch = (value, userId) => {
        // console.log(value)
        this.submitSearch(value, userId)
    }

    submitSearch = async(value, userId) => {
        const rate = this.getSearch(value, userId)
        .then(response => {
            if (response.data) {
                console.log(response.data.result)
                this.setState({
                    isSearched: true,
                    data: response.data.result
                })
            }
        })
    }


    getSearch = (value, userId) => {
        try {                 
            return Axios.get("http://localhost:5000/adaptivesearch/" + value + "/" + "Yimeng")
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const value = this.state.value
        const isSearched = this.state.isSearched
        const data = this.state.data
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={this.handleSearch}
                    enterButton
                />
                <div>
                    {isSearched && <SearchList data = {data}></SearchList>}
                </div>
            </div>)
    };
};
export default Recommend;

