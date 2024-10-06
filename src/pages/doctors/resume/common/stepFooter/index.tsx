import { message } from 'antd';
import { ArrowRight } from 'iconsax-react';
import { CustomButton } from 'src/components/common';
import { themeColors as colors } from 'src/constants/theme';
import './index.scss';

interface Props {
   isLoading?: boolean;
   nextText?: string;
   finishText?: string;
   finishVisible?: boolean;
   onNext?: () => void;
   onPrev?: () => void;
   onFinish?: () => void;
}

export default function StepFooter({
   nextText = 'Next',
   finishText = 'Save & Finish',
}: Props) {
   const handleFinish = () => {
      message.success('Your resume created successfully!');
   };
   return (
      <div className="form-footer">
         <CustomButton
            type={'default'}
            onClick={handleFinish}
            className="form-footer-finish"
         >
            {finishText}
         </CustomButton>

         <CustomButton type="primary">
            {nextText}
            <ArrowRight size="20" color={colors.dark.white} />
         </CustomButton>
      </div>
   );
}
