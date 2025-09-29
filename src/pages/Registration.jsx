import { Form, Button, Input, message } from "antd";
import { UserOutlined , LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from "react-router";
import { axiosInstance} from '../api/index';
import { useNavigate } from 'react-router-dom';

export function Register(){
  const navigate = useNavigate();
  const onFinish = async (values) =>{
   try{
    const response = await axiosInstance.post('/register', values);
    message.success("User registration successful");
    navigate('/login');
   }catch(err){
    console.log(err);
    message.error("User registration failed");
    throw err;
   }
   
}
    return <div style={{ width: 350, margin: '100px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8}}>
        <h2>Register</h2>
        <Form name="Register" layout="vertical" onFinish={onFinish}>
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
            
                        <Form.Item name='password' label='Password'
                          rules={[{required:true, message:'password is required'}]}
                        >
                        <Input prefix={<LockOutlined />} placeholder="Enter your password" />
                            
                        </Form.Item>
            <Form.Item>
            
            <Button block type="primary" htmlType="submit">Register</Button>
                
            </Form.Item>
            <p>Already a user?<Link to='/login'> Login </Link></p>
        </Form>
    </div>
}