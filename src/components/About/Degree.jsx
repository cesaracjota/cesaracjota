import React from 'react';
import CardDegree from './CardDegree';
import UNSA_logo from '../../assets/img/logos/UNSA.jpg';
import TECSUP_logo from '../../assets/img/logos/TECSUP.jpg';

const Degrees = () => {

  const data = [
    {
      career: 'B.Tech. in Computer Engineering',
      institution: 'TECSUP',
      date: '2019 - 2022',
      url: 'https://www.tecsup.edu.pe/',
      cover_image: TECSUP_logo,
      content_list : 
      [
        {
          title: 'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
        },
        {
          title: 'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
        },
        {
          title: 'I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.',
        },
      ],
      icon: 'FaRegCommentDots'
    },
    {
      career: 'B.Tech. in Telecomunications Engineering',
      institution: 'UNSA',
      date: '2023 - PRESENT',
      url: 'https://www.unsa.edu.pe/',
      cover_image: UNSA_logo,
      content_list :
      [
        {
          title: 'I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.',
        },
        {
          title: 'Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.',
        },
        {
          title: 'During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.',
        },
      ],
      icon: 'RiChatHeartFill'
    }
  ];

  return (
    <>
      <CardDegree data={data} />
    </>
  )
}

export default Degrees;