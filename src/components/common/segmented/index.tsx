import { ConfigProvider, Segmented, SegmentedProps } from 'antd';
import { useTypedSelector } from 'src/app/store';

interface Props extends Omit<SegmentedProps, 'ref'> {
   colorText?: string;
   colorTextLabel?: string;
   itemSelectedBg?: string;
}

export default function CustomSegmented({
   colorText,
   colorTextLabel,
   itemSelectedBg,
   ...rest
}: Props) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {},
            components: {
               Segmented: {
                  controlHeight: 44,
                  colorText: colorText || colors.white,
                  colorTextLabel: colorTextLabel || colors.white,
                  colorPrimaryTextHover: colorTextLabel,
                  itemSelectedBg: itemSelectedBg || colors.primary,
               },
            },
         }}
      >
         <Segmented {...rest} />
      </ConfigProvider>
   );
}
