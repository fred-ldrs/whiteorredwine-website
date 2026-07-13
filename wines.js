// ── Wine Pools (language-specific) ───────────────────────────────────────────
const WINE_POOLS = {

    // English: international / Italian / Spanish focus
    en: {
        white: [
            "Gewürztraminer",    // Alsace / Alto Adige — spicy aromatic white
            "Viognier",          // Northern Rhône — Condrieu's grape
            "Grüner Veltliner",  // Austria's flagship white
            "Roussanne",         // Rhône white — 'rousse' = reddish in French
            "Vermentino",        // Sardinia & Provence white
            "Torrontés",         // Argentina's signature aromatic white
            "Falanghina",        // Ancient Campanian white
            "Arneis",            // Piedmont white — 'rascal' in local dialect
            "Greco di Tufo",     // Campanian white from volcanic soil
            "Trebbiano",         // Italy's most widely planted white grape
            "Picpoul",           // Languedoc white — 'lip-stinger'
            "Marsanne",          // Northern Rhône white, rich and waxy
            "Pinot Grigio",      // NE Italy — 'grigio' means grey
            "Verdejo",           // Rueda, Spain
            "Muscadet",          // Loire — Melon de Bourgogne grape
            "Albariño",          // Galicia & Vinho Verde
            "Garganega",         // Soave's main grape, Veneto
            "Fiano",             // Ancient Campanian white
        ],
        red: [
            "Carménère",         // Chile's signature red, once a Bordeaux variety
            "Pinotage",          // South Africa — Pinot Noir × Cinsault cross
            "Tannat",            // Uruguay & Madiran — extremely tannic red
            "Touriga Nacional",  // Portugal's top red grape
            "Nero d'Avola",      // Sicily's flagship red — 'nero' means black
            "Lagrein",           // Alto Adige red, deep and full-bodied
            "Sagrantino",        // Umbria's most tannic native red
            "Xinomavro",         // Northern Greece — 'acid-black' red
            "Blaufränkisch",     // Austria — 'blau' means blue
            "Primitivo",         // Puglia's powerful red, related to Zinfandel
            "Teroldego",         // Trentino red, Campo Rotaliano
            "Montepulciano",     // Central Italy red grape (d'Abruzzo)
            "Aglianico",         // Southern Italy — the 'Barolo of the South'
            "Baga",              // Bairrada, Portugal — tannic red
            "Mencía",            // Galicia & Portugal's aromatic red
            "Dolcetto",          // Piedmont red — 'little sweet one'
            "Corvina",           // Valpolicella / Amarone backbone grape
            "Zweigelt",          // Austria's most-planted red cross
        ],
    },

    // German: German / Austrian / Swiss wine culture focus
    de: {
        white: [
            "Riesling",          // Germany's flagship white grape
            "Silvaner",          // Franken & Rheinhessen white
            "Müller-Thurgau",    // most-planted German white cross
            "Grauburgunder",     // Pinot Gris — 'Grau' = grey
            "Scheurebe",         // aromatic German white cross
            "Kerner",            // fruity German white cross
            "Gewürztraminer",    // Alsace / Pfalz — 'Gewürz' = spice
            "Grüner Veltliner",  // Austria's flagship white
            "Gutedel",           // Baden — ancient Swiss / French variety
            "Elbling",           // Mosel's oldest white grape
            "Bacchus",           // aromatic German white — mythological name
            "Viognier",          // Northern Rhône white
            "Roussanne",         // Rhône white — 'rousse' = reddish
            "Auxerrois",         // Alsace white — place-name origin
            "Savagnin",          // Jura / Alsace — also known as 'Traminer'
            "Ortega",            // German white cross — philosopher's name
            "Solaris",           // climate-resistant German white variety
            "Morio-Muskat",      // aromatic German white cross
        ],
        red: [
            "Spätburgunder",     // Pinot Noir — Germany's top red
            "Dornfelder",        // popular dark German red cross
            "Trollinger",        // Württemberg light red
            "Lemberger",         // Baden-Württemberg red (= Blaufränkisch)
            "Schwarzriesling",   // Pinot Meunier — 'Schwarz' = black
            "Regent",            // climate-resistant German red hybrid
            "Portugieser",       // light German everyday red
            "Domina",            // powerful German red cross
            "Zweigelt",          // Austria's most-planted red cross
            "Lagrein",           // Alto Adige / Südtirol red
            "Teroldego",         // Trentino / Südtirol red
            "Sagrantino",        // Umbria's most tannic red
            "Corvina",           // Valpolicella / Amarone grape
            "Tannat",            // Madiran — extremely tannic
            "Carménère",         // Chile's signature red
            "Pinotage",          // South Africa — Pinot Noir × Cinsault
            "Aglianico",         // Southern Italy — 'Barolo of the South'
            "Nero d'Avola",      // Sicily — 'nero' means black
        ],
    },

    // French: French / Southern European wine culture focus
    fr: {
        white: [
            "Viognier",          // Condrieu, Northern Rhône
            "Roussanne",         // Rhône — 'rousse' = reddish
            "Marsanne",          // Northern Rhône, rich and waxy
            "Bourboulenc",       // Southern Rhône white
            "Clairette",         // Provence & Languedoc white
            "Picpoul",           // Languedoc — 'pique-lèvre' = lip-stinger
            "Colombard",         // Gascony & Charentes aromatic white
            "Gros Manseng",      // Jurançon, Southwest France
            "Mauzac",            // Limoux & Gaillac white
            "Jacquère",          // Savoie & Bugey white
            "Savagnin",          // Jura — base of Vin Jaune
            "Melon de Bourgogne",// Loire — Muscadet's grape
            "Aligoté",           // Burgundy secondary white
            "Rolle",             // Provence name for Vermentino
            "Gewürztraminer",    // Alsace aromatic white
            "Auxerrois",         // Alsace & Lorraine white
            "Maccabeu",          // Roussillon & Languedoc white
            "Vermentino",        // Corsica & Provence white
        ],
        red: [
            "Carignan",          // Languedoc & Roussillon backbone red
            "Cinsault",          // Southern France light red
            "Mourvèdre",         // Bandol & Southern Rhône red
            "Nielluccio",        // Corsican red (= Sangiovese)
            "Counoise",          // Southern Rhône blending red
            "Négrette",          // Fronton & Gaillac fruity red
            "Mondeuse",          // Savoie structured red
            "Poulsard",          // Jura light-coloured red
            "Trousseau",         // Jura red — sounds like a trousseau
            "Pineau d'Aunis",    // Loire — 'Pineau' hints at white
            "Fer Servadou",      // Southwest France — Marcillac & Entraygues
            "Tannat",            // Madiran & Irouléguy — 'tannin' grape
            "Carménère",         // Chile (originally a Bordeaux variety)
            "Pinotage",          // South Africa — Pinot Noir × Cinsault
            "Touriga Nacional",  // Portugal's top red grape
            "Xinomavro",         // Northern Greece — 'acid-black'
            "Sagrantino",        // Umbria's most tannic native red
            "Lagrein",           // Alto Adige / South Tyrol red
        ],
    },
};

