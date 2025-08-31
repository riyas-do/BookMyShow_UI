import { Form, Button, Input } from "antd";
import { UserOutlined , LockOutlined, MailOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from "react-router";

export function Register(){
    return <div style={{ width: 350, margin: '100px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8}}>
        <h2>Register</h2>
        <Form name="Register" layout="vertical">
            <Form.Item name='name' label='Name'
              rules={[{required:true, message:'Name is required'}]}
            >
            <Input prefix={<UserOutlined />} placeholder="Enter your Name" />     
            </Form.Item>
            <Form.Item name='email' label='Email'
              rules={[{required:true, message:'Email is required'}]}
            >
            <Input prefix={<MailOutlined />} placeholder="Enter your mail Id" />
                
            </Form.Item>
            
                        <Form.Item htmlFor="password" name='password' label='Password'
                          rules={[{required:true, message:'password is required'}]}
                        >
                        <Input prefix={<LockOutlined />} placeholder="Enter your password" />
                            
                        </Form.Item>
            <Form.Item htmlType="submit" name='submit'
            >
            
            <Button block type="primary">Register</Button>
                
            </Form.Item>
            <p>Already a user?<Link to='/login'> Login </Link></p>
        </Form>
    </div>
}