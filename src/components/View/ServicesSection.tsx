"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Layers, FileText, Gamepad, Camera, Eye, Megaphone, Brush, Pen, Bug, Smartphone, Globe, Star } from 'lucide-react'
import React from "react"

export function ServicesSection() {
    const [services, setServices] = useState<any[]>([])

    // Define iconMap for mapping icon names to Lucide icons
    const iconMap: Record<string, React.ElementType> = {
        Monitor,
        Layers,
        FileText,
        Gamepad,
        Camera,
        Eye,
        Megaphone,
        Brush,
        Pen,
        Bug,
        Smartphone,
        Globe,
        Star,
    }

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("/api/services")

                // Check if response is ok and content type is JSON
                if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
                    const json = await res.json()
                    const formatted = json.data.map((service: any) => ({
                        ...service,
                        icon: iconMap[service.icon_name] || Globe,
                    }))
                    setServices(formatted)
                } else {
                    // Use fallback data if API is not available
                    console.warn("API not available, using fallback data")
                    setServices(getFallbackServices())
                }
            } catch (err) {
                console.error("Error fetching services:", err)
                // Use fallback data on error
                setServices(getFallbackServices())
            }
        }
        fetchServices()
    }, [])

    // Add fallback data function
    const getFallbackServices = () => [
        {
            title: "Desarrollo Web",
            description: "Creamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías.",
            icon: Monitor
        },
        {
            title: "Aplicaciones Móviles",
            description: "Desarrollamos apps nativas e híbridas para iOS y Android.",
            icon: Smartphone
        },
        {
            title: "Sistemas Empresariales",
            description: "Soluciones empresariales escalables y seguras para optimizar procesos.",
            icon: Layers
        },
        {
            title: "E-commerce",
            description: "Plataformas de comercio electrónico completas y personalizadas.",
            icon: Globe
        },
        {
            title: "Consultoría IT",
            description: "Asesoramiento técnico especializado para proyectos de tecnología.",
            icon: FileText
        },
        {
            title: "Mantenimiento",
            description: "Soporte técnico continuo y mantenimiento de aplicaciones.",
            icon: Bug
        }
    ]

    return (
        <section id="services" className="py-8 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        Nuestros Servicios
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        Soluciones Integrales de Software
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Desde el concepto inicial hasta la implementación final, ofrecemos servicios integrales de desarrollo de software adaptados a las necesidades de su negocio.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="border-blue-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
                        >
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        {service.icon &&
                                            React.createElement(service.icon, {
                                                className: "w-8 h-8 text-blue-600 dark:text-blue-400",
                                            })}
                                    </div>
                                </div>
                                <CardTitle className="text-xl text-gray-900 dark:text-white">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
