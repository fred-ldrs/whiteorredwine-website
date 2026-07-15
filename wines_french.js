// ── Rebsorten Frankreichs (ONIVINS 2009 / FranceAgriMer 2023) ────────────────
// Alle in Frankreich angebauten Weiß- und Rotweinsorten.
//
// ★   = irreführender Name (guter Quiz-Kandidat)
// ★★  = Farbwort im Namen widerspricht dem Weintyp
// ★★★ = maximale Irreführung
// ─────────────────────────────────────────────────────────────────────────────
//
// QUIZ-KURATIERUNG (2026-07-14):
// Alle seltenen Lokalsorten, Hybridsorten, Tafeltrauben, Basken-Sorten,
// Gamay-Mutationen und obskuren Regional-Kreuzungen entfernt.
// Kriterium: Würde ein Weinenthusiast diese Sorte kennen?
// ★/★★/★★★ (irreführender Name) erhöht den Quiz-Wert, schützt aber nicht vor
// Entfernung — unbekannte Sorten bleiben draußen, egal ob mit Stern oder ohne.
// Stand: 120 Rotwein- + 117 Weißweinsorten = 237 Sorten gesamt
// davon 51 Rot + 66 Weiß mit ha-Daten (Normal/Schwer), 69 Rot + 51 Weiß Expert-Pool (ha = 0).

