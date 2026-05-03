document.addEventListener("DOMContentLoaded", () => {
    // --- Navigation Logic ---
    const navButtons = document.querySelectorAll('.nav-btn[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const targetTab = document.getElementById(btn.dataset.tab);
            targetTab.classList.add('active');

            // If map tab, trigger map invalidateSize to fix rendering issues
            if (btn.dataset.tab === 'map-tab' && map) {
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);
            }
        });
    });

    // --- Leaflet Map Initialization ---
    // Initialize map centered on Turkey
    const map = L.map('turkey-map', {
        zoomControl: false,
        attributionControl: false
    }).setView([39.0, 35.0], 6);

    // Add zoom control to top right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Use a dark styled map tile layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // --- Map Markers and Interaction ---
    const cityPanel = document.getElementById('city-info-panel');
    const closeBtn = document.getElementById('close-panel');

    // Panel Elements
    const elCityName = document.getElementById('city-name');
    const elCityCarbon = document.getElementById('city-carbon');
    const elCityIcons = document.getElementById('city-energy-icons');
    const elCityDesc = document.getElementById('city-desc-text');
    const createPlanBtn = document.getElementById('create-plan-btn');

    let currentSelectedCity = null;

    cityData.forEach(city => {
        // Create custom icon
        const markerHtml = `<div class="marker-pulse ${city.carbonLevel === 'high' ? 'high' : ''}" style="width: 16px; height: 16px; background: ${city.carbonLevel === 'high' ? '#ff3d00' : '#00e676'}; border: 2px solid #fff;"></div>`;

        const customIcon = L.divIcon({
            html: markerHtml,
            className: 'custom-leaflet-icon',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        const marker = L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map);

        marker.on('click', () => {
            showCityInfo(city);
            // Center map with an offset to left so panel doesn't cover marker
            map.setView([city.lat, city.lng - 1.5], 7, { animate: true, duration: 0.5 });
        });
    });

    function showCityInfo(city) {
        currentSelectedCity = city;
        elCityName.textContent = city.name;

        elCityCarbon.textContent = city.carbonFootprint;
        if (city.carbonLevel === 'high') {
            elCityCarbon.style.color = 'var(--accent-red)';
            elCityCarbon.style.textShadow = '0 0 10px rgba(255, 61, 0, 0.4)';
        } else if (city.carbonLevel === 'medium') {
            elCityCarbon.style.color = 'var(--accent-yellow)';
            elCityCarbon.style.textShadow = '0 0 10px rgba(255, 234, 0, 0.4)';
        } else {
            elCityCarbon.style.color = 'var(--accent-green)';
            elCityCarbon.style.textShadow = 'var(--glow-green)';
        }

        // Generate Icons
        elCityIcons.innerHTML = '';
        city.potential.forEach(p => {
            const energy = energyTypes[p];
            if (energy) {
                const i = document.createElement('i');
                i.className = `${energy.icon} ${energy.color}`;
                i.title = energy.name;
                elCityIcons.appendChild(i);
            }
        });

        elCityDesc.textContent = city.description;

        // Show panel
        cityPanel.classList.remove('hidden');
    }

    closeBtn.addEventListener('click', () => {
        cityPanel.classList.add('hidden');
        currentSelectedCity = null;
        map.setView([39.0, 35.0], 6, { animate: true, duration: 0.5 });
    });

    createPlanBtn.addEventListener('click', () => {
        if (currentSelectedCity) {
            alert(`${currentSelectedCity.name} için yapay zeka destekli yatırım planı simülasyonu başlatılıyor...`);
            // Switch to investment tab
            navButtons[1].click();
        }
    });

    // --- Render Investment Plans ---
    function renderInvestments() {
        const grid = document.getElementById('investments-grid');
        grid.innerHTML = '';

        cityData.forEach(city => {
            // For each potential energy, create a card
            city.potential.forEach(p => {
                const energy = energyTypes[p];
                const card = document.createElement('div');
                card.className = 'inv-card glass-panel';

                card.innerHTML = `
                    <div class="inv-header">
                        <div class="inv-city">
                            <i class="fa-solid fa-location-dot" style="font-size:0.8em; color:var(--text-secondary); margin-right:4px;"></i>
                            ${city.name}
                        </div>
                        <div class="inv-type ${energy.bgClass}">
                            <i class="${energy.icon}"></i> ${energy.name}
                        </div>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
                        ${city.name} bölgesinin ${city.carbonLevel === 'high' ? 'yüksek' : 'belirlenen'} karbon salınımını azaltmak için hedeflenen ${energy.name} yatırım projesi fizibilitesi.
                    </p>
                    <div class="inv-stats">
                        <div class="inv-stat-item">
                            <span>Tahmini Maliyet</span>
                            <strong>${city.investmentCost}</strong>
                        </div>
                        <div class="inv-stat-item">
                            <span>Amortisman (ROI)</span>
                            <strong style="color: var(--accent-green)">${city.roi}</strong>
                        </div>
                    </div>
                    <button class="inv-action" onclick="window.showDetailedReport('${city.id}', '${p}')">
                        Detaylı Raporu İncele <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i>
                    </button>
                `;
                grid.appendChild(card);
            });
        });
    }

    // Initialize investments
    renderInvestments();

    // --- Modal Logic ---
    const modal = document.getElementById('report-modal');
    const closeBtnModal = document.getElementById('close-modal');

    closeBtnModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.showDetailedReport = function (cityId, energyType) {
        const city = cityData.find(c => c.id === cityId);
        const energy = energyTypes[energyType];
        if (!city || !energy) return;

        // Populate modal data
        document.getElementById('modal-title').innerHTML = `${city.name} ${energy.name} Projesi`;
        document.getElementById('modal-icon').className = `${energy.icon} ${energy.color}`;
        document.getElementById('modal-desc').innerHTML = `<strong>${city.name}</strong> bölgesinde tespit edilen <strong>${city.carbonFootprint}</strong> seviyesindeki karbon emisyonunu azaltmak amacıyla planlanan ${energy.name} projesidir. <br><br> ${city.description}`;

        document.getElementById('modal-cost').textContent = city.investmentCost;
        document.getElementById('modal-roi').textContent = city.roi;

        // Generate random realistic looking data for the other fields
        const reductionNum = Math.floor(Math.random() * 500) + 100;
        document.getElementById('modal-reduction').textContent = `~${reductionNum}K Ton/Yıl`;

        const jobsNum = Math.floor(Math.random() * 1500) + 200;
        document.getElementById('modal-jobs').textContent = `+${jobsNum} Kişi`;

        const score = Math.floor(Math.random() * 15) + 85; // 85-99
        document.querySelector('.progress-label span:last-child').textContent = `%${score}`;
        document.querySelector('.progress-fill').style.width = `${score}%`;

        // Show modal
        modal.classList.remove('hidden');
    };

    // --- PDF Download Logic ---
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (typeof html2pdf === 'undefined') {
                alert('PDF kütüphanesi yüklenemedi. Lütfen internet bağlantınızı kontrol edin.');
                return;
            }

            const element = document.querySelector('.modal-content');

            // Geçici olarak butonları gizle ki PDF'te çıkmasınlar
            const footer = document.querySelector('.modal-footer');
            closeBtnModal.style.display = 'none';
            footer.style.display = 'none';

            // Dosya adı için başlığı al
            const reportTitle = document.getElementById('modal-title').textContent || 'Rapor';
            const fileName = `${reportTitle.replace(/\s+/g, '_')}_Fizibilite.pdf`;

            // PDF Ayarları
            const opt = {
                margin: 10,
                filename: fileName,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0a0e17' }, // Arka planı projenin dark temasına uygun ayarlıyoruz
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Buton metnini değiştirip kullanıcıya bilgi ver
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = 'İndiriliyor... <i class="fa-solid fa-spinner fa-spin"></i>';

            // PDF Oluştur
            html2pdf().set(opt).from(element).save().then(() => {
                // İşlem bitince butonları ve metinleri geri getir
                closeBtnModal.style.display = 'block';
                footer.style.display = 'flex';
                downloadBtn.innerHTML = originalText;
            }).catch(err => {
                console.error("PDF oluşturulurken hata oluştu: ", err);
                closeBtnModal.style.display = 'block';
                footer.style.display = 'flex';
                downloadBtn.innerHTML = originalText;
            });
        });
    }

    // --- Calculator Logic ---
    const calcForm = document.getElementById('carbon-form');
    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const elec = parseFloat(document.getElementById('elec-usage').value) || 0;
            const gas = parseFloat(document.getElementById('gas-usage').value) || 0;
            const car = parseFloat(document.getElementById('car-km').value) || 0;
            const fuelType = document.getElementById('fuel-type').value;
            const isRecycling = document.getElementById('recycling').checked;

            // Emission Factors (Approximate kg CO2)
            const elecFactor = 0.43; // kg CO2 per kWh
            const gasFactor = 2.0;   // kg CO2 per m3

            let carFactor = 0.2;     // default petrol
            if (fuelType === 'diesel') carFactor = 0.25;
            if (fuelType === 'lpg') carFactor = 0.16;
            if (fuelType === 'electric') carFactor = 0.05;

            // Calculations
            let total = (elec * elecFactor) + (gas * gasFactor) + (car * carFactor);

            // Recycling reduction (approx 10%)
            if (isRecycling) {
                total = total * 0.9;
            }

            // Update UI
            document.getElementById('calc-results').classList.remove('hidden');

            // Set number
            const totalEl = document.getElementById('total-co2');
            totalEl.textContent = total.toFixed(1);

            // Trees needed (1 tree absorbs ~25kg CO2 per year)
            // Trees needed = (total * 12) / 25
            const trees = Math.ceil((total * 12) / 25);
            document.getElementById('tree-count').textContent = trees;

            const msgEl = document.getElementById('result-message');
            const circle = document.querySelector('.result-circle');

            // Average Turkish household monthly CO2 is approx 400-500 kg
            if (total < 300) {
                msgEl.textContent = 'Harika! Ortalamanın altındasınız.';
                msgEl.className = 'text-glow-green';
                circle.style.borderColor = 'var(--accent-green)';
                circle.style.boxShadow = 'var(--glow-green)';
            } else if (total < 600) {
                msgEl.textContent = 'Ortalama bir tüketiminiz var.';
                msgEl.className = 'text-glow-yellow';
                circle.style.borderColor = 'var(--accent-yellow)';
                circle.style.boxShadow = '0 0 20px rgba(255, 234, 0, 0.4)';
            } else {
                msgEl.textContent = 'Dikkat! Emisyonunuz oldukça yüksek.';
                msgEl.className = 'text-glow-red';
                circle.style.borderColor = 'var(--accent-red)';
                circle.style.boxShadow = '0 0 20px rgba(255, 61, 0, 0.4)';
            }
        });

        // --- Calc Results PDF Download Logic ---
        const downloadCalcBtn = document.getElementById('download-calc-btn');
        if (downloadCalcBtn) {
            downloadCalcBtn.addEventListener('click', () => {
                if (typeof html2pdf === 'undefined') {
                    alert('PDF kütüphanesi yüklenemedi. Lütfen internet bağlantınızı kontrol edin.');
                    return;
                }

                const element = document.getElementById('calc-results');

                // Geçici olarak butonu gizle
                downloadCalcBtn.style.display = 'none';

                // PDF Ayarları
                const opt = {
                    margin: 10,
                    filename: `Karbon_Ayak_Izi_Sonucum.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0a0e17' },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
                };

                // PDF Oluştur
                html2pdf().set(opt).from(element).save().then(() => {
                    // İşlem bitince butonu geri getir
                    downloadCalcBtn.style.display = 'block';
                }).catch(err => {
                    console.error("PDF oluşturulurken hata oluştu: ", err);
                    downloadCalcBtn.style.display = 'block';
                });
            });
        }
    }
});
