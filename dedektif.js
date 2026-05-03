// Game Data: Levels
const levels = [
    {
        id: 1,
        name: 'Bölüm 1: Salon ve Mutfak',
        bgLight: 'assets/living_room_light.png',
        bgDark: 'assets/room_bg.png',
        items: [
            {
                id: 'tv', name: 'Televizyon', icon: 'fa-tv', position: { x: 30, y: 50 },
                question: 'Televizyonu izlemediğiniz zamanlarda kumandadan kapatmak yeterli midir?',
                options: [
                    { text: 'Evet, kumandadan kapatmak cihazın güç tüketimini tamamen durdurur.', isCorrect: false },
                    { text: 'Hayır, bekleme modunda hala elektrik harcar. Fişten çekilmelidir.', isCorrect: true }
                ],
                feedback: 'Bekleme modundaki cihazlar "vampir enerji" tüketir. Fişini çekerek tasarruf yapabilirsiniz.', points: 100, solved: false
            },
            {
                id: 'ac', name: 'Klima', icon: 'fa-snowflake', position: { x: 75, y: 25 },
                question: 'Yaz aylarında klimayı en verimli şekilde nasıl kullanmalısınız?',
                options: [
                    { text: 'İdeal oda sıcaklığı olan 24°C civarına ayarlayıp, filtrelerini temizlemeliyim.', isCorrect: true },
                    { text: 'Hızlı soğutmak için en düşük dereceye (18°C) ayarlamalıyım.', isCorrect: false },
                    { text: 'Pencereleri açık bırakıp içerinin havasını tazelemeliyim.', isCorrect: false }
                ],
                feedback: 'Klimayı 1 derece daha sıcak çalıştırmak %10 elektrik tasarrufu sağlar.', points: 100, solved: false
            },
            {
                id: 'fridge', name: 'Buzdolabı', icon: 'fa-cube', position: { x: 85, y: 65 },
                question: 'Buzdolabının enerji tüketimini azaltmak için hangisi YANLIŞTIR?',
                options: [
                    { text: 'Kapağını sık sık ve uzun süre açık tutmak.', isCorrect: true },
                    { text: 'Duvar ile arkası arasında en az 10 cm boşluk bırakmak.', isCorrect: false },
                    { text: 'Sıcak yemekleri soğutmadan dolaba koymamak.', isCorrect: false }
                ],
                feedback: 'Kapağı açık tutmak soğuk havayı kaçırır ve motorun fazla çalışmasına neden olur.', points: 100, solved: false
            },
            {
                id: 'lamp', name: 'Aydınlatma', icon: 'fa-lightbulb', position: { x: 50, y: 15 },
                question: 'Evin aydınlatmasında enerji tasarrufu sağlamak için en iyi yöntem hangisidir?',
                options: [
                    { text: 'Eski tip akkor ampulleri kullanmaya devam etmek.', isCorrect: false },
                    { text: 'Enerji verimli LED ampuller kullanmak.', isCorrect: true }
                ],
                feedback: 'LED ampuller geleneksel ampullere göre %80 daha az enerji tüketir.', points: 100, solved: false
            }
        ]
    },
    {
        id: 2,
        name: 'Bölüm 2: Banyo ve Çamaşır Odası',
        bgLight: 'assets/bathroom_light.png',
        bgDark: 'assets/bathroom_bg.png',
        items: [
            {
                id: 'washing_machine', name: 'Çamaşır Makinesi', icon: 'fa-shirt', position: { x: 30, y: 65 },
                question: 'Çamaşır makinesini çalıştırırken en fazla enerji tasarrufu nasıl sağlanır?',
                options: [
                    { text: 'Az çamaşırla sık sık çalıştırmak.', isCorrect: false },
                    { text: 'Makineyi tam doldurarak düşük sıcaklıkta (30°C-40°C) yıkamak.', isCorrect: true }
                ],
                feedback: 'Makineyi tam doldurmak ve düşük sıcaklıkta yıkamak enerji tüketimini yarı yarıya azaltabilir.', points: 100, solved: false
            },
            {
                id: 'water_heater', name: 'Şofben / Kombi', icon: 'fa-fire-burner', position: { x: 75, y: 40 },
                question: 'Sıcak su kullanımında tasarruf etmek için ne yapılmalıdır?',
                options: [
                    { text: 'Sıcaklık ayarını gereğinden çok yüksek tutmak.', isCorrect: false },
                    { text: 'Termostat ayarını optimize etmek ve su tasarruflu duş başlığı kullanmak.', isCorrect: true },
                    { text: 'Suyu ısıtıp saatlerce bekletmek.', isCorrect: false }
                ],
                feedback: 'Optimize edilmiş termostat ayarı ve tasarruflu başlıklar hem su hem elektrik faturanızı düşürür.', points: 100, solved: false
            }
        ]
    },
    {
        id: 3,
        name: 'Bölüm 3: Çalışma Odası',
        bgLight: 'assets/office_light.png',
        bgDark: 'assets/office_bg.png',
        items: [
            {
                id: 'pc', name: 'Bilgisayar', icon: 'fa-desktop', position: { x: 50, y: 45 },
                question: 'Çalışmaya kısa bir mola verdiğinizde bilgisayarınızı ne yapmalısınız?',
                options: [
                    { text: 'Ekran koruyucu açmalıyım.', isCorrect: false },
                    { text: 'Uyku (Sleep) moduna almalıyım veya ekranı kapatmalıyım.', isCorrect: true }
                ],
                feedback: 'Ekran koruyucular enerji tasarrufu sağlamaz. Uyku moduna almak güç tüketimini minimuma indirir.', points: 100, solved: false
            },
            {
                id: 'charger', name: 'Şarj Aletleri', icon: 'fa-plug', position: { x: 30, y: 60 },
                question: 'Telefon veya laptop şarj aletleri cihaz takılı değilken prizde bırakılmalı mıdır?',
                options: [
                    { text: 'Hayır, boşta bile olsalar az da olsa akım çekerler. Prizden çıkarılmalıdır.', isCorrect: true },
                    { text: 'Evet, cihaz takılı değilse kesinlikle enerji çekmezler.', isCorrect: false }
                ],
                feedback: 'Boşta prize takılı şarj aletleri sızıntı elektrik harcar. Anahtarlı prizler kullanarak bunu önleyebilirsiniz.', points: 100, solved: false
            }
        ]
    },
    {
        id: 4,
        name: 'Bölüm 4: Yatak Odası',
        bgLight: 'assets/bedroom_light.png',
        bgDark: 'assets/bedroom_dark.png',
        items: [
            {
                id: 'phone', name: 'Telefon Şarjı', icon: 'fa-mobile-screen', position: { x: 25, y: 55 },
                question: 'Telefonunuzu bütün gece şarjda bırakmak ne kadar mantıklıdır?',
                options: [
                    { text: 'Mantıklıdır, %100 olduktan sonra pil korunur.', isCorrect: false },
                    { text: 'Hem elektrik israfıdır hem de batarya ömrünü kısaltır.', isCorrect: true },
                    { text: 'Pil kalibrasyonu için faydalıdır.', isCorrect: false }
                ],
                feedback: 'Modern bataryalar 2-3 saatte dolar. Bütün gece prizde kalması gereksiz enerji harcar ve pili yorar.', points: 100, solved: false
            },
            {
                id: 'blanket', name: 'Elektrikli Battaniye', icon: 'fa-bed', position: { x: 50, y: 70 },
                question: 'Elektrikli battaniye kullanımı nasıl optimize edilmelidir?',
                options: [
                    { text: 'Bütün gece açık bırakarak sıcak kalmak.', isCorrect: false },
                    { text: 'Yatağa girmeden yarım saat önce açıp, uyurken kapatmak.', isCorrect: true }
                ],
                feedback: 'Uyurken battaniyeyi kapalı tutmak hem güvenliğiniz hem de elektrik faturanız için en doğrusudur.', points: 100, solved: false
            }
        ]
    },
    {
        id: 5,
        name: 'Bölüm 5: Mutfak Derinlikleri',
        bgLight: 'assets/kitchen_light.png',
        bgDark: 'assets/kitchen_dark.png',
        items: [
            {
                id: 'oven', name: 'Fırın', icon: 'fa-fire-burner', position: { x: 60, y: 65 },
                question: 'Yemek pişerken fırının kapağını açıp bakmak neden önerilmez?',
                options: [
                    { text: 'Fırının ışığı fazla enerji harcar.', isCorrect: false },
                    { text: 'Her açışta %20 ısı kaybı yaşanır ve fırın tekrar ısıtmak için elektrik harcar.', isCorrect: true },
                    { text: 'Yemeğin tadı bozulur.', isCorrect: false }
                ],
                feedback: 'Kapağı açmak yerine fırının iç ışığını ve camını kullanmak büyük tasarruf sağlar.', points: 100, solved: false
            },
            {
                id: 'kettle', name: 'Su Isıtıcı', icon: 'fa-mug-hot', position: { x: 30, y: 50 },
                question: 'Bir fincan çay için kettle çalıştırırken nelere dikkat etmeliyiz?',
                options: [
                    { text: 'Kettle tamamen doldurulmalıdır.', isCorrect: false },
                    { text: 'Sadece ihtiyacımız olan bir fincan kadar su kaynatmalıyız.', isCorrect: true }
                ],
                feedback: 'İhtiyacınızdan fazla suyu kaynatmak, gereksiz elektrik tüketiminin en yaygın nedenlerindendir.', points: 100, solved: false
            }
        ]
    },
    {
        id: 6,
        name: 'Bölüm 6: Garaj ve Bahçe',
        bgLight: 'assets/garage_light.png',
        bgDark: 'assets/garage_dark.png',
        items: [
            {
                id: 'sensor-light', name: 'Dış Aydınlatma', icon: 'fa-lightbulb', position: { x: 80, y: 30 },
                question: 'Bahçe aydınlatmalarını sürekli açık bırakmak yerine hangi teknoloji kullanılmalıdır?',
                options: [
                    { text: 'Güçlü halojen lambalar.', isCorrect: false },
                    { text: 'Hareket sensörlü ve güneş enerjili (Solar) lambalar.', isCorrect: true }
                ],
                feedback: 'Sensörlü veya solar aydınlatmalar bahçe tüketimini sıfıra kadar indirebilir.', points: 100, solved: false
            },
            {
                id: 'ev-charger', name: 'Araç Şarj İstasyonu', icon: 'fa-car-battery', position: { x: 20, y: 60 },
                question: 'Elektrikli aracı günün hangi saatlerinde şarj etmek şebeke için daha verimlidir?',
                options: [
                    { text: 'Akşam iş çıkışı, herkesin kullandığı yoğun saatlerde.', isCorrect: false },
                    { text: 'Gece geç saatlerde, elektrik talebinin düşük olduğu zamanlarda.', isCorrect: true }
                ],
                feedback: 'Gece saatlerinde şarj etmek, puant yükünü azaltır ve bazı tarifelerde daha ucuzdur.', points: 100, solved: false
            }
        ]
    },
    {
        id: 7,
        name: 'Bölüm 7: Akıllı Sistem Odası',
        bgLight: 'assets/smartcore_light.png',
        bgDark: 'assets/smartcore_dark.png',
        items: [
            {
                id: 'router', name: 'Wi-Fi Modem', icon: 'fa-wifi', position: { x: 45, y: 50 },
                question: 'Wi-Fi modeminizi evden uzun süreliğine ayrılırken (tatil vs.) kapatmalı mısınız?',
                options: [
                    { text: 'Hayır, hep açık kalmalıdır.', isCorrect: false },
                    { text: 'Evet, kapatmak enerjiden tasarruf sağlar ve cihaz ömrünü uzatır.', isCorrect: true }
                ],
                feedback: 'Yılda birkaç hafta kapalı kalan modem, hem güvenlik hem de tasarruf açısından fayda sağlar.', points: 100, solved: false
            },
            {
                id: 'thermostat', name: 'Akıllı Termostat', icon: 'fa-temperature-arrow-down', position: { x: 70, y: 40 },
                question: 'Evde değilken akıllı termostat nasıl ayarlanmalıdır?',
                options: [
                    { text: 'İdeal sıcaklıkta bırakılmalıdır.', isCorrect: false },
                    { text: 'Eko (Eco) moduna veya tasarruf derecesine alınmalıdır.', isCorrect: true }
                ],
                feedback: 'Eko modu, ev boşken ısıtma/soğutma sisteminin boşuna çalışmasını engeller.', points: 100, solved: false
            }
        ]
    }
];
// --- Web Audio API Sound Manager ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const SoundManager = {
    playTone: function(freq, type, duration, vol=0.1) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    },
    
    playClick: function() {
        this.playTone(600, 'sine', 0.1, 0.05);
    },
    
    playCorrect: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        this.playTone(523.25, 'sine', 0.1, 0.1); // C5
        setTimeout(() => this.playTone(659.25, 'sine', 0.2, 0.1), 100); // E5
        setTimeout(() => this.playTone(783.99, 'sine', 0.3, 0.1), 200); // G5
    },
    
    playWrong: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        this.playTone(300, 'sawtooth', 0.2, 0.1);
        setTimeout(() => this.playTone(250, 'sawtooth', 0.3, 0.1), 150);
    },
    
    playVictory: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const notes = [
            {f: 523.25, d: 0.15}, // C5
            {f: 523.25, d: 0.15}, // C5
            {f: 523.25, d: 0.15}, // C5
            {f: 659.25, d: 0.3},  // E5
            {f: 783.99, d: 0.3},  // G5
            {f: 1046.50, d: 0.5}  // C6
        ];
        
        let time = 0;
        notes.forEach(note => {
            setTimeout(() => this.playTone(note.f, 'square', note.d, 0.08), time);
            time += note.d * 1000 + 50;
        });
    },

    playCash: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        this.playTone(880, 'sine', 0.1, 0.1);
        setTimeout(() => this.playTone(1760, 'sine', 0.2, 0.1), 100);
    }
};

