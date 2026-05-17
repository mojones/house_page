import { orsRoutes } from "./orsRoutes.js";

const home = {
  name: "32 Market Street",
  lat: 55.9558022,
  lng: -2.7770874,
};

const categories = {
  education: { label: "Education", color: "#2f6f90" },
  transport: { label: "Transport", color: "#d9992a" },
  services: { label: "Public services", color: "#6d7f44" },
  exercise: { label: "Exercise", color: "#1f6b4b" },
  shopping: { label: "Shopping", color: "#c95b55" },
  food: { label: "Food & drink", color: "#a05c2b" },
  walks: { label: "Walks & green space", color: "#348f6a" },
  health: { label: "Health", color: "#7f5a9b" },
};

const destinations = [
  {
    id: "knox",
    name: "Knox Academy",
    category: "education",
    lat: 55.9529426,
    lng: -2.7872612,
    description: "The local secondary school for Haddington, set west of the town centre with sports fields nearby.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "haddington-primary",
    name: "Haddington Primary School",
    category: "education",
    lat: 55.9551,
    lng: -2.7901,
    description: "A central primary option close to Tynebank Road and the western approach to town.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "letham",
    name: "Letham Mains Primary",
    category: "education",
    lat: 55.9523325,
    lng: -2.8062156,
    description: "A newer primary school serving the Letham Mains area on the western side of Haddington.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bus",
    name: "Market Street bus stops",
    category: "transport",
    lat: 55.9558013,
    lng: -2.7783359,
    description: "Town-centre stops for East Coast Buses links towards Edinburgh, North Berwick, Dunbar and nearby villages.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ncn76",
    name: "National Cycle Route 76",
    category: "transport",
    lat: 55.9567,
    lng: -2.7864,
    description: "Signed cycling corridor west of town, connecting Haddington with Longniddry and the wider East Lothian coast network.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "railway-walk",
    name: "Longniddry railway path",
    category: "transport",
    lat: 55.9549,
    lng: -2.7969,
    description: "Traffic-light walking and cycling route following the old railway line towards Longniddry station.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "library",
    name: "John Gray Centre & Library",
    category: "services",
    lat: 55.9563,
    lng: -2.7795,
    description: "Haddington's library, archive and local history hub, useful for children’s sessions and rainy-day browsing.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "council",
    name: "John Muir House",
    category: "services",
    lat: 55.9551,
    lng: -2.7788,
    description: "East Lothian Council offices in the centre of Haddington, close to Court Street and Market Street.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sports-centre",
    name: "Aubigny Sports Centre",
    category: "exercise",
    lat: 55.9515779,
    lng: -2.7780579,
    description: "Leisure centre with swimming, gym and classes just south of the town centre near Mill Wynd.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "skatepark",
    name: "Neilson Park skatepark",
    category: "exercise",
    lat: 55.9532,
    lng: -2.7827,
    description: "Open parkland, play space and skate facilities within an easy family walk from Market Street.",
    image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "golf",
    name: "Haddington Golf Club",
    category: "exercise",
    lat: 55.9557,
    lng: -2.7456,
    description: "Established parkland golf course to the east of town beside the Amisfield approach.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tesco",
    name: "Tesco Superstore",
    category: "shopping",
    lat: 55.9563789,
    lng: -2.7789869,
    description: "Large central grocery shop at Newton Port, useful for day-to-day food shopping without needing a car.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aldi",
    name: "Aldi Haddington",
    category: "shopping",
    lat: 55.9532,
    lng: -2.8068,
    description: "Discount supermarket on the west side of town, well placed for a cycle or combined school run.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "high-street",
    name: "High Street shops",
    category: "shopping",
    lat: 55.9555,
    lng: -2.7756,
    description: "Independent shops, everyday errands and town-centre services are clustered a few minutes away.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "falko",
    name: "Falko Café & Restaurant",
    category: "food",
    lat: 55.9554669,
    lng: -2.775385,
    description: "Well-known High Street café and bakery stop for coffee, lunch and family treats.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "waterside",
    name: "Waterside Bistro",
    category: "food",
    lat: 55.9546,
    lng: -2.7723,
    description: "Food and drink close to the River Tyne, handy for combining a meal with a short riverside walk.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tyne-walk",
    name: "River Tyne walks",
    category: "walks",
    lat: 55.9548,
    lng: -2.7699,
    description: "Gentle riverside paths from Nungate Bridge, good for dog walks, scooters and short after-school loops.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "amisfield",
    name: "Amisfield Walled Garden",
    category: "walks",
    lat: 55.9584473,
    lng: -2.7493363,
    description: "Community garden and destination walk east of town, especially appealing for weekend family outings.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "st-marys",
    name: "St Mary's Pleasance",
    category: "walks",
    lat: 55.9544,
    lng: -2.7727,
    description: "Green space around the historic church and riverside, a calm pocket close to the High Street.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "hospital",
    name: "East Lothian Community Hospital",
    category: "health",
    lat: 55.9574357,
    lng: -2.7979959,
    description: "Local community hospital on Alderston Road, reachable by bike from the town centre.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "medical",
    name: "Tyne Medical Practice",
    category: "health",
    lat: 55.9572,
    lng: -2.7971,
    description: "Town medical practice area near the community hospital and western residential neighbourhoods.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
  },
];

