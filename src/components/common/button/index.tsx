import { Button, ButtonProps, ConfigProvider } from 'antd';
import { useTypedSelector } from 'src/app/store';
import { MarginTypes } from 'src/constants/theme';

type CombinedProps = ButtonProps & MarginTypes;

interface Props extends CombinedProps {
   bg?: string;
   width?: React.CSSProperties['width'];
   height?: number;
   borderColor?: React.CSSProperties['borderColor'];
   textColor?: React.CSSProperties['color'];
}

export default function CustomButton({
   bg,
   width,
   height = 46,
   borderColor,
   textColor,
   m,
   mt,
   mb,
   ml,
   mr,
   style,
   ...rest
}: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorBgBase: bg,
               colorBorder: borderColor || colors.gray3,
            },
            components: {
               Button: {
                  controlHeight: height,
                  paddingContentHorizontal: 30,
                  colorText: textColor || colors.black,
               },
            },
         }}
      >
         <Button
            {...rest}
            style={{
               width,
               margin: m,
               marginTop: mt,
               marginBottom: mb,
               marginLeft: ml,
               marginRight: mr,
               ...style,
            }}
         />
      </ConfigProvider>
   );
}
