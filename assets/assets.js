import name_black from './name-black.png';
import name_white from './name-white.png';
import profile_pic from './profile-pic.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import fifty_days_2024 from './50-days-2024.gif';
import fifty_days_2025 from './50-days-2025.gif';
import hundred_days_2024 from './100-days-2024.gif';
import two_hundred_days_2024 from './200-days-2024.gif';
import codechef_bronze from './codechef-bronze.png';
import hackerrank_cpp from './hackerrank-cpp.png';
import hackerrank_python from './hackerrank-python.png';
import docker from './docker.png';
import gear from './gear.png';
import gear_dark from './gear-dark.png';
import mysql from './mysql.png';
import jupyter from './jupyter.png';

import cpp from './cpp.png';
import python from './python.png';
import go from './go.png';

import kafka from './kafka.png';
import redis from './redis.png';
import postgresql from './postgres.png';
import newrelic from './newrelic.png';
import sqs from './sqs.png';
import cloudwatch from './cloudwatch.png';
import tinybird from './tinybird.png';
import s3 from './s3.png';
import lambda from './lambda.png';

export const assets = {
    profile_pic,
    name_black,
    name_white,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    fifty_days_2024,
    fifty_days_2025,
    hundred_days_2024,
    two_hundred_days_2024,
    codechef_bronze,
    hackerrank_cpp,
    hackerrank_python,
    docker,
    gear,
    gear_dark,
    mysql,
    jupyter,
    cpp,
    python,
    go,
    kafka,
    redis,
    postgresql,
    newrelic,
    sqs,
    cloudwatch,
    tinybird,
    s3,
    lambda
};

export const workData = [
    {
        title: 'Custom STL',
        description: 'C++ Project',
        bgImage: '/custom-STL.png',
        url: 'https://github.com/aditya-goyal1694/CustomSTL'
    },
    {
        title: 'Foodie Fiesta',
        description: 'Dockerised Web App',
        bgImage: '/foodie-fiesta.png',
        url: 'https://github.com/aditya-goyal1694/FoodieFiesta'
    },
    {
        title: 'Bookstore Management API',
        description: 'REST API in Golang',
        bgImage: '/bookstore-management.jpg',
        url: 'https://github.com/aditya-goyal1694/book-Store-Management-API'
    },
    {
        title: 'US Accidents EDA',
        description: 'Exploratory Data Analysis',
        bgImage: '/US-Accidents-EDA.png',
        url: 'https://github.com/aditya-goyal1694/US-Accidents-EDA'
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Go, C++, Python' },
    { icon: assets.gear, iconDark: assets.gear_dark, title: 'Tech Stack', description: 'Go, Kafka, AWS(S3, SQS, CloudWatch, Lambda), Redis, PostgreSQL, New Relic, TinyBird' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects across various domain and tech stack.' }
];

export const toolsData = [
    assets.go, assets.postgresql, assets.kafka, assets.sqs, assets.s3, assets.cloudwatch, assets.lambda, assets.newrelic, assets.tinybird, assets.redis, assets.docker
];


export const experienceData = [
    {
        title: 'SDE-Intern',
        company: 'Omniful Tech',
        duration: 'Jun 2025 - May 2026',
        techStack: ['Go', 'Kafka', 'AWS', 'Redis', 'PostgreSQL', 'New Relic', 'TinyBird'],
        summary: [
            'Optimized inventory upload worker reducing processing time by 50% and eliminating OOM risks',
            'Optimized 20+ APIs improving query execution time by 35-40% and database load by 30%',
            'Implemented access control system governing 360+ APIs with zero-downtime rollouts',
            'Refactored roles & permissions module with 10 v2 APIs across 12 microservices',
            'Debugged and resolved production issues using New Relic and CloudWatch',
            'Optimized hub service migration reducing API latency by 40%'
        ],
        caseStudies: [
            {
                title: 'Inventory Upload Worker Optimization',
                problem: 'Worker process hit OOM limits during peak loads due to inefficient memory usage with large datasets.',
                solution: 'Refactored from 4D/5D in-memory maps to a lightweight cache layer and optimized memory allocation patterns in Go.',
                impact: '50% reduction in processing time and complete elimination of OOM risks during peak traffic.'
            },
            {
                title: 'API & Database Performance Optimization',
                problem: '20+ APIs had inefficient queries causing high database load and slow response times.',
                solution: 'Eliminated SELECT * queries, implemented strategic indexing, and optimized complex joins in PostgreSQL.',
                impact: '35-40% reduction in query execution time and 30% reduction in overall database load.'
            },
            {
                title: 'Access Control System at Scale',
                problem: 'Need to govern authorization across 360+ APIs with complex hierarchical permissions.',
                solution: 'Implemented a centralized hub and seller-level access control system with zero-downtime rollout strategy.',
                impact: 'Enabled safe cross-team parallel development and improved system security posture.'
            },
            {
                title: 'Roles & Permissions Module Refactor',
                problem: 'Existing permissions system didn\'t support pricing plan scoping, limiting business flexibility.',
                solution: 'Refactored the entire module with 10 new v2 APIs across 12 microservices to support plan-based access.',
                impact: 'Improved permission visibility and enabled granular control for pricing plans.'
            },
            {
                title: 'Production Issue Debugging & Resolution',
                problem: 'Downstream services failed intermittently due to missing fields in Kafka events.',
                solution: 'Used New Relic and CloudWatch for end-to-end tracing to identify the root cause in the producer service.',
                impact: 'Resolved production issue with minimal customer impact and added validation guards.'
            },
            {
                title: 'Hub Service Migration & Latency Optimization',
                problem: 'Hub CRUD operations in WMS caused tight coupling and increased latency.',
                solution: 'Migrated hub CRUD logic to a dedicated hub service using Go routines for asynchronous processing.',
                impact: '40% reduction in API latency and improved microservice decoupling.'
            },
            {
                title: 'Worker & Consumer Process Migration',
                problem: '76 worker processes lacked centralized management and had significant code duplication.',
                solution: 'Migrated all processes to a centralized gocommons internal registry for better lifecycle management.',
                impact: 'Reduced code duplication and simplified management of background workers.'
            },
            {
                title: 'Inventory Action Logging & Reporting Foundation',
                problem: 'No audit trail existed for WMS inventory operations, making debugging and compliance difficult.',
                solution: 'Implemented a comprehensive action logging infrastructure using Kafka and PostgreSQL.',
                impact: 'Enabled compliance tracking and provided the foundation for 5 critical business reports.'
            },
            {
                title: 'Serverless PDF Generation Migration',
                problem: 'PDF generation in the service layer caused CPU bottlenecks during heavy loads.',
                solution: 'Shifted PDF generation tasks to AWS Lambda, decoupling it from the core service logic.',
                impact: 'Improved core service scalability and reduced response time for PDF requests.'
            }
        ]
    }
];