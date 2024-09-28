import { Box, Typography} from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiPlaylistBold } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
const Aside =()=>{
    const [openPlaylist,setOpenPlaylist] = useState(true)

    const handlePlaylistOpen =()=>{
        setOpenPlaylist(prev=>!prev)
    }
    return(
        <>
            <aside className="asideContainer">
                <Box>
                    <header><Typography variant="h6">BeatTune</Typography></header>

                    <section className="asideSection1">
                        <section className="cutPartAside">
                            {/* home */}
                        <div className="homeAside">
                            <Typography ><AiOutlineHome className="asideIcon"/></Typography>
                            <Typography>Home</Typography>
                        </div>

                        {/* category */}
                        <div className="homeAside">
                            <Typography ><BiSolidCategoryAlt className="asideIcon"/></Typography>
                            <Typography>Category</Typography>
                        </div>

                        {/* artist */}
                        <div className="homeAside">
                            <Typography ><BsFillPersonFill className="asideIcon"/></Typography>
                            <Typography>Artists</Typography>
                        </div>

                        {/* playlist */}
                        <div className="playlist">
                        <div className="homeAside">
                            <Typography ><PiPlaylistBold className="asideIcon"/></Typography>
                            <Typography>Playlists</Typography>
                            <Typography onClick={handlePlaylistOpen}>{openPlaylist?<IoIosArrowDown className="asideArrow"/>:<IoIosArrowUp className="asideArrow"/>}</Typography>
                           
                        </div>
                        {!openPlaylist?
                            <div className="smallAsidePlaylist">
                                <div className="smallAside2">
                                <img src="/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg"/>
                                <Typography>Vibes & chills</Typography>
                                </div>

                                <div className="smallAside2">
                                <img src="/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg"/>
                                <Typography>Worship</Typography>
                                </div>

                                <div className="smallAside2">
                                <img src="/israel-palacio-Y20JJ_ddy9M-unsplash.jpg"/>
                                <Typography>Vibes & chills</Typography>
                                </div>

                                <div className="smallAside2">
                                <img src="/israel-palacio-Y20JJ_ddy9M-unsplash.jpg"/>
                                <Typography>Vibes & chills</Typography>
                                </div>
                            </div>:``
                        }

                        </div>
                        </section>
                        {/* logout */}
                        <div className="homeAside asidelogOut">
                            <Typography ><FiLogOut className="asideIcon"/></Typography>
                            <Typography>Logout</Typography>
                        </div>
                    </section>
                </Box>
            </aside>
        </>
    )
}
export default Aside