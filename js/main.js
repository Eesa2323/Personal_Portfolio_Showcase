const menuToggle = document.querySelector(".menu-toggle")
const siteNav = document.querySelector(".site-nav")

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open")
        menuToggle.setAttribute("aria-expanded", String(isOpen))
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation")
    })
}

const projectModal = document.querySelector("#project-modal")
const projectTriggers = document.querySelectorAll(".project-trigger")

const projects = {
    "coding-pathways": {
        kicker: "01 / Final year university project",
        title: "Coding Pathways",
        description:
            "A collaborative coding platform inspired by the best parts of LeetCode. Users can follow dedicated pathways for AI, data structures and algorithms, game development, and software engineering, while collaborating with other learners in realtime. Built with Node.js, React, MongoDB, and JavaScript.",
        tags: ["Node.js", "React", "MongoDB", "JavaScript"],
        github: "https://github.com/Eesa2323/Collaborative-coding-platform",
        images: ["codecraft1.png", "codecraft2.png", "codecraft3.png"],
    },
    gridstock: {
        kicker: "02 / Warehouse inventory &amp; picker routing",
        title: "GridStock",
        description:
            "GridStock is a Java Spring Boot warehouse inventory and picker-routing application. Dijkstra's algorithm computes optimal picking routes over a grid graph. In-memory H2 database, zero-setup demo.",
        tags: ["Java", "Spring Boot", "H2 DB", "Dijkstra's Algorithm"],
        github: "https://github.com/Eesa2323/GridStock_Java_Spring_Inventory_Management",
        images: ["gridstock1.png", "gridstock2.png", "gridstock3.png", "gridstock4.png"],
    },
    lifemaxx: {
        kicker: "03 / Self-improvement social platform",
        title: "Lifemaxx",
        description:
            "A social media platform focused on self-improvement. Users can create their own journeys, discover other people working toward similar goals, and find encouragement from a community moving in the same direction. It allows realtime messaging and interactive communities.",
        tags: ["Social platform", "Journeys", "Community"],
        github: "https://github.com/Eesa2323/lifemaxx_social_app",
        images: ["lifemax1.png", "lifemax2.png", "lifemax3.png"],
    },
    "smart-task-engine": {
        kicker: "04 / Project management application",
        title: "Smart Task & Dependency Engine",
        description:
            "Smart Task & Dependency Engine is a Jira-style project management application for creating projects, managing issues, planning sprints, and tracking progress. It includes boards, backlogs, sprint-specific boards, drag-and-drop planning, issue dependencies, timelines, reports, comments, and project switching. The application uses data structures and algorithms, including directed graphs, cycle detection, topological sorting, queues, stacks, and priority-based scheduling. It is built with ASP.NET Core, C#, React, TypeScript, Entity Framework Core, and Microsoft SQL Server.",
        tags: [
            "ASP.NET Core",
            "C#",
            "React",
            "TypeScript",
            "Entity Framework Core",
            "Microsoft SQL Server",
            "Microservices",
        ],
        github: "https://github.com/Eesa2323/Project_Planner_ASP_NET_CSHARP",
        images: [
            "projectplanner1.png",
            "projectplanner2.png",
            "projectplanner3.png",
            "projectplanner4.png",
        ],
    },
    "realtime-chat-bottom": {
        kicker: "07 / Realtime communication",
        title: "Realtime Chat",
        description:
            "A focused communication app that lets users connect and exchange messages instantly. The project uses Node.js and WebSockets to keep conversations responsive and connected without relying on page refreshes.",
        tags: ["Node.js", "WebSockets", "JavaScript"],
        github: "https://github.com/Eesa2323/realtime-chat",
        images: ["chatapp1.jpg"],
    },
    "calorie-counter-bottom": {
        kicker: "08 / Team project",
        title: "Calorie Counter",
        description:
            "A team-built nutrition app that helps users count calories and keep track of their daily macros. The workflow keeps food logging clear and practical, with a full stack built using HTML, CSS, JavaScript, Node.js, and MongoDB.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
        github: "https://github.com/Eesa2323/calorie_counter",
        images: ["caltrack1.png", "caltrack2.png"],
    },
    "news-outlet": {
        kicker: "08 / Flask blog &amp; news app",
        title: "Ink and Signal",
        description:
            "A full-featured Flask blog/news application with SQLite persistence, user authentication, post management, likes, comments, and notifications.",
        tags: ["Flask", "SQLite", "Python"],
        github: "https://github.com/Eesa2323/ink_signal_news_application_flask",
        images: ["flask1.png", "flask2.png", "flask3.png"],
    },
    ledgerly: {
        kicker: "05 / Expense-sharing app",
        title: "Ledgerly",
        description:
            "A Splitwise-inspired expense-sharing app built with .NET 10 and ASP.NET Core, using SQL Server via Entity Framework Core, JWT + rotating refresh tokens through ASP.NET Core Identity, and handling group/direct expenses, invitations, settlements, budgets, and live currency conversion via the Frankfurter API.",
        tags: [
            ".NET 10",
            "ASP.NET Core",
            "SQL Server",
            "Entity Framework Core",
            "JWT",
            "ASP.NET Core Identity",
        ],
        github: "https://github.com/Eesa2323/Ledgerly_Bill_Spliiter_ASP_NET",
        images: ["legerly1.png", "legerly2.png", "legerly3.png", "legerly4.png"],
    },
}

if (projectModal && projectTriggers.length) {
    const modalKicker = document.querySelector("#modal-kicker")
    const modalTitle = document.querySelector("#modal-title")
    const modalDescription = document.querySelector("#modal-description")
    const modalTags = document.querySelector("#modal-tags")
    const modalGallery = document.querySelector("#modal-gallery")
    const closeModal = () => {
        projectModal.classList.remove("open")
        projectModal.setAttribute("aria-hidden", "true")
        document.body.classList.remove("modal-open")
    }

    projectTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const project = projects[trigger.dataset.project]
            if (!project) return
            modalKicker.textContent = project.kicker
            modalTitle.textContent = project.title
            modalDescription.textContent = project.description
            modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("")
            const modalGithub = document.querySelector("#modal-github")
            if (modalGithub) {
                modalGithub.href = project.github || "https://github.com/Eesa2323"
            }
            modalGallery.innerHTML = project.images
                .map(
                    (image, index) =>
                        `<figure><img src="images/${image}" alt="${project.title} screenshot ${index + 1}" loading="lazy"></figure>`,
                )
                .join("")
            projectModal.classList.add("open")
            projectModal.setAttribute("aria-hidden", "false")
            document.body.classList.add("modal-open")
            projectModal.querySelector(".modal-close").focus()
        })
    })

    projectModal.querySelectorAll("[data-modal-close]").forEach((element) => {
        element.addEventListener("click", closeModal)
    })

    const lightbox = document.querySelector("#lightbox")
    const lightboxImage = document.querySelector("#lightbox-image")

    if (lightbox && lightboxImage && modalGallery) {
        const closeLightbox = () => {
            lightbox.classList.remove("open")
            lightbox.setAttribute("aria-hidden", "true")
        }

        modalGallery.addEventListener("click", (event) => {
            const img = event.target.closest("img")
            if (!img) return
            lightboxImage.src = img.src
            lightboxImage.alt = img.alt
            lightbox.classList.add("open")
            lightbox.setAttribute("aria-hidden", "false")
        })

        lightbox.querySelectorAll("[data-lightbox-close]").forEach((element) => {
            element.addEventListener("click", closeLightbox)
        })

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) closeLightbox()
        })
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && projectModal.classList.contains("open")) closeModal()
    })
}
