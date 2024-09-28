import { IoSearch } from "react-icons/io5";
import { Box, Typography, Button, } from "@mui/material";
import { useState, useContext} from "react";
import { IoMoonSharp } from "react-icons/io5";
import { RiSunFill } from "react-icons/ri";
import { GlobalContext } from "./Helper/GlobalContext";
const Header1 = ()=>{
    const {isSwitch, handleSwitch,allData,setSearch,search} = useContext(GlobalContext)
    const [filteredSearch,setFilteredSearch] = useState("")

    const handleSearch = (event)=>{
      const query = event.target.value;
      setSearch(query);

      if (!query.trim()) {
        setFilteredSearch("");
        return;
      }
      
      const result = allData.find(item => item.song.toLowerCase().includes(query.toLowerCase()));
      if (result) {
        setFilteredSearch(result); 
      } else {
        setFilteredSearch(null); 
      }
    }

     return (
    <>
      <Box className="headerContainer">
        <header>
          {/* search part */}
          <section className="searchSection">
            <section className={`divSearch ${!filteredSearch?"divSearch2":""}`}>
              <Typography className="searchIconContainer">
                <IoSearch className="headerSearchIcon" />
              </Typography>
              <input
                type="search"
                id="search"
                onChange={handleSearch}
                value={search}
                placeholder="Search for a song"
                required
              />
            </section>

            {/* Conditionally display search result */}
            {filteredSearch ? (
              <div className="searchBar">
                <div className="divTheSearch">
                  <Typography>{filteredSearch.song}</Typography> 
                  <Typography>{filteredSearch.artist}</Typography> 
                  <IoSearch className="headerSearchIcon" />
                </div>
              </div>
            ) : (
              search && <div className="searchBar"><div className="divTheSearch">
                <Typography>No song found.</Typography> 
              </div></div>
            )}
          </section>

          {/* Other parts of the header */}
          <section className="headerSide2">
            <section className="registerContainer">
              <Button className="loginBtn">Login</Button>
              <Button className="loginBtn">SignUp</Button>
            </section>

            <section className="lightSwitch">
              <Button
                onClick={handleSwitch}
                className={`btnSwitch ${isSwitch ? "switchlight" : "switchDark"}`}
              >
                {isSwitch ? <RiSunFill className="btnLight" /> : <IoMoonSharp className="btbDark" />}
              </Button>
            </section>
          </section>
        </header>
      </Box>
    </>
  );
}
export default Header1