// STORING THE COMPLETED TASKS IN A STRUCTURED MANNER 
// YOU CAN ADD A NEW TASK JUST BY APPENDING AN OBJECT 


export const tasks = [

    {
        id: "doc-recognition-and-data-extraction-task",
        title: "AI Document Recognizer and Data Extractor",
        description: "A modern, AI-powered web application that dynamically analyzes, classifies, and extracts key data from any uploaded document or image and displays it in a 'form' format. Instead of relying on hardcoded schemas or predefined templates, this application leverages Mistral AI to read the document's context and automatically generate a responsive HTML form containing the extracted fields.",
        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            backend: ["Python", "FastAPI & Uvicorn", "Mistral AI Python SDK (mistral-large-latest and pixtral-12b", "Pillow", "PyPDF"],
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-doc-recognition-and-data-extraction.git",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "mcp-server-task",
        title: "MCP Server PDF & Web Search Conversational Chatbot",
        description: "A full-stack, agentic AI application built utilizing the Model Context Protocol (MCP). This chatbot acts as an intelligent orchestrator by using Mistral AI to autonomously decide whether to answer a user's prompt directly, search an uploaded PDF document, or fetch live information from the internet.",
        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "Marked.js"],
            backend: ["Python", "FastAPI & Uvicorn", "Mistral AI Python SDK", "MCP Core SDK"],
            toolserver: ["FastMCP", "PyPDF", "Tavily-Python"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks-2/tree/main/mcp-server-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "pdf-extraction-webpage-sql",
        title: "AI-Powered Document Extraction & Fault-Tolerant Database Mapping Pipeline",
        description: "Engineered a pipeline that ingests raw PDF bytes, extracts text, and prompts an LLM to output strictly formatted JSON containing document details, vendor information, and items, to be stored in a MongoDB database. Prompt-engineered the LLM to write specific, ready-to-execute MS SQL Server queries based on the extracted data. Implemented a custom Python blocklist to intercept all AI-generated queries before execution to prevent unauthorized operations (eg: DROP, DELETE). Executed a complex 3-table SQL JOIN to retrieve a client's specific purchase history, and passed the SQL results to search the history back to a secondary, lightweight LLM to perform fuzzy matching, thus successfully linking highly variable PDF text (eg: typos) to official database codes. ",
        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            backend: ["Python", "FastAPI & Uvicorn", "Mistral AI Python SDK (mistral-large-latest and mistral-small-latest)"],
            datahandling: ["MS SQL Server", "PyPDF", "MongoDB"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks-2/tree/main/pdf-extraction-webpage-sql",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "fabric-comparison-webpage",
        title: "AI Fabric Visual Search and Comparison Engine",
        description: "A service built to perform real time visual similarity searches on fabric inventory. By transitioning from heavy deep-learning models to optimized mathematical vector mapping, this engine reduces search latency from several seconds down to milliseconds.",
        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            backend: ["Python", "FastAPI & Uvicorn"],
            computervision: ["OpenCV", "Scikit-Image", "NumPy"],
            database: ["Redis", "Windows Subsystem for Linux"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks-2/tree/main/fabric-comparison-webpage",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "fastapi-pdf-upload-task",
        title: "PDF Upload & AI PDF Conversational Analysis Web App",
        description: "An interactive, conversational chat web application built using FastAPI and the Mistral AI API. This application allows users to upload local '.pdf' or '.txt' files, extracts their text contents, and provides a formatted chat interface to converse with the document using historical context management.",
        techStack: {
            frontend: ["HTML", "CSS", "JavaScript", "Marked.js"],
            backend: ["Python", "FastAPI & Uvicorn", "Mistral AI Python SDK"],
            docparsing: ["PyPDF"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks/tree/main/fastapi-pdf-upload-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "gmail-api-task",
        title: "Gmail API - Sending a simple email",
        description: "A Python script designed to automate the transmission of plain-text emails utilizing the Google Workspace Gmail API. The utility handles secure OAuth 2.0 user authentication, local token management via serialization, and message encoding required by Google's API endpoints.",
        techStack: {
            backend: ["Python", "Google Client Libraries (google-api-python-client and google-auth-oauthlib)", "Gmail API"],
            pythonlibraries: ["os (file path checking)", "pickle (token serialization)", "base64 (web-safe encoding)", "email.mime (email formatting)"],
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks/tree/main/gmail-api-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "web-app-task",
        title: "FastAPI Login, SIgnup and Calculator Web Application",
        description: "A simple, interactive web application built with Python and FastAPI. This project demonstrates a complete user flow: creating an account with validation constraints, logging in, and using a functional calculator. Hosted and deployed on Render as well.",
        techStack: {
            frontend: ["HTML", "Jinja2"],
            backend: ["Python", "FastAPI & Uvicorn"],
            datavalidation: ["Pydantic (BaseModel)"],
            testing: ["Postman"],
            deployment: ["Render"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks/tree/main/web-app-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "pdf-analysis-task",
        title: "Conversational PDF Analyzer",
        description: "A command-line Python application that leverages the Mistral AI API and pypdf to extract text from PDFs and allows users to interactively chat with the document's content.",
        techStack: {
            backend: ["Python", "Mistral AI Python SDK"],
            docparsing: ["PyPDF"],
            devenvlibrary: ["python-dotenv"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks/tree/main/pdf-analysis-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "web-scraper-task",
        title: "AI Web Scraper",
        description: "A Python script that scrapes a webpage, cleans the HTML, and uses the Google Gemini API to generate a brief, easy-to-read summary of the key concepts.",
        techStack: {
            backend: ["Python", "Gemini API"],
            HTMLparsing: ["BeautifulSoup"],
            devenvlibrary: ["python-dotenv"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks/tree/main/web-scraper-task",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },

    {
        id: "image-data-extraction-task",
        title: "Data Extraction from Image",
        description: "This Python command-line utility extracts and digitizes interviewee data from an image and outputs the structured data into a JSON file.",
        techStack: {
            backend: ["Python", "Gemini API"],
            commandlineparsing: ["argparse"],
            computervision: ["EasyOCR", "OpenCV", "Pillow"],
            devenvlibrary: ["python-dotenv"]
        },
        github: "https://github.com/Sanjana-Sara-Siju/FACTS-tasks",
        videoUrl: "......................................." // Replace with your cloud storage or hosted video link
    },


] 