const fallbackRoutes = Object.fromEntries(
  Object.entries({
    knox: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.95565, -2.7852],
        [55.9546, -2.7874],
        [55.9529426, -2.7872612],
      ],
      note: "Curated route via town-centre pavements and Meadowpark, avoiding trunk-road routing.",
    },
    "haddington-primary": {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.95525, -2.7892],
        [55.9551, -2.7901],
      ],
      note: "Curated route via the westbound town route and Tynebank Road area.",
    },
    letham: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.95495, -2.7922],
        [55.95405, -2.7984],
        [55.95325, -2.8031],
        [55.9523325, -2.8062156],
      ],
      note: "Curated route via Haddington town streets and the western approach, avoiding the A1.",
    },
    bus: {
      route: [
        [home.lat, home.lng],
        [55.95584, -2.77755],
        [55.9558013, -2.7783359],
      ],
      note: "Curated direct route across Market Street, not the vehicle one-way system.",
    },
    ncn76: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.95605, -2.7838],
        [55.9567, -2.7864],
      ],
      note: "Curated route to the west-side cycle corridor, avoiding vehicle-only detours.",
    },
    "railway-walk": {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.9554, -2.7916],
        [55.9549, -2.7969],
      ],
      note: "Curated route towards the old railway path and Longniddry walking/cycling corridor.",
    },
    library: {
      route: [
        [home.lat, home.lng],
        [55.956, -2.7781],
        [55.9563, -2.7795],
      ],
      note: "Curated short town-centre walking route.",
    },
    council: {
      route: [
        [home.lat, home.lng],
        [55.95555, -2.7779],
        [55.9551, -2.7788],
      ],
      note: "Curated short town-centre walking route.",
    },
    "sports-centre": {
      route: [
        [home.lat, home.lng],
        [55.95525, -2.7762],
        [55.95415, -2.7768],
        [55.95255, -2.7775],
        [55.9515779, -2.7780579],
      ],
      note: "Curated route via central pavements towards Mill Wynd and the sports centre.",
    },
    skatepark: {
      route: [
        [home.lat, home.lng],
        [55.95555, -2.7792],
        [55.9548, -2.7812],
        [55.9532, -2.7827],
      ],
      note: "Curated route through the town-centre park approach, avoiding vehicle one-way detours.",
    },
    golf: {
      route: [
        [home.lat, home.lng],
        [55.9554, -2.7732],
        [55.9552, -2.7694],
        [55.956, -2.762],
        [55.9562, -2.7545],
        [55.9557, -2.7456],
      ],
      note: "Curated eastbound route via the Amisfield approach rather than the A1.",
    },
    tesco: {
      route: [
        [home.lat, home.lng],
        [55.956, -2.7781],
        [55.9563789, -2.7789869],
      ],
      note: "Curated short town-centre walking route.",
    },
    aldi: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.95495, -2.7922],
        [55.95405, -2.7984],
        [55.95325, -2.8031],
        [55.9532, -2.8068],
      ],
      note: "Curated route via Haddington town streets and the western approach, avoiding the A1.",
    },
    "high-street": {
      route: [
        [home.lat, home.lng],
        [55.95565, -2.7764],
        [55.9555, -2.7756],
      ],
      note: "Curated short walk along the town-centre shopping streets.",
    },
    falko: {
      route: [
        [home.lat, home.lng],
        [55.95565, -2.7762],
        [55.9554669, -2.775385],
      ],
      note: "Curated short walk along High Street.",
    },
    waterside: {
      route: [
        [home.lat, home.lng],
        [55.95535, -2.775],
        [55.9549, -2.7734],
        [55.9546, -2.7723],
      ],
      note: "Curated route towards the river and Waterside area.",
    },
    "tyne-walk": {
      route: [
        [home.lat, home.lng],
        [55.95535, -2.775],
        [55.95495, -2.7726],
        [55.9548, -2.7699],
      ],
      note: "Curated route onto the River Tyne walking corridor.",
    },
    amisfield: {
      route: [
        [home.lat, home.lng],
        [55.9554, -2.7732],
        [55.9552, -2.7694],
        [55.956, -2.762],
        [55.9571, -2.7546],
        [55.9584473, -2.7493363],
      ],
      note: "Curated route east through Nungate towards Amisfield, avoiding trunk-road routing.",
    },
    "st-marys": {
      route: [
        [home.lat, home.lng],
        [55.95535, -2.775],
        [55.9548, -2.7735],
        [55.9544, -2.7727],
      ],
      note: "Curated short route to the church green and riverside area.",
    },
    hospital: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.9561, -2.792],
        [55.9574357, -2.7979959],
      ],
      note: "Curated route via Haddington's west-side street network, avoiding the A1.",
    },
    medical: {
      route: [
        [home.lat, home.lng],
        [55.95595, -2.7807],
        [55.9557, -2.7864],
        [55.9561, -2.792],
        [55.9572, -2.7971],
      ],
      note: "Curated route via Haddington's west-side street network, avoiding the A1.",
    },
  }).map(([id, route]) => [
    id,
    {
      walking: route.route,
      cycling: route.route,
      note: route.note,
    },
  ]),
);

