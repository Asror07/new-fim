import { Select, SelectProps, Space } from 'antd';
import { useState } from 'react';
import { useTypedSelector } from 'src/app/store';
import './filter.scss';

// List of countries
const countries: string[] = [
   'Afghanistan',
   'Albania',
   'Algeria',
   'Andorra',
   'Angola',
   'Argentina',
   'Armenia',
   'Australia',
   'Austria',
   'Azerbaijan',
   'Bahamas',
   'Bahrain',
   'Bangladesh',
   'Barbados',
   'Belarus',
   'Belgium',
   'Belize',
   'Benin',
   'Bermuda',
   'Bhutan',
   'Bolivia',
   'Uzbekistan',
   // Add the rest of the countries
];

const optionsCountry: SelectProps['options'] = [];

countries.forEach((country) => {
   optionsCountry.push({
      value: country,
      label: country,
   });
});

// Multi-select options for language
const languages: string[] = [
   'English',
   'Spanish',
   'French',
   'German',
   'Italian',
   'Japanese',
   'Korean',
   'Russian',
   'Chinese',
   'Uzbek',
];
const optionsLanguage: SelectProps['options'] = [];

languages.forEach((language) => {
   optionsLanguage.push({
      value: language,
      label: language,
   });
});

/// Multi-select options for specialties
const specialty: string[] = [
   'Acute Internal Medicine',
   'Allergy and Clinical Immunology',
   'Anaesthetics',
   'Audiovestibular Medicine',
   'Cardiology',
   'Chemical Pathology',
   'Child and Adolescent Psychiatry',
   'Clinical Genetics',
   'Clinical Neurophysiology',
   'Clinical Oncology',
   'Clinical Pharmacology and Therapeutics',
   'Community Sexual and Reproductive Health',
   'Dermatology',
   'Emergency Medicine',
   'Endocrinology and Diabetes Mellitus',
   'Forensic Psychiatry',
   'Gastroenterology',
   'General (Internal) Medicine',
   'General Practice',
   'General Psychiatry',
   'Genitourinary Medicine',
   'Geriatric Medicine',
   'Haematology',
   'Immunology',
   'Infectious Diseases',
   'Intensive Care Medicine   ',
   'Medical Oncology',
   'Medical Ophthalmology',
   'Neurology',
   'Nuclear Medicine',
   'Obstetrics and Gynaecology',
   'Old Age Psychiatry',
   'Oral and Maxillofacial Surgery',
   'Paediatrics',
   // Add the rest of the specialties
];

const optionsSpecialty: SelectProps['options'] = [];

specialty.forEach((specialty) => {
   optionsSpecialty.push({
      value: specialty,
      label: specialty,
   });
});

const handleChange = (value: string | string[]) => {
   console.log(`Selected: ${value}`);
};

// 2 selects for specialties and subspecialties

const cityData = {
   'Acute Internal Medicine': ['Stroke Medicine'],
   Anaesthetics: [
      'Adult Cardiac Anaesthesiology',
      'Intensive Care Medicine',
      'Obstetric Anaesthesiology ',
      'Pain Medicine',
      'Paediatric Anaesthesiology',
   ],
   Cardiology: [
      'Adult Congenital Heart Disease',
      'Advanced Heart Failure and Transplant Cardiology',
      'Cardiac Electrophysiology',
      'Interventional Cardiology',
   ],
};

type CityName = keyof typeof cityData;

const provinceData: CityName[] = [
   'Acute Internal Medicine',
   'Anaesthetics',
   'Cardiology',
];

function FilterMarketPlaceSecsion() {
   // Colors from the store
   const { colors } = useTypedSelector((state) => state.layout);

   // Logics for selecting cities based on province

   const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
   const [secondCity, setSecondCity] = useState('' as CityName);

   const handleProvinceChange = (value: CityName) => {
      setCities(cityData[value]);
      // const newCities = value.flatMap((province) => cityData[province]);
      setSecondCity(cityData[value][0] as CityName);
   };

   const onSecondCityChange = (value: CityName) => {
      setSecondCity(value);
   };

   return (
      <div className="marketPlace_filter">
         <div className="marketPlace_filter-filter">
            <Space direction="vertical" wrap>
               <h3>Specialty</h3>
               <Select
                  allowClear
                  // mode="multiple"
                  defaultValue={provinceData[0]}
                  style={{ width: 250 }}
                  onChange={handleProvinceChange}
                  options={provinceData.map((province) => ({
                     label: province,
                     value: province,
                  }))}
               />
               <Select
                  // mode="multiple"
                  style={{ width: 250 }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city) => ({ label: city, value: city }))}
               />
            </Space>
            <div className="marketPlace_filter-specialty">
               {/* <Space direction="vertical" style={{ width: '100%' }}>
                  <Select
                     mode="tags"
                     placeholder="Please select"
                     defaultValue={['Paediatrics']}
                     onChange={handleChange}
                     style={{ width: 200 }}
                     options={optionsSpecialty}
                  />
               </Space> */}
            </div>
         </div>
         <div className="marketPlace_filter-country">
            <h3>Country</h3>
            {/* Add AutoComplete with Input */}
            <Space direction="vertical" style={{ width: '100%' }}>
               <Select
                  mode="tags"
                  placeholder="Please select"
                  defaultValue={['Usa']}
                  onChange={handleChange}
                  style={{ width: 250 }}
                  options={optionsCountry}
               />
            </Space>
         </div>

         <div className="marketPlace_filter-language">
            <h3>Language</h3>
            <Space direction="vertical" style={{ width: '100%' }}>
               <Select
                  mode="tags"
                  placeholder="Please select"
                  defaultValue={['English']}
                  onChange={handleChange}
                  style={{ width: 250 }}
                  options={optionsLanguage}
               />
            </Space>
         </div>
      </div>
   );
}

export default FilterMarketPlaceSecsion;
