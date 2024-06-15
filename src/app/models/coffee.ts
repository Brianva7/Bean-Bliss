export interface Coffee {
  id: string;
  name: string;
  brand: string;
  variety: string;
  price: number;
  description: string;
  image: string;
  stock: number; // Cantidad en inventario
  rating?: number; // Valoración promedio de los usuarios ??
  reviews?: string[]; // Comentarios de los usuarios ??
  category: string; // Categoría del producto
  createdAt: Date; // Fecha de creación
  updatedAt: Date; // Fecha de última actualización
  sku?: string; // Identificador único de inventario ??
  discount?: number; // Descuento aplicado ??
  isActive: boolean; // Estado del producto (activo, inactivo, etc.)
  supplier?: string; // Información del proveedor ??
  tags?: string[]; // Palabras clave para búsqueda y categorización ??
}
