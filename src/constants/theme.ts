export interface IThemeColor {
   primary: string;
   primaryLight: string;
   textPrimary: string;
   gray: string;
   gray2: string;
   gray3: string;
   gray4: string;
   gray5: string;
   gray6: string;
   sliderColor: string;
   inputColor: string;
   red: string;
   blue: string;
   black: string;
   white: string;
   white_08: string;
   info: string;
   warning: string;
   success: string;
   danger: string;
}

export type MarginTypes = {
   m?: React.CSSProperties['margin'];
   mt?: React.CSSProperties['marginTop'];
   mb?: React.CSSProperties['marginBottom'];
   ml?: React.CSSProperties['marginLeft'];
   mr?: React.CSSProperties['marginRight'];
};

export const themeColors = {
   light: {
      primary: '#15B6A4',
      primaryLight: '#0c57a6',
      textPrimary: '#131d2d',
      gray: '#eef2f8',
      gray2: '#f4f7fb',
      gray3: '#e5e9ee',
      gray4: '#c3c9d2',
      gray5: '#9fa7b3',
      gray6: '#565b65',
      sliderColor: '#7384a0',
      inputColor: '#f7f9fb',
      red: '#d62020',
      blue: '#1c5bd5',
      black: '#000',
      white: '#fff',
      white_08: 'rgba(255, 255, 255, 0.8)',
      info: '#0445b1',
      warning: '#997f21',
      success: '#21994a',
      danger: '#992121',
   },
   dark: {
      primary: '#15B6A4',
      primaryLight: '#0c57a6',
      textPrimary: '#131d2d',
      gray: '#eef2f8',
      gray2: '#f4f7fb',
      gray3: '#e5e9ee',
      gray4: '#c3c9d2',
      gray5: '#9fa7b3',
      gray6: '#565b65',
      sliderColor: '#7384a0',
      inputColor: '#f7f9fb',
      red: '#d62020',
      blue: '#1c5bd5',
      black: '#000',
      white: '#fff',
      white_01: 'rgba(255, 255, 255, 0.1)',
      white_02: 'rgba(255, 255, 255, 0.2)',
      white_03: 'rgba(255, 255, 255, 0.3)',
      white_04: 'rgba(255, 255, 255, 0.4)',
      white_05: 'rgba(255, 255, 255, 0.5)',
      white_06: 'rgba(255, 255, 255, 0.6)',
      white_07: 'rgba(255, 255, 255, 0.7)',
      white_08: 'rgba(255, 255, 255, 0.8)',
      white_09: 'rgba(255, 255, 255, 0.9)',
      black_09: 'rgba(0, 0, 0, 0.9)',
      black_08: 'rgba(0, 0, 0, 0.8)',
      black_07: 'rgba(0, 0, 0, 0.7)',
      black_06: 'rgba(0, 0, 0, 0.6)',
      black_05: 'rgba(0, 0, 0, 0.5)',
      black_04: 'rgba(0, 0, 0, 0.4)',
      black_03: 'rgba(0, 0, 0, 0.3)',
      black_02: 'rgba(0, 0, 0, 0.2)',
      black_01: 'rgba(0, 0, 0, 0.1)',
      info: '#0445b1',
      warning: '#997f21',
      success: '#21994a',
      danger: '#992121',
   },
};

export const shadows = {
   card: '0px 10px 20px 0px rgba(0, 0, 0, 0.06)',
};

export const flexStyles = {
   flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   flexColumn: {
      display: 'flex',
      flexDirection: 'column',
   },
   flexRow: {
      display: 'flex',
      flexDirection: 'row',
   },
   flexWrap: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   flexRowCenter: {
      display: 'flex',
      alignItems: 'center',
   },
   flexColumnCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   flexRowSpaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
   },
   flexRowSpaceAround: {
      display: 'flex',
      justifyContent: 'space-around',
   },
   flexRowSpaceEvenly: {
      display: 'flex',
      justifyContent: 'space-evenly',
   },
   flexColumnSpaceBetween: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   flexColumnSpaceAround: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
   },
   flexColumnSpaceEvenly: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
   },
   flexRowCenterSpaceBetween: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   flexColumnCenterSpaceBetween: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   flexColumnCenterSpaceAround: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   flexColumnCenterSpaceEvenly: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
   flexRowCenterSpaceAround: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   flexRowCenterSpaceEvenly: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
   flexRowCenterWrap: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
   flexColumnCenterWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
   flexRowCenterSpaceBetweenWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
   },
   flexColumnCenterSpaceBetweenWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
   },
   flexColumnCenterSpaceAroundWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
   },
};
