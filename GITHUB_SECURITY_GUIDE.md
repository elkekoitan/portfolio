# 🔐 GitHub Repository Security Guide - Şifre: 117344

## 📊 Repository'lerin Mevcut Durumu

Aşağıdaki repository'ler **PUBLIC** durumda ve **PRIVATE** yapılması gerekiyor:

### ✅ **Öncelikli Repository'ler (Hemen Private Yapın):**

1. **AdPro** - Marketing Automation Platform
   - URL: https://github.com/elkekoitan/AdPro
   - Durum: 🔴 Public
   - Öncelik: ⚡ Yüksek (İş projesi)

2. **ai_algo_trade** - Trading Platform  
   - URL: https://github.com/elkekoitan/ai_algo_trade
   - Durum: 🔴 Public
   - Öncelik: ⚡ Yüksek (Finansal sistem)

3. **social-trade** - Trading Social Platform
   - URL: https://github.com/elkekoitan/social-trade
   - Durum: 🔴 Public
   - Öncelik: ⚡ Yüksek

4. **AdVantage** - TypeScript Project
   - URL: https://github.com/elkekoitan/AdVantage
   - Durum: 🔴 Public
   - Öncelik: 🔶 Orta

5. **video-factory** - Video Processing
   - URL: https://github.com/elkekoitan/video-factory
   - Durum: 🔴 Public
   - Öncelik: 🔶 Orta

### 🔶 **Orta Öncelikli Repository'ler:**

6. **ICT_Ultra_Platform** - Python Platform
7. **magargemanusgago_** - Custom Project
8. **QuantumTrader** - Trading System
9. **bluberry-store** - E-commerce
10. **solar-support** - Solar Analysis
11. **qw-financepro** - Finance App
12. **anime-site-bolt** - Entertainment Site
13. **randevu-bot** - Python Bot

### 🟢 **Düşük Öncelikli Repository'ler:**

14. **n8n** - Workflow Automation
15. **all** - General Repository
16. **arosnew** - Custom Project
17. **a101-web-test** - Test Project
18. **a101-mobile-automation** - Mobile Testing
19. **AsalSayilar** - Java Project
20. **restassured-junit-java-course** - Forked Repository

## 🚀 **Hızlı Private Yapma Adımları**

### **Adım 1: GitHub'a Giriş**
```
1. https://github.com/login adresine gidin
2. Kullanıcı adı/şifre ile giriş yapın
```

### **Adım 2: Repository Settings**
```
1. Repository sayfasını açın
2. "Settings" sekmesine tıklayın
3. Sayfanın en altına inin
```

### **Adım 3: Visibility Değiştirme**
```
1. "Danger Zone" bölümünü bulun
2. "Change repository visibility" butonuna tıklayın
3. "Make private" seçeneğini seçin
4. Repository adını yazın (onay için)
5. "I understand, change repository visibility" butonuna tıklayın
```

## 🔐 **Şifre Koruması Bilgileri**

### **Ana Şifre:** 117344

### **Güvenlik Seviyeleri:**
- 🔴 **Kritik:** AdPro, ai_algo_trade, social-trade
- 🔶 **Önemli:** AdVantage, video-factory, ICT_Ultra_Platform
- 🟢 **Normal:** Diğer tüm repository'ler

### **Erişim Kontrolü:**
- Repository'ler private yapıldıktan sonra sadece siz erişebilirsiniz
- İşveren ile paylaşmak için "Collaborator" olarak ekleyebilirsiniz
- Veya specific branch'leri public yapabilirsiniz

## ⚡ **Otomatik Script (Gelişmiş Kullanıcılar İçin)**

GitHub CLI kullanarak toplu private yapma:

```bash
# GitHub CLI kurulumu (eğer yoksa)
# Windows: winget install GitHub.cli
# Mac: brew install gh

# Giriş yapın
gh auth login

# Tüm repository'leri private yapma script'i
repos=(
    "AdPro"
    "ai_algo_trade" 
    "social-trade"
    "AdVantage"
    "video-factory"
    "ICT_Ultra_Platform"
    "magargemanusgago_"
    "QuantumTrader"
    "bluberry-store"
    "solar-support"
    "qw-financepro"
    "anime-site-bolt"
    "randevu-bot"
    "n8n"
    "all"
    "arosnew"
    "a101-web-test"
    "a101-mobile-automation"
    "AsalSayilar"
)

for repo in "${repos[@]}"; do
    echo "Making $repo private..."
    gh repo edit elkekoitan/$repo --visibility private
    echo "✅ $repo is now private"
done
```

## 📋 **Kontrol Listesi**

Repository'leri private yaptıktan sonra kontrol edin:

- [ ] AdPro - Private ✅
- [ ] ai_algo_trade - Private ✅  
- [ ] social-trade - Private ✅
- [ ] AdVantage - Private ✅
- [ ] video-factory - Private ✅
- [ ] ICT_Ultra_Platform - Private ✅
- [ ] magargemanusgago_ - Private ✅
- [ ] QuantumTrader - Private ✅
- [ ] bluberry-store - Private ✅
- [ ] solar-support - Private ✅
- [ ] qw-financepro - Private ✅
- [ ] anime-site-bolt - Private ✅
- [ ] randevu-bot - Private ✅
- [ ] n8n - Private ✅
- [ ] all - Private ✅
- [ ] arosnew - Private ✅
- [ ] a101-web-test - Private ✅
- [ ] a101-mobile-automation - Private ✅
- [ ] AsalSayilar - Private ✅

## 🛡️ **Güvenlik Önerileri**

1. **İki Faktörlü Kimlik Doğrulama (2FA)** aktif edin
2. **Personal Access Token** kullanın (şifre yerine)
3. **SSH Key** ekleyin güvenli erişim için
4. **Branch Protection Rules** ekleyin önemli branch'ler için
5. **Dependabot Alerts** aktif edin güvenlik açıkları için

## 📞 **Destek**

Herhangi bir sorun yaşarsanız:
- **E-posta:** turhanhamza@gmail.com
- **GitHub:** @elkekoitan

---

**⚠️ ÖNEMLİ:** Bu işlemleri yaparken dikkatli olun. Private yapılan repository'ler sadece sizin erişiminizde olacak. İşveren ile paylaşmak için collaborator olarak eklemeniz gerekebilir.

**🔐 Şifre: 117344** - Bu bilgiyi güvenli tutun!