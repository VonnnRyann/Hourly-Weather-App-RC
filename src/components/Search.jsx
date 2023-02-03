import {useState} from 'react'
import styled from 'styled-components'


const Search = ({setSearchResults}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchResults(search)
        setSearch('')
    }

  return (
    <StyledSearch>
    <div className='wow'>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Please Enter City Name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='search-box'
            />
        </form>
    </div>
    </StyledSearch>
  )
}

const StyledSearch = styled.div `
    margin-bottom:30px;

    input {
        width: 50%:
        height: 45px;
        border-radius: 10px;
        display: block;
        margin: auto;
        font-size: 20px;
        text-align: center;
        color: white;
        background-color: rgba(0,0,0,0.5);
    }

    .wow {
        height: 40px
    }
`

export default Search