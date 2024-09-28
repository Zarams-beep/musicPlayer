import { useState, useContext, useRef, useEffect} from "react";
import { GlobalContext } from "../Component/Helper/GlobalContext";
import { Box } from '@mui/material';
import { FaPause, FaPlay } from "react-icons/fa";
import PropTypes from 'prop-types';

const UpperPart = ({ category = null }) => {
    const { allData } = useContext(GlobalContext);
    const [activeIndex, setActiveIndex] = useState(3);
    const audioRef = useRef(null);
    const [isPlayingIndex, setIsPlayingIndex] = useState(null);

    const handleShow = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        if (category !== null && allData.length > 3) {
            allData[3] = category;
        }
    }, [category, allData]); 

    const handlePlayer = (url, index) => {
        if (isPlayingIndex === index) {
            audioRef.current.pause();
            setIsPlayingIndex(null);
        } else {
            audioRef.current.src = url; 
            audioRef.current.play(); 
            setIsPlayingIndex(index);}
    };

    return (
        <Box className="upperPartContainer">
            <div className="upperPartContainer2">
                {allData.slice(0, 5).map((item, idx) => (
                    <ul
                        key={idx}
                        style={{ backgroundImage: `url(${item.img})` }}
                        className={`playlistCard playlistCard-${idx} ${activeIndex === idx ? "activeIt" : ""}`} // Apply 'active' class
                        onClick={() => handleShow(idx)} // Set active index on click
                    >
                        <button onClick={() => handlePlayer(item.spotify_link, idx)}>
                            {isPlayingIndex === idx ? <FaPause /> : <FaPlay />}
                        </button>
                        <li>
                            <div className="playlistContent">
                                <span className="songTitle">{item.song}</span>
                                <span className="actorName">{item.actor}</span>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
            {/* Audio element */}
            <audio ref={audioRef} />
        </Box>
    );
};
UpperPart.propTypes = {
    category: PropTypes.string
  };
export default UpperPart;
