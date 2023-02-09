type BadgeData = Array<{
    id: number;
    label: string;
    color: string;
}>

export const languages: BadgeData = [
    {
        id: 0,
        label: "JavaScript",
        color: "bg-yellow-400",
    },
    {
        id: 1,
        label: "TypeScript",
        color: "bg-blue-400",
    },
    {
        id: 2,
        label: "C#",
        color: "bg-purple-400",
    },
    {
        id: 3,
        label: "SQL",
        color: "bg-orange-400",
    },
];

export const technologies: BadgeData = [
    {
        id: 0,
        label: "React",
        color: "bg-sky-400",
    },
    {
        id: 1,
        label: "Angular",
        color: "bg-red-600",
    },
    {
        id: 2,
        label: "Blazor",
        color: "bg-purple-400",
    },
    {
        id: 3,
        label: "NextJS",
        color: "bg-black  ",
    },
    {
        id: 4,
        label: ".NET Core",
        color: "bg-violet-400",
    },
    {
        id: 5,
        label: "ASP.Net Core",
        color: "bg-blue-500",
    },
    {
        id: 6,
        label: "Entity Framework",
        color: "bg-purple-500",
    },
];

export const clouds: BadgeData = [
    {
        id: 0,
        label: "AWS",
        color: "bg-orange-400",
    },
    {
        id: 1,
        label: "Azure",
        color: "bg-sky-300",
    },
    {
        id: 2,
        label: "Cloudflare",
        color: "bg-orange-500",
    },
    {
        id: 3,
        label: "GitHub",
        color: "bg-black",
    },
];

export const databases: BadgeData = [
    {
        id: 0,
        label: "MySQL",
        color: "bg-orange-400",
    },
    {
        id: 1,
        label: "SQLite",
        color: "bg-blue-700",
    },
    {
        id: 2,
        label: "NoSQL",
        color: "bg-yellow-400",
    },
];

export const css: BadgeData = [
    {
        id: 0,
        label: "Tailwindcss",
        color: "bg-sky-400",
    },
    {
        id: 1,
        label: "Bootstrap",
        color: "bg-purple-400",
    },
    {
        id: 2,
        label: "WinUI 3",
        color: "bg-blue-400",
    },
];