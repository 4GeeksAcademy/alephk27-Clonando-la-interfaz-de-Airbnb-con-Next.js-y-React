# Contexto del proyecto

## Interfaz

Se reconstruirá en Next.js una experiencia de alquiler vacacional inspirada en Airbnb, con diseño mobile-first y una interfaz en español. `home-375.png` es la referencia móvil de Home y `detalle_habitacion-375.png` la de Detalle. Ambas nuevas capturas tienen 750 px de ancho de imagen, correspondiente a 375 CSS px con DPR 2, según la configuración indicada al tomarlas. `Airbnb.png` y `footer.png` son referencias de escritorio. `catalogo-375.png` está disponible, pero muestra el feed de Home y no una página de resultados; la referencia móvil correcta de Catálogo sigue pendiente.

### Home (`/`)

La captura muestra una barra de búsqueda compacta, una fila desplazable de categorías, secciones de alojamientos con tarjetas en carruseles horizontales, una sección de servicios e inspiración, un pie de página y una barra de navegación inferior fija. Las tarjetas muestran foto, favorito, título, fechas, precio en MXN y valoración; algunas incluyen el distintivo de favorito entre huéspedes.

Especificación observada y relaciones: `HomeSearchBar` (`value`, `onValueChange`) aparece primero y contiene la búsqueda; `CategoryRail` (`categories`, `activeCategory`, `onCategoryChange`) va debajo; cada `DestinationSection` (`title`, `listings`) contiene un `ListingCarousel` (`listings`), que presenta varias `ListingCard` (`listing`, `href`) y permite descubrir la siguiente tarjeta. Después se ubican `ServicesSection` (`services`), `InspirationSection` (`tabs`, `destinations`) y `SiteFooter` (`linkGroups`). `MobileTabBar` (`activeTab`) queda fija en el borde inferior.

La captura muestra carruseles, pero el requisito funcional de Home pide una cuadrícula responsive de una columna en móvil y varias en escritorio. Se conservarán el estilo de las tarjetas y las secciones de descubrimiento de la referencia, dando prioridad a la cuadrícula exigida al implementar los alojamientos.

### Catálogo (`/catalog`)

La captura `catalogo-375.png` muestra categorías, secciones de alojamientos en carruseles, inspiración y footer, sin cabecera de resultados, orden por precio ni mapa. Por ello parece una segunda captura de Home y no permite inferir el layout del Catálogo. Hasta recibir la captura correcta, se conserva solo la especificación funcional provisional de las instrucciones: mostrar número de resultados, ordenar por precio y reutilizar las tarjetas de Home junto a un placeholder de mapa.

Relaciones: `CatalogHeader` (`resultCount`) contiene `SortControl` (`sortOrder`, `onSortChange`); debajo, `ListingGrid` (`listings`) contiene las tarjetas reutilizadas y comparte el área de contenido con `MapPlaceholder`.

### Detalle de habitación (`/rooms/[id]`)

La captura muestra una página larga de alojamiento: galería con controles superpuestos; título, ubicación, capacidad, valoración y distintivos; resumen del anfitrión; bloque de precio y reserva; descripción; habitaciones; servicios; ubicación y mapa; calendario; reseñas; perfil e información del anfitrión; políticas, breadcrumb, opciones cercanas y footer.

Especificación observada y relaciones: `RoomGallery` (`photos`, `currentPhotoIndex`, `onPrevious`, `onNext`, `onBack`, `onShare`, `isSaved`, `onToggleSaved`) encabeza la página y superpone navegación, compartir, favorito e índice sobre la foto. Debajo, `RoomHeader` (`title`, `propertyType`, `location`, `guestCount`, `bedroomCount`, `bedCount`, `bathroomCount`, `rating`, `reviewCount`, `badges`) presenta los datos principales; `HostSummary` (`host`) precede a `BookingPanel` (`price`, `originalPrice`, `currency`, `checkIn`, `checkOut`, `cancellationLabel`, `onReserve`). Después siguen `RoomDescription` (`description`), `SleepingArrangements` (`bedrooms`), `AmenitiesSection` (`amenities`, `totalAmenities`), `LocationSection` (`location`, `mapImage`), `StayCalendar` (`month`, `selectedDates`, `onDateChange`), `ReviewsSection` (`rating`, `reviewCount`, `highlights`, `reviews`), `HostProfile` (`host`), `HouseRules` (`rules`), `ReportListingLink`, `LocationBreadcrumb` (`items`), `RelatedPlaces` (`places`) y `SiteFooter` (`linkGroups`).

La captura incluye calendario y mapa visual; las instrucciones consideran opcional la funcionalidad de selección de fechas y el mapa real, así que primero se implementarán las secciones requeridas con un calendario/mapa no interactivo si hace falta.

## Usuario

La persona usuaria está buscando un alojamiento para un viaje. Quiere explorar opciones, filtrar y comparar resultados, revisar los detalles y servicios de una habitación y estimar una reserva según el número de huéspedes antes de continuar.
