import type { RcFile, UploadFile } from 'antd/es/upload/interface';

export const clearMask = (val: string) => {
   return val
      .replaceAll(' ', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '');
};

export const makePhoneMask = (val: string) => {
   return `(${val[0] + val[1]})-${val[2] + val[3] + val[4]}-${val[5] + val[6]}-${
      val[7] + val[8]
   }`;
};

export const handlePreviewFile = async (file: UploadFile) => {
   let src = file.url as string;
   if (!src) {
      src = await new Promise((resolve) => {
         const reader = new FileReader();
         reader.readAsDataURL(file.originFileObj as RcFile);
         reader.onload = () => resolve(reader.result as string);
      });
   }
   const image = new Image();
   image.src = src;
   const imgWindow = window.open(src);
   imgWindow?.document.write(image.outerHTML);
};

export const redirectToNewTab = (url: string) => {
   window.open(url, '_blank');
};

export const prettierNumber = (val: number | undefined, seperator?: string) => {
   if (val) {
      let val_arr = val.toString().split('.');
      let number = val_arr[0].split('').reverse();
      let number_rest = val_arr[1] ? '.' + val_arr[1] : '';
      let prettier_number_arr: string[] = [];

      number.forEach((item, index) => {
         if (index > 0 && index % 3 === 0)
            prettier_number_arr.push(seperator || ',');
         prettier_number_arr.push(item);
      });

      return prettier_number_arr.reverse().join('') + number_rest;
   } else return '';
};

export const prettierPhone = (val: string) => {
   return `${val.slice(0, 4)}-${val.slice(4, 6)}-${val.slice(6, 9)}-${val.slice(
      9,
      11
   )}-${val.slice(11, 13)}`;
};

export const scrollToTop = () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
};

const lotsSubKeys = ['lots'];
const storeSubKeys = ['store_remains', 'store_sale'];
const bankSubKeys = ['cash', 'facture'];
const hrSubKeys = ['employees', 'salary'];
const cashflowSubKeys = ['currencies', 'sources', 'accounts', 'directions'];
const materialSubKeys = [
   'store',
   'row_material',
   'ready_tool',
   'tools',
   'basic_tools',
];

export const findSubKey = (path: string) => {
   const defPath = path.split('/')[1];
   if (lotsSubKeys.includes(defPath)) return 'sub_lots';
   else if (storeSubKeys.includes(defPath)) return 'store';
   else if (bankSubKeys.includes(defPath)) return 'bank';
   else if (hrSubKeys.includes(defPath)) return 'hr';
   else if (cashflowSubKeys.includes(defPath)) return 'cashflow';
   else if (materialSubKeys.includes(defPath)) return 'material_means';
   else return '';
};
