import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import {
  PageSlideFade,
  StaggerChildren,
} from '../shared/animations/page-transitions'
import RepositoryCard from './offline-data-card'
import { MotionBox } from '../shared/animations/motion'

const OfflineData = ({ repositories }) => {
  return (
    <PageSlideFade>
      <StaggerChildren>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={12} w={'100%'}>
          {repositories.map((repo: { title: string; description: string; cover: string; blurHash: string; technologies: string[]; url: string; live: string; stars: string; fork: string }, index: React.Key) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                blurHash={repo.blurHash}
                technologies={repo.technologies}
                url={repo.url}
                live={repo.live}
                stars={repo.stars}
                fork={repo.fork}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  )
}

export default OfflineData
