import { useParams } from "react-router-dom";
import { useState } from "react";
import countryData from '../data/countries.json'


function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState(countryData)

    const { countryId } = useParams()

    return (
        <h1>Hola</h1>
    )
}

export default CountryDetails;
