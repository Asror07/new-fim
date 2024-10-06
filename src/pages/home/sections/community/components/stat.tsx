import React from 'react';

interface StatBlockProps {
   value: string;
   label: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label }) => (
   <div className="value">
      <h2>{value}</h2>
      <p>{label}</p>
   </div>
);

const StatsBlock: React.FC = () => {
   const valuesData = [
      { value: '3.7K', label: 'Token holders' },
      { value: '3.6M', label: 'Delegated addresses' },
      { value: '115', label: 'Token holders' },
      { value: '22', label: 'Proposals' },
   ];

   return (
      <div className="values-block">
         {valuesData.map((item, index) => (
            <StatBlock key={index} value={item.value} label={item.label} />
         ))}
      </div>
   );
};

export default StatsBlock;