// ── Translations ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {
    en: {
        pageTitle:      'White or Red Wine? – Free Online Wine Tasting Quiz',
        siteTitleHtml:  '🍷 <span class="hl-white">White</span> or <span class="hl-red">Red</span> Wine?',
        headerTagline:  'The free wine tasting quiz',
        introH1Html:    '<span class="hl-white">White</span> or <span class="hl-red">Red</span> Wine?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Some are white wines. Some are red. Can you tell them apart?',
        questionOf:     'Question',
        questionOfSep:  'of',
        btnWhite:       '🥂 White Wine',
        btnRed:         '🍷 Red Wine',
        typeWhite:      'white wine',
        typeRed:        'red wine',
        correctFeedback: (name, type) => `✓ Right — ${name} is a ${type}!`,
        wrongFeedback:   (name, type) => `✗ Wrong — ${name} is actually a ${type}.`,
        outOf10:        'out of 10 correct',
        verdicts: [
            [10, 'Perfect! You\'re a true sommelier. 🏆'],
            [9,  'Excellent! Almost flawless.'],
            [7,  'Great! You clearly know your grapes.'],
            [5,  'Not bad — a few varieties tricked you.'],
            [3,  'Tricky, right? Give it another pour!'],
            [0,  'The grapes got you. Keep tasting!'],
        ],
        btnRestart:     '↺ Play again',
        aboutTitle:     'About White or Red Wine?',
        faq: [
            {
                q: 'What makes this quiz tricky?',
                a: 'Wine grape names come from many different languages and regions — Italian, French, German, Spanish, Greek and more. Without prior knowledge it\'s nearly impossible to tell from the name alone whether a grape produces a white or red wine. <em>Roussanne</em> sounds reddish in French, yet it\'s a white grape. <em>Grüner Veltliner</em> ("green" in German) is also white.',
            },
            {
                q: 'Are all the wine names real grape varieties?',
                a: 'Yes. Every name in the game is a genuine grape variety (<em>cépage</em>) used in real wine production worldwide — from Campanian <em>Falanghina</em> to Austrian <em>Zweigelt</em>.',
            },
            {
                q: 'How many questions are in the game?',
                a: 'Each round draws 10 random questions from a pool of 36 varieties (18 white + 18 red). The pool changes with the language — switch to German or French to discover a completely different set of grape names.',
            },
            {
                q: 'Which variety fools the most players?',
                a: '<em>Roussanne</em> (white) and <em>Blaufränkisch</em> (red) are among the most misguessed — their names strongly suggest the opposite colour. <em>Nero d\'Avola</em> ("black of Avola"), on the other hand, is almost always identified as red.',
            },
        ],
        moreQuizzes:    'More quizzes ↗',
        imprintLink:    'Imprint',
        privacyLink:    'Privacy Policy',
        madeBy:         'Made by',
    },

    de: {
        pageTitle:      'Weißwein oder Rotwein? – Kostenloses Weinprobe-Quiz',
        siteTitleHtml:  '🍷 <span class="hl-white">Weiß</span>- oder <span class="hl-red">Rot</span>wein?',
        headerTagline:  'Das kostenlose Weinprobe-Quiz',
        introH1Html:    '<span class="hl-white">Weiß</span>- oder <span class="hl-red">Rot</span>wein?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Manche sind Weißweine, manche Rotweine. Können Sie die Rebsorten unterscheiden?',
        questionOf:     'Frage',
        questionOfSep:  'von',
        btnWhite:       '🥂 Weißwein',
        btnRed:         '🍷 Rotwein',
        typeWhite:      'Weißwein',
        typeRed:        'Rotwein',
        correctFeedback: (name, type) => `✓ Richtig — ${name} ist ein ${type}!`,
        wrongFeedback:   (name, type) => `✗ Falsch — ${name} ist eigentlich ein ${type}.`,
        outOf10:        'von 10 richtig',
        verdicts: [
            [10, 'Perfekt! Sie sind ein wahrer Sommelier. 🏆'],
            [9,  'Ausgezeichnet! Fast makellos.'],
            [7,  'Gut gemacht! Sie kennen Ihre Rebsorten.'],
            [5,  'Nicht schlecht — ein paar Sorten haben Sie getäuscht.'],
            [3,  'Knifflig, oder? Noch eine Verkostung!'],
            [0,  'Die Trauben haben Sie erwischt. Weiter degustieren!'],
        ],
        btnRestart:     '↺ Nochmal spielen',
        aboutTitle:     'Über Weiß- oder Rotwein?',
        faq: [
            {
                q: 'Was macht dieses Quiz so schwierig?',
                a: 'Weinrebsorten tragen Namen aus vielen verschiedenen Sprachen und Regionen — Italienisch, Französisch, Deutsch, Spanisch, Griechisch und mehr. Ohne Vorwissen ist es fast unmöglich, allein am Namen zu erkennen, ob eine Sorte Weiß- oder Rotwein ergibt. <em>Roussanne</em> klingt auf Französisch rötlich — ist aber eine Weißweinsorte. <em>Grüner Veltliner</em> ist ebenfalls weiß.',
            },
            {
                q: 'Sind alle Weinnamen echte Rebsorten?',
                a: 'Ja. Jeder Name im Spiel ist eine echte Rebsorte, die weltweit im Weinbau verwendet wird — von der kampanischen <em>Falanghina</em> bis zum österreichischen <em>Zweigelt</em>.',
            },
            {
                q: 'Wie viele Fragen hat das Spiel?',
                a: 'Jede Runde zieht 10 zufällige Fragen aus einem Pool von 36 Rebsorten (18 weiß + 18 rot). Der Pool richtet sich nach der gewählten Sprache — auf Deutsch stehen vor allem deutsche, österreichische und elsässische Sorten im Mittelpunkt.',
            },
            {
                q: 'Welche Rebsorte täuscht die meisten Spieler?',
                a: '<em>Roussanne</em> (Weiß) und <em>Blaufränkisch</em> (Rot) werden am häufigsten falsch geraten — ihre Namen legen die entgegengesetzte Farbe nahe. <em>Nero d\'Avola</em> („Schwarzer von Avola") hingegen wird fast immer korrekt als Rotweinsorte erkannt.',
            },
        ],
        moreQuizzes:    'Mehr Quizze ↗',
        imprintLink:    'Impressum',
        privacyLink:    'Datenschutz',
        madeBy:         'Erstellt von',
    },

    fr: {
        pageTitle:      'Blanc ou Rouge\u00a0? – Quiz Dégustation de Vin Gratuit',
        siteTitleHtml:  '🍷 <span class="hl-white">Blanc</span> ou <span class="hl-red">Rouge</span>\u00a0?',
        headerTagline:  'Le quiz dégustation de vin gratuit',
        introH1Html:    '<span class="hl-white">Blanc</span> ou <span class="hl-red">Rouge</span>\u00a0?',
        introPara:      '<em>Gewürztraminer. Primitivo. Viognier. Tannat.</em><br>Certains sont des vins blancs. D\'autres sont rouges. Pouvez-vous les différencier\u00a0?',
        questionOf:     'Question',
        questionOfSep:  'sur',
        btnWhite:       '🥂 Vin Blanc',
        btnRed:         '🍷 Vin Rouge',
        typeWhite:      'vin blanc',
        typeRed:        'vin rouge',
        correctFeedback: (name, type) => `✓ Correct\u00a0— ${name} est un ${type}\u00a0!`,
        wrongFeedback:   (name, type) => `✗ Faux\u00a0— ${name} est en fait un ${type}.`,
        outOf10:        'sur 10 corrects',
        verdicts: [
            [10, 'Parfait\u00a0! Vous êtes un vrai sommelier. 🏆'],
            [9,  'Excellent\u00a0! Presque parfait.'],
            [7,  'Très bien\u00a0! Vous connaissez vos cépages.'],
            [5,  'Pas mal\u00a0— quelques cépages vous ont trompé.'],
            [3,  'Difficile, n\'est-ce pas\u00a0? Encore une dégustation\u00a0!'],
            [0,  'Les raisins vous ont eu\u00a0! Continuez à déguster.'],
        ],
        btnRestart:     '↺ Rejouer',
        aboutTitle:     'À propos de Blanc ou Rouge\u00a0?',
        faq: [
            {
                q: 'Qu\'est-ce qui rend ce quiz difficile\u00a0?',
                a: 'Les noms de cépages viennent de nombreuses langues et régions différentes — italien, français, allemand, espagnol, grec et plus encore. Sans connaissances préalables, il est presque impossible de deviner, rien qu\'au nom, si un cépage donne du vin blanc ou rouge. <em>Roussanne</em> semble rousse en français — et pourtant c\'est un cépage blanc. <em>Grüner Veltliner</em> (« vert » en allemand) est également blanc.',
            },
            {
                q: 'Tous les noms de vins sont-ils de vrais cépages\u00a0?',
                a: 'Oui. Chaque nom dans le jeu est un véritable cépage utilisé dans la production vinicole mondiale — de la <em>Falanghina</em> campanienne au <em>Zweigelt</em> autrichien.',
            },
            {
                q: 'Combien de questions y a-t-il dans le jeu\u00a0?',
                a: 'Chaque manche tire 10 questions aléatoires d\'un pool de 36 cépages (18 blancs + 18 rouges). Le pool change selon la langue choisie\u00a0— en français, il met en avant les cépages français, corses et du Sud-Ouest.',
            },
            {
                q: 'Quel cépage trompe le plus de joueurs\u00a0?',
                a: '<em>Roussanne</em> (blanc) et <em>Blaufränkisch</em> (rouge) sont parmi les plus mal devinés — leurs noms suggèrent fortement la couleur opposée. En revanche, <em>Nero d\'Avola</em> (« noir d\'Avola ») est presque toujours identifié comme rouge\u00a0!',
            },
        ],
        moreQuizzes:    'Plus de quiz ↗',
        imprintLink:    'Mentions légales',
        privacyLink:    'Politique de confidentialité',
        madeBy:         'Créé par',
    },
};
