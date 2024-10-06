import CountUp from 'react-countup';
import './card.scss';
import { Card, Col, Row, Statistic } from 'antd';
interface CardProps {
   title: string;
   icon: string;
   percent: number;
   amount: number;
   label: string;
   text: string;
}

const CardItem: React.FC<CardProps> = ({
   title,
   icon,
   percent,
   amount,
   label,
   text,
}) => {
   return (
      <Card className="item fade-up">
         <div className="item-wrap">
            <div className="item-wrap-header">
               <img src={icon} alt={title} />
               <div className="card-header-text">
                  <h3>{title}</h3>
               </div>
            </div>
            <div className="item-wrap-content">
               <h3>
                  <Row gutter={16}>
                     <Col span={12}>
                        <Statistic
                           title={
                              <span className="statistic-title">{label}</span>
                           }
                           value={percent}
                        />
                     </Col>
                  </Row>
               </h3>
            </div>
            <div className="item-wrap-footer">
               <span>from</span>
               <div>
                  {amount} {text}
               </div>
            </div>
         </div>
      </Card>
   );
};

export default CardItem
