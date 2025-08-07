import { Code2 } from 'lucide-react'

export function Footer() {
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
