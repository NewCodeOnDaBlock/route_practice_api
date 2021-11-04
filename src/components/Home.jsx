import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [searchpick, setSearchpick] = useState("people")
    const [idpick, setIdpick ] = useState("")
    const history = useHistory();

    const searchSelect = (e) => {
        setSearchpick(e.target.value)

    } 

    const searchId = (e) => {
        setIdpick(e.target.value)
    }
    
    const submitSearch = (e)=>{
        e.preventDefault();
        
        history.push(`/results/${searchpick}/${idpick}`)
    }

    return(
        
        <div>

            <form onSubmit={ submitSearch }>
                <label>Pick One:</label>
                <select onChange={searchSelect} value={searchpick}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <input type="number" onChange={ searchId } value={idpick}placeholder="0"/>
                <button>Search</button>
            </form>

        </div>
    )

}
export default Home;