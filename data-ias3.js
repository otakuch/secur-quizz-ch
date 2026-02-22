// ═══════════════════════════════════════════════════════════════
// SECUR-QUIZ | Données IAS 3 — Scénarios cliniques individuels
// Protocoles : SRC 2021, ABCDE, NACA, BSC Genève
// Format : chaque cas = { id, title, context, questions[] }
// ─────────────────────────────────────────────────────────────
// AJOUT D'UN CAS :
//   1. Copier un bloc { id, title, context, questions: [...] }
//   2. Incrémenter l'id : IAS3-09, IAS3-10, etc.
//   3. Chaque case a 5 questions, chaque question a 3 choix (1 correct)
//   4. Sauvegarder — le moteur charge tous les cas aléatoirement
// ═══════════════════════════════════════════════════════════════

const IAS3_CASES = [

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-01 : Douleur thoracique — SCA
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-01",
      title: "Douleur thoracique — Homme 58 ans",
      context: "Rue de Berne, Genève. 08h42. Passant effondré sur un banc. Douleur thoracique irradiant vers le bras gauche depuis 25 minutes, diaphorèse profuse.",
      questions: [
        {
          patient: { hr: 98, spo2: 93, bp: "162/98", rr: 22, gcs: 15, ecg: "sinusal_tachy", state: "conscient" },
          text: "Approche initiale : l'homme est conscient, pâle, sudorifère. Quelle est votre première série d'actions ?",
          choices: [
            { text: "Position demi-assise, O₂ 15L/min masque HC, scope cardiaque, VVP", correct: true },
            { text: "Décubitus dorsal strict, aspirine 500mg PO, appel SMUR", correct: false },
            { text: "Attendre le médecin régulateur avant toute intervention", correct: false }
          ],
          feedback: {
            correct: "✅ Approche ABCDE correcte. Airway libre, Breathing optimisé par O₂ HC, Circulation évaluée par scope. La demi-assise réduit la précharge et la dyspnée. La VVP prépare la voie thérapeutique pour le médecin.",
            incorrect: "❌ L'approche ABCDE s'impose d'emblée. O₂ haut débit (BPCO absente ici), monitoring continu et VVP sont la base avant toute médication. Ne jamais attendre passivement.",
            naca: "NACA IV – Urgence vitale potentielle (SCA probable)"
          }
        },
        {
          patient: { hr: 104, spo2: 92, bp: "158/96", rr: 24, gcs: 15, ecg: "supra_st", state: "conscient" },
          text: "Le scope révèle un sus-décalage ST en V1-V4. Le patient dit qu'il prend du Plavix. Quelle adaptation ?",
          choices: [
            { text: "Signaler le traitement anticoagulant au médecin, éviter aspirine sans ordre médical, préparer défibrillateur", correct: true },
            { text: "Administrer aspirine 250mg IV en raison du Plavix", correct: false },
            { text: "Ignorer le Plavix, l'aspirine reste obligatoire pour tout SCA", correct: false }
          ],
          feedback: {
            correct: "✅ Le traitement par antiagrégant plaquettaire est une info cruciale à transmettre. Toute administration médicamenteuse sans ordre médical sort du scope IAS 3. Préparer le défibrillateur est pertinent : risque FV sur STEMI.",
            incorrect: "❌ L'IAS 3 n'administre pas de médicaments sans ordre médical. Le Plavix (clopidogrel) modifie la prise en charge — c'est une info à transmettre impérativement, pas à contourner.",
            naca: "NACA V – Risque vital immédiat (STEMI antérieur)"
          }
        },
        {
          patient: { hr: 48, spo2: 91, bp: "88/60", rr: 18, gcs: 14, ecg: "bav3", state: "subconscient" },
          text: "Brutalement : FC chute à 48/min, TA 88/60, patient obnubilé. Que faites-vous ?",
          choices: [
            { text: "Allonger en Trendelenburg modéré, O₂ maintenu, scope, alerter SMUR en urgence absolue, préparer DAE", correct: true },
            { text: "Administrer atropine 0.5mg IV pour la bradycardie", correct: false },
            { text: "Continuer la surveillance sans modifier la position, la chute TA est liée à la douleur", correct: false }
          ],
          feedback: {
            correct: "✅ BAV complet suspecté. Choc cardiogénique débutant. Position de Trendelenburg optimise le retour veineux. Le DAE doit être prêt : risque d'asystolie. Transmission SMUR urgente avec paramètres actuels.",
            incorrect: "❌ L'administration d'atropine est un acte médical hors compétence IAS 3 sans délégation. La décompensation hémodynamique nécessite une réponse structurée ABCDE, pas pharmacologique d'emblée.",
            naca: "NACA V – Choc cardiogénique"
          }
        },
        {
          patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: "fv", state: "arrêt" },
          text: "Le patient perd connaissance — pouls carotidien absent, ECG : fibrillation ventriculaire. Action immédiate ?",
          choices: [
            { text: "RCP immédiate (30:2), choc DAE dès électrodes posées, alerter renfort", correct: true },
            { text: "3 precordial thumps, puis RCP", correct: false },
            { text: "Ventilation au masque seule en attendant le DAE", correct: false }
          ],
          feedback: {
            correct: "✅ Algorithme SRC 2021 : RCP immédiate puis choc dès possible. Ratio 30:2. Le DAE analyse et choque la FV. Chaque minute sans choc = -10% de survie. Bien.",
            incorrect: "❌ Le 'precordial thump' n'est plus recommandé (SRC 2021). La ventilation seule sans compressions est insuffisante. RCP + DAE immédiat reste la priorité absolue sur FV.",
            naca: "NACA VII – Arrêt cardiorespiratoire"
          }
        },
        {
          patient: { hr: 72, spo2: 97, bp: "118/78", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient" },
          text: "RACS après 2 chocs. Le patient reprend conscience. Comment gérez-vous la post-réanimation avant l'arrivée SMUR ?",
          choices: [
            { text: "Position latérale de sécurité si non intubé, O₂ maintenu, monitoring continu, noter heure RACS et nb chocs, éviter hyperthermie", correct: true },
            { text: "Asseoir le patient pour le rassurer, arrêter le scope", correct: false },
            { text: "Donner à boire, le patient est conscient et stable", correct: false }
          ],
          feedback: {
            correct: "✅ Post-RACS : soins de qualité déterminants pour le pronostic neurologique. PLS si inconscient, O₂ continu, normothermie, transmission précise (heure ACR, rythme initial, nb chocs, RACS).",
            incorrect: "❌ Après RACS le patient reste instable et peut re-fibriller. PLS si non protégé, O₂ continu, jamais de boisson. Le monitoring ne s'arrête pas.",
            naca: "NACA VI – Post-ACR stabilisé"
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-02 : Traumatisme crânien — Chute de vélo
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-02",
      title: "Traumatisme crânien — Cycliste 34 ans",
      context: "Chemin de la Forêt, Lausanne. 15h10. Cycliste sans casque retrouvé inconscient après chute. Témoin : 'il a percuté un poteau à environ 30 km/h'.",
      questions: [
        {
          patient: { hr: 58, spo2: 96, bp: "178/102", rr: 12, gcs: 9, ecg: "sinusal_brady", state: "obnubilé" },
          text: "GCS 9 (Y2 V2 M5), triade de Cushing possible (HTA + bradycardie). Quelle est votre priorité absolue ?",
          choices: [
            { text: "Stabilisation cervicale manuelle, libération des voies aériennes, O₂ 15L/min, monitoring", correct: true },
            { text: "Retourner le patient en PLS immédiatement", correct: false },
            { text: "Stimuler le patient pour évaluer le GCS précisément", correct: false }
          ],
          feedback: {
            correct: "✅ Tout trauma crânien avec mécanisme violent = suspicion lésion rachidienne. Stabilisation cervicale AVANT toute mobilisation. Airway + O₂ prioritaires. La triade de Cushing (HTA-Brady-Irrégularité respi) évoque HTIC — ne pas aggraver.",
            incorrect: "❌ La PLS sans stabilisation cervicale est contre-indiquée sur trauma. Stimuler un patient avec HTIC peut aggraver la pression intracrânienne. Airway sécurisé et immobilisation d'abord.",
            naca: "NACA V – TC grave avec HTIC probable"
          }
        },
        {
          patient: { hr: 55, spo2: 94, bp: "185/108", rr: 10, gcs: 8, ecg: "sinusal_brady", state: "semi-comateux" },
          text: "GCS descend à 8, fréquence respiratoire à 10/min irrégulière. Pupilles : gauche 5mm peu réactive, droite 3mm. Que suspectez-vous et que faites-vous ?",
          choices: [
            { text: "Engagement temporal probable côté gauche, ventilation assistée au BAVU, alerter SMUR en urgence chirurgicale", correct: true },
            { text: "Mydriase bilatérale = mort cérébrale, stopper la réanimation", correct: false },
            { text: "La différence pupillaire est normale après trauma, continuer surveillance", correct: false }
          ],
          feedback: {
            correct: "✅ Anisocorie post-trauma = engagement temporal homolatéral à la mydriase jusqu'à preuve du contraire. Ventilation assistée pour maintenir EtCO2 35-40 mmHg. Transmission chirurgie urgente (hématome épidural probable).",
            incorrect: "❌ Une pupille dilatée unilatérale sur TC n'est pas la mort cérébrale. C'est un signe d'alerte d'engagement temporal — engagement neurochirurgical urgent. Ne jamais arrêter sur anisocorie seule.",
            naca: "NACA VI – Engagement temporal, urgence neurochirurgicale"
          }
        },
        {
          patient: { hr: 82, spo2: 99, bp: "152/88", rr: 14, gcs: 8, ecg: "sinusal", state: "semi-comateux" },
          text: "SMUR intubé le patient. Vous préparez le transport. Comment immobilisez-vous le patient ?",
          choices: [
            { text: "Collier cervical rigide adapté + matelas coquille, alignement tête-tronc-membres, fixation en décrochant le DOC si nécessaire", correct: true },
            { text: "Collier mousse souple suffit sur trauma à basse énergie", correct: false },
            { text: "Immobiliser tête seule, les membres ne nécessitent pas de fixation sur TC isolé", correct: false }
          ],
          feedback: {
            correct: "✅ Immobilisation complète : collier rigide adapté (mesure 3 doigts) + matelas coquille aspiratif. Alignement strict corps entier. Fixation tête EN DERNIER. Transport en légère anti-Trendelenburg (15-20°) pour TC.",
            incorrect: "❌ 30 km/h est une cinétique significative sur TC. Le collier mousse n'offre aucune immobilisation réelle. L'immobilisation concerne l'axe corps entier, pas la tête seule.",
            naca: "NACA V"
          }
        },
        {
          patient: { hr: 78, spo2: 100, bp: "148/82", rr: 14, gcs: 8, ecg: "sinusal", state: "intubé" },
          text: "Durant le transport le patient convulse (mouvement tonico-clonique 45 secondes). Le médecin vous demande de préparer le midazolam. Quel rôle jouez-vous ?",
          choices: [
            { text: "Préparer le médicament selon l'ordre médical, chronomètre, sécuriser le patient contre les chutes, aspiration prête", correct: true },
            { text: "Administrer midazolam 5mg IV de votre propre chef : la convulsion est une urgence", correct: false },
            { text: "Rien à faire : le patient est intubé donc les convulsions ne sont pas dangereuses", correct: false }
          ],
          feedback: {
            correct: "✅ L'IAS 3 agit sous délégation médicale. Préparer + administrer sur ordre = rôle correct. Chronomètre de la crise, sécurisation physique, aspiration prête (risque vomissements même intubé si cuff insuffisant).",
            incorrect: "❌ L'administration de benzodiazépines sans ordre médical dépasse les compétences IAS 3 en l'absence de protocole spécifique délégué. Même en urgence, le cadre légal s'applique.",
            naca: "NACA VI"
          }
        },
        {
          patient: { hr: 80, spo2: 99, bp: "145/80", rr: 14, gcs: 8, ecg: "sinusal", state: "intubé" },
          text: "Transmission aux urgences neurochirurgicales. Quels éléments inclure dans votre bilan ABCDE transmis ?",
          choices: [
            { text: "Mécanisme + heure exacte, GCS initial et évolution, paramètres vitaux série, triade Cushing, anisocorie, traitement administré, heure intubation", correct: true },
            { text: "GCS actuel uniquement, les paramètres antérieurs ne sont pas utiles au médecin recevant", correct: false },
            { text: "Transmettre uniquement les valeurs normales pour ne pas alarmer inutilement", correct: false }
          ],
          feedback: {
            correct: "✅ La transmission SBAR/ABCDE complète est capitale. L'évolution du GCS (9→8) et l'anisocorie sont des éléments pronostiques critiques. Heure ACR ou intubation permet calcul de la durée d'ischémie.",
            incorrect: "❌ Le médecin recevant a besoin de TOUTE la cinématique. L'évolution temporelle (GCS 9 puis 8, anisocorie apparue à T+8min) oriente le diagnostic et l'urgence chirurgicale.",
            naca: "NACA V-VI"
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-03 : Détresse respiratoire — Asthme sévère
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-03",
      title: "Asthme aigu grave — Femme 27 ans",
      context: "Appartement Carouge, 23h05. Jeune femme asthmatique connue, sibilances audibles à distance, impossibilité de parler en phrases complètes. Ventalin déjà utilisé 8 fois sans effet.",
      questions: [
        {
          patient: { hr: 128, spo2: 86, bp: "138/88", rr: 34, gcs: 15, ecg: "sinusal_tachy", state: "consciente" },
          text: "SpO₂ 86%, FR 34/min, tirage sus-sternal, parle mot par mot. Comment positionnez-vous et oxygénez-vous ?",
          choices: [
            { text: "Position assise penchée en avant (trépied), O₂ 15L/min masque HC, scope, voie veineuse", correct: true },
            { text: "Décubitus dorsal pour libérer le diaphragme, O₂ lunettes 2L/min", correct: false },
            { text: "Position demi-assise, O₂ lunettes nasales 4L/min, éviter le masque qui angoisse", correct: false }
          ],
          feedback: {
            correct: "✅ La position trépied est instinctivement adoptée par les patients asthmatiques — elle optimise les volumes pulmonaires. O₂ HC indispensable sur SpO₂ 86%. Ne pas restreindre le débit sur asthme : la cible est >95%.",
            incorrect: "❌ Le décubitus est délétère en détresse respiratoire (réduit la capacité résiduelle fonctionnelle). L'O₂ bas débit est insuffisant sur SpO₂ 86%. La priorité est la correction de l'hypoxie.",
            naca: "NACA V – Asthme aigu grave"
          }
        },
        {
          patient: { hr: 132, spo2: 84, bp: "142/90", rr: 36, gcs: 14, ecg: "sinusal_tachy", state: "épuisée" },
          text: "Silencieux ! Les sibilances disparaissent, thorax bloqué en inspiration. SpO₂ 84%. Que signifie ce silence auscultatoire ?",
          choices: [
            { text: "Signe de gravité extrême — poumon silencieux = asphyxie imminente, SMUR en extrême urgence, préparer BAVU", correct: true },
            { text: "Amélioration : les bronchospasmes se lèvent, les sibilances cessent", correct: false },
            { text: "Attendre l'évolution, la SpO₂ peut fluctuer", correct: false }
          ],
          feedback: {
            correct: "✅ Le silence auscultatoire sur asthme = signe de catastrophe imminente. L'air ne passe plus assez pour créer des sibilances. Arrêt respiratoire en secondes à minutes. SMUR extrême urgence + préparation intubation/BAVU.",
            incorrect: "❌ La disparition des sibilances n'est JAMAIS une amélioration sur asthme sévère. C'est un signe pré-asphyxique. Le poumon 'silencieux' est l'un des critères d'asthme aigu grave les plus sérieux.",
            naca: "NACA VI – Asphyxie imminente"
          }
        },
        {
          patient: { hr: 58, spo2: 72, bp: "88/60", rr: 6, gcs: 10, ecg: "sinusal_brady", state: "épuisée" },
          text: "La patiente s'effondre, FR à 6/min, GCS 10. Le médecin SMUR demande de ventiler au BAVU. Comment procédez-vous ?",
          choices: [
            { text: "BAVU avec O₂ 15L/min, fréquence 10-12/min, inspiration lente (bronchospasme), surveiller thorax, 2 opérateurs idéalement", correct: true },
            { text: "BAVU à 30/min pour corriger rapidement l'hypoxie", correct: false },
            { text: "RCP : pouls absent sur asthme grave = ACR", correct: false }
          ],
          feedback: {
            correct: "✅ Sur bronchospasme sévère : ventilation LENTE (I:E = 1:3 minimum) pour laisser le temps à l'expiration. Hyperventilation = auto-PEEP = barotraumatisme pneumothorax. 2 opérateurs pour masque hermétique. Pouls présent ici.",
            incorrect: "❌ Ventiler vite sur bronchospasme provoque un piégeage aérien (air trapping) et peut causer un pneumothorax sous tension fatal. La RCP est prématurée si le pouls est présent.",
            naca: "NACA VI"
          }
        },
        {
          patient: { hr: 102, spo2: 91, bp: "118/74", rr: 18, gcs: 15, ecg: "sinusal_tachy", state: "consciente" },
          text: "Après nébulisation salbutamol + corticoïdes IV par le SMUR, amélioration. Préparation transport. La patiente refuse l'hospitalisation. Que faites-vous ?",
          choices: [
            { text: "Expliquer les risques d'un 2ème épisode dans les heures suivantes, noter le refus, faire signer une décharge, informer le médecin régulateur", correct: true },
            { text: "Contraindre physiquement la patiente — elle n'est pas en état de décider", correct: false },
            { text: "Partir sans rien noter : sa responsabilité, pas la nôtre", correct: false }
          ],
          feedback: {
            correct: "✅ Respect de l'autonomie du patient conscient et compétent. Explication des risques de récidive (rebond bronchospastique à 4-6h), note écrite du refus, signature décharge, appel médecin régulateur pour consignes. Droit fondamental.",
            incorrect: "❌ La contrainte physique n'est légalement justifiée que sur patient non compétent ou danger immédiat pour autrui. Partir sans traçabilité expose légalement l'équipe.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 98, spo2: 95, bp: "122/76", rr: 18, gcs: 15, ecg: "sinusal", state: "consciente" },
          text: "La patiente accepte finalement. Quels enseignements sur le plan d'action asthme lui communiquez-vous succinctement ?",
          choices: [
            { text: "Reconnaitre les signes de dégradation (parler, sibilances, SpO₂), ne pas dépasser 4 bouffées sans appel 144, plan de crise écrit avec médecin", correct: true },
            { text: "Doubler la dose de Ventolin en cas de crise, attendre toujours l'amélioration avant d'appeler", correct: false },
            { text: "Les crises d'asthme ne sont jamais mortelles avec le bon traitement", correct: false }
          ],
          feedback: {
            correct: "✅ Education thérapeutique légère mais pertinente dans ce contexte. La patiente doit reconnaitre ses signaux d'alarme. 8 bouffées de Ventolin sans effet = échec du traitement = appel immédiat 144.",
            incorrect: "❌ Doubler les doses sans supervision médicale est dangereux (tachycardie, hypokaliémie). L'asthme tue 1000 personnes/an en Europe. Attendre en automédication a failli être fatal ici.",
            naca: "NACA III stabilisé"
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-04 : Hypoglycémie — Diabétique type 1
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-04",
      title: "Hypoglycémie sévère — Homme 44 ans",
      context: "Parking Migros, Nyon. 12h35. Homme retrouvé dans sa voiture, agité puis prostré. Badge diabétique type 1 visible. Dernier repas inconnu.",
      questions: [
        {
          patient: { hr: 112, spo2: 98, bp: "148/86", rr: 18, gcs: 12, ecg: "sinusal_tachy", state: "confus" },
          text: "Patient confus, agité, sudorifère. GCS 12. Vous suspectez une hypoglycémie. Que mesurez-vous immédiatement ?",
          choices: [
            { text: "Glycémie capillaire (glucomètre), compléter bilan ABCDE, scope", correct: true },
            { text: "Commencer directement glucose IV sans mesure préalable", correct: false },
            { text: "Attendre qu'il soit à jeun depuis 8h pour mesure fiable", correct: false }
          ],
          feedback: {
            correct: "✅ Le glucomètre est l'outil diagnostic ici. Mesure immédiate avant toute intervention glycémique. ABCDE : confusion = D (Disability) perturbée. Scope pour exclure cause cardiaque co-existante.",
            incorrect: "❌ Administrer glucose sans mesure peut masquer une hyperglycémie (coma hyperosmolaire). La mesure prend 5 secondes et oriente le traitement.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 116, spo2: 97, bp: "144/88", rr: 18, gcs: 10, ecg: "sinusal_tachy", state: "semi-conscient" },
          text: "Glycémie : 1.8 mmol/L (32 mg/dL). Patient encore semi-conscient mais avec réflexe de déglutition présent. Quelle voie d'administration ?",
          choices: [
            { text: "Gel de glucose (Glucogel) en sublingual/gingival si déglutition présente, sinon VVP + glucosé 30% sur ordre médical", correct: true },
            { text: "Faire boire du jus d'orange immédiatement", correct: false },
            { text: "Attendre perte de conscience pour poser la VVP sereinement", correct: false }
          ],
          feedback: {
            correct: "✅ GCS 10 = déglutition compromise. Gel gingival absorbe par la muqueuse sans déglutition — sécurisé. La VVP prépare la voie pour glucosé IV si dégradation. Jamais de voie orale sur GCS <12 sans évaluation de la déglutition.",
            incorrect: "❌ Donner à boire à un patient avec GCS 10 = risque d'inhalation. Attendre la perte de conscience aggrave l'hypoglycémie cérébrale — chaque minute compte.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 104, spo2: 98, bp: "138/82", rr: 16, gcs: 14, ecg: "sinusal", state: "conscient" },
          text: "Glycémie remonte à 4.2 mmol/L après Glucogel + glucosé IV. Patient reprend conscience. Peut-il rester seul et conduire ?",
          choices: [
            { text: "Non : risque de rebond hypoglycémique dans l'heure. Faire manger (sucre lent + protéines), convoyer aux urgences ou médecin traitant urgent", correct: true },
            { text: "Oui : glycémie normalisée = sécurité restaurée, autoriser la conduite", correct: false },
            { text: "Laisser le patient décider seul : il est adulte et connait sa maladie", correct: false }
          ],
          feedback: {
            correct: "✅ L'hypoglycémie sur insuline longue durée rebondit fréquemment. Glycémie 4.2 mmol/L est limite. Repas glucido-protéiné, surveillance médicale et INTERDICTION DE CONDUITE (Code de la route suisse) jusqu'à bilan.",
            incorrect: "❌ Conduire après une hypoglycémie ayant entraîné une perte de conscience est légalement et médicalement contre-indiqué. Le risque de récidive en conduisant est une menace pour autrui.",
            naca: "NACA III"
          }
        },
        {
          patient: { hr: 100, spo2: 98, bp: "134/80", rr: 16, gcs: 15, ecg: "sinusal", state: "conscient" },
          text: "Le patient révèle avoir modifié sa dose d'insuline lui-même et n'avoir rien mangé depuis 18h. Quelle attitude adoptez-vous ?",
          choices: [
            { text: "Écoute non-jugeante, questions ouvertes sur les raisons du changement de dose, transmission aux urgences avec contexte complet", correct: true },
            { text: "Rappeler fermement qu'il ne doit jamais modifier ses doses sans médecin", correct: false },
            { text: "Documenter uniquement les paramètres vitaux, pas les facteurs contextuels", correct: false }
          ],
          feedback: {
            correct: "✅ Les modifications de traitement non supervisées révèlent souvent un problème sous-jacent (accès aux soins, compréhension, déni). Écoute active sans jugement + transmission contextuelle enrichit la prise en charge médicale.",
            incorrect: "❌ Les réprimandes à chaud sont contre-productives et nuisent à la relation thérapeutique. Le contexte social et comportemental est cliniquement pertinent et doit être transmis.",
            naca: "NACA III"
          }
        },
        {
          patient: { hr: 96, spo2: 98, bp: "130/78", rr: 14, gcs: 15, ecg: "sinusal", state: "conscient" },
          text: "Aux urgences, le médecin vous demande de compléter votre rapport ABCDE. Quel élément est le plus souvent omis dans ce type de cas ?",
          choices: [
            { text: "Le mécanisme et contexte (jeûne 18h + modification insuline auto-prescrite) et la cinétique d'évolution du GCS", correct: true },
            { text: "La fréquence cardiaque initiale", correct: false },
            { text: "Le nom du médicament administré", correct: false }
          ],
          feedback: {
            correct: "✅ Le contexte décisionnel (pourquoi l'hypoglycémie s'est produite) est souvent absent des transmissions. Pourtant il oriente l'équipe médicale sur le plan d'éducation thérapeutique et les ajustements insuliniques.",
            incorrect: "❌ La FC et le médicament sont documentés systématiquement. Le manque dans les transmissions pré-hospitalières est le CONTEXTE : jeûne, automédication, isolement social. Ces éléments changent la prise en charge.",
            naca: "NACA III"
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-05 : Noyade — Enfant 6 ans
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-05",
      title: "Noyade — Enfant 6 ans",
      context: "Piscine privée, Morges. 14h22. Enfant retrouvé immergé ~2 minutes, sorti par parent. Inconscient à votre arrivée, peau cyanosée.",
      questions: [
        {
          patient: { hr: 40, spo2: 72, bp: "70/40", rr: 0, gcs: 3, ecg: "sinusal_brady", state: "inconscient" },
          text: "Enfant inconscient, apnée, pouls fémoral 40/min faiblement perçu. Première action ?",
          choices: [
            { text: "5 insufflations de sauvetage (bouche-à-bouche ou masque pédiatrique), puis RCP 15:2 pédiatrique", correct: true },
            { text: "RCP adulte 30:2 immédiate sans ventilation préalable", correct: false },
            { text: "Retournement pour vider les poumons d'eau, puis ventilation", correct: false }
          ],
          feedback: {
            correct: "✅ Algorithme noyade SRC : 5 insufflations en premier (cause hypoxique primaire). RCP pédiatrique 15:2. Pas de retournement pour 'vider' — cette manœuvre est inefficace et retarde la réanimation.",
            incorrect: "❌ La noyade est une asphyxie = cause hypoxique. 5 insufflations d'abord comme en pédiatrie. Le retournement ne vide pas les poumons et perd un temps précieux.",
            naca: "NACA VII – Pré-ACR"
          }
        },
        {
          patient: { hr: 0, spo2: 0, bp: "—", rr: 0, gcs: 3, ecg: "asystolie", state: "arrêt" },
          text: "Après 2 minutes de RCP : asystolie au scope. Le DAE détecte 'pas de choc conseillé'. Continuez-vous ?",
          choices: [
            { text: "Oui — asystolie sur noyade = RCP continue sans interruption, O₂ 15L/min, SMUR en urgence absolue", correct: true },
            { text: "Non — asystolie = mort confirmée, le DAE a raison d'indiquer 'pas de choc'", correct: false },
            { text: "Attendre l'avis du médecin régulateur avant de poursuivre", correct: false }
          ],
          feedback: {
            correct: "✅ Asystolie sur noyade pédiatrique NE SIGNIFIE PAS mort irréversible — surtout si eau froide (hypothermie protectrice). Principe : 'pas mort tant que pas chaud et mort'. RCP sans interruption jusqu'à SMUR. Le DAE ne choque pas l'asystolie (correct).",
            incorrect: "❌ 'Le DAE ne choque pas' = normal sur asystolie. Ce n'est pas une indication d'arrêt. Noyade pédiatrique = toujours continuer. Des enfants ont survécu après 40 min de RCP en eau froide.",
            naca: "NACA VII – ACR"
          }
        },
        {
          patient: { hr: 62, spo2: 88, bp: "78/52", rr: 12, gcs: 6, ecg: "sinusal_brady", state: "RACS" },
          text: "RACS après 12 minutes. L'enfant est hypotherme (T° 31°C axillaire), GCS 6. Quelle gestion thermique ?",
          choices: [
            { text: "Réchauffement passif progressif (couverture de survie aluminium + couverture chaude), éviter tout frottement vigoureux, transport SMUR urgent", correct: true },
            { text: "Bain d'eau chaude immédiat pour réchauffer rapidement", correct: false },
            { text: "L'hypothermie après noyade n'est pas une urgence si le RACS est obtenu", correct: false }
          ],
          feedback: {
            correct: "✅ Réchauffement PASSIF PROGRESSIF. L'hypothermie profonde peut protéger le cerveau mais nécessite réchauffement contrôlé en milieu médicalisé. Frottements vigoureux = risque de fibrillation ventriculaire 'after-drop'. Transport SMUR urgent (hypothermie en centre spécialisé).",
            incorrect: "❌ Le réchauffement rapide (bain chaud) provoque une vasodilatation périphérique soudaine (afterdrop) qui peut re-fibriller le cœur. L'hypothermie reste une urgence même après RACS.",
            naca: "NACA VI – Post-ACR hypothermie"
          }
        },
        {
          patient: { hr: 70, spo2: 92, bp: "84/56", rr: 14, gcs: 6, ecg: "sinusal", state: "semi-comateux" },
          text: "Les parents sont en état de choc traumatique. Le père veut prendre l'enfant dans ses bras et partir à l'hôpital en voiture. Comment gérez-vous ?",
          choices: [
            { text: "Empathie ferme : expliquer l'instabilité vitale, la nécessité du transport médicalisé, proposer de les accompagner dans l'ambulance", correct: true },
            { text: "Laisser le père emmener l'enfant, c'est sa responsabilité parentale", correct: false },
            { text: "Appeler la police pour forcer le transport médical", correct: false }
          ],
          feedback: {
            correct: "✅ Communication de crise : ton calme et empathique mais informatif sur les risques (re-fibrillation, détresse respi en route). Proposer la co-présence parentale dans l'ambulance réduit l'opposition. La police est un dernier recours disproportionné ici.",
            incorrect: "❌ Laisser partir un enfant post-ACR en voiture = mise en danger. Le transport non médicalisé ne permet aucune gestion des complications. La co-présence parentale dans l'ambulance est souvent la meilleure solution.",
            naca: "NACA VI"
          }
        },
        {
          patient: { hr: 74, spo2: 94, bp: "88/58", rr: 16, gcs: 7, ecg: "sinusal", state: "semi-comateux" },
          text: "À l'arrivée aux urgences pédiatriques, quels éléments de la transmission sont spécifiques à la noyade ?",
          choices: [
            { text: "Durée d'immersion estimée, température eau, eau douce ou salée, temps avant 1ères insufflations, durée RCP, T° corporelle, GCS initial vs actuel", correct: true },
            { text: "Uniquement heure d'appel et GCS actuel", correct: false },
            { text: "La transmission pour noyade est identique à tout autre ACR", correct: false }
          ],
          feedback: {
            correct: "✅ Chaque élément oriente le traitement : durée immersion (pronostic), eau froide <15°C (hypothermie protectrice → prolonger RCP), eau douce vs salée (électrolytes différents), temps avant 1ère ventilation (dommage hypoxique).",
            incorrect: "❌ La noyade a des spécificités pronostiques importantes. La durée d'immersion et la température de l'eau sont les meilleurs prédicteurs de survie neurologique — informations critiques pour l'équipe médicale.",
            naca: "NACA VI"
          }
        }
      ]
    },

    // ────────────────────────────────────────────────────────────────
    // CAS IAS3-06 : Accident de la voie publique — Polytraumatisme
    // ────────────────────────────────────────────────────────────────
    {
      id: "IAS3-06",
      title: "AVP — Moto vs. camion, Homme 31 ans",
      context: "Route cantonale N12, Fribourg. 19h45. Motard éjecté à ~80 km/h. Casque fragmenté, inconscient, position allongée sur chaussée. Déformation membre inférieur gauche.",
      questions: [
        {
          patient: { hr: 130, spo2: 89, bp: "86/50", rr: 28, gcs: 8, ecg: "sinusal_tachy", state: "semi-conscient" },
          text: "Mécanisme à haute énergie. HR 130, TA 86/50, GCS 8. Quelle est votre évaluation C-ABCDE initiale ?",
          choices: [
            { text: "<C> Hémorragie externe contrôlée, A voies aériennes avec stabilisation cervicale, B O₂ 15L/min, C scope + 2 VVP larges calibre", correct: true },
            { text: "Commencer par retirer le casque pour évaluer l'airway", correct: false },
            { text: "Traiter la fracture du membre en premier (douleur = choc neurogène)", correct: false }
          ],
          feedback: {
            correct: "✅ L'algorithme <C>ABCDE sur polytraumatisme : Catastrophic bleeding d'abord, puis airway avec protection rachidienne, puis breathing, puis circulation. 2 VVP larges calibre (≥16G) pour réanimation volémique rapide si nécessaire.",
            incorrect: "❌ Le retrait du casque sans technique à 2 sauveteurs est dangereux sur suspicion rachidienne. La fracture de membre n'est pas la priorité — le choc hémorragique (TA 86/50) met la vie en jeu.",
            naca: "NACA V-VI"
          }
        },
        {
          patient: { hr: 136, spo2: 88, bp: "82/48", rr: 30, gcs: 8, ecg: "sinusal_tachy", state: "semi-conscient" },
          text: "Hémothorax gauche suspecté (percussion mate, MV diminué à gauche), TA continue de baisser. Votre rôle ?",
          choices: [
            { text: "Signaler hémothorax suspecté au médecin SMUR, O₂ 15L/min, perfusion en cours, ne pas ponctionner — hors compétence IAS 3", correct: true },
            { text: "Ponctionner le 2ème espace intercostal gauche ligne médioclaviculaire pour décompression", correct: false },
            { text: "Attendre confirmation radiologique avant d'alerter sur l'hémothorax", correct: false }
          ],
          feedback: {
            correct: "✅ L'exsuflation à l'aiguille et le drainage thoracique sont des actes médicaux. Le rôle IAS 3 : reconnaître, transmettre, maintenir la perfusion, O₂ maximal, et préparer le matériel sur demande du médecin.",
            incorrect: "❌ La ponction pleurale est hors compétence IAS 3 sans délégation médicale explicite. La signaler rapidement permet au médecin SMUR d'intervenir en urgence — c'est votre valeur ajoutée.",
            naca: "NACA VI – Hémothorax sous tension"
          }
        },
        {
          patient: { hr: 140, spo2: 87, bp: "78/44", rr: 32, gcs: 7, ecg: "sinusal_tachy", state: "semi-conscient" },
          text: "Fracture fémur gauche ouverte avec saignement important. Que faites-vous pour l'hémorragie ?",
          choices: [
            { text: "Garrot tourniquet proximal au saignement si compression directe insuffisante, noter l'heure de pose", correct: true },
            { text: "Compression douce autour de la plaie, ne pas appuyer sur l'os fracturé", correct: false },
            { text: "Pansement compressif simple et élévation du membre", correct: false }
          ],
          feedback: {
            correct: "✅ Garrot tourniquet sur fracture fémorale ouverte hémorragique = indiqué. Note horaire obligatoire (nécrose ischémique à partir de 2h). La compression douce est insuffisante sur fémoral. L'élévation est contre-indiquée sur fracture avec suspicion rachidienne.",
            incorrect: "❌ Fracture fémorale ouverte peut entraîner un saignement de 1.5 à 2.5L en 30 minutes. La compression insuffisante et le pansement simple ne suffisent pas. Le garrot est ici indiqué et salvateur.",
            naca: "NACA VI"
          }
        },
        {
          patient: { hr: 118, spo2: 92, bp: "92/58", rr: 26, gcs: 7, ecg: "sinusal_tachy", state: "semi-conscient" },
          text: "SMUR arrive. Le médecin intube rapidement (RSI). Vous préparez le transport. Matelas coquille ou brancard ?",
          choices: [
            { text: "Matelas coquille aspiratif : immobilise corps entier, adapté polytraumatisme avec suspicion rachidienne", correct: true },
            { text: "Brancard standard : le patient est déjà immobilisé par le collier cervical", correct: false },
            { text: "Planche d'immobilisation (spine board) seule suffit pour ce transport court", correct: false }
          ],
          feedback: {
            correct: "✅ Matelas coquille = gold standard polytraumatisme. Immobilise tout l'axe tête-tronc-membres dans une coque épousant la morphologie. Le collier seul n'immobilise pas le rachis thoracolombaire. La spine board seule est moins confortable pour les longs transports.",
            incorrect: "❌ Le collier cervical seul ne suffit pas pour un AVP à haute cinétique. La spine board expose aux escarres rapidement. Le matelas coquille est l'immobilisation de référence en polytraumatisme.",
            naca: "NACA V-VI"
          }
        },
        {
          patient: { hr: 110, spo2: 97, bp: "102/64", rr: 14, gcs: 7, ecg: "sinusal_tachy", state: "intubé" },
          text: "En route pour le trauma center. L'aide-ambulancier signale 'la perfusion ne coule plus'. Que faites-vous ?",
          choices: [
            { text: "Vérifier clampage, position VVP, reflux sanguin, déboucher ou repiquer, informer médecin SMUR accompagnant", correct: true },
            { text: "Arrêter l'ambulance et repiquer à l'arrêt uniquement", correct: false },
            { text: "Accélérer la pression du brassard du perfuseur uniquement", correct: false }
          ],
          feedback: {
            correct: "✅ Check systématique voie veineuse : clampage accidentel, plicature, dislodgement, débit. Si non résolu : repiquer en roulant si nécessaire (pas de perte de temps) + informer le médecin. Continuer le transport prioritaire.",
            incorrect: "❌ Arrêter le transport sur un polytraumatisme hémorragique = perte de temps critique. Le contrôle de la perfusion se gère en route. Augmenter uniquement la pression sans vérifier la cause peut causer une extravasation.",
            naca: "NACA V-VI"
          }
        }
      ]
    },

    // CAS IAS3-07 : Overdose opioïdes
    {
      id: "IAS3-07",
      title: "Intoxication aux opioïdes — Homme 29 ans",
      context: "Studio Pâquis, Genève. 02h15. Jeune homme retrouvé par coloc. Serингue au bras, respiration agonique, cyanose, myosis bilatéral.",
      questions: [
        {
          patient: { hr: 52, spo2: 78, bp: "88/52", rr: 4, gcs: 5, ecg: "sinusal_brady", state: "inconscient" },
          text: "Triade opioïde (myosis + dépression respi + coma). FR 4/min. Première action ?",
          choices: [
            { text: "Sublimaze voies aériennes, BAVU O₂ 15L/min, VVP, antidote naloxone IV sur ordre médical", correct: true },
            { text: "Naloxone 0.4mg IV immédiat sans ordre médical — urgence vitale", correct: false },
            { text: "PLS et surveillance : la dépression respi va se lever naturellement", correct: false }
          ],
          feedback: {
            correct: "✅ Priorité : ABC. La ventilation au BAVU corrige l'hypoxie immédiatement. La naloxone est l'antidote mais son administration nécessite ordre médical en Suisse (IAS 3). VVP pour la voie d'administration. La PLS seule est insuffisante sur FR 4/min.",
            incorrect: "❌ En Suisse, la naloxone IV par l'IAS 3 nécessite une délégation médicale ou un protocole cantonal. La ventilation est l'urgence immédiate, pas le médicament. PLS seule = insuffisante sur FR 4/min.",
            naca: "NACA V-VI"
          }
        },
        {
          patient: { hr: 60, spo2: 92, bp: "96/60", rr: 10, gcs: 9, ecg: "sinusal", state: "obnubilé" },
          text: "Après naloxone (sur ordre médical), le patient se réveille agité et arrache sa VVP. Il veut partir. Que faites-vous ?",
          choices: [
            { text: "Expliquer le risque de re-sédation (demi-vie naloxone < demi-vie opioïdes), proposer surveillance 4h minimum aux urgences, contention si danger pour lui-même", correct: true },
            { text: "Le laisser partir : il est conscient, c'est sa liberté", correct: false },
            { text: "Re-administrer naloxone immédiatement pour le maintenir éveillé", correct: false }
          ],
          feedback: {
            correct: "✅ La demi-vie de la naloxone (30-90 min) est souvent inférieure à celle de l'opioïde consommé — risque de re-sédation réel à 1-2h. Information claire, surveillance obligatoire. Re-doser la naloxone doit être prescrit.",
            incorrect: "❌ Un patient conscient après antidote peut re-sédater rapidement. Le laisser partir = risque vital. Re-doser sans prescription dépasse la compétence IAS 3.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 64, spo2: 94, bp: "100/62", rr: 12, gcs: 12, ecg: "sinusal", state: "conscient" },
          text: "Le patient révèle avoir pris du fentanyl de rue mélangé à autre chose. Comment évaluez-vous le risque de polytoxicomanie ?",
          choices: [
            { text: "Anamnèse ouverte sans jugement : substances prises, voie, quantité, heure, autres substances associées (alcool, benzo). Transmission complète au médecin.", correct: true },
            { text: "Ignorer les détails : l'overdose est traitée, le reste ne regarde pas le service médical d'urgence", correct: false },
            { text: "Refuser de soigner sans information complète sur les substances", correct: false }
          ],
          feedback: {
            correct: "✅ Le fentanyl de rue est souvent adulteré (nitazènes, xylazine — résistant à la naloxone). Connaitre le cocktail consommé oriente la prise en charge médicale. Anamnèse sans jugement = meilleur résultat clinique.",
            incorrect: "❌ Les informations sur les substances sont critiques pour la réanimation. Xylazine (tranquillisant vétérinaire) mélangé au fentanyl ne répond pas à la naloxone — le médecin urgentiste doit le savoir.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 68, spo2: 95, bp: "102/64", rr: 14, gcs: 13, ecg: "sinusal", state: "conscient" },
          text: "La police veut interroger le patient sur ses fournisseurs. Quelle est votre position ?",
          choices: [
            { text: "Les soins médicaux sont prioritaires. Informer la police qu'elle peut interroger le patient une fois médicalement autorisé, pas pendant les soins.", correct: true },
            { text: "Autoriser la police à interroger maintenant — coopération avec les autorités obligatoire", correct: false },
            { text: "Refuser catégoriquement toute présence policière : secret médical absolu", correct: false }
          ],
          feedback: {
            correct: "✅ Les soins primés sur l'enquête. Le secret médical protège les informations confiées dans le cadre des soins. La police peut être informée que le patient sera disponible pour audition après stabilisation médicale.",
            incorrect: "❌ Interrompre les soins pour une audition policière viole l'éthique médicale et met en danger le patient. Le secret médical ne couvre pas l'identité du patient (déjà connue) mais les informations de santé.",
            naca: "NACA IV"
          }
        },
        {
          patient: { hr: 72, spo2: 96, bp: "108/68", rr: 14, gcs: 14, ecg: "sinusal", state: "conscient" },
          text: "Le patient révèle une pensée suicidaire active (il voulait mourir). Comment adaptez-vous la prise en charge ?",
          choices: [
            { text: "Écoute active, ne pas minimiser, documenter, transport psychiatrique en urgence (article 431 CPC si risque grave pour autrui/soi), informer médecin urgentiste", correct: true },
            { text: "L'overdose est traitée, la question psychiatrique n'est pas du ressort du SMUR", correct: false },
            { text: "Le rassurer que tout ira bien et le laisser rentrer avec le coloc", correct: false }
          ],
          feedback: {
            correct: "✅ L'overdose sur intention suicidaire = double urgence médicale et psychiatrique. Écoute sans minimisation. L'art. 431 CPC (Suisse) permet le placement à des fins d'assistance si risque grave. Transmission psychiatrique urgente.",
            incorrect: "❌ Renvoyer un patient avec idéation suicidaire active = faute médicale et éthique. L'intention suicidaire rend la sortie contre-indiquée sans évaluation psychiatrique formelle.",
            naca: "NACA V"
          }
        }
      ]
    },

    // CAS IAS3-08 : Brûlures thermiques
    {
      id: "IAS3-08",
      title: "Brûlures — Homme 52 ans, incendie appartement",
      context: "Appartement Rue du Conseil-Général, Genève. 03h30. Incendie cuisine. Homme sorti par pompiers. Brûlures face, cou, membres supérieurs. Cheveux roussis. Voix rauque.",
      questions: [
        {
          patient: { hr: 118, spo2: 91, bp: "136/88", rr: 24, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
          text: "Voix rauque, poils nasaux roussis, suie dans bouche. Quelle menace prioritaire identifiez-vous ?",
          choices: [
            { text: "Inhalation de fumée avec œdème laryngé évolutif — airway menacé. O₂ 15L/min masque HC, intubation précoce à anticiper avec SMUR", correct: true },
            { text: "Les brûlures cutanées sont la priorité absolue", correct: false },
            { text: "SpO₂ 91% acceptable pour brûlé, continuer surveillance", correct: false }
          ],
          feedback: {
            correct: "✅ Voix rauque + poils nasaux roussis + suie = inhalation de fumée avec risque d'œdème laryngé explosif. La fenêtre d'intubation se ferme en minutes. Alerte SMUR pour intubation précoce avant obstruction complète. C'est la menace n°1.",
            incorrect: "❌ Les brûlures cutanées sont importantes mais JAMAIS la priorité sur l'obstruction des voies aériennes. Une SpO₂ 91% avec CO potentiel signifie que le pulse-oxymètre surestime la saturation (il ne différencie pas HbO2 et HbCO).",
            naca: "NACA V – Inhalation fumée, brûlures profondes"
          }
        },
        {
          patient: { hr: 120, spo2: 92, bp: "132/84", rr: 22, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
          text: "Règle des 9 de Wallace : brûlures face (4.5%), cou (1%), 2 membres supérieurs (18%). Surface totale estimée ?",
          choices: [
            { text: "Environ 23-24% de la surface corporelle totale", correct: true },
            { text: "9% (face seule)", correct: false },
            { text: "Plus de 40% (surestimation fréquente)", correct: false }
          ],
          feedback: {
            correct: "✅ Règle des 9 : Tête+cou = 9% (face ≈ 4.5%, cou ≈ 1%), chaque membre supérieur = 9% × 2 = 18%. Total ≈ 23-24%. Dépasse le seuil de 20% = indication hospitalisation spécialisée (CHUV/USZ centre brûlés).",
            incorrect: "❌ La règle des 9 : tête+cou = 9%, bras = 9% chacun. Ici face + cou + 2 bras ≈ 23-24%. Ce calcul guide la réanimation liquidienne et l'orientation vers centre brûlés.",
            naca: "NACA V"
          }
        },
        {
          patient: { hr: 122, spo2: 92, bp: "130/82", rr: 22, gcs: 14, ecg: "sinusal_tachy", state: "conscient" },
          text: "Protocole BSC Genève brûlés : refroidissement des brûlures. Quelle règle appliquez-vous ?",
          choices: [
            { text: "Eau à 15°C, maximum 20 minutes, arrêter si hypothermie (<35°C), pas de glace. Brûlures >20% : refroidissement partiel localisé seulement.", correct: true },
            { text: "Eau froide (5°C) le plus longtemps possible pour stopper la brûlure en profondeur", correct: false },
            { text: "Pas de refroidissement — aggrave les lésions en vasoconstriction", correct: false }
          ],
          feedback: {
            correct: "✅ Protocole PICA/BSC Genève : eau à 15°C exactement (ni froide ni tiède), 20 minutes max, surveiller température centrale. Sur >20% de surface, risque d'hypothermie systémique si refroidissement total — refroidissement localisé seulement.",
            incorrect: "❌ L'eau glacée (<10°C) aggrave les lésions tissulaires par vasoconstriction et risque d'hypothermie. Pas de refroidissement du tout est aussi une erreur — il réduit la profondeur de brûlure si appliqué dans les 30 min.",
            naca: "NACA V"
          }
        },
        {
          patient: { hr: 124, spo2: 92, bp: "128/80", rr: 22, gcs: 13, ecg: "sinusal_tachy", state: "conscient" },
          text: "Le patient souffre énormément. Morphine demandée par SMUR. Vous préparez 10mg dans 10cc. Quelle surveillance ?",
          choices: [
            { text: "FR, SpO₂ continue, niveau de conscience, analgésie (EVA), avoir naloxone prête", correct: true },
            { text: "TA seule suffit comme surveillance post-morphine", correct: false },
            { text: "La morphine est contre-indiquée sur brûlé inhalation — risque dépression respiratoire", correct: false }
          ],
          feedback: {
            correct: "✅ Surveillance morphine : dépression respiratoire (FR), SaO₂, sédation excessive (conscience), efficacité (EVA). Naloxone à portée. La morphine est indiquée sur brûlé avec l'inhalation — la douleur est réelle et la gestion de la FR est possible par ventilation assistée si nécessaire.",
            incorrect: "❌ La TA seule est insuffisante. La dépression respiratoire est le risque principal de la morphine, surtout avec inhalation de fumée déjà présente. La morphine reste indiquée (douleur brûlure justifie antalgique puissant).",
            naca: "NACA V"
          }
        },
        {
          patient: { hr: 116, spo2: 93, bp: "126/78", rr: 20, gcs: 14, ecg: "sinusal", state: "conscient" },
          text: "Centre brûlés : CHUV ou HUG ? Qu'est-ce qui guide l'orientation selon les protocoles BSC Genève ?",
          choices: [
            { text: "Surface >20%, localisation face/mains/périnée, brûlures électriques/chimiques, inhalation : centre brûlés CHUV (Lausanne) ou USZ (Zurich) selon disponibilité et localisation géographique", correct: true },
            { text: "HUG Genève pour tous les brûlés genevois — logique géographique", correct: false },
            { text: "Toujours CHUV : seul centre brûlés suisse reconnu", correct: false }
          ],
          feedback: {
            correct: "✅ Protocole BSC Genève : critères de transfert centre brûlés — >20% SCB, localisation critique, brûlures spéciales, inhalation. CHUV et USZ sont les 2 centres suisses de référence. Régulation médicale SMUR choisit selon disponibilité lit et distance.",
            incorrect: "❌ HUG ne dispose pas d'unité de brûlés spécialisée. CHUV et USZ sont les centres de référence. Le patient ici cumule inhalation + >20% SCB + face = critères de transfert en centre spécialisé.",
            naca: "NACA V"
          }
        }
      ]
    }

  ];
