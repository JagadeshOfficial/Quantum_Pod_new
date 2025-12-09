
export const siteContent = {
    brand: {
        name: "Quantum Pod Technologies",
        logoText: "Quantum Pod",
        navLinks: [
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" }, // We'll use a dropdown in the UI
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
        ]
    },
    about: {
        hero: {
            title: "Empowering the Next Generation of Tech Leaders",
            subtitle: "We bridge the gap between ambition and achievement through world-class, AI-driven education.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        mission: {
            title: "Our Mission",
            text: "To democratize access to premium tech education by combining human mentorship with the power of Artificial Intelligence, ensuring every learner is job-ready from day one.",
            icon: "Target"
        },
        vision: {
            title: "Our Vision",
            text: "To become the global catalyst for career transformation, creating a workforce that is not just skilled, but future-proof and adaptable.",
            icon: "Eye"
        },
        story: {
            title: "Our Story",
            text: "Quantum Pod Technologies was born from a simple observation: the tech industry moves faster than traditional education. We saw brilliant minds struggling to find their footing because they lacked practical exposure. We decided to change that. By gathering experts from Google, Microsoft, and Amazon, we built a curriculum that doesn't just teach syntax, but engineering. Today, we are a community of thousands of learners, mentors, and creators building the future.",
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        values: [
            { title: "Innovation", desc: "We constantly reinvent how we teach and learn.", icon: "Zap" },
            { title: "Mentorship", desc: "We believe in the power of human guidance.", icon: "Users" },
            { title: "Excellence", desc: "We don't settle for 'good enough'.", icon: "Award" },
            { title: "Integrity", desc: "We are honest about outcomes and promises.", icon: "Shield" }
        ],
        timeline: [
            { year: "2023", title: "The Inception", desc: "Started with a single batch of 50 students in Data Science." },
            { year: "2024", title: "Scaling Up", desc: "Launched 5 new programs and partnered with 10+ hiring partners." },
            { year: "2025", title: "AI Revolution", desc: "Integrated Agentic AI into all curriculums and crossed 10k learners." },
            { year: "Future", title: "Global Expansion", desc: "Aiming to empower 1M+ learners worldwide." }
        ],
        team: [
            { name: "Siddharth Rao", role: "CEO & Founder", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" },
            { name: "Elena Driftwood", role: "Chief Learning Officer", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400" },
            { name: "Marcus Chen", role: "CTO", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" }
        ]
    },
    contact: {
        address: "Capital Park, Madhapur, Telangana, India",
        phone: "+91 98765 43210",
        email: "admissions@quantumpod.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.264669667087!2d78.39527731487693!3d17.44778998804245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1677836282876!5m2!1sen!2sin",
        faqs: [
            { q: "Do you offer placement support?", a: "Yes! We have a dedicated placement cell that works with 30+ hiring partners to help you land your dream job." },
            { q: "Can I take courses while working full-time?", a: "Absolutely. We offer weekend batches specifically designed for working professionals." },
            { q: "Is the certification recognized?", a: "Yes, our certificates are industry-recognized and valued by top tech companies and startups globally." },
            { q: "Do I need coding experience to join?", a: "For most beginners' courses like Data Analysis, no prior coding experience is required. We start from scratch." }
        ]
    },
    blogs: [
        {
            id: 1,
            title: "The Rise of Agentic AI: Beyond Chatbots",
            excerpt: "Why 2025 is the year of autonomous agents and how they are reshaping software development.",
            content: `
                <p>Artificial Intelligence has evolved rapidly over the last decade. From simple rule-based systems to the generative giants of today, the journey has been nothing short of spectacular. However, as we step into 2025, a new paradigm is emerging: <strong>Agentic AI</strong>.</p>
                
                <h3>What is Agentic AI?</h3>
                <p>Unlike traditional chatbots that simply respond to queries, autonomous agents have the ability to <em>act</em>. They can plan, reason, and execute complex workflows without constant human intervention. Imagine an AI that doesn't just write code for you, but also tests it, deploys it to a server, and monitors its performance.</p>

                <h3>Why Now?</h3>
                <p>Several converging technologies have made this possible:</p>
                <ul>
                    <li><strong>Large Language Models (LLMs)</strong> with improved reasoning capabilities.</li>
                    <li><strong>Vector Databases</strong> for long-term memory.</li>
                    <li><strong>Tool Use</strong> capabilities, allowing AI to access APIs and the web.</li>
                </ul>

                <h3>The Impact on Jobs</h3>
                <p>While some fear automation, the reality is that Agentic AI acts as a force multiplier. Developers can now focus on high-level architecture while agents handle the implementation details. It's not about replacing humans; it's about empowering them to build more.</p>
            `,
            author: "Dr. Ananya Gupta",
            authorRole: "Lead Data Scientist",
            date: "Dec 08, 2025",
            readTime: "5 min read",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "AI Trends",
            tags: ["AI", "Future Tech", "Automation"]
        },
        {
            id: 2,
            title: "Data Engineering involves more than just SQL",
            excerpt: "Exploring the modern data stack: Airflow, Snowflake, and the move towards real-time streaming.",
            content: `
                <p>Data Engineering is often misunderstood as simply writing SQL queries to move data around. While SQL remains a fundamental skill, the modern data engineering landscape is far more complex and exciting.</p>

                <h3>The Modern Data Stack</h3>
                <p>Today's data engineers work with a vast array of tools:</p>
                <ul>
                    <li><strong>Orchestration:</strong> Tools like Apache Airflow and Prefect manage complex dependencies.</li>
                    <li><strong>Compute & Storage:</strong> Snowflake and Databricks have revolutionized how we process big data.</li>
                    <li><strong>Streaming:</strong> Apache Kafka allows for real-time data processing, a requirement for many modern apps.</li>
                </ul>

                <h3>Software Engineering Best Practices</h3>
                <p>Data pipelines are code. This means data engineers must adopt software engineering practices like version control (Git), CI/CD, and automated testing (dbt tests). The line between a backend engineer and a data engineer is blurring.</p>
            `,
            author: "Marcus Chen",
            authorRole: "CTO",
            date: "Dec 05, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
            category: "Data Engineering",
            tags: ["Big Data", "Cloud", "Engineering"]
        },
        {
            id: 3,
            title: "Breaking into Cyber Security in 2026",
            excerpt: "A comprehensive roadmap for beginners to land their first role in InfoSec.",
            content: `
                <p>Cyber Security is one of the most resilient career paths in the tech industry. With cyber threats becoming more sophisticated, the demand for skilled security professionals is at an all-time high.</p>

                <h3>Where to Start?</h3>
                <p>You don't need a hacking background to get started. Begin with the basics:</p>
                <ol>
                    <li><strong>Networking:</strong> Understand TCP/IP, DNS, and HTTP. You can't secure what you don't understand.</li>
                    <li><strong>OS Internals:</strong> Get comfortable with Linux and Windows command lines.</li>
                    <li><strong>Scripting:</strong> Python is the lingua franca of security automation.</li>
                </ol>

                <h3>Certifications</h3>
                <p>While hands-on skills are paramount, certifications like CompTIA Security+, CEH, and OSCP can help get your foot in the door.</p>
            `,
            author: "David Chen",
            authorRole: "Cyber Security Architect",
            date: "Nov 28, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            category: "Career Guide",
            tags: ["Security", "Career", "Roadmap"]
        }
    ],
    careers: {
        perks: [
            { icon: "Globe", title: "Remote-First", desc: "Work from anywhere in the world. We focus on output, not hours." },
            { icon: "Heart", title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
            { icon: "Zap", title: "Learning Budget", desc: "Annual stipend to buy courses, books, or attend conferences." },
            { icon: "Coffee", title: "Work-Life Balance", desc: "Unlimited PTO and mandatory recharge days." }
        ],
        positions: [
            {
                id: 1,
                role: "Senior Full Stack Instructor",
                dept: "Academics",
                location: "Remote",
                type: "Full-Time",
                salary: "$60k - $90k",
                desc: "We are looking for an experienced MERN stack developer with a passion for teaching to lead our cohorts."
            },
            {
                id: 2,
                role: "Product Marketing Manager",
                dept: "Marketing",
                location: "Bangalore (Hybrid)",
                type: "Full-Time",
                salary: "$40k - $60k",
                desc: "Drive the go-to-market strategy for our new Agentic AI and Quantum Computing programs."
            },
            {
                id: 3,
                role: "Student Success Mentor",
                dept: "Operations",
                location: "Remote",
                type: "Part-Time",
                salary: "$20/hr",
                desc: "Guide students through their learning journey, resolve technical doubts, and ensure course completion."
            },
            {
                id: 4,
                role: "Video Editor & Motion Graphic Artist",
                dept: "Content",
                location: "Hyderabad",
                type: "Contract",
                salary: "Project Based",
                desc: "Create engaging, high-quality educational content and ads for our social media channels."
            }
        ],
        gallery: [
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    home: {
        hero: {
            title: "Transform into a Future-Ready Data Scientist powered by AI.",
            subtitle: "Learn with AI-driven, industry-relevant courses in Data Analysis, Data Science, and AI/ML — and unlock your dream career in tech.",
            ctaPrimary: "Explore Courses",
            ctaSecondary: "Book a Live Class Now"
        },
        stats: [
            { label: "Career Transition Rate", value: "90%", suffix: "in 6 Months" },
            { label: "Avg Salary Hike", value: "55%" },
            { label: "Hiring Partners", value: "30+" },
        ],
        courseCategories: [
            { id: "data-analysis", title: "Data Analysis", link: "/courses/data-analysis" },
            { id: "data-science", title: "Data Science", link: "/courses/data-science" },
            { id: "ai-ml", title: "AI/ML", link: "/courses/ai-ml" },
            { id: "agentic-ai", title: "Agentic AI", link: "/courses/agentic-ai" },
            { id: "quantum-computing", title: "Quantum Computing", link: "/courses/quantum-computing" },
            { id: "cyber-security", title: "Cyber Security", link: "/courses/cyber-security" },
            { id: "data-engineering", title: "Data Engineering", link: "/courses/data-engineering" }
        ],
        whyChoose: [
            {
                title: "Placement Assistance",
                items: ["AI-enabled Resume Builder", "Career Masterclasses", "Job Alerts"]
            },
            {
                title: "Application-Oriented Learning",
                items: ["Capstone Projects", "Simulated Work Experience", "Hands-on Labs"]
            },
            {
                title: "Personalized Guidance",
                items: ["1:1 Mentorship", "Mock Interviews", "Lifetime LMS Access"]
            },
            {
                title: "Company-Specific Prep",
                items: ["Targeted Drill Sessions", "Hiring Tests Deconstruction", "Referral Network"]
            }
        ],
        instructors: [
            {
                name: "Dr. Ananya Gupta",
                role: "Lead Data Scientist",
                ex: "Ex-Google, PhD in AI",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                name: "Rajesh Kumar",
                role: "Senior ML Engineer",
                ex: "Ex-Amazon, 10+ Years Exp",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                name: "David Chen",
                role: "Cyber Security Architect",
                ex: "Ex-IBM Security",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ],
        testimonials: [
            {
                name: "Aditya Sharma",
                role: "Data Analyst at Infosys",
                text: "The Data Science course helped me land a role as a Data Analyst at Infosys! The projects and mentor support were excellent.",
                rating: 5
            },
            {
                name: "Ritika Verma",
                role: "B.Tech Student",
                text: "Quantum Pod Tech’s AI/ML course gave me real project experience. The mentors were outstanding and helped me land my first AI internship.",
                rating: 5
            },
            {
                name: "Arjun Mehta",
                role: "Senior Manager at Deloitte",
                text: "I upskilled with the Agentic AI program to lead our automation initiative. The curriculum is cutting-edge and exactly what leadership needs today.",
                rating: 5
            },
            {
                name: "Sneha Patil",
                role: "Data Engineer at Uber",
                text: "Transitioning from software dev to Data Engineering was seamless. The cloud labs on AWS and Azure were a game changer.",
                rating: 5
            },
            {
                name: "Rahul Nair",
                role: "Cyber Security Analyst at Wipro",
                text: "The hands-on labs on Kali Linux and real-world VAPT scenarios gave me the confidence to crack my interviews. Highly recommended!",
                rating: 4
            }
        ]
    },
    courses: {
        "data-science": {
            title: "Data Science Program",
            enrolled: "3,200+",
            duration: "16–20 Weeks",
            hours: "150+ Hours",
            heroImage: "https://images.pexels.com/photos/1748387/pexels-photo-1748387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            highlights: [
                "Top Faculty & Mentors: Learn from experienced data scientists and analytics professionals.",
                "Curriculum with Practical Exposure: Work on datasets from finance, healthcare, and e-commerce.",
                "Real-Life Projects: Build and deploy end-to-end data pipelines and predictive models.",
                "Job Readiness Training: Resume workshops, mock interviews, and placement assistance.",
                "24/7 Support: Round-the-clock help from mentors and learning community."
            ],
            batches: [
                { name: "Batch 01 (Weekday)", start: "Nov 25, 2025", timing: "7 PM – 9 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 8, 2025", timing: "10 AM – 1 PM (IST)", mode: "Online" }
            ],
            tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "Power BI", "Tableau", "Jupyter Notebook", "TensorFlow (Intro)", "GitHub", "Excel"],
            roadmap: [
                { step: 1, title: "Data Foundations", desc: "Statistics, Python basics, and data manipulation" },
                { step: 2, title: "Exploratory Data Analysis (EDA)", desc: "Data cleaning, visualization, feature engineering" },
                { step: 3, title: "Machine Learning", desc: "Regression, classification, clustering" },
                { step: 4, title: "Model Evaluation & Deployment", desc: "MLOps basics and deployment pipelines" },
                { step: 5, title: "Capstone Project", desc: "Real-world predictive analysis on open datasets" },
                { step: 6, title: "Career Readiness", desc: "Resume building, interview prep, and hiring guidance" }
            ],
            reviews: [
                { name: "Aditya Sharma", role: "Category Switcher to Data Analyst", text: "The Data Science course helped me land a role as a Data Analyst at Infosys! The projects and mentor support were excellent.", rating: 5 },
                { name: "Vikram Iyer", role: "MBA Graduate", text: "Curriculum is very practical. You actually build models and dashboards instead of just learning theory.", rating: 4 }
            ],
            recruiters: ["Amazon", "Google", "Deloitte", "Accenture", "TCS", "PwC", "IBM", "Wipro", "Flipkart", "Zoho"]
        },
        "data-analysis": {
            title: "Data Analysis Program",
            enrolled: "2,700+",
            duration: "10–12 Weeks",
            hours: "100+ Hours",
            heroImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            highlights: [
                "Industry Experts as Trainers: Learn from data analysts working at leading MNCs.",
                "Curriculum with Practical Exposure: Hands-on Excel, SQL, and Power BI training.",
                "Real-Life Projects: Analyze business data to create actionable insights.",
                "Job Readiness Focus: Resume building, case studies, and mock interviews.",
                "24/7 Support: Always-on chat and mentor support."
            ],
            batches: [
                { name: "Batch 01 (Evening)", start: "Nov 20, 2025", timing: "6:30 PM – 8:30 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 6, 2025", timing: "10 AM – 12:30 PM (IST)", mode: "Online" }
            ],
            tools: ["Microsoft Excel", "SQL", "Power BI", "Tableau", "Google Sheets", "Python (Intro)", "Data Studio"],
            roadmap: [
                { step: 1, title: "Data Fundamentals", desc: "Understanding data types, collection, and cleaning" },
                { step: 2, title: "Excel for Data Analysis", desc: "Functions, charts, pivot tables" },
                { step: 3, title: "SQL for Data Management", desc: "Queries, joins, aggregations" },
                { step: 4, title: "Visualization Tools", desc: "Power BI and Tableau dashboards" },
                { step: 5, title: "Project Work", desc: "Business performance analysis case study" },
                { step: 6, title: "Career Preparation", desc: "Soft skills, portfolio development, and placement assistance" }
            ],
            reviews: [
                { name: "Karan Malhotra", role: "College Student", text: "From zero experience to building dashboards — the course gave me confidence to work with real data.", rating: 5 },
                { name: "Ananya Sethi", role: "Data Intern", text: "The mentors are amazing, and the Power BI projects were directly useful in my internship.", rating: 4 }
            ],
            recruiters: ["PwC", "Deloitte", "KPMG", "Infosys", "TCS", "Capgemini", "Zoho", "IBM", "HCL Technologies"]
        },
        "ai-ml": {
            title: "AI/ML or Agentic AI Program",
            enrolled: "2,450+",
            duration: "12–16 Weeks",
            hours: "120+ Hours",
            heroImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            highlights: [
                "Top Industry Faculty & Trainers: Learn directly from AI engineers, data scientists, and research professionals.",
                "Curriculum with Practical Exposure: Every concept is paired with hands-on exercises and real-world case studies.",
                "Real-Life Projects: Apply what you learn by building and deploying live AI/ML or Agentic AI projects.",
                "Job Readiness: Includes resume preparation, interview coaching, and placement assistance.",
                "24/7 Support: Get round-the-clock mentor and community help."
            ],
            batches: [
                { name: "Batch 01 (Weekday)", start: "Dec 1, 2025", timing: "7 PM – 9 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 7, 2025", timing: "10 AM – 1 PM (IST)", mode: "Online" }
            ],
            tools: ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks", "OpenCV"],
            roadmap: [
                { step: 1, title: "Foundations of AI & ML / Agentic AI", desc: "Understand core algorithms, logic, and system design." },
                { step: 2, title: "Applied Programming & Data Handling", desc: "Learn Python, data preprocessing, and modeling." },
                { step: 3, title: "Model Building & Deployment", desc: "Train, test, and deploy models or AI agents in real-world use cases." },
                { step: 4, title: "Advanced Topics", desc: "Deep Learning, NLP, and Agentic AI automation." },
                { step: 5, title: "Capstone Project", desc: "Build a complete, production-level AI system." },
                { step: 6, title: "Career Acceleration", desc: "Portfolio review, mock interviews, and job referrals." }
            ],
            reviews: [
                { name: "Ritika Verma", role: "B.Tech Student", text: "Quantum Pod Tech’s AI/ML course gave me real project experience. The mentors were outstanding and helped me land my first AI internship.", rating: 5 },
                { name: "Amit Shah", role: "AI Developer", text: "The Agentic AI program opened my eyes to how autonomous systems work. I now lead an AI automation team!", rating: 5 },
                { name: "Sonia Gupta", role: "Career Switcher", text: "Affordable, structured, and mentor-led — highly recommended for anyone serious about AI.", rating: 4 }
            ],
            recruiters: ["Google", "Microsoft", "NVIDIA", "Accenture", "TCS", "Infosys", "Zoho", "OpenAI", "AWS"]
        },
        "agentic-ai": {
            title: "Agentic AI Specialist",
            enrolled: "1,200+",
            duration: "10–12 Weeks",
            hours: "80+ Hours",
            heroImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            highlights: [
                "Build Autonomous Agents: Learn to create self-acting software agents.",
                "LangChain & AutoGPT: Master the latest frameworks.",
                "Multi-Agent Systems: Orchestrate complex agent interactions.",
                "Future-Proof Skills: Be at the forefront of the next AI wave.",
                "Project-Based: Build a personal assistant and a research agent."
            ],
            batches: [
                { name: "Batch 01 (Global)", start: "Jan 15, 2026", timing: "8 PM – 10 PM (IST)", mode: "Online" }
            ],
            tools: ["LangChain", "AutoGPT", "BabyAGI", "OpenAI API", "Vector Databases", "Python", "FastAPI"],
            roadmap: [
                { step: 1, title: "Intro to Agents", desc: "What are agents? Loops, memory, tools." },
                { step: 2, title: "LLM Orchestration", desc: "Chaining calls, prompt engineering." },
                { step: 3, title: "Tool Use", desc: "Giving agents access to search, APIs, and file systems." },
                { step: 4, title: "Memory & Context", desc: "Vector DBs, short vs long term memory." },
                { step: 5, title: "Multi-Agent Systems", desc: "Collaboration patterns vs competition." },
                { step: 6, title: "Final Project", desc: "Build a fully autonomous specific-task agent." }
            ],
            reviews: [
                { name: "Amit Shah", role: "AI Developer", text: "The Agentic AI program opened my eyes to how autonomous systems work. I now lead an AI automation team!", rating: 5 }
            ]
        },
        "quantum-computing": {
            title: "Quantum Computing Program",
            enrolled: "1,800+",
            duration: "16–20 Weeks",
            hours: "140+ Hours",
            heroImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            highlights: [
                "Learn from Quantum Computing Experts: Sessions led by researchers and practitioners from academia and leading tech firms.",
                "Hands-on Qiskit Projects: Work directly with IBM Quantum tools and simulators to build and execute circuits.",
                "Real-World Applications: Explore how quantum algorithms impact cryptography, optimization, AI, and finance.",
                "Career Readiness: Resume-building, mock interviews, and placement guidance in emerging quantum technology roles.",
                "24×7 Support: Always-on mentor access and peer discussion channels."
            ],
            batches: [
                { name: "Batch 01 (Weekday)", start: "Dec 10, 2025", timing: "7 PM – 9 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 20, 2025", timing: "10 AM – 1 PM (IST)", mode: "Online" }
            ],
            tools: ["Qiskit", "Python", "IBM Quantum Experience", "NumPy", "Matplotlib", "Jupyter Notebook", "OpenQASM", "Q#", "Quantum SDKs", "TensorFlow Quantum"],
            roadmap: [
                { step: 1, title: "Quantum Foundations", desc: "Quantum mechanics for computing: superposition, entanglement, measurement" },
                { step: 2, title: "Programming for Quantum Systems", desc: "Python and Qiskit fundamentals" },
                { step: 3, title: "Quantum Circuits & Algorithms", desc: "Grover’s, Deutsch-Jozsa, Shor’s algorithms" },
                { step: 4, title: "Quantum Information & Operators", desc: "Quantum states, gates, and measurement fidelity" },
                { step: 5, title: "Quantum Simulation & Hardware Execution", desc: "Run real circuits on IBM Quantum hardware" },
                { step: 6, title: "Capstone Project", desc: "Design and simulate a full quantum algorithm" },
                { step: 7, title: "Career Preparation", desc: "Certification training, resume building, and job assistance" }
            ],
            reviews: [
                { name: "Riya Mehta", role: "Data Scientist (Career Switcher)", text: "Quantum Pod’s Quantum Computing course gave me the foundation I needed to transition from data science into quantum algorithm development.", rating: 5 },
                { name: "Anirudh Bansal", role: "M.Tech Student", text: "The capstone project helped me understand how to implement quantum algorithms practically — and I even ran my code on real IBM Quantum hardware!", rating: 5 },
                { name: "Tanvi Agarwal", role: "Physics Graduate", text: "Excellent mentorship and hands-on sessions. The Qiskit labs are the highlight of the program.", rating: 4 }
            ],
            recruiters: ["IBM", "Microsoft Quantum", "Amazon Braket", "Google Quantum AI", "TCS", "Deloitte", "Infosys", "Accenture", "Capgemini", "PwC"]
        },
        "cyber-security": {
            title: "Cyber Security Program",
            enrolled: "2,100+",
            duration: "20–24 Weeks",
            hours: "160+ Hours",
            heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            highlights: [
                "Master End-to-End Security: Learn from fundamentals to advanced enterprise security frameworks.",
                "Hands-on Labs & Real-World Projects: Work with ethical hacking, VAPT, SIEM, and cloud security simulations.",
                "Industry-Ready Curriculum: Designed in alignment with CompTIA Security+, CEH, and CISSP standards.",
                "Job Readiness Training: Resume building, mock interviews, certification prep, and placement support.",
                "24×7 Support: Get round-the-clock guidance from security experts and mentors."
            ],
            batches: [
                { name: "Batch 01 (Weekday)", start: "Nov 28, 2025", timing: "7 PM – 9 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 7, 2025", timing: "10 AM – 1 PM (IST)", mode: "Online" }
            ],
            tools: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "Nmap", "Splunk", "Nessus", "IBM QRadar", "Snort", "AWS Cloud Security", "Microsoft Azure Security", "Python for Security"],
            roadmap: [
                { step: 1, title: "Cyber Security Foundations", desc: "Threat landscape, governance, compliance, and risk management" },
                { step: 2, title: "Network & System Security", desc: "Firewalls, IDS/IPS, VPNs, and network hardening" },
                { step: 3, title: "Ethical Hacking & Penetration Testing", desc: "VAPT, scanning, exploitation, and reporting" },
                { step: 4, title: "Identity & Access Management", desc: "Authentication, privilege models, directory services" },
                { step: 5, title: "Cloud & Application Security", desc: "AWS, Azure, and DevSecOps fundamentals" },
                { step: 6, title: "Incident Response & Forensics", desc: "Threat analysis, malware investigation, digital forensics" },
                { step: 7, title: "Capstone Project", desc: "Design and defend a secure enterprise infrastructure" },
                { step: 8, title: "Career Readiness & Certifications", desc: "Security+, CEH, CISSP, CCSP exam preparation" }
            ],
            reviews: [
                { name: "Sandeep Mehta", role: "Security Analyst at Deloitte", text: "The Cyber Security course helped me transition from IT support to a full-time Security Analyst role. The labs and mentors were top-notch!", rating: 5 },
                { name: "Priya Singh", role: "BCA Graduate", text: "Hands-on exposure to ethical hacking and SIEM tools made this course worth every minute.", rating: 4 },
                { name: "Nikhil Reddy", role: "Network Engineer", text: "Excellent certification alignment and practical coverage. Highly recommended for career switchers.", rating: 5 }
            ],
            recruiters: ["IBM", "Accenture", "Deloitte", "PwC", "TCS", "EY", "Capgemini", "Infosys", "Wipro", "Cisco", "Microsoft", "Palo Alto Networks", "Check Point"]
        },
        "data-engineering": {
            title: "Data Engineering Program",
            enrolled: "2,850+",
            duration: "20–24 Weeks",
            hours: "160+ Hours",
            heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
            highlights: [
                "Learn from Top Industry Engineers and Cloud Architects with hands-on data experience.",
                "End-to-End Data Engineering Curriculum — from Python, SQL, and ETL to Big Data, Cloud, and Streaming Systems.",
                "Hands-on Cloud Labs: Work directly on AWS, Azure, or Google Cloud environments.",
                "Real-World Projects: Build and deploy full-scale data pipelines and analytical systems.",
                "Career-Ready Focus: Resume building, mock interviews, and placement assistance.",
                "24×7 Support: Get access to expert mentors and a learner community."
            ],
            batches: [
                { name: "Batch 01 (Weekday)", start: "Nov 30, 2025", timing: "7 PM – 9 PM (IST)", mode: "Online" },
                { name: "Batch 02 (Weekend)", start: "Dec 10, 2025", timing: "10 AM – 1 PM (IST)", mode: "Online" }
            ],
            tools: ["Python", "SQL", "Apache Spark", "Hadoop", "Kafka", "Airflow", "AWS (S3, Redshift, Glue)", "Azure Data Lake", "Power BI", "Snowflake", "Google BigQuery", "Docker", "GitHub"],
            roadmap: [
                { step: 1, title: "Data Foundations", desc: "Python, SQL, and data modelling essentials" },
                { step: 2, title: "ETL & Data Warehousing", desc: "Data pipelines, orchestration, and transformation logic" },
                { step: 3, title: "Big Data Systems", desc: "Apache Spark, Hadoop, and scalable processing" },
                { step: 4, title: "Streaming & Orchestration", desc: "Kafka, Airflow, and real-time data workflows" },
                { step: 5, title: "Cloud Data Engineering", desc: "AWS, Azure, and GCP data ecosystems" },
                { step: 6, title: "Data Optimization & Storage", desc: "Parquet, ORC, partitioning, indexing" },
                { step: 7, title: "ML & Analytics Integration", desc: "Enabling ML pipelines and business intelligence dashboards" },
                { step: 8, title: "Capstone Project", desc: "Build an end-to-end enterprise-grade data pipeline" },
                { step: 9, title: "Career Readiness", desc: "Resume workshops, mock interviews, and hiring preparation" }
            ],
            reviews: [
                { name: "Meera Nair", role: "Data Engineer at Accenture", text: "The Data Engineering course gave me the confidence to work on end-to-end pipelines. The mentors were fantastic!", rating: 5 },
                { name: "Kunal Joshi", role: "Cloud Data Analyst", text: "Excellent coverage of Spark, Airflow, and Cloud integration — the projects were industry-relevant.", rating: 5 },
                { name: "Priyanka Sharma", role: "Career Switcher", text: "Quantum Pod’s mentorship made my transition from developer to data engineer seamless.", rating: 5 }
            ],
            recruiters: ["Google", "Microsoft", "AWS", "Deloitte", "TCS", "Accenture", "PwC", "Infosys", "Zoho", "IBM", "Snowflake", "Databricks"]
        }
    }
};
