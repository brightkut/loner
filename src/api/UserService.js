export const getProfileDesc = (birthDateStr) =>{
    const birthDate = new Date(birthDateStr);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference between the current date and the birthdate
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    return "I'm a teeny Backend Developer who want to learn new thing with " + age +" years old. For my\n" +
        "                                    free time\n" +
        "                                    I\n" +
        "                                    love more\n" +
        "                                    to coding and play game and my favorite game is Dota2. You ask me if you want to\n" +
        "                                    play haha.\n" +
        "                                    I am\n" +
        "                                    not believe in word\n" +
        "                                    \"Genius\" but I believe with \"Try hard\"."
}

export const mockUserProfile = {
    profileImageUrl: "https://i.ibb.co/H7cnW0Q/profile.jpg",
    position: "Software Developer",
    profileDesc: getProfileDesc("1997/03/29"),
    githubUrl: "https://github.com/brightkut",
    linkedInUrl: "https://www.linkedin.com/in/disorn-thitikornkovit-565526186/",
    steamUrl: "https://steamcommunity.com/id/brightkuq/",
    instagramUrl: "https://www.instagram.com/brighteloy/",
    educations: [
        {
            topic: "Internship of summer student training program in NCU Taiwan",
            period: "1 June - 31 July 2018",
            details: "Designed and developed a real-time chat application using Kinect v2 for gesture-based interaction,\n" +
                "utilizing websockets for communication and deployed on Heroku for cloud hosting.",
            learnings: [
                {
                    key: ["Websocket","NodeJS","C#","Heroku"]
                },
                {
                    key: ["KinectV2"]
                }
            ]
        },
        {
            topic: "Kasetsart Univeristy Computer Science",
            period: "2015 - 2019",
            details: "I graduated with a bachelor's degree in Computer Science from\n" +
                "                                    Kasetsart University\n" +
                "                                    Bangkhen , Bangkok .",
            learnings: [{key:"High School"}],
        }
    ],
    experiences: [
        {
            topic: "Working for Opn Company as Backend Developer",
            period: "April 2023 - Present",
            tasks: [
                "Designed and implemented new features for the project involving Payment Gateway as a Service\n" +
                "project.",
                "Investigated and resolved the issue on UAT to support our bank customer.",
                "Had the expertise and skills required to perform certification testing for Visa and Mastercard.",
                "Implemented and maintained functionalities related to authorization, settlement/clearing, and funding processes.",
                "Create a test automation script with Selenium and TestNG for API testing."
            ],
            learnings: [
                {
                    key: ["Ruby on Rails","Golang","Java","Splunk"]
                },
                {
                    key: ["Kubernetes","PostgresDB","Microservice","Selenium"]
                },
                {
                    key: ["Datadog","Buildkite","Vaadin","Github"]
                },
            ]
        },
        {
            topic: "Working for Accenture Company as Senior Backend Developer",
            period: "Aug 2020 - April 2023",
            tasks: [
                "Developed and maintained a new loan-related functionality on SCB Easy application.",
                "Developed and maintained new features for the Corporate Portal, specifically focusing on transaction\n" +
                "management within the company.",
                "Responsible for managing the Maemanee project, which involves integrating a merchant management\n" +
                "system with third-party shipping services.",
                "Created POC and implemented a graceful shutdown mechanism for the backend service, enabling it to handle pending processes consuming from Kafka.",
                "Created POC and implemented rate limit by using Envoy filter on Kubernetes.",
                "Create a test automation script with Robot framework for UI and API testing.",
                "Supported load test and investigated issue via Jaeger.",
                "Monitoring microservice utilization with Grafana.",
                "Investigated and resolved the issue on stage and production environment for all projects.",
                "Mentoring, advising, and reviewing code for junior developers in both business and technical aspects."
            ],
            learnings: [
                {
                    key: ["Spring Boot","Mysql","Postgres","Kibana"]
                },
                {
                    key: ["AWS S3","Kubernetes","MongoDB","Redis"]
                },
                {
                    key: ["Jaeger","Grafana","Gitlab","Jenkins"]
                },
                {
                    key: ["Microservice","Apache Kafka","Robot Framework"]
                },
            ]
        },
        {
            topic: "Working for OnedayCat Company as Backend Developer",
            period: "December 2019 - June 2020",
            tasks: [
                "To be responsible for the project about e-commerce connecting with others platforms including Lazada and Shopee.",
                "Designed API by using Domain Driven Design (DDD).",
                "Design database schema in DynamoDB.",
                "Designed and implemented a system based on the Command Query Responsibility Segregation (CQRS)\n" +
                "concept, utilizing an Elasticsearch database.",
                "Configured Terraform for the CI/CD pipeline to facilitate the deployment of applications on AWS\n" +
                "Lambda.",
            ],
            learnings: [
                {
                    key: ["Nodejs","Nestjs","Typescript","DynamoDB"]
                },
                {
                    key: ["AWS S3","SQS","SNS","Kinesis"]
                },
                {
                    key: ["Elasticsearch","Clean Architecture","DDD","Terraform"]
                },
                {
                    key: ["CQRS","Event Driven","Cognito"]
                }
            ]
        },
        {
            topic: "Working for Allianz Technology Company as Backend Developer",
            period: "July 2019 - November 2019",
            tasks: [
                "Developed a chatbot marketplace project incorporating Github OAuth2 for authentication and Node.js. Implemented automation for app deployment stages (CI/CD process) utilizing Jenkins and Docker on OpenShift.",
                "Migrated Jenkins from on premise server to docker container.",
            ],
            learnings: [
                {
                    key: ["Nodejs","Mysql","AzureBot","Docker"]
                },
                {
                    key: ["Jenkins","Openshift","Swagger","Linux"]
                },
                {
                    key: ["Gitlab"]
                },
            ]
        },
        {
            topic: "Accenture Hackathon",
            period: "30 -31 March 2019",
            tasks: ["First runner-up on the issue of using technology to assist disabled people who were unemployed."],
            learnings: [
                {
                    key: ["Html","CSS","Javascript"]
                },
            ]
        }
    ],
    portfolio: [
        {
            title: "Website",
            imageUrl: "https://i.ibb.co/m6zSCdK/website.png",
            description: "This is my website to summarize what I'm learning about\n" +
                "                                        programming.",
            url: "https://dev7days.gitbook.io/dev7days/",
            buttonName: "Visit Website"
        },
        {
            title: "Blog",
            imageUrl: "https://i.ibb.co/DtpdC5P/gamer.png",
            description: "Gamer to Coder เด็กติดเกมสู่เด็กติดโค้ด",
            url: "https://medium.com/@dsorn2/gamer-to-coder-%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94-7029744fdcc7",
            buttonName: "Visit Blog"
        },
        {
            title: "Blog",
            imageUrl: "https://i.ibb.co/kxZf94x/docker.png",
            description: "Docker #1 วาฬน้อยแสนหรรษา",
            url: "https://medium.com/@dsorn2/docker-1-%E0%B8%A7%E0%B8%B2%E0%B8%AC%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AB%E0%B8%A3%E0%B8%A3%E0%B8%A9%E0%B8%B2-b149dc493812",
            buttonName: "Visit Blog"
        },
        {
            title: "Blog",
            imageUrl: "https://i.ibb.co/9ntKg8y/docker2.png",
            description: "มาใช้ Docker กันเถอะ #2",
            url: "https://medium.com/@dsorn2/%E0%B8%A1%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89-docker-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-2-d41a02d1ad70",
            buttonName: "Visit Blog"
        },
        {
            title: "Blog",
            imageUrl: "https://i.ibb.co/Dw95tph/ioc.png",
            description: "Dependency Injection (DI) และ Inversion of Control (IOC)",
            url: "https://medium.com/@dsorn2/dependency-injection-di-%E0%B9%81%E0%B8%A5%E0%B8%B0-inversion-of-control-ioc-6bb8341dd40b",
            buttonName: "Visit Blog"
        },
        {
            title: "Blog",
            imageUrl: "https://i.ibb.co/xXcrPqM/cecbd9f5-e74b-4648-bc51-5d8db19996d0.jpg",
            description: "ได้ยินบ่อยจังคือไรน้า” มารู้จัก Kubernetes กัน #1",
            url: "https://medium.com/@dsorn2/%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A2%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B9%84%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-kubernetes-%E0%B8%81%E0%B8%B1%E0%B8%99-1-5618ef507bdd",
            buttonName: "Visit Blog"
        },
    ],
    skills: {
        languages: "Python, Javascript/TypeScript, Java, C#, Html,CSS, R, Kotlin, Nodejs, Ruby on Rails, Golang",
        libraries: "Express, Cheerio, Sequelize,\n" +
            "                            Nest.js, Spring Boot, React, Redux,\n" +
            "                            Jquery,\n" +
            "                            Spring, Pandas, Vader Sentiment Analysis, TextBlob, Django, Robot Framework, Vaadin",
        clouds: "AWS, Docker, Jenkins,\n" +
            "                            Openshift, Kubernetes, AWS S3, Kinesis, SQS, SNS,\n" +
            "                            Apache Kafka, Heroku, Terraform, AWS EC2, Elastic Bean Stalk",
        databases: "Sqlite, MySQL, MongoDB,\n" +
            "                            DynamoDB, PostgresDB, Redis, Elastic Search",
        fundamentals: "DDD, Clean Architecture,\n" +
            "                            CQRS, SOLID, CI/CD",
        tools: "Github, Gitlab, Swagger,\n" +
            "                            Vscode, Intelij, Webstorm, Datagrip, DBeaver,\n" +
            "                            Robo3T, Anaconda, Notion, Postman, Insomnia, Iterm",
        abilities: "Dota2, Writting Blog"
    }
}