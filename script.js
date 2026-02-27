// Ramadan Timing App - Mauritania JavaScript
class RamadanTiming {
    constructor() {
        this.prayerTimes = {
            nouakchott: {
                fajr: '05:12',
                duhur: '12:18',
                asr: '15:42',
                maghrib: '18:45',
                isha: '20:15'
            },
            nouadhibou: {
                fajr: '05:10',
                duhur: '12:16',
                asr: '15:40',
                maghrib: '18:43',
                isha: '20:13'
            },
            zouerate: {
                fajr: '05:08',
                duhur: '12:14',
                asr: '15:38',
                maghrib: '18:41',
                isha: '20:11'
            },
            kaedi: {
                fajr: '05:15',
                duhur: '12:21',
                asr: '15:45',
                maghrib: '18:48',
                isha: '20:18'
            },
            Rosso: {
                fajr: '05:14',
                duhur: '12:20',
                asr: '15:44',
                maghrib: '18:47',
                isha: '20:17'
            },
            atar: {
                fajr: '05:09',
                duhur: '12:17',
                asr: '15:41',
                maghrib: '18:44',
                isha: '20:14'
            }
        };

        this.prayerNames = {
            fajr: 'الفجر',
            duhur: 'الظهر',
            asr: 'العصر',
            maghrib: 'المغرب',
            isha: 'العشاء'
        };

<<<<<<< HEAD
        this.ramadanStart = new Date(2026, 2, 10);
        this.ramadanEnd = new Date(2026, 3, 9);
        
=======
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        this.init();
    }

    init() {
        this.updateDateTime();
        this.updatePrayerTimes();
        this.startCountdown();
        this.setupEventListeners();
        
<<<<<<< HEAD
=======
        // Update every second
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        setInterval(() => {
            this.updateDateTime();
            this.updateCountdown();
        }, 1000);
    }

