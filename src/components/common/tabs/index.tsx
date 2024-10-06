import { ConfigProvider, Tabs, TabsProps } from 'antd';
import { useTypedSelector } from 'src/app/store';

interface Props extends TabsProps {
   fontSize?: number;
   gap?: 50 | 30;
}

function CustomTabs({ fontSize = 20, gap = 50, ...rest }: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: colors.textPrimary,
               colorPrimaryBorder: 'red',
               lineWidth: 0,
            },
            components: {
               Tabs: {
                  fontSize,
                  colorText: colors.gray5,
                  inkBarColor: colors.blue,
                  horizontalItemGutter: gap,
               },
            },
         }}
      >
         <Tabs {...rest} />
      </ConfigProvider>
   );
}

export default CustomTabs;
