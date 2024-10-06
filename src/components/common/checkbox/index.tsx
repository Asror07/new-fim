import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';
import { useTypedSelector } from 'src/app/store';

interface Props extends CheckboxProps {
   size?: number;
}

function CustomCheckbox({ size = 16, ...rest }: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               borderRadius: 6,
               controlInteractiveSize: size,
               colorText: colors.red,
            },
            components: {
               Checkbox: {
                  colorPrimary: colors.inputColor,
                  colorPrimaryHover: colors.inputColor,
                  colorBorder: colors.gray4,
                  colorWhite: colors.textPrimary,
                  colorBgTextActive: colors.primary,
               },
            },
         }}
      >
         <Checkbox {...rest} />
      </ConfigProvider>
   );
}

export default CustomCheckbox;
