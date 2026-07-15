// ── In Deutschland zugelassene Rebsorten (BLE-Liste, Stand 02.08.2022) ───────
// Nur nicht-kursive Sorten = zur Qualitätsweinbereitung zugelassen.
// Kursive Sorten (nur Versuchsanbau) sind ausgeschlossen.
//
// Hinweis für Quiz-Design: ★ = besonders irreführender Name
// ─────────────────────────────────────────────────────────────────────────────

const DE_APPROVED = {

    // Weißweinsorten — Anbaufläche DE (Destatis 2022/2023, 0 = keine Angabe)
    white: [
        { name: "Albalonga",          ha:     0 }, // Rheinhessen — Rieslaner × Silvaner
        { name: "Arnsburger",         ha:     0 }, // hessische Neuzüchtung
        { name: "Auxerrois",          ha:   400 }, // Elsass / Baden — Pinot-Familie
        { name: "Bacchus",            ha:  2000 }, // aromatische Kreuzung — mythologischer Name
        { name: "Blauer Silvaner",    ha:     0 }, // ★ 'Blauer' klingt nach Rotwein — ist aber weiß
        { name: "Bronner",            ha:   200 }, // pilzwiderstandsfähige Sorte
        { name: "Chardonnay",         ha:   700 }, // internationale Leitsorte
        { name: "Chenin Blanc",       ha:     0 }, // Loire-Weißwein, auch in Deutschland angebaut
        { name: "Ehrenbreitsteiner",  ha:     0 }, // Rheinhessen-Züchtung
        { name: "Ehrenfelser",        ha:   200 }, // Rheinhessen — Riesling × Silvaner
        { name: "Elbling",            ha:   600 }, // älteste Mosel-Weißweinsorte
        { name: "Faberrebe",          ha:   250 }, // aromatische Kreuzung — Weißburgunder × Müller-Thurgau
        { name: "Bouvier",            ha:     0 }, // Synonym 'Findling' — mitteleuropäische Weißweinsorte
        { name: "Fontanara",          ha:     0 }, // pilzwiderstandsfähige Sorte
        { name: "Freisamer",          ha:     0 }, // Baden — Silvanercharakter
        { name: "Früher Malingre",    ha:     0 }, // sehr frühreife Sorte
        { name: "Gelber Muskateller", ha:   100 }, // aromatischer Muskateller — weiß
        { name: "Gewürztraminer",     ha:   800 }, // Pfalz / Elsass — 'Gewürz' = Gewürze
        { name: "Goldriesling",       ha:   100 }, // Sachsen — Riesling-Abkömmling
        { name: "Grauburgunder",      ha:  7100 }, // Pinot Gris — 'Grau' = grau
        { name: "Gutedel",            ha:  2600 }, // Baden / Markgräflerland — uralte Sorte
        { name: "Hibernal",           ha:     0 }, // pilzwiderstandsfähige Sorte
        { name: "Hölder",             ha:     0 }, // württembergische Weißweinsorte
        { name: "Huxelrebe",          ha:   400 }, // Rheinhessen — aromatische Kreuzung
        { name: "Irsay Oliver",       ha:     0 }, // aromatische ungarische Kreuzung
        { name: "Johanniter",         ha:   200 }, // pilzwiderstandsfähige Sorte
        { name: "Juwel",              ha:     0 }, // aromatische Kreuzung
        { name: "Kanzler",            ha:   100 }, // Rheinhessen — Müller-Thurgau × Silvaner
        { name: "Kerner",             ha:  3100 }, // Württemberg — fruchtige Kreuzung
        { name: "Kernling",           ha:     0 }, // aromatische Zucht
        { name: "Mariensteiner",      ha:     0 }, // Franken — Silvaner-Abkömmling
        { name: "Merzling",           ha:     0 }, // pilzwiderstandsfähige Sorte
        { name: "Morio-Muskat",       ha:  1100 }, // aromatische Kreuzung — Muskatcharakter
        { name: "Müller-Thurgau",     ha: 11600 }, // meistangebaute deutsche Weißweinsorte (Rivaner)
        { name: "Muskat-Ottonel",     ha:   100 }, // aromatischer Muskat — weiß
        { name: "Nobling",            ha:     0 }, // Baden — Gutedel × Silvaner
        { name: "Optima",             ha:     0 }, // sehr süße Kreuzung
        { name: "Orion",              ha:     0 }, // pilzwiderstandsfähige Sorte
        { name: "Ortega",             ha:   450 }, // aromatische Kreuzung — Philosophenname
        { name: "Osteiner",           ha:     0 }, // Rheinhessen-Züchtung
        { name: "Perle",              ha:    50 }, // ★ kurzer Name — aromatische Weißweinsorte aus Alzey
        { name: "Perle von Csaba",    ha:     0 }, // frühreife aromatische Sorte
        { name: "Phoenix",            ha:   200 }, // pilzwiderstandsfähige Sorte
        { name: "Prinzipal",          ha:     0 }, // Franken — Silvaner-Abkömmling
        { name: "Regner",             ha:     0 }, // ★ klingt wie ein Rotwein-Name — ist aber weiß
        { name: "Reichensteiner",     ha:     0 }, // England / Deutschland — Kreuzung
        { name: "Rieslaner",          ha:   200 }, // Franken — Riesling × Silvaner
        { name: "Riesling",           ha: 23500 }, // deutsche Leitsorte — Mosel, Rheingau, Pfalz
        { name: "Roter Elbling",      ha:     0 }, // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        { name: "Roter Gutedel",      ha:     0 }, // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        { name: "Roter Muskateller",  ha:     0 }, // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        { name: "Sauvignon Blanc",    ha:   600 }, // internationale Sorte — auch in Baden angebaut
        { name: "Sauvignon Gris",     ha:    50 }, // Mutation des Sauvignon Blanc
        { name: "Scheurebe",          ha:  1700 }, // Pfalz — aromatische Kreuzung
        { name: "Schönburger",        ha:     0 }, // pilzwiderstandsfähige Kreuzung
        { name: "Septimer",           ha:     0 }, // aromatische Kreuzung
        { name: "Siegerrebe",         ha:   150 }, // aromatische Kreuzung — Gewürztraminer-Abkömmling
        { name: "Silcher",            ha:     0 }, // württembergische Züchtung
        { name: "Silvaner",           ha:  4600 }, // Franken & Rheinhessen — klassische Sorte
        { name: "Sirius",             ha:     0 }, // pilzwiderstandsfähige Sorte
        { name: "Staufer",            ha:     0 }, // Württemberg — Weißweinsorte
        { name: "Veltliner",          ha:     0 }, // ★ wie Grüner Veltliner — weiß
        { name: "Weißer Burgunder",   ha:  5700 }, // Pinot Blanc — Baden, Pfalz
        { name: "Würzer",             ha:     0 }, // aromatische Kreuzung — Gewürzcharakter
    ],

    // Rotweinsorten — Anbaufläche DE (Destatis 2022/2023, 0 = keine Angabe)
    red: [
        { name: "Acolon",             ha:   700 }, // ★ württembergische Neuzüchtung — neutraler Name
        { name: "André",              ha:    50 }, // ★ Personenname — klingt nicht nach Rotwein
        { name: "Blauburger",         ha:     0 }, // österreichische Rotweinsorte
        { name: "Cabernet Dorsa",     ha:   100 }, // württembergische Cabernet-Kreuzung
        { name: "Cabernet Mitos",     ha:   100 }, // württembergische Cabernet-Kreuzung
        { name: "Cabernet Sauvignon", ha:   400 }, // Bordeaux-Leitsorte — weltweit bekannt
        { name: "Dakapo",             ha:     0 }, // ★ Rotweinkreuzung — Name wie 'da capo'
        { name: "Deckrot",            ha:     0 }, // Färbertraube — tiefes Rot
        { name: "Domina",             ha:   600 }, // ★ kräftige Rotweinsorte — 'Herrin'-Name
        { name: "Dornfelder",         ha:  7500 }, // populärste dunkle deutsche Rotweinsorte
        { name: "Dunkelfelder",       ha:   200 }, // Färbertraube — 'dunkel' = dunkel
        { name: "Frühburgunder",      ha:   350 }, // ★ Pinot-Frühreife — 'Früh' klingt neutral
        { name: "Hegel",              ha:     0 }, // ★ Philosophenname — württembergische Rotweinsorte
        { name: "Helfensteiner",      ha:    50 }, // württembergische Kreuzung
        { name: "Heroldrebe",         ha:   200 }, // kräftige Rotweinsorte
        { name: "Lemberger",          ha:  2500 }, // ★ Baden-Württemberg — klingt neutral (= Blaufränkisch)
        { name: "Merlot",             ha:  1000 }, // Bordeaux-Sorte — Pomerol, Saint-Émilion
        { name: "Muskat-Trollinger",  ha:     0 }, // ★ 'Muskat' klingt nach Weißwein — ist aber rot
        { name: "Palas",              ha:     0 }, // ★ württembergische Rotweinsorte — neutraler Name
        { name: "Portugieser",        ha:  3300 }, // ★ 'Portugieser' klingt geographisch neutral — Rotwein
        { name: "Regent",             ha:  2000 }, // ★ pilzwiderstandsfähige Rotweinsorte — herrschaftlicher Name
        { name: "Rondo",              ha:   100 }, // ★ pilzwiderstandsfähige Rotweinsorte — Musikbegriff
        { name: "Rotberger",          ha:     0 }, // ★ 'Rot' (= rot) im Namen — diesmal korrekt
        { name: "Schwarzriesling",    ha:  2100 }, // ★★ 'Riesling' klingt nach Weißwein — ist aber Rotwein
        { name: "Spätburgunder",      ha: 11500 }, // Pinot Noir — Deutschlands beste Rotweinsorte
        { name: "St. Laurent",        ha:   100 }, // ★ Heiligenname — österreichische Rotweinsorte
        { name: "Tauberschwarz",      ha:     0 }, // ★ alte Württemberger Sorte — neutraler Name
        { name: "Trollinger",         ha:  2500 }, // Württemberg — leichter Rotwein
        { name: "Zweigelt",           ha:   250 }, // ★ Österreichs meistangebaute Rotweinsorte — Züchtername
    ],
};
