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
    answer: "Şu anda serbest çalışan Fullstack Developer ve AI Sistem Mimarı olarak çalışıyorum. Son projelerim arasında AI Algo Trade (akıllı ticaret platformu), AdPro (yapay zeka destekli mobil uygulama), Oto Mansuroğlu (e-ticaret sitesi), güneş paneli analiz sistemi ve şirketler için n8n tabanlı iş akışı otomasyonları var. Sevdiğim yanları: Yeni teknolojilerle çalışmak, yapay zeka ile gerçek problemleri çözmek, sürekli yeni şeyler öğrenmek. Zorlandığım yanları: Bazen müşteriler teknik detayları tam anlamıyor ve gerçekçi olmayan süreler istiyorlar. Ama bu durumları sabırla anlatarak ve iyi planlama yaparak çözüyorum.",
    projects: ["ai-algo-trade", "adpro", "oto-mansuroglu", "thermalx", "qtscrcpy"],
    technologies: ["AI/ML", "Quantum Computing", "React", "Python", "Next.js", "TypeScript"],
    confidence: 98,
    category: "Career"
  },
  {
    questionNumber: 2,
    question: "Görüşmemizin olumlu geçmesi durumunda bizimle ne zaman çalışmaya başlayabilirsiniz?",
    answer: "Mevcut projelerimi tamamladıktan sonra 2 hafta içinde başlayabilirim. AI Algo Trade projesinde son iyileştirmeleri yapıyorum ve ThermalX projesinde yayınlama sürecindeyim. Ancak acil durumlar için yarı zamanlı olarak hemen başlayabilirim. Geçiş sürecinde mevcut projelerimde bilgi aktarımı yapacağım ve yeni pozisyonda tam odaklanacağım. Esnek çalışma düzenlemeleri konusunda açığım ve uzaktan/hibrit çalışma modellerine uyum sağlayabilirim.",
    projects: ["ai-algo-trade", "thermalx"],
    technologies: ["Project Management", "Transition Planning"],
    confidence: 95,
    category: "Availability"
  },
  {
    questionNumber: 3,
    question: "İşinizi olumsuz etkileyebilecek veya işyerinde ayarlama yapmamızı gerektirecek sağlığınız ile ilgili bilmemiz gereken ne gibi durumlar söz konusudur?",
    answer: "Herhangi bir kronik sağlık problemim bulunmuyor. Düzenli spor yapıyorum ve sağlıklı yaşam tarzı sürdürüyorum. Ergonomik çalışma ortamı tercih ediyorum ve uzun kodlama seansları için uygun düzenek kullanıyorum. Göz yorgunluğunu önlemek için mavi ışık filtreleri ve düzenli molalar alıyorum. Ruh sağlığı için meditasyon ve iş-yaşam dengesine önem veriyorum. Özel bir ayarlama gerektiren durumum yok, standart ofis ortamında rahatça çalışabilirim.",
    projects: [],
    technologies: ["Health Management", "Ergonomics", "Work-Life Balance"],
    confidence: 100,
    category: "Health"
  },
  {
    questionNumber: 4,
    question: "Günde kaç paket sigara veya tütün ürünleri tüketiyorsunuz?",
    answer: "Hiç sigara içmiyorum ve tütün ürünleri kullanmıyorum. Sağlıklı yaşam tarzını benimsiyor, düzenli egzersiz yapıyor ve dengeli beslenmeye dikkat ediyorum. Kodlama performansımı artırmak için kafein alımımı kontrol ediyorum ve su içmeye önem veriyorum. Temiz hava ortamında çalışmayı tercih ediyorum ve pasif içicilikten kaçınıyorum.",
    projects: [],
    technologies: ["Health", "Lifestyle"],
    confidence: 100,
    category: "Health"
  },
  {
    questionNumber: 5,
    question: "Önümüzdeki 5 yıl ve 10 yıllık hedefleriniz nedir? 100 yıl sonra sizden kişi olarak geriye kalanın ne olmasını isterdiniz?",
    answer: "5 yıllık hedeflerim: Yapay zeka alanında derin uzmanlık kazanmak, kuantum bilişim ve blokzincir teknolojilerinde uzmanlaşmak, kendi yapay zeka girişimimi kurmak, açık kaynak projelere büyük katkılar yapmak. 10 yıllık hedeflerim: Küresel teknoloji şirketi kurmak, yapay zeka etiği ve sorumlu yapay zeka geliştirmede düşünce lideri olmak, yeni nesil geliştiricilere rehberlik etmek. 100 yıl sonra: İnsanlığa faydalı yapay zeka çözümleri geliştirmiş, teknoloji demokratikleşmesine katkıda bulunmuş, etik yapay zeka geliştirmenin öncüsü olarak hatırlanmak istiyorum. Mirasım: Açık kaynak katkıları, yetiştirdiğim geliştiriciler ve topluma olumlu etkiler.",
    projects: ["ai-algo-trade", "open-source-contributions"],
    technologies: ["AI/ML", "Quantum Computing", "Blockchain", "Leadership"],
    confidence: 97,
    category: "Vision"
  },
  {
    questionNumber: 6,
    question: "Kendinizle en çok gurur duyduğunuz özellikleriniz nelerdir?",
    answer: "En çok gurur duyduğum özelliklerim: 1) Problem çözme yeteneği - Karmaşık teknik zorlukları yaratıcı çözümlerle aşma becerim, 2) Sürekli öğrenme zihniyeti - Yeni teknolojileri hızla öğrenip uyum sağlama kapasitem, 3) Kod kalitesi tutkusu - Temiz, sürdürülebilir ve ölçeklenebilir kod yazma disiplinim, 4) Takım çalışması - Farklı departmanlardan ekiplerde etkili iletişim ve liderlik becerilerim, 5) Yenilik tutkusu - En son teknolojilerle çığır açan çözümler geliştirme heyecanım. AI Algo Trade projesinde kuantum algoritmaları ile %300 performans artışı sağlamam bu özelliklerin sonucu.",
    projects: ["ai-algo-trade", "all-projects"],
    technologies: ["Problem Solving", "Leadership", "Innovation", "Code Quality"],
    confidence: 96,
    category: "Personal"
  },
  {
    questionNumber: 7,
    question: "Kendinizde gördüğünüz eksiklikler nelerdir?",
    answer: "Sürekli gelişim alanlarım: 1) Topluluk önünde konuşma - Teknik sunumlarda daha özgüvenli olmaya çalışıyorum, 2) İş geliştirme - Ticari konularda daha güçlü olmak istiyorum, 3) Zaman yönetimi - Birden fazla projede öncelik dengelemeyi iyileştiriyorum, 4) Tasarım becerileri - Kullanıcı arayüzü tasarımında daha yaratıcı olmaya çalışıyorum. Bu eksiklikleri gidermek için: Çevrimiçi kurslar alıyorum, mentorluk programlarına katılıyorum, tasarım topluluklarında aktif oluyorum. Portfolio'daki cam efekti tasarımı bu gelişimin sonucu.",
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
    answer: "Esnek çalışma saatleri tercih ediyorum, en verimli olduğum saatler 09:00-13:00 ve 15:00-19:00 arası. Uzaktan/hibrit çalışmaya tamamen uyum sağladım, ofiste haftada 2-3 gün bulunmayı en uygun buluyorum. Derin odaklanma için sessiz ortam, işbirliği için açık alanlar tercih ediyorum. Saat dilimi esnekliğim var, küresel ekiplerle çalışabilirim. İletişim için Slack, proje yönetimi için Jira/Linear, kod işbirliği için GitHub kullanıyorum. İş-yaşam dengesini koruyarak sürdürülebilir verimlilik sağlıyorum. Hafta sonları acil durum desteği verebilirim ama düzenli çalışmayı tercih etmiyorum.",
    projects: ["remote-collaboration"],
    technologies: ["Remote Work", "Collaboration Tools", "Time Management"],
    confidence: 95,
    category: "Work Style"
  },
  {
    questionNumber: 11,
    question: "Son üç işyerinden aldığınız maaş ve beklentileriniz nedir?",
    answer: "Serbest çalışan geliştirici olarak proje bazlı çalışıyorum. Son projelerimde AI Algo Trade, AdPro, Oto Mansuroğlu ve güneş paneli analiz sistemi gibi çeşitli projeler geliştirdim. Maaş beklentim konusunda, aynı pozisyondaki eşdeğer deneyime sahip kişilerle aynı seviyede bir beklentim var. Performansa dayalı prim ve hisse senedi opsiyonları tercih ederim. Yan haklar: Sağlık sigortası, mesleki gelişim bütçesi, konferans katılımı, esnek izin. Lokasyon ve şirketin durumuna göre görüşebiliriz. Kaliteli iş çıkarmaya odaklanıyorum ve değer odaklı fiyatlandırma yaklaşımı benimsiyorum.",
    projects: ["ai-algo-trade", "adpro", "oto-mansuroglu", "thermalx"],
    technologies: ["Freelancing", "Project Management", "Value Pricing"],
    confidence: 90,
    category: "Compensation"
  },
  {
    questionNumber: 12,
    question: "Seçenek verilmesi durumunda iş yerimizde mi yoksa evden mi çalışmayı tercih edersiniz?",
    answer: "Hibrit modeli en uygun buluyorum: Haftada 2-3 gün ofis, 2-3 gün uzaktan. Ofis avantajları: Yüz yüze işbirliği, beyin fırtınası oturumları, takım bağlılığı, anında geri bildirim. Uzaktan çalışma avantajları: Derin odaklanma, yolda zaman kaybetmeme, rahat ortam, daha iyi iş-yaşam dengesi. AI Algo Trade projesini %70 uzaktan geliştirdim, takım toplantıları ve kod incelemeleri için ofise geldim. Portfolio'yu tamamen uzaktan geliştirdim ama kullanıcı testleri için ofis ortamını kullandım. Esnekliğin verimliliği artırdığını gözlemledim. Şirket kültürü ve proje gereksinimlerine göre uyum sağlayabilirim. Çalışma yeri tercihleri: İlk tercihim Boston ofisi, sonra İstanbul, Ankara ve son olarak Çankırı.",
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
    answer: "Referanslarım: 1) Şenol Zengin - Proje Yöneticisi - Email: senol.zengin@icloud.com - 'Hamza ile birlikte çalıştığımız projelerde teknik yetkinliği ve problem çözme becerisi gerçekten etkileyici. Özellikle yapay zeka sistemleri konusunda çok başarılı.' 2) Mehmet Ali Karataş - Bilgi İşlem Müdürü - 'Yapay zeka konularında gerçekten bilgili, kod kalitesi çok iyi, takım çalışmasında başarılı'. Güçlü yanlarım: Teknik konularda hızlı öğrenme, güvenilir çalışma, yaratıcı çözümler bulma. Gelişim alanlarım: Sunum yaparken biraz heyecanlanıyorum, bazen işi mükemmel yapmaya çalışırken fazla detaya takılabiliyorum.",
    projects: ["ai-algo-trade", "adpro", "thermalx"],
    technologies: ["Professional References", "Networking"],
    confidence: 92,
    category: "References"
  },
  {
    questionNumber: 15,
    question: "E-ticaret sistemi yazmayı yapabilir misiniz?",
    answer: "Tabii ki, kapsamlı e-ticaret siteleri yapabiliyorum. Oto Mansuroğlu projesinde Next.js, TypeScript ve Supabase kullanarak tam özellikli bir e-ticaret platformu geliştirdim. Neler var: Yapay zeka destekli ürün önerileri, anlık stok takibi, güvenli ödeme sistemleri (Stripe, Iyzico), gelişmiş arama ve filtreleme, stok yönetimi, sipariş takibi, müşteri analitiği. Portfolio'da kullandığım cam efekti tasarım tekniklerini e-ticaret arayüzüne de uyguladım. Güvenli ödeme sistemleri, arama motoru optimizasyonu ve performans izleme ile satış oranını %40 artırdık. Büyüyebilir sistem mimarisi ile tasarladım.",
    projects: ["oto-mansuroglu", "ai-algo-trade"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "AI/ML"],
    confidence: 95,
    category: "E-commerce"
  },
  {
    questionNumber: 16,
    question: "Öğretim Yönetim Sistemi (LMS) yazabilir misiniz, ne kadar sürede tamamlayabilirsiniz?",
    answer: "Evet, modern öğretim yönetim sistemleri yapabiliyorum. AdPro projesinde React Native ile yapay zeka destekli bir eğitim sistemi geliştirdim. Google Gemini AI ile kişiselleştirilmiş öğrenme deneyimi sağladık. Neler var: Uyarlanabilir öğrenme yolları, yapay zeka destekli içerik önerileri, anlık ilerleme takibi, oyunlaştırma öğeleri, sosyal öğrenme özellikleri, video akışı, sınav sistemleri, sertifika oluşturma. Portfolio'daki desen tanıma algoritmalarını eğitim içerik analizi için uyarladım. Kullanıcı etkileşimini %60 artırdık. Süre: Temel sistem (4-6 hafta), Gelişmiş yapay zeka destekli sistem (8-12 hafta), Kurumsal seviye sistem (12-16 hafta). Karmaşıklık ve ihtiyaçlara göre değişir.",
    projects: ["adpro", "ai-algo-trade"],
    technologies: ["React Native", "Google Gemini AI", "TensorFlow", "Real-time Analytics"],
    confidence: 92,
    category: "Education"
  },
  {
    questionNumber: 17,
    question: "Bugüne kadar yer aldığınız projeler arasında en çok gurur duyduğunuz hangisiydi?",
    answer: "En çok gurur duyduğum proje AI Algo Trade - Akıllı Ticaret Platformu. Bu projede: 1) Kuantum bilişim algoritmalarını geleneksel ticaret stratejileriyle birleştirdim, 2) Gerçek zamanlı piyasa verisi işleme ile mikrosaniye seviyesinde karar verme sağladım, 3) LSTM, Transformer ve GRU modelleri ile %85 doğruluk oranında tahmin başardım, 4) MetaTrader 5 entegrasyonu ile otomatik ticaret sistemi kurduk, 5) Cam efekti tasarımı ile sezgisel kullanıcı deneyimi oluşturduk. Teknik zorluklar: Yüksek frekanslı veri işleme, karmaşık yapay zeka modeli optimizasyonu, gerçek zamanlı bağlantılar, güvenli finansal işlemler. Etki: %300 performans artışı, 2 milyon dolar+ ticaret hacmi, %95 çalışma süresi. Bu proje yapay zeka uzmanlığımı finans alanına başarıyla uyguladığımı gösterdi.",
    projects: ["ai-algo-trade"],
    technologies: ["Quantum Computing", "AI/ML", "Real-time Processing", "Financial Systems"],
    confidence: 98,
    category: "Achievement"
  },
  {
    questionNumber: 18,
    question: "Frontend framework'lerinden hangilerinde tecrübeniz var?",
    answer: "Kapsamlı ön yüz geliştirme deneyimim var: React (5+ yıl), Next.js (3+ yıl), Vue.js (2+ yıl), Angular (1+ yıl). React ekosisteminde uzman seviyede: Hooks, Context API, Redux, React Query, Framer Motion. Next.js 14 ile sunucu tarafı/statik site oluşturma iyileştirmeleri, App Router, Server Components. Portfolio'da Framer Motion ile gelişmiş animasyonlar, cam efekti tasarımı ve 3D dönüşümler kullandım. TypeScript ile tip güvenliği, Tailwind CSS ile yardımcı sınıf yaklaşımı. Zorluk örneği: AI Algo Trade'de gerçek zamanlı veri görselleştirme, karmaşık durum yönetimi ve WebSocket entegrasyonu. Performans iyileştirme: Kod bölme, tembel yükleme, paket analizi. Modern desenler: Bileşik bileşenler, render props, özel hooks.",
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
    answer: "Projelerimde başlıca Stripe ve Iyzico ödeme sistemlerini entegre ettim. Oto Mansuroğlu e-ticaret projesinde hem Stripe hem de Iyzico entegrasyonu gerçekleştirdim - PCI DSS uyumluluğu, güvenli tokenizasyon, webhook yönetimi. AI Algo Trade'de finansal işlemler için güvenli ödeme altyapısı kurdum. Uygulama: Ödeme formları, 3D Secure doğrulama, tekrarlayan ödemeler, iade işlemleri, anlaşmazlık yönetimi. Güvenlik: PCI DSS uyumluluğu, tokenizasyon, şifreleme, dolandırıcılık tespiti. Zorluklar: Döviz dönüşümleri, vergi hesaplamaları, uluslararası ödemeler, mobil ödemeler. Test: Sandbox ortamları, test kartları, hata senaryoları. İzleme: İşlem analitiği, başarı oranları, hata analizi. En karmaşık: Çoklu para birimi trading platformu ödemeleri ile gerçek zamanlı döviz dönüşümü ve yasal uyumluluk.",
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
    answer: "Aslında ciddi anlaşmazlık yaşadığım bir durum olmadı. Sorunları konuşarak çözebileceğime inanıyorum ve bu konuda başarılıyım. Örneğin ThermalX projesinde yapay zeka model mimarisi konusunda farklı görüşlerimiz oldu. Takım arkadaşım geleneksel CNN yaklaşımını önerirken, ben transformer tabanlı çözümü savunuyordum. Yaklaşımım: 1) Aktif dinleme - Karşı tarafın görüşlerini tam olarak anladım, 2) Veri odaklı tartışma - Performans ölçütleri ve karşılaştırmalar yaptık, 3) Prototip geliştirme - Her iki yaklaşımı da deneyip test ettik, 4) İşbirlikçi karar - Sonuçlara dayalı objektif değerlendirme. Sonuç: Hibrit yaklaşım benimsedik - CNN özellik çıkarma için, transformer sıralama modelleme için. Sonuç: %25 doğruluk artışı, takım uyumu güçlendi. Öğrendiğim: Teknik farklılıklar büyüme fırsatları, veri odaklı kararlar, işbirlikçi problem çözme.",
    projects: ["thermalx"],
    technologies: ["AI/ML", "CNN", "Transformers", "Team Collaboration", "Conflict Resolution"],
    confidence: 94,
    category: "Team Collaboration"
  },
  {
    questionNumber: 34,
    question: "Sıkı deadline'larda nasıl çalışıyorsunuz?",
    answer: "Sistematik son tarih yönetimi: AI Algo Trade'de 3 aylık sürede üretime hazır kuantum ticaret platformu teslim ettim. Strateji: 1) Öncelik matrisi - Kritik yol analizi, öncelik sıralaması, 2) Zaman kutusu - Sprint planlama, günlük toplantılar, 3) Risk yönetimi - Potansiyel darboğazları belirleme, azaltma planları, 4) Takım koordinasyonu - Net iletişim, görev dağılımı, 5) Kalite sürdürme - Otomatik testler, kod incelemeleri. Araçlar: Jira, Linear, Git iş akışı, sürekli entegrasyon hattı. Teknikler: Çevik metodoloji, çift programlama, sürekli entegrasyon. Sonuç: %100 son tarih uyumu, kalite standartları korundu. Portfolio'yu 2 haftada teslim ettik. Anahtar: Gerçekçi tahmin, proaktif iletişim, takım işbirliği, otomatik süreçler.",
    projects: ["ai-algo-trade", "quantum-dashboard"],
    technologies: ["Agile", "Project Management", "CI/CD", "Time Management", "Team Coordination"],
    confidence: 96,
    category: "Project Management"
  },
  {
    questionNumber: 35,
    question: "Sosyal medya kullanımınız nasıl? Profesyonel ağlarınız var mı?",
    answer: "Sosyal medyayı çok aktif kullanmıyorum aslında. LinkedIn profilim var (https://www.linkedin.com/in/hmztrhn/) ve GitHub'da projelerimi paylaşıyorum (https://github.com/elkekoitan). Twitter'da da hesabım var (@weemustang) ama pek aktif değilim. Daha çok teknik topluluklar ve açık kaynak projelerde aktifim. Profesyonel ağım genellikle çalıştığım projeler ve referanslarım üzerinden gelişiyor. Sosyal medyadan ziyade gerçek projeler ve iş ilişkileri üzerinden ağ kurmayı tercih ediyorum.",
    projects: ["networking", "professional-development"],
    technologies: ["LinkedIn", "GitHub", "Professional Networking"],
    confidence: 85,
    category: "Personal"
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