let currentLevelIndex = 0;
let currentScore = 0;
let currentItem = null;
let solvedCount = 0;
let combo = 0;
let isDarkMode = false;

// Store Data
const storeItems = [
    { id: 'theme-noir', name: 'Noir Dedektif', icon: 'fa-film', desc: 'Siyah-beyaz nostaljik film görünümü.', price: 200, type: 'theme', owned: false, equipped: false },
    { id: 'theme-matrix', name: 'Siber Ajan', icon: 'fa-code', desc: 'Sisteme sızın. Her şey dijital yeşile döner.', price: 400, type: 'theme', owned: false, equipped: false },
    { id: 'theme-neon', name: 'Neon Parti', icon: 'fa-music', desc: 'Renkleri çılgın neon tonlarına dönüştürür.', price: 300, type: 'theme', owned: false, equipped: false },
    { id: 'theme-sepia', name: 'Eski Zaman', icon: 'fa-clock', desc: 'Sıcak sepya tonlarıyla nostaljik bir hava.', price: 250, type: 'theme', owned: false, equipped: false },
    { id: 'custom-cursor', name: 'Mavi Büyüteç', icon: 'fa-magnifying-glass', desc: 'Fare imlecini mavi büyütece dönüştürür.', price: 150, type: 'cursor', owned: false, equipped: false },
    { id: 'gold-cursor', name: 'Altın Büyüteç', icon: 'fa-gem', desc: 'Premium altın renkli büyüteç imleci.', price: 500, type: 'cursor', owned: false, equipped: false },
    // NPC Accessories
    { id: 'acc-glasses', name: 'Güneş Gözlüğü', icon: 'fa-glasses', desc: 'Süper havalı bir dedektif güneş gözlüğü.', price: 100, type: 'npc-accessory', owned: false, equipped: false },
    { id: 'acc-hat', name: 'Dedektif Şapkası', icon: 'fa-hat-cowboy', desc: 'Kırmızı klasik dedektif fötr şapkası.', price: 250, type: 'npc-accessory', owned: false, equipped: false },
    { id: 'acc-tie', name: 'Papyon', icon: 'fa-user-tie', desc: 'Şık ve profesyonel görünüm için papyon.', price: 200, type: 'npc-accessory', owned: false, equipped: false }
];

