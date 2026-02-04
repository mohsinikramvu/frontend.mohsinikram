export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    screenshots: string[];
    link: string;
    category: string;
    color: string;
    role: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: "project1",
        title: "PriorAuth",
        description: "Prior Auth Support AI Providing Top Notch Healthcare assistance",
        longDescription: "PriorAuth is a comprehensive platform designed to streamline the workflow for healthcare providers. It offers tools for prior authorization, claims management, and patient care coordination. The platform aims to reduce the administrative burden on healthcare providers, allowing them to focus on their craft. Key features include automated prior authorizations, claims management, and patient care coordination.",
        image: "/portfolio/react/priorauth.png",
        screenshots: [
            "/portfolio/react/priorauth.png",
        ],
        link: "https://priorauthsupport.ai/",
        category: "React & Node",
        color: "#66d9ef",
        role: "Senior Frontend Team Lead",
        technologies: ["React", "Tailwind CSS", "Redux"]
    },
    {
        id: "project2",
        title: "Gigsta.AI",
        description: "Gigsta.AI is a platform that helps freelancers and small businesses to find and manage their gig work.",
        longDescription: "Gigsta.AI is a comprehensive platform designed to streamline the workflow for freelancers and small businesses. It offers tools for project management, invoicing, and connecting with clients. The platform aims to reduce the administrative burden on gig workers, allowing them to focus on their craft. Key features include automated invoicing, contract management, and a marketplace for finding new opportunities.",
        image: "/portfolio/react/gigsta-ai.png",
        screenshots: [
            "/portfolio/react/gigsta-ai.png",
        ],
        link: "https://gigsta.ai/",
        category: "React & Node",
        color: "#66d9ef",
        role: "Frontend Developer",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"]
    },
    {
        id: "project3",
        title: "DoneEasy",
        description: "Unlock the Future of Business Commerce with DoneEasy!",
        longDescription: "DoneEasy is a modern e-commerce solution tailored for businesses looking to scale their online presence. It provides a robust architecture for handling high traffic and complex product catalogs. The platform integrates seamlessly with various payment gateways and shipping providers, offering a unified dashboard for managing all aspects of online retail.",
        image: "/portfolio/nextjs/doneeasy-1.png",
        screenshots: [
            "/portfolio/nextjs/doneeasy-1.png",
        ],
        link: "https://www.doneeasy.io/",
        category: "NextJS",
        color: "#ffd93d",
        role: "Senior Frontend Team Lead",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"]
    },
    {
        id: "project4",
        title: "ForThem",
        description: "Queer Goods, Made right. ForThem is built by and for the queer community.",
        longDescription: "ForThem is a community-driven e-commerce platform focused on providing high-quality goods for the queer community. The project emphasizes inclusivity and accessibility, featuring a custom-built sizing engine and a user-friendly interface. The platform also hosts a blog and community forum to foster connection and support.",
        image: "/portfolio/nextjs/forthem.png",
        screenshots: [
            "/portfolio/nextjs/forthem.png",
        ],
        link: "https://forthem.com/",
        category: "NextCommerce",
        color: "#ff6b9d",
        role: "Senior Frontend Engineer",
        technologies: ["Next.js", "Shopify", "GraphQL", "Tailwind CSS"]
    },
    {
        id: "project5",
        title: "Reed Art Department",
        description: "We are an innovation laboratory for forward-thinking brands seeking creativity and cultural resonance to elevate their presence and impact.",
        longDescription: "We are an innovation laboratory for forward-thinking brands seeking creativity and cultural resonance to elevate their presence and impact.",
        image: "/portfolio/gatsbyjs/rat.png",
        screenshots: [
            "/portfolio/gatsbyjs/rat.png",
        ],
        link: "https://reedartdepartment.com/",
        category: "NextJS",
        color: "#ff6b9d",
        role: "Senior Frontend Engineer",
        technologies: ["Next.js", "Shopify", "GraphQL", "Tailwind CSS"]
    },
];
