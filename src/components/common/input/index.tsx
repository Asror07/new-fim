import { ConfigProvider, Input, InputProps } from 'antd';
import React from 'react';
import { useTypedSelector } from 'src/app/store';

interface Props extends InputProps {
   titleColor?: React.CSSProperties['color'];
   titleFontSize?: number;
}

function CustomInput({ titleColor, titleFontSize = 20, ...rest }: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorBgMask: 'rgba(28, 43, 82, 0.6)',
            },
            components: {
               Input: {},
            },
         }}
      >
         <Input {...rest} />
      </ConfigProvider>
   );
}

export default CustomInput;
