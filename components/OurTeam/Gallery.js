import React from 'react'
import ImageGallery from 'react-image-gallery';
import OurTeam1 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide1.jpg';
import OurTeam2 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide2.jpg';
import OurTeam3 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide3.jpg';
import OurTeam4 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide4.jpg';
import OurTeam5 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide5.jpg';
import OurTeam6 from '../../public/assets/picturesFromOscar/ourTeam/ourTeamSlide6.jpg';



const images = [
    {
        original: OurTeam1,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const Gallery = () => {
    return <ImageGallery items={images} />
}

export default Gallery