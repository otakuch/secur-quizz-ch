// ═══════════════════════════════════════════════════════════════
// SECUR-QUIZ | Données Catastrophe / IMV
// Protocoles : START, METHANE, TRACER, PMA, ORCA Canton
// Format : chaque cas = { id, title, situation:{}, questions[] }
// ─────────────────────────────────────────────────────────────
// AJOUT D'UN CAS :
//   1. Copier un bloc existant (CAT-01 ou CAT-02)
//   2. Incrémenter l'id : CAT-03, CAT-04, etc.
//   3. Chaque cas a 15 questions (12 normales + 3 EVASAN en fin)
//   4. Pour les questions à choix multiples : ajouter multiSelect:true
//      et définir plusieurs choices avec correct:true
//   5. Sauvegarder — le moteur charge les cas aléatoirement
// ═══════════════════════════════════════════════════════════════

const CAT_CASES = [

    // ────────────────────────────────────────────────────────────────
    // CAT-01 : Accident de car scolaire — Route du Grand-Saint-Bernard
    // ────────────────────────────────────────────────────────────────
    {
      id: "CAT-01",
      title: "Carambolage car scolaire — Route du Grand-Saint-Bernard",
      situation: {
        meteo: "Neige légère, visibilité 200m, route verglacée",
        incident: "Car scolaire 52 passagers percuté par camion, sortie de route, falaise de 4m",
        victimes_estimees: "~40 victimes dont 35 enfants (8-14 ans)",
        time: "T0 + 3 min",
        description: "Vous êtes la première ambulance sur les lieux. Le car est couché sur le flanc. Des enfants sortent seuls, d'autres restent coincés. Fumée visible côté moteur.",
        visual: "🚌💥🏔️"
      },
      questions: [
        {
          phase: "ambulance",
          patient: null,
          text: "METHANE : vous êtes 1er arrivé. Première transmission à la centrale ?",
          choices: [
            { text: "M: Zone sécurisée non / E: Car scolaire vs camion, falaise / T: ~40 victimes / H: 1 ambulance / A: Route du GSB, km 12 / N: Triage START en cours / E: Renfort SMUR x3, pompiers, hélico", correct: true },
            { text: "Appeler le nombre exact de blessés avant transmission — précision avant tout", correct: false },
            { text: "Commencer les soins et transmettre METHANE plus tard quand on a une idée précise", correct: false }
          ],
          feedback: {
            correct: "✅ METHANE = outil de transmission IMV. La précision n'est pas possible à T0. L'estimation rapide et la demande de renforts adaptés sont plus importantes que l'exactitude. La centrale a besoin des infos pour déclencher le plan ORCA (Suisse).",
            incorrect: "❌ Attendre d'avoir toutes les informations = retarder les renforts. METHANE se transmet incomplet si nécessaire — le 'H' (ressources) et le 'E' (secours demandés) sont critiques pour déclencher le plan ORCA.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          multiSelect: true,
          text: "Zone de danger : fumée au moteur, risque incendie. Parmi ces actions, lesquelles sont CORRECTES pour sécuriser la zone ? (plusieurs réponses possibles)",
          choices: [
            { text: "Établir 3 zones concentriques (chaude/tiède/froide) et baliser le périmètre", correct: true },
            { text: "Reculer toutes les victimes valides à >50m du véhicule incendié", correct: true },
            { text: "Ne pas entrer dans le car sans équipement de protection incendie — attendre les pompiers pour la zone chaude", correct: true },
            { text: "Entrer immédiatement dans le car pour traiter les victimes — l'urgence prime sur la sécurité personnelle", correct: false },
            { text: "Une zone de sécurité de 10m suffit pour une fumée légère sans flamme visible", correct: false }
          ],
          feedback: {
            correct: "Correct. Les 3 zones IMV, l'éloignement des victimes valides et le respect de la zone chaude sont les trois piliers de la sécurisation. Créer de nouvelles victimes dans l'équipe est la pire erreur.",
            incorrect: "Incomplet ou incorrect. Sur un véhicule avec fumée moteur, le risque d'incendie et d'explosion est réel. Les 3 zones, l'éloignement à >50m et l'attente des pompiers pour la zone chaude sont non-négociables.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Vous devez trier 38 victimes seul pendant 8 min avant renfort. Quel algorithme utilisez-vous ?",
          choices: [
            { text: "Triage START : Marche → Rouge/Jaune/Vert/Noir. Pas de soin pendant le triage sauf ouverture des voies aériennes", correct: true },
            { text: "Trier par ordre de découverte des victimes, traiter chaque blessé complètement avant de passer au suivant", correct: false },
            { text: "Trier uniquement les enfants d'abord, puis les adultes", correct: false }
          ],
          feedback: {
            correct: "✅ START (Simple Triage And Rapid Treatment) : 1) Victimes qui marchent = VERT. Sur les autres : 2) Respiration ? 3) FR >30 = ROUGE. 4) Pouls radial ? 5) État de conscience ? Seule manœuvre autorisée = sublimaze voies aériennes. Temps par victime : <30 secondes.",
            incorrect: "❌ Traiter complètement chaque victime en IMV = erreur stratégique. On ne soigne pas pendant le triage START. L'âge ne modifie pas le triage START (même algorithme enfants/adultes).",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 140, spo2: null, bp: null, rr: 36, gcs: 10, ecg: null, state: "obnubilé" },
          text: "Victime A : enfant 10 ans, FR 36/min, pouls radial filant, GCS 10. Triage START ?",
          choices: [
            { text: "ROUGE — FR >30 + pouls filant + GCS altéré = détresse vitale immédiate", correct: true },
            { text: "JAUNE — conscient, peut attendre", correct: false },
            { text: "NOIR — trop instable pour survie", correct: false }
          ],
          feedback: {
            correct: "✅ ROUGE = urgence absolue. FR >30 suffit pour classer ROUGE en START. Ici : FR 36 + pouls filant + GCS 10 = triple critère rouge. Balise rouge posée, victime laissée sur place en attendant la phase soins.",
            incorrect: "❌ JAUNE = urgence relative (stable, peut attendre). NOIR = décédé ou survie improbable. FR 36/min seule classe déjà en ROUGE dans le triage START.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: null, spo2: null, bp: null, rr: 0, gcs: 3, ecg: null, state: "apnée" },
          text: "Victime B : adulte, apnée après ouverture des voies aériennes. Triage START ?",
          choices: [
            { text: "NOIR — victime en apnée malgré libération des voies aériennes en IMV = non-prioritaire", correct: true },
            { text: "ROUGE — commencer RCP immédiate", correct: false },
            { text: "JAUNE — inconscient mais peut se révéler", correct: false }
          ],
          feedback: {
            correct: "✅ En IMV avec ressources limitées : victime apnéique malgré libération des VAS = NOIR. La RCP monopolise 2 secouristes pour 1 victime à pronostic incertain quand d'autres ROUGE peuvent être sauvés. Décision difficile mais éthiquement défendable.",
            incorrect: "❌ En IMV, la RCP immédiate sur chaque arrêt est impossible — elle utiliserait toutes les ressources pour une victime. Le triage START classe cette victime NOIR. Cette décision sera réévaluée si renforts suffisants.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 88, spo2: null, bp: null, rr: 16, gcs: 15, ecg: null, state: "conscient" },
          text: "30 enfants marchent et pleurent. Triage ?",
          choices: [
            { text: "VERT — victimes ambulatoires en IMV START. Les diriger vers zone froide sans examen individuel complet", correct: true },
            { text: "Examiner chaque enfant individuellement malgré le nombre — les enfants peuvent masquer des lésions", correct: false },
            { text: "Jaune — les enfants sont fragiles, prudence systématique", correct: false }
          ],
          feedback: {
            correct: "✅ Marchent = VERT dans le triage START. Zone froide, comptage, surveil global. La contre-intuitivité de ne pas s'arrêter sur chaque enfant est réelle mais nécessaire pour sauver les ROUGE. Un 2ème triage (SIEVE) sera fait plus tard.",
            incorrect: "❌ Examiner 30 enfants individuellement = 30-45 minutes pendant lesquelles les ROUGE ne sont pas traités. Le triage START est conçu précisément pour cette situation.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Le PMA (Poste Médical Avancé) doit être établi. Où le positionnez-vous ?",
          choices: [
            { text: "Zone tiède, vent dans le dos par rapport au véhicule (fumée), accessible aux ambulances, signal visible, à l'abri des intempéries si possible", correct: true },
            { text: "Le plus près du car pour réduire les distances de transport des victimes", correct: false },
            { text: "Sur la route principale pour être visible des renforts", correct: false }
          ],
          feedback: {
            correct: "✅ PMA : zone tiède (ni dans le danger, ni trop loin), protection du vent toxique, accès ambulances pour évacuation, signalisation (drapeau blanc-rouge). La proximité du danger est un risque, la route principale est dangereuse pour les secouristes.",
            incorrect: "❌ PMA trop proche = exposition au danger (fumée, incendie). PMA sur route = risque de sur-accident. La position doit équilibrer accès et sécurité.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "La gendarmerie veut passer la zone pour récupérer des témoins. Que faites-vous ?",
          choices: [
            { text: "Coordonner avec le responsable gendarmerie : accès zone tiède autorisé, zone chaude réservée pompiers et SMUR. Désigner un point de rencontre gendarmerie en zone froide.", correct: true },
            { text: "Interdire tout accès à la zone — les secouristes sont seuls responsables", correct: false },
            { text: "Laisser passer la gendarmerie librement, chacun fait son travail", correct: false }
          ],
          feedback: {
            correct: "✅ Gestion multi-agences : la police, pompiers, SMUR et ambulanciers ont des rôles complémentaires. Coordination et délimitation des zones selon compétences. Un officier de liaison inter-services améliore l'efficacité.",
            incorrect: "❌ Interdire tout accès perturbe la coordination. Laisser passer sans coordination crée la confusion. La gestion de l'espace IMV nécessite une coordination active.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { name: "Enfant A", hr: 134, spo2: 88, bp: "82/48", rr: 38, gcs: 9, ecg: "sinusal_tachy", state: "semi-conscient" },
          multiSelect: true,
          text: "Premier ROUGE au PMA : enfant 10 ans, FR 38, SpO₂ 88%, TA 82/48, GCS 9. Quelles sont vos TROIS premières actions ? (plusieurs réponses possibles)",
          choices: [
            { text: "Ouvrir une fiche TRACER et identifier le patient (bracelet couleur rouge)", correct: true },
            { text: "O₂ 15L/min masque HC + scope cardiaque + monitoring SpO₂ continu", correct: true },
            { text: "Poser 2 VVP larges calibre (≥16G) et prélever un bilan sanguin si disponible", correct: true },
            { text: "Commencer la réanimation sans fiche TRACER — la paperasse peut attendre", correct: false },
            { text: "Attendre le médecin PMA avant d'initier tout soin — hors compétence IAS3", correct: false }
          ],
          feedback: {
            correct: "Excellent. TRACER + O₂/monitoring + VVP sont les 3 piliers d'accueil au PMA. La fiche TRACER est une exigence légalo-médicale — elle permet la traçabilité des soins et l'évacuation coordonnée.",
            incorrect: "Incomplet. Au PMA, toute action doit être tracée, l'O₂ et le monitoring sont immédiats, et la VVP prépare toute thérapeutique médicale. Ces 3 actions sont simultanées, pas séquentielles.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 144, spo2: 88, bp: "80/46", rr: 38, gcs: 9, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient A" },
          text: "Enfant A — choc hémorragique suspecté (trauma abdominal, abdomen tendu). Remplissage vasculaire ?",
          choices: [
            { text: "NaCl 0.9% ou Ringer lactate 10-20 mL/kg en bolus, réévaluation après chaque bolus, objectif TA systolique >80 mmHg sur trauma hémorragique", correct: true },
            { text: "500 mL rapidement sans réévaluation pour restaurer la volémie vite", correct: false },
            { text: "Éviter tout remplissage — risque de dilution des facteurs coagulation", correct: false }
          ],
          feedback: {
            correct: "✅ Réanimation permissive : TA systolique cible 80-90 mmHg sur trauma hémorragique non contrôlé (éviter HTA qui aggrave le saignement). Bolus 10-20 mL/kg avec réévaluation. Chez l'enfant : 10 mL/kg pour limiter surcharge.",
            incorrect: "❌ 500 mL d'emblée sans réévaluation = risque d'hémodilution et d'aggravation du saignement (hypertension artérielle sur trauma hémorragique non contrôlé). Pas de remplissage du tout = inadéquat sur TA 80 mmHg.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 118, spo2: 92, bp: "88/56", rr: 32, gcs: 10, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient B — Adulte, brûlures 35%" },
          text: "Patient B : adulte 35 ans, brûlures 35% (abdomen, cuisses), conscient. Soins brûlés au PMA ?",
          choices: [
            { text: "Refroidissement eau 15°C localisé <20 min, pansement non adhérent, ne pas percer les phlyctènes, VVP + remplissage Parkland, antalgique, orientation CHUV brûlés", correct: true },
            { text: "Refroidir avec la neige disponible sur place — eau fraiche naturelle idéale", correct: false },
            { text: "Percer les phlyctènes pour réduire les tensions cutanées", correct: false }
          ],
          feedback: {
            correct: "✅ Protocole BSC brûlés PMA : eau 15°C, pas neige (trop froide <5°C), <20 min (hypothermie sur 35%!), pansement non-adhérent, phlyctènes intacts (protection contre infection), formule Parkland VVP. Orientation centre brûlés CHUV obligatoire.",
            incorrect: "❌ La neige (<5°C) aggrave les lésions par vasoconstriction et risque hypothermie sur 35% SCB. Percer les phlyctènes en urgence pré-hospitalière augmente le risque infectieux sans bénéfice.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 68, spo2: 97, bp: "118/74", rr: 14, gcs: 15, ecg: "sinusal", state: "conscient", name: "Patient C — Vert, choc émotionnel" },
          text: "Patient C : adolescente 14 ans, physiquement indemne, mais état de panique, hyperventilation, pleurs incontrôlables. Prise en charge ?",
          choices: [
            { text: "Zone psychologique (cellule de crise), soutien UPCPP ou bénévoles formés, contact physique si consenti, respiration guidée, informer sur les proches", correct: true },
            { text: "Sédation légère (midazolam 2mg) pour calmer la crise — efficacité immédiate", correct: false },
            { text: "Ignorer pour l'instant — les ROUGE sont prioritaires, elle est VERTE", correct: false }
          ],
          feedback: {
            correct: "✅ Les VERT ont besoin de soutien psychologique structuré. L'hyperventilation peut se compliquer (tétanie, malaise). Zone psy dédiée, présence humaine, respiration guidée (4-7-8). Appel UPCPP (Unité de crise) si disponible.",
            incorrect: "❌ Sédation d'un VERT sans indication médicale = surdosage de ressources et risque iatrogène. Ignorer les VERT génère des complications psychologiques (PTSD) et peut évoluer vers une crise ROUGE (malaise vagal).",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 88, spo2: 95, bp: "108/68", rr: 18, gcs: 14, ecg: "sinusal", state: "conscient", name: "Patient A — 2ème évaluation" },
          text: "Réévaluation Patient A (enfant) après 15 min : amélioration — TA 108/68, HR 88. Comment reclassez-vous ce patient ?",
          choices: [
            { text: "Réévaluation triage : JAUNE si stable, aucune urgence vitale immédiate — modifier la fiche TRACER et réorganiser l'évacuation", correct: true },
            { text: "Garder ROUGE — le triage initial ne change jamais", correct: false },
            { text: "Reclasser VERT si TA normalisée — évacuation non urgente", correct: false }
          ],
          feedback: {
            correct: "✅ Le triage est dynamique en IMV. Un patient stabilisé peut être reclassé. ROUGE → JAUNE = optimisation des ressources. La fiche TRACER documente l'évolution. L'évacuation est réorganisée selon la nouvelle priorité.",
            incorrect: "❌ Le triage fixe est une erreur. Un patient qui s'améliore libère des ressources ROUGE pour d'autres. Reclasser VERT trop tôt est prématuré — l'enfant a un trauma abdominal non encore exploré.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Hélicoptère REGA disponible pour 1 évacuation. Qui priorisez-vous parmi : Enfant A (JAUNE, abdomen), Patient B (ROUGE, brûlures 35%), adolescente C (VERT) ?",
          choices: [
            { text: "Patient B (ROUGE, brûlures 35%) : urgence absolue, nécessite centre brûlés CHUV, stabilité relative permettant transport héliporté", correct: true },
            { text: "Enfant A : les enfants sont toujours prioritaires en évacuation", correct: false },
            { text: "Adolescente C : la plus légère, transport plus facile en hélico", correct: false }
          ],
          feedback: {
            correct: "✅ L'évacuation héliportée est réservée au patient le plus grave nécessitant un centre spécialisé. Patient B = ROUGE + brûlures >20% + nécessité centre brûlés. L'hélico permet atteindre CHUV en 20 min vs 2h de route.",
            incorrect: "❌ L'âge ne détermine pas la priorité d'évacuation. La criticité clinique + la nécessité d'un centre spécialisé + la fenêtre thérapeutique orientent le choix. L'adolescente VERTE n'a pas d'indication héliportée.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          multiSelect: true,
          text: "Fin d'intervention. Le responsable SMUR demande votre bilan IMV pour le rapport ORCA. Quels éléments sont OBLIGATOIRES dans ce bilan ? (plusieurs réponses possibles)",
          choices: [
            { text: "Nombre total de victimes et répartition triage (ROUGE / JAUNE / VERT / NOIR)", correct: true },
            { text: "Soins administrés au PMA par catégorie et évacuations avec destinations hospitalières", correct: true },
            { text: "Heure de déclenchement du plan, ressources engagées et heure de levée du dispositif", correct: true },
            { text: "Uniquement les noms et prénoms des victimes hospitalisées — les autres ne comptent pas", correct: false },
            { text: "Les erreurs de triage — usage interne uniquement, à exclure du rapport officiel", correct: false }
          ],
          feedback: {
            correct: "Complet. Le rapport ORCA exige : répartition triage, soins et évacuations, chronologie et ressources. C'est un document médico-légal transmis au Canton. Les erreurs font l'objet d'un RETEX séparé.",
            incorrect: "Incomplet. Le bilan ORCA est un document structuré exigé par les autorités cantonales. Il comprend la chronologie, les effectifs victimes par triage, les soins et les évacuations.",
            naca: null
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAT-02 : Explosion de gaz — Immeuble résidentiel, Bern
    // ────────────────────────────────────────────────────────────────
    {
      id: "CAT-02",
      title: "Explosion de gaz — Immeuble 4 étages, Berne",
      situation: {
        meteo: "Nuit, 3°C, pluie fine",
        incident: "Explosion gaz naturel rez-de-chaussée, effondrement partiel escaliers central",
        victimes_estimees: "~25 victimes, 12 personnes encore dans le bâtiment",
        time: "T0 + 5 min",
        description: "Immeuble de 20 appartements. Escalier central effondré, accès impossible aux étages supérieurs. Odeur de gaz persistante. Certains résidents se jettent depuis les fenêtres (2ème étage).",
        visual: "🏢💥🔥"
      },
      questions: [
        {
          phase: "ambulance",
          patient: null,
          multiSelect: true,
          text: "Odeur de gaz persistante dans un immeuble. Vous arrivez en premier. Lesquelles de ces actions sont CORRECTES avant toute intervention ? (plusieurs réponses possibles)",
          choices: [
            { text: "Ne pas entrer dans le bâtiment — risque d'explosion par étincelle ou allumage accidentel", correct: true },
            { text: "Couper le courant électrique depuis le tableau extérieur si accessible et sécurisé", correct: true },
            { text: "Éloigner toutes les personnes à >100m et établir un périmètre de sécurité", correct: true },
            { text: "Utiliser la radio dans la zone pour alerter la centrale — l'urgence prime sur tout", correct: false },
            { text: "Entrer rapidement pour extraire les victimes — l'odeur de gaz se disperse vite à l'air libre", correct: false }
          ],
          feedback: {
            correct: "Exact. Ne pas entrer, couper le courant depuis l'extérieur et éloigner à >100m sont les 3 réflexes obligatoires. La radio dans une zone de gaz peut déclencher l'explosion par étincelle électronique — utiliser le téléphone depuis l'extérieur.",
            incorrect: "Incorrect ou insuffisant. La radio dans la zone de gaz est une cause fréquente d'explosion. Entrer sans équipement spécialisé est interdit. Attendre les pompiers HAZCHEM avant toute pénétration.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: null, state: "arrêt" },
          text: "Victime extraite par pompiers : homme adulte, brûlures >70% surface, GCS 3, apnée, pas de pouls. Triage ?",
          choices: [
            { text: "NOIR — brûlures >70%, apnée sans réponse = non survivable en contexte IMV. Pas de RCP.", correct: true },
            { text: "ROUGE — commencer RCP, brûlures ne contre-indiquent pas la réanimation", correct: false },
            { text: "JAUNE — attendre SMUR pour décision médicale", correct: false }
          ],
          feedback: {
            correct: "✅ Brûlures >70% de la surface corporelle + ACR = pronostic quasi-nul même en milieu hospitalier spécialisé. En IMV avec ressources limitées, la RCP est contre-indiquée. NOIR = décision médicale validée par triage IMV.",
            incorrect: "❌ En IMV, la RCP sur une victime à mortalité >98% monopolise 2 secouristes et des ressources pour une chance quasi-nulle. La règle IMV est : utiliser les ressources où elles peuvent changer le pronostic.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { hr: 118, spo2: 90, bp: "128/82", rr: 24, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
          text: "Victime sautée du 2ème étage (~5 mètres) : femme 32 ans, consciente, douleur cheville et dos. Triage et suspicion lésionnelle ?",
          choices: [
            { text: "JAUNE — trauma mécanisme hauteur >4m, suspicion rachis thoracolombaire, stabilisation cervicale, transport médicalisé. FR/FC/TA/GCS normaux.", correct: true },
            { text: "VERT — elle marche, trauma mineur", correct: false },
            { text: "ROUGE — tout trauma de hauteur = rouge par défaut", correct: false }
          ],
          feedback: {
            correct: "✅ Chute >4m = mécanisme à énergie significative. Douleur dorsale = suspicion fracture rachidienne jusqu'à preuve du contraire. JAUNE : stable mais nécessite transport médicalisé et immobilisation. Pas VERT malgré déambulation (fractures de Peterson non évoluées).",
            incorrect: "❌ Marcher après une chute de 5m ne garantit pas l'absence de fracture rachidienne instable. ROUGE requiert une instabilité vitale — ici absente. JAUNE est le triage adapté.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "8 personnes sont encore aux étages supérieurs, criantes aux fenêtres. Les pompiers sont en cours d'installation d'une grande échelle. Que transmettez-vous au responsable PMA ?",
          choices: [
            { text: "Nombre estimé, étages concernés, fenêtres actives, état apparent (panique vs blessés), accès pompiers en cours, ETA grande échelle", correct: true },
            { text: "Attendre que les pompiers aient sorti tout le monde avant de transmettre — pas d'info partielle", correct: false },
            { text: "Leur crier de sauter — la grande échelle prendra trop de temps", correct: false }
          ],
          feedback: {
            correct: "✅ Transmission continue et progressive au PMA permet l'anticipation : 8 victimes potentielles supplémentaires → ressources ajustées. L'information partielle est toujours meilleure que l'absence d'information.",
            incorrect: "❌ Encourager des personnes à sauter depuis le 2ème ou 3ème étage = lésions graves prévisibles. L'info partielle transmise est plus utile qu'une info retardée parfaite.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: { name: "Victime CO", hr: 108, spo2: 88, bp: "138/88", rr: 20, gcs: 14, ecg: "sinusal_tachy", state: "céphalée sévère" },
          multiSelect: true,
          text: "Victime extraite : homme 58 ans, intoxication CO confirmée. Lesquelles de ces actions sont CORRECTES ? (plusieurs réponses possibles)",
          choices: [
            { text: "O₂ 100% masque HC 15L/min en continu — même si SpO₂ affiche 88% (le CO fausse l'oxymétrie)", correct: true },
            { text: "Scope cardiaque et ECG 12 dérivations si disponible (risque de troubles du rythme sur CO)", correct: true },
            { text: "VVP + signalement au centre de régulation pour caisson hyperbare si COHb >25% ou signes neuro", correct: true },
            { text: "O₂ lunettes nasales 2L/min — suffisant pour une intoxication légère à modérée", correct: false },
            { text: "Ventiler au BAVU immédiatement car SpO₂ 88% indique une insuffisance respiratoire sévère", correct: false }
          ],
          feedback: {
            correct: "Correct. Sur intoxication CO : O₂ 100% HC est le traitement de base même si le SpO₂ paraît normal — le capteur ne distingue pas HbO₂ et HbCO. Le scope détecte les arythmies. Le caisson hyperbare est indiqué si COHb >25%.",
            incorrect: "Incomplet ou incorrect. L'oxymètre de pouls ne distingue pas HbCO — le SpO₂ affiché est faux sur intoxication CO. O₂ HC 15L/min est le traitement de choix. Le BAVU n'est pas indiqué si le patient ventile spontanément.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Une journaliste et un caméraman franchissent le cordon pour filmer. Que faites-vous ?",
          choices: [
            { text: "Les rediriger fermement vers la zone presse en zone froide, sans violence. Informer le responsable sécurité.", correct: true },
            { text: "Les laisser filmer — liberté de la presse, et ils peuvent documenter les secours", correct: false },
            { text: "Appeler immédiatement la police pour arrestation", correct: false }
          ],
          feedback: {
            correct: "✅ Zone tiède = accès restreint pour des raisons de sécurité et de soins. La presse a accès à la zone froide. Redirection ferme sans violence. Le responsable sécurité gère les relations médias.",
            incorrect: "❌ Les médias dans la zone tiède = risque sécurité + perturbation des soins + violation confidentialité des victimes filmées. L'arrestation est disproportionnée pour une redirection ferme.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 148, spo2: 86, bp: "78/44", rr: 36, gcs: 9, ecg: "sinusal_tachy", state: "obnubilé", name: "Patient A — ROUGE, brûlures 25% + CO" },
          text: "PMA. Patient A : ROUGE, brûlures 25%, CO suspecté, TA 78, FR 36. Simultanément, Patient B (ROUGE, pneumothorax) vient d'arriver. Vous êtes seul au poste de soins. Que faites-vous ?",
          choices: [
            { text: "Patient A : O₂ HC en cours, VVP posée, stabilisé partiellement → aide-ambulancier prend le relais. Vous évaluez Patient B (pneumothorax = risque plus immédiat). Appeler renfort.", correct: true },
            { text: "Finir complètement Patient A avant de toucher Patient B", correct: false },
            { text: "Évaluer les 2 simultanément sans priorisation", correct: false }
          ],
          feedback: {
            correct: "✅ Priorisation dynamique au sein des ROUGE : le pneumothorax sous tension évolue en minutes vers l'arrêt cardiaque. Patient A partiellement stabilisé peut être délégué à l'aide-ambulancier le temps d'évaluer Patient B.",
            incorrect: "❌ Finir complètement un patient avant de voir l'autre ROUGE peut laisser mourir Patient B d'un pneumothorax sous tension. L'évaluation simultanée sans priorisation est inefficace.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 56, spo2: 84, bp: "86/60", rr: 10, gcs: 12, ecg: "sinusal_brady", state: "obnubilé", name: "Patient B — Pneumothorax sous tension" },
          text: "Patient B : trachée déviée à droite, silence auscultatoire gauche, TA chute. Diagnostic et transmission ?",
          choices: [
            { text: "Pneumothorax sous tension — urgence vitale absolue. Transmission SMUR immédiate pour exsufflation à l'aiguille (2ème EIC, ligne médioclaviculaire gauche). Hors compétence IAS 3.", correct: true },
            { text: "Commencer vous-même l'exsufflation à l'aiguille — urgence vitale justifie l'acte", correct: false },
            { text: "Attendre la radio thorax pour confirmer avant d'appeler", correct: false }
          ],
          feedback: {
            correct: "✅ PTx sous tension : trachée déviée + silence auscultatoire + choc = diagnostic clinique, pas radiologique. Délai d'exsufflation = mort. L'IAS 3 reconnaît, signale, prépare matériel. L'acte est médical. Transmission SMUR en urgence absolue.",
            incorrect: "❌ L'exsufflation à l'aiguille sans formation spécifique et délégation = acte illégal et risque iatrogène. La radio est inutile — le diagnostic est clinique et l'urgence ne permet pas d'attendre.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 102, spo2: 92, bp: "108/68", rr: 22, gcs: 14, ecg: "sinusal", state: "conscient", name: "Patient C — JAUNE, fracture rachis suspectée" },
          text: "Patient C (chute 5m, douleur dos) : immobilisée, mais veut retirer le collier cervical 'trop inconfortable'. Que faites-vous ?",
          choices: [
            { text: "Expliquer le risque de lésion médullaire irréversible, proposer ajustement du collier si mal positionné, maintenir l'immobilisation jusqu'à confirmation radiologique", correct: true },
            { text: "Retirer le collier : elle est consciente et le confort est important", correct: false },
            { text: "Attacher le collier plus serré pour qu'elle ne puisse pas le retirer", correct: false }
          ],
          feedback: {
            correct: "✅ La fracture rachidienne instable peut être asymptomatique au repos. L'inconfort du collier vs la paralysie permanente = explication efficace. Vérifier l'ajustement du collier (taille, position) peut améliorer le confort sans compromettre l'immobilisation.",
            incorrect: "❌ Retirer le collier sur suspicion rachidienne = risque de paraplégie si fracture instable. Serrer plus fort = douleur et pression vasculaire. L'éducation et l'ajustement sont la réponse.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: { hr: 78, spo2: 97, bp: "118/74", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient", name: "Patient D — VERT, intoxication CO légère" },
          text: "Patient D : intoxication CO légère, traité par O₂ HC, céphalée résiduelle. Il vous demande si sa femme (non retrouvée) est dans la liste des victimes. Que répondez-vous ?",
          choices: [
            { text: "Exprimer de l'empathie, lui expliquer qu'un responsable de l'identification des victimes gère cette information, lui donner un contact (police/cellule psychologique)", correct: true },
            { text: "Lui dire qu'elle n'est pas dans la liste des blessés — pour le rassurer", correct: false },
            { text: "Ignorer la question, concentrez-vous sur ses soins", correct: false }
          ],
          feedback: {
            correct: "✅ L'IAS 3 ne gère pas l'identification des victimes — c'est la police et la cellule de crise. Mentir 'pour rassurer' peut causer un choc ultérieur. L'orientation vers le bon interlocuteur est professionnelle et honnête.",
            incorrect: "❌ Inventer une information (la femme n'est pas blessée) est un mensonge avec des conséquences émotionnelles sévères si faux. Ignorer la question d'un patient anxieux nuit à la relation thérapeutique.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Fin d'intervention. Un des secouristes de votre équipe est très affecté (il a vu un enfant décédé). Comment gérez-vous cela ?",
          choices: [
            { text: "Valider ses émotions en privé, l'exclure temporairement des soins si nécessaire, informer le responsable pour débriefing psychologique (CIST), ne pas minimiser", correct: true },
            { text: "Lui dire 'c'est le boulot, pas le temps de craquer ici' et continuer", correct: false },
            { text: "Garder le secret pour protéger sa réputation professionnelle", correct: false }
          ],
          feedback: {
            correct: "✅ La santé mentale des secouristes est une priorité opérationnelle. Un secouriste en état de choc est un risque pour lui-même et les patients. CIST (Critical Incident Stress Team) ou debriefing post-IMV sont des ressources formelles.",
            incorrect: "❌ Minimiser le stress post-traumatique d'un collègue augmente le risque de PTSD et de burn-out. Le 'ça passe' n'est pas une stratégie de gestion du stress post-critique.",
            naca: null
          }
        },
        {
          phase: "ambulance",
          patient: null,
          text: "Bilan à T0+30min : 18 victimes triées (4 ROUGE, 7 JAUNE, 5 VERT, 2 NOIR). 3 ambulances disponibles. Ordre d'évacuation ?",
          choices: [
            { text: "ROUGE en premier (2 par ambulance si stable, sinon 1 + SMUR), puis JAUNE, VERT derniers. NOIR restent sur zone sous surveillance.", correct: true },
            { text: "Charger le maximum de patients par ambulance quelle que soit la priorité", correct: false },
            { text: "Évacuer les VERT d'abord pour libérer de l'espace au PMA", correct: false }
          ],
          feedback: {
            correct: "✅ Ordre d'évacuation IMV : ROUGE > JAUNE > VERT. Un ROUGE peut partager une ambulance avec un ROUGE stable. Les NOIR restent au PMA — ils ne sont pas abandonnés mais ne sont pas prioritarisés pour évacuation.",
            incorrect: "❌ Charger sans tri = désorganisation et risque de délaisser les plus graves. Évacuer les VERT d'abord = erreur stratégique — les hôpitaux sont alertés pour les ROUGE, pas les VERT.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          multiSelect: true,
          text: "L'hôpital récepteur vous contacte avant l'arrivée du premier ROUGE. Quels éléments DEVEZ-VOUS transmettre ? (plusieurs réponses possibles)",
          choices: [
            { text: "ETA estimé (temps de transport restant jusqu'à l'hôpital)", correct: true },
            { text: "Nombre de patients par catégorie triage attendus (ROUGE / JAUNE / VERT)", correct: true },
            { text: "Mécanisme principal et types de lésions dominantes (explosion, CO, trauma, brûlures)", correct: true },
            { text: "Uniquement le nombre total — les détails s'évaluent à l'arrivée du patient", correct: false },
            { text: "Ne rien transmettre — la transmission hôpital est exclusivement du ressort du médecin SMUR", correct: false }
          ],
          feedback: {
            correct: "Parfait. La pré-alerte hospitalière (ETA + triage + mécanisme) permet d'activer : salle de déchocage, chirurgien, brûlologue, caisson hyperbare. Sans cette info, l'accueil est réactif au lieu d'être proactif.",
            incorrect: "Insuffisant. L'IAS3 en transfert transmet toujours l'ETA, le bilan triage et le mécanisme. Ce n'est pas réservé au SMUR. Le délai de préparation hospitalière coûte des vies.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Le plan hospitalier est saturé : tous les ROUGE sont dirigés vers l'HUG uniquement. Le responsable PMA décide d'envoyer un ROUGE vers l'hôpital de campagne (distance supérieure). Que pensez-vous de cette décision ?",
          choices: [
            { text: "Décision du médecin responsable PMA à respecter. L'hôpital de campagne peut être plus adapté sur certains profils. Soutenir la décision et préparer le transport.", correct: true },
            { text: "Refuser catégoriquement : les ROUGE vont à l'hôpital le plus proche, toujours", correct: false },
            { text: "Appeler l'HUG vous-même pour contredire la décision du responsable PMA", correct: false }
          ],
          feedback: {
            correct: "✅ En IMV, le médecin responsable PMA coordonne les évacuations selon la capacité hospitalière globale. Surcharger un seul hôpital = mortalité accrue pour tous. La hiérarchie de commandement IMV doit être respectée.",
            incorrect: "❌ La règle 'hôpital le plus proche' s'applique en intervention normale. En IMV avec plan hospitalier activé, c'est la régulation globale qui décide. Contredire le responsable PMA crée une confusion de commandement.",
            naca: null
          }
        },
        {
          phase: "pma",
          patient: null,
          text: "Rapport d'intervention : vous devez documenter une décision de triage NOIR sur une victime qui avait encore un pouls faible lors du triage. Comment formulez-vous cela ?",
          choices: [
            { text: "Documenter factuellement : heure, pouls estimé, FR, état de conscience, ressources disponibles à l'instant, classification IMV selon protocole START, décision collégiale si possible", correct: true },
            { text: "Ne pas documenter la décision NOIR — risque légal pour l'équipe", correct: false },
            { text: "Indiquer que la victime était déjà décédée à l'arrivée", correct: false }
          ],
          feedback: {
            correct: "✅ La documentation factuelle et honnête des décisions difficiles est une obligation éthique et légale. Le protocole IMV (START) justifie la décision. La traçabilité honnête protège légalement l'équipe.",
            incorrect: "❌ Ne pas documenter ou falsifier un document médical est une faute grave. La documentation honnête protège l'équipe juridiquement en démontrant que la décision était basée sur un protocole reconnu.",
            naca: null
          }
        }
      ]
    }

    // Les 10 autres scénarios catastrophe seraient CAT-03 à CAT-12
    // Pour cette version, les cas sont randomisés parmi les disponibles

  ];
