# Contexto del proyecto

## Interfaz

Se reconstruirá en Next.js una experiencia de alquiler vacacional inspirada en Airbnb, con diseño mobile-first. La referencia de Home disponible muestra una navegación con búsqueda segmentada, categorías y tarjetas de alojamientos; la captura adicional documenta el pie de página. Las capturas de catálogo y detalle quedan pendientes y se usarán para ajustar esas vistas cuando estén disponibles.

### Home (`/`)

Presenta la búsqueda de alojamientos y permite descubrir opciones mediante categorías y una cuadrícula responsive. Cada alojamiento muestra una imagen, título, fechas, precio por noche y valoración. En móvil, la cuadrícula comienza en una columna y crece en escritorio. El pie de página agrupa enlaces de asistencia, anfitriones y producto, además de preferencias de idioma y moneda, enlaces legales y redes sociales.

Componentes principales: `SiteHeader` (logo, búsqueda y menú de usuario), `CategoryFilter`, `ListingGrid`, `ListingCard` y `SiteFooter`.

### Catálogo (`/catalog`)

Muestra resultados de búsqueda con el número de alojamientos y controles para ordenarlos por precio ascendente o descendente. Reutiliza las tarjetas de Home y acompaña la lista con un área de mapa; el mapa aparece junto a los resultados en escritorio y debajo en móvil.

Componentes principales: `CatalogHeader`, `ListingGrid`, `ListingCard`, `SortControl` y `MapPlaceholder`.

### Detalle de habitación (`/rooms/[id]`)

Presenta la información de un alojamiento seleccionado: galería navegable de fotos, título, ubicación y valoración, datos del anfitrión, servicios y una tarjeta de reserva con precio y control de huéspedes. Incluye navegación de regreso al catálogo.

Componentes principales: `RoomGallery`, `RoomHeader`, `HostInfo`, `AmenitiesGrid`, `BookingCard` y `BackToCatalogLink`.

## Usuario

La persona usuaria está buscando un alojamiento para un viaje. Quiere explorar opciones, filtrar y comparar resultados, revisar los detalles y servicios de una habitación y estimar una reserva según el número de huéspedes antes de continuar.
