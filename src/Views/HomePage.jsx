import Aside from "../Component/Aside"
import Header1 from "../Component/Header1";
import UpperPart from "../Component/UpperPart";
import SelectCat from "../Component/SelectCat";
import { Box,} from "@mui/material";
import { useState, useContext} from "react";
import { GlobalContext } from "../Component/Helper/GlobalContext";
const HomePage =()=>{
    const {isSwitch, handleSwitch,allData,setSearch,search} = useContext(GlobalContext)
    
    return(
        <>
            <Aside/>
            <Header1/>
            <Box className="homeContainer">
                <UpperPart/>
                <SelectCat/>
            </Box>
        </>
    )
}
export default HomePage