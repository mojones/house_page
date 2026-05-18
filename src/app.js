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
  groceries: { label: "Groceries", color: "#c95b55" },
  food: { label: "Food & drink", color: "#a05c2b" },
  walks: { label: "Walks & green space", color: "#348f6a" },
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
    name: "Letham Mains Primary School",
    category: "education",
    lat: 55.9523325,
    lng: -2.8062156,
    description: "A newer primary school serving the Letham Mains area on the western side of Haddington.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "compass-school",
    name: "The Compass School",
    category: "education",
    lat: 55.955304,
    lng: -2.7926537,
    description: "Independent primary school and nursery on West Road, close to the western side of town.",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "st-marys-primary",
    name: "St Mary's RC Primary School",
    category: "education",
    lat: 55.9526539,
    lng: -2.7823013,
    description: "Roman Catholic primary school beside Tynebank Road and Neilson Park.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
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
    id: "high-street-bus",
    name: "High Street bus stops",
    category: "transport",
    lat: 55.9553065,
    lng: -2.7770147,
    description: "Central High Street bus stops for local and regional services through Haddington.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
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
    id: "hospital",
    name: "East Lothian Community Hospital",
    category: "services",
    lat: 55.9574357,
    lng: -2.7979959,
    description: "Local community hospital on Alderston Road, reachable by bike from the town centre.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "medical",
    name: "Tyne Medical Practice",
    category: "services",
    lat: 55.9572,
    lng: -2.7971,
    description: "Town medical practice area near the community hospital and western residential neighbourhoods.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poldrate-arts",
    name: "Poldrate Arts & Crafts Centre",
    category: "services",
    lat: 55.9518455,
    lng: -2.7741657,
    description: "Community arts and crafts centre in the historic Poldrate Mill area, with classes and creative groups.",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "corn-exchange",
    name: "Haddington Corn Exchange",
    category: "services",
    lat: 55.9550292,
    lng: -2.7803204,
    description: "Restored community and performance venue on Court Street, used for shows, events and local gatherings.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sports-centre",
    name: "Aubigny Sports Centre and Swimming Pool",
    category: "exercise",
    lat: 55.9515779,
    lng: -2.7780579,
    description: "Leisure centre with swimming, gym and classes just south of the town centre near Mill Wynd.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "neilson-park",
    name: "Neilson Park",
    category: "exercise",
    lat: 55.9528779,
    lng: -2.7781875,
    description: "Large central park with open space, play areas and sports facilities close to the schools.",
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
    id: "football-pitches",
    name: "Neilson Park football pitches",
    category: "exercise",
    lat: 55.9522,
    lng: -2.7804,
    description: "Grass football pitches in Neilson Park, useful for informal play and local fixtures.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "skatepark",
    name: "Neilson Park Skatepark",
    category: "exercise",
    lat: 55.9532,
    lng: -2.7827,
    description: "Small outdoor skatepark beside Neilson Park, within an easy walk from Market Street.",
    image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rugby-club",
    name: "Haddington Rugby Football Club",
    category: "exercise",
    lat: 55.9517,
    lng: -2.7774,
    description: "Local rugby club at Neilson Park, with junior sport and community club facilities.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tesco",
    name: "Tesco Superstore",
    category: "groceries",
    lat: 55.9563789,
    lng: -2.7789869,
    description: "Large central grocery shop at Newton Port, useful for day-to-day food shopping without needing a car.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aldi",
    name: "Aldi Haddington",
    category: "groceries",
    lat: 55.9532,
    lng: -2.8068,
    description: "Discount supermarket on the west side of town, well placed for a cycle or combined school run.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "greggs",
    name: "Greggs",
    category: "groceries",
    lat: 55.9554305,
    lng: -2.7773148,
    description: "Bakery and takeaway food shop on Market Street, very close to the property.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "foraging-goat",
    name: "The Foraging Goat",
    category: "groceries",
    lat: 55.9553474,
    lng: -2.7766707,
    description: "Independent artisan larder and greengrocer on Haddington High Street, focused on local produce.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
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
    name: "The Waterside",
    category: "food",
    lat: 55.9546854,
    lng: -2.7709606,
    description: "Food and drink close to the River Tyne, handy for combining a meal with a short riverside walk.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "the-loft",
    name: "The Loft Café & Bakery",
    category: "food",
    lat: 55.9545261,
    lng: -2.7802073,
    description: "Popular café and bakery at Peffers Place, known for cakes, lunches and family-friendly daytime food.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ozys-kitchen",
    name: "Ozys Kitchen",
    category: "food",
    lat: 55.9555509,
    lng: -2.7792647,
    description: "Cafe and bistro on Court Street serving breakfast, lunch, coffee and casual family food.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "diggorys",
    name: "Mountain Coffee Haddington",
    category: "food",
    lat: 55.9553474,
    lng: -2.7766707,
    description: "Coffee shop at 28 High Street, Haddington EH41 3ES, on the town-centre High Street.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
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
    id: "lennoxlove",
    name: "Lennoxlove",
    category: "walks",
    lat: 55.9483678,
    lng: -2.7746428,
    description: "Quiet rural edge of Haddington around Lennoxlove Acredales, useful for longer loops south of town.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
];

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

