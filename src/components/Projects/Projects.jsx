import { Divider, Heading, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import banner from '../../assets/img/banner.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProjects from './CardProjects';

const Projects = () => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: isDesktop ? 3 : 1,
        autoplay: true,
        autoplaySpeed: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnHoverSpeed: true,
        pauseOnFocusSpeed: true,
        arrows: false,
        cssEase: "linear",
    };

    const data = [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/f9fb04aa-f55d-41f3-ab10-cae1cd73344e.png"
        },
        {
            id: 2,
            title: "Proyecto 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/3d535c9e-e812-4f6a-afc2-be7107c992b9.png"
        },
        {
            id: 3,
            title: "Proyecto 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png"
        },
        {
            id: 4,
            title: "Proyecto 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/6f668d65-840e-4605-b6cd-0903502bdba6.png"
        },
        {
            id: 5,
            title: "Proyecto 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/006e4505-35cf-452f-8fbb-38ad86b3f3e9.png"
        },
        {
            id: 6,
            title: "Proyecto 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/9d726c88-9e49-4b04-ac84-7bccc32ab617.png"
        },
        {
            id: 7,
            title: "Proyecto 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/0903d86f-5e06-46f2-87e6-6ad3020a6bec.png"
        },
        {
            id: 8,
            title: "Proyecto 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/3cc48fa0-8327-4561-aa04-dafc3b799909.png"
        },
        {
            id: 9,
            title: "Proyecto 9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/39dd6eb2-bb40-409f-b95f-c21d6542bb78.png"
        },
        {
            id: 10,
            title: "Proyecto 10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.",
            image: "https://edteam-media.s3.amazonaws.com/courses/medium/81dee8dc-1dbf-4bbc-b415-70f43d102bc1.png"
        },
    ]

    return (
        <>
            <Stack
                spacing={2}
                direction="column"
            >
                <Heading>Projects</Heading>
                <Divider my={2} />
                <Divider />
                <Image src={banner} borderRadius={'2xl'} />

            </Stack>
            <Divider my={4} />
            <Slider {...settings}>
                {data.map((item) => (
                    <CardProjects
                        key={item.id}
                        image={item.image}
                    />
                ))}
            </Slider>
        </>
    )
}

export default Projects;