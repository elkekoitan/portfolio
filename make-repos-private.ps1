# 🔐 GitHub Repository Private Yapma Script'i
# Şifre: 117344
# Kullanım: PowerShell'de bu script'i çalıştırın

Write-Host "🔐 GitHub Repository Private Yapma Script'i" -ForegroundColor Cyan
Write-Host "Şifre: 117344" -ForegroundColor Yellow
Write-Host "=" * 50

# GitHub CLI kontrolü
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI bulunamadı!" -ForegroundColor Red
    Write-Host "Kurulum için: winget install GitHub.cli" -ForegroundColor Yellow
    exit 1
}

# GitHub'a giriş kontrolü
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ GitHub'a giriş yapmanız gerekiyor!" -ForegroundColor Red
    Write-Host "Giriş için: gh auth login" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ GitHub CLI hazır!" -ForegroundColor Green

# Repository listesi (öncelik sırasına göre)
$repositories = @(
    @{name="AdPro"; priority="HIGH"; description="Marketing Automation Platform"},
    @{name="ai_algo_trade"; priority="HIGH"; description="AI Trading Platform"},
    @{name="social-trade"; priority="HIGH"; description="Social Trading Platform"},
    @{name="AdVantage"; priority="MEDIUM"; description="TypeScript Project"},
    @{name="video-factory"; priority="MEDIUM"; description="Video Processing"},
    @{name="ICT_Ultra_Platform"; priority="MEDIUM"; description="Python Platform"},
    @{name="magargemanusgago_"; priority="MEDIUM"; description="Custom Project"},
    @{name="QuantumTrader"; priority="MEDIUM"; description="Trading System"},
    @{name="bluberry-store"; priority="MEDIUM"; description="E-commerce Platform"},
    @{name="solar-support"; priority="MEDIUM"; description="Solar Analysis"},
    @{name="qw-financepro"; priority="MEDIUM"; description="Finance Application"},
    @{name="anime-site-bolt"; priority="LOW"; description="Entertainment Site"},
    @{name="randevu-bot"; priority="LOW"; description="Python Bot"},
    @{name="n8n"; priority="LOW"; description="Workflow Automation"},
    @{name="all"; priority="LOW"; description="General Repository"},
    @{name="arosnew"; priority="LOW"; description="Custom Project"},
    @{name="a101-web-test"; priority="LOW"; description="Web Testing"},
    @{name="a101-mobile-automation"; priority="LOW"; description="Mobile Testing"},
    @{name="AsalSayilar"; priority="LOW"; description="Java Project"}
)

$successCount = 0
$failCount = 0
$skippedCount = 0

Write-Host "`n🚀 Repository'leri private yapma işlemi başlıyor..." -ForegroundColor Cyan
Write-Host "Toplam repository sayısı: $($repositories.Count)" -ForegroundColor White

foreach ($repo in $repositories) {
    $repoName = $repo.name
    $priority = $repo.priority
    $description = $repo.description
    
    # Öncelik rengini belirle
    $priorityColor = switch ($priority) {
        "HIGH" { "Red" }
        "MEDIUM" { "Yellow" }
        "LOW" { "Green" }
    }
    
    Write-Host "`n[$priority] $repoName - $description" -ForegroundColor $priorityColor
    Write-Host "Repository işleniyor: elkekoitan/$repoName" -ForegroundColor White
    
    try {
        # Repository'nin mevcut durumunu kontrol et
        $repoInfo = gh repo view elkekoitan/$repoName --json visibility 2>$null
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "⚠️  Repository bulunamadı veya erişim sorunu: $repoName" -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        $repoData = $repoInfo | ConvertFrom-Json
        
        if ($repoData.visibility -eq "PRIVATE") {
            Write-Host "✅ Zaten private: $repoName" -ForegroundColor Green
            $successCount++
            continue
        }
        
        # Repository'yi private yap
        Write-Host "🔄 Private yapılıyor..." -ForegroundColor Cyan
        gh repo edit elkekoitan/$repoName --visibility private
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Başarıyla private yapıldı: $repoName" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "❌ Private yapılamadı: $repoName" -ForegroundColor Red
            $failCount++
        }
        
        # Kısa bekleme (rate limiting için)
        Start-Sleep -Seconds 1
        
    } catch {
        Write-Host "❌ Hata oluştu: $repoName - $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
}

# Özet rapor
Write-Host "`n" + "=" * 50 -ForegroundColor Cyan
Write-Host "📊 İŞLEM ÖZETI" -ForegroundColor Cyan
Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "✅ Başarılı: $successCount" -ForegroundColor Green
Write-Host "❌ Başarısız: $failCount" -ForegroundColor Red
Write-Host "⚠️  Atlanan: $skippedCount" -ForegroundColor Yellow
Write-Host "📊 Toplam: $($repositories.Count)" -ForegroundColor White

if ($failCount -eq 0 -and $skippedCount -eq 0) {
    Write-Host "`n🎉 Tüm repository'ler başarıyla private yapıldı!" -ForegroundColor Green
} elseif ($failCount -eq 0) {
    Write-Host "`n✅ İşlem tamamlandı! Bazı repository'ler zaten private'dı." -ForegroundColor Green
} else {
    Write-Host "`n⚠️  İşlem tamamlandı ancak bazı hatalar oluştu." -ForegroundColor Yellow
    Write-Host "Başarısız repository'leri manuel olarak kontrol edin." -ForegroundColor Yellow
}

Write-Host "`n🔐 Güvenlik Hatırlatması:" -ForegroundColor Cyan
Write-Host "- Şifre: 117344" -ForegroundColor Yellow
Write-Host "- Private repository'ler sadece sizin erişiminizde" -ForegroundColor White
Write-Host "- İşveren ile paylaşmak için collaborator olarak ekleyin" -ForegroundColor White
Write-Host "- 2FA (İki Faktörlü Kimlik Doğrulama) aktif edin" -ForegroundColor White

Write-Host "`nScript tamamlandı. Herhangi bir tuşa basın..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")