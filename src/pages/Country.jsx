import React, { use, useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi';
import { Loader } from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard'

const Country = ({limit}) => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [value, setValue] = useState('all');


  useEffect(()=>{
   startTransition(async()=>{
    const response = await getCountryData();
    setFilterCountry(response.data);
    setCountries(response.data);
   });
  },[]);

// Search and Filter Functionality
const handleSelectChange =(e)=>{
    const selectedValue = e.target.value;
    setValue(selectedValue);
};
useEffect(()=>{
  const searchTimeout = setTimeout(()=>{
    const inputSearch = searchText.toLowerCase();
    const selectedRegion = value.toLowerCase();

    const filtered = countries.filter((country)=>{
      const matchSearch = 
      country.name.common.toLowerCase().includes(inputSearch);

      const matchRegion = selectedRegion === "all" || 
      country.region.toLowerCase().includes(selectedRegion);
      
      return matchRegion && matchSearch;
    })
    setFilterCountry(filtered);
  },400);

  return ()=> clearTimeout(searchTimeout);
}, [searchText, value, countries])

const shouldLimit = limit && searchText.trim() === '' && value === 'all';
const visibleCountries = shouldLimit
  ? filterCountry.slice(0, limit)
  : filterCountry;

  if(isPending) return <Loader/> 

  return <section className='country-section'>
    <div className='searchInput'>
      <div>
        <input className='searchCountry'  type="text" placeholder='Search Country' value={searchText}
         onChange={(e)=> setSearchText(e.target.value)}/>
      </div>
      
         <div >
        <select
          className="select-section p-12 bg-white text-4xl rounded-xl outline-none"
          value={value}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>



   <ul className='grid grid-four-cols'>
    {
      visibleCountries.map((currentCountry, index)=>{
        return <CountryCard country={currentCountry} key={index}/>
      })
    }
   </ul>
  </section>
}

export default Country