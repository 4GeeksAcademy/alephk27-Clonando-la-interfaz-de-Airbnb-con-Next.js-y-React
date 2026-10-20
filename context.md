# Contexto del proyecto

## Mini-brief

### Qué vamos a construir

Una interfaz de búsqueda de alojamientos vacacionales inspirada en Airbnb,
en español y pensada primero para teléfonos móviles. Su objetivo es ayudar
a una persona a descubrir opciones, compararlas y consultar un alojamiento
antes de decidir dónde quedarse. La experiencia se organiza en tres páginas
conectadas, con tarjetas y controles visualmente consistentes.

### Para quién y para qué

El usuario es una persona que está organizando un viaje y necesita encontrar
un alojamiento acorde con su destino, presupuesto y número de acompañantes.
Puede llegar sin una opción concreta: primero explora, después reduce las
alternativas y finalmente revisa fotos, servicios y precio para tomar una
decisión. La interfaz debe permitirle avanzar y volver a los resultados
sin perderse ni tener que escribir direcciones en el navegador.

### Inicio: descubrir alojamientos

La página de inicio (`/`) presenta una barra superior con la identidad del
sitio, un buscador y controles de usuario. Debajo aparece una fila de
categorías, como Playa o Cabañas, y una cuadrícula de alojamientos. Cada
tarjeta muestra una foto, título, ubicación, precio por noche, valoración
y un control para marcarla como favorita.

El buscador filtra las tarjetas mientras la persona escribe y las categorías
permiten acotar la exploración. Al entrar se muestra un indicador de carga.
Un enlace permite ver todos los alojamientos en el catálogo y cada tarjeta
abre su detalle. Completan la página las secciones de servicios e inspiración,
el pie de página y la navegación inferior móvil.

Sus componentes principales son la barra de búsqueda, el selector de
categorías, la cuadrícula, la tarjeta de alojamiento compartida y las
secciones de descubrimiento y navegación.

### Catálogo: comparar opciones

El catálogo (`/catalog`) mantiene visible la barra superior al desplazarse
para que la persona pueda seguir buscando y cambiando de categoría.
La cabecera de resultados indica cuántos alojamientos coinciden y ofrece
ordenarlos por precio, de menor a mayor o de mayor a menor.

Los resultados reutilizan las mismas tarjetas de inicio para facilitar
la comparación y el acceso al detalle. Un área gris identificada como
"Mapa" acompaña los resultados: aparece debajo en móvil y a la derecha
en escritorio. Si ningún alojamiento coincide con los filtros, se muestra
un mensaje claro.

Los componentes principales son la navegación compartida, la cabecera de
resultados con ordenación, las tarjetas y el área de mapa.

### Detalle: conocer el alojamiento

La página de detalle (`/rooms/[id]`) muestra el alojamiento seleccionado
después de un breve estado de carga. Incluye su título, ubicación,
valoración y número de reseñas; una galería con controles para ver la foto
anterior o siguiente; información del anfitrión; una descripción y una
cuadrícula de servicios.

La tarjeta de reserva presenta el precio por noche, un contador de huéspedes
limitado a la capacidad del alojamiento y el botón Reservar. En móvil,
las secciones se apilan; en escritorio, la reserva ocupa una columna lateral.
Un enlace visible permite volver al catálogo.

Los componentes principales son el estado de carga, la cabecera del
alojamiento, la galería, el resumen del anfitrión, los servicios y la tarjeta
de reserva.

### Alcance y criterio de diseño

La interfaz debe ser legible y utilizable a 375 píxeles de ancho, sin
desbordamientos horizontales de la página. Las listas pasan de una columna
en móvil a varias en pantallas grandes. La navegación entre páginas debe
ser fluida y los estados de carga y de resultados vacíos deben ser visibles.

Este proyecto es un prototipo de interfaz con datos de demostración:
no procesa reservas, pagos ni cuentas reales. El mapa interactivo y la
selección de fechas quedan fuera del alcance base.

## Referencias visuales y especificaciones de componentes

