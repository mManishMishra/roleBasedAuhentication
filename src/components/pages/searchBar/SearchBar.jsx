import { display } from '@mui/system';
import { useState } from 'react';
import Data from './dummySearch.json';

export const SearchBar=()=>{
     const[query, setQuery]= useState("")
    return(
        <>
        <div className='search'>
        <input placeholder='search' onChange={e=>setQuery(e.target.value)} />
        {Data.filter((search)=>{
            if(query===""){return search}
            else if(search.company.toLowerCase().includes(query.toLocaleLowerCase())){ return search}
        })
        .map((data,index)=>(
            <div className={query?'searchBox':'hideSearchBox'} key={index}>
                <p>{data.company}</p>
                <p>{data.type}</p>
            </div>
        
        ))}
        </div>
        </>
    )
}