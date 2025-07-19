import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountryListShimmer'
import useFilter from '../hooks/useFilter' // Adjust the path if needed

export default function CountriesList({ query, region }) {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flag,population,region,capital,flags')
      .then((res) => res.json())
      .then((data) => {
        // 🔤 Sort data alphabetically by country name before setting state
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
        setCountriesData(sortedData)
      })
      .catch((err) => {
        console.error("Failed to fetch countries:", err)
      })
  }, [])

  const filteredCountries = useFilter(countriesData, query, region)

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      ))}
    </div>
  )
}
