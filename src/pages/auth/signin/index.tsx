import {
   CheckboxFormItem,
   CustomForm,
   InputFormItem,
} from 'src/components/form';
import './index.scss';
import { CustomButton } from 'src/components/common';
import { Col, Divider } from 'antd';
import { AppleIcon, GoogleIcon, LinkedinIcon } from 'src/components/icons';

export default function SignIn() {
   return (
      <CustomForm className="signup_form">
         <InputFormItem name="email" label="Email" message="Enter email!" />
         <InputFormItem
            name="password"
            label="Password"
            message="Enter password!"
         />
         <CheckboxFormItem label="Remember me" />
         <Col span={24}>
            <CustomButton type="primary" htmlType="submit" width="100%">
               Submit
            </CustomButton>
         </Col>
         <Col span={24}>
            <Divider style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
               Sign in with
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
   );
}