const manualRoutes = orsRoutes;

const state = {
  activeCategory: "all",
  activeMode: "walking",
  selectedId: null,
  routeLayer: null,
  markers: new Map(),
};

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true,
}).setView([home.lat, home.lng], 14);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
}).addTo(map);

const homeIcon = L.divIcon({
  className: "",
  html: `<span class="home-marker">32</span>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});

L.marker([home.lat, home.lng], { icon: homeIcon })
  .addTo(map)
  .bindPopup("<strong>32 Market Street</strong><br>Starting point for all routes.");

const filterContainer = document.querySelector("#categoryFilters");
const destinationGrid = document.querySelector("#destinationGrid");
const detailCard = document.querySelector("#detailCard");
const categorySelect = document.querySelector("#categorySelect");
const destinationSelect = document.querySelector("#destinationSelect");
const panelDestinationSelect = document.querySelector("#panelDestinationSelect");
const panelDestinationList = document.querySelector("#panelDestinationList");
const destinationSelects = [destinationSelect, panelDestinationSelect].filter(Boolean);

function isMobileLayout() {
  return window.matchMedia("(max-width: 640px)").matches;
}

function metresBetween(a, b) {
  const earthRadius = 6371000;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadius * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function estimate(destination, mode = state.activeMode) {
  const meta = routeMetaFor(destination, mode);
  if (meta) {
    return estimateFromRouteMeta(meta);
  }

  const manualRoute = manualRouteFor(destination, mode);
  if (manualRoute) {
    return estimateFromMetres(routeDistanceMetres(manualRoute), mode);
  }

  const straight = metresBetween(home, destination);
  const routeFactor = mode === "walking" ? 1.24 : 1.16;
  return estimateFromMetres(straight * routeFactor, mode);
}

function estimateFromMetres(metres, mode) {
  const speed = mode === "walking" ? 80 : 230;
  return {
    km: Math.max(0.1, metres / 1000),
    minutes: Math.max(1, Math.round(metres / speed)),
  };
}

function estimateFromRouteMeta(meta) {
  return {
    km: Math.max(0.1, meta.distance / 1000),
    minutes: Math.max(1, Math.round(meta.duration / 60)),
  };
}

function manualRouteFor(destination, mode = state.activeMode) {
  return manualRoutes[destination.id]?.[mode] ?? null;
}

function routeMetaFor(destination, mode = state.activeMode) {
  return manualRoutes[destination.id]?.[`${mode}Meta`] ?? null;
}

function routeNoteFor(destination) {
  const note = manualRoutes[destination.id]?.note;
  if (!note || note.startsWith("Generated from OpenRouteService")) {
    return "Static road-following route from pedestrian/cycling map data.";
  }
  return note;
}

function routeDistanceMetres(coordinates) {
  return coordinates.slice(1).reduce((total, coordinate, index) => {
    const previous = coordinates[index];
    return total + metresBetween({ lat: previous[0], lng: previous[1] }, { lat: coordinate[0], lng: coordinate[1] });
  }, 0);
}

function formatDistance(destination, mode) {
  const value = estimate(destination, mode);
  return `${value.km.toFixed(value.km < 1 ? 1 : 1)} km · ${value.minutes} min`;
}

function markerIcon(destination) {
  const category = categories[destination.category];
  return L.divIcon({
    className: "",
    html: `<span class="place-marker" style="--marker:${category.color}">${category.label.slice(0, 1)}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function popupHtml(destination) {
  const category = categories[destination.category];
  return `
    <article class="popup-card">
      <img src="${destination.image}" alt="" loading="lazy">
      <div class="popup-card__body">
        <span class="tag" style="--tag-color:${category.color}">${category.label}</span>
        <h3>${destination.name}</h3>
        <div class="distance-row">
          <button class="distance-pill distance-pill--button" data-route-mode="walking" data-destination="${destination.id}" type="button">
            <strong>${formatDistance(destination, "walking")}</strong><span>show walking route</span>
          </button>
          <button class="distance-pill distance-pill--button" data-route-mode="cycling" data-destination="${destination.id}" type="button">
            <strong>${formatDistance(destination, "cycling")}</strong><span>show cycling route</span>
          </button>
        </div>
        <p>${destination.description}</p>
      </div>
    </article>
  `;
}

function renderDetail(destination, routeInfo) {
  const category = categories[destination.category];
  const routeNote = routeInfo
    ? `<p><strong>${state.activeMode === "walking" ? "Walking" : "Cycling"} route:</strong> ${routeInfo.distanceKm} km · ${routeInfo.minutes} min. ${routeInfo.note ?? "Generated from route data."}</p>`
    : `<p>Showing an estimated ${state.activeMode} distance. Select again if route data is still loading.</p>`;

  detailCard.innerHTML = `
    <img src="${destination.image}" alt="" loading="lazy">
    <div class="detail-card__body">
      <span class="tag" style="--tag-color:${category.color}">${category.label}</span>
      <h3>${destination.name}</h3>
      <div class="distance-row">
        <button class="distance-pill distance-pill--button" data-route-mode="walking" data-destination="${destination.id}" type="button">
          <strong>${formatDistance(destination, "walking")}</strong><span>show walking route</span>
        </button>
        <button class="distance-pill distance-pill--button" data-route-mode="cycling" data-destination="${destination.id}" type="button">
          <strong>${formatDistance(destination, "cycling")}</strong><span>show cycling route</span>
        </button>
      </div>
      <p>${destination.description}</p>
      ${routeNote}
    </div>
  `;
}

function renderFilters() {
  const buttons = [
    `<button class="filter-button is-active" data-category="all">All</button>`,
    ...Object.entries(categories).map(
      ([id, category]) => `<button class="filter-button" data-category="${id}">${category.label}</button>`,
    ),
  ];
  filterContainer.innerHTML = buttons.join("");

  categorySelect.innerHTML = [
    `<option value="all">All categories</option>`,
    ...Object.entries(categories).map(([id, category]) => `<option value="${id}">${category.label}</option>`),
  ].join("");
}

function visibleDestinations() {
  return destinations.filter(
    (destination) => state.activeCategory === "all" || destination.category === state.activeCategory,
  );
}

function renderDestinationBrowser() {
  const visible = visibleDestinations();

  destinationGrid.innerHTML = visible
    .map((destination) => {
      const category = categories[destination.category];
      return `
        <button class="destination-card" style="--card-image:url('${destination.image}')" data-destination="${destination.id}">
          <span class="tag" style="--tag-color:${category.color}">${category.label}</span>
          <h3>${destination.name}</h3>
          <p>${formatDistance(destination, state.activeMode)}</p>
        </button>
      `;
    })
    .join("");

  const selectHtml = [
    `<option value="">Select a destination</option>`,
    ...visible.map((destination) => {
      return `<option value="${destination.id}">${destination.name} (${formatDistance(destination, state.activeMode)})</option>`;
    }),
  ].join("");

  destinationSelects.forEach((select) => {
    select.innerHTML = selectHtml;
    select.value = visible.some((destination) => destination.id === state.selectedId) ? state.selectedId : "";
  });

  const categoryIsSelected = state.activeCategory !== "all";
  panelDestinationSelect.closest(".mobile-select").hidden = categoryIsSelected;
  panelDestinationList.hidden = !categoryIsSelected;
  panelDestinationList.innerHTML = categoryIsSelected
    ? visible
        .map(
          (destination) => `
            <button class="mobile-destination-button${destination.id === state.selectedId ? " is-active" : ""}" data-destination="${destination.id}" type="button">
              <span>${destination.name}</span>
              <strong>${formatDistance(destination, state.activeMode)}</strong>
            </button>
          `,
        )
        .join("")
    : "";
}

function addMarkers() {
  destinations.forEach((destination) => {
    const marker = L.marker([destination.lat, destination.lng], { icon: markerIcon(destination) })
      .addTo(map)
      .bindPopup(popupHtml(destination));

    marker.on("click", () => selectDestination(destination.id, !isMobileLayout()));
    state.markers.set(destination.id, marker);
  });
}

function filterMarkers() {
  destinations.forEach((destination) => {
    const marker = state.markers.get(destination.id);
    const shouldShow = state.activeCategory === "all" || state.activeCategory === destination.category;

    if (shouldShow && !map.hasLayer(marker)) marker.addTo(map);
    if (!shouldShow && map.hasLayer(marker)) marker.remove();
  });
}

function clearRoute() {
  if (state.routeLayer) {
    state.routeLayer.remove();
    state.routeLayer = null;
  }
}

function setRouteMode(mode) {
  state.activeMode = mode;
  document.querySelectorAll(".mode-toggle__button").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.mode === mode);
  });
  renderDestinationBrowser();
}

