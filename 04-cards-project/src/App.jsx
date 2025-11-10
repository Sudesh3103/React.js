import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    companyName: "Apple Inc.",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 85,
    location: "Cupertino, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta Platforms",
    datePosted: "5 days ago",
    post: "Machine Learning Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    payPerHour: 70,
    location: "Menlo Park, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "1 day ago",
    post: "Software Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "Austin, TX, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google LLC",
    datePosted: "3 days ago",
    post: "Cloud DevOps Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 90,
    location: "Mountain View, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Amazon_icon.svg",
    companyName: "Amazon",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    payPerHour: 65,
    location: "Seattle, WA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 88,
    location: "Redmond, WA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Netflix_logo.svg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "AI Research Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 95,
    location: "Los Gatos, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/LinkedIn_logo_initials.png",
    companyName: "LinkedIn",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 55,
    location: "Sunnyvale, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Adobe_Corporate_Logo.png",
    companyName: "Adobe Systems",
    datePosted: "2 days ago",
    post: "UI/UX Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "San Jose, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "4 days ago",
    post: "Cloud Infrastructure Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 60,
    location: "New York, NY, USA"
  }
];

console.log(jobOpenings);


  return (
   <div className='parent'>
    {jobOpenings.map(function(elem){
      return <Card />
    })}
   </div>
  )
}

export default App
