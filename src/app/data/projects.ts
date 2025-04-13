
import { Project } from '@models/project.model';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Te Ayudo App',
    image: 'images/projects/te_ayudo_app.webp',
    description:
      "Te Ayudo App is a groundbreaking application created by and for autistic children. It is designed to facilitate communication and daily organization through the use of pictograms and personalized schedules. The app empowers children by providing an intuitive interface that helps them express their needs and manage daily tasks, while also offering parents and educators a reliable tool to track progress and adapt routines as needed. Built with Flutter, Firebase, and OneSignal for real-time notifications, the application supports robust authentication methods via email, password, and Google Sign-In, ensuring both security and ease of access. Its scalable architecture makes it a versatile solution for educational institutions and therapy centers looking to integrate technology into their programs.",
    tools: [
      {
        title: 'Flutter',
        image: 'images/tools/flutter.webp',
        link: 'https://flutter.dev/',
      },
      {
        title: 'Firebase',
        image: 'images/tools/firebase.webp',
        link: 'https://firebase.google.com/',
      },
      {
        title: 'OneSignal',
        image: 'images/tools/onesignal.svg',
        link: 'https://onesignal.com/',
      },
    ],
  },
  {
    id: 2,
    title: 'Cota City',
    image: 'images/projects/cota_city.webp',
    description:
      "Cota City is a mobile application specifically developed for a soccer school in Cotacachi, Ecuador. It streamlines the management of student data, tuition payments, class schedules, and other administrative tasks, making it an invaluable tool for both teachers and administrators. The app is built to handle the dynamic needs of a sports academy, ensuring that all information is updated in real time. It leverages the power of Flutter for a smooth user interface, while Node.js with GraphQL enables efficient data management on the backend. MongoDB is used for flexible data storage, and OneSignal provides a reliable notification system. Overall, Cota City is a comprehensive solution that enhances operational efficiency and supports the growth of the soccer school.",
    tools: [
      {
        title: 'Flutter',
        image: 'images/tools/flutter.webp',
        link: 'https://flutter.dev/',
      },
      {
        title: 'Node.js',
        image: 'images/tools/nodejs.svg',
        link: 'https://nodejs.org/',
      },
      {
        title: 'GraphQL',
        image: 'images/tools/graphql.webp',
        link: 'https://graphql.org/',
      },
      {
        title: 'MongoDB',
        image: 'images/tools/mongodb.webp',
        link: 'https://www.mongodb.com/',
      },
      {
        title: 'OneSignal',
        image: 'images/tools/onesignal.svg',
        link: 'https://onesignal.com/',
      },
    ],
  },
  {
    id: 3,
    title: 'MultiQuiz',
    image: 'images/projects/multiquiz.webp',
    description:
      "MultiQuiz is an interactive mini-game that offers users a fun and engaging way to test their knowledge across a variety of topics. The application allows users to log in and participate in quizzes that challenge their understanding while providing immediate feedback on their performance. At the end of each quiz, MultiQuiz offers a detailed breakdown of correct and incorrect answers, helping users learn from their mistakes. The app also includes customizable avatar creation, adding a personal touch to the gaming experience. With secure authentication via Google and email/password, MultiQuiz is designed to be both enjoyable and secure. Developed with Flutter and Firebase, it combines a seamless user interface with a powerful backend to deliver a truly interactive experience.",
    tools: [
      {
        title: 'Flutter',
        image: 'images/tools/flutter.webp',
        link: 'https://flutter.dev/',
      },
      {
        title: 'Firebase',
        image: 'images/tools/firebase.webp',
        link: 'https://firebase.google.com/',
      },
    ],
  },
  {
    id: 4,
    title: 'My Portfolio',
    image: 'images/projects/portfolio.webp',
    description:
      "My Portfolio is more than just a website—it's my personal showcase and a comprehensive presentation of my professional journey. This platform highlights my skills, projects, and experience in modern web development. Designed with precision using Angular 19, Tailwind CSS, and Material CDK, the portfolio combines aesthetic appeal with functional excellence. It not only reflects my technical abilities but also my commitment to continuous learning and innovation. Each project featured on this site is accompanied by detailed descriptions and technological insights, offering visitors an in-depth look at my approach to problem-solving and software design. Whether you're a prospective employer or a fellow developer, this portfolio provides a transparent view of my career and the technologies that drive my work.",
    tools: [
      {
        title: 'HTML',
        image: 'images/tools/html.webp',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        title: 'TypeScript',
        image: 'images/tools/typescript.svg',
        link: 'https://www.typescriptlang.org/',
      },
      {
        title: 'Angular',
        image: 'images/tools/angular.webp',
        link: 'https://angular.io/',
      },
      {
        title: 'Tailwind',
        image: 'images/tools/tailwind.webp',
        link: 'https://tailwindcss.com/',
      },
      {
        title: 'Material CDK',
        image: 'images/tools/material.webp',
        link: 'https://material.angular.io/',
      },
    ],
  },
];
