const list_cards = [
    {
        tipo: "lenguaje",
        imagen: "php.png",
        titulo: "PHP Senior",
        texto: "It is the language where I feel comfortable, in confidence and my first favorite, since I have more experience due to the long journey in participation and collaboration in projects, in the course of my career. Management of framework and integration with multiple types of databases and implementation both back-end and front-end.",
        enlace: "https://github.com/LeoSan/DesarrolloWebBackendPHP_PLATZI_2021"
    },
    {
        tipo: "lenguaje",
        imagen: "python.jpg",
        titulo: "Python Senior",
        texto: "It is a language that I started out of great curiosity, it is my third favorite, I have the bases and some knowledge, I have worked on it to develop front-end using its Django framework, currently I want to go deeper to use it in artificial intelligence.",
        enlace: "https://platzi.com/p/LEONARDCUENCA/curso/82-python-django-2015/diploma/detalle/"
    },
    {
        tipo: "lenguaje",
        imagen: "c.png",
        titulo: "C# - Semi-Senior",
        texto: "You often face challenges in some projects, I took on the challenge of learning the basics of this complex language in combination with .net and .aspx",
        enlace: "#"
    },
    {
        tipo: "lenguaje",
        imagen: "Javascript.png",
        titulo: "JavaScriptS - Senior",
        texto: "Definitely Js has been converted. In my favorite language, it is very simple to implement, you only need a browser, but in the last 10 years you can already do Front-end and Back-end with Js, of course with the help of NPMs, that gives you a great robustness and support to create what you want, I consider it to be the future of the web.",
        enlace: "https://github.com/LeoSan/EscuelaJavaScript2021"
    },
    {
        tipo: "lenguaje",
        imagen: "nodejs.png",
        titulo: "Node Js - Semi Senior",
        texto: "The great leap of Js is Node. Js programming from the server side is the most incredible thing and more if we use js, I have been able to create a whole back with client server architecture with js, create my own Js services and that it can interact with a database is great.",
        enlace: "https://www.udemy.com/certificate/UC-201ad789-8d75-4ca5-84ec-e88e706ad562/"
    },
    {
        tipo: "lenguaje",
        imagen: "java.jpg",
        titulo: "JAVA - Semi-Senior",
        texto: "It is definitely not my favorite, but I have respect and esteem for it, those who master Java master any language because of the good practices that they leave in your skills and experience, I have participated in projects as a DTO-type Class Data modeler, I am currently taking a course using the Spring framework.",
        enlace: "https://www.udemy.com/course/universidad-spring-framework-springboot-java-security-rest-webservices/"
    },
    {
        tipo: "lenguaje",
        imagen: "goland.png",
        titulo: "Go - Novice",
        texto: "Go is a language that breaks many paradigms, it is very simple and complex to program at the same time, the functionality known as goroutines is incredible and even more so that it is a language that manages 100% of the resources, for example when you declare a variable and it is not used, it gives you an error reminding you that all variables must be used. It is great for optimizing memory resources.",
        enlace: "https://github.com/LeoSan/EscuelaBackendGo"
    },
    {
        tipo: "lenguaje",
        imagen: "post.png",
        titulo: "PostgreSQL Senior",
        texto: "It is definitely my second favorite database modeler, it is another level to handle PLSQL to generate store procedure, trigger, a powerful database engine that is more scalable and faster, generate tables that allow you to store Gigabytes of information. endless data types.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "mysql.png",
        titulo: "Mysql Senior",
        texto: "It is definitely my favorite database, although now the free version is called Maria Db, here I start my bases in handling tables and SQL queries, create table views, easy integration with Laravel using ORM. The interesting thing is the number of database managers like Workbench, MysqlJob, Admin.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "oracle10.png",
        titulo: "Oracle10 - Semi Senior",
        texto: "Complex database, I was able to learn and improve my level of creating PLSQL, since it is a programming-oriented database. object, the response speed is impressive, here you can do a little bit of everything, a trigger, a store procedure and the large amount of data types that you can handle, data type arrays, data type objects, even a field to save an entire table, even I still have a lot to know.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "mongodb.png",
        titulo: "Mongo DB - Semi Senior",
        texto: "To get out of the pattern of learning about non-relational databases, mongo is a great choice, it is easy to install and easy to integrate, I am using it in my personal projects, but if I must say that it is a bit complex already that the data query mode is very different, using MERN methodologies to develop it is wonderful how everything is integrated.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "firebase.png",
        titulo: "Firebase - Junior",
        texto: "It is a NoSQL database, as part of my curiosity I needed to know more about this type of database, I have only practiced in my personal and course projects that I have done, honestly it is easy to use but everything is in the cloud is very recommendation for high speed for those app time line.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "xml.png",
        titulo: "XML - Semi Senior",
        texto: "Another of those knowledges that are the basis for a professional career, it is not a programming language but it helps a lot for communication between web services, the creation and manipulation of data, without a doubt it is that faithful companion, who helps a lot in integrating high and low level projects.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "lenguaje",
        imagen: "json.png",
        titulo: "Json - Senior",
        texto: "Json is that misunderstood but faithful little brother, since the big projects are based on micro and macro services, but JSON allows that communication to the different platforms, to be honest it is easy to integrate, but it gets complicated if you want to mold large amounts of data. But without a doubt it is that base that must be mastered.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf"
    },
    {
        tipo: "app",
        imagen: "github.jpg",
        titulo: "Github - Semi Senior",
        texto: "A fundamental base in development, it is essential to know and manage a versioner. This guarantees stable, clean and shared code, since when you have a work team this becomes complex without a versioner. Also applying a methodology such as GIT FLOW, giving meaning to the old proverb, divide your project into branches and you will win.",
        enlace: "https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/01_Basico/03_CursoProfesionalGitGitHub/CursoProfesionalGitGitHub.md"
    },
    {
        tipo: "app",
        imagen: "Code_igniter.png",
        titulo: "Codeigniter - Semi Senior",
        texto: "My first php framework, to develop in an orderly and coordinated manner with a work team, here we started with basic design patterns such as MVC and Singleton, everything to integrate a system made up of multiple modules and many interfaces, it was my first experience and I learned to mature my level of coding and development.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "laravel.png",
        titulo: "Laravel V8/9/10/11 - Senior",
        texto: "I have been able to use it in work projects and personal projects, it is very easy to use and learn, it is very robust due to its different methodologies, Laravel can use it only to create APIs or it can also use its views for interfaces. It uses an ORM called Eloquent, very essential to be able to integrate it with any type of database engine, it has become my favorite framework. Already with its latest version 9, it has become more popular.",
        enlace: "https://github.com/LeoSan/CursoPlatziLaravel"
    },
    {
        tipo: "app",
        imagen: "yiiframework.png",
        titulo: "Yii - Junior",
        texto: "An object-oriented framework using PHP, a total paradigm shift more robust and more powerful and super interesting, since it allows you to use the console and execute commands to generate interfaces with its MVC integration and its easy connection to the database for use of its ORM, something without a doubt new and those of us who are from the old school of generating our own queries, something sincerely new and complicated.",
        enlace: "imagen/certificados/2013_CERTIFICADO_YII.jpg"
    },
    {
        tipo: "app",
        imagen: "ZendFramework.png",
        titulo: "ZendPHP - Junior",
        texto: "I honestly didn't like this framework, I only used it in a project that didn't come out in the end, very complicated because I wanted to use controllers for everything, extensive learning, not compatible with many Apache servers and its multiple configurations just to start it makes it tedious, despite having a wizard, something complex during programming if you want to do simple things, I keep the experience and reflections learned at this stage of my professional career.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "django.png",
        titulo: "Django - Senior",
        texto: "If there is a story of love and hate, it is without a doubt this one, I fell in love with this frame, it is very easy to use, but it has its complexity, programming in python is beautiful, since using its philosophy, [Beautiful is better than ugly, Complex is better than complicated, Simple is better than nested], it gives a lot to the programmer, But Django if it makes you happy and angry is a roller coaster, I learned to create interfaces and compose a REST Full to consume services in java, Django has many advantages from speed and security. The sad ones I only used it in one project I would like to use it again.",
        enlace: "https://platzi.com/p/LEONARDCUENCA/curso/82-python-django-2015/diploma/detalle/"
    },
    {
        tipo: "app",
        imagen: "flask.png",
        titulo: "Flask - Senior",
        texto: "While at ASEA, I leveraged Flask to build a specialized application for managing gas and petroleum infrastructure. I was responsible for creating a key exception-handling module that streamlined the registration process for facilities with complex data requirements. Furthermore, I strengthened system security by implementing microservices dedicated to e-signature authentication.",
        enlace: "https://github.com/LeoSan/CursosBackendPython/tree/main/01_Primeros_pasos_Python/09_Curso_Flask"
    },
    {
        tipo: "app",
        imagen: "graficas.png",
        titulo: "FusionCharts - Semi senior",
        texto: "As a base we must also know and generate graphs, in this globalized world measurements are very important, it is much better to present the measurements in graphs and this plug-in allows endless graphs, the only bad thing is that it is licensed, that is to say there are to pay.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "GoogleChart.png",
        titulo: "GoogleCharts - Semi senior",
        texto: "Google allows us to represent our data in very nice and varied graphs for free, it is very easy to use, since it implements JS to paint our data, very good support and cross-platform integration.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "pgadmin.png",
        titulo: "PG Admin 4 - Senior",
        texto: "Many programmers seek their own comfort, for me knowing these tools allows more agility and ease to model your own databases, provide support and maintenance efficiently, PgAdmin allows me to achieve these goals, its easy use and multiple platforms can be used in Linux and Windows.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "sqlyog.jpg",
        titulo: "Sqlyog - Senior",
        texto: "This tool allowed me to learn more about mysql, also to model and understand this paradigm of databases, this tool is undoubtedly easy to use and adapts to your needs, of course the free version is very limited, but the licensed one allows you to perform reverse reengineering, model and even create your entity relational models in an easy and simple way.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "dbeaver.png",
        titulo: "DBeaver - Senior",
        texto: "During my tenure at ASEA, I utilized DBeaver as a centralized tool for managing and querying heterogeneous databases, including SQL Server, MySQL, PostgreSQL, and MongoDB. My work focused on data integrity validation and ensuring information consistency throughout the development lifecycle of platforms built with Java and Python.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "sqlserver.png",
        titulo: "Sqlserver 2014",
        texto: "If it is to name a tedious database administrator, without a doubt it is this one, I will not deny it is easy to use, but sometimes it makes you angry because of its limitations, without a doubt it is the favorite database for those who are in Java. I already have a lot of experience, since I have been able to collaborate on multiple projects over the course of my career.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "workbench.png",
        titulo: "Workbench",
        texto: "This tool is very robust, since it is oriented to visual and object development, it has endless functionalities from reengineering, exporting your data in multiple formats, and importing and connecting to remote databases, I definitely recommend this tool to start in the database paradigm.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "devc.jpg",
        titulo: "Dev C++",
        texto: "It was my first IDE to start my programming skills, all this was during my Studies, unfortunately I have not been able to use this noble IDE for the professional area, but I certainly have fondness for it and good and bad memories.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "indigo.png",
        titulo: "Eclipse Indigo - Junior",
        texto: "This tool is essential for beginners in Java, it was designed to only use java despite its various variants, easy to use and with just a few clicks, you can create your classes and methods, and its routing makes it easy to search for classes, find errors with its breadpoint, plug-in to facilitate object-oriented programming.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "cpp.png",
        titulo: "Standard C++",
        texto: "It was my second IDE, here it is to learn object-oriented programming, it was very comfortable and easy to use, but it gave me a lot of headaches when starting object-oriented programming, but without a doubt this tool has a lot of functionalities extras that make it more robust when programming.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "filezilla.jpg",
        titulo: "FileZilla - Senior",
        texto: "At the moment it is the only tool that I know of for managing file transfers, apart from dreamweaver and one or another IDE that allows you to upload and download documents via FTP, for me it is easy to use and integrate and is very up-to-date, since it allows you to manage via FTPs, I use it a lot for those web domains that use a cpanel.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "phpStorm.png",
        titulo: "PhpStorm - Semi Senior",
        texto: "My IDE to work with php, easy to use and implement, it allows you to keep track of your code and its corrector during coding, it allows you to reduce errors during programming, the only bad thing is that its license is somewhat expensive but without a doubt it is a good investment.",
        enlace: "https://github.com/LeoSan/practicaAndroidDesdeCero/tree/master/AppDesarrolladas"
    },
    {
        tipo: "app",
        imagen: "netbeans.jpg",
        titulo: "NetBeans - Junior",
        texto: "I mistakenly used this IDE to be comfortable programming PHP, but this environment is primarily made for the Java programming language. I really liked this IDE since it allowed easy integration for version management, its plug-in makes it robust for those advantages during coding.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "sublime.jpg",
        titulo: "Sublime Text - Senior",
        texto: "My first step to find that perfect IDE, was this I liked how easy to install and the number of tools that allows you to improve during development, such as the vertical code viewer, easy indentation, coloring to distinguish values and methods, themes of dark and light environments, endless plug-ins like using FTP and endless tools found in this IDE.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "atom.png",
        titulo: "Atom - Senior",
        texto: "Atom as another initiative to find that perfect IDE, already oriented to web development, with endless tools easy via FTP, easy use of git and other version managers, dark themes, light themes, code comparator, code validator write time errors.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "visualcode.png",
        titulo: "Visual Code - Senior",
        texto: "It's at the moment my favorite IDE to develop, its ease of use and its plug-in repository makes it robust and complex, there are literally tons of tools that you can download easily and for free, you need a Json validator it has it, you need a formatter of code it has it, you need to install a live server it has it, endless functionalities and for all kinds of languages, for the moment I have used it for php, javascript, python and c++ and of course for the entire web environment.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "visualstudio.png",
        titulo: "Visual Studio - Junior",
        texto: "I had to learn to implement it in a project using C++ and .net, I am very impressed with how easy it is to use and implement, but if it is a headache when something fails, I have to close and reopen the application. It also has plug-in integration and multiple functionalities that allow you to improve or be more comfortable while encoding.",
        enlace: "#"
    },
    {
        tipo: "app",
        imagen: "androidstudio3.png",
        titulo: "Android Studio3 - Semi Senior",
        texto: "As part of research and learning, I made the decision to learn this tool to make mobile apps, using java and xml. The integration provided by the tool to create an app in android studio is very excellent, I simply focused on developing an app that allows condensing the questions for the Mexican naturalization exam, very simple and functional.",
        enlace: "https://github.com/LeoSan/practicaAndroidDesdeCero/tree/master/AppDesarrolladas"
    },
    {
        tipo: "app",
        imagen: "dream.png",
        titulo: "Dreamweaver",
        texto: "If it is to mention something old school, without a doubt it is this Tool, it was my first program that I used to learn to code web pages, its philosophy of watching what you are doing, allows you to code in a comfortable way. With a few clicks it allows you to create styles and create html components, but to be honest this makes you dependent and foolish over time, without a doubt it is fine to start, but for higher levels it is not recommended.",
        enlace: "#"
    },

    {
        tipo: "app",
        imagen: "notepad.jpg",
        titulo: "Note Pad++ - Senior",
        texto: "Without a doubt the first IDE and my favorite I use it for everything, I made my check lists, review those rare formats, validate quickly and safely, save notes, I use it for everything and today it continues to update and improve, I stopped programming here ago years, but I'm fond of it and will definitely continue to use it.",
        enlace: "#"
    }

];

export default list_cards;