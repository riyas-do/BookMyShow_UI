import { Form, Button, Input } from "antd";
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from "react-router";

export function Login(){
    return  <div style={{ width: 350, margin: '100px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8}}>
        <h2>Login</h2>
        <Form name="Login" layout="vertical">
            <Form.Item name='username' label='Username'
              rules={[{required:true, message:'username is required'}]}
            >
            <Input prefix={<UserOutlined />} placeholder="Enter your username" />     
            </Form.Item>
            <Form.Item htmlFor="password" name='password' label='Password'
              rules={[{required:true, message:'password is required'}]}
            >
            <Input prefix={<LockOutlined />} placeholder="Enter your password" />
                
            </Form.Item>
            <Form.Item htmlType="submit" name='submit'
            >
            
            <Button block type="primary">Login</Button>
                
            </Form.Item>
            <p>New user?<Link to='/register'> Register </Link></p>
        </Form>
    </div>
    
}