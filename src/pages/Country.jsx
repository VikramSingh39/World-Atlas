import React, { use, useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi';
import { Loader } from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard'
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState('all');
    
// console.log(search,filter); 
   const searchCountry = (country)=>{
     if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase);
     } return country;
   }
  const filterCountries = countries.filter((country)=>searchCountry(country) && filterRegion(country))


  useEffect(()=>{
   startTransition(async()=>{
    const response = await getCountryData();
    setCountries(response.data);
   });
  },[]);

  if(isPending) return <Loader/>

  return <section className='country-section'>
    <SearchFilter search={search}
           setSearch={setSearch}
           filter={filter}
           setFilter={setFilter}
           />

   <ul className='grid grid-four-cols'>
    {
      filterCountries.map((currentCountry, index)=>{
        return <CountryCard country={currentCountry} key={index}/>
      })
    }
   </ul>
  </section>
}

export default Country