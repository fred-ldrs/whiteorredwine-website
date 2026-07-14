// ── In Deutschland zugelassene Rebsorten (BLE-Liste, Stand 02.08.2022) ───────
// Nur nicht-kursive Sorten = zur Qualitätsweinbereitung zugelassen.
// Kursive Sorten (nur Versuchsanbau) sind ausgeschlossen.
//
// Hinweis für Quiz-Design: ★ = besonders irreführender Name
// ─────────────────────────────────────────────────────────────────────────────

const DE_APPROVED = {

    // 58 zugelassene Weißweinsorten
    white: [
        "Albalonga",         // Rheinhessen — Rieslaner × Silvaner
        "Arnsburger",        // hessische Neuzüchtung
        "Auxerrois",         // Elsass / Baden white — Pinot-Familie
        "Bacchus",           // aromatische Kreuzung — mythologischer Name
        "Blauer Silvaner",   // ★ 'Blauer' klingt nach Rotwein — ist aber weiß
        "Bronner",           // pilzwiderstandsfähige Sorte
        "Chardonnay",        // internationale Leitsorte
        "Chenin Blanc",      // Loire-Weißwein, auch in Deutschland angebaut
        "Ehrenbreitsteiner", // Rheinhessen-Züchtung
        "Ehrenfelser",       // Rheinhessen — Riesling × Silvaner
        "Elbling",           // älteste Mosel-Weißweinsorte
        "Faberrebe",         // aromatische Kreuzung — Weißburgunder × Müller-Thurgau
        "Bouvier",           // Synonym 'Findling' — mitteleuropäische Weißweinsorte
        "Fontanara",         // pilzwiderstandsfähige Sorte
        "Freisamer",         // Baden — Silvanercharakter
        "Früher Malingre",   // sehr frühreife Sorte
        "Gelber Muskateller", // aromatischer Muskateller — weiß
        "Gewürztraminer",    // Pfalz / Elsass — 'Gewürz' = Gewürze
        "Goldriesling",      // Sachsen — Riesling-Abkömmling
        "Grauburgunder",     // Pinot Gris — 'Grau' = grau
        "Gutedel",           // Baden / Markgräflerland — uralte Sorte
        "Hibernal",          // pilzwiderstandsfähige Sorte
        "Hölder",            // württembergische Weißweinsorte
        "Huxelrebe",         // Rheinhessen — aromatische Kreuzung
        "Irsay Oliver",      // aromatische ungarische Kreuzung
        "Johanniter",        // pilzwiderstandsfähige Sorte
        "Juwel",             // aromatische Kreuzung
        "Kanzler",           // Rheinhessen — Müller-Thurgau × Silvaner
        "Kerner",            // Württemberg — fruchtige Kreuzung
        "Kernling",          // aromatische Zucht
        "Mariensteiner",     // Franken — Silvaner-Abkömmling
        "Merzling",          // pilzwiderstandsfähige Sorte
        "Morio-Muskat",      // aromatische Kreuzung — Muskatcharakter
        "Müller-Thurgau",    // meistangebaute deutsche Weißweinsorte (Rivaner)
        "Muskat-Ottonel",    // aromatischer Muskat — weiß
        "Nobling",           // Baden — Gutedel × Silvaner
        "Optima",            // sehr süße Kreuzung
        "Orion",             // pilzwiderstandsfähige Sorte
        "Ortega",            // aromatische Kreuzung — Philosophenname
        "Osteiner",          // Rheinhessen-Züchtung
        "Perle",             // ★ kurzer Name — aromatische Weißweinsorte aus Alzey
        "Perle von Csaba",   // frühreife aromatische Sorte
        "Phoenix",           // pilzwiderstandsfähige Sorte
        "Prinzipal",         // Franken — Silvaner-Abkömmling
        "Regner",            // ★ klingt wie ein Rotwein-Name — ist aber weiß
        "Reichensteiner",    // England / Deutschland — Kreuzung
        "Rieslaner",         // Franken — Riesling × Silvaner
        "Riesling",          // deutsche Leitsorte — Mosel, Rheingau, Pfalz
        "Roter Elbling",     // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        "Roter Gutedel",     // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        "Roter Muskateller", // ★ 'Roter' (= rot) — trotzdem Weißweinsorte
        "Sauvignon Blanc",   // internationale Sorte — auch in Baden angebaut
        "Sauvignon Gris",    // Mutation des Sauvignon Blanc
        "Scheurebe",         // Pfalz — aromatische Kreuzung
        "Schönburger",       // pilzwiderstandsfähige Kreuzung
        "Septimer",          // aromatische Kreuzung
        "Siegerrebe",        // aromatische Kreuzung — Gewürztraminer-Abkömmling
        "Silcher",           // württembergische Züchtung
        "Silvaner",          // Franken & Rheinhessen — klassische Sorte
        "Sirius",            // pilzwiderstandsfähige Sorte
        "Staufer",           // Württemberg — Weißweinsorte
        "Veltliner",         // ★ wie Grüner Veltliner — weiß
        "Weißer Burgunder",  // Pinot Blanc — Baden, Pfalz
        "Würzer",            // aromatische Kreuzung — Gewürzcharakter
    ],

    // 29 zugelassene Rotweinsorten
    red: [
        "Acolon",            // ★ württembergische Neuzüchtung — neutraler Name
        "André",             // ★ Personenname — klingt nicht nach Rotwein
        "Blauburger",        // österreichische Rotweinsorte
        "Cabernet Dorsa",    // württembergische Cabernet-Kreuzung
        "Cabernet Mitos",    // württembergische Cabernet-Kreuzung
        "Cabernet Sauvignon", // Bordeaux-Leitsorte — weltweit bekannt
        "Dakapo",            // ★ Rotweinkreuzung — Name wie 'da capo'
        "Deckrot",           // Färbertraube — tiefes Rot
        "Domina",            // ★ kräftige Rotweinsorte — 'Herrin'-Name
        "Dornfelder",        // populärste dunkle deutsche Rotweinsorte
        "Dunkelfelder",      // Färbertraube — 'dunkel' = dunkel
        "Frühburgunder",     // ★ Pinot-Frühreife — 'Früh' klingt neutral
        "Hegel",             // ★ Philosophenname — württembergische Rotweinsorte
        "Helfensteiner",     // württembergische Kreuzung
        "Heroldrebe",        // kräftige Rotweinsorte
        "Lemberger",         // ★ Baden-Württemberg — Name klingt neutral (= Blaufränkisch)
        "Merlot",            // Bordeaux-Sorte — Pomerol, Saint-Émilion
        "Muskat-Trollinger",  // ★ 'Muskat' klingt nach Weißwein — ist aber rot
        "Palas",             // ★ württembergische Rotweinsorte — neutraler Name
        "Portugieser",       // ★ 'Portugieser' klingt geographisch neutral — Rotwein
        "Regent",            // ★ pilzwiderstandsfähige Rotweinsorte — herrschaftlicher Name
        "Rondo",             // ★ pilzwiderstandsfähige Rotweinsorte — Musikbegriff
        "Rotberger",         // ★ 'Rot' (= rot) im Namen — diesmal korrekt
        "Schwarzriesling",   // ★★ 'Riesling' klingt nach Weißwein — ist aber Rotwein (Pinot Meunier)
        "Spätburgunder",     // Pinot Noir — Deutschlands beste Rotweinsorte
        "St. Laurent",       // ★ Heiligenname — österreichische Rotweinsorte
        "Tauberschwarz",     // ★ alte Württemberger Sorte — neutraler Name
        "Trollinger",        // Württemberg — leichter Rotwein
        "Zweigelt",          // ★ Österreichs meistangebaute Rotweinsorte — Züchtername
    ],
};
