// Tout le contenu du site, en français et en anglais. Les composants ne font que l'afficher.

export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];

export type SkillGroup = { id: string; name: string; icon: "network" | "server" | "shield" | "workflow"; summary: string; tools: string[] };
export type Fact = { value: string; label: string };
export type Step = { period: string; title: string; place: string; text: string; kind: "pro" | "formation" | "projet" };
export type Block = { title: string; text: string };
export type Project = {
  slug: string; name: string; kicker: string; description: string; result: string;
  stack: string[]; repo: string; preview: "fabric" | "k8s" | "gitops"; domain: string;
  study: { context: string; goal: string; how: string[]; decisions: Block[]; challenges: Block[]; results: Fact[]; next: string[] };
};
export type Testimonial = { quote: string; name: string; role: string };

const common = {
  firstName: "Hayoub",
  lastName: "Mouffok",
  email: "hayoub.mouffok@gmail.com",
  linkedin: "https://www.linkedin.com/in/hayoub-mouffok-47256b214",
  github: "https://github.com/HayoubMouffok",
  site: "https://hayoubmouffok.github.io",
};

const repos = {
  k8s: "https://github.com/HayoubMouffok/k8s-adaptive-security-orchestrator",
  fabric: "https://github.com/HayoubMouffok/evpn-vxlan-netdevops",
  gitops: "https://github.com/HayoubMouffok/k8s-gitops-platform",
};

