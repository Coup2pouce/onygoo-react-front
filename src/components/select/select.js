import React, { useState } from 'react';
import Select from 'react-select';



const CustomSelect = (props) => {

  
    const [selectedOption, setSelectedOption] = useState(null);
    const {options} = props;
  
  const handleChange = (v) => {
      console.log(v)
    setSelectedOption(v);
   
  };

    return (
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        

      />
    );
  
}

export default CustomSelect;