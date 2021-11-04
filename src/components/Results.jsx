import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Results = (props) => {
    const {search, id} = useParams();
    const [apisearchdata, setApisearchdata] = useState([])
    // const [searched, setSearched] = useState(false)

    useEffect((e) => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then(response => { setApisearchdata(response.data) })
            .catch(err => { console.log(err) });
    }, [])

    return (
        <div>
            { apisearchdata && search === "people"?
            <div>
                <h2>{apisearchdata.name}</h2>
                <p>{apisearchdata.height}</p>
                <p>{apisearchdata.hair_color}</p>
                <p>{apisearchdata.eye_color}</p>
            </div>
            :null
            }
            { apisearchdata && search === "planets"?
            <div>
                <h2>{apisearchdata.name}</h2>
                <p>{apisearchdata.diameter}</p>
                <p>{apisearchdata.gravity}</p>
                <p>{apisearchdata.rotation_period}</p>
            </div>
            :null
            }

    

        </div>
    )
}
export default Results;