// DOM Elements
const roomEl = document.getElementById('room');
const scoreEl = document.getElementById('score');
const levelNameEl = document.getElementById('level-name');
const rankTextEl = document.getElementById('rank-text');
const comboContainer = document.getElementById('combo-container');
const comboTextEl = document.getElementById('combo-text');
const hintBtn = document.getElementById('hint-btn');

const modalOverlay = document.getElementById('question-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalQuestion = document.getElementById('modal-question');
const modalOptions = document.getElementById('modal-options');
const modalFeedback = document.getElementById('modal-feedback');

const victoryModal = document.getElementById('victory-modal');
const victoryTitle = document.getElementById('victory-title');
const victoryDesc = document.getElementById('victory-desc');
const victoryIcon = document.getElementById('victory-icon');
const finalScoreText = document.getElementById('final-score-text');
const finalRankText = document.getElementById('final-rank-text');
const nextLevelBtn = document.getElementById('next-level-btn');
const finishGameBtn = document.getElementById('finish-game-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Store Elements
const storeModal = document.getElementById('store-modal');
const openStoreBtn = document.getElementById('open-store-btn');
const closeStoreBtn = document.getElementById('close-store-modal');
const storeBalanceEl = document.getElementById('store-balance');
const storeItemsContainer = document.getElementById('store-items');

// NPC Elements
const npcContainer = document.getElementById('detective-npc');
const npcSpeechBubble = document.getElementById('npc-speech-bubble');

// Floating Text Function
function spawnFloatingText(text, isPositive, x, y) {
    const el = document.createElement('div');
    el.className = `floating-text ${isPositive ? 'positive' : 'negative'}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 1500);
}

// Initialize Level
function loadLevel(index) {
    const level = levels[index];
    solvedCount = 0;

    // UI Update
    levelNameEl.textContent = level.name;
    roomEl.style.backgroundImage = `url('${isDarkMode ? level.bgDark : level.bgLight}')`;
    roomEl.innerHTML = ''; // Clear items

    // Create Items
    level.items.forEach(item => {
        const hotspot = document.createElement('div');
        hotspot.className = 'item-hotspot';
        hotspot.id = `hotspot-${item.id}`;
        hotspot.style.left = `${item.position.x}%`;
        hotspot.style.top = `${item.position.y}%`;
        hotspot.innerHTML = `<i class="fa-solid ${item.icon}"></i>`;

        hotspot.addEventListener('click', () => openModal(item));
        roomEl.appendChild(hotspot);
    });
}

function updateRank() {
    let rank = "Stajyer Dedektif";
    let icon = "fa-medal";
    let color = "#f1c40f"; // yellow

    if (currentScore >= 900) {
        rank = "Enerji Kahramanı";
        icon = "fa-crown";
        color = "#9b59b6"; // purple
    } else if (currentScore >= 600) {
        rank = "Baş Müfettiş";
        icon = "fa-star-half-stroke";
        color = "#e74c3c"; // red
    } else if (currentScore >= 300) {
        rank = "Uzman Dedektif";
        icon = "fa-star";
        color = "#3498db"; // blue
    }

    rankTextEl.textContent = rank;
    const rankBox = document.querySelector('.rank-box');
    rankBox.innerHTML = `<i class="fa-solid ${icon}"></i> <span id="rank-text">${rank}</span>`;
    rankBox.style.borderColor = color;
    rankBox.style.color = color;

    // Hex to rgba for background
    const r = parseInt(color.slice(1, 3), 16), g = parseInt(color.slice(3, 5), 16), b = parseInt(color.slice(5, 7), 16);
    rankBox.style.background = `rgba(${r}, ${g}, ${b}, 0.1)`;

    // Görünüm (Aura) Güncellemesi - Puan odaya yansır
    roomEl.style.boxShadow = `0 10px 40px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.5), 0 0 50px ${color}80`;
    roomEl.style.borderColor = color;

    return rank;
}

function updateRoomAppearance() {
    // Odanın dinamik karartması kaldırıldı, orijinal canlı görünüm korundu.
    roomEl.style.filter = '';
}

function openModal(item) {
    if (item.solved) return;

    SoundManager.playClick();

    currentItem = item;

    // Reset Hint
    hintBtn.disabled = currentScore < 50;

    // Populate Modal
    modalTitle.textContent = item.name;
    modalIcon.className = `fa-solid ${item.icon}`;
    modalQuestion.textContent = item.question;

    modalOptions.innerHTML = '';
    modalFeedback.className = 'feedback-message hidden';

    item.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="margin-right:10px; font-weight:bold;">${String.fromCharCode(65 + index)}.</span> ${opt.text}`;
        btn.dataset.isCorrect = opt.isCorrect;
        btn.addEventListener('click', () => handleAnswer(opt, btn));
        modalOptions.appendChild(btn);
    });

    modalOverlay.classList.remove('hidden');
}

