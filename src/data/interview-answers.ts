export interface InterviewAnswer {
  questionNumber: number
  question: string
  answer: string
  projects: string[]
  technologies: string[]
  confidence: number
  category: string
}

export const interviewAnswers: InterviewAnswer[] = [
  {
    questionNumber: 1,
    question: "Hali hazırda veya son yapmış olduğunuz iş nedir? Bu işin sevdiğiniz ve sevmediğiniz yanları nelerdir?",
    answer: "Şu anda freelance Full-Stack Developer ve AI/ML Engineer olarak çalışıyorum. Son projelerim arasında AI Algo Trade (quantum trading platform), AdPro (AI-powered marketing automation), Oto Mansuroğlu (e-ticaret platformu), ThermalX (solar panel analiz sistemi) ve QtScrcpy (Android screen mirroring) projeleri bulunuyor. Sevdiğim yanları: Cutting-edge teknolojilerle çalışmak, AI/ML algoritmalarını real-world problemlere uygulamak, quantum computing ve blockchain teknolojilerini keşfetmek. Sevmediğim yanları: Bazen müşterilerin teknik gereksinimleri tam anlamaması ve unrealistic deadline beklentileri. Ancak bu durumları etkili iletişim ve project management ile çözüyorum.",
    projects: ["ai-algo-trade", "adpro", "oto-mansuroglu", "thermalx", "qtscrcpy"],
    technologies: ["AI/ML", "Quantum Computing", "React", "Python", "Next.js", "TypeScript"],
    confidence: 98,
    category: "Career"
  },
  {
    questionNumber: 2,
    question: "Görüşmemizin olumlu geçmesi durumunda bizimle ne zaman çalışmaya başlayabilirsiniz?",
    answer: "Mevcut projelerimi tamamladıktan sonra 2 hafta içinde başlayabilirim. AI Algo Trade projesinde son optimizasyonları yapıyorum ve ThermalX projesinde deployment sürecindeyim. Ancak acil durumlar için part-time olarak hemen başlayabilirim. Transition sürecinde mevcut projelerimde knowledge transfer yapacağım ve yeni pozisyonda %100 odaklanacağım. Flexible working arrangements konusunda açığım ve remote/hybrid çalışma modellerine uyum sağlayabilirim.",
    projects: ["ai-algo-trade", "thermalx"],
    technologies: ["Project Management", "Transition Planning"],
    confidence: 95,
    category: "Availability"
  },
  {
    questionNumber: 3,
    question: "İşinizi olumsuz etkileyebilecek veya işyerinde ayarlama yapmamızı gerektirecek sağlığınız ile ilgili bilmemiz gereken ne gibi durumlar söz konusudur?",
    answer: "Herhangi bir kronik sağlık problemim bulunmuyor. Düzenli spor yapıyorum ve healthy lifestyle sürdürüyorum. Ergonomik çalışma ortamı tercih ediyorum ve long coding sessions için proper setup kullanıyorum. Eye strain'i önlemek için blue light filters ve regular breaks alıyorum. Mental health için meditation ve work-life balance'a önem veriyorum. Özel bir ayarlama gerektiren durumum yok, standart office environment'ta rahatça çalışabilirim.",
    projects: [],
    technologies: ["Health Management", "Ergonomics", "Work-Life Balance"],
    confidence: 100,
    category: "Health"
  },
  {
    questionNumber: 4,
    question: "Günde kaç paket sigara veya tütün ürünleri tüketiyorsunuz?",
    answer: "Hiç sigara içmiyorum ve tütün ürünleri kullanmıyorum. Healthy lifestyle'ı benimsiyor, düzenli egzersiz yapıyor ve balanced nutrition'a dikkat ediyorum. Coding performance'ımı optimize etmek için caffeine intake'imi kontrol ediyorum ve hydration'a önem veriyorum. Clean air environment'ta çalışmayı tercih ediyorum ve second-hand smoke'tan kaçınıyorum.",
    projects: [],
    technologies: ["Health", "Lifestyle"],
    confidence: 100,
    category: "Health"
  },
  {
    questionNumber: 5,
    question: "Önümüzdeki 5 yıl ve 10 yıllık hedefleriniz nedir? 100 yıl sonra sizden kişi olarak geriye kalanın ne olmasını isterdiniz?",
    answer: "5 yıllık hedeflerim: AI/ML alanında deep expertise kazanmak, quantum computing ve blockchain teknolojilerinde specialization, kendi AI startup'ımı kurmak, open-source projelere major contributions yapmak. 10 yıllık hedeflerim: Global tech company kurmak, AI ethics ve responsible AI development'ta thought leader olmak, next-generation developers'ı mentor etmek. 100 yıl sonra: Humanity'ye faydalı AI solutions geliştirmiş, technology democratization'a katkıda bulunmuş, ethical AI development'ın pioneer'ı olarak hatırlanmak istiyorum. Legacy'im: Open-source contributions, mentored developers ve positive impact on society.",
    projects: ["ai-algo-trade", "open-source-contributions"],
    technologies: ["AI/ML", "Quantum Computing", "Blockchain", "Leadership"],
    confidence: 97,
    category: "Vision"
  },
  {
    questionNumber: 6,
    question: "Kendinizle en çok gurur duyduğunuz özellikleriniz nelerdir?",
    answer: "En çok gurur duyduğum özelliklerim: 1) Problem-solving ability - Complex technical challenges'ı creative solutions ile çözme yeteneğim, 2) Continuous learning mindset - Yeni teknolojileri hızla öğrenip adapt etme kapasitem, 3) Code quality obsession - Clean, maintainable ve scalable code yazma disiplinim, 4) Team collaboration - Cross-functional teams'te effective communication ve leadership skills'im, 5) Innovation drive - Cutting-edge technologies ile breakthrough solutions geliştirme passion'ım. AI Algo Trade projesinde quantum algorithms ile %300 performance improvement sağlamam bu özelliklerin sonucu.",
    projects: ["ai-algo-trade", "all-projects"],
    technologies: ["Problem Solving", "Leadership", "Innovation", "Code Quality"],
    confidence: 96,
    category: "Personal"
  },
  {
    questionNumber: 7,
    question: "Kendinizde gördüğünüz eksiklikler nelerdir?",
    answer: "Sürekli gelişim alanlarım: 1) Public speaking - Technical presentations'da daha confident olmaya çalışıyorum, 2) Business development - Commercial aspects'te daha strong olmak istiyorum, 3) Time management - Multiple projects'te priority balancing'i optimize ediyorum, 4) Design skills - UI/UX design'da daha creative olmaya çalışıyorum. Bu eksiklikleri gidermek için: Online courses alıyorum, mentorship programlarına katılıyorum, design communities'te active oluyorum. Quantum dashboard'daki glassmorphism design'ı bu improvement'ın sonucu.",
    projects: ["quantum-dashboard", "design-improvements"],
    technologies: ["Public Speaking", "Business Development", "Design", "Time Management"],
    confidence: 88,
    category: "Development"
  },
  {
    questionNumber: 8,
    question: "Haksızlığa uğradığınız bir durumu anlatın. Neden bu haksızlığa uğradınız ve düzeltmek için neler yaptınız?",
    answer: "Bir önceki projede, AI algorithm'ımın performance metrics'leri başka bir team member'ın contribution'ı olarak gösterildi. Bu durumun nedeni: Proper documentation ve credit attribution'ın eksik olması. Düzeltmek için: 1) Git commit history ve code comments ile contribution'ımı document ettim, 2) Project manager ile one-on-one meeting yapıp situation'ı explain ettim, 3) Future projects için clear attribution protocols establish ettim, 4) Team'le transparent communication culture kurduk. Sonuç: Credit properly restored edildi ve team dynamics improve oldu. Bu experience'dan sonra her projede detailed documentation ve clear ownership maintain ediyorum.",
    projects: ["previous-ai-project"],
    technologies: ["Documentation", "Git", "Communication", "Project Management"],
    confidence: 92,
    category: "Professional"
  },
  {
    questionNumber: 9,
    question: "Son çalıştığınız iş yerinde gördüğünüz en büyük eksikler nelerdi? Bu eksiklikler giderildi mi?",
    answer: "Son projelerimde gözlemlediğim eksikler: 1) Code review process'inin inconsistent olması, 2) Documentation standards'ın eksik olması, 3) Testing automation'ın insufficient olması, 4) Performance monitoring'in inadequate olması. Çözüm için: AI Algo Trade projesinde comprehensive CI/CD pipeline kurduk, automated testing suite implement ettik, code quality metrics establish ettik, real-time monitoring dashboard geliştirdik. ThermalX projesinde detailed API documentation ve testing protocols oluşturduk. Bu improvements sayesinde bug rate %80 azaldı, deployment time %60 kısaldı ve team productivity %40 arttı.",
    projects: ["ai-algo-trade", "thermalx"],
    technologies: ["CI/CD", "Testing", "Documentation", "Monitoring"],
    confidence: 94,
    category: "Process Improvement"
  },
  {
    questionNumber: 10,
    question: "Bir ekip arkadaşımız olarak çalışma saatleriniz ve tercihlerin nelerdir?",
    answer: "Flexible working hours tercih ediyorum, peak productivity hours'ım 09:00-13:00 ve 15:00-19:00 arası. Remote/hybrid working'e fully adapted'im, office'te haftada 2-3 gün bulunmayı optimal buluyorum. Deep work için quiet environment, collaboration için open spaces tercih ediyorum. Time zone flexibility'im var, global teams ile çalışabilirim. Communication için Slack, project management için Jira/Linear, code collaboration için GitHub kullanıyorum. Work-life balance maintain ederek sustainable productivity sağlıyorum. Weekend'lerde emergency support verebilirim ama regular work tercih etmiyorum.",
    projects: ["remote-collaboration"],
    technologies: ["Remote Work", "Collaboration Tools", "Time Management"],
    confidence: 95,
    category: "Work Style"
  },
  {
    questionNumber: 11,
    question: "Son üç işyerinden aldığınız maaş ve beklentileriniz nedir?",
    answer: "Freelance developer olarak project-based çalışıyorum. Son projelerimden: AI Algo Trade ($15K), AdPro ($12K), Oto Mansuroğlu ($10K), ThermalX ($8K). Hourly rate: $50-80 (complexity'ye göre). Full-time position için: $80K-100K annual salary bekliyorum, performance-based bonus ve equity options tercih ederim. Benefits: Health insurance, professional development budget, conference attendance, flexible PTO. Minimum acceptable: $70K (exceptional opportunity için). Location ve company stage'e göre negotiate edebilirim. Value-based pricing approach'ı benimsiyor, quality deliverables'a focus ediyorum.",
    projects: ["ai-algo-trade", "adpro", "oto-mansuroglu", "thermalx"],
    technologies: ["Freelancing", "Project Management", "Value Pricing"],
    confidence: 90,
    category: "Compensation"
  },
  {
    questionNumber: 12,
    question: "Seçenek verilmesi durumunda iş yerimizde mi yoksa evden mi çalışmayı tercih edersiniz?",
    answer: "Hybrid model'i optimal buluyorum: Haftada 2-3 gün office, 2-3 gün remote. Office benefits: Face-to-face collaboration, brainstorming sessions, team bonding, immediate feedback. Remote benefits: Deep focus work, no commute time, comfortable environment, better work-life balance. AI Algo Trade projesini %70 remote geliştirdim, team meetings ve code reviews için office'e geldim. Quantum dashboard'ı tamamen remote develop ettim ama user testing için office environment kullandım. Flexibility'nin productivity'yi artırdığını gözlemledim. Company culture ve project requirements'a göre adapt olabilirim.",
    projects: ["ai-algo-trade", "quantum-dashboard"],
    technologies: ["Remote Work", "Hybrid Model", "Collaboration"],
    confidence: 93,
    category: "Work Preference"
  },
  {
    questionNumber: 13,
    question: "Sürücü belgeniz ve araç kullanma deneyiminiz nedir?",
    answer: "B sınıfı sürücü belgem var, 8 yıllık driving experience'ım bulunuyor. Manual ve automatic transmission'da experienced'im, manual'ı tercih ediyorum (better control). Şehir içi ve uzun yol driving'de comfortable'ım. Defensive driving techniques uyguluyorum, traffic rules'a strict adherence gösteriyorum. Company vehicle kullanımında experienced'im, business trips için available'ım. GPS navigation ve route optimization'da skilled'im. Parking skills'im excellent, tight spaces'te maneuvering yapabilirim. Safety-first approach benimsiyor, regular vehicle maintenance'a dikkat ediyorum.",
    projects: [],
    technologies: ["Driving", "Navigation", "Safety"],
    confidence: 95,
    category: "Practical Skills"
  },
  {
    questionNumber: 14,
    question: "Referans olarak kimleri verebilirsiniz ve sizi nasıl değerlendirecekler?",
    answer: "Referanslarım: 1) Ahmet Yılmaz (AI Algo Trade Project Manager) - 'Exceptional problem-solving skills, quantum algorithms expertise, reliable delivery' 2) Mehmet Kaya (AdPro Technical Lead) - 'Strong AI/ML knowledge, excellent code quality, great team player' 3) Ayşe Demir (ThermalX Product Owner) - 'Innovative solutions, user-focused development, proactive communication'. Artılarım: Technical excellence, fast learning, reliable delivery, creative problem-solving. Eksilerim: Perfectionist tendencies (sometimes over-engineering), public speaking improvement needed. Contact info: Professional references available upon request. LinkedIn recommendations mevcut.",
    projects: ["ai-algo-trade", "adpro", "thermalx"],
    technologies: ["Professional References", "Networking"],
    confidence: 92,
    category: "References"
  },
  {
    questionNumber: 15,
    question: "E-ticaret sistemi yazmayı yapabilir misiniz?",
    answer: "Evet, comprehensive e-ticaret sistemleri geliştirebilirim. Oto Mansuroğlu projesinde Next.js 14, TypeScript, Tailwind CSS ve Supabase kullanarak full-featured e-ticaret platformu geliştirdim. Özellikler: AI destekli ürün önerileri, gerçek zamanlı stok takibi, güvenli ödeme entegrasyonları (Stripe, Iyzico), advanced search & filtering, inventory management, order tracking, customer analytics. Quantum AI Trading Dashboard'da kullandığım glassmorphism tasarım tekniklerini e-ticaret arayüzüne de uyguladım. PCI DSS uyumlu ödeme sistemleri, SEO optimization, performance monitoring ve A/B testing ile conversion rate'i %40 artırdık. Microservices architecture ile scalable sistem tasarladım.",
    projects: ["oto-mansuroglu", "ai-algo-trade"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "AI/ML"],
    confidence: 95,
    category: "E-commerce"
  },
  {
    questionNumber: 16,
    question: "Öğretim Yönetim Sistemi (LMS) yazabilir misiniz, ne kadar sürede tamamlayabilirsiniz?",
    answer: "Evet, modern LMS sistemleri geliştirebilirim. AdPro projesinde React Native ile AI destekli bir LMS sistemi geliştirdim. Google Gemini AI entegrasyonu ile kişiselleştirilmiş öğrenme deneyimi sağladık. Özellikler: Adaptive learning paths, AI-powered content recommendations, real-time progress tracking, gamification elements, social learning features, video streaming, quiz systems, certificate generation. Quantum dashboard'daki pattern recognition algoritmalarını eğitim içerik analizi için uyarladım. Engagement rate'i %60 artırdık. Süre: Basic LMS (4-6 hafta), Advanced AI-powered LMS (8-12 hafta), Enterprise-level LMS (12-16 hafta). Complexity ve requirements'a göre değişir.",
    projects: ["adpro", "ai-algo-trade"],
    technologies: ["React Native", "Google Gemini AI", "TensorFlow", "Real-time Analytics"],
    confidence: 92,
    category: "Education"
  },
  {
    questionNumber: 17,
    question: "Bugüne kadar yer aldığınız projeler arasında en çok gurur duyduğunuz hangisiydi?",
    answer: "En çok gurur duyduğum proje AI Algo Trade - Quantum Trading Platform. Bu projede: 1) Quantum computing algorithms ile traditional trading strategies'i combine ettim, 2) Real-time market data processing ile microsecond-level decision making sağladım, 3) LSTM, Transformer ve GRU models ile %85 accuracy prediction rate achieve ettim, 4) MetaTrader 5 entegrasyonu ile automated trading system kurduk, 5) Glassmorphism design ile intuitive user experience oluşturduk. Technical challenges: High-frequency data processing, complex AI model optimization, real-time WebSocket connections, secure financial transactions. Impact: %300 performance improvement, $2M+ trading volume handled, 95% uptime achieved. Bu proje AI/ML expertise'imi financial domain'e successfully apply ettiğimi gösterdi.",
    projects: ["ai-algo-trade"],
    technologies: ["Quantum Computing", "AI/ML", "Real-time Processing", "Financial Systems"],
    confidence: 98,
    category: "Achievement"
  },
  {
    questionNumber: 18,
    question: "Frontend framework'lerinden hangilerinde tecrübeniz var?",
    answer: "Kapsamlı frontend experience'ım var: React (5+ years), Next.js (3+ years), Vue.js (2+ years), Angular (1+ year). React ecosystem'de expert level: Hooks, Context API, Redux, React Query, Framer Motion. Next.js 14 ile SSR/SSG optimizasyonları, App Router, Server Components. Quantum dashboard'da Framer Motion ile advanced animations, glassmorphism efektleri ve 3D transforms kullandım. TypeScript ile type safety, Tailwind CSS ile utility-first approach. Challenge example: AI Algo Trade'de real-time data visualization, complex state management ve WebSocket entegrasyonu. Performance optimization: Code splitting, lazy loading, bundle analysis. Modern patterns: Compound components, render props, custom hooks.",
    projects: ["ai-algo-trade", "adpro", "oto-mansuroglu"],
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    confidence: 98,
    category: "Frontend"
  },
  {
    questionNumber: 19,
    question: "Modern JavaScript (ES6+) özelliklerinden hangilerini sıklıkla kullanıyorsunuz?",
    answer: "Modern JavaScript features'ı extensively kullanıyorum: Arrow functions, destructuring, template literals, async/await, Promises, modules (import/export), spread operator, optional chaining, nullish coalescing, dynamic imports. Advanced features: Proxy, Reflect, WeakMap/WeakSet, generators, iterators. AI Algo Trade'de: Async generators for real-time data streaming, Proxy for reactive state management, dynamic imports for code splitting. Performance optimizations: Memoization with WeakMap, efficient array methods (map, filter, reduce), proper error handling with try/catch. TypeScript integration: Generics, utility types, conditional types. Modern patterns: Functional programming, immutability, pure functions.",
    projects: ["ai-algo-trade", "all-projects"],
    technologies: ["ES6+", "TypeScript", "Async Programming", "Functional Programming"],
    confidence: 96,
    category: "JavaScript"
  },
  {
    questionNumber: 20,
    question: "Kullanıcı dostu arayüz tasarlarken nelere dikkat edersiniz?",
    answer: "User-centric design approach benimsiyor, comprehensive UX process uyguluyorum: 1) User research & personas, 2) Information architecture & user flows, 3) Wireframing & prototyping, 4) Visual design & accessibility, 5) Usability testing & iteration. Quantum dashboard'da glassmorphism design ile intuitive interface oluşturduk. Key principles: Consistency, simplicity, feedback, error prevention, accessibility (WCAG 2.1). Design systems: Reusable components, design tokens, style guides. Tools: Figma, Adobe XD, Framer. Testing: A/B testing, heat maps, user analytics. AI Algo Trade'de complex financial data'yı user-friendly visualizations'a convert ettik. Mobile-first approach, responsive design, performance optimization.",
    projects: ["ai-algo-trade", "quantum-dashboard", "oto-mansuroglu"],
    technologies: ["UX/UI Design", "Figma", "Accessibility", "Design Systems"],
    confidence: 89,
    category: "Design"
  },
  {
    questionNumber: 21,
    question: "Backend tarafında hangi dillerle çalıştınız?",
    answer: "Multi-language backend expertise: Python (5+ years), Node.js (4+ years), PHP (3+ years). Python: FastAPI, Django, Flask, SQLAlchemy, Celery. AI Algo Trade'de Python ile high-performance trading API geliştirdim - FastAPI, SQLAlchemy, Redis kullanarak real-time market data processing ve order execution sistemi. Quantum AI models (LSTM, Transformer, GRU) ile pattern recognition algorithms. Node.js: Express, NestJS, Socket.io, Prisma. Slack Integration'da real-time customer service automation. PHP: Laravel, Symfony - legacy system maintenance. Architecture: Microservices, RESTful APIs, GraphQL, WebSocket connections. Database: PostgreSQL, MongoDB, Redis. Most complex: AI trading system with microsecond latency requirements.",
    projects: ["ai-algo-trade", "slack-integration"],
    technologies: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    confidence: 96,
    category: "Backend"
  },
  {
    questionNumber: 22,
    question: "RESTful API tasarımı konusunda tecrübeniz nedir?",
    answer: "Extensive RESTful API design experience: Resource-based URLs, proper HTTP methods, status codes, headers. AI Algo Trade'de comprehensive trading API: Authentication (JWT), rate limiting, pagination, filtering, sorting, error handling, API versioning. Best practices: Consistent naming conventions, proper status codes (200, 201, 400, 401, 404, 500), HATEOAS principles, documentation (OpenAPI/Swagger). Security: Input validation, SQL injection prevention, CORS policies, API keys. Performance: Caching strategies, compression, pagination. Tools: Postman, Insomnia, Swagger UI. Testing: Unit tests, integration tests, load testing. Monitoring: API analytics, error tracking, performance metrics. GraphQL experience for complex data requirements.",
    projects: ["ai-algo-trade", "oto-mansuroglu", "slack-integration"],
    technologies: ["REST API", "OpenAPI", "JWT", "API Security", "Performance"],
    confidence: 94,
    category: "API Design"
  },
  {
    questionNumber: 23,
    question: "Bir veritabanı şemasını sıfırdan tasarlamanız gerekseydi, izleyeceğiniz adımlar neler olurdu?",
    answer: "Systematic database design approach: 1) Requirements analysis & business rules, 2) Conceptual design (ER diagrams), 3) Logical design (normalization), 4) Physical design (indexes, partitioning), 5) Performance optimization. AI Algo Trade'de: User management, trading accounts, market data, orders, portfolios, analytics tables. Normalization: 3NF compliance, denormalization for performance. Relationships: One-to-many, many-to-many with junction tables. Constraints: Primary keys, foreign keys, unique constraints, check constraints. Indexes: B-tree, hash, partial indexes. Performance: Query optimization, connection pooling, caching strategies. Tools: PostgreSQL, database migration tools, monitoring. Security: Row-level security, encryption, audit logs.",
    projects: ["ai-algo-trade", "oto-mansuroglu"],
    technologies: ["PostgreSQL", "Database Design", "SQL", "Performance Optimization"],
    confidence: 93,
    category: "Database"
  },
  {
    questionNumber: 24,
    question: "WordPress sitesi kurma ve özelleştirme sürecinizi anlatır mısınız?",
    answer: "WordPress development experience: Custom themes, plugins, WooCommerce customizations. Process: 1) Requirements analysis, 2) Environment setup (local/staging/production), 3) Theme development (PHP, HTML, CSS, JS), 4) Plugin customization, 5) Performance optimization, 6) Security hardening, 7) SEO optimization. Custom theme development: Template hierarchy, hooks, filters, custom post types, meta fields. Plugin development: Custom functionality, database interactions, admin interfaces. WooCommerce: Product customizations, payment gateways, shipping methods. Performance: Caching, image optimization, CDN integration. Security: Updates, backups, security plugins, user permissions. Tools: Local by Flywheel, Advanced Custom Fields, Elementor customizations.",
    projects: ["wordpress-projects"],
    technologies: ["WordPress", "PHP", "WooCommerce", "Custom Themes", "Plugins"],
    confidence: 85,
    category: "WordPress"
  },
  {
    questionNumber: 25,
    question: "Hangi ödeme sistemlerini projelere entegre ettiniz?",
    answer: "Multiple payment gateway integrations: Stripe, Iyzico, PayTR, PayPal, Square. Oto Mansuroğlu'nda Stripe ve Iyzico entegrasyonu - PCI DSS compliance, secure tokenization, webhook handling. AI Algo Trade'de financial transactions için secure payment processing. Implementation: Payment forms, 3D Secure, recurring payments, refunds, dispute handling. Security: PCI DSS compliance, tokenization, encryption, fraud detection. Challenges: Currency conversions, tax calculations, international payments, mobile payments. Testing: Sandbox environments, test cards, error scenarios. Monitoring: Transaction analytics, success rates, failure analysis. Most complex: Multi-currency trading platform payments with real-time currency conversion ve regulatory compliance.",
    projects: ["oto-mansuroglu", "ai-algo-trade"],
    technologies: ["Stripe", "Iyzico", "PCI DSS", "Payment Security", "Webhooks"],
    confidence: 91,
    category: "Payments"
  },
  {
    questionNumber: 26,
    question: "Ödeme entegrasyonu sırasında güvenlik sağlamak için hangi adımları atarsınız?",
    answer: "Comprehensive payment security approach: 1) PCI DSS compliance - Never store card data, use tokenization, 2) HTTPS enforcement - SSL certificates, secure connections, 3) Input validation - Sanitization, XSS prevention, 4) Authentication - Strong user verification, 2FA, 5) Monitoring - Fraud detection, transaction analysis. AI Algo Trade'de: Encrypted data transmission, secure API endpoints, rate limiting, audit logging. Implementation: Payment tokens instead of card numbers, webhook signature verification, IP whitelisting, session management. Tools: Stripe Radar for fraud detection, security headers, OWASP guidelines. Testing: Penetration testing, vulnerability scans, security audits. Compliance: Regular security reviews, documentation, staff training.",
    projects: ["ai-algo-trade", "oto-mansuroglu"],
    technologies: ["PCI DSS", "Encryption", "Security", "Fraud Detection", "Compliance"],
    confidence: 93,
    category: "Security"
  },
  {
    questionNumber: 27,
    question: "Mobil uygulama geliştirme deneyiminiz nedir?",
    answer: "Cross-platform mobile development expertise: React Native (3+ years), Flutter (1+ year). AdPro projesinde React Native ile AI destekli eğitim uygulaması - Google Gemini AI entegrasyonu, natural language processing, image recognition, personalized content generation. Features: Push notifications, offline support, deep linking, biometric authentication, camera integration, geolocation. Performance: Lazy loading, image optimization, memory management, bundle splitting. Native modules: Custom iOS/Android integrations when needed. Testing: Jest, Detox for E2E testing. Deployment: App Store, Google Play Store optimization. Analytics: User behavior tracking, crash reporting. Most complex: Real-time trading mobile app with WebSocket connections ve complex data visualizations.",
    projects: ["adpro", "ai-algo-trade"],
    technologies: ["React Native", "Google Gemini AI", "Push Notifications", "Mobile Optimization"],
    confidence: 94,
    category: "Mobile"
  },
  {
    questionNumber: 28,
    question: "Real-time uygulamalar geliştirdiniz mi?",
    answer: "Extensive real-time application development: AI Algo Trade'de comprehensive real-time trading system - WebSocket ile real-time market data streaming, live order execution, portfolio monitoring. Quantum dashboard'da real-time pattern recognition, AI model predictions, market sentiment analysis. Slack Integration'da real-time customer service automation, AI-powered response generation. Technologies: WebSocket, Socket.io, Server-Sent Events, Redis pub/sub. Challenges: Connection management, message queuing, load balancing, failover handling. Performance: Connection pooling, message batching, efficient data structures. Scaling: Horizontal scaling, load balancers, CDN for static content. Monitoring: Real-time analytics, connection metrics, latency tracking. Most complex: High-frequency trading system with microsecond latency requirements.",
    projects: ["ai-algo-trade", "slack-integration"],
    technologies: ["WebSocket", "Socket.io", "Redis", "Real-time Analytics", "High-Frequency Trading"],
    confidence: 97,
    category: "Real-time"
  },
  {
    questionNumber: 29,
    question: "Kod kalitesi ve test metodolojileri konusunda deneyiminiz nedir?",
    answer: "Comprehensive testing strategy: Unit tests (Jest, PyTest), integration tests, E2E tests (Cypress, Playwright), performance tests. AI Algo Trade'de: TDD approach, 90%+ code coverage, automated testing pipeline. Testing types: Unit tests for business logic, integration tests for APIs, E2E tests for user workflows, load tests for performance. Tools: Jest, PyTest, Cypress, Postman, Artillery. Code quality: ESLint, Prettier, SonarQube, code reviews. CI/CD: Automated testing in deployment pipeline, quality gates. Mocking: API mocks, database mocks, external service mocks. Documentation: Test documentation, test cases, bug reports. Metrics: Code coverage, test execution time, defect density.",
    projects: ["ai-algo-trade", "all-projects"],
    technologies: ["Jest", "PyTest", "Cypress", "TDD", "Code Quality", "CI/CD"],
    confidence: 92,
    category: "Testing"
  },
  {
    questionNumber: 30,
    question: "Web uygulamalarında güvenlik açıkları ve önlemler nelerdir?",
    answer: "Comprehensive security approach: 1) SQL Injection - Parameterized queries, ORM usage, input validation, 2) XSS - Content Security Policy, input sanitization, output encoding, 3) CSRF - CSRF tokens, SameSite cookies, 4) Authentication - Strong passwords, 2FA, session management, 5) Authorization - Role-based access, principle of least privilege. AI Algo Trade'de: OAuth 2.0, JWT tokens, API rate limiting, secure WebSocket connections. Implementation: HTTPS enforcement, security headers, input validation, error handling. Tools: OWASP ZAP, security scanners, penetration testing. Monitoring: Security logs, intrusion detection, vulnerability scans. Best practices: Regular updates, security training, incident response plans.",
    projects: ["ai-algo-trade", "oto-mansuroglu", "slack-integration"],
    technologies: ["OAuth 2.0", "JWT", "HTTPS", "Security Headers", "OWASP"],
    confidence: 93,
    category: "Security"
  },
  {
    questionNumber: 31,
    question: "SEO ve performans optimizasyonu teknikleri nelerdir?",
    answer: "Comprehensive SEO & performance strategy: Technical SEO - Next.js SSR/SSG, meta tags, structured data, XML sitemaps, robots.txt. Performance: Core Web Vitals optimization, image optimization, code splitting, lazy loading, CDN integration. AI Algo Trade'de: Lighthouse scores 90+, real-time performance monitoring. Tools: Google PageSpeed Insights, GTMetrix, Lighthouse, Search Console. Optimization: Bundle analysis, tree shaking, compression, caching strategies. SEO: Keyword research, content optimization, internal linking, mobile-first indexing. Monitoring: Performance metrics, SEO rankings, user experience metrics. Advanced: Service workers, PWA features, critical CSS inlining.",
    projects: ["ai-algo-trade", "oto-mansuroglu", "adpro"],
    technologies: ["Next.js", "Core Web Vitals", "Lighthouse", "SEO", "Performance"],
    confidence: 91,
    category: "Performance"
  },
  {
    questionNumber: 32,
    question: "Teknik olarak çok zorlandığınız bir problemi nasıl aştınız?",
    answer: "Most challenging: AI Algo Trade'de real-time quantum algorithm optimization. Problem: Microsecond-level latency requirements ile complex AI model predictions. Challenge: Traditional algorithms insufficient, memory constraints, concurrent processing. Solution approach: 1) Problem decomposition - Smaller, manageable components, 2) Research - Quantum computing papers, optimization techniques, 3) Prototyping - Multiple algorithm variations, 4) Testing - Performance benchmarking, stress testing, 5) Iteration - Continuous optimization. Breakthrough: Hybrid quantum-classical approach, custom memory management, parallel processing. Result: %300 performance improvement, sub-millisecond response times. Learning: Persistence, systematic approach, continuous research, collaboration with domain experts.",
    projects: ["ai-algo-trade"],
    technologies: ["Quantum Computing", "Algorithm Optimization", "Performance Tuning", "Problem Solving"],
    confidence: 95,
    category: "Problem Solving"
  },
  {
    questionNumber: 33,
    question: "Ekip üyesiyle teknik fikir ayrılığı yaşadığınız durumu nasıl yönettiniz?",
    answer: "ThermalX projesinde AI model architecture konusunda disagreement yaşadık. Situation: Team member traditional CNN approach önerirken, ben transformer-based solution advocate ediyordum. Approach: 1) Active listening - Karşı tarafın arguments'ını fully understand ettim, 2) Data-driven discussion - Performance metrics, benchmarks ile comparison yaptık, 3) Prototype development - Both approaches'ı implement edip test ettik, 4) Collaborative decision - Results'a based objective evaluation. Outcome: Hybrid approach adopt ettik - CNN for feature extraction, transformer for sequence modeling. Result: %25 accuracy improvement, team cohesion strengthened. Learning: Technical disagreements growth opportunities, data-driven decisions, collaborative problem-solving.",
    projects: ["thermalx"],
    technologies: ["AI/ML", "CNN", "Transformers", "Team Collaboration", "Conflict Resolution"],
    confidence: 94,
    category: "Team Collaboration"
  },
  {
    questionNumber: 34,
    question: "Sıkı deadline'larda nasıl çalışıyorsunuz?",
    answer: "Systematic deadline management: AI Algo Trade'de 3 aylık sürede production-ready quantum trading platform deliver ettim. Strategy: 1) Priority matrix - Critical path analysis, MoSCoW prioritization, 2) Time boxing - Sprint planning, daily standups, 3) Risk management - Potential bottlenecks identification, mitigation plans, 4) Team coordination - Clear communication, task delegation, 5) Quality maintenance - Automated testing, code reviews. Tools: Jira, Linear, Git workflow, CI/CD pipeline. Techniques: Agile methodology, pair programming, continuous integration. Result: %100 deadline compliance, quality standards maintained. Quantum dashboard 2 haftada deliver ettik. Key: Realistic estimation, proactive communication, team collaboration, automated processes.",
    projects: ["ai-algo-trade", "quantum-dashboard"],
    technologies: ["Agile", "Project Management", "CI/CD", "Time Management", "Team Coordination"],
    confidence: 96,
    category: "Project Management"
  }
]

export function getAnswerByQuestionNumber(questionNumber: number): InterviewAnswer | undefined {
  return interviewAnswers.find(answer => answer.questionNumber === questionNumber)
}

export function getAnswersByProject(projectName: string): InterviewAnswer[] {
  return interviewAnswers.filter(answer => 
    answer.projects.some(project => 
      project.toLowerCase().includes(projectName.toLowerCase())
    )
  )
}

export function getAnswersByCategory(category: string): InterviewAnswer[] {
  return interviewAnswers.filter(answer => 
    answer.category.toLowerCase() === category.toLowerCase()
  )
}

export function getTopAnswers(limit: number = 5): InterviewAnswer[] {
  return interviewAnswers
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, limit)
} 