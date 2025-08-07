"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
    const [team, setTeam] = useState<any[]>([])
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    useEffect(() => {
        async function fetchTeam() {
            try {
                const res = await fetch("/api/dev")

                if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
                    const json = await res.json()
                    const formattedTeam = json.data.map((member: any) => ({
                        ...member,
                        skills: member.skills || [],
                        image: member.image_url || "/placeholder.svg?height=300&width=300&text=Team+Member"
                    }))
                    setTeam(formattedTeam)
                } else {
                    console.warn("Team API not available, using fallback data")
                    setTeam(getFallbackTeam())
                }
            } catch (err) {
                console.error("Error fetching team:", err)
                setTeam(getFallbackTeam())
            }
        }
        fetchTeam()
    }, [])

    // Add fallback data function
    const getFallbackTeam = () => [
        {
            name: "Ana García",
            position: "Full Stack Developer",
            bio: "Especialista en desarrollo web con más de 5 años de experiencia en React y Node.js.",
            skills: ["React", "Node.js", "TypeScript", "MongoDB"],
            image: "/placeholder.svg?height=300&width=300&text=Ana+García"
        },
        {
            name: "Carlos Rodríguez",
            position: "Mobile Developer",
            bio: "Experto en desarrollo móvil nativo e híbrido para iOS y Android.",
            skills: ["React Native", "Swift", "Kotlin", "Firebase"],
            image: "/placeholder.svg?height=300&width=300&text=Carlos+Rodríguez"
        },
        {
            name: "María López",
            position: "UI/UX Designer",
            bio: "Diseñadora creativa enfocada en experiencias de usuario intuitivas y atractivas.",
            skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
            image: "/placeholder.svg?height=300&width=300&text=María+López"
        },
        {
            name: "David Martín",
            position: "DevOps Engineer",
            bio: "Especialista en infraestructura cloud y automatización de despliegues.",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            image: "/placeholder.svg?height=300&width=300&text=David+Martín"
        },
        {
            name: "Laura Sánchez",
            position: "Project Manager",
            bio: "Gestora de proyectos con experiencia en metodologías ágiles y equipos remotos.",
            skills: ["Scrum", "Agile", "Jira", "Slack"],
            image: "/placeholder.svg?height=300&width=300&text=Laura+Sánchez"
        },
        {
            name: "Miguel Torres",
            position: "Backend Developer",
            bio: "Desarrollador backend especializado en APIs escalables y bases de datos.",
            skills: ["Python", "Django", "PostgreSQL", "Redis"],
            image: "/placeholder.svg?height=300&width=300&text=Miguel+Torres"
        }
    ]

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev: number) => (prev + 1) % Math.max(1, Math.ceil(team.length / 3)))
        }, 10000) // Change slide every 10 seconds
        return () => clearInterval(timer)
    }, [team.length])

    return (
        <section className="py-20 bg-white dark:bg-gray-900" id="team">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestro Equipo</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        ¡Conoce a los expertos detrás de su éxito!
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Nuestro diverso equipo de profesionales apasionados reúne años de experiencia y conocimientos de vanguardia.
                    </p>
                </div>
                {/* Team Carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: Math.ceil(team.length / 3) }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid md:grid-cols-3 gap-8">
                                    {team.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                                        <Card
                                            key={index}
                                            className="group border-blue-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
                                        >
                                            <CardContent className="p-0">
                                                {/* Member Photo */}
                                                <div className="relative overflow-hidden">
                                                    <img
                                                        src={member.image || "/placeholder.svg?height=300&width=300&text=Team+Member"}
                                                        alt={member.name}
                                                        className="w-full h-64 object-fill transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                {/* Member Info */}
                                                <div className="p-6 space-y-4">
                                                    <div className="text-center">
                                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-blue-600 dark:text-blue-400 font-medium">{member.position}</p>
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{member.bio}</p>
                                                    {/* Skills */}
                                                    <div className="flex flex-wrap justify-center gap-2">
                                                        {member.skills.map((skill, skillIndex) => (
                                                            <Badge
                                                                key={skillIndex}
                                                                variant="secondary"
                                                                className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {Array.from({ length: Math.ceil(team.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "bg-blue-600 dark:bg-blue-400"
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
