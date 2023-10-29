import { useState } from "react";

const Home = () => {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        // makeRequest();
    }

    const makeRequest = async () => {
        let form_data = new FormData();
        form_data.append('file', file);

        fetch(
            'http://localhost:8000/enhancer/enhance/', {
            body: form_data,
            method: 'POST',
        },
        ).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 details">
            <h1>Photo Enhancer</h1>
            <div className="details--description">
                <p>You are allowed to download, modify and use this template for your commercial or business websites. </p>

                <input type="file" id="actual-btn" onChange={handleFileChange} hidden />
                <label htmlFor="actual-btn" className="upload-button">Choose File</label>

            </div>
            <div className="gallery">
                <img className="grid_item" src={file} alt={file} />
                <img className="grid_item" src={file} alt={file} />
            </div>



        </div>
    );
}

export default Home;