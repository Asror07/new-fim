interface Item {
   id: number;
   name: string;
}

interface Groups {
   id: number;
   title: string;
   items: Item[];
}
export const data: Groups[] = [
   {
      id: 1,
      title: 'About',
      items: [
         { id: 1, name: 'Products' },
         { id: 2, name: 'Brand Assets' },
         { id: 3, name: 'Analytics' },
         { id: 4, name: 'Security' },
      ],
   },
   {
      id: 2,
      title: 'Governance',
      items: [
         { id: 1, name: 'Dashboard' },
         { id: 2, name: 'Forum' },
         { id: 3, name: 'Snapshot' },
      ],
   },
   {
      id: 3,
      title: 'Community',
      items: [
         { id: 1, name: 'Twitter' },
         { id: 2, name: 'Telegram' },
         { id: 3, name: 'Discord' },
         { id: 4, name: 'Linkedin' },
         { id: 5, name: 'Medium' },
      ],
   },
   {
      id: 4,
      title: 'Resources',
      items: [
         { id: 1, name: 'Documentation' },
         { id: 2, name: 'GitHub' },
         { id: 3, name: 'Risk Disclosure' },
         { id: 4, name: 'Legal Notice' },
         { id: 5, name: 'Restricted Persons' },
      ],
   },
];
const Item: React.FC<{ item: Item }> = ({ item }) => {
   return (
      <div>
         <h4>{item.name}</h4>
      </div>
   );
}
export const Group: React.FC<{ group: Groups }> = ({ group }) => {
   return (
      <div className="group">
         <h3>{group.title}</h3>
         <div className="items">
            {group.items.map((item) => (
               <Item key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};
