import React from 'react'
import CardDegree from './CardDegree'
import Certifications from './Certifications';

const Degrees = () => {

  const data = [
    {
      career: 'B.Tech. in Computer Engineering',
      institution: 'TECSUP',
      date: '2019 - 2022',
      url: 'https://www.tecsup.edu.pe/',
      cover_image: 'https://scontent.faqp2-1.fna.fbcdn.net/v/t1.18169-9/13720_481974808521636_1939785989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=jrtCbQPG09cAX-HAJf1&_nc_ht=scontent.faqp2-1.fna&oh=00_AfA2oOR8ktMV2cL_3ELf-Nz4zGDS-hj5xDAj6iq380bkVA&oe=64741D68',
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
      cover_image: 'https://scontent.faqp2-3.fna.fbcdn.net/v/t1.6435-9/45780925_1950586715017778_6610517627087355904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=60Kga6I8EE8AX9nikvI&_nc_ht=scontent.faqp2-3.fna&oh=00_AfA-PrGXEi9-HyXoGEqpl_ZALFJwSYF4sd-T_Y37RSruFQ&oe=647AB978',
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
          <Certifications />
    </>
  )
}

export default Degrees;