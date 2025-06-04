// Toggle sidebar on mobile
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('md:w-20');
    document.querySelector('.sidebar').classList.toggle('lg:w-64');
    document.querySelector('.sidebar').classList.toggle('w-64');

    // Toggle hidden class for all span elements in sidebar
    const sidebarSpans = document.querySelectorAll('.sidebar span');
    sidebarSpans.forEach(span => {
        span.classList.toggle('lg:block');
        span.classList.toggle('md:hidden');
    });
});

// Toggle notification dropdown
document.getElementById('notificationBtn').addEventListener('click', function () {
    document.getElementById('notificationDropdown').classList.toggle('hidden');
    document.getElementById('userMenuDropdown').classList.add('hidden');
});

// Toggle user menu dropdown
document.getElementById('userMenuBtn').addEventListener('click', function () {
    document.getElementById('userMenuDropdown').classList.toggle('hidden');
    document.getElementById('notificationDropdown').classList.add('hidden');
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('#notificationBtn') && !event.target.closest('#notificationDropdown')) {
        document.getElementById('notificationDropdown').classList.add('hidden');
    }

    if (!event.target.closest('#userMenuBtn') && !event.target.closest('#userMenuDropdown')) {
        document.getElementById('userMenuDropdown').classList.add('hidden');
    }
});

// Main Chart
const mainCtx = document.getElementById('mainChart').getContext('2d');
const mainChart = new Chart(mainCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [6500, 5900, 8000, 8100, 8600, 9250, 10000, 10500, 12000, 11500, 12500, 14000],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            },
            {
                label: 'Expenses',
                data: [4000, 4200, 4500, 4800, 5000, 5200, 5500, 5800, 6000, 6200, 6500, 7000],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Organic', 'Referral', 'Social', 'Email'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                '#6366f1',
                '#10b981',
                '#f59e0b',
                '#3b82f6',
                '#8b5cf6'
            ],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
});

// Simulate loading data
function simulateLoading() {
    const loadingElements = document.querySelectorAll('.shimmer-loading');
    loadingElements.forEach(el => {
        el.classList.add('shimmer');
        setTimeout(() => {
            el.classList.remove('shimmer');
        }, 1500);
    });
}

// Refresh data every 30 seconds (simulated)
setInterval(simulateLoading, 30000);

// Dark mode toggle (could be implemented)
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
});