// Hint Logic
hintBtn.addEventListener('click', (e) => {
    SoundManager.playClick();
    if (currentScore >= 50 && currentItem) {
        currentScore -= 50;
        updateScore(0); // refresh UI
        hintBtn.disabled = true; // One hint per question

        spawnFloatingText("-50", false, e.clientX, e.clientY);

        // Find one wrong option and disable it
        const buttons = modalOptions.querySelectorAll('.option-btn');
        const wrongBtns = Array.from(buttons).filter(b => b.dataset.isCorrect === "false" && !b.disabled);

        if (wrongBtns.length > 0) {
            // Pick a random wrong button to eliminate
            const btnToEliminate = wrongBtns[Math.floor(Math.random() * wrongBtns.length)];
            btnToEliminate.disabled = true;
            btnToEliminate.style.opacity = '0.3';
            btnToEliminate.style.textDecoration = 'line-through';
        }
    }
});

function handleAnswer(selectedOption, clickedBtn) {
    const buttons = modalOptions.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    hintBtn.disabled = true;

    // Get coords for floating text
    const rect = clickedBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    // Save item reference to avoid null issues when modal closes
    const itemToSolve = currentItem;

    if (selectedOption.isCorrect) {
        SoundManager.playCorrect();
        clickedBtn.classList.add('correct');

        // Combo mechanic
        combo++;
        let bonus = 0;
        if (combo >= 2) {
            bonus = 50;
            comboContainer.classList.remove('hidden');
            comboTextEl.textContent = `Seri x${combo} (+50 Puan)`;
            // Trigger animation re-flow
            comboContainer.style.animation = 'none';
            comboContainer.offsetHeight; /* trigger reflow */
            comboContainer.style.animation = 'pop 0.3s ease';
        }

        const totalEarned = itemToSolve.points + bonus;
        spawnFloatingText(`+${totalEarned}`, true, x, y);

        updateScore(totalEarned);
        const fbMessage = "Doğru! " + itemToSolve.feedback + (bonus > 0 ? ` (+${bonus} Seri Bonusu!)` : '');
        
        markItemSolved(itemToSolve);
        showFeedback(true, fbMessage);
    } else {
        SoundManager.playWrong();
        clickedBtn.classList.add('wrong');

        // Break combo
        combo = 0;
        comboContainer.classList.add('hidden');

        // Find and highlight correct answer
        buttons.forEach((btn, idx) => {
            if (btn.dataset.isCorrect === "true") {
                btn.classList.add('correct');
            }
        });
        
        markItemSolved(itemToSolve);
        showFeedback(false, "Yanlış cevap. " + itemToSolve.feedback);
    }
}

