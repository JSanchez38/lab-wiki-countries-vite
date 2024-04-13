import { useState, useEffect } from "react";
import countriesData from '../data/countries.json'
import { Link } from 'react-router-dom'

function HomePage() {
    const [countries, setCountries] = useState(countriesData)
    return (
        <>
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map(country => (
            <div key={country._id}>
                <Link to={`/${country.alpha3Code}`}>
                    <p>{country.name.common}</p>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                </Link>
            </div>
        ))}
        </>
    )
}

export default HomePage;
