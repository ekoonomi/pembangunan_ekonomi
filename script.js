document.addEventListener('DOMContentLoaded', function() {
    // Initial animations for staggered entrance
    animateEntrance();
    
    // Modal functionality
    setupModalHandlers();
    
    // Interactive diagram
    setupInteractiveDiagram();
    
    // Setup contribution button
    document.getElementById('contribution-btn').addEventListener('click', showContributionModal);
});

// Animation for page entrance
function animateEntrance() {
    // Additional entrance animations could be added here
    // Elements already have CSS animations with delays
}

// Set up modal functionality
function setupModalHandlers() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const learnMoreBtns = document.querySelectorAll('.learn-more');
    
    // Add click event for all "Learn More" buttons
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pillar = this.getAttribute('data-pillar');
            showPillarModal(pillar);
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Show modal with specific pillar content
function showPillarModal(pillar) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Set content based on pillar type
    switch(pillar) {
        case 'health':
            modalTitle.textContent = 'Peningkatan Kesehatan';
            modalTitle.style.color = '#3498db';
            modalBody.innerHTML = `
                <p>Investasi dalam bidang kesehatan merupakan investasi jangka panjang untuk ekonomi bangsa. Masyarakat yang sehat adalah modal utama pembangunan.</p>
                <br>
                <h3>Program Prioritas:</h3>
                <ul>
                    <li>Penguatan sistem kesehatan primer di seluruh wilayah</li>
                    <li>Pemerataan akses layanan kesehatan berkualitas</li>
                    <li>Pengembangan jaminan kesehatan nasional</li>
                    <li>Peningkatan kualitas gizi masyarakat</li>
                    <li>Pengendalian penyakit menular dan tidak menular</li>
                </ul>
                <br>
                <h3>Dampak Ekonomi:</h3>
                <p>Peningkatan kesehatan masyarakat berkorelasi dengan peningkatan produktivitas kerja dan pengurangan biaya perawatan kesehatan jangka panjang.</p>
            `;
            break;
            
        case 'welfare':
            modalTitle.textContent = 'Peningkatan Kesejahteraan';
            modalTitle.style.color = '#e74c3c';
            modalBody.innerHTML = `
                <p>Kesejahteraan masyarakat adalah indikator keberhasilan pembangunan ekonomi yang inklusif dan berkeadilan.</p>
                <br>
                <h3>Program Prioritas:</h3>
                <ul>
                    <li>Perluasan jangkauan jaminan sosial</li>
                    <li>Program pemberdayaan ekonomi kerakyatan</li>
                    <li>Perumahan yang layak dan terjangkau</li>
                    <li>Pengentasan kemiskinan dan ketimpangan</li>
                    <li>Pembangunan infrastruktur yang merata</li>
                </ul>
                <br>
                <h3>Dampak Ekonomi:</h3>
                <p>Peningkatan kesejahteraan mendorong daya beli masyarakat dan menciptakan pasar yang lebih luas untuk produk dan jasa dalam negeri.</p>
            `;
            break;
            
        case 'education':
            modalTitle.textContent = 'Pemerataan Pendidikan';
            modalTitle.style.color = '#f39c12';
            modalBody.innerHTML = `
                <p>Pendidikan yang merata dan berkualitas adalah kunci untuk menciptakan sumber daya manusia yang kompetitif di era global.</p>
                <br>
                <h3>Program Prioritas:</h3>
                <ul>
                    <li>Pemerataan akses pendidikan di seluruh wilayah</li>
                    <li>Peningkatan kualitas guru dan tenaga pendidik</li>
                    <li>Pengembangan kurikulum yang sesuai kebutuhan industri</li>
                    <li>Penguatan pendidikan vokasi dan kewirausahaan</li>
                    <li>Beasiswa untuk siswa berprestasi dari keluarga kurang mampu</li>
                </ul>
                <br>
                <h3>Dampak Ekonomi:</h3>
                <p>Pendidikan yang baik menciptakan tenaga kerja terampil yang mendorong inovasi dan produktivitas ekonomi.</p>
            `;
            break;
    }
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Close modal with animation
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}