function setCategory(category) {
  state.activeCategory = category;
  categorySelect.value = category;
  document.querySelectorAll(".filter-button").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.category === category);
  });
  filterMarkers();
  renderDestinationBrowser();
}

async function drawRoute(destination) {
  clearRoute();
  renderDetail(destination);

  const manualRoute = manualRouteFor(destination);
  if (manualRoute) {
    const color = state.activeMode === "walking" ? "#1f6b4b" : "#2f6f90";
    state.routeLayer = L.polyline(manualRoute, {
      color,
      weight: 6,
      opacity: 0.82,
      lineCap: "round",
      dashArray: state.activeMode === "cycling" ? "1 10" : null,
    }).addTo(map);

    const routeEstimate = estimate(destination, state.activeMode);
    renderDetail(destination, {
      distanceKm: routeEstimate.km.toFixed(1),
      minutes: routeEstimate.minutes,
      note: routeNoteFor(destination),
    });

    const group = L.featureGroup([state.routeLayer, state.markers.get(destination.id)]);
    map.fitBounds(group.getBounds().pad(0.22), { animate: true });
    return;
  }

  const bounds = L.latLngBounds([
    [home.lat, home.lng],
    [destination.lat, destination.lng],
  ]);
  map.fitBounds(bounds.pad(0.35), { animate: true });
}