const fr = {
  locale: "fr" as Locale,
  profile: {
    ...common,
    location: "Île-de-France",
    title: "Ingénieur DevOps, systèmes, réseaux et cybersécurité",
    titleHtml: ["Ingénieur ", "DevOps", ", systèmes, réseaux et cybersécurité."],
    tagline: "J'automatise les infrastructures, je les fais tourner et je les protège, du routage jusqu'au cluster.",
    available: "Disponible immédiatement",
    description:
      "Ingénieur DevOps, systèmes, réseaux et cybersécurité en Île-de-France : Kubernetes, CI/CD, BGP et EVPN-VXLAN, Linux et Active Directory, détection et réponse aux intrusions. Disponible immédiatement.",
  },
  ui: {
    nav: [
      { id: "a-propos", label: "À propos" },
      { id: "competences", label: "Compétences" },
      { id: "projets", label: "Projets" },
      { id: "parcours", label: "Parcours" },
      { id: "contact", label: "Contact" },
    ],
    contactCta: "Me contacter",
    discover: "Découvrir mes projets",
    themeToDark: "Passer en mode sombre",
    themeToLight: "Passer en mode clair",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    backTop: "Retour en haut de page",
    skip: "Aller au contenu",
    langSwitch: "English",
    langSwitchLabel: "Read in English",
    hoverHint: "survolez un domaine",
    domains: "4 domaines",
    tools: "outils",
    supervision: "Supervision",
    viewProject: "Lire l'étude de cas",
    sourceCode: "Code source",
    caseStudy: "Étude de cas",
    back: "Tous les projets",
    sections: { context: "Le contexte", how: "Comment ça marche", decisions: "Les choix techniques", challenges: "Les difficultés", results: "Les résultats", next: "Et ensuite" },
    nextProject: "Projet suivant",
    kinds: { pro: "Expérience", formation: "Formation", projet: "Projet" },
    footer: "Conçu et déployé par moi, en continu sur GitHub Pages.",
    terminal: "Version terminal",
    cv: "Télécharger mon CV",
    cvList: [["DevOps", "DevOps"], ["Réseaux", "Reseaux"], ["Systèmes", "Systemes"], ["Cybersécurité", "Securite"]] as [string, string][],
    form: {
      title: "Un poste, un projet, une question ?", titleEnd: "Parlons-en.",
      intro: "Je cherche un poste d'ingénieur DevOps, systèmes, réseaux ou cybersécurité en Île-de-France, disponible immédiatement.",
      name: "Nom", namePh: "Votre nom", email: "E-mail", emailPh: "vous@entreprise.fr", company: "Entreprise (facultatif)", companyPh: "Votre entreprise",
      message: "Message", messagePh: "Le poste, le contexte, vos questions…", send: "Envoyer le message", sending: "Envoi…",
      sent: "Message envoyé. Je reviens vers vous rapidement.", error: "L'envoi a échoué. Écrivez-moi directement à", copy: "Copier l'adresse e-mail",
      subject: "Portfolio : nouveau message",
    },
    testimonials: "Ils ont travaillé avec moi",
  },
  about: {
    title: "Le réseau, le serveur, le pipeline. Et ce qui les protège.",
    paragraphs: [
      "J'ai commencé par le réseau : DUT Réseaux et Télécommunications, formation Cisco CCNA, puis une licence en administration et sécurité des systèmes. Chez Redpill, en alternance pendant deux ans et demi, j'ai administré la production Linux et AWS, mis en place les pipelines CI/CD et déployé en deux semaines un VPN pour 80 personnes, sans coupure.",
      "Au CNAM, j'ai consacré mon mémoire de Master à la sécurité de Kubernetes : détecter une attaque dans un conteneur et la bloquer automatiquement. Je l'ai depuis prolongé en un projet open source mesuré sur des attaques rejouées.",
      "Aujourd'hui, je cherche une équipe où réseau, systèmes, sécurité et automatisation se rencontrent. C'est là que je suis le plus utile : je comprends le paquet qui passe, le serveur qui le reçoit et le pipeline qui le déploie.",
    ],
    facts: [
      { value: "3 ans et demi", label: "d'expérience en entreprise" },
      { value: "Bac+5", label: "Master Réseaux et Objets Connectés, CNAM" },
      { value: "30 ms", label: "pour bloquer une attaque dans Kubernetes" },
      { value: "80", label: "personnes sur un VPN déployé sans coupure" },
    ] as Fact[],
  },
  skillsHead: { title: "Quatre domaines, une même façon de travailler.", intro: "Comprendre, automatiser, mesurer. Les outils changent selon la couche, la méthode reste la même." },
  skills: [
    { id: "devops", name: "DevOps et cloud", icon: "workflow", summary: "Pipelines, infrastructure as code et clusters.",
      tools: ["Kubernetes", "Docker", "Helm", "Argo CD", "Terraform", "Ansible", "GitLab CI", "Jenkins", "GitHub Actions", "AWS"] },
    { id: "reseau", name: "Réseaux", icon: "network", summary: "Du VLAN au datacenter EVPN.",
      tools: ["TCP/IP", "VLAN", "BGP", "OSPF", "EVPN-VXLAN", "OpenVPN", "Téléphonie IP", "NetBox"] },
    { id: "systemes", name: "Systèmes", icon: "server", summary: "Serveurs Linux et Windows en production.",
      tools: ["Linux Debian/Ubuntu", "Windows Server", "Active Directory", "Azure AD", "VMware", "Bash", "PowerShell", "Python"] },
    { id: "securite", name: "Cybersécurité", icon: "shield", summary: "Détecter, contenir, prouver.",
      tools: ["Falco", "KubeArmor", "Kyverno", "Trivy", "HashiCorp Vault", "Zero Trust", "Segmentation réseau", "MITRE ATT&CK"] },
  ] as SkillGroup[],
  observability: ["Prometheus", "Grafana", "ELK", "Zabbix", "Nagios"],
  projectsHead: { title: "Des projets mesurés, pas seulement montés.", intro: "Chaque projet est publié avec son code, ses tests automatisés et des résultats que l'on peut rejouer." },
  projects: [
    {
      slug: "k8s-reponse-intrusions", preview: "k8s", domain: "securite", repo: repos.k8s,
      name: "Réponse automatique aux intrusions Kubernetes",
      kicker: "Cybersécurité · Kubernetes",
      description: "Falco détecte une attaque dans un conteneur, un orchestrateur Python la classe selon MITRE ATT&CK et applique une politique KubeArmor, NetworkPolicy ou Kyverno ciblée sur le seul pod attaqué.",
      result: "6 attaques sur 6 bloquées, 0 faux positif, 30 ms de la détection au blocage.",
      stack: ["k3s", "Falco", "KubeArmor", "Kyverno", "Python", "Prometheus", "Grafana"],
      study: {
        context: "Dans un cluster Kubernetes, détecter une intrusion ne suffit pas : entre l'alerte et l'action d'un humain, il peut se passer des dizaines de minutes. Mon mémoire de Master posait une question simple : peut-on passer de la détection au blocage automatiquement, sans casser les applications légitimes ?",
        goal: "Bloquer une attaque en moins d'une seconde, uniquement sur le pod concerné, avec une preuve chiffrée : taux de détection, faux positifs, blocage effectif et latence.",
        how: [
          "Falco observe les appels système de chaque conteneur grâce à eBPF et lève une alerte sur un comportement suspect : lecture de /etc/shadow, shell, connexion vers un serveur de contrôle.",
          "Falcosidekick transmet l'alerte à un orchestrateur Python, qui la classe selon une technique MITRE ATT&CK.",
          "Selon la gravité, l'orchestrateur génère une politique ciblée sur le pod attaqué (par ses labels) : KubeArmor pour bloquer dans le noyau, NetworkPolicy pour couper un flux, Kyverno pour refuser un kubectl exec.",
          "Les alertes moins certaines passent en audit et attendent une validation humaine ; sans réponse, la politique expire d'elle-même.",
          "Prometheus et Grafana suivent les alertes, les blocages, les validations en attente et la latence.",
        ],
        decisions: [
          { title: "Cibler le pod, pas le namespace", text: "Bloquer tout un namespace arrête l'attaque mais aussi les applications voisines. Les politiques utilisent les labels du pod attaqué pour ne toucher que lui." },
          { title: "Bloquer dans le noyau", text: "KubeArmor s'appuie sur AppArmor : l'attaque est refusée par le noyau, même si l'attaquant contourne l'application. Il a fallu passer de Minikube à k3s pour obtenir un vrai blocage." },
          { title: "Garder un humain dans la boucle", text: "Les alertes de faible priorité ne bloquent pas d'office : elles créent une politique en audit qu'un humain confirme ou infirme. Les faux positifs sont comptés." },
        ],
        challenges: [
          { title: "La limite d'AppArmor sur kubectl exec", text: "AppArmor ne contrôle pas le premier binaire lancé par un kubectl exec. J'ai ajouté une seconde couche : une règle Kyverno, écrite en CEL, qui refuse l'exec au niveau de l'API Kubernetes dès qu'un shell est confirmé malveillant." },
          { title: "Une évaluation qui ne triche pas", text: "Les premiers chiffres étaient faussés : une alerte était comptée pour deux scénarios, une politique d'un essai précédent restait active. J'ai corrigé l'attribution, nettoyé l'état entre deux essais et rejoué chaque attaque après sa politique." },
        ],
        results: [
          { value: "100 %", label: "de détection (6 attaques sur 6)" },
          { value: "0", label: "faux positif sur 4 actions légitimes" },
          { value: "6/6", label: "attaques rejouées bloquées" },
          { value: "30 ms", label: "de la détection au blocage, contre 0,9 s dans la v1" },
        ],
        next: ["Passer KubeArmor en mode BPF-LSM pour couvrir le premier binaire sans Kyverno.", "Tester la tenue en charge : 1 000 alertes, et mesurer où l'orchestrateur décroche."],
      },
    },
    {
      slug: "reseau-datacenter", preview: "fabric", domain: "reseau", repo: repos.fabric,
      name: "Réseau datacenter automatisé",
      kicker: "Réseau · Automatisation",
      description: "Une fabric spine-leaf BGP et EVPN-VXLAN dont les configurations sont générées depuis NetBox, puis reconstruites et testées automatiquement à chaque modification.",
      result: "Sessions BGP, EVPN, ECMP et ping L2 vérifiés à chaque push.",
      stack: ["FRRouting", "EVPN-VXLAN", "NetBox", "containerlab", "pytest", "Robot Framework"],
      study: {
        context: "Dans beaucoup d'équipes réseau, les configurations des équipements sont écrites à la main et l'inventaire vit à côté. Les deux finissent par diverger, et une modification se teste en production.",
        goal: "Faire de l'inventaire la seule source de vérité : décrire le réseau une fois, en déduire toutes les configurations, et tester le résultat avant de l'appliquer.",
        how: [
          "Les équipements, interfaces, adresses IP, câbles et numéros d'AS sont saisis dans NetBox.",
          "Un script Python lit NetBox (pynetbox) et génère, avec des gabarits Jinja2, la configuration FRRouting de chaque switch, le script VXLAN des leafs et la topologie containerlab.",
          "containerlab démarre la fabric : deux spines, deux leafs et deux hôtes.",
          "pytest et Robot Framework vérifient les sessions BGP et EVPN, l'ECMP via les deux spines et le ping de niveau 2 entre les hôtes à travers le tunnel VXLAN.",
          "GitHub Actions rejoue toute la chaîne à chaque push.",
        ],
        decisions: [
          { title: "Déduire les voisins BGP des câbles", text: "Aucune liste de voisins n'est écrite à la main : le script les déduit des câbles déclarés dans NetBox. Un câble ajouté dans l'inventaire devient une session BGP." },
          { title: "eBGP en underlay, EVPN en overlay", text: "Le modèle des datacenters actuels : un AS par leaf, l'ECMP pour la redondance, et EVPN pour étendre un même réseau de niveau 2 entre deux racks." },
          { title: "Des tests lisibles par tous", text: "Robot Framework décrit les vérifications en phrases simples, et le rapport HTML est publié à chaque exécution de la CI." },
        ],
        challenges: [
          { title: "Un datacenter dans une CI", text: "Démarrer NetBox, générer les configurations et lancer quatre routeurs dans un runner GitHub Actions demande des étapes rapides et déterministes, sans état laissé entre deux exécutions." },
        ],
        results: [
          { value: "4/4", label: "switches avec sessions BGP et EVPN établies" },
          { value: "2", label: "chemins ECMP vers chaque loopback" },
          { value: "0", label: "ligne de configuration écrite à la main" },
        ],
        next: ["Routage symétrique IRB et multi-tenant (VRF).", "Validation des configurations avec Batfish avant déploiement."],
      },
    },
    {
      slug: "k8s-gitops", preview: "gitops", domain: "devops", repo: repos.gitops,
      name: "Plateforme Kubernetes GitOps",
      kicker: "DevOps · GitOps",
      description: "Terraform installe Argo CD, qui déploie depuis Git l'application, l'accès HTTPS, la supervision et les règles de sécurité. Chaque modification est testée sur un vrai cluster avant d'arriver en production.",
      result: "8 applications synchronisées, HTTPS automatique, images non conformes refusées.",
      stack: ["Terraform", "Argo CD", "Helm", "cert-manager", "Kyverno", "Trivy"],
      study: {
        context: "Un cluster configuré à la main dérive vite : personne ne sait plus exactement ce qui tourne, ni pourquoi. Le GitOps inverse la logique : Git décrit l'état voulu, et le cluster s'y aligne en permanence.",
        goal: "Une plateforme complète, prête pour la production, entièrement décrite dans Git, installable en une commande et testée de bout en bout à chaque modification.",
        how: [
          "Terraform installe Argo CD et une application racine.",
          "Argo CD déploie le reste selon le modèle app-of-apps : ingress-nginx, cert-manager, Prometheus et Grafana, Kyverno et ses politiques, puis l'application.",
          "L'application est un chart Helm durci : utilisateur non root, système de fichiers en lecture seule, capacités supprimées, autoscaling et NetworkPolicy.",
          "La CI lance helm lint, kubeconform, terraform validate et un scan Trivy, puis crée un vrai cluster kind et vérifie le résultat.",
        ],
        decisions: [
          { title: "Git comme seule source de vérité", text: "Synchronisation automatique, auto-réparation et nettoyage : une modification faite à la main sur le cluster est annulée, une ressource retirée de Git est supprimée." },
          { title: "La sécurité à l'admission", text: "Kyverno refuse les images sans version précise, les conteneurs sans limites de ressources et ceux qui tournent en root, avant même qu'ils démarrent." },
          { title: "Tester sur un vrai cluster", text: "La CI ne se contente pas de valider des fichiers : elle installe toute la plateforme sur kind et vérifie l'HTTPS, la supervision et les refus de Kyverno." },
        ],
        challenges: [
          { title: "L'ordre de déploiement", text: "cert-manager doit exister avant les certificats, Kyverno avant ses politiques. Les sync waves d'Argo CD imposent cet ordre sans script." },
        ],
        results: [
          { value: "8", label: "applications synchronisées et saines" },
          { value: "HTTPS", label: "certificat émis automatiquement par cert-manager" },
          { value: "100 %", label: "de la plateforme décrite dans Git" },
        ],
        next: ["Gestion des secrets avec External Secrets et Vault.", "Déploiement progressif (canary) avec Argo Rollouts."],
      },
    },
  ] as Project[],
  timelineHead: { title: "Du câble au cluster.", intro: "Six ans de réseau, de systèmes et de sécurité, entre l'entreprise, la recherche et mes projets personnels." },
  timeline: [
    { period: "2026 — aujourd'hui", title: "Projet personnel", place: "Haltere Ego", kind: "projet", text: "Application de suivi de musculation en bêta, conteneurisée et hébergée chez OVH, que je développe sur mon temps libre. Ma priorité : un poste d'ingénieur en CDI." },
    { period: "2024 — 2025", title: "Ingénieur chercheur, sécurité Kubernetes", place: "CNAM, Paris", kind: "pro", text: "Architecture de sécurité adaptative, de la détection à l'action : une réponse en 0,9 s au lieu d'environ 50 minutes à la main." },
    { period: "2023 — 2025", title: "Master Réseaux et Objets Connectés", place: "CNAM, Paris", kind: "formation", text: "Mémoire : orchestration dynamique de politiques de sécurité dans Kubernetes." },
    { period: "2022 — 2024", title: "Administrateur systèmes et réseaux", place: "Redpill, Paris", kind: "pro", text: "Production Linux et AWS, CI/CD avec GitLab CI et Jenkins, Ansible et Terraform, VPN pour 80 personnes, gestion des accès et des secrets." },
    { period: "2022 — 2023", title: "Licence pro Administration et sécurité des systèmes et réseaux", place: "Université Sorbonne Paris Nord", kind: "formation", text: "Administration système, sécurité des réseaux, services d'infrastructure." },
    { period: "2020", title: "Stage DSI, systèmes et téléphonie IP", place: "Mairie de Saint-Ouen", kind: "pro", text: "Active Directory, Azure AD, postes et lignes de téléphonie IP." },
    { period: "2020 — 2022", title: "DUT Réseaux et Télécommunications, CCNA 2", place: "Université Sorbonne Paris Nord", kind: "formation", text: "Les fondamentaux : routage, commutation, télécoms." },
  ] as Step[],
  // Recommandations : à remplir uniquement avec de vraies citations, avec l'accord de leurs auteurs.
  testimonials: [] as Testimonial[],
};

