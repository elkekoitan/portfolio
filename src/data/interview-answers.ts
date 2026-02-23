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
    question: "Yeni bir proje geldiğinde ilk olarak ne yaparsın?",
    answer: "Önce müşteriyle oturur, neyi neden istediğini anlarım. Teknik detaylara girmeden önce iş problemini çözerim kafamda. Solar Analysis projesinde mesela müşteri 'panel izleme istiyorum' dedi ama asıl ihtiyacı bakım maliyetlerini düşürmekti. Sonra takımla birlikte scope belirleriz, MVP'yi çıkarırız, sprint planlarız. İlk hafta genelde araştırma ve PoC'a gider.",
    projects: ["solar-analysis", "diagnostic"],
    technologies: ["Scrum", "Sprint Planning", "MVP", "PoC"],
    confidence: 96,
    category: "Planlama"
  },
  {
    questionNumber: 2,
    question: "Müşteri sürekli scope değiştirdiğinde nasıl yönetiyorsun?",
    answer: "Scope creep her projede olur, normal. Ama kontrol altında tutmak lazım. OmniSell projesinde müşteri her hafta yeni marketplace eklemek istedi. Change request süreci koyduk — her yeni istek için etki analizi yapıyoruz, süre ve maliyet tahminini paylaşıyoruz. Müşteri bilgilendirilmiş karar veriyor. Önceliklendirme matrisimiz var: acil/önemli, önemli/acil değil şeklinde. Sprint ortasında değişiklik kabul etmiyoruz, backlog'a alıyoruz.",
    projects: ["omnisell", "oto-mansuroglu"],
    technologies: ["Agile", "Change Management", "Backlog Management"],
    confidence: 94,
    category: "Müşteri"
  },
  {
    questionNumber: 3,
    question: "Takımda teknik bir anlaşmazlık olduğunda ne yapıyorsun?",
    answer: "Herkesin fikrini dinlerim önce. Go-Trade projesinde C++ DLL mi Go native mi tartışması oldu. Herkes kendi tercihini savunuyordu. Ben dedim ki 'benchmark yazalım, veri konuşsun.' Shared memory testi yaptık, C++ DLL yaklaşımı 10x daha hızlı çıktı. Veri tabanlı karar verdik, kimse alınmadı. Eğer teknik olarak eşdeğerse, takımın en rahat olduğu teknolojiyi seçeriz. Ego değil, proje başarısı önemli.",
    projects: ["go-trade", "hayalet"],
    technologies: ["Go", "C++", "Benchmarking", "Decision Making"],
    confidence: 95,
    category: "Takım"
  },
  {
    questionNumber: 4,
    question: "Production'da kritik bir bug çıktığında sürecin nasıl işliyor?",
    answer: "İlk 5 dakika: Sorunun kapsamını belirle, kullanıcıları etkiliyor mu? Hayalet Trading'de gece 3'te named pipe bridge koptu, tüm pozisyonlar açık kaldı. Hemen risk yönetimi devreye girdi, pozisyonlar otomatik kapatıldı. Sonra root cause analysis — log'ları inceledik, Windows update pipe handle'ları sıfırlamış. Hotfix çıktık 2 saatte. Sonra postmortem yaptık, monitoring eklendi. Her critical bug'dan bir öğrenme çıkarmak lazım.",
    projects: ["hayalet", "indirim-kanallari"],
    technologies: ["Incident Management", "Root Cause Analysis", "Monitoring", "Postmortem"],
    confidence: 97,
    category: "Risk"
  },
  {
    questionNumber: 5,
    question: "Teknoloji seçimi yaparken nelere dikkat ediyorsun?",
    answer: "Üç ana kriter: 1) Probleme uygunluk — PosPro'da cross-platform lazımdı, Flutter seçtik. Web de mobil de tek codebase. 2) Takım yetkinliği — bilmediğin teknolojiyi production'a koymak risk. Öğrenme süresi sprint'lere sığmalı. 3) Ekosistem olgunluğu — Hayalet'te Go seçtik çünkü concurrency desteği mükemmel, trading bot için biçilmiş kaftan. Hype'a kapılmam, kanıtlanmış teknolojileri tercih ederim ama yenilikçi olmaktan da korkmam.",
    projects: ["pospro", "hayalet", "go-trade"],
    technologies: ["Flutter", "Go", "Architecture Decision Records"],
    confidence: 96,
    category: "Teknik"
  },
  {
    questionNumber: 6,
    question: "Sprint planlamasını nasıl yapıyorsun?",
    answer: "2 haftalık sprint'ler kullanıyoruz genelde. Backlog grooming'de story point veriyoruz — fibonacci (1,2,3,5,8,13). 8 üstü olan her story parçalanır. Sprint capacity hesaplarız — her geliştiricinin velocity'si farklı. Indirim Kanallari projesinde 11 scraper vardı, her biri ayrı story. Sprint'e 6-7 tane sığdırıyorduk. Buffer bırakırız %20, çünkü her sprint'te sürpriz çıkar. Retrospektif'te neyi iyileştirebiliriz diye konuşuruz.",
    projects: ["indirim-kanallari", "omnisell"],
    technologies: ["Scrum", "Sprint Planning", "Story Points", "Retrospective"],
    confidence: 93,
    category: "Planlama"
  },
  {
    questionNumber: 7,
    question: "Uzaktan çalışan bir takımı nasıl yönetiyorsun?",
    answer: "Güven temelli çalışıyoruz. Günlük standup 15 dk — dün ne yaptın, bugün ne yapacaksın, blocker var mı? Async iletişim ağırlıklı, Slack'te thread bazlı. Video call sadece gerektiğinde. Barter Qween projesinde 3 farklı şehirden çalıştık. Her hafta Cuma demo var, herkes yaptığını gösteriyor. Kod review zorunlu, PR merge'lemeden en az 1 onay lazım. Şeffaflık çok önemli — Notion'da her şey dokümante.",
    projects: ["barter-qween", "firealert"],
    technologies: ["Slack", "Notion", "Code Review", "Async Communication"],
    confidence: 94,
    category: "Takım"
  },
  {
    questionNumber: 8,
    question: "Proje deadline'ı yetişmeyecekse ne yaparsın?",
    answer: "Erken fark etmek kritik. Haftalık burndown chart takip ediyoruz. Eğilim kötüye gidiyorsa hemen aksiyon alırız. Diagnostic projesinde ML pipeline beklenenden karmaşık çıktı. Müşteriye durumu şeffaf anlattık, MVP scope'unu daralttık — 3 model yerine 1 model ile çıktık ama çalışan bir ürün teslim ettik. Sonra iteratif olarak diğerlerini ekledik. Kötü haber geç verilir, iyi haber erken.",
    projects: ["diagnostic", "video-factory"],
    technologies: ["Risk Management", "Burndown Chart", "MVP Scoping"],
    confidence: 95,
    category: "Risk"
  },
  {
    questionNumber: 9,
    question: "Code review süreciniz nasıl işliyor?",
    answer: "Her PR en az 1 reviewer gerektirir. Review checklist'imiz var: güvenlik, performans, okunabilirlik, test coverage. Sinav Analiz projesinde Supabase RLS politikaları özellikle dikkatli review edildi — güvenlik kritik. Review'da yapıcı ol, kodu eleştir kişiyi değil. 'Bu yanlış' yerine 'şu alternatif daha performanslı olabilir' diyoruz. Büyük PR'ları kabul etmiyoruz, 300 satırdan fazlaysa parçala.",
    projects: ["sinav-analiz", "epinera"],
    technologies: ["Git", "Code Review", "PR Management", "Security Review"],
    confidence: 96,
    category: "Süreç"
  },
  {
    questionNumber: 10,
    question: "Teknik borcu nasıl yönetiyorsun?",
    answer: "Her sprint'e %15-20 teknik borç ödeme zamanı ayırıyoruz. Borç backlog'u tutarız — kritik, orta, düşük. Mandira Sut Takip'te Firebase query'leri büyüdükçe yavaşlamaya başladı. Sprint'in bir story'sini index optimizasyonuna ayırdık, sorgu süresi 3 saniyeden 200ms'e düştü. Teknik borcu biriktirmek faiz ödemek gibi — ne kadar erken ödeersen o kadar az acı çekersin.",
    projects: ["mandira-claude", "n8n-workflows"],
    technologies: ["Refactoring", "Performance Optimization", "Technical Debt Management"],
    confidence: 94,
    category: "Süreç"
  },
  {
    questionNumber: 11,
    question: "Yeni bir takım üyesini projeye nasıl dahil ediyorsun?",
    answer: "Onboarding planımız var: 1. gün proje tanıtımı, 2-3. gün ortam kurulumu ve mimari walkthrough, ilk hafta küçük bir bug fix veya feature. FireAlert'te yeni gelen arkadaş 3. günde ilk PR'ını açtı. Buddy sistemi kullanıyoruz — deneyimli biri yeni gelene eşlik ediyor. Dokümantasyon güncel tutulur, README'de 'quick start' bölümü şart. Soru sormaktan çekinme kültürü oluşturuyoruz.",
    projects: ["firealert", "barter-qween"],
    technologies: ["Onboarding", "Documentation", "Mentoring", "Pair Programming"],
    confidence: 93,
    category: "Takım"
  },
  {
    questionNumber: 12,
    question: "Microservice mi monolith mi, bu kararı nasıl veriyorsun?",
    answer: "Başlangıçta monolith, ihtiyaç oldukça parçala. OmniSell başta monolith'ti, marketplace sayısı artınca her marketplace adapter'ı ayrı service'e çıkardık. Küçük takımda microservice overhead'i çok fazla. Hayalet Trading'de Go monolith olarak başladık ama gRPC ile agent'ları ayrı service'lere çıkardık çünkü her agent farklı hızda scale oluyordu. Karar context'e bağlı — 'it depends' cevabı klişe ama gerçek.",
    projects: ["omnisell", "hayalet", "airchitecture"],
    technologies: ["Microservices", "Monolith", "gRPC", "Service Architecture"],
    confidence: 95,
    category: "Teknik"
  },
  {
    questionNumber: 13,
    question: "CI/CD pipeline'ınız nasıl çalışıyor?",
    answer: "Her projede minimum: lint → test → build → deploy. AdPro CLI'da Go projesi için GitHub Actions kullanıyoruz — push'ta lint+test, tag'de multi-platform release build. Vercel projelerinde preview deploy otomatik, her PR kendi URL'ini alıyor. Indirim Kanallari'nda Docker Compose ile self-hosted, Coolify üzerinden deploy. Rollback her zaman mümkün olmalı — bir önceki versiyona 30 saniyede dönebilmeliyiz.",
    projects: ["adpro-cli", "indirim-kanallari"],
    technologies: ["GitHub Actions", "Docker", "Vercel", "Coolify", "CI/CD"],
    confidence: 96,
    category: "Süreç"
  },
  {
    questionNumber: 14,
    question: "Performans sorunlarını nasıl tespit edip çözüyorsun?",
    answer: "Önce ölç, sonra optimize et. Solar Analysis v2'de dashboard yavaştı — Chrome DevTools profiler çalıştırdık, TimescaleDB query'leri bottleneck çıktı. Index ekledik, query'leri optimize ettik, Grafana'da monitoring koyduk. Premature optimization'dan kaçınırız. Hayalet Trading'de ise microsaniye önemli — Go pprof ile profiling yapıyoruz, named pipe latency'si sürekli monitor ediliyor. Her projede farklı performans kriterleri var.",
    projects: ["solar-analysis-v2", "hayalet"],
    technologies: ["Profiling", "Chrome DevTools", "Go pprof", "Performance Monitoring"],
    confidence: 97,
    category: "Teknik"
  },
  {
    questionNumber: 15,
    question: "Proje dokümantasyonunu nasıl yönetiyorsun?",
    answer: "Kod kendini anlatsın diyenlerden değilim. README, API docs, mimari diyagramlar şart. Ama gereksiz dokümantasyon da yazma — güncellenmeyen döküman zararlı. EstimatePro'da ADR (Architecture Decision Records) tutuyoruz — neden X teknolojisini seçtik, alternatifleri neydi. In-code comment yerine descriptive fonksiyon isimleri. Swagger/OpenAPI backend'de zorunlu. Notion'da proje wiki'si var ama minimal tutuyoruz.",
    projects: ["project-effort", "omnisell"],
    technologies: ["ADR", "Swagger", "Notion", "Documentation"],
    confidence: 92,
    category: "Süreç"
  },
  {
    questionNumber: 16,
    question: "Güvenlik konusunda yaklaşımın nedir?",
    answer: "Security by design, sonradan ekleme değil. Epinera sağlık projesinde HIPAA uyumluluğu zorunluydu — end-to-end encryption, audit logging, role-based access ilk günden tasarladık. OWASP Top 10'u her code review'da kontrol ediyoruz. Dependency audit haftalık çalışır, npm audit / pip-audit. Melkorstux toolkit'i ile kendi projelerimizi pentest ediyoruz. Secret management için environment variables, asla hardcoded credential yok.",
    projects: ["epinera", "melkorstux", "diagnostic"],
    technologies: ["OWASP", "HIPAA", "Encryption", "Security Audit", "Penetration Testing"],
    confidence: 96,
    category: "Teknik"
  },
  {
    questionNumber: 17,
    question: "Müşteri teknik bilgi sahibi değilse nasıl iletişim kuruyorsun?",
    answer: "Analojiler kullanırım. Mandira Sut Takip projesinde çiftçilere 'veritabanı' yerine 'dijital defter', 'API' yerine 'otomatik bağlantı' dedim. Her toplantıda demo gösterilir — görsel anlatım sözlü anlatımdan bin kat etkili. Teknik jargon kullanmam, iş sonuçlarından bahsederim: '3 saniyede yükleniyor' yerine 'müşteriniz beklemeden sayfayı görüyor.' Haftalık ilerleme raporu göndeririz, ekran görüntüleriyle.",
    projects: ["mandira-claude", "sinav-analiz"],
    technologies: ["Stakeholder Communication", "Demo", "Reporting"],
    confidence: 95,
    category: "Müşteri"
  },
  {
    questionNumber: 18,
    question: "Test stratejin nedir?",
    answer: "Test piramidi: çok unit test, orta integration test, az E2E test. FireAlert'te Detox ile E2E testler var ama yavaş çalışıyor, sadece kritik akışlarda. OmniSell'de Vitest ile unit testler hızlı çalışıyor, her PR'da otomatik. TDD yapmıyoruz ama test-first yaklaşımı complex logic'te işe yarıyor. Coverage %80 hedefimiz ama rakama takılmıyoruz — kritik iş kuralları %100 test edilmeli, UI helper'lar %50 yeterli.",
    projects: ["firealert", "omnisell", "reflux"],
    technologies: ["Vitest", "Detox", "E2E Testing", "Unit Testing", "Test Pyramid"],
    confidence: 93,
    category: "Teknik"
  },
  {
    questionNumber: 19,
    question: "Bir projeyi başarısız yapan en yaygın hataları neler görüyorsun?",
    answer: "1) Scope'u baştan net tanımlamamak — herkes farklı şey anlar. 2) İletişim eksikliği — sorun büyüyene kadar kimse söylemez. 3) Teknik borcu görmezden gelmek — 6 ay sonra her feature 3x uzun sürer. 4) Yanlış teknoloji seçimi — hype'a kapılıp takımın bilmediği stack seçmek. Video Factory projesinde Electron/Tauri kararı erken verilmedi, 3 hafta kayıp oldu. Artık mimari kararları ilk hafta kesinleştiriyoruz.",
    projects: ["video-factory", "airchitecture"],
    technologies: ["Project Management", "Risk Assessment", "Architecture Planning"],
    confidence: 95,
    category: "Risk"
  },
  {
    questionNumber: 20,
    question: "Ürün kalitesini nasıl ölçüyorsun?",
    answer: "Metrikler konuşsun: crash rate, response time, user satisfaction. Indirim Kanallari'nda scraper başarı oranı %95+ olmalı, düşerse otomatik alert geliyor. PosPro'da offline-first mimaride sync başarı oranını takip ediyoruz. Kullanıcı geri bildirimi en önemli — FitCheck'te beta kullanıcılardan aldığımız feedback ile form analiz özelliğini tamamen yeniden tasarladık. Code quality: SonarQube, ESLint strict config.",
    projects: ["indirim-kanallari", "pospro", "fitcheck"],
    technologies: ["Metrics", "Monitoring", "SonarQube", "User Feedback"],
    confidence: 94,
    category: "Ürün"
  },
  {
    questionNumber: 21,
    question: "Database tasarımında nelere dikkat ediyorsun?",
    answer: "İlk gün schema tasarımına vakit ayırırız. Normalization vs denormalization trade-off'unu use case'e göre karar veririz. Sinav Analiz'de Supabase'de relational model kullandık, curriculum-exam-student-result ilişkileri net. Hayalet'te Redis time-series çünkü trading'de hız kritik, ilişkisel data ikinci plan. Migration her zaman versiyon kontrollü, seed data test ortamı için hazır. Index stratejisi sorgu pattern'ine göre belirlenir.",
    projects: ["sinav-analiz", "hayalet", "mandira-claude"],
    technologies: ["PostgreSQL", "Redis", "Supabase", "Firebase", "Database Design"],
    confidence: 95,
    category: "Teknik"
  },
  {
    questionNumber: 22,
    question: "Müşteriye 'hayır' dediğin durumlar oluyor mu?",
    answer: "Evet, gerektiğinde 'hayır' derim ama alternatif sunarım. Diagnostic projesinde müşteri 'tüm hasta verilerini public API'den sunalım' dedi — güvenlik riski çok yüksek. Alternatif olarak role-based API gateway önerdik, hem erişim kontrolü sağlandı hem müşterinin ihtiyacı karşılandı. 'Hayır' demek değil, 'bunu yapamayız ama şunu yapabiliriz' demek. Bazen deadline için de gerçekçi olmak lazım — yapılamayacak işe 'evet' demek daha kötü.",
    projects: ["diagnostic", "epinera"],
    technologies: ["Stakeholder Management", "API Security", "Negotiation"],
    confidence: 96,
    category: "Müşteri"
  },
  {
    questionNumber: 23,
    question: "AI/ML projesini geleneksel yazılımdan farklı nasıl yönetiyorsun?",
    answer: "ML projelerinde belirsizlik daha fazla. Model eğitimi sonucu garanti edilmez — 'şu accuracy'yi vereceğim' demem zor. Diagnostic projesinde 3 farklı model denedik (1D-CNN, BiLSTM, Transformer), hangisinin en iyi sonucu vereceğini önceden bilmiyorduk. Sprint'lerde research spike'lar var. DVC ile data versioning, MLflow ile experiment tracking kullanıyoruz. Aura AI'da Whisper modelinin fine-tuning'i 2 sprint sürdü — geleneksel projede 2 sprint'te feature çıkarsın.",
    projects: ["diagnostic", "aura-ai", "lumora"],
    technologies: ["MLflow", "DVC", "PyTorch", "Experiment Tracking", "ML Pipeline"],
    confidence: 94,
    category: "Teknik"
  },
  {
    questionNumber: 24,
    question: "Projede takım motivasyonunu nasıl yüksek tutuyorsun?",
    answer: "Üç şey: anlam, özerklik, gelişim. Herkes yaptığı işin neden önemli olduğunu bilmeli. Solar Analysis'te 'güneş enerjisi maliyetlerini düşürüyoruz' dediğimde takımın gözü parlıyor. Herkes kendi alanında karar verebilmeli — micromanage etmiyorum. Code review'da öğrenme fırsatı yaratıyorum. Başarıları kutlarız — sprint demo'sunda iyi iş yapanı herkesin önünde takdir ederim. Toksik kültüre sıfır tolerans.",
    projects: ["solar-analysis", "barter-qween"],
    technologies: ["Team Management", "Motivation", "Culture Building"],
    confidence: 93,
    category: "Takım"
  },
  {
    questionNumber: 25,
    question: "Aynı anda birden fazla projeyi nasıl yönetiyorsun?",
    answer: "Context switching pahalı, minimize ederim. Her projeye haftanın belirli günlerini ayırırım. Şu an aktif 5+ projem var ama her birinin farklı fazda olması işime yarıyor — biri geliştirme, biri bakım, biri planlama aşamasında. Priority matrix kullanırım: ICT Ultra ve Hayalet trading projeleri canlıda, onlar öncelikli. Lumora ve Aura AI geliştirme aşamasında, daha esnek. Her proje için Notion'da kanban board var, daily todo list'le günü planlıyorum.",
    projects: ["ict-ultra", "hayalet", "lumora", "aura-ai"],
    technologies: ["Project Portfolio Management", "Prioritization", "Notion", "Kanban"],
    confidence: 95,
    category: "Planlama"
  }
]
