import React from 'react';
import AnalyticsCard from './AnaliticsCard';
import { SimpleGrid } from '@chakra-ui/react';

const Dashboard = () => {

  const data = [
    {
      id: 1,
      title: 'Total Visitors',
      subtitle: 'You made an extra 35,000 this year',
      value: '1234',
      icon: 'fa fa-users',
      color: 'primary',
    },
    {
      id: 2,
      title: 'Total Orders',
      subtitle: 'You made an extra 35,000 this year',
      value: '1234',
      icon: 'fa fa-shopping-cart',
      color: 'success',
    },
    {
      id: 3,
      title: 'Total Sales',
      subtitle: 'You made an extra 35,000 this year',
      value: '1234',
      icon: 'fa fa-dollar',
      color: 'warning',
    },
    {
      id: 4,
      title: 'Total Earnings',
      subtitle: 'You made an extra 35,000 this year',
      value: '1234',
      icon: 'fa fa-money',
      color: 'danger',
    },
  ];
  
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing="6"
      >
        <AnalyticsCard data={data} />
      </SimpleGrid>
    </>
  )
}

export default Dashboard;