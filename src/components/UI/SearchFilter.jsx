
const SearchFilter = ({search, setSearch, filter, SetFilter}) => {
   
    const handleInputChange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    
    const handleSelectChange = (e)=>{
        e.preventDefault();
        SetFilter(e.target.value);
    }

  return <section className='section-searchFilter container'>
    <div>
          <input type="text" placeholder='search' value={search} onChange={handleInputChange}/>
    </div>
    
          <div>
        <button onClick={() => sortCountries("asc")}>Ascending </button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Descending</button>
      </div>

   <div>
    <div>
        <select
          className="select-section"
          value={filter}
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
   
  </section>
}

export default SearchFilter;