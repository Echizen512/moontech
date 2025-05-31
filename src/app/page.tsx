"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Code2,
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
  Database,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Header } from "@/components/Header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <Footer />
    </div>
  )
}

function MissionVisionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestro Propósito</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Misión & Visión</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Impulsando la innovación y la excelencia en cada proyecto que emprendemos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestra Misión</h3>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Desarrollar soluciones tecnológicas innovadoras y de alto impacto que potencien la transformación digital de nuestros clientes, combinando creatividad, funcionalidad y calidad en cada proyecto.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestra Visión</h3>
                <div className="w-12 h-1 bg-purple-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Ser líderes en el desarrollo de aplicaciones y sistemas personalizados, expandiendo nuestra presencia global y revolucionando la manera en que las empresas y usuarios interactúan con la tecnología.
            </p>
            <div className="space-y-3">
              {[
                "Liderazgo Tecnológico",
                "Innovación Sustentable",
                "Excelencia",
                "Mejoras Continuas",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Construimos confianza a través de la transparencia, la honestidad y prácticas éticas en cada interacción.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Siempre exploramos nuevas ideas y tecnologías para ofrecer lo mejor.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: Users,
      title: "Trabajo en equipo",
      description: "La sinergia entre nuestros profesionales es clave.",
      color: "from-green-600 to-green-800",
    },
    {
      icon: CheckCircle,
      title: "Calidad",
      description: "Nos esforzamos por entregar productos robustos y optimizados",
      color: "from-orange-600 to-orange-800",
    },
    {
      icon: Globe,
      title: "Compromiso",
      description: "Nos dedicamos al éxito de nuestros clientes y proyectos.",
      color: "from-red-600 to-red-800",
    },
    {
      icon: Code2,
      title: "Adaptabilidad",
      description: "Nos mantenemos ágiles frente a los cambios en el mercado.",
      color: "from-indigo-600 to-indigo-800",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestros Valores</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">¿Qué nos impulsa a seguir adelante?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestros valores fundamentales dan forma a todo lo que hacemos, desde cómo escribimos código hasta cómo construimos relaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-blue-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const team = [
    {
      name: "Miguel Rodriguez",
      position: "CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "3 Años de Experiencia",
      skills: ["NextJS", "Solidity", "Node.js"],
    },
    {
      name: "Christian Salazar",
      position: "COO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "3 Años de Experiencia",
      skills: ["React", "Nest.js", "TailwindCSS"],
    },
    {
      name: "Carlos Henríquez",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "4 Años de Experiencia",
      skills: ["Solidity", "Kotlin", "Node.js"],
    },
    {
      name: "Isidis Carrasco",
      position: "Directora de Marketing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "2 Años de Experiencia",
      skills: ["Marketing", "Edición", "Diseño Gráfico"],
    },
    {
      name: "Adonai La Riva",
      position: "Director del Dep. de Videojuegos",
      image: "/placeholder.svg?height=300&width=300",
      bio: "3 Años de Experiencia",
      skills: ["Game Marker", "Godot"],
    },
    {
      name: "Víctor Duarte",
      position: "Director de Realidad Aumentada y Virtual",
      image: "/placeholder.svg?height=300&width=300",
      bio: "2 Años de Experiencia",
      skills: ["Unity"],
    },
    {
      name: "Engelth Andrea",
      position: "Programador y Diseñador Gráfico",	
      image: "/placeholder.svg?height=300&width=300",
      bio: "3 Años de Experiencia",
      skills: ["Game Maker", "Godot"],
    },
    {
      name: "Yulieth Nieto",
      position: "Programador",
      image: "/placeholder.svg?height=300&width=300",
      bio: "3 Años de Experiencia",
      skills: ["Laravel", "JavaScript", "ProsstgreSQL"],
    },
    {
      name: "Luís Alvarez",
      position: "Programador",
      image: "/placeholder.svg?height=300&width=300",
      bio: "4 Años de Experiencia",
      skills: ["Laravel", "JavaScript", "ProsstgreSQL"],
    },
    {
      name: "Carlos Granada",
      position: "Programador",
      image: "/placeholder.svg?height=300&width=300",
      bio: "5 Años de Experiencia",
      skills: ["React", "TailwindCSS"],
    },
    {
      name: "Gabriela Montes",
      position: "Redactora Técnica",
      image: "/placeholder.svg?height=300&width=300",
      bio: "2 Años de Experiencia",
      skills: [""],
    },
        {
      name: "Paola Lugo",
      position: "Redactora Técnica",
      image: "/placeholder.svg?height=300&width=300",
      bio: "2 Años de Experiencia",
      skills: [""],
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(team.length / 3))
    }, 10000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [team.length])

  const visibleTeam = team.slice(currentSlide * 3, currentSlide * 3 + 3)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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

function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
                Soluciones de Software Personalizadas
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Construye tu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "} "Futuro Digital"
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Creamos soluciones de software a medida que transforman tus ideas en aplicaciones poderosas y escalables.
                Desde la conceptualización hasta la implementación, somos tu aliado tecnológico.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Solicitar Atención
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Ver Proyectos Anteriores
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">40+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3+ Años</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Experiencia en Programación</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg"></div>
                    <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                  </div>
                  <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: Globe, title: "Aplicaciones Web", description: "Aplicaciones web modernas y responsivas utilizando tecnologías de vanguardia como React, Next.js y Node.js." },
    { icon: Monitor, title: "Aplicaciones de Escritorio", description: "Software de escritorio potente y eficiente para Windows y Linux." },
    { icon: Smartphone, title: "Aplicaciones Móviles", description: "Desarrollo de apps nativas y multiplataforma con experiencias excepcionales en Android." },
    { icon: Layers, title: "Aplicaciones Descentralizadas", description: "Soluciones basadas en blockchain para garantizar seguridad y descentralización en tus aplicaciones." },
    { icon: FileText, title: "Landing Page", description: "Diseño y desarrollo de páginas de aterrizaje optimizadas para conversión y experiencia de usuario." },
    { icon: Gamepad, title: "Videojuegos", description: "Desarrollo de videojuegos con gráficos impactantes y mecánicas envolventes para diversas plataformas." },
    { icon: Camera, title: "Realidad Aumentada", description: "Experiencias de realidad aumentada que fusionan lo digital con el mundo real." },
    { icon: Eye, title: "Realidad Virtual", description: "Aplicaciones inmersivas en realidad virtual para diferentes industrias." },
    { icon: Megaphone, title: "Marketing Digital", description: "Estrategias de marketing digital para potenciar la visibilidad y engagement de tu negocio." },
    { icon: Brush, title: "Diseño Gráfico", description: "Creación de contenido visual impactante y branding profesional." },
    { icon: Pen, title: "Redacción Técnica", description: "Elaboración de documentación técnica precisa y estructurada para proyectos tecnológicos." },
    { icon: Bug, title: "Testing", description: "Pruebas exhaustivas para garantizar la calidad y rendimiento de tus aplicaciones." },
  ]

  return (
    <section id="services" className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestros Servicios</Badge>
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
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
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

function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "enterprise", name: "Enterprise" },
    { id: "ecommerce", name: "E-commerce" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Revolution",
      description:
        "A complete e-commerce solution with AI-powered recommendations, real-time inventory management, and seamless payment integration. Built for scalability and performance.",
      category: "ecommerce",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform connecting patients, doctors, and administrators. Features include appointment scheduling, medical records, and telemedicine capabilities.",
      category: "enterprise",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    },
    {
      id: 3,
      title: "FinTech Mobile Application",
      description:
        "Secure mobile banking app with biometric authentication, real-time transactions, and advanced analytics. Serving over 100k active users.",
      category: "mobile",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Stripe", "ML Kit"],
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description:
        "Modern property management platform with virtual tours, automated valuations, and integrated CRM. Streamlining the real estate experience.",
      category: "web",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps"],
    },
    {
      id: 5,
      title: "Supply Chain Analytics",
      description:
        "Enterprise-grade supply chain management system with predictive analytics, real-time tracking, and automated reporting for global operations.",
      category: "enterprise",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "Python", "TensorFlow", "Docker"],
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Comprehensive social media management platform with content scheduling, analytics, and team collaboration features for marketing agencies.",
      category: "web",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express", "Redis", "Chart.js"],
    },
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
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Our Portfolio</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest work and see how we've helped businesses transform their digital presence.
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
                          {project.technologies.map((tech, index) => (
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
                          View Project
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

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento & Planificación",
      description:
        "Nuestra web ofrece una navegación intuitiva y estructurada, permitiendo a los clientes explorar todos los proyectos disponibles, organizados por categorías. Para clientes que requieren aplicaciones diseñadas a medida, nuestro equipo especializado recopila detalladamente sus requerimientos, asegurando un enfoque alineado con sus objetivos.",
    },
    {
      number: "02",
      title: "Presupuesto",
      description:
        "Se elabora un presupuesto detallado, con cláusulas que garantizan transparencia y equidad para ambas partes.",
    },
    {
      number: "03",
      title: "Entrega y Garantía",
      description:
        "Tras el cumplimiento de los acuerdos establecidos, el cliente recibe el proyecto completo con garantía, asegurando su correcto funcionamiento.",
    },
    {
      number: "04",
      title: "Despliegue y Mantenimiento",
      description:
        "MoonTech pone a disposición un servicio de implementación y soporte, ofreciendo asistencia técnica para una integración óptima.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">Nuestro Proceso</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">¿Cómo Trabajamos?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestro proceso de desarrollo comprobado asegura la entrega exitosa del proyecto de principio a fin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Linea de Tiempo</h4>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    Actividades
                  </Badge>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{step.title}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "MoonTech transformed our business with an incredible e-commerce platform. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and within budget.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, HealthTech Solutions",
      company: "HealthTech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with MoonTech was a game-changer for our healthcare platform. They understood our complex requirements and delivered a scalable solution that serves thousands of patients daily.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, GreenEarth",
      company: "GreenEarth",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The mobile app MoonTech built for us has been instrumental in our growth. Their innovative approach and commitment to quality made them the perfect development partner.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "VP of Technology, FinanceFlow",
      company: "FinanceFlow",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "MoonTech's expertise in fintech development is unmatched. They built us a secure, compliant platform that handles millions in transactions. Highly recommended!",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager, RetailMax",
      company: "RetailMax",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The supply chain management system MoonTech developed has revolutionized our operations. Their team's professionalism and technical skills are outstanding.",
    },
  ]
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MoonTech</span>
            </div>
            <p className="text-gray-400">Crafting exceptional software solutions for businesses worldwide.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Servicios</h4>
            <div className="space-y-2 text-gray-400">
              <div>Aplicaciones</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Compañia</h4>
            <div className="space-y-2 text-gray-400">
              <div>Acerca de</div>
              <div>Nuestro Equipo</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <div>LinkedIn</div>
              <div>X</div>
              <div>Instragram</div>
              <div>Email</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MoonTech. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  )
}
