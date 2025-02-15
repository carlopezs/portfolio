import { tools } from './tools';
import { Project } from '@models/project.model';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Te Ayudo App',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,
    tools: [
      { title: 'JavaScript', image: 'images/javascript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { title: 'HTML', image: 'images/html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { title: 'CSS', image: 'images/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ]
  },
  {
    id: 2,
    title: 'Cota City',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,
    tools: [
      { title: 'Angular', image: 'images/angular.png', link: 'https://angular.io/' },
      { title: 'TailWind', image: 'images/tailwind.png', link: 'https://tailwindcss.com/' },
      { title: 'Material', image: 'images/material.png', link: 'https://material.angular.io/' }
    ]
  },
  {
    id: 3,
    title: 'Multi Quiz',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,dasdasdasdsa`,
    tools: [
      { title: 'Flutter', image: 'images/flutter.png', link: 'https://flutter.dev/' },
      { title: 'MongoDB', image: 'images/mongodb.png', link: 'https://www.mongodb.com/' },
      { title: 'Java', image: 'images/java.png', link: 'https://www.java.com/' }
    ]
  },
  {
    id: 4,
    title: 'My Portfolio',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,
    tools: [
      { title: 'Spring', image: 'images/spring.png', link: 'https://spring.io/' },
      { title: 'Oracle', image: 'images/oracle.png', link: 'https://www.oracle.com/' },
      { title: 'Firebase', image: 'images/firebase.png', link: 'https://firebase.google.com/' }
    ]
  },
  {
    id: 5,
    title: 'My Portfolio',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,
    tools: [
      { title: 'Flutter', image: 'images/flutter.png', link: 'https://flutter.dev/' },
      { title: 'MongoDB', image: 'images/mongodb.png', link: 'https://www.mongodb.com/' },
      { title: 'Java', image: 'images/java.png', link: 'https://www.java.com/' }
    ]
  },
  {
    id: 6,
    title: 'My Portfolio',
    image: 'images/delete.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in fugit
    accusamus omnis eum suscipit`,
    tools: [
      { title: 'Spring', image: 'images/spring.png', link: 'https://spring.io/' },
      { title: 'Oracle', image: 'images/oracle.png', link: 'https://www.oracle.com/' },
      { title: 'Firebase', image: 'images/firebase.png', link: 'https://firebase.google.com/' }
    ]
  }
];