    updateDateTime() {
        const now = new Date();
<<<<<<< HEAD
        const dateOptions = { 
=======
        const options = { 
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
<<<<<<< HEAD
        const dateStr = now.toLocaleDateString('ar-SA', dateOptions);
=======
        const dateStr = now.toLocaleDateString('ar-SA', options);
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        const timeStr = now.toLocaleTimeString('ar-SA', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

<<<<<<< HEAD
        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');
        
        if (dateElement) dateElement.textContent = dateStr;
        if (timeElement) timeElement.textContent = timeStr;
    }

    updatePrayerTimes() {
        const city = document.getElementById('city')?.value || 'nouakchott';
=======
        document.getElementById('current-date').textContent = dateStr;
        document.getElementById('current-time').textContent = timeStr;
    }

    updatePrayerTimes() {
        const city = document.getElementById('city').value;
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        const times = this.prayerTimes[city];
        
        Object.keys(times).forEach(prayer => {
            const element = document.getElementById(`${prayer}-time`);
            if (element) {
                element.textContent = times[prayer];
            }
        });
    }

    setupEventListeners() {
<<<<<<< HEAD
        const citySelect = document.getElementById('city');
        if (citySelect) {
            citySelect.addEventListener('change', () => {
                this.updatePrayerTimes();
                this.updateCountdown();
                this.removeActiveClass();
            });
        }
=======
        document.getElementById('city').addEventListener('change', () => {
            this.updatePrayerTimes();
            this.updateCountdown();
            this.removeActiveClass();
        });
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
    }

    removeActiveClass() {
        document.querySelectorAll('.prayer-card').forEach(card => {
            card.classList.remove('active');
        });
    }

    getCurrentPrayerTimes() {
<<<<<<< HEAD
        const city = document.getElementById('city')?.value || 'nouakchott';
=======
        const city = document.getElementById('city').value;
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        return this.prayerTimes[city];
    }

    getNextPrayer() {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const times = this.getCurrentPrayerTimes();
        
<<<<<<< HEAD
=======
        // Convert prayer times to minutes
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        const prayerMinutes = {};
        Object.keys(times).forEach(prayer => {
            const [hours, minutes] = times[prayer].split(':').map(Number);
            prayerMinutes[prayer] = hours * 60 + minutes;
        });

<<<<<<< HEAD
=======
        // Find next prayer
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        let nextPrayer = null;
        let nextTime = null;
        
        Object.entries(prayerMinutes).forEach(([prayer, time]) => {
            if (time > currentTime && (!nextTime || time < nextTime)) {
                nextPrayer = prayer;
                nextTime = time;
            }
        });

<<<<<<< HEAD
        if (!nextPrayer) {
            const prayers = Object.keys(prayerMinutes);
            nextPrayer = prayers[0];
            nextTime = prayerMinutes[nextPrayer] + 24 * 60;
=======
        // If no next prayer today, return first prayer tomorrow
        if (!nextPrayer) {
            const prayers = Object.keys(prayerMinutes);
            nextPrayer = prayers[0];
            nextTime = prayerMinutes[nextPrayer] + 24 * 60; // Add 24 hours
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        }

        return {
            name: nextPrayer,
            time: nextTime,
            displayTime: times[nextPrayer]
        };
    }

    updateCountdown() {
        const nextPrayer = this.getNextPrayer();
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
        const nextTime = nextPrayer.time;
        
        let timeDifference = nextTime - currentTime;
        
<<<<<<< HEAD
        if (timeDifference < 0) {
            timeDifference += 24 * 60;
=======
        // If next prayer is tomorrow
        if (timeDifference < 0) {
            timeDifference += 24 * 60; // Add 24 hours
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        }

        const hours = Math.floor(timeDifference / 60);
        const minutes = Math.floor(timeDifference % 60);
        const seconds = Math.floor((timeDifference - hours * 60 - minutes) * 60);

<<<<<<< HEAD
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        const nameElement = document.getElementById('next-prayer-name');

        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (nameElement) {
            nameElement.textContent = `الصلاة التالية: ${this.prayerNames[nextPrayer.name]} (${nextPrayer.displayTime})`;
        }

=======
        document.getElementById('countdown-hours').textContent = 
            hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = 
            minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = 
            seconds.toString().padStart(2, '0');

        document.getElementById('next-prayer-name').textContent = 
            `الصلاة التالية: ${this.prayerNames[nextPrayer.name]} (${nextPrayer.displayTime})`;

        // Highlight current prayer time
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        this.highlightCurrentPrayer();
    }

    highlightCurrentPrayer() {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const times = this.getCurrentPrayerTimes();
        
<<<<<<< HEAD
        this.removeActiveClass();
        
=======
        // Remove active class from all cards
        this.removeActiveClass();
        
        // Check each prayer time (with 5-minute tolerance)
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        Object.entries(times).forEach(([prayer, timeStr]) => {
            const [hours, minutes] = timeStr.split(':').map(Number);
            const prayerTime = hours * 60 + minutes;
            
<<<<<<< HEAD
=======
            // Check if current time is within 5 minutes of prayer time
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
            if (Math.abs(currentTime - prayerTime) <= 5) {
                const card = document.querySelector(`.${prayer}`);
                if (card) {
                    card.classList.add('active');
                }
            }
        });
    }

    startCountdown() {
        this.updateCountdown();
<<<<<<< HEAD
=======
        
        // Update countdown every second
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
        setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

<<<<<<< HEAD
    isRamadan() {
        const now = new Date();
        return now >= this.ramadanStart && now <= this.ramadanEnd;
    }

    getRamadanDaysRemaining() {
        const now = new Date();
        if (now > this.ramadanEnd) {
            return 0;
        }
        const diffTime = this.ramadanEnd - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    getDaysUntilRamadan() {
        const now = new Date();
        if (now >= this.ramadanStart) {
            return 0;
        }
        const diffTime = this.ramadanStart - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
=======
    // Method to get prayer times for a specific date
    getPrayerTimesForDate(date, city = 'nouakchott') {
        // This is a simplified version - in production, you'd use proper prayer time calculation
        const baseTimes = this.prayerTimes[city];
        const dateObj = new Date(date);
        
        // Add slight variations based on date (simplified)
        const dayOfYear = Math.floor((dateObj - new Date(dateObj.getFullYear(), 0, 0)) / 86400000);
        const variation = Math.sin(dayOfYear * 2 * Math.PI / 365) * 0.1; // 6-minute variation
        
        const adjustedTimes = {};
        Object.keys(baseTimes).forEach(prayer => {
            const [hours, minutes] = baseTimes[prayer].split(':').map(Number);
            const totalMinutes = hours * 60 + minutes + variation * 60;
            const adjustedHours = Math.floor(totalMinutes / 60);
            const adjustedMinutes = Math.floor(totalMinutes % 60);
            
            adjustedTimes[prayer] = 
                `${adjustedHours.toString().padStart(2, '0')}:${adjustedMinutes.toString().padStart(2, '0')}`;
        });
        
        return adjustedTimes;
    }

    // Check if today is Ramadan
    isRamadan() {
        const now = new Date();
        const ramadanStart = new Date(2026, 2, 10); // March 10, 2026 (month is 0-indexed)
        const ramadanEnd = new Date(2026, 3, 9); // April 9, 2026
        
        return now >= ramadanStart && now <= ramadanEnd;
    }

    // Get Ramadan countdown
    getRamadanCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        
        // Check if Ramadan has started this year
        let ramadanStart, ramadanEnd;
        
        if (now.getMonth() < 2 || (now.getMonth() === 2 && now.getDate() < 10)) {
            // Ramadan hasn't started yet
            ramadanStart = new Date(currentYear, 2, 10); // March 10
            ramadanEnd = new Date(currentYear, 3, 9); // April 9
        } else if (now.getMonth() > 3 || (now.getMonth() === 3 && now.getDate() > 9)) {
            // Ramadan has ended, calculate for next year
            ramadanStart = new Date(currentYear + 1, 2, 10); // March 10 next year
            ramadanEnd = new Date(currentYear + 1, 3, 9); // April 9 next year
        } else {
            // Ramadan is ongoing
            return null; // Ramadan is happening now
        }
        
        const timeDiff = ramadanStart - now;
        const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        return {
            days: daysUntil,
            start: ramadanStart,
            end: ramadanEnd
        };
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const app = new RamadanTiming();
    
    // Add Ramadan countdown to the page
    setTimeout(() => {
        const ramadanInfo = document.querySelector('.ramadan-info');
        if (ramadanInfo) {
            const daysUntil = app.getDaysUntilRamadan();
            const daysRemaining = app.getRamadanDaysRemaining();
            
            let countdownHTML = '';
            if (daysUntil > 0) {
                countdownHTML = `<p class="countdown-info">📅 بدأ شهر رمضان بعد <strong>${daysUntil} يوم</strong></p>`;
            } else if (daysRemaining > 0) {
                countdownHTML = `<p class="countdown-info">🌙 شهر رمضان جاري! تبقى <strong>${daysRemaining} يوم</strong> من رمضان</p>`;
            } else {
                countdownHTML = `<p class="countdown-info">✅ لقد انتهى شهر رمضان هذا العام</p>`;
            }
            
            ramadanInfo.innerHTML += countdownHTML;
        }
    }, 1000);
});
=======
    new RamadanTiming();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RamadanTiming;
}

// Add some utility functions
function formatTime(date) {
    return date.toLocaleTimeString('ar-SA', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDate(date) {
    return date.toLocaleDateString('ar-SA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Check if browser supports localStorage for future enhancements
function checkLocalStorage() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}
>>>>>>> 8ff31dc22b3e90d207d09f9c3e21b97e7ac71566
