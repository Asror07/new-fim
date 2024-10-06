import { Col, Divider } from 'antd';
import { CustomButton } from 'src/components/common';
import { CustomForm, InputFormItem } from 'src/components/form';
import { AppleIcon, GoogleIcon, LinkedinIcon } from 'src/components/icons';
import './index.scss';

function SignUp() {
   return (
      <div className="auth">
         <CustomForm className="signup_form">
            <InputFormItem name="email" label="Email" message="Enter email!" />
            <InputFormItem
               name="username"
               label="Username"
               message="Enter your username!"
            />
            <InputFormItem
               name="password"
               label="Password"
               message="Enter password!"
            />
            <Col span={24}>
               <CustomButton
                  className="signup_form-submit_button"
                  htmlType="submit"
                  width="100%"
                  type="primary"
               >
                  Sign up
               </CustomButton>
            </Col>
            <Col span={24}>
               <Divider style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Sign up with
               </Divider>
            </Col>
            <Col span={24} className="signup_form-icons_group">
               <div>
                  <GoogleIcon width={16} color="rgba(255, 255, 255, 0.8)" />
               </div>
               <div>
                  <LinkedinIcon width={16} color="rgba(255, 255, 255, 0.8)" />
               </div>
               <div>
                  <AppleIcon width={16} color="rgba(255, 255, 255, 0.8)" />
               </div>
            </Col>
         </CustomForm>
      </div>
   );
}

export default SignUp;
