import { Badge } from "@/components/ui/badge"
import { CheckCircle } from 'lucide-react'

export function ProcessSection() {
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
