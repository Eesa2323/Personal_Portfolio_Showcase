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
        images: ["codecraft1.png", "codecraft2.png", "codecraft3.png"],
    },
    lifemaxx: {
        kicker: "03 / Self-improvement social platform",
        title: "Lifemaxx",
        description:
            "A social media platform focused on self-improvement. Users can create their own journeys, discover other people working toward similar goals, and find encouragement from a community moving in the same direction.",
        tags: ["Social platform", "Journeys", "Community"],
        images: ["lifemax1.png", "lifemax2.png", "lifemax3.png"],
    },
    "realtime-chat": {
        kicker: "04 / Realtime communication",
        title: "Realtime Chat",
        description:
            "A focused communication app that lets users connect and exchange messages instantly. The project uses Node.js and WebSockets to keep conversations responsive and connected without relying on page refreshes.",
        tags: ["Node.js", "WebSockets", "JavaScript"],
        images: ["chatapp1.jpg"],
    },
    "calorie-counter": {
        kicker: "05 / Team project",
        title: "Calorie Counter",
        description:
            "A team-built nutrition app that helps users count calories and keep track of their daily macros. The workflow keeps food logging clear and practical, with a full stack built using HTML, CSS, JavaScript, Node.js, and MongoDB.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
        images: ["caltrack1.png", "caltrack2.png"],
    },
    "smart-task-engine": {
        kicker: "02 / Project management application",
        title: "Smart Task and Dependency Engine",
        description:
            "Smart Task & Dependency Engine is a Jira-style project management application for creating projects, managing issues, planning sprints, and tracking progress. It includes boards, backlogs, sprint-specific boards, drag-and-drop planning, issue dependencies, timelines, reports, comments, and project switching. The application uses data structures and algorithms, including directed graphs, cycle detection, topological sorting, queues, stacks, and priority-based scheduling. It is built with ASP.NET Core, C#, React, TypeScript, Entity Framework Core, and Microsoft SQL Server.",
        tags: [
            "ASP.NET Core",
            "C#",
            "React",
            "TypeScript",
            "Entity Framework Core",
            "Microsoft SQL Server",
        ],
        images: [
            "projectplanner1.png",
            "projectplanner2.png",
            "projectplanner3.png",
            "projectplanner4.png",
        ],
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

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && projectModal.classList.contains("open")) closeModal()
    })
}