async function selectDestination(id, openPopup = false) {
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return;

  state.selectedId = id;
  await drawRoute(destination);

  if (openPopup && !isMobileLayout()) {
    state.markers.get(id).openPopup();
  } else {
    state.markers.get(id).closePopup();
  }
}

function attachEvents() {
  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    setCategory(button.dataset.category);
  });

  categorySelect.addEventListener("change", (event) => {
    setCategory(event.target.value);
  });

  document.querySelector(".mode-toggle").addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;

    setRouteMode(button.dataset.mode);
    if (state.selectedId) selectDestination(state.selectedId, !isMobileLayout());
  });

  destinationGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-destination]");
    if (!button) return;
    selectDestination(button.dataset.destination);
  });

  destinationSelects.forEach((select) => {
    select.addEventListener("change", (event) => {
      if (!event.target.value) return;
      selectDestination(event.target.value);
    });
  });

  panelDestinationList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-destination]");
    if (!button) return;
    selectDestination(button.dataset.destination);
  });

  detailCard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-route-mode][data-destination]");
    if (!button) return;

    setRouteMode(button.dataset.routeMode);
    selectDestination(button.dataset.destination, !isMobileLayout());
  });

  map.getContainer().addEventListener("click", (event) => {
    const button = event.target.closest("[data-route-mode][data-destination]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    setRouteMode(button.dataset.routeMode);
    selectDestination(button.dataset.destination, !isMobileLayout());
  });
}

renderFilters();
addMarkers();
renderDestinationBrowser();
attachEvents();

setTimeout(() => map.invalidateSize(), 120);
