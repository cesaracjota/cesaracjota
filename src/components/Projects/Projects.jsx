import { Divider, Heading, SimpleGrid, Stack, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import banner from '../../assets/img/banner.png';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CardProjects from './CardProjects';
import GithubCard from './GithubCard';
import { getStarredRepositories } from '../../services/api.service';
import { t } from 'i18next';
import { ToastChakra } from '../../helpers/toast';

const Projects = () => {

    // const isDesktop = useBreakpointValue({
    //     base: false,
    //     lg: true,
    // });

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 5000,
    //     slidesToShow: isDesktop ? 3 : 1,
    //     autoplay: true,
    //     autoplaySpeed: 1,
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     pauseOnHoverSpeed: true,
    //     pauseOnFocusSpeed: true,
    //     arrows: false,
    //     cssEase: "linear",
    // };

    // const data = [
    //     {
    //         id: 1,
    //         title: "Proyecto 1",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
    //         image: "https://edteam-media.s3.amazonaws.com/courses/medium/f9fb04aa-f55d-41f3-ab10-cae1cd73344e.png"
    //     },
    //     {
    //         id: 2,
    //         title: "Proyecto 2",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
    //         image: "https://edteam-media.s3.amazonaws.com/courses/medium/3d535c9e-e812-4f6a-afc2-be7107c992b9.png"
    //     },
    //     {
    //         id: 3,
    //         title: "Proyecto 3",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
    //         image: "https://edteam-media.s3.amazonaws.com/courses/medium/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png"
    //     },
    //     {
    //         id: 4,
    //         title: "Proyecto 4",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
    //         image: "https://edteam-media.s3.amazonaws.com/courses/medium/6f668d65-840e-4605-b6cd-0903502bdba6.png"
    //     },
    //     {
    //         id: 5,
    //         title: "Proyecto 5",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
    //         image: "https://edteam-media.s3.amazonaws.com/courses/medium/006e4505-35cf-452f-8fbb-38ad86b3f3e9.png"
    //     },
    // ]

    useEffect(() => {
        setLoading(true);
        async function loadProjects() {
            try{
                const data = await getStarredRepositories();
                setRepos(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                ToastChakra('ERROR AL CARGAR LA DATA', error?.message, 'error', 1500, 'bottom');
            }
        }

        loadProjects();

    }, [])

    return (
        <>
            <Stack
                spacing={2}
                direction="column"
            >
                <Heading
                    as="h2"
                    size="xl"
                    fontWeight="extrabold"
                >{t("projects")}</Heading>
            </Stack>
            <Divider my={4} />
            {/* <Slider {...settings}>
                {data.map((item) => (
                    <CardProjects
                        key={item.id}
                        image={item.image}
                    />
                ))}
            </Slider> */}
            {
                loading ? (
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} w="full">
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                        <Skeleton height="100px" borderRadius={'2xl'}/>
                    </SimpleGrid>
                ) :
                    (
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} w="full">
                            {repos.map((repo) => (
                                <GithubCard
                                    key={repo.id}
                                    title={repo.name}
                                    description={repo.description}
                                    topics={
                                        repo.topics.length > 0
                                            ? repo.topics
                                            : ["No topics"]
                                    }
                                    star={repo.stargazers_count}
                                    fork={repo.forks_count}
                                    url={repo.url}
                                />
                            ))}
                        </SimpleGrid>
                    )
            }

        </>
    )
}

export default Projects;