import { AutoComplete, AutoCompleteProps, ConfigProvider } from 'antd';
import React from 'react';
import { useTypedSelector } from 'src/app/store';

interface Props extends AutoCompleteProps {
   titleColor?: React.CSSProperties['color'];
   titleFontSize?: number;
}

function CustomAutoComplete({
   titleColor,
   titleFontSize = 20,
   ...rest
}: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorBgMask: 'rgba(28, 43, 82, 0.6)',
            },
            components: {
               Input: {
                  colorBgContainer: 'red',
                  colorBgBase: 'red',
                  //   colorText: 'red',
               },
            },
         }}
      >
         <AutoComplete {...rest} />
      </ConfigProvider>
   );
}

export default CustomAutoComplete;