let npcTimeout;

function showFeedback(isSuccess, message) {
    // Hide the question modal immediately
    closeModal();

    // Call the NPC to give feedback directly
    triggerNpc(message, isSuccess);

    // Check level progress after NPC finishes speaking
    setTimeout(() => {
        checkLevelProgress();
    }, 4500);
}

function updateScore(points) {
    currentScore += points;
    scoreEl.textContent = currentScore;
    updateRank();
    updateRoomAppearance();
}

function markItemSolved(item) {
    item.solved = true;
    solvedCount++;
    const hotspot = document.getElementById(`hotspot-${item.id}`);
    hotspot.classList.add('solved');
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    currentItem = null;
}

function checkLevelProgress() {
    const level = levels[currentLevelIndex];
    if (solvedCount === level.items.length) {
        setTimeout(() => {
            showVictoryModal();
        }, 500);
    }
}

function showVictoryModal() {
    SoundManager.playVictory();
    finalScoreText.textContent = currentScore;
    finalRankText.textContent = updateRank();

    const isLastLevel = currentLevelIndex === levels.length - 1;

    if (isLastLevel) {
        victoryTitle.textContent = "Tüm Görevler Tamamlandı!";
        victoryDesc.textContent = "Harika iş çıkardın Dedektif! Evin her köşesindeki enerji kaçaklarını önledin.";
        victoryIcon.className = "fa-solid fa-trophy victory-icon";
        victoryIcon.style.color = "#f1c40f";
        nextLevelBtn.classList.add('hidden');
        finishGameBtn.classList.remove('hidden');
    } else {
        victoryTitle.textContent = "Bölüm Tamamlandı!";
        victoryDesc.textContent = "Bu odadaki tüm sorunları çözdünüz. Diğer odalara geçmeye hazır mısınız?";
        victoryIcon.className = "fa-solid fa-check-circle victory-icon";
        victoryIcon.style.color = "#2ed573";
        nextLevelBtn.classList.remove('hidden');
        finishGameBtn.classList.add('hidden');
    }

    victoryModal.classList.remove('hidden');
}

