import { useState, useContext } from "react";
import { GlobalContext } from "../Component/Helper/GlobalContext";
import { Box, Typography } from "@mui/material";
import LazyLoad from "react-lazyload";

const SelectCat = () => {
    const { allData } = useContext(GlobalContext);
    const [forValue, setForValue] = useState(allData); 
    const [currentIndexMusic, setCurrentIndexMusic] = useState(0);
    const [currentGenre, setCurrentGenre] = useState("All"); // Track the current genre

    const handleData = (value = "All") => {
        setCurrentGenre(value); // Update the current genre
        if (value === "All") {
            setForValue(allData);
        } else {
            const filteredData = allData.filter(item => item.genre === value);
            setForValue(filteredData);
        }
        setCurrentIndexMusic(0); // Reset the current index when changing genre
    };

    const handlePreviousMusic = () => {
        setCurrentIndexMusic((prevIndex) =>
            prevIndex === 0 ? forValue.length - 1 : prevIndex - 1
        );
    };

    const handleNextMusic = () => {
        setCurrentIndexMusic((prevIndex) =>
            prevIndex === forValue.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box className="selectCatContainer">
            <header>
                <Typography variant="h6">Select Categories</Typography>
            </header>
            <section className="categoriesChoice">
                <button onClick={() => handleData("All")}>All</button>
                <button onClick={() => handleData("Pop")}>Pop</button>
                <button onClick={() => handleData("Rock")}>Rock</button>
                <button onClick={() => handleData("Hip Hop")}>Hip Hop</button>
                <button onClick={() => handleData("Electronic")}>Electronic</button>
            </section>

            <section className="showData">
                <Typography variant="h5">{currentGenre}</Typography>
                <LazyLoad>
                    {forValue.length > 0 && (
                        <ul key={currentIndexMusic} style={{ backgroundImage: `url(${forValue[currentIndexMusic].img})` }}>
                            <li>
                                <div className="playlistContent">
                                    <span className="songTitle">{forValue[currentIndexMusic].song}</span>
                                    <span className="actorName">{forValue[currentIndexMusic].actor}</span>
                                </div>
                            </li>
                        </ul>
                    )}
                </LazyLoad>
            </section>

            <section className="btnSelectContainer">
            <button onClick={handlePreviousMusic}>Previous</button>
            <button onClick={handleNextMusic}>Next</button>
            </section>
        </Box>
    );
};

export default SelectCat;
