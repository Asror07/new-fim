import { Collapse, CollapseProps, ConfigProvider } from 'antd';
import { useTypedSelector } from 'src/app/store';

interface Props extends CollapseProps {}

function CustomCollapse({ ...rest }: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               borderRadius: 16,
            },
            components: {
               Collapse: {
                  borderRadius: 30,
                  headerBg: colors.gray3,
                  headerPadding: '24px 64px',
                  contentPadding: '0px 64px 48px 64px',
               },
            },
         }}
      >
         <Collapse {...rest} />
      </ConfigProvider>
   );
}

export default CustomCollapse;
