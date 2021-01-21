import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useState}from 'react'
import styles from './_searchBar.module.scss'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function SearchBar({fetch}) {

    const [inputValue, setInputValue] = useState('')


    return (
        <div className={styles.searchBar}>
            <form className={styles.searchForm}onSubmit={(e)=>fetch(inputValue,e)}>
                <input type='text' className={styles.searchInput}value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Search"/>
                <span onClick={(e) =>fetch(inputValue,e)}  className={styles.barBtn}><FontAwesomeIcon icon={faSearch} /></span>
            </form>
            <Link to={`/search/${inputValue}`}  className={styles.viewMore}>Viemore</Link>


            {/* <a href='#' className={styles.viewMore}>View more...</a> */}
        </div>
    )
}

export default SearchBar