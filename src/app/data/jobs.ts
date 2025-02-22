import { Job } from '@models/job.model';

export const jobs: Job[] = [
  {
    title: 'Gestor',
    description: `A leading financial technology provider for investment banking in Latin America. I was involved in the development of platforms that optimize financial operations, ensuring high performance and security.`,
    initDate: new Date('2023-01-15'),
    endDate: new Date('2023-12-31'),
  },
  {
    title: 'Icarus',
    description: `A personal entrepreneurial project with friends, where we focused on bringing software engineering solutions to Ecuador, particularly in Ibarra. We developed mobile apps and high-performance websites to help businesses optimize their processes.`,
    initDate: new Date('2022-05-01'),
    endDate: new Date('2023-04-30'),
  },
  {
    title: 'Plus',
    description: `An internet provider in Ibarra, where I completed my pre-professional internship. During this time, I supported various internal software projects, gaining hands-on experience in developing solutions tailored to the company's needs.`,
    initDate: new Date('2021-03-01'),
    endDate: new Date('2022-02-28'),
  },
  {
    title: 'Nous',
    description: `My first professional experience, where I contributed to the development of mobile applications and websites for companies looking to modernize their operations. This role helped me build a strong foundation in software development and digital transformation.`,
    initDate: new Date('2020-09-01'),
    endDate: new Date('2021-08-31'),
  },
];
