const GalleryDisplay = ({ state }) => {
    const { imageArray } = state;
    const testArray = [
        "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-1.png",
        "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-2.png",
        "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-3.png",
        "https://personal-page-images-3200.s3.us-east-1.amazonaws.com/projects/weatherWizard/weatherWizard-4.png"
    ];
    return (<div>
        {testArray.map((image, index) => (

            <img src={image} key={index} />
        ))}



    </div>);
}

export default GalleryDisplay