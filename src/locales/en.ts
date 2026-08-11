/**
 * English (EN) translations for the portfolio.
 * Technical terms, tool names, and project names remain in English in both locales.
 */

export const en = {
  // ─── Global UI ────────────────────────────────────────────────────────────
  portfolioLabel: 'Portfolio',
  activePanel: 'Active panel',

  // ─── Section labels (used in header "Active panel" display) ──────────────
  sectionLabels: {
    home: 'Onboarding',
    about: 'Identity',
    stack: 'Skills & Tools',
    experience: 'Personal Branding',
    projects: 'Project Showcase',
    contact: 'Contact & Links',
    reflection: 'Reflection',
  },

  // ─── CommandDock navigation labels ───────────────────────────────────────
  dock: {
    home: 'Home',
    experience: 'Branding',
    about: 'About',
    stack: 'Skills & Tools',
    projects: 'Projects',
    reflection: 'Reflection',
    contact: 'Contact',
  },

  // ─── HeroSection ─────────────────────────────────────────────────────────
  hero: {
    statusBadge: 'Open to Opportunities',
    greeting: 'Welcome to the portfolio of',
    title: 'DevOps Engineer',
    tagline:
      'Building reliable infrastructure through automation, containers, and continuous delivery — explore the projects, skills, and my personal branding.',
    quickNav: [
      {
        label: 'Personal Branding',
        description: 'Career direction, skills, and values at a glance.',
      },
      {
        label: 'Project Showcase',
        description: 'Real-world projects built with modern DevOps tooling.',
      },
    ],
    ctaExplore: 'Start Exploring',
    ctaContact: 'Get in Touch',
    exploreLink: 'Explore',
  },

  // ─── AboutSection ─────────────────────────────────────────────────────────
  about: {
    sectionTag: 'About Me',
    sectionTitle: 'The Engineer behind the project.',
    cards: {
      whoIAm: {
        title: 'Who I Am',
        body: [
          "Hi, I'm Aditya Indra Wisnu a fresh Informatics graduate and DevOps Engineering enthusiast. My journey into the world of DevOps started from my curiosity. I joined an online course and Bootcamp to understand how real-world systems are deployed, monitored, and scaled. Without formal work experience, I've relied on hands-on experimentation, spinning up Kubernetes clusters, designing CI/CD pipelines, and automating infrastructure to build practical skills that mirror industry demands.",
          "I'm deeply passionate about automation, CI/CD engineering, container orchestration, and Infrastructure as Code. My goal is to become a professional DevOps Engineer who bridges the gap between development and operations, ensuring that software delivery is fast, secure, and reliable. I believe that the best way to learn is by doing - by building, breaking, and tuning. I am also highly interested in building smart systems integrated with AI.",
        ],
      },
      careerGoals: {
        title: 'Career Goals',
        body: "My short-term goal is to land a Junior DevOps Engineer role where I can apply and expand my homelab experience in a production environment. Long-term, I aspire to become a DevOps Automation Architect, focusing on advanced automation and AI integration to design resilient, scalable, smart and reliable infrastructure.",
      },
      interests: {
        title: 'Interests & Philosophy',
        body: "I'm fascinated by cloud-native architecture, GitOps workflows, and the integration of AI within the DevSecOps ecosystem. My philosophy is simple: \"Automate the mundane, focus on the meaningful.\" When I'm not configuring pipelines or debugging something, you'll find me exploring open-source tools for DevOps and AIOps, experimenting in my homelab, or reading about AI-driven distributed systems.",
      },
      background: {
        title: 'Background & Experience',
        body: "I hold a degree in Informatics, providing a rigorous foundation in algorithms and software architecture. To bridge the gap between academic theory and industry practice, I joined specialized online courses and a DevOps bootcamp. Additionally, I've dedicated myself to hands-on engineering through a custom homelab, treating it as a production environment to build real-world infrastructure and CI/CD pipelines.",
      },
      coreSkills: {
        title: 'Core Technical Skills',
      },
    },
  },

  // ─── ExperienceSection (Personal Branding) ────────────────────────────────
  experience: {
    sectionTag: 'Personal Branding',
    sectionTitle: 'Strategic Positioning Map',
    sectionDescription:
      'Before exploring the technical implementations, establishing a clear professional identity is essential. This section defines my career trajectory, core engineering skills, field interests, and the fundamental values that drive my work.',
    cards: [
      {
        title: 'Target Role / Career',
        description:
          'DevOps Engineer with a growth path toward Platform Engineer and Site Reliability Engineer roles.',
      },
      {
        title: 'Main Skill',
        description:
          'Designing CI/CD workflows, managing Docker & Kubernetes platforms, and automating infrastructure with Linux and scripting (Bash, Python).',
      },
      {
        title: 'Main Strength',
        description:
          'Strong automation mindset — eliminating manual toil, building repeatable processes, and continuously improving delivery pipelines.',
      },
      {
        title: 'Field of Interest',
        description:
          'Cloud-Native technologies, Microservices architecture, DevSecOps, and AIOps for intelligent operations.',
      },
      {
        title: 'Value to Display',
        description:
          'Continuous learning, reliability & quality, efficiency & speed, and transparent collaboration across teams.',
      },
    ],
  },

  // ─── TechStackSection ────────────────────────────────────────────────────
  techStack: {
    sectionTag: 'Skills & Tools',
    sectionTitle: 'The toolkit powering my projects.',
    sectionDescription:
      'A curated set of platforms, tools, and skills I use to build, deploy, and operate the projects.',
    levels: {
      Basic: 'Basic',
      Intermediate: 'Intermediate',
      Learning: 'Learning',
    },
    clusters: [
      {
        title: 'Containers & Orchestration',
        description: 'Containerized workloads, orchestration, and cloud-native deployments.',
      },
      {
        title: 'CI/CD & Automation',
        description: 'Continuous integration, delivery pipelines, and automated workflows.',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Provisioning and configuration management through declarative code.',
      },
      {
        title: 'Cloud Platforms',
        description: 'Public cloud services for compute, storage, and networking.',
      },
      {
        title: 'Scripting & OS',
        description: 'Systems administration, automation scripts, and runtime environments.',
      },
      {
        title: 'Observability & Monitoring',
        description: 'Tracking system health, performance metrics, and logs.',
      },
      {
        title: 'Soft Skills',
        description: 'Non-technical strengths that complement engineering work.',
        items: ['Problem Solving', 'Continuous Learning', 'Communicative', 'Collaborative', 'Adaptability'],
      },
    ],
  },

  // ─── ProjectsSection ─────────────────────────────────────────────────────
  projects: {
    sectionTag: 'Project Showcase',
    sectionTitle: 'Building reliable systems from the ground up.',
    sectionDescription:
      'A deep dive into selected projects, exploring the challenges faced, the architecture designed, and the impact delivered.',
    labels: {
      background: 'Background',
      challenge: 'The Challenge',
      solution: 'Solution & Process',
      impact: 'Impact & Result',
      technologies: 'Technologies Used',
      viewRepo: 'View Repository',
      role: 'Role',
      featuredBadge: 'Spotlight Project',
    },
    items: [
      {
        background:
          'Early on, I ran into the classic "it works on my machine" problem firsthand. The app ran fine locally but crashed in another environment because the database was not ready when the app started. It was frustrating, and honestly a bit embarrassing. I built this project to actually understand Docker properly, not just the basics, but what it takes to make a containerized setup reliable in production. I picked a real scenario: a Python web service with a PostgreSQL backend, and worked through every edge case until it ran clean.',
        problem:
          'Problems like "it works on my machine" and race conditions during boot often lead to failed deployments and unexpected downtime.',
        role: 'DevOps Engineer: Designed the containerization strategy, implemented security practices, and set up Docker Compose orchestration.',
        solution:
          'I wrote a production-ready Dockerfile using a non-root user to minimize image size and harden security. Using Docker Compose, I set up healthchecks (`pg_isready`) so the app waits for the database to be ready before starting. Configurations and credentials were separated using `.env` files and isolated bridge networks.',
        result:
          'The app now starts reliably in both local and production environments. Race conditions during boot are gone because the database has to pass a healthcheck before the app comes up. Secrets and config stay out of the image entirely, managed through `.env` files and isolated networks.',
      },
      {
        background:
          'I once had five GitLab repositories, each with their own CI/CD file. The same pipeline logic, copied and pasted five times. When I needed to update a security scan, I had to do it in every single repo, hoping I did not miss one. When we added a new microservice, it meant writing another copy from scratch. It got to the point where maintaining the pipelines took more time than improving them. So I stopped copying and started treating the pipeline like a shared library, one repository that everything else delegates to.',
        problem:
          'Duplicating CI/CD logic across repositories creates maintenance overhead and inconsistency. Furthermore, hardcoding credentials into Kubernetes manifests introduces permanent secret leaks in Git history.',
        role: 'DevOps Engineer: Designed a centralized pipeline in the `general-pipeline` repo, wrote Kubernetes manifest templates with `envsubst` placeholders, delegated pipeline execution in GitLab Settings, and built multi-stage Docker images with a non-root Nginx runner.',
        solution:
          'I leveraged GitLab\'s "CI/CD Configuration File Path" feature to point application repos to the external `general-pipeline` repo. Pushes to the `alpha` branch automatically run the central pipeline without keeping pipeline scripts in the app repo. Kubernetes manifests use `${}` variables resolved by `envsubst` at runtime using GitLab CI/CD Variables, keeping secrets out of the code.',
        result:
          'The pipeline scales cleanly without code duplication. Onboarding new microservices only requires updating GitLab settings without writing new CI files. This centralized model sped up deployment cycles by 70% by eliminating per-repo pipeline creation and maintenance overhead. Furthermore, dynamic `envsubst` injection from GitLab CI/CD Variables at runtime eliminated 100% of hardcoded secrets from Kubernetes manifests.',
      },
      {
        background:
          'For a long time, setting up a cloud server meant logging into the AWS Console and clicking through the wizard. It felt quick. But the moment I had to rebuild one (after an instance got terminated, or a config quietly changed) I realized I had no idea what the original state actually was. No record, no repeatability. That is what pushed me to write the infrastructure as code instead, using Terraform and Ansible together so rebuilding a server is never more than two commands away.',
        problem:
          'Manual server setup is slow and error-prone. Without code, changes cannot be peer-reviewed or audited, leading to configuration drift where undocumented tweaks make servers impossible to reproduce during incident recovery.',
        role: 'DevOps Engineer: Structured modular Terraform files, authored idempotent Ansible playbooks, and connected the two tools with dynamic inventory generation.',
        solution:
          'I organized the setup into a 7-step automated pipeline. Terraform provisions the AWS Security Group, EC2 Ubuntu 22.04 instance, and SSH keys. Using `local_file` and `templatefile()`, Terraform writes the EC2 public IP directly to `inventory.ini`. Ansible then connects over SSH, installs Docker, and runs the Flask app container from Docker Hub. Variables control instance types, ports, and image names for easy reuse.',
        result:
          'Rebuilding the full server stack now takes two commands: `terraform apply` to provision the cloud resources and `ansible-playbook` to configure the host. What used to take 30 minutes of clicking and guessing now finishes in under 8 minutes, consistently, every time.',
      },
      {
        background:
          'The codebase had grown into several microservices (frontend, API gateway, auth, analytics) and at some point the deployment process had become the weakest part of the whole system. Everyone pushed changes differently. There was no consistent versioning, no single source of truth. The cluster was always a manual hotfix away from drifting out of sync with what was in Git. I knew we needed to stop relying on the pipeline to push things and start letting Git determine what runs in production.',
        problem:
          'Push-based CI/CD pipelines require direct write permissions to Kubernetes clusters, creating security risks. Direct manual hotfixes in live clusters also cause configuration drift, making Git history out of sync with what is running in production.',
        role: 'DevOps Engineer: Designed a centralized CI/CD pipeline, authored Helm charts, and implemented pull-based GitOps with ArgoCD for continuous sync and self-healing.',
        solution:
          'I created a DRY pipeline in GitLab CI/CD with Semantic Release for automated versioning. Instead of pushing to the cluster, ArgoCD monitors a dedicated GitOps repo containing our Helm charts. ArgoCD uses Auto-Sync and Self-Heal to keep the Kubernetes cluster in sync with Git at all times.',
        result:
          'Switching to pull-based deployment revoked 100% of the CI pipeline\'s write permissions to the cluster, closing a critical attack vector. ArgoCD\'s Self-Heal eliminated 100% of configuration drift by reverting unauthorized direct cluster edits within seconds, while reducing mean time to recovery (MTTR) by 80% because of instant rollback feature.',
      },
      {
        background:
          'Setting things up manually in GCP felt fine at first, until I had to do it again. Every time I repeated the process for a new environment or after an incident, the result was slightly different from the last. I started wondering how anyone could guarantee consistency across environments without code. So I rebuilt the entire setup in Terraform, split across modules for networking, compute, and storage. Reproducing the full environment now takes a single command.',
        problem:
          'Manual cloud provisioning lacks an audit trail and cannot be peer-reviewed. Undocumented changes lead to configuration drift between staging and production environments, making scaling unreliable.',
        role: 'DevOps Engineer: Structured modular Terraform files, wrote dynamic firewall rules using iterators, and isolated credentials.',
        solution:
          'I split Terraform code into separate modules for networking, compute, and storage. Using Terraform\'s `for_each` iterator, I dynamically generated ingress firewall policies. The setup provisions a custom VPC and Compute Engine instance with a startup script that bootstraps Nginx on boot. Sensitive variables remain isolated in `.tfvars`.',
        result:
          'What used to require a series of manual clicks through the GCP console now runs from a single `terraform apply`. Setup time dropped by 80%, and every environment comes out identical because the code does not change between runs. Configuration drift, which was the whole reason this project started, is no longer a concern.',
      },
      {
        background:
          'Core Banking Syariah (CBS) is a core banking system handling highly sensitive financial transactions. This domain demands strict technical standards: zero-downtime deployments, full auditability for every release, shift-left security layers, and absolute consistency across multiple environments (DEV, UAT, PROD). I independently architected and built this project to meet these rigorous enterprise demands within a complex microservices ecosystem (Go, Java, Node.js, frontend).',
        problem:
          'Microservice deployments were fragmented across different tech stacks and build methods, making standardization difficult. Delivery pipelines lacked centralization for security checks and release governance, while ununified logs and metrics slowed down troubleshooting.',
        role: 'DevOps Engineer: Designed and implemented the end-to-end DevOps architecture for CBS microservices with a focus on automation, standardization, and observability.',
        solution:
          'I standardized container packaging across Go, Java, Node.js, and frontend apps with secure Docker builds, then built a centralized GitLab CI/CD pipeline with SAST, image scanning, and release approval gates. I adopted a GitOps workflow with Helm charts for Kubernetes deployments, and configured observability tools using Prometheus, Grafana, Loki, OpenTelemetry, and Grafana Beyla for unified metrics and logging.',
        result:
          'With a single GitLab CI/CD pipeline handling everything from build to release, release lead time (the time from code commit to production deployment) dropped by 60%. Each stage runs shift-left security scans and requires an approval gate before anything moves forward. Helm and GitOps solved the consistency problem: every environment pulls its config from Git, so staging and production stay in sync without any manual reconciliation. On the monitoring side, Prometheus, Grafana Beyla, and Loki meant that by the time an incident was reported, the data was already there. Diagnosing it was a matter of reading a dashboard, and MTTR dropped by 50%.',
      },
    ],
  },

  // ─── ContactSection ───────────────────────────────────────────────────────
  contact: {
    sectionTag: 'Contact',
    sectionTitle: "Let's build something together.",
    sectionDescription:
      'Whether you have a question, a project idea, or just want to connect and talk about infrastructure and automation, my inbox is always open.',
  },

  // ─── ReflectionSection ────────────────────────────────────────────────────
  reflection: {
    sectionTag: 'Reflection',
    sectionTitle: 'Looking Back, Moving Forward.',
    sectionDescription:
      "A brief reflection on my learning journey, the challenges I've faced, and where I'm heading next.",
    items: [
      {
        question: 'Biggest Challenge',
        answer:
          'The main challenge was turning terminal scripts, CI/CD pipelines, and complex observability setups into clear visual narratives that are easy to digest.',
      },
      {
        question: 'Most Representative Project',
        answer:
          'The End-to-End DevOps & Observability for Core Banking System (CBS) project best represents my work. It unifies the entire modern DevOps lifecycle — from CI/CD automation, Helm & ArgoCD GitOps, DevSecOps scanning (SonarQube & Trivy), to full-stack observability with Prometheus, Grafana, Loki, and eBPF (Grafana Beyla).',
      },
      {
        question: 'Most Improved Skill',
        answer:
          'My systematic troubleshooting and observability analysis improved the most. Configuring real-time metrics and distributed tracing with OpenTelemetry and eBPF gave me deep insights into container performance and system reliability.',
      },
      {
        question: 'Areas for Future Growth',
        answer:
          'Looking ahead, I plan to dive deeper into AIOps (AI-driven operational automation), Advanced Cloud & Container Security (CKS), and Service Mesh (Istio). I also aim to earn certifications such as AWS Solutions Architect and CKA to validate my hands-on knowledge.',
      },
      {
        question: 'Why This Portfolio Matters',
        answer:
          'This portfolio serves as tangible proof of my capabilities. While a resume only lists skills, a portfolio demonstrates how those skills are applied to solve real-world enterprise problems, proving I am ready to contribute from day one.',
      },
    ],
  },
}

