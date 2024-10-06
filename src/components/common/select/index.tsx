import { ConfigProvider, Input, InputProps, Select, SelectProps } from 'antd';
import React from 'react';
import { useTypedSelector } from 'src/app/store';

interface Props extends SelectProps {}

function CustomSelect({}: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorBgMask: 'rgba(28, 43, 82, 0.6)',
            },
            components: {
               Select: {},
            },
         }}
      >
         <Select />
      </ConfigProvider>
   );
}

export default CustomSelect;
