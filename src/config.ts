export const siteConfig = {
  name: "Saad M. Siddiqui",
  title: "Lead Software Engineer - AI Engineering @ Afiniti Inc. / MS-CS (Machine Learning) @ GATech",
  description: "Portfolio website of Saad M. Siddiqui",
  accentColor: "#1d4ed8",
  social: {
    email: "saadsiddiqui.ned16@example.com",
    linkedin: "https://linkedin.com/in/SMS-NED16",
    github: "https://github.com/SMS-NED16",
    scholar: "https://scholar.google.com/citations?user=o4oci7QAAAAJ&hl=en"
  },
  resume: "https://drive.google.com/file/d/1ONrdEyDKQBKwyUBT2k-LxPbPRFPctXAO/view?usp=sharing",
  aboutMe: `
  Lead AI Sofware Engineer at Afiniti Inc. with an interdisciplinary skillset spanning statistical modeling, machine learning, and software engineering.
  
  I am currently building Afinti's AiRo: a no-code, self-service, turnkey solution for AI-powered real-time contact center pairing and CX optimization.

  Previously, as a Data Scientist at Afiniti, I built Bayesian models to optimize contact-center pairing for some of the world's leading telecos, delivering millions of dollars in incremental lifetime value retained.
  
  I have a Master's Degree in Computer Science with a Specialization in Machine Learning from Georgia Institute of Technology. 
  
  My research interests include LLMs, Applied AI, and statistical modeling.
  `,
  skills: ["Python", "R", "SQL", "Stan", "Torch", "HuggingFace", "vLLM", "LLaMA", "polars", "scikit-learn"],
  research: [
    {
      name: "TrustScore: Model-Agnostic, Multidimensional, Reference-less LLM Response Evaluation",
      description: `
      A 'bring-your-own-model' framework for zero-shot, task-agnostic, uncertainty-aware LLM response reliability evaluation using a configurable ensemble of LLMs as judges.

      Completed as a research project for CS-8903: Special Problems with Dr. Vijay Madisetti at Georgia Institute of Technology.

      Currently under review for publication in IEEE Access.
      `,
      link: "https://github.com/SMS-NED16/TrustScore",
      skills: ["Python", "vLLM", "HuggingFace", "LLaMA"],
    },
    {
      name: "Comparative Analysis of Efficient Adapter-Based Fine-Tuning of State-of-the-Art Transformer Models",
      description: `
      Quantifying runtime vs task-specific performance tradeoffs of using adapter-based fine-tuning for BART, DistilBERT, and ELECTRA. 
      
      Our experiments demonstrated that adapters achieve upto 95% of the performance of full fine-tuning at 40% of the computational cost on subtasks from the SuperGLUE dataset.

      Built as a captsone project for CS-7643: Deep Learning at Georgia Institute of Technology. 
      `,
      link: "https://arxiv.org/abs/2501.08271",
      skills: ["Python", "Torch", "HuggingFace", "adapters"],
    },
    {
      name: "Applications of Neural Networks for Anomalous Energy Consumption Detection",

      description: `
        Using deep neural networks to identify anomalous electricity consumption patterns associated with electricity theft using kWh consumption timeseries data.

        Completed as an undergraduate capstone research project at NED University of Engineering and Technology.
      `,
      link: "https://github.com/SMS-NED16/FYP-DL",
      skills: ["Python", "Keras", "pandas", "scikit-learn", "matplotlib"],
    }
  ],
  projects: [
    {
      name: "Afiniti AiRo",
      description:
        `No-code, self-serice, turnkey sofware suite for training, validating, deploying, and monitoring Afiniti's proprietary contact center pairing optimization algorithms to drive precisely measurable uplift in CX KPIs.`,
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      name: "Afiniti Vhagar",

      description: `Python package for orchestrating end-to-end machine learning pipelines for training, tuning, backtesting, and deploying Afiniti's proprietary Enterprise Behavioral Pairing (EBP) models.
      
      Supports end-to-end ML functionality encompassing feature engineering and selection, hyperparameter tuning, CATE modeling, Bayesian modeling, model backtesting, and ONNX deployments.  

      Used by Afiniti's Applied AI team to tailor bespoke EBP models for enterprise scale deployments across Afiniti's global clientele.
      `,
      // link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Python", "Torch", "polars", "LightGBM", "Stan", "ONNX", "optuna", "Panel", "MLFlow"],
    },
    {
      name: "Metacritic Score Prediction with Bayesian Modeling and Natural Language Feature Engineering",
      description: `
      Predicting Metacritic scores for Steam games using Bayesian and frequentist using DistilBERT and PCA for natural language feature engineering from review embeddings.

      Leveraging GPU acceleration for feature engineering and Bayesian posterior sampling. 

      Completed as a capstone project for ISYE-6420 Bayesian Statistics at Georgia Institute of Technology.
      `,
      link: 'https://github.com/SMS-NED16/ISYE-6420-final-project',

      skills: ["Python", "PyMC", "JAX", "HuggingFace", "scikit-learn", "polars"],
    },
    {
      name: "Comparative Analyses of Machine Learning Techniques",
      description: `
      Qualitative and quantitative comparisons of a variety of supervised, unsupervised, randomized, and reinforcement learning techniques.

      Completed as part of a CS-7641 Machine Learning at Georgia Institute of Technology.
      `,
      
      link: 'https://drive.google.com/drive/folders/1uVWkHh7axmHSIPbkhsv190vMl5Rcrbg-?usp=drive_link',
      
      skills: ["Python", "scikit-learn", "Torch", "gymnasium", "plotnine"],
    }
  ],
  experience: [
    {
      company: "Afiniti Inc.",
      title: "Lead Software Engineer - AI Engineering",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Lead AI Engineer for AiRo, Afiniti’s next-generation self-service, no-code AutoML platform powering enterprise-scale contact-center pairing using Afiniti's proprietary CX optimization algorithms.",
        "Partner with product, research, and AI production teams to design, implement, test, and productionize machine-learning pipelines to automate Afiniti’s bespoke modeling workflows",
        "Lead end-to-end AutoML development, including modeling DAG orchestration, feature engineering and selection, hyperparameter optimization, statistical modeling, model selection, deployment and ONNX runtime serving, amongst others.",
        "Translate Afiniti R&D team's statistical modeling and backtesting prototypes into modular, performant, production-grade software, minimizing time-to-production and improving system reliability.",
        "Automate ML recommender pipelines for training, serving, and continuous refresh of Afiniti’s virtual agent, Minerva, driving scalable personalization.",
        "Serve as the primary escalation point for AI modeling issues, assisting Afiniti's internal Applied AI team in delivery of critical CX optimization solutions for Fortune 500 clients."
      ],
    },
    {
      company: "Afiniti Inc.",
      title: "Senior Data Scientist - Applied AI",
      dateRange: "September 2022 - December 2024",
      bullets: [
        "Relocated to DC office based on performance reviews to work on Afiniti's onshore clients.",
        "AI resource on Verizon Wireless Voice team, contributing to ~$2M monthly revenue for Afiniti through statistical modeling.",
        "Primary AI resource on Verizon Wireless Messaging team: building statistical models delivering ~$800k monthly revenue for Afiniti against a target of ~$500k in Afiniti's first ever deployment as an asynchronous chat optimization solution.",
        "Contributed to ideation, design, development, & testing of Vhagar - an internal Python package for consolidating Afiniti AI's modeling and deployment tools and workflows.",
        "Primary developer for Balerion, Afiniti's R-language based modeling pipeline: responsible for feature requests, bug fixes, codebase maintenance, & ad-hoc user support across entire Afiniti AI team.",
        "Provided AI modeling support for Altice USA AI team during in-life reviews & deployments."
      ],
    },
    {
      company: "AI Account Lead - Applied AI",
      title: "Afiniti Software Solutions Pvt. Limited",
      dateRange: "Feb 2022 - August 2022",
      bullets: [
        "AI Lead for Afiniti's combined Sky UK Applied AI team, overseeing 6 data scientists.",
        "Led end-to-end data analysis, telephony assessment, feature selection, & modeling for 7 AI designs, including a new deployment for Sky's Broadband retention estate.",
        "Contributed bug fixes and implemented custom functionality for Balerion, Afiniti's internal modeling pipeline.",
        "Developed modular, reusable code for performance reporting on all models for the Sky account team.",
        "Feature engineering, maintenance, & scaling of a LightGBM predictive modeling pipeline to forecast model performance on 56 and 90-day lagged optimisation metrics."
      ],
    },
    {
      company: "Data Scientist II - AI Production",
      title: "Afiniti Software Solutions Pvt. Limited",
      dateRange: "Oct 2021 - Jan 2022",
      bullets: [
        "Gain owner for Afiniti's Sky UK Red AI team.",
        "Maintaining performance for 8 models across downgrades, DTV retention, and customer care estates.",
        "Improved downgrade models' incremental revenue by £500k/month, helping Sky become one of Afiniti's most valuable UK clients.",
        "Led migration of all Red team models, deployment processes, and sensors to Afiniti V6 architecture.",
        "Owner of a predictive model for interim performance+ assessment & reporting on a 35-day lagged optimisation metric.",
        "Onboarded new AI resources on the Sky Red AI team."
      ],
    },
    {
      company: "Data Scientist I - AI Production",
      title: "Afiniti Software Solutions Pvt. Limited",
      dateRange: "Jun 2020 - Sep 2021",
      bullets: [
        "Building statistical models for optimising agent-caller pairing in contact centers for two of the UK's largest telecos.",
        "Primary Afiniti Red AI team resource for models which delivered 14% improvement in cable customer care revenue, and £200k monthly incremental revenue through customer lifetime value loss minimised.",
        "Feature engineering, feature selection, & optimisation metric design using large timeseries datasets of contact center interactions, telephony switch information, & CRM.",
        "Monitored AI models deployed in clients' contact centers & resolved production incidents.",
        "Refactored and modularized an AI diagnostic report for use across multiple models & accounts.",
        "Contributed to three new Afiniti deployments across both clients."
        
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science (Specialization: Machine Learning)",
      dateRange: "Aug 2023 - May 2025",
      achievements: [
        "Graduated with a GPA of 3.9/4.0",
        "Built TrustScore, a configurable software suite for LLM response reliability evaluation, as a research project with Dr. Vijay Madisetti.",
        "Relevant Coursework: Deep Learning, Machine Learning, Natural Language, Bayesian Statistics, Algorithms, Computer Networks, Software Development Process, Robotics: AI Techniques"
      ]
    },
    {
      school: "NED University of Engineering and Technology",
      degree: "Bachelor of Engineering in Electrical Engineering (with Distinction)",
      dateRange: "Dec 2016 - Aug 2020",
      achievements: [
        "Graduated with a 3.93 CGPA - top 10% of class.",
        "VP and General Secretary - NED Artificial Intelligence Club",
        "Relevant Coursework: Data Structures and Algorithms,  Digital Signal Processing, Feedback and Control Systems, Numerical Methods, Linear Algebra and Analytical Geometry, Power System Protection, Power Distribution, Electrical Machines",
      ],
    },
  ],
};