Se reconstruirá en Next.js una experiencia de alquiler vacacional inspirada en Airbnb, con diseño mobile-first y una interfaz en español. `home-375.png` es la referencia móvil de Home y `detalle_habitacion-375.png` la de Detalle. Ambas nuevas capturas tienen 750 px de ancho de imagen, correspondiente a 375 CSS px con DPR 2, según la configuración indicada al tomarlas. `Airbnb.png` y `footer.png` son referencias de escritorio. La referencia correcta de Catálogo es [catalogo2-375.png](./catalogo2-375.png), ubicada en la raíz del repositorio; reemplaza a `catalogo-375.png`, que mostraba el feed de Home.

### Home (`/`)

La captura muestra una barra de búsqueda compacta, una fila desplazable de categorías, secciones de alojamientos con tarjetas en carruseles horizontales, una sección de servicios e inspiración, un pie de página y una barra de navegación inferior fija. Las tarjetas muestran foto, favorito, título, fechas, precio en MXN y valoración; algunas incluyen el distintivo de favorito entre huéspedes.

Especificación observada y relaciones: `HomeSearchBar` (`value`, `onValueChange`) aparece primero y contiene la búsqueda; `CategoryRail` (`categories`, `activeCategory`, `onCategoryChange`) va debajo; cada `DestinationSection` (`title`, `listings`) contiene un `ListingCarousel` (`listings`), que presenta varias `ListingCard` (`listing`, `href`) y permite descubrir la siguiente tarjeta. Después se ubican `ServicesSection` (`services`), `InspirationSection` (`tabs`, `destinations`) y `SiteFooter` (`linkGroups`). `MobileTabBar` (`activeTab`) queda fija en el borde inferior.

La captura muestra carruseles, pero el requisito funcional de Home pide una cuadrícula responsive de una columna en móvil y varias en escritorio. Se conservarán el estilo de las tarjetas y las secciones de descubrimiento de la referencia, dando prioridad a la cuadrícula exigida al implementar los alojamientos.

### Catálogo (`/catalog`)

La captura [catalogo2-375.png](./catalogo2-375.png) muestra resultados de alojamientos en Monterrey: una cabecera compacta con volver, resumen de búsqueda y filtros; controles de precio y tipo de lugar; y una lista vertical de tarjetas grandes en una sola columna. Cada tarjeta contiene foto, favorito, posibles distintivos, título, valoración, información de la estancia y precio. También se observa navegación inferior con Explorar, Favoritos e Iniciar sesión.

Especificación derivada de la captura:

| Componente propuesto | Props | Relación de layout |
| --- | --- | --- |
| `CatalogSearchHeader` | `destination`, `searchSummary`, `onBack`, `onOpenFilters` | Cabecera superior: volver a la izquierda, resumen de búsqueda centrado y filtros a la derecha. |
| `CatalogFilterBar` | `priceLabel`, `placeTypeLabel`, `onPriceChange`, `onPlaceTypeChange` | Fila compacta de controles debajo del resumen de búsqueda. |
| `CatalogListingList` | `listings` | Lista vertical de una columna; cada resultado utiliza la tarjeta de alojamiento compartida. |
| `ListingCard` | `listing`, `isSaved`, `onToggleSaved` | Foto sobre el texto; favorito y distintivo superpuestos; título y valoración en la fila de información, seguidos por detalles y precio. |
| `MobileTabBar` | `activeTab` | Navegación inferior superpuesta a la lista, con espacio de contenido suficiente para no ocultar el último resultado. |

Adaptación al enunciado: la implementación reutiliza `HomeSearchBar` y `CategoryRail` para mantener la navegación de Home solicitada. `CatalogResultsHeader` añade el número de resultados y la ordenación por precio, y el mapa placeholder se coloca debajo de las tarjetas en móvil y a la derecha en escritorio. Estos requisitos se mantienen aunque no sean visibles en esta captura. La especificación se documentó al revisar la entrega, después de implementar el Catálogo; no constituye evidencia de que se hubiera generado antes de programar esa vista.

### Detalle de habitación (`/rooms/[id]`)

La captura muestra una página larga de alojamiento: galería con controles superpuestos; título, ubicación, capacidad, valoración y distintivos; resumen del anfitrión; bloque de precio y reserva; descripción; habitaciones; servicios; ubicación y mapa; calendario; reseñas; perfil e información del anfitrión; políticas, breadcrumb, opciones cercanas y footer.

