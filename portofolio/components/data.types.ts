
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
export const ProjectDataArray :{
    projectId: number;
    projectImage: string;
    projectName: string;
    projectCourses : string;
    projectDuration : string;
    tags: string[];
    projectUrl : string;
} []=[
    {
    projectId: 1,
    projectImage: 'https://www.captain-design.com/blog/content/images/2022/02/image-2.png',
    projectName: 'Online School Techers',
    projectCourses : 'HTML/CSS/JAVASCRIPT',
    projectDuration : "3 days",
    tags: ['web','ui'],
    projectUrl : ''
    },
    {
        projectId: 2,
        projectImage: 'https://cdn.dribbble.com/users/2390402/screenshots/17245318/with_sound.png?compress=1&resize=400x300&vertical=top',
        projectName: 'PinCode Edition',
        projectCourses : 'MERN Stack- Typescript',
        projectDuration : "3 days",
        tags: ['web','ui'],
        projectUrl : ''
    },
    {
        projectId: 3,
        projectImage: 'https://s3.envato.com/files/311567532/Image%20Preview%20Set%20Figma/01_preview.jpg',
        projectName: 'Typescript Guide',
        projectCourses : 'MERN Stack- Typescript',
        projectDuration : "3 days",
        tags: ['web'],
        projectUrl : ''
    },
    {
        projectId: 4,
        projectImage: 'https://cdn.dribbble.com/users/107759/screenshots/11039305/daily_kit_1_db.png?compress=1&resize=400x300',
        projectName: 'JobListing Application',
        projectCourses : 'PHP - Laravel',
        projectDuration : "3 days",
        tags: ['web'],
        projectUrl : ''
    },{
        projectId: 5,
        projectImage: 'https://www.captain-design.com/content/templates/school-solved-simple-html-template-code-for-school/68a2629c3f5e319af0edf95ad865d32a.jpeg?ver=15sd1sd',
        projectName: 'Umurimo UI',
        projectCourses : 'Figma',
        projectDuration : "2 days",
        tags: ['ui','web'],
        projectUrl : ''
    },{
        projectId: 6,
        projectImage: 'https://uifreebies.net/wp-content/uploads/2020/08/Orix-File-Manager-App-Free.jpg',
        projectName: 'Movie Now',
        projectCourses : 'Figma',
        projectDuration : "2 days",
        tags: ['web','ui'],
        projectUrl : ''
    }
]