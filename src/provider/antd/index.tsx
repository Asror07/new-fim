import { ConfigProvider, theme } from 'antd';
import { PropsWithChildren } from 'react';
import { useTypedSelector } from 'src/app/store';
import { themeColors } from 'src/constants/theme';

function AntdProvider({ children }: PropsWithChildren) {
   const { colors } = useTypedSelector((state) => state.layout);

   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: colors.primary,
               colorBgBase: 'rgba(255, 255, 255, 0.1)',
               colorBorder: colors.gray3,
               colorText: colors.white,
               colorTextPlaceholder: colors.gray4,
               fontSize: 16,
               fontFamily: 'Inter',
            },
            components: {
               Input: {
                  borderRadius: 12,
                  controlHeight: 44,
                  fontSize: 15,
                  paddingInline: 18,
               },
               DatePicker: {
                  borderRadius: 12,
                  controlHeight: 44,
                  fontSize: 15,
                  paddingInline: 18,

                  colorTextDescription: themeColors.dark.white_08,
                  colorSplit: themeColors.dark.white_05,

                  colorBorderSecondary: themeColors.dark.white_07,
                  colorBgBase: themeColors.dark.white_07,
                  colorBgBlur: themeColors.dark.white_07,
                  colorBgContainer: themeColors.dark.white_07,
                  colorBgContainerDisabled: themeColors.dark.white_07,
                  colorBgElevated: themeColors.dark.white_02,
               },
               Select: {
                  borderRadius: 12,
                  controlHeight: 44,
                  fontSize: 15,
                  optionPadding: '12px 18px',
                  colorBgContainer: themeColors.dark.white_02,
                  colorBgElevated: themeColors.dark.white_02,

                  colorTextDescription: themeColors.dark.white_08,
                  colorSplit: themeColors.dark.white_02,
                  // colorBgElevated: themeColors.dark.black_05,
                  optionSelectedBg: themeColors.dark.primary,

                  colorText: themeColors.dark.white,
               },
               Form: {
                  labelFontSize: 14,
               },
               Breadcrumb: {
                  itemColor: colors.primary,
                  separatorColor: colors.black,
                  linkColor: colors.black,
                  separatorMargin: 6,
                  fontSize: 16,
               },
               Tabs: {},
               Steps: {
                  colorTextDescription: themeColors.dark.white_08,
                  colorSplit: themeColors.dark.white_05,
                  colorTextDisabled: themeColors.dark.white_05,
               },
            },
         }}
      >
         {children}
      </ConfigProvider>
   );
}

export default AntdProvider;