Especificación observada y relaciones: `RoomGallery` (`photos`, `currentPhotoIndex`, `onPrevious`, `onNext`, `onBack`, `onShare`, `isSaved`, `onToggleSaved`) encabeza la página y superpone navegación, compartir, favorito e índice sobre la foto. Debajo, `RoomHeader` (`title`, `propertyType`, `location`, `guestCount`, `bedroomCount`, `bedCount`, `bathroomCount`, `rating`, `reviewCount`, `badges`) presenta los datos principales; `HostSummary` (`host`) precede a `BookingPanel` (`price`, `originalPrice`, `currency`, `checkIn`, `checkOut`, `cancellationLabel`, `onReserve`). Después siguen `RoomDescription` (`description`), `SleepingArrangements` (`bedrooms`), `AmenitiesSection` (`amenities`, `totalAmenities`), `LocationSection` (`location`, `mapImage`), `StayCalendar` (`month`, `selectedDates`, `onDateChange`), `ReviewsSection` (`rating`, `reviewCount`, `highlights`, `reviews`), `HostProfile` (`host`), `HouseRules` (`rules`), `ReportListingLink`, `LocationBreadcrumb` (`items`), `RelatedPlaces` (`places`) y `SiteFooter` (`linkGroups`).

La captura incluye calendario y mapa visual; las instrucciones consideran opcional la funcionalidad de selección de fechas y el mapa real, así que primero se implementarán las secciones requeridas con un calendario/mapa no interactivo si hace falta.

## Correspondencia con la implementación

Las especificaciones anteriores describen las referencias visuales, no una lista
de funcionalidades adicionales obligatorias. La implementación prioriza la
rúbrica y utiliza los siguientes componentes:

| Vista | Componentes y props principales | Relación de layout |
| --- | --- | --- |
| Home | `HomeBrowser`, `HomeSearchBar` (`disabled`, `value`, `onValueChange`), `CategoryRail` (`disabled`, `activeCategory`, `onSelect`), `ListingGrid` (`listings`, `isLoading`, `hasFilters`), `ListingCard` (`listing`) | Cabecera sticky, cuadrícula de una columna móvil y varias en escritorio; servicios, inspiración, footer y navegación móvil al final. |
| Catálogo | `CatalogBrowser`, `HomeSearchBar`, `CategoryRail`, `CatalogResultsHeader` (`count`, `order`, `onOrderChange`), `ListingCard` (`listing`) | Misma navegación sticky; tarjetas verticales como en la referencia móvil, resultados y mapa placeholder debajo en móvil, lado a lado desde `lg` según el enunciado. |
| Detalle | `RoomRoute` (`params`), `RoomDetails` (`id`), `RoomLoadingState`, `RoomGallery` (`title`, `photos`), `RoomHostInfo` (`host`), `RoomAmenities` (`amenities`), `RoomBookingCard` (`pricePerNight`, `maxGuests`) | Volver al catálogo, título y valoración, galería, anfitrión, descripción, servicios y reserva; reserva en columna lateral desde `lg`. |

La búsqueda y categoría de Home, la ordenación del catálogo, la galería y el
contador de huéspedes usan `useState`. Home y Detalle simulan la carga con
`useEffect` y temporizadores con limpieza. Los datos de anfitrión, servicios,
capacidad y fotos placeholder son demostrativos; el botón Reservar no envía
reservas reales. Mapa interactivo y selección de fechas son retos opcionales
no implementados.

### Evidencias de revisión

- El usuario confirmó el 20 de octubre de 2026 que comprobó la visualización
  a 375 CSS px usando Google Chrome. Esta es una validación manual comunicada
  por el usuario, no una prueba de navegador ejecutada por el agente.
- La captura correcta de resultados del Catálogo está disponible como
  [catalogo2-375.png](./catalogo2-375.png); se revisó y se documentaron sus
  componentes, props y relaciones de layout en la sección correspondiente.
- La configuración actual acredita las tecnologías utilizadas, pero no demuestra
  por sí sola el procedimiento original de creación del proyecto. La documentación
  retrospectiva tampoco acredita el orden temporal del flujo de visión.
