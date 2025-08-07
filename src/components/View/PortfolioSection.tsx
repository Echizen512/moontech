"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, ArrowRight } from 'lucide-react'

export function PortfolioSection() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [projects, setProjects] = useState<any[]>([])

    const categories = [
        { id: "all", name: "Todos los Proyectos" },
        { id: "web", name: "Aplicaciones Web" },
        { id: "mobile", name: "Aplicaciones Móviles" },
        { id: "enterprise", name: "Aplicaciones Descentralizadas" },
        { id: "ecommerce", name: "Videojuegos" },
    ]

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/projects")

                if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
                    const json = await res.json()
                    const formattedProjects = json.data.map((project: any) => ({
                        ...project,
                        technologies: project.technologies
                            ? project.technologies.split(",").map((tech: string) => tech.trim())
                            : [],
                        image: project.images?.find((img: any) => img.is_main)?.url || "/placeholder.svg?height=200&width=300&text=Proyecto"
                    }))
                    setProjects(formattedProjects)
                } else {
                    console.warn("Projects API not available, using fallback data")
                    setProjects(getFallbackProjects())
                }
            } catch (err) {
                console.error("Error fetching projects:", err)
                setProjects(getFallbackProjects())
            }
        }
        fetchProjects()
    }, [])

    // Add fallback data function
    const getFallbackProjects = () => [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Plataforma completa de comercio electrónico con gestión de inventario y pagos.",
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/placeholder.svg?height=200&width=300&text=E-commerce"
        },
        {
            id: 2,
            title: "App de Delivery",
            description: "Aplicación móvil para pedidos de comida con tracking en tiempo real.",
            category: "mobile",
            technologies: ["React Native", "Firebase", "Google Maps"],
            image: "/placeholder.svg?height=200&width=300&text=Delivery+App"
        },
        {
            id: 3,
            title: "Sistema de Gestión",
            description: "Sistema empresarial para gestión de recursos humanos y nómina.",
            category: "enterprise",
            technologies: ["Vue.js", "Laravel", "MySQL"],
            image: "/placeholder.svg?height=200&width=300&text=Sistema+Gestión"
        },
        {
            id: 4,
            title: "Juego Arcade",
            description: "Videojuego arcade 2D con mecánicas innovadoras y gráficos retro.",
            category: "ecommerce",
            technologies: ["Unity", "C#", "Photoshop"],
            image: "/placeholder.svg?height=200&width=300&text=Juego+Arcade"
        }
    ]

    const filteredProjects =
        selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <section
            id="portfolio"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestro Portafolio</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Proyectos Disponibles</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    </p>
                </div>
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`transition-all duration-300 ${selectedCategory === category.id
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                }`}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
                {/* Projects Carousel */}
                <div className="relative">
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {filteredProjects.map((project) => (
                                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="group border-blue-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800">
                                        <CardContent className="p-0">
                                            {/* Project Image */}
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                        <Play className="w-8 h-8 text-white ml-1" />
                                                    </div>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    <Badge className="bg-blue-600 text-white">
                                                        {categories.find((c) => c.id === project.category)?.name}
                                                    </Badge>
                                                </div>
                                            </div>
                                            {/* Project Info */}
                                            <div className="p-6 space-y-4">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech: string, index: number) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                                                    Ver Proyecto
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700" />
                        <CarouselNext className="hidden md:flex -right-12 bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
