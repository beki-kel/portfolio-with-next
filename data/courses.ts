import { SiCisco, SiCoursera } from 'react-icons/si';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

export type Course = {
    id: string;
    title: string;
    provider: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    iconSize?: number;
    iconClassName?: string;
    certificateUrl: string;
    description?: string;
};

export const courses: Course[] = [
    {
        id: "react-frontend",
        title: "Developing Front-End Apps with React",
        provider: "Coursera",
        icon: SiCoursera,
        iconSize: 96,
        iconClassName: "text-blue-600",
        certificateUrl: "https://coursera.org/verify/9QTMEDS6MHRR",
        description: "Comprehensive course covering React fundamentals and advanced concepts"
    },
    {
        id: "nodejs-backend",
        title: "Developing Back-End Apps with Node.js and Express",
        provider: "Coursera", 
        icon: SiCoursera,
        iconSize: 96,
        iconClassName: "text-blue-600",
        certificateUrl: "https://coursera.org/verify/H4FMHWKRXWZP",
        description: "Full-stack backend development with Node.js and Express framework"
    },
    {
        id: "networking-essentials",
        title: "Networking Essentials",
        provider: "Cisco",
        icon: SiCisco,
        iconSize: 96,
        iconClassName: "text-blue-500",
        certificateUrl: "https://www.credly.com/badges/11b0376f-eb9e-4025-a42c-30e75e1f175b/public_url",
        description: "Fundamental networking concepts and protocols"
    },
    {
        id: "supervised-learning",
        title: "Supervised Machine Learning",
        provider: "Stanford University",
        icon: FaUniversity,
        iconSize: 96,
        iconClassName: "text-red-600",
        certificateUrl: "https://coursera.org/share/25afbbe933a0ff30ea4736ceb08d129c",
        description: "Advanced supervised learning algorithms and techniques"
    },
    {
        id: "unsupervised-learning",
        title: "Unsupervised Learning",
        provider: "Stanford University",
        icon: FaUniversity,
        iconSize: 96,
        iconClassName: "text-red-600",
        certificateUrl: "https://coursera.org/share/52b2c7a8b3ea016cb9a3f647139519a2",
        description: "Clustering, dimensionality reduction, and unsupervised algorithms"
    },
    {
        id: "advanced-learning",
        title: "Advanced Learning Algorithms",
        provider: "Stanford University",
        icon: FaUniversity,
        iconSize: 96,
        iconClassName: "text-red-600",
        certificateUrl: "https://coursera.org/share/6dd3d7d8de4f456c9561a0a5f66db92f",
        description: "Deep learning, neural networks, and advanced ML algorithms"
    },
    {
        id: "advanced-rag",
        title: "Building And Evaluating Advanced RAG",
        provider: "DeepLearning.AI",
        icon: FaGraduationCap,
        iconSize: 96,
        iconClassName: "text-purple-600",
        certificateUrl: "https://learn.deeplearning.ai/accomplishments/e927f726-fb77-4073-a65e-e9408dd54695?usp=sharing",
        description: "Advanced Retrieval-Augmented Generation techniques and evaluation methods"
    }
];
