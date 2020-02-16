import React from 'react';
import moment from 'moment';

const title = 'Experience';

const content = [
  {
    title: 'Front End Developer, Freelance',
    desc: `Project: SberKredo, https://sberkredo.ru/. 
        Developed an aggregation layer service using Apollo Server to pull data from different microservices and prepare them for the client, implemented client-side logic to interact with it.
        Implemented React front-end and Apollo Server logic for user money transfer (transferring money into and out of the system, investing in the borrowers' portfolios). Developed multiple React components for the main application and administrator website.
        Participated in the creation of a UI components library based on Ant Design. Developed several React Native components for the mobile application, introduced GraphQL for it.`,
    keywords:
      'React.JS, React Native, Redux, Ant Design, JavaScript, GraphQL (Apollo Client, Apollo Server, Apollo Cache in Memory), Git, Bitbucket',
    initialDate: moment('01/10/2018').format('MMM-YYYY'),
    lastDate: moment('01/06/2019').format('MMM-YYYY'),
  },
  {
    title: 'Full Stack Developer, Freelance',
    desc: `Migrated the application from Angular 4 to Angular 8.
        Implemented a comprehensive registration flow using AWS Cognito service (dynamical creation of Identity Pools and User Pools with the attached Policies and IAM Roles)
        Integrated Microsoft Graph into the application and developed an internal inbox in the application that supports major Microsoft Outlook features; developed internal calendar that integrates with Outlook Calendar reflecting all major functions.
        Inherited a moderately-large codebase (>10k lines of codes), performed debugging and fixing of critical business use-cases.`,
    keywords:
      'Angular.JS, Bootstrap, JavaScript, Arango DB, AWS (Cognito, S3), Microsoft Graph, Git, Bitbucket, Jenkins, Kubernetes',
    initialDate: moment('01/06/2018').format('MMM-YYYY'),
    lastDate: moment('01/02/2020').format('MMM-YYYY'),
  },
  {
    title: 'Node JS Developer, Freelance',
    desc: `Developed two microservices that process video data from Youtube and Dropbox bucket, providing results to the main service by means of GraphQL mutations for further analysis.`,
    keywords: 'JavaScript, GraphQL, Youtube API, Dropbox API',
    initialDate: moment('01/01/2018').format('MMM-YYYY'),
    lastDate: moment('01/03/2018').format('MMM-YYYY'),
  },
  {
    title: 'Full Stack Developer, Freelance',
    desc: `Front End development with React on Sails.js, server-side rendering of React on Express.js.
        Migrated the project from Sails.js to Express.js. Migrated Stripe payment integration from front-end to back-end. Made requests to the main server more efficient by reducing the total number of requests per page and eliminating overhead of each request.`,
    keywords:
      'React, server-side rendering with React, Sails.js, Express.js, Stripe, Chart.js, Bitbucket, Git',
    initialDate: moment('01/11/2017').format('MMM-YYYY'),
    lastDate: moment('01/03/2018').format('MMM-YYYY'),
  },
];

const Experience = ({ isCurrent }) => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='visible-xs-block colored-field text-center'>
        <h1>{title}</h1>
      </div>
      <div className='col-md-8 experience-content'>
        {content.map((element, index) => (
          <div className='row' key={`experience-${index}`}>
            <div className='col-md-2 flex-center-container flex-row-xs'>
              <h6>{element.initialDate}</h6>
              <h6>-</h6>
              <h6>{element.lastDate}</h6>
            </div>
            <div className='col-md-10'>
              <h4>{element.title}</h4>
              <p>{element.desc}</p>
              <p>
                <b>Keywords:</b> {element.keywords}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='hidden-xs col-md-4 colored-field text-center'>
        <h1 className='sticky'>{title}</h1>
      </div>
    </div>
  </div>
);

export default Experience;