const destinationGrid = document.querySelector("#destinationGrid");
const mapWrap = document.querySelector(".map-wrap");
const categorySelect = document.querySelector("#categorySelect");
const mapDetail = document.querySelector("#mapDetail");
const mapDetailTitle = document.querySelector("#mapDetailTitle");
const mapDetailToggle = document.querySelector("#mapDetailToggle");
const mapDetailBody = document.querySelector("#mapDetailBody");

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
  const activeLabel = state.activeMode === "walking" ? "Walking" : "Cycling";
  mapDetailTitle.textContent = destination.name;
  const walkingLabel = formatDistance(destination, "walking");
  const cyclingLabel = formatDistance(destination, "cycling");
  const routeNote = routeInfo
    ? `<span class="map-detail__route-note"><strong>${activeLabel} route:</strong> ${routeInfo.distanceKm} km · ${routeInfo.minutes} min. ${routeInfo.note ?? "Generated from route data."}</span>`
    : `<span class="map-detail__route-note">Showing an estimated ${state.activeMode} distance. Select again if route data is still loading.</span>`;

  mapDetailBody.innerHTML = `
    <span class="tag" style="--tag-color:${category.color}">${category.label}</span>
    <p class="map-detail__text">${destination.description}</p>
    <p class="map-detail__routes">
      <button class="map-detail__route" data-route-mode="walking" data-destination="${destination.id}" type="button">Walking: <strong>${walkingLabel}</strong></button>
      <button class="map-detail__route" data-route-mode="cycling" data-destination="${destination.id}" type="button">Cycling: <strong>${cyclingLabel}</strong></button>
    </p>
    <p class="map-detail__note">${routeNote}</p>
  `;
}

function renderFilters() {
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
      return `
        <button class="destination-list-item" data-destination="${destination.id}" type="button">
          <span class="destination-list-item__name">${destination.name}</span>
          <span class="destination-list-item__meta">${formatDistance(destination, state.activeMode)}</span>
        </button>
      `;
    })
    .join("");
}

function addMarkers() {
  destinations.forEach((destination) => {
    const marker = L.marker([destination.lat, destination.lng], { icon: markerIcon(destination) }).addTo(map);

    marker.on("click", () => selectDestination(destination.id));
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

function showOverlay() {
  mapDetail.hidden = false;
}

function hideOverlay() {
  mapDetail.hidden = true;
}

function setDetailExpanded(expanded) {
  mapDetailBody.hidden = !expanded;
  mapDetailToggle.textContent = expanded ? "Collapse" : "Expand";
  mapDetailToggle.setAttribute("aria-expanded", String(expanded));
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

async function selectDestination(id) {
  const destination = destinations.find((item) => item.id === id);
  if (!destination) return;

  state.selectedId = id;
  showOverlay();
  setDetailExpanded(true);
  await drawRoute(destination);

  if (isMobileLayout()) {
    requestAnimationFrame(() => {
      mapWrap?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function attachEvents() {
  categorySelect.addEventListener("change", (event) => {
    setCategory(event.target.value);
  });

  document.querySelector(".mode-toggle").addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;

    setRouteMode(button.dataset.mode);
    if (state.selectedId) selectDestination(state.selectedId);
  });

  destinationGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-destination]");
    if (!button) return;
    selectDestination(button.dataset.destination);
  });

  mapDetail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-route-mode][data-destination]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    setRouteMode(button.dataset.routeMode);
    selectDestination(button.dataset.destination);
  });

  mapDetailToggle.addEventListener("click", () => {
    const expanded = mapDetailBody.hidden;
    setDetailExpanded(expanded);
  });
}

renderFilters();
addMarkers();
renderDestinationBrowser();
setDetailExpanded(true);
hideOverlay();
attachEvents();

setTimeout(() => map.invalidateSize(), 120);
