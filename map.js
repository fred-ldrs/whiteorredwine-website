// ── Europe Wine Map ──────────────────────────────────────────────────────────
(function () {
    'use strict';

    // Fixed viewBox dimensions
    const VW = 860, VH = 620;

    // ISO 3166-1 numeric IDs of European countries (matching world-atlas)
    const EUROPE_IDS = new Set([
        8,   // Albania
        20,  // Andorra
        40,  // Austria
        56,  // Belgium
        70,  // Bosnia and Herzegovina
        100, // Bulgaria
        112, // Belarus
        191, // Croatia
        196, // Cyprus
        203, // Czech Republic
        208, // Denmark
        233, // Estonia
        246, // Finland
        250, // France
        276, // Germany
        300, // Greece
        336, // Vatican City
        348, // Hungary
        352, // Iceland
        372, // Ireland
        380, // Italy
        428, // Latvia
        438, // Liechtenstein
        440, // Lithuania
        442, // Luxembourg
        470, // Malta
        498, // Moldova
        499, // Montenegro
        528, // Netherlands
        578, // Norway
        616, // Poland
        620, // Portugal
        642, // Romania
        674, // San Marino
        688, // Serbia
        703, // Slovakia
        705, // Slovenia
        724, // Spain
        752, // Sweden
        756, // Switzerland
        804, // Ukraine
        807, // North Macedonia
        826, // United Kingdom
        8,   // Kosovo (may vary per dataset)
    ]);

    // ISO numeric → quiz category for wine countries
    const WINE_CATS = {
        250: 'fr-approved',  // France
        276: 'de-approved',  // Germany
        380: 'it-approved',  // Italy
        724: 'es-approved',  // Spain
    };

    const TOPO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

    function initMap() {
        const svgEl = document.getElementById('europe-map');
        if (!svgEl) return;
        if (typeof d3 === 'undefined' || typeof topojson === 'undefined') return;

        const svg = d3.select(svgEl)
            .attr('viewBox', `0 0 ${VW} ${VH}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr('width', '100%');

        const projection = d3.geoAzimuthalEqualArea()
            .rotate([-10, -50, 0])
            .translate([VW / 2, VH / 2])
            .scale(VW * 0.90)
            .clipAngle(180 - 1e-3);

        const pathGen = d3.geoPath().projection(projection);
        const tooltip = document.getElementById('map-tooltip');
        const wrapper = document.querySelector('.map-wrapper');

        fetch(TOPO_URL)
            .then(function (r) { return r.json(); })
            .then(function (world) {
                var all = topojson.feature(world, world.objects.countries);
                var euroFeatures = all.features.filter(function (f) {
                    return EUROPE_IDS.has(+f.id);
                });

                // Draw country fills
                svg.selectAll('path.eu-country')
                    .data(euroFeatures)
                    .enter()
                    .append('path')
                    .attr('class', function (d) {
                        return 'eu-country' + (WINE_CATS[+d.id] ? ' eu-country--wine' : '');
                    })
                    .attr('d', pathGen)
                    .on('mouseenter', function (event, d) {
                        var cat = WINE_CATS[+d.id];
                        if (!cat) return;
                        d3.select(this).classed('eu-country--hover', true);
                        if (tooltip) {
                            var btn = document.querySelector('[data-cat="' + cat + '"]');
                            tooltip.textContent = btn ? btn.textContent.trim() : cat;
                            tooltip.removeAttribute('hidden');
                        }
                    })
                    .on('mousemove', function (event) {
                        if (!tooltip || tooltip.hasAttribute('hidden') || !wrapper) return;
                        var rect = wrapper.getBoundingClientRect();
                        tooltip.style.left = (event.clientX - rect.left + 14) + 'px';
                        tooltip.style.top  = (event.clientY - rect.top  - 44) + 'px';
                    })
                    .on('mouseleave', function () {
                        d3.select(this).classed('eu-country--hover', false);
                        if (tooltip) tooltip.setAttribute('hidden', '');
                    })
                    .on('click', function (event, d) {
                        var cat = WINE_CATS[+d.id];
                        if (!cat) return;
                        var btn = document.querySelector('[data-cat="' + cat + '"]');
                        if (btn) btn.click();
                        var quizSection = document.querySelector('.quiz-section');
                        if (quizSection) quizSection.scrollIntoView({ behavior: 'smooth' });
                        if (tooltip) tooltip.setAttribute('hidden', '');
                    });

                // Draw shared borders between European countries
                svg.append('path')
                    .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
                        return a !== b && EUROPE_IDS.has(+a.id) && EUROPE_IDS.has(+b.id);
                    }))
                    .attr('class', 'eu-borders')
                    .attr('d', pathGen);
            })
            .catch(function () {
                // Hide map section gracefully if GeoJSON cannot be loaded
                var sec = document.querySelector('.map-section');
                if (sec) sec.setAttribute('hidden', '');
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
})();
