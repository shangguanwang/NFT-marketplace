import {PiPaintBrushDuotone, PiMagicWand, PiBasketball, PiPlanet} from 'react-icons/pi';
import bgArt from '../assets/bgArt.jpg';

import {AiOutlineUsb, AiOutlineCamera} from 'react-icons/ai';
import bgCollectible from '../assets/bgCollectible.jpg';

import {BsMusicNoteBeamed, BsCameraVideo} from 'react-icons/bs';
import bgMusic from '../assets/bgMusic.jpg';
import bgPhotography from '../assets/bgPhotography.jpg';
import bgVideo from '../assets/bgVideo.jpg';
import bgUtility from '../assets/bgUtility.jpg';
import bgBasketball from '../assets/bgBasketball.jpg';
import bgVirtualWorld from '../assets/bgVirtualWorld.jpg';

export const categoryData = [
    {   id: 1,
        title: "Art",
        icon: <PiPaintBrushDuotone size={80}/>,
        imgUrl: bgArt
    },
    {   id: 2,
        title: "Collectibles",
        icon: <AiOutlineUsb size={80}/>,
        imgUrl: bgCollectible
    },
    {   id: 3,
        title: "Music",
        icon: <BsMusicNoteBeamed size={80}/>,
        imgUrl: bgMusic
    },
    {   id: 4,
        title: "Photography",
        icon: <AiOutlineCamera size={80}/>,
        imgUrl: bgPhotography
    },
    {   id: 5,
        title: "Video",
        icon: <BsCameraVideo size={80}/>,
        imgUrl: bgVideo
    },
    {   id: 6,
        title: "Utility",
        icon: <PiMagicWand size={80}/>,
        imgUrl: bgUtility
    },
    {   id: 7,
        title: "Sports",
        icon: <PiBasketball size={80}/>,
        imgUrl: bgBasketball
    },
    {   id: 8,
        title: "Virtual Worlds",
        icon: <PiPlanet size={80}/>,
        imgUrl: bgVirtualWorld
    },
]