const en: typeof fr = {
  locale: "en",
  profile: {
    ...common,
    location: "Paris area, France",
    title: "DevOps, Systems, Network and Security Engineer",
    titleHtml: ["", "DevOps", ", systems, network and security engineer."],
    tagline: "I automate infrastructure, keep it running and keep it safe, from the routing table to the cluster.",
    available: "Available now",
    description:
      "DevOps, systems, network and security engineer in the Paris area: Kubernetes, CI/CD, BGP and EVPN-VXLAN, Linux and Active Directory, intrusion detection and response. Available now.",
  },
  ui: {
    nav: [
      { id: "a-propos", label: "About" },
      { id: "competences", label: "Skills" },
      { id: "projets", label: "Projects" },
      { id: "parcours", label: "Experience" },
      { id: "contact", label: "Contact" },
    ],
    contactCta: "Get in touch",
    discover: "See my projects",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backTop: "Back to top",
    skip: "Skip to content",
    langSwitch: "Français",
    langSwitchLabel: "Lire en français",
    hoverHint: "hover a domain",
    domains: "4 domains",
    tools: "tools",
    supervision: "Monitoring",
    viewProject: "Read the case study",
    sourceCode: "Source code",
    caseStudy: "Case study",
    back: "All projects",
    sections: { context: "Context", how: "How it works", decisions: "Technical choices", challenges: "Challenges", results: "Results", next: "What's next" },
    nextProject: "Next project",
    kinds: { pro: "Experience", formation: "Education", projet: "Project" },
    footer: "Designed and shipped by me, continuously deployed on GitHub Pages.",
    terminal: "Terminal version",
    cv: "Download my resume (French)",
    cvList: [["DevOps", "DevOps"], ["Network", "Reseaux"], ["Systems", "Systemes"], ["Security", "Securite"]],
    form: {
      title: "A role, a project, a question?", titleEnd: "Let's talk.",
      intro: "I'm looking for a DevOps, systems, network or security engineering role in the Paris area, available now. I work in French and English.",
      name: "Name", namePh: "Your name", email: "Email", emailPh: "you@company.com", company: "Company (optional)", companyPh: "Your company",
      message: "Message", messagePh: "The role, the context, your questions…", send: "Send message", sending: "Sending…",
      sent: "Message sent. I'll get back to you shortly.", error: "Sending failed. Email me directly at", copy: "Copy email address",
      subject: "Portfolio: new message",
    },
    testimonials: "What people say",
  },
  about: {
    title: "The network, the server, the pipeline. And what keeps them safe.",
    paragraphs: [
      "I started with networking: a two-year degree in Networks and Telecommunications, Cisco CCNA training, then a bachelor's in systems and network administration and security. At Redpill, during two and a half years of work-study, I ran Linux and AWS production, built the CI/CD pipelines and rolled out a VPN for 80 people in two weeks, with zero downtime.",
      "At CNAM, my Master's thesis focused on Kubernetes security: detecting an attack inside a container and blocking it automatically. I've since turned it into an open-source project, measured against replayed attacks.",
      "Today I'm looking for a team where networking, systems, security and automation meet. That's where I'm most useful: I understand the packet on the wire, the server that receives it and the pipeline that ships it.",
    ],
    facts: [
      { value: "3.5 years", label: "of industry experience" },
      { value: "MSc", label: "Networks and Connected Objects, CNAM" },
      { value: "30 ms", label: "to block an attack in Kubernetes" },
      { value: "80", label: "people on a VPN rolled out with zero downtime" },
    ],
  },
  skillsHead: { title: "Four domains, one way of working.", intro: "Understand, automate, measure. The tools change from layer to layer; the method stays the same." },
  skills: [
    { id: "devops", name: "DevOps and cloud", icon: "workflow", summary: "Pipelines, infrastructure as code and clusters.", tools: fr.skills[0].tools },
    { id: "reseau", name: "Networking", icon: "network", summary: "From VLANs to EVPN data centers.", tools: ["TCP/IP", "VLAN", "BGP", "OSPF", "EVPN-VXLAN", "OpenVPN", "IP telephony", "NetBox"] },
    { id: "systemes", name: "Systems", icon: "server", summary: "Linux and Windows servers in production.", tools: fr.skills[2].tools },
    { id: "securite", name: "Security", icon: "shield", summary: "Detect, contain, prove.", tools: ["Falco", "KubeArmor", "Kyverno", "Trivy", "HashiCorp Vault", "Zero Trust", "Network segmentation", "MITRE ATT&CK"] },
  ],
  observability: fr.observability,
  projectsHead: { title: "Projects that are measured, not just built.", intro: "Every project ships with its code, its automated tests and results you can replay." },
  projects: [
    {
      ...fr.projects[0],
      name: "Automated intrusion response for Kubernetes",
      kicker: "Security · Kubernetes",
      description: "Falco detects an attack inside a container, a Python orchestrator maps it to MITRE ATT&CK and applies a KubeArmor, NetworkPolicy or Kyverno policy scoped to the attacked pod only.",
      result: "6 of 6 attacks blocked, zero false positives, 30 ms from detection to block.",
      study: {
        context: "In a Kubernetes cluster, detecting an intrusion isn't enough: between the alert and a human acting on it, tens of minutes can go by. My Master's thesis asked a simple question: can we go from detection to blocking automatically, without breaking legitimate workloads?",
        goal: "Block an attack in under a second, on the affected pod only, with hard numbers to prove it: detection rate, false positives, effective blocking and latency.",
        how: [
          "Falco watches every container's system calls through eBPF and raises an alert on suspicious behavior: reading /etc/shadow, spawning a shell, calling out to a command-and-control server.",
          "Falcosidekick forwards the alert to a Python orchestrator, which maps it to a MITRE ATT&CK technique.",
          "Depending on severity, the orchestrator generates a policy scoped to the attacked pod (by its labels): KubeArmor to block in the kernel, a NetworkPolicy to cut a flow, Kyverno to deny kubectl exec.",
          "Lower-confidence alerts go to audit mode and wait for human approval; without an answer, the policy expires on its own.",
          "Prometheus and Grafana track alerts, blocks, pending approvals and latency.",
        ],
        decisions: [
          { title: "Target the pod, not the namespace", text: "Locking down a whole namespace stops the attack but also every neighboring app. Policies use the attacked pod's labels so nothing else is touched." },
          { title: "Block in the kernel", text: "KubeArmor relies on AppArmor: the attack is denied by the kernel, even if the attacker bypasses the application. Getting real enforcement meant moving from Minikube to k3s." },
          { title: "Keep a human in the loop", text: "Low-priority alerts don't block outright: they create an audit policy that a human confirms or rejects. False positives are counted." },
        ],
        challenges: [
          { title: "AppArmor's blind spot on kubectl exec", text: "AppArmor doesn't confine the first binary started by kubectl exec. I added a second layer: a Kyverno rule, written in CEL, that denies exec at the Kubernetes API as soon as a shell is confirmed malicious." },
          { title: "An evaluation that doesn't cheat", text: "The first numbers were skewed: one alert counted for two scenarios, and a policy from a previous run was still active. I fixed the attribution, reset state between runs and replayed every attack after its policy." },
        ],
        results: [
          { value: "100%", label: "detection (6 of 6 attacks)" },
          { value: "0", label: "false positives across 4 legitimate actions" },
          { value: "6/6", label: "replayed attacks blocked" },
          { value: "30 ms", label: "from detection to block, down from 0.9 s in v1" },
        ],
        next: ["Switch KubeArmor to BPF-LSM to cover the first binary without Kyverno.", "Load-test with 1,000 alerts and find where the orchestrator breaks."],
      },
    },
    {
      ...fr.projects[1],
      name: "Automated data center network",
      kicker: "Networking · Automation",
      description: "A BGP and EVPN-VXLAN spine-leaf fabric whose configurations are generated from NetBox, then rebuilt and tested automatically on every change.",
      result: "BGP, EVPN, ECMP and L2 reachability checked on every push.",
      study: {
        context: "In many network teams, device configs are written by hand and the inventory lives somewhere else. The two drift apart, and changes get tested in production.",
        goal: "Make the inventory the single source of truth: describe the network once, derive every configuration from it, and test the result before applying it.",
        how: [
          "Devices, interfaces, IP addresses, cables and AS numbers are recorded in NetBox.",
          "A Python script reads NetBox (pynetbox) and uses Jinja2 templates to generate each switch's FRRouting config, the leaves' VXLAN setup and the containerlab topology.",
          "containerlab brings up the fabric: two spines, two leaves and two hosts.",
          "pytest and Robot Framework check BGP and EVPN sessions, ECMP across both spines, and layer-2 ping between hosts through the VXLAN tunnel.",
          "GitHub Actions replays the whole chain on every push.",
        ],
        decisions: [
          { title: "Derive BGP neighbors from cables", text: "No neighbor list is written by hand: the script derives them from the cables declared in NetBox. A cable added to the inventory becomes a BGP session." },
          { title: "eBGP underlay, EVPN overlay", text: "The modern data center model: one AS per leaf, ECMP for redundancy, and EVPN to stretch a single layer-2 network across racks." },
          { title: "Tests anyone can read", text: "Robot Framework describes checks in plain sentences, and the HTML report is published on every CI run." },
        ],
        challenges: [
          { title: "A data center inside CI", text: "Starting NetBox, generating configs and booting four routers in a GitHub Actions runner requires fast, deterministic steps with no state left between runs." },
        ],
        results: [
          { value: "4/4", label: "switches with BGP and EVPN sessions up" },
          { value: "2", label: "ECMP paths to every loopback" },
          { value: "0", label: "lines of config written by hand" },
        ],
        next: ["Symmetric IRB routing and multi-tenancy (VRFs).", "Config validation with Batfish before deployment."],
      },
    },
    {
      ...fr.projects[2],
      name: "GitOps Kubernetes platform",
      kicker: "DevOps · GitOps",
      description: "Terraform installs Argo CD, which deploys the app, HTTPS ingress, monitoring and security rules from Git. Every change is tested on a real cluster before it reaches production.",
      result: "8 apps in sync, automatic HTTPS, non-compliant images rejected.",
      study: {
        context: "A hand-configured cluster drifts fast: nobody knows exactly what's running, or why. GitOps flips the logic: Git describes the desired state, and the cluster keeps converging to it.",
        goal: "A complete, production-ready platform, fully described in Git, installable with one command and tested end to end on every change.",
        how: [
          "Terraform installs Argo CD and a root application.",
          "Argo CD deploys everything else with the app-of-apps pattern: ingress-nginx, cert-manager, Prometheus and Grafana, Kyverno and its policies, then the application.",
          "The application is a hardened Helm chart: non-root user, read-only filesystem, dropped capabilities, autoscaling and a NetworkPolicy.",
          "CI runs helm lint, kubeconform, terraform validate and a Trivy scan, then creates a real kind cluster and checks the result.",
        ],
        decisions: [
          { title: "Git as the single source of truth", text: "Automatic sync, self-heal and prune: a manual change on the cluster gets reverted, and anything removed from Git is deleted." },
          { title: "Security at admission", text: "Kyverno rejects unpinned images, containers without resource limits and anything running as root, before it even starts." },
          { title: "Test on a real cluster", text: "CI doesn't just lint files: it installs the whole platform on kind and checks HTTPS, monitoring and Kyverno denials." },
        ],
        challenges: [
          { title: "Deployment order", text: "cert-manager must exist before certificates, Kyverno before its policies. Argo CD sync waves enforce that order without scripts." },
        ],
        results: [
          { value: "8", label: "apps synced and healthy" },
          { value: "HTTPS", label: "certificate issued automatically by cert-manager" },
          { value: "100%", label: "of the platform described in Git" },
        ],
        next: ["Secrets management with External Secrets and Vault.", "Progressive delivery (canary) with Argo Rollouts."],
      },
    },
  ],
  timelineHead: { title: "From cable to cluster.", intro: "Six years of networking, systems and security, across industry, research and personal projects." },
  timeline: [
    { period: "2026 — now", title: "Personal project", place: "Haltere Ego", kind: "projet", text: "Strength-training tracking app in beta, containerized and hosted on OVH, built in my spare time. My priority: a full-time engineering role." },
    { period: "2024 — 2025", title: "Research engineer, Kubernetes security", place: "CNAM, Paris", kind: "pro", text: "Adaptive security architecture, from detection to action: a 0.9 s response instead of roughly 50 minutes by hand." },
    { period: "2023 — 2025", title: "MSc Networks and Connected Objects", place: "CNAM, Paris", kind: "formation", text: "Thesis: dynamic orchestration of security policies in Kubernetes." },
    { period: "2022 — 2024", title: "Systems and network administrator (work-study)", place: "Redpill, Paris", kind: "pro", text: "Linux and AWS production, CI/CD with GitLab CI and Jenkins, Ansible and Terraform, VPN for 80 people, access and secrets management." },
    { period: "2022 — 2023", title: "Professional bachelor's, systems and network administration and security", place: "Sorbonne Paris Nord University", kind: "formation", text: "System administration, network security, infrastructure services." },
    { period: "2020", title: "IT department internship, systems and IP telephony", place: "City of Saint-Ouen", kind: "pro", text: "Active Directory, Azure AD, IP phones and lines." },
    { period: "2020 — 2022", title: "Two-year degree in Networks and Telecommunications, CCNA 2", place: "Sorbonne Paris Nord University", kind: "formation", text: "The fundamentals: routing, switching, telecoms." },
  ],
  testimonials: [],
};

export const content = { fr, en };
export type Content = typeof fr;

// Chemins équivalents d'une langue à l'autre
export const paths = {
  home: (l: Locale) => (l === "fr" ? "/" : "/en/"),
  project: (l: Locale, slug: string) => (l === "fr" ? `/projets/${slug}/` : `/en/projects/${slug}/`),
};