nextLevelBtn.addEventListener('click', () => {
    victoryModal.classList.add('hidden');
    currentLevelIndex++;
    loadLevel(currentLevelIndex);
});

// Store Logic
function renderStore() {
    storeBalanceEl.textContent = currentScore;
    storeItemsContainer.innerHTML = '';

    storeItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'store-item';

        let btnHtml = '';
        if (!item.owned) {
            btnHtml = `<button class="btn-buy" onclick="buyStoreItem('${item.id}', event)">Satın Al (${item.price} <i class="fa-solid fa-star" style="font-size: 0.8em;"></i>)</button>`;
        } else if (item.equipped) {
            if (item.type === 'npc-accessory') {
                btnHtml = `<button class="btn-equipped" onclick="equipStoreItem('${item.id}')">Çıkar</button>`;
            } else {
                btnHtml = `<button class="btn-equipped" disabled>Kullanılıyor</button>`;
            }
        } else {
            btnHtml = `<button class="btn-equip" onclick="equipStoreItem('${item.id}')">Kullan</button>`;
        }

        div.innerHTML = `
            <i class="fa-solid ${item.icon}"></i>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            ${btnHtml}
        `;
        storeItemsContainer.appendChild(div);
    });
}

window.buyStoreItem = function (id, e) {
    const item = storeItems.find(i => i.id === id);
    if (currentScore >= item.price) {
        SoundManager.playCash();
        currentScore -= item.price;
        updateScore(0);
        item.owned = true;

        // Spawn floating text
        const rect = e.target.getBoundingClientRect();
        spawnFloatingText(`-${item.price}`, false, rect.left + rect.width / 2, rect.top);

        equipStoreItem(id); // Auto equip
    } else {
        alert("Yetersiz Puan!");
    }
};

