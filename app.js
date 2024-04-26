//DOMContentLoaded garante que o script será executado apenas após le todo o HTML
document.addEventListener("DOMContentLoaded", function() {
    //mudar tema da aplicação
    const themeToggleButton = document.getElementById('btn-theme');
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark')
    });
    // Captura o botão e os inputs pelo ID
    const calcularBtn = document.getElementById('btnCalcule');
    const precoCombustivelInput = document.getElementById('fuelprice');
    const consumoPorKmInput = document.getElementById('useForKm');
    const distanciaInput = document.getElementById('distance');
    const resultadoDiv = document.getElementById('texto');

    // Adiciona um evento de clique ao botão
    calcularBtn.addEventListener('click', function() {
        // Limpa o campo de resultado antes de cada cálculo
        resultadoDiv.textContent = '';
        // Recupera os valores dos inputs e converte para número
        const precoCombustivel = parseFloat(precoCombustivelInput.value);
        const consumoPorKm = parseFloat(consumoPorKmInput.value);
        const distancia = parseFloat(distanciaInput.value);

        // Valida os inputs para garantir que são números válidos
        if (isNaN(precoCombustivel) || isNaN(consumoPorKm) || isNaN(distancia)) {
            resultadoDiv.textContent = 'Por favor, insira valores numéricos válidos em todos os campos.';
            return;
        }

        // Calcula o custo total do combustível
        const custoTotal = (distancia / consumoPorKm) * precoCombustivel;
        
        // Mostra o resultado no div 'texto'
        resultadoDiv.textContent = `O custo total de combustível para sua viagem será de R$ ${custoTotal.toFixed(2)} para uma distância de ${distancia} Km.`;
    });
});
