import { Tabs, Modal } from 'antd';
import { useState } from 'react';
import './protocol.scss';

type CardGroupKey = 'doctors' | 'hospitals' | 'patients';

const HomeProtocolSection = () => {
   const [activeGroup, setActiveGroup] = useState<CardGroupKey>('doctors');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState<{ title: string; content: string } | null>(null);

   const onChange = (key: string) => {
      if (key === '1') {
         setActiveGroup('doctors');
      } else if (key === '2') {
         setActiveGroup('hospitals');
      } else if (key === '3') {
         setActiveGroup('patients');
      }
   };

   const showModal = (card: { title: string; content: string }) => {
      setSelectedCard(card);
      setIsModalOpen(true);
   };

   const handleModalClose = () => {
      setIsModalOpen(false);
      setSelectedCard(null);
   };

   return (
      <section className="protocol">
         <div className="protocol-container">
            <h3 className="protocol-container-title">Connecting Across Borders</h3>
            <div className="protocol-container-list">
               <Tabs
                  className="protocol-container-list-item"
                  defaultActiveKey="1"
                  centered
                  onChange={onChange}
                  items={[
                     { label: 'Doctors', key: '1' },
                     { label: 'Hospitals', key: '2' },
                     { label: 'Patients', key: '3' },
                  ]}
               />
            </div>
            <div className="cards-container">{renderCards(activeGroup, showModal)}</div>

            {/* Modal to display card content */}
            <Modal
               title={selectedCard?.title}
               visible={isModalOpen}
               onCancel={handleModalClose}
               footer={null}
            >
               <p>{selectedCard?.content}</p>
            </Modal>
         </div>
      </section>
   );
};

export default HomeProtocolSection;

const renderCards = (group: CardGroupKey, showModal: (card: { title: string; content: string }) => void) => {
   return cardGroups[group].map((card, index) => (
      <div className="card" key={index} onClick={() => showModal(card)}>
         <a className="card-logo" target="_blank" rel="noopener noreferrer">
            <h3>{card.title}</h3>
         </a>
      </div>
   ));
};

const cardGroups: Record<CardGroupKey, { title: string; content: string }[]> = {
   doctors: [
      {
         title: 'Unified Professional Profiles',
         content: 'Doctors can maintain a global profile for opportunities.',
      },
      {
         title: 'Universal Seamless Mobility',
         content: 'Facilitate easier transitions between countries.',
      },
      {
         title: 'Career Advancement',
         content: 'Access to global career opportunities.',
      },
      {
         title: 'Global Networking',
         content: 'Connect with peers from around the world.',
      },
      {
         title: 'Personalized Matches',
         content: 'Find the perfect professional opportunities.',
      },
   ],
   hospitals: [
      {
         title: 'Second Opinions',
         content: 'Access experts worldwide for second opinions.',
      },
      {
         title: 'Quality Assurance',
         content: 'Ensure high standards of care globally.',
      },
      {
         title: 'Fill Critical Roles',
         content: 'Quickly find specialists to fill key positions.',
      },
      {
         title: 'Global Talent Pipeline',
         content: 'Develop a pipeline of top medical professionals.',
      },
      {
         title: 'International Collaboration',
         content: 'Partner with leading hospitals worldwide.',
      },
   ],
   patients: [
      {
         title: 'Find Your Ideal Doctor',
         content: 'Search globally for specialists that meet your needs.',
      },
      {
         title: 'Global Expertise',
         content: 'Access the best medical professionals from across the globe.',
      },
      {
         title: 'Informed Decisions',
         content: 'Make healthcare decisions with confidence.',
      },
      {
         title: 'Quality Care',
         content: 'Receive care from the top hospitals and doctors.',
      },
      {
         title: 'Avoid Delays',
         content: 'Reduce wait times and get timely treatment.',
      },
   ],
};