window.equipStoreItem = function (id) {
    const itemToEquip = storeItems.find(i => i.id === id);

    // If it's a theme, unequip other themes
    if (itemToEquip.type === 'theme') {
        storeItems.filter(i => i.type === 'theme').forEach(i => {
            i.equipped = false;
            document.body.classList.remove(i.id);
        });
        document.body.classList.add(id);
    } else if (itemToEquip.type === 'cursor') {
        storeItems.filter(i => i.type === 'cursor').forEach(i => {
            i.equipped = false;
            document.body.classList.remove(i.id);
        });
        document.body.classList.add(id);
        itemToEquip.equipped = true;
    } else if (itemToEquip.type === 'npc-accessory') {
        const accessoryEl = document.getElementById(id);
        if (itemToEquip.equipped) {
            // Unequip
            itemToEquip.equipped = false;
            if (accessoryEl) accessoryEl.classList.add('hidden-accessory');
        } else {
            // Equip (can stack multiple accessories)
            itemToEquip.equipped = true;
            if (accessoryEl) accessoryEl.classList.remove('hidden-accessory');
        }
    }

    renderStore();
};

openStoreBtn.addEventListener('click', () => {
    renderStore();
    storeModal.classList.remove('hidden');
});

closeStoreBtn.addEventListener('click', () => {
    storeModal.classList.add('hidden');
});

