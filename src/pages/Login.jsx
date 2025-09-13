import { Form, Button, Input, message } from "antd";
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import { Link } from "react-router";
import { axiosInstance } from "../api";
import {useNavigate} from 'react-router-dom';

export function Login(){
  // const [message, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onFinish = async (values) =>{
    try{
      const {data} = await axiosInstance.post('/login',values);
      console.log(data.success);
      if(data.success){
        message.success(data.message);
        setTimeout(() => navigate('/'), 1000);
      }
    }catch(err){
      console.error(err);
      message.error("User login Failed");
    }
  }
    return  <div>
     
      <div style={{ width: 350, margin: '100px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8}}>
        <h2>Login</h2>
        <Form name="Login" layout="vertical" onFinish={onFinish}>
            <Form.Item name='email' label='Email'
              rules={[{required:true, message:'email is required'}]}
            >
            <Input prefix={<UserOutlined />} placeholder="Enter your email" />     
            </Form.Item>
            <Form.Item name='password' label='Password'
              rules={[{required:true, message:'password is required'}]}
            >
            <Input prefix={<LockOutlined />} placeholder="Enter your password" />
                
            </Form.Item>
            <Form.Item>
            <Button block type="primary" htmlType="submit">Login</Button>  
            </Form.Item>
            <p>New user?<Link to='/register'> Register </Link></p>
        </Form>
    </div>
      </div>
    
}