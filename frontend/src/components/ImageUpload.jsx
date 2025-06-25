import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [selected, setSelected] = useState(false);

    const uploaded = useSelector((state) => state.photo.roomPhoto);
    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
        console.log("hello",image);
        setSelected(true);
    };

    const handleUpload = async () => {
        if (!image) {
            alert("Please select an image!");
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        console.log(imageUrl);
        try {

            console.log("form",formData);
            setUploading(true);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/room/update`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });

            if (!response.ok) {
                console.log('Try again!');
            }
                        
            const data = await response.json();
            dispatch({ type: 'uploaded' });
            fetchImage();
        }

        catch (error) {
            console.error('Error uploading image:', error);
        }

        finally {
            setUploading(false);
        }

    }

    const fetchImage = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/room/get-photo/`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
                dispatch({ type : 'uploaded' })
            }
            else{
                dispatch({type : 'notUploaded'});
                console.log("Failed to fetch image");
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    useEffect(() => {
        fetchImage();
    }, [])

    
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {!uploaded && <>
                <input id='file-upload' name='image' type="file" accept="image/*" onChange={handleFileChange} className="p-2 border border-gray-300 rounded-2xl w-[700px] h-[400px] hidden" />
                {!selected && <label htmlFor="file-upload" className="cursor-pointer px-4 py-2 border-2 border-[#8a95ea] text-[#333333] rounded-2xl h-[300px] w-[540px] flex justify-center items-center">+ Add Image</label>}
                {selected && <img alt={image.name} className="h-[300px] object-fit" />}
                <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded-2xl" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload Image'}</button>
            </>}


            {uploaded && <>
                {imageUrl ?
                    <img src={imageUrl} alt="Room" className="object-fit rounded-[20px]" />
                    : 
                    <p>Loading image...</p>
                }
                <button onClick={() => {dispatch({ type: 'notUploaded' }); setSelected(false)}} className="px-4 py-2 bg-blue-500 text-white rounded-2xl" disabled={uploading}>Change</button>
            </>}

        </div>
    );
};

export default ImageUpload;
