export const mockUserProfile = {
    profileImageUrl: "https://i.ibb.co/H7cnW0Q/profile.jpg",
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
    ]
}
export function getUserProfile(){

}