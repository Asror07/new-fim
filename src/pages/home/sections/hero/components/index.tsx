interface Project {
   icon: string;
   title: string;
   percent: number;
   label: string;
   amount: number;
   text: string;
}

interface CardData {
   content: Project[];
}

export const docum: CardData[] = [
   {
      content: [
         {
            title: 'Empowering Clinicians Globally',
            label: 'Doctors',
            percent: 27000,
            amount: 20,
            icon: './img/doctors.svg',
            text: 'countries',
         },
         {
            title: 'Enhancing Healthcare Services',
            label: 'Hospitals',
            percent: 1000,
            amount: 800,
            icon: './img/hospital.svg',
            text: 'countries',
         },
         {
            title: 'Accessing the Best Care Worldwide',
            label: 'Patients',
            percent: 27000,
            amount: 20,
            icon: './img/patient.svg',
            text: 'countries',
         },
      ],
   },
];