storeModal.addEventListener('click', (e) => {
    if (e.target === storeModal) storeModal.classList.add('hidden');
});

// Event Listeners
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Update Icon
    themeToggleBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

    // Update Background
    const currentLevel = levels[currentLevelIndex];
    roomEl.style.backgroundImage = `url('${isDarkMode ? currentLevel.bgDark : currentLevel.bgLight}')`;
});

// Start Game
loadLevel(0);
updateRank();
updateRoomAppearance();

// NPC Logic
const npcMessages = [
    "Harika gidiyorsun dedektif!",
    "Buralarda bir vampir enerji mi var?",
    "Prizleri kontrol etmeyi unutma!",
    "Enerjiyi boşa harcamayalım!",
    "Her tasarruf doğaya bir nefes!",
    "İpucu kullanmaktan çekinme, ama puanlarına dikkat et!",
    "Gözüm üzerinde stajyer!",
    "Fişi çekmek her zaman en iyisidir."
];

function triggerNpc(customMessage = null, isSuccess = null) {
    if (!npcContainer) return;

    // Clear any existing timeout to avoid overlapping dismissals
    if (npcTimeout) clearTimeout(npcTimeout);

    // Reset styles
    npcSpeechBubble.className = 'speech-bubble';

    if (customMessage) {
        // Feedback call
        npcSpeechBubble.textContent = customMessage;
        if (isSuccess === true) {
            npcSpeechBubble.classList.add('correct-feedback');
        } else if (isSuccess === false) {
            npcSpeechBubble.classList.add('wrong-feedback');
        }
    } else {
        // Random generic message
        const msg = npcMessages[Math.floor(Math.random() * npcMessages.length)];
        npcSpeechBubble.textContent = msg;
    }

    // Show NPC
    npcContainer.classList.remove('hidden-npc');

    // Hide after reading time (longer for feedback)
    const displayTime = customMessage ? 4500 : 4000;
    npcTimeout = setTimeout(() => {
        npcContainer.classList.add('hidden-npc');
    }, displayTime);
}

// Randomly trigger NPC between 15s to 30s
function scheduleNextNpc() {
    const randomDelay = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;
    setTimeout(() => {
        triggerNpc();
        scheduleNextNpc();
    }, randomDelay);
}

// Start NPC Scheduler
setTimeout(scheduleNextNpc, 5000); // First appearance after 5s for demo

