// ── Rebsorten Spaniens (ICEX 2008 / MAPA-Weinstatistik 2000) ─────────────────
// Bedeutende in Spanien angebaute Weiß- und Rotweinsorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────
//
// QUIZ-KURATIERUNG (2026-07-15):
// Rein internationale Sorten ohne spanischen Bezug und Tafeltrauben ausgeschlossen.
// Kriterium: Würde ein Weinenthusiast diese Sorte kennen?
// Stand: 23 Rotwein- + 24 Weißweinsorten = 47 Sorten gesamt.
// davon 8 Rot + 9 Weiß mit ha-Daten (Normal/Schwer), 15 Rot + 15 Weiß Expert-Pool (ha = 0).

const ES_APPROVED = {

    // ── Weißweinsorten — Anbaufläche ES (ICEX 2008 / MAPA 2000, 0 = keine Angabe)
    white: [
        { name: "Airén",            ha: 280000 }, // ★ La Mancha — größte weiße Rebfläche der Welt
        { name: "Pardilla",         ha:  51572 }, // auch 'Pardina' — La Mancha, Extremadura
        { name: "Macabeo",          ha:  34000 }, // Katalonien, Rioja (= Viura) — Cava-Basis
        { name: "Pedro Ximénez",    ha:  11115 }, // ★★★ Jerez, Montilla — klingt dunkel, ist WEISS
        { name: "Cayetana Blanca",  ha:  10743 }, // Extremadura — 'Blanca' = weiß ✓
        { name: "Chelva",           ha:  10711 }, // Valencia, Murcia
        { name: "Parellada",        ha:  10415 }, // Katalonien — Cava-Dreigestirn
        { name: "Xarel-lo",         ha:   9227 }, // Katalonien — Cava-Dreigestirn
        { name: "Palomino",         ha:  17000 }, // ★ Jerez — Sherry-Basissorte; 'Palomino' = Schimmel
        { name: "Albariño",         ha:      0 }, // Rías Baixas — Galiciens Leitsorte
        { name: "Verdejo",          ha:      0 }, // ★ Rueda — 'verde' = grün → weiß ✓
        { name: "Godello",          ha:      0 }, // Valdeorras, Bierzo — edler Galicier
        { name: "Garnacha Blanca",  ha:      0 }, // ★★★ 'Garnacha' → bekannte Rotsorte, hier WEISS
        { name: "Viura",            ha:      0 }, // Rioja-Name für Macabeo
        { name: "Hondarribi Zuri",  ha:      0 }, // ★★ Baskenland — 'Zuri' = weiß (Baskisch) ✓
        { name: "Malvasía",         ha:      0 }, // Kanarische Inseln, Rioja
        { name: "Moscatel",         ha:      0 }, // Valencia, Jerez — aromatisch
        { name: "Listan Blanco",    ha:      0 }, // Kanarische Inseln — 'Blanco' = weiß ✓
        { name: "Loureiro",         ha:      0 }, // Galicien, auch in Portugal
        { name: "Treixadura",       ha:      0 }, // Ribeiro, Galicien
        { name: "Albillo Mayor",    ha:      0 }, // ★ Ribera del Duero — weiße Rarität
        { name: "Prensal Blanc",    ha:      0 }, // Mallorca — 'Blanc' = weiß ✓
        { name: "Torrontés",        ha:      0 }, // ★ Galicien — nicht der argentinische Torrontés!
        { name: "Caíño Blanco",     ha:      0 }, // Galicien — 'Blanco' = weiß ✓
    ],

    // ── Rotweinsorten — Anbaufläche ES (ICEX 2008 / MAPA 2000, 0 = keine Angabe)
    red: [
        { name: "Tempranillo",       ha: 214000 }, // Spaniens Leitsorte — Rioja, Ribera del Duero
        { name: "Bobal",             ha:  80000 }, // Valencia, Kastilien-La Mancha
        { name: "Garnacha",          ha:  75000 }, // Aragonien, Rioja, Navarra (= Grenache)
        { name: "Monastrell",        ha:  60000 }, // Murcia, Valencia (= Mourvèdre)
        { name: "Mencía",            ha:  11330 }, // Bierzo, Galicien
        { name: "Mazuelo",           ha:   9470 }, // Rioja (= Carignan)
        { name: "Garnacha Tintorera",ha:      0 }, // ★★ 'Tintorera' = Färbertraube → eindeutig rot ✓
        { name: "Graciano",          ha:      0 }, // ★★★ Rioja — klingt nach weißem Wein (gracious)
        { name: "Prieto Picudo",     ha:      0 }, // ★★ León — 'Prieto' = dunkel, 'Picudo' = spitz
        { name: "Listan Negro",      ha:      0 }, // ★★ Kanarische Inseln — 'Negro' = schwarz → rot ✓
        { name: "Manto Negro",       ha:      0 }, // ★★ Mallorca — 'Negro' = schwarz → rot ✓
        { name: "Hondarribi Beltza", ha:      0 }, // ★★★ Baskenland — 'Beltza' = schwarz (Baskisch)
        { name: "Brancellao",        ha:      0 }, // ★ Galicien — klingt weder rot noch weiß
        { name: "Giro Ros",          ha:      0 }, // ★★★ Mallorca — 'Ros' klingt nach Rosé, ist ROT!
        { name: "Callet",            ha:      0 }, // Mallorca — lokale Sorte
        { name: "Fogoneu",           ha:      0 }, // Mallorca — lokale Sorte
        { name: "Trepat",            ha:      0 }, // Conca de Barberà — auch für Rosé
        { name: "Sumoll",            ha:      0 }, // Katalonien — seltene Sorte
        { name: "Juan García",       ha:      0 }, // ★★★ Arribes del Duero — spanischer Eigenname
        { name: "Rufete",            ha:      0 }, // Arribes, Salamanca — auch in Portugal
        { name: "Tintilla de Rota",  ha:      0 }, // ★★ Cádiz — 'Tintilla' = kleines Rotes → rot ✓
        { name: "Caíño Tinto",       ha:      0 }, // ★ Galicien — 'Tinto' = rot ✓
        { name: "Moravia Agria",     ha:      0 }, // La Mancha — seltene lokale Sorte
    ],
};