export type Translations = {
  portfolioLabel: string
  activePanel: string
  sectionLabels: {
    home: string
    about: string
    stack: string
    experience: string
    projects: string
    contact: string
    reflection: string
  }
  dock: {
    home: string
    experience: string
    about: string
    stack: string
    projects: string
    reflection: string
    contact: string
  }
  hero: {
    statusBadge: string
    greeting: string
    title: string
    tagline: string
    quickNav: Array<{ label: string; description: string }>
    ctaExplore: string
    ctaContact: string
    exploreLink: string
  }
  about: {
    sectionTag: string
    sectionTitle: string
    cards: {
      whoIAm: { title: string; body: string[] }
      careerGoals: { title: string; body: string }
      interests: { title: string; body: string }
      background: { title: string; body: string }
      coreSkills: { title: string }
    }
  }
  experience: {
    sectionTag: string
    sectionTitle: string
    sectionDescription: string
    cards: Array<{ title: string; description: string }>
  }
  techStack: {
    sectionTag: string
    sectionTitle: string
    sectionDescription: string
    levels: { Basic: string; Intermediate: string; Learning: string }
    clusters: Array<{ title: string; description: string; items?: string[] }>
  }
  projects: {
    sectionTag: string
    sectionTitle: string
    sectionDescription: string
    labels: {
      background: string
      challenge: string
      solution: string
      impact: string
      technologies: string
      viewRepo: string
      role: string
      featuredBadge: string
    }
    items: Array<{
      background: string
      problem: string
      role: string
      solution: string
      result: string
    }>
  }
  contact: {
    sectionTag: string
    sectionTitle: string
    sectionDescription: string
  }
  reflection: {
    sectionTag: string
    sectionTitle: string
    sectionDescription: string
    items: Array<{ question: string; answer: string }>
  }
}
