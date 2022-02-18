import React, {Component} from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../utils';


class Login extends Component {
    state = {
        displayModal: false
    }
    render() {
        const { displayModal } = this.state;
        return (
            <div>
                <Button shape="round"
                        onClick={this.signinOnClick}
                        style={{ marginRight: 20 }}
                >
                    Login
                </Button>
                <Modal title="Log In"
                       visible={displayModal}
                       onCancel={this.handleCancel}
                       footer={null}
                       destoryOnClose={true}
                >
                    <Form
                        name="normal_login"
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            name="user_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }

    onFinish = (values) => {
        // step1: collect username/password from the form
        // step2: send data to the server
        console.log('Received values of form: ', values);
        login(values)
            .then( res => {
                console.log(res);
                // close the modal
                this.setState({displayModal: false})
                // inform App.js( login status )
                this.props.onSuccess();
                message.success(`Welcome, ${res.name}`)
            })
            .catch( err => {
                message.error(err.message)
            })

    };

    signinOnClick = () => {
        // displayModal => true
        console.log('sign in clicked');
        this.setState({displayModal: true})
    }

    handleCancel = () => {
        // displayModal => false
        console.log('cancel clicked')
        this.setState({displayModal: false})
    }

}

export default Login;