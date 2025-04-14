import React, { useRef, useState } from 'react'

const ProfilePhotoSelector = ({
  image,
  setImage
}) => {

  const inputRef = useRef(null);
  const [previewUrl,setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {}

  const handleRemoveImage = () => {};

  const onChooseFile = () => {}

  return 
    <div className='flex justify-center mb-6'>
      <input 
      type="file"
      accept='image/*'
      ref={inputRef}
      onChange={handleImageChange}
      // className='hidden'
      />
    </div>
  
}

export default ProfilePhotoSelector
