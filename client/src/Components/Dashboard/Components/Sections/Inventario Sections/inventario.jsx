import React, { useState } from "react";
import { Link } from "react-router-dom";
import './inventario.css';

import { Search, Plus } from 'lucide-react';



const defaultProductos = [
  { id: 1, nombre: "Producto 1", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 2, nombre: "Producto 2", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 3, nombre: "Producto 3", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 4, nombre: "Producto 4", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 5, nombre: "Producto 5", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 6, nombre: "Producto 6", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 7, nombre: "Producto 7", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
  { id: 8, nombre: "Producto 8", disponibles: 0, imagen: "/placeholder.svg?height=100&width=100" },
];

export default function Inventario() {
  const [productos, setProductos] = useState(defaultProductos);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> Crear Producto
        </Button>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las categorías</SelectItem>
              <SelectItem value="electronica">Electrónica</SelectItem>
              <SelectItem value="ropa">Ropa</SelectItem>
              <SelectItem value="hogar">Hogar</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar Producto"
              className="pl-10 pr-4 py-2 w-64"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>
            <p className="text-gray-600">Disponibles: {producto.disponibles}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
