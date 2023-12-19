export const mockUserProfile = {
    profileImageUrl: "https://i.ibb.co/dG6mrj0/profile.jpg",
    position: "Software Developer",
    profileDesc: "I'm a teeny Backend Developer who want to learn new thing with 25 years old. For my\n" +
        "                                    free time\n" +
        "                                    I\n" +
        "                                    love more\n" +
        "                                    to coding and play game and my favorite game is Dota2. You ask me if you want to\n" +
        "                                    play haha.\n" +
        "                                    I am\n" +
        "                                    not believe in word\n" +
        "                                    \"Genius\" but I believe with \"Try hard\".",
    githubUrl: "https://github.com/brightkut",
    linkedInUrl: "https://www.linkedin.com/in/disorn-thitikornkovit-565526186/",
    steamUrl: "https://steamcommunity.com/id/brightkuq/",
    instagramUrl: "https://www.instagram.com/brighteloy/",
    educations: [
        {
            topic: "Internship of summer student training program in NCU Taiwan",
            period: "1 June - 31 July 2018",
            details: "Implemented web application about Kinect(v2) hosting on Heroku\n" +
                "                                    by\n" +
                "                                    using C# and Nodejs to develop frontend and backend with websocket.",
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
            topic: "Working for Accenture Company as Junior/Senior Backend Developer",
            period: "August 2020 - Present",
            tasks: [
                "To responsible for the project Corporate Portal about transaction management within a company",
                "To responsible for the project Maemanee about a merchant management system integrated with shipping the third party",
                "Maintained and implemented a new feature on SCB Easy with the part about a loan",
                "POC and implemented graceful shutdown when getting the process from Kafka",
                "POC and implemented rate limit by using Envoy filter on Kubernetes",
                "Create test automation script with Robot framework for testing UI and API",
                "Monitoring microservice utilization with Grafana",
                "Supported load test and investigated issue via Jaeger",
                "Investigated and resolved the issue on stage and production environment for all projects",
            ],
            learnings: [
                {
                    key: ["Spring Boot","Mysql","Postgres"]
                },
                {
                    key: ["Kibana","AWS S3","Kubernetes"]
                },
                {
                    key: ["MongoDB","Redis","Microservice"]
                },
                {
                    key: ["Apache Kafka","Robot Framework"]
                },
                {
                    key: ["Jaeger","Grafana","Gitlab","Jenkins"]
                }
            ]
        },
        {
            topic: "Working for OnedayCat Company as Junior Backend Developer",
            period: "December 2019 - June 2020",
            tasks: [
                "To responsible for the project about e-commerce connecting with others platform including Lazada and Shopee",
                "Designed API by using DDD, CQRS, and Event driven concept",
                "Design database schema on Dynamo DB",
                "Developed the backend part with Node js, Nest js and Typescript with AWS service including Lambda, S3, API Gateway, SQS, SNS and Cognitio",
                "Implemented CQRS with Elasticsearch database",
                "Configured Terraform for CI/CD process",
            ],
            learnings: [
                {
                    key: ["Nodejs","Nestjs","Typescript"]
                },
                {
                    key: ["DynamoDB","AWS S3","SQS"]
                },
                {
                    key: ["SNS","Kinesis","Elasticsearch"]
                },
                {
                    key: ["Clean Architecture","DDD","Terraform"]
                },
                {
                    key: ["CQRS","Event Driven","Cognito"]
                }
            ]
        },
        {
            topic: "Working for Allianz Technology Company as Junior Backend Developer",
            period: "July 2019 - November 2019",
            tasks: [
                "Developed the project about chatbot marketplace using Oauth2 for authentication\n" +
                "                                        and Node js . In part of automation into the stages of app deployment (CI/CD\n" +
                "                                        process) used Jenkins and Docker on Openshift",
                "Migrated Jenkins from on premise server to docker container",
            ],
            learnings: [
                {
                    key: ["Nodejs","Mysql","AzureBot"]
                },
                {
                    key: ["Docker","Jenkins","Openshift"]
                },
                {
                    key: ["Swagger","Linux","Gitlab"]
                },
            ]
        },
        {
            topic: "Accenture Hackathon",
            period: "30 -31 March 2019",
            tasks: [
                "First Runner Up with Accenture Hackathon in topic about how to\n" +
                "                                    use technology to assist disable people who were unemployed",
            ],
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
        languages: "Python, Javascript/TypeScript, Java, C#, Html,CSS, R, Kotlin, Nodejs",
        libraries: "Express, Cheerio, Sequelize,\n" +
            "                            Nest.js, Spring Boot, React, Redux,\n" +
            "                            Jquery,\n" +
            "                            Spring, Pandas, Vader Sentiment Analysis, TextBlob, Django, Robot Framework",
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
export function getUserProfile(){

}