const FR_APPROVED = {

    // ── Rotweinsorten — Anbaufläche FR (FranceAgriMer 2023, 0 = keine Angabe)
    red: [
        { name: "Abouriou",                    ha:     0 }, // Lot-et-Garonne, Südwest-Frankreich
        { name: "Aleatico",                    ha:     0 }, // Mittelmeerraum — aromatische Sorte
        { name: "Alicante Bouschet",           ha:     0 }, // Languedoc — Färbertraube
        { name: "Aramon",                      ha:     0 }, // Languedoc — ertragreiche Sorte
        { name: "Arinarnoa",                   ha:     0 }, // Bordeaux-Kreuzung (Tannat × Cabernet Sauvignon)
        { name: "Bouquettraube",               ha:     0 }, // ★ klingt neutral — ist ROT
        { name: "Cabernet Franc",              ha: 33248 }, // Bordeaux & Loire
        { name: "Cabernet Sauvignon",          ha: 48890 }, // Médoc
        { name: "Caladoc",                     ha:     0 }, // Kreuzung Malbec × Grenache
        { name: "Calitor",                     ha:     0 }, // Provence, Korsika
        { name: "Carignan",                    ha: 30852 }, // Languedoc
        { name: "Carménère",                   ha:     0 }, // Bordeaux (kaum noch) — jetzt vor allem Chile
        { name: "César",                       ha:     0 }, // ★ Burgund (Irancy) — Personenname
        { name: "Cinsault",                    ha: 20800 }, // Südfrankreich, Korsika
        { name: "Clairette Rose",              ha:     0 }, // ★★ 'Rose' klingt nach Weiß/Rosé — ist ROT
        { name: "Counoise",                    ha:     0 }, // Provence, Châteauneuf-du-Pape
        { name: "Duras",                       ha:   923 }, // Gaillac
        { name: "Durif",                       ha:     0 }, // Provence (= Petite Sirah in Kalifornien)
        { name: "Fer Servadou",                ha:  1610 }, // Marcillac, Entraygues, Gaillac
        { name: "Gamay",                       ha: 30443 }, // Beaujolais, Loire, Savoie
        { name: "Grenache",                    ha: 87862 }, // Südfrankreich, Rhône
        { name: "Grenache Gris",               ha:     0 }, // ★ 'Gris' = grau — als Rotweinsorte geführt
        { name: "Grolleau",                    ha:  2350 }, // Loire, Anjou
        { name: "Grolleau Gris",               ha:     0 }, // ★ 'Gris' = grau — rötlich klassifiziert
        { name: "Jurançon Noir",               ha:   706 }, // ★★ 'Jurançon' → berühmter Weißwein, ist aber ROT
        { name: "Malbec",                      ha:  6155 }, // Cahors, Bordeaux
        { name: "Manseng Noir",                ha:     0 }, // Südwesten
        { name: "Marselan",                    ha:  2375 }, // Languedoc — Cabernet S. × Grenache
        { name: "Merlot",                      ha: 117369 }, // Bordeaux — Nr. 1 in Frankreich
        { name: "Mondeuse",                    ha:   299 }, // Savoie, Bugey
        { name: "Mourvèdre",                   ha:  9363 }, // Bandol, Rhône
        { name: "Muscardin",                   ha:     0 }, // ★★ Châteauneuf — klingt nach Muskat, ist ROT
        { name: "Muscat à petits grains noir", ha:     0 }, // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        { name: "Muscat de Hambourg",          ha:  3504 }, // ★★ 'Muscat' → Weißwein-Assoziation, ist ROT
        { name: "Négrette",                    ha:  1227 }, // Fronton
        { name: "Nielluccio",                  ha:  1589 }, // ★ Korsika — = Sangiovese
        { name: "Petit Verdot",                ha:   862 }, // Médoc — Bordeaux-Cuvée-Sorte
        { name: "Pineau d'Aunis",              ha:   435 }, // ★★ Loire — 'Pineau' klingt nach Weißwein, ist ROT
        { name: "Pinot Meunier",               ha: 11088 }, // ★ Champagne — 'Meunier' = Müller, ROT
        { name: "Pinot Noir",                  ha: 25295 }, // Burgund, Champagne
        { name: "Piquepoul Noir",              ha:     0 }, // ★★ 'Picpoul' kennt man als Weißwein — ist ROT
        { name: "Portugais bleu",              ha:    88 }, // ★ 'Portugais' = portugiesisch, ROT
        { name: "Poulsard",                    ha:   311 }, // Jura — sehr helle Farbe
        { name: "Saint-Macaire",               ha:     0 }, // ★ Bordeaux — Heiligenname
        { name: "Sciaccarello",                ha:   773 }, // Korsika
        { name: "Syrah",                       ha: 70785 }, // Rhône, Provence, Languedoc
        { name: "Tannat",                      ha:  2914 }, // Madiran, Irouléguy
        { name: "Tempranillo",                 ha:   766 }, // Südwesten — spanische Sorte
        { name: "Terret Noir",                 ha:   264 }, // Languedoc, Provence
        { name: "Tibouren",                    ha:   443 }, // Provence — bekannt für Rosé
        { name: "Trousseau",                   ha:   172 }, // Jura
        // ── Expert-Pool: alle weiteren offiziell erfassten Rotweinsorten ─────
        { name: "Arrouya",                     ha:     0 }, // Baskenland — seltene Lokalsorte
        { name: "Aubun",                       ha:     0 }, // ★ Languedoc — klingt neutral, ROT
        { name: "Bachet Noir",                 ha:     0 }, // Burgund — sehr seltene Sorte
        { name: "Barbaroux",                   ha:     0 }, // ★ Provence — Eigenname
        { name: "Béclan",                      ha:     0 }, // Dauphiné — seltene Sorte
        { name: "Béquignol",                   ha:     0 }, // Bordeaux — alte seltene Sorte
        { name: "Bouchalès",                   ha:     0 }, // Südwest-Frankreich — Lokalsorte
        { name: "Bouillet",                    ha:     0 }, // Bourbonnais — seltene Sorte
        { name: "Bouteillan Noir",             ha:     0 }, // ★ Provence — klingt neutral
        { name: "Braquet Noir",                ha:     0 }, // ★ Nizza (Bellet AOC) — klingt neutral
        { name: "Brun Argenté",               ha:     0 }, // ★★ 'Brun' = braun/dunkel — ROT
        { name: "Carcajolo Noir",              ha:     0 }, // ★ Korsika — klingt neutral
        { name: "Castets",                     ha:     0 }, // Bordeaux — sehr seltene Sorte
        { name: "Chambourcin",                 ha:     0 }, // Hybrid — Westfrankreich
        { name: "Chatus",                      ha:     0 }, // ★ Ardèche — klingt neutral, ROT
        { name: "Chenanson",                   ha:     0 }, // Languedoc-Roussillon — Züchtung
        { name: "Colobel",                     ha:     0 }, // Hybrid — Färbertraube
        { name: "Couderc Noir",                ha:     0 }, // ★ Hybrid — Personenname
        { name: "Courbu Noir",                 ha:     0 }, // ★★ Südwesten — 'Courbu' kennt man als WEISSWEIN
        { name: "Egiodola",                    ha:     0 }, // Südwest-Frankreich — Züchtung
        { name: "Ekigaïna",                    ha:     0 }, // Baskenland — Lokalsorte
        { name: "Étraire de la Dui",           ha:     0 }, // ★ Isère — seltener okzitanischer Name
        { name: "Feunate",                     ha:     0 }, // Baskenland — seltene Lokalsorte
        { name: "Florental",                   ha:     0 }, // INRAE-Züchtung
        { name: "Franc Noir de la Haute-Saône",ha:     0 }, // ★ 'Franc' klingt weiß-assoziiert — ist ROT
        { name: "Fuella",                      ha:     0 }, // ★ Provence — klingt neutral
        { name: "Gamay de Bouze",              ha:     0 }, // Burgund — Gamay-Mutation
        { name: "Gamay de Chaudenay",          ha:     0 }, // Burgund — Gamay-Mutation
        { name: "Gamay Fréaux",                ha:     0 }, // Gamay-Mutation
        { name: "Ganson",                      ha:     0 }, // Savoie — seltene Lokalsorte
        { name: "Garonnet",                    ha:     0 }, // Bordeaux — alte Sorte
        { name: "Gascon",                      ha:     0 }, // ★ Südwest-Frankreich — geographischer Name
        { name: "Gouget Noir",                 ha:     0 }, // ★ Burgund — klingt neutral
        { name: "Gramon",                      ha:     0 }, // Savoie — seltene Lokalsorte
        { name: "Grassen",                     ha:     0 }, // Savoie — seltene Lokalsorte
        { name: "Joubertin",                   ha:     0 }, // ★ Savoie — Personenname, ROT
        { name: "Landal Noir",                 ha:     0 }, // Hybrid
        { name: "Léon Millot",                 ha:     0 }, // ★ Hybrid — Personenname
        { name: "Lival",                       ha:     0 }, // Hybrid
        { name: "Lledoner Pelut",              ha:     0 }, // ★ Roussillon — Grenache-Verwandter
        { name: "Mancin",                      ha:     0 }, // Landes — seltene Sorte
        { name: "Maréchal Foch",               ha:     0 }, // ★ Hybrid — Militärtitel als Name
        { name: "Mérille",                     ha:     0 }, // Südwest-Frankreich — seltene Sorte
        { name: "Milgranet",                   ha:     0 }, // Gaillac — alte seltene Sorte
        { name: "Mollard",                     ha:     0 }, // ★ Savoie — klingt neutral
        { name: "Monerac",                     ha:     0 }, // ★ klingt neutral, ROT
        { name: "Morrastel",                   ha:     0 }, // ★ Languedoc — = Graciano, klingt neutral
        { name: "Mourvaison",                  ha:     0 }, // ★ Mourvèdre-Verwandter — klingt neutral
        { name: "Mouyssaguès",                 ha:     0 }, // Rouergue — seltene Sorte
        { name: "Muresconu",                   ha:     0 }, // Korsika — seltene Lokalsorte
        { name: "Noir de Listan",              ha:     0 }, // ★★ 'Noir' = schwarz → ROT ✓, Listan = neutral
        { name: "Noir Fleurien",               ha:     0 }, // ★★ 'Noir' = schwarz — ROT ✓
        { name: "Oberlin Noir",                ha:     0 }, // ★ Hybrid — Personenname
        { name: "Plant Droit",                 ha:     0 }, // ★ 'Droit' = gerade — klingt neutral
        { name: "Plantet",                     ha:     0 }, // Hybrid — Färbertraube
        { name: "Portan",                      ha:     0 }, // ★ Hybrid — klingt neutral
        { name: "Prunelard",                   ha:     0 }, // ★ Südwest-Frankreich — 'Prunelle' = Schlehe
        { name: "Ribol",                       ha:     0 }, // Aveyron — seltene Lokalsorte
        { name: "Roublot",                     ha:     0 }, // Bourgogne — seltene Sorte
        { name: "Rubilande",                   ha:     0 }, // ★★ Hybrid — 'rubi' = rubinrot → ROT ✓
        { name: "Segalin",                     ha:     0 }, // INRAE-Züchtung
        { name: "Seinoir",                     ha:     0 }, // Hybrid — Züchtung
        { name: "Semebat",                     ha:     0 }, // Aveyron — seltene Sorte
        { name: "Servanin",                    ha:     0 }, // Savoie — seltene Sorte
        { name: "Téoulier",                    ha:     0 }, // Provence — seltene Sorte
        { name: "Tressot",                     ha:     0 }, // ★ Burgund — klingt neutral
        { name: "Valdiguié",                   ha:     0 }, // ★ Südwest-Frankreich — neutraler Name
        { name: "Varousset",                   ha:     0 }, // Aveyron — seltene Sorte
        { name: "Villard Noir",                ha:     0 }, // Hybrid — früher weit verbreitet
    ],

    // ── Weißweinsorten — Anbaufläche FR (FranceAgriMer 2023, 0 = keine Angabe)
    white: [
        { name: "Aligoté",                          ha:  1952 }, // Burgund — Bourgogne Aligoté
        { name: "Altesse",                          ha:   356 }, // Savoie — Roussette de Savoie
        { name: "Aramon Blanc",                     ha:     0 }, // ★★ 'Aramon' kennt man als ROT — weiße Variante
        { name: "Aramon Gris",                      ha:     0 }, // ★★ wie Aramon Blanc — graue Variante
        { name: "Arbois",                           ha:     0 }, // ★★ Loire — 'Arbois' bekannt als Jura-Region
        { name: "Auxerrois",                        ha:  2351 }, // Elsass, Lothringen
        { name: "Baco Blanc",                       ha:   773 }, // Armagnac, Cognac
        { name: "Bourboulenc",                      ha:   596 }, // Provence, Languedoc
        { name: "Calitor Blanc",                    ha:     0 }, // ★★ 'Calitor' bekannt als Rotwein — weiße Variante
        { name: "Calitor Gris",                     ha:     0 }, // ★★ wie Calitor Blanc — graue Variante
        { name: "Carignan Blanc",                   ha:   411 }, // ★★ 'Carignan' → fast immer Rotwein — weiße Variante
        { name: "Carignan Gris",                    ha:     0 }, // ★★ wie Carignan Blanc — graue Variante
        { name: "Chardonnay",                       ha: 49595 }, // Burgund, Champagne
        { name: "Chasan",                           ha:   801 }, // Languedoc-Roussillon
        { name: "Chasselas",                        ha:  2445 }, // Elsass, Savoie
        { name: "Chenin Blanc",                     ha:  9828 }, // Loire — Vouvray, Savennières
        { name: "Clairette Blanche",                ha:  2405 }, // Languedoc
        { name: "Colombard",                        ha:  7790 }, // Armagnac, Cognac, Bordeaux
        { name: "Courbu",                           ha:     0 }, // Südwesten
        { name: "Danlas",                           ha:   254 }, // ★ klingt wie ein Personenname — Weißweinsorte
        { name: "Folle Blanche",                    ha:  1770 }, // Armagnac, Cognac, Pays Nantais
        { name: "Gewürztraminer",                   ha:  3083 }, // ★ Elsass — deutsch klingender Name, WEISS
        { name: "Grenache Blanc",                   ha:  4976 }, // ★★ 'Grenache' → Rot-Assoziation, ist WEISS
        { name: "Gros Manseng",                     ha:  2919 }, // Jurançon, Südwest-Frankreich
        { name: "Jacquère",                         ha:  1027 }, // Savoie, Bugey
        { name: "Jurançon Blanc",                   ha:     0 }, // ★ Armagnac/Cognac — nicht die AOC-Traube
        { name: "Len de l'El",                      ha:   640 }, // ★ Gaillac — okzitanisch: 'loin de l'œil'
        { name: "Maccabeu",                         ha:  2628 }, // ★ Roussillon, Languedoc — neutral klingend
        { name: "Malvoisie",                        ha:     0 }, // Mittelmeerraum — Malvasia-Familie
        { name: "Marsanne",                         ha:  1341 }, // Rhône (Hermitage blanc), Savoie
        { name: "Mauzac",                           ha:  1991 }, // Gaillac, Limoux
        { name: "Mauzac Rose",                      ha:     0 }, // ★★ 'Rose' im Namen — trotzdem WEISS
        { name: "Melon de Bourgogne",               ha: 12364 }, // Loire — die Muscadet-Traube
        { name: "Mondeuse Blanche",                 ha:     0 }, // ★★ 'Mondeuse' kennt man als roten Savoie-Wein
        { name: "Müller-Thurgau",                   ha:     0 }, // Elsass (in FR zugelassen)
        { name: "Muscadelle",                       ha:     0 }, // ★ Bordeaux, Sauternes — klingt wie Muscat
        { name: "Muscat d'Alexandrie",              ha:  2610 }, // Roussillon, Languedoc
        { name: "Muscat blanc à petits grains",     ha:  7620 }, // Elsass, Beaumes-de-Venise, Frontignan
        { name: "Muscat rouge à petits grains",     ha:   314 }, // ★★★ 'Rouge' = rot — trotzdem WEISS klassifiziert
        { name: "Muskat Ottonel",                   ha:     0 }, // Elsass — nur dort zugelassen
        { name: "Ondenc",                           ha:     0 }, // Südwesten (Gaillac)
        { name: "Petit Courbu",                     ha:     0 }, // Jurançon
        { name: "Petit Manseng",                    ha:  1019 }, // Jurançon, Pacherenc du Vic-Bilh
        { name: "Pinot Blanc",                      ha:  1292 }, // Elsass, Champagne
        { name: "Pinot Gris",                       ha:  2617 }, // ★ Elsass — 'Gris' = grau, aber Weißwein
        { name: "Piquepoul Blanc",                  ha:  1455 }, // Languedoc (Picpoul de Pinet AOC)
        { name: "Piquepoul Gris",                   ha:     0 }, // ★ graue Variante des Picpoul
        { name: "Riesling",                         ha:  3490 }, // Elsass, Mosel
        { name: "Rolle",                            ha:  3126 }, // ★ Provence — franz. Name für Vermentino
        { name: "Romorantin",                       ha:     0 }, // Cour-Cheverny AOC, Loire
        { name: "Rosé du Var",                      ha:     0 }, // ★★ 'Rosé' im Namen — gilt als Weißweinsorte
        { name: "Roussanne",                        ha:  1352 }, // ★ Rhône, Savoie — 'rousse' = rötlich, ist WEISS
        { name: "Savagnin",                         ha:   481 }, // Jura — Basis des Vin Jaune
        { name: "Savagnin Rose",                    ha:     0 }, // ★★ 'Rose' im Namen — Elsass
        { name: "Sauvignon Blanc",                  ha: 34368 }, // Loire, Bordeaux
        { name: "Sauvignon Gris",                   ha:   463 }, // Mutation des Sauvignon Blanc
        { name: "Sémillon",                         ha: 11693 }, // Bordeaux — Sauternes, Graves
        { name: "Sylvaner",                         ha:  1399 }, // ★ Elsass — franz. Schreibweise, WEISS
        { name: "Terret Blanc",                     ha:  1451 }, // Languedoc
        { name: "Terret Gris",                      ha:     0 }, // ★ graue Terret-Variante
        { name: "Tourbat",                          ha:     0 }, // Roussillon (= Malvoisie du Roussillon)
        { name: "Ugni Blanc",                       ha: 106879 }, // ★ Cognac, Armagnac — Nr. 2 in Frankreich
        { name: "Velteliner rouge précoce",         ha:     0 }, // ★★★ 'Rouge' = rot im Namen — ist aber WEISS
        { name: "Verdesse",                         ha:     0 }, // Savoie
        { name: "Vermentino",                       ha:  3569 }, // Provence, Languedoc, Korsika
        { name: "Viognier",                         ha:  4395 }, // Condrieu, Côte-Rôtie, Languedoc
        // ── Expert-Pool: alle weiteren offiziell erfassten Weißweinsorten ────
        { name: "Aranel",                           ha:     0 }, // INRAE-Züchtung
        { name: "Arbane",                           ha:     0 }, // ★ Champagne — sehr seltene alte Sorte
        { name: "Arriloba",                         ha:     0 }, // Baskenland — Lokalsorte
        { name: "Arrufiat",                         ha:     0 }, // Baskenland — Lokalsorte
        { name: "Aubin Blanc",                      ha:     0 }, // Lothringen — alte Sorte
        { name: "Aubin Vert",                       ha:     0 }, // ★★ 'Vert' = grün — WEISS ✓
        { name: "Baroque",                          ha:     0 }, // ★ Tursan — Stilbezeichnung als Rebname
        { name: "Biancu Gentile",                   ha:     0 }, // ★★ Korsika — 'Biancu' = weiß ✓
        { name: "Blanc Dame",                       ha:     0 }, // ★★ 'Blanc' = weiß — WEISS ✓
        { name: "Camaralet de Lasseube",            ha:     0 }, // ★ Jurançon — langer okzitanischer Name
        { name: "Carcajolo Blanc",                  ha:     0 }, // ★★ 'Carcajolo' kennt man als ROT — weiße Variante
        { name: "Clarin",                           ha:     0 }, // ★ klingt neutral — WEISS
        { name: "Claverie",                         ha:     0 }, // Südwest-Frankreich — seltene Sorte
        { name: "Codivarta",                        ha:     0 }, // Korsika — Lokalsorte
        { name: "Colombaud",                        ha:     0 }, // Charentes — Lokalsorte
        { name: "Crouchen",                         ha:     0 }, // ★ Südwest-Frankreich — klingt neutral
        { name: "Elbling",                          ha:     0 }, // Mosel/Elsass — in FR zugelassen
        { name: "Folignan",                         ha:     0 }, // INRAE-Züchtung
        { name: "Genovèse",                         ha:     0 }, // ★ Korsika — 'Genovèse' = Genuesin
        { name: "Goldriesling",                     ha:     0 }, // ★ Sachsen/Elsass — Riesling-Abkömmling
        { name: "Graisse",                          ha:     0 }, // ★ Armagnac — 'Graisse' = Fett
        { name: "Gringet",                          ha:     0 }, // ★ Savoie (Ayze) — ungewöhnlicher Name
        { name: "Gros Vert",                        ha:     0 }, // ★★ 'Vert' = grün — WEISS ✓
        { name: "Knipperlé",                        ha:     0 }, // ★ Elsass — alter elsässischer Name
        { name: "Lauzet",                           ha:     0 }, // Haute-Provence — seltene Sorte
        { name: "Liliorila",                        ha:     0 }, // ★ Korsika — exotischer Name
        { name: "Mayorquin",                        ha:     0 }, // ★ klingt nach Mallorca — WEISS
        { name: "Merlot Blanc",                     ha:     0 }, // ★★★ 'Merlot' → jeder denkt ROT, ist aber WEISS!
        { name: "Meslier-Saint-François",           ha:     0 }, // ★ Champagne — langer Name
        { name: "Molette",                          ha:     0 }, // ★ Savoie, Bugey — klingt neutral
        { name: "Montils",                          ha:     0 }, // Charentes — seltene Sorte
        { name: "Muscat Cendré",                    ha:     0 }, // ★★ 'Cendré' = aschgrau — klingt dunkel, WEISS
        { name: "Muscat rose à petits grains",      ha:     0 }, // ★★★ 'Rose' im Namen — Elsass — gilt als WEISS!
        { name: "Oeillade Blanche",                 ha:     0 }, // ★★ 'Oeillade' kennt man als ROT — weiße Variante
        { name: "Paga Debiti",                      ha:     0 }, // ★ Südwest — 'zahlt Schulden', WEISS
        { name: "Pascal Blanc",                     ha:     0 }, // ★★ 'Pascal' klingt neutral — Provence, WEISS
        { name: "Perdea",                           ha:     0 }, // Südwest-Frankreich — seltene Sorte
        { name: "Petit Meslier",                    ha:     0 }, // ★ Champagne — sehr seltene Sorte
        { name: "Précoce Bousquet",                 ha:     0 }, // ★ früh reifend — Eigenname
        { name: "Raffiat de Moncade",               ha:     0 }, // ★ Béarn — langer okzitanischer Name
        { name: "Ravat Blanc",                      ha:     0 }, // ★ Hybrid — Personenname
        { name: "Rayon d'Or",                       ha:     0 }, // ★★ 'Goldener Strahl' — Hybrid, WEISS
        { name: "Riminèse",                         ha:     0 }, // Languedoc — seltene Sorte
        { name: "Roussette d'Ayze",                 ha:     0 }, // ★★ 'Roussette' klingt rötlich — WEISS (Savoie)
        { name: "Sacy",                             ha:     0 }, // ★ Burgund — klingt neutral, WEISS
        { name: "Saint-Pierre Doré",                ha:     0 }, // ★ 'Doré' = golden — Heiligenname + Farbe
        { name: "Select",                           ha:     0 }, // ★ neutraler Handelsname — WEISS
        { name: "Servant",                          ha:     0 }, // ★ Beaujolais — 'Servant' = Diener
        { name: "Seyval Blanc",                     ha:     0 }, // ★ Hybrid — 'Blanc' ✓
        { name: "Valérien",                         ha:     0 }, // ★ Savoie — Personenname
        { name: "Villard Blanc",                    ha:     0 }, // ★ Hybrid — Personenname
    ],
};
