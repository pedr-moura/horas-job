let onViewGraph = document.getElementById('graph')

function renderGraph(){
    if(onViewGraph == ''){

        function getLast30Days() {
            const today = new Date();
            const last30Days = [];
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            for (let i = 29; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                const formattedDate = date.toLocaleDateString('en-CA', options).split('/').reverse().join('-'); // Formato 'dd-mm-yyyy'
                last30Days.push(formattedDate);
            }
            return last30Days;
        }
        
        const dateMap = {};
        Object.values(projects).forEach(projeto => {
            const date = projeto['format-data'];
            const horas = parseFloat(projeto['horas']);
            if (dateMap[date]) {
                dateMap[date] += horas;
            } else {
                dateMap[date] = horas;
            }
        });
        
        const last30Days = getLast30Days();
        
        
        const labels = last30Days;
        const horas = last30Days.map(date => {
            return dateMap[date] || 0;
        });
        
        const ctx = document.getElementById('boxdetalhes').getContext('2d');
        const boxdetalhes = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: horas,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 4, // Define o tamanho dos pontos
                    pointBackgroundColor: '#93ed78' // Define a cor do background dos pontos
                }]
            },
            options: {
                animation: {
                    duration: 500, 
                    easing: 'easeInOutQuart' 
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.2)' // Altera a cor dos ticks do eixo y
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Remove o texto do topo do gráfico
                    }
                },
                elements: {
                    line: {
                        cubicInterpolationMode: 'monotone' // Torna as linhas mais suavizadas e arredondadas
                    }
                }
            }
        });
        
        
    }else{
        
        function getLast30Days() {
            const today = new Date();
            const last30Days = [];
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            for (let i = 29; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                const formattedDate = date.toLocaleDateString('en-CA', options).split('/').reverse().join('-'); // Formato 'dd-mm-yyyy'
                last30Days.push(formattedDate);
            }
            return last30Days;
        }
        
        const dateMap = {};
        Object.values(projects).forEach(projeto => {
            const date = projeto['format-data'];
            const horas = parseFloat(projeto['horas']);
            if (dateMap[date]) {
                dateMap[date] += horas;
            } else {
                dateMap[date] = horas;
            }
        });
        
        const last30Days = getLast30Days();
        
        
        const labels = last30Days;
        const horas = last30Days.map(date => {
            return dateMap[date] || 0;
        });
        
        const ctx = document.getElementById('boxdetalhes').getContext('2d');
        const boxdetalhes = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: horas,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    pointRadius: 4, // Define o tamanho dos pontos
                    pointBackgroundColor: '#93ed78' // Define a cor do background dos pontos
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.2)' // Altera a cor dos ticks do eixo y
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Remove o texto do topo do gráfico
                    }
                },
                elements: {
                    line: {
                        cubicInterpolationMode: 'monotone' // Torna as linhas mais suavizadas e arredondadas
                    }
                }
            }
        });
    }
}
