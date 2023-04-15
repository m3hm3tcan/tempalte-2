//  icons
import {
  FiYoutube,
  FiInstagram,
  FiFacebook,
  FiDribbble,
  FiPenTool,
  FiMusic,
  FiMail,
  FiMapPin,
  FiSpeaker,
  FiVideo,
} from "react-icons/fi";

// companies icons
import AmazonMusicIcon from "./assets/img/brands/amazon-music.png";
import GooglePlayIcon from "./assets/img/brands/googleplay.png";
import HeadsetIcon from "./assets/img/brands/headset.png";
import SpotifyIcon from "./assets/img/brands/spotify.png";
import YoutubeIcon from "./assets/img/brands/youtube.png";
import DeezerIcon from "./assets/img/brands/deezer.png";

// projects images
import Project1 from "./assets/img/projects/p1.jpg";
import Project2 from "./assets/img/projects/p2.jpg";
import Project3 from "./assets/img/projects/p3.jpg";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.jpg";
import Project6 from "./assets/img/projects/p6.jpg";
import Project7 from "./assets/img/projects/p7.jpg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "works",
    href: "works",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "videos",
    href: "videos",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiFacebook />,
    href: "",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// companies
export const brands = [
  {
    img: AmazonMusicIcon,
    href: "",
  },
  {
    img: GooglePlayIcon,
    href: "",
  },
  {
    img: DeezerIcon,
    href: "",
  },
  {
    img: YoutubeIcon,
    href: "",
  },
  {
    img: HeadsetIcon,
    href: "",
  },
  {
    img: SpotifyIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "concert name",
    category: "concert",
  },
  {
    id: "2",
    image: Project2,
    name: "tour name",
    category: "tour",
  },
  {
    id: "3",
    image: Project3,
    name: "concert name",
    category: "concert",
  },
  {
    id: "4",
    image: Project4,
    name: "record name",
    category: "record",
  },
  {
    id: "5",
    image: Project5,
    name: "festival name",
    category: "festival",
  },
  {
    id: "6",
    image: Project6,
    name: "festival name",
    category: "festival",
  },
  {
    id: "7",
    image: Project7,
    name: "broadcast name",
    category: "broadcast",
  },
  {
    id: "8",
    image: Project6,
    name: "broadcast name",
    category: "broadcast",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Concert",
  },
  {
    name: "Tour",
  },
  {
    name: "Record",
  },
  { name: "Broadcast" },
];

// services
export const services = [
  {
    icon: <FiMusic />,
    name: "Concerts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSpeaker />,
    name: "Interview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Private Lesson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiVideo />,
    name: "Records",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const videos = [
  {
    videoUrl: 'https://www.youtube.com/embed/aq3z2c4ha80?controls=1',
    videoText: "Minor Swing - Django Reinhardt (Dimitris Dekavallas & George Patsiotis)",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/lOO4UZ7RT3I?controls=1',
    videoText: "DIMITRIS DEKAVALLAS: Adagio -Concierto de Aranjuez -Joaquin Rodrigo (Danube Symphony Orchestra)",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/aq3z2c4ha80?controls=1',
    videoText: "Concierto de Aranjuez - Allegro con Spirito - Dimitris Dekavallas guitar",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Budapest, Hungary",
    description: "Serving clients worldwide",
  },
];
