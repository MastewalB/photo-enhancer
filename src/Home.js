import { useState } from "react";

const Home = () => {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="home-component">
            <input type="file" id="actual-btn" onChange={handleFileChange} hidden />
            <label for="actual-btn" className="upload-button">Choose File</label>
            <img src={file} alt={file} />
        </div>
    );
}

export default Home;