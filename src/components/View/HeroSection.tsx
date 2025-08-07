import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircleMore } from 'lucide-react' 

export function HeroSection() {
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
                                Somos tu aliado tecnológico para el éxito digital. Te acompañamos a desarrollar el proyecto de tus sueños.
                            </p>
                        </div>
                        <div className="flex justify-center"> {/* Centrado horizontal */}
                            <a href="https://wa.me/584243363970" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                                    Contactar por WhatsApp
                                    <MessageCircleMore className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
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