// Setup interactive diagram
function setupInteractiveDiagram() {
    const circles = document.querySelectorAll('.circle');
    const middle = document.querySelector('.middle');
    
    // Add hover effects and animations for circles
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            // Create connecting line animation
            createConnection(this, middle);
            
            // Pulse animation for middle
            middle.style.transform = 'translate(-50%, -50%) scale(1.1)';
            setTimeout(() => {
                middle.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 300);
        });
    });
}

// Create visual connection between elements (simplified)
function createConnection(from, to) {
    // Visual feedback only through CSS
    from.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
        from.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    }, 300);
}

// Show contribution modal
function showContributionModal() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = 'Cara Berkontribusi dalam Pembangunan Ekonomi';
    modalTitle.style.color = '#2c3e50';
    
    modalBody.innerHTML = `
        <h3>Sebagai Individu:</h3>
        <ul>
            <li>Peningkatan Kesehatan: Adopsi gaya hidup sehat dan berpartisipasi dalam program kesehatan masyarakat</li>
            <li>Peningkatan Kesejahteraan: Mendukung usaha lokal dan produk dalam negeri</li>
            <li>Pemerataan Pendidikan: Berbagi pengetahuan dan keterampilan, menjadi mentor</li>
        </ul>
        <br>
        <h3>Sebagai Komunitas:</h3>
        <ul>
            <li>Membentuk kelompok peduli kesehatan masyarakat</li>
            <li>Menginisiasi koperasi dan usaha berbasis komunitas</li>
            <li>Mendirikan pusat pembelajaran informal dan perpustakaan komunitas</li>
        </ul>
        <br>
        <h3>Bagi Pelaku Usaha:</h3>
        <ul>
            <li>Menciptakan lingkungan kerja yang sehat</li>
            <li>Menerapkan kebijakan upah yang adil dan manfaat kesejahteraan karyawan</li>
            <li>Menyediakan pelatihan dan pengembangan keterampilan bagi karyawan</li>
        </ul>
        <br>
        <p class="conclusion">Pembangunan ekonomi adalah tanggung jawab bersama. Setiap kontribusi, seberapapun kecilnya, akan berdampak pada kemajuan bersama.</p>
    `;
    
    // // Create pie chart for contribution impact
    // const chartDiv = document.createElement('div');
    // chartDiv.style.height = '300px';
    // modalBody.appendChild(chartDiv);
    
    // const canvas = document.createElement('canvas');
    // canvas.id = 'contributionChart';
    // chartDiv.appendChild(canvas);
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
        
        // Create chart
        const ctx = document.getElementById('contributionChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Kontribusi Individual', 'Kontribusi Komunitas', 'Kontribusi Bisnis', 'Kontribusi Pemerintah'],
                datasets: [{
                    data: [25, 30, 20, 25],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(230, 126, 34, 0.7)'
                    ],
                    borderColor: 'white',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Proporsi Kontribusi untuk Pembangunan Ekonomi'
                    },
                    legend: {
                        position: 'bottom'
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000,
                    easing: 'easeOutCirc'
                }
            }
        });
    }, 10);
}

// Add some interactive elements when scrolling
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Get elements to animate on scroll
    const pillars = document.querySelectorAll('.pillar');
    const integration = document.querySelector('.integration');
    const callToAction = document.querySelector('.call-to-action');
    
    // Check if elements are in viewport and animate them
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= windowHeight * 0.85 && 
            rect.bottom >= 0
        );
    }
    
    // Add extra animations for pillars when they come into view
    pillars.forEach(pillar => {
        if (isInViewport(pillar)) {
            pillar.style.opacity = '1';
            pillar.style.transform = 'translateY(0)';
        }
    });
    
    // Animate integration diagram when in viewport
    if (integration && isInViewport(integration)) {
        integration.classList.add('animated');
    }
    
    // Animate call to action when in viewport
    if (callToAction && isInViewport(callToAction)) {
        callToAction.classList.add('animated');
    }
});

// Add particles background effect (decorative)
function addParticlesEffect() {
    const container = document.querySelector('.container');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    
    // Insert particles container before the first child of the main container
    container.insertBefore(particlesContainer, container.firstChild);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 10 + 3;
    
    // Random color
    const colors = ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    
    
    container.appendChild(particle);
}

// Initialize particles effect
addParticlesEffect();