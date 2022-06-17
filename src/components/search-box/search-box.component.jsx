import './search-box.style.css'
export const SearchBox = ({holderText, handleClick}) => 
{
    return <input 
            className = 'search'
            type = 'search'
            placeholder = {holderText}
            onChange={handleClick}
            />
}