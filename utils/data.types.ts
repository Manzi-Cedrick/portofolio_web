
export const SkillsArray :{
    id: number;
    courseName : string;
    percentage : number;
    width : string;
    master: boolean;
    ranking : number;
}[] = [
{
    id: 1,
    courseName: 'HTML/CSS',
    percentage: 100,
    width: "100%",
    master: true,
    ranking: 10,
},
{
    id: 2,
    courseName: 'Java',
    percentage: 80,
    width: "80%",
    ranking: 10,
    master: true
},{
    id: 3,
    courseName: 'Javascript',
    percentage: 99,
    width: "99%",
    master: true,
    ranking: 10
},{
    id: 4,
    courseName: 'Node Js/Express Js',
    percentage: 100,
    width: "70%",
    master: true,
    ranking: 10
},{
    id: 5,
    courseName: 'React Js',
    percentage: 100,
    width: "50%",
    master: true,
    ranking: 10,

},
{
    id: 6,
    courseName: 'FOP',
    percentage: 100,
    width: "40%",
    master: true,
    ranking: 10,
}
]
export interface ProjectDataArray{
    projectId: number;
    projectImage: string;
    projectName: string;
    projectCourses : string;
    projectDuration : string;
    tags: string[];
    projectUrl : string;
}
export const  Project_arr : ProjectDataArray []=[
    {
    projectId: 1,
    projectImage: 'https://www.captain-design.com/blog/content/images/2022/02/image-2.png',
    projectName: 'Online School Techers',
    projectCourses : 'HTML/CSS/JAVASCRIPT',
    projectDuration : "3 days",
    tags: ['web'],
    projectUrl : ''
    },
    {
        projectId: 2,
        projectImage: 'https://templatesjungle.com/wp-content/uploads/edd/2022/01/ultras-casual-wear-ecommerce-figma-template-cover-1024x768.jpg',
        projectName: 'PinCode Edition',
        projectCourses : 'MERN Stack- Typescript',
        projectDuration : "3 days",
        tags: ['web','ui','others'],
        projectUrl : ''
    },
    {
        projectId: 3,
        projectImage: 'https://designshack.net/wp-content/uploads/Free-Agency-Website-Figma-Template.jpg',
        projectName: 'Typescript Guide',
        projectCourses : 'MERN Stack- Typescript',
        projectDuration : "3 days",
        tags: ['web','sanity'],
        projectUrl : ''
    },
    {
        projectId: 4,
        projectImage: 'https://www.vandelaydesign.com/wp-content/uploads/lykke.jpg',
        projectName: 'JobListing Application',
        projectCourses : 'PHP - Laravel',
        projectDuration : "3 days",
        tags: ['web'],
        projectUrl : ''
    },{
        projectId: 5,
        projectImage: 'https://assets.materialup.com/uploads/ba434abe-1c2d-4d55-b5dc-672d55b2675b/preview.jpg',
        projectName: 'Umurimo UI',
        projectCourses : 'Figma',
        projectDuration : "2 days",
        tags: ['ui','web'],
        projectUrl : ''
    },{
        projectId: 6,
        projectImage: 'https://figmaelements.com/wp-content/uploads/2021/03/figma-real-estate-template.png',
        projectName: 'Movie Now',
        projectCourses : 'Figma',
        projectDuration : "2 days",
        tags: ['web','ui','others'],
        projectUrl : ''
    }
]
export interface LinkProfiles {
    id: number;
    icon : string;
    socioMediaUrl : string;
    socialMediaName : string;
}
export const LinksProfile:LinkProfiles[]=[
{
    id: 1,
    icon: "FaInstagram",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "Instagram"
},{
    id: 2,
    icon: "FaFacebook",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "FaceBook"
},{
    id: 3,
    icon: "FaBehance",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "Behance"
},{
    id: 4,
    icon: "FaTwitter",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "Twitter"
},{
    id: 5,
    icon: "FaLinkedin",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "LinkedIn"
},{
    id: 6,
    icon: "FaDribble",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "Dribble"
},{
    id: 7,
    icon: "FaGithubAlt",
    socioMediaUrl: "http://instagram/cedrickmanzii01",
    socialMediaName: "Github"
}
]
export interface SkillSet{
    id:number;
    path:string;
    category:string;
}
export const Combination:SkillSet[]=[{
    id:1,
    path:"UI/UX",
    category : "Design"
},{
    id:2,
    path:"Frontend",
    category : "Development"
},{
    id:3,
    path:"Backend",
    category : "Development"
},{
    id:4,
    path:"Web3",
    category : "Technology"
},{
    id:5,
    path:"Freelancing",
    category : "Globally"
}]
export interface LoginStructure {
    email: string;
    password: string;
}
export interface RegisterStructure {
    username: string;
    email: string;
    password: string;
}

export const LoginFormDummy:LoginStructure={
    email: "",
    password : ""
}