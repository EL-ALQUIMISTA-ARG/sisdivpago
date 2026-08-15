document.addEventListener('DOMContentLoaded', () => {
    const consultantNameInput = document.getElementById('consultant-name');
    const representativeInput = document.getElementById('representative-input');
    const repChakraInput = document.getElementById('rep-chakra-input');
    const addRepresentativeButton = document.getElementById('add-representative-button');
    const representativesList = document.getElementById('representatives-list');
    const stellarCodeInput = document.getElementById('stellar-code-input');
    const codeChakraInput = document.getElementById('code-chakra-input');
    const addStellarCodeButton = document.getElementById('add-stellar-code-button');
    const stellarCodesList = document.getElementById('stellar-codes-list');

    const readButton = document.getElementById('read-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const clearButton = document.getElementById('clear-button');
    const exportPDFButton = document.getElementById('export-pdf-button');
    const resultsDisplay = document.getElementById('results-display');

    consultantNameInput.disabled = true;
    representativeInput.disabled = true;
    repChakraInput.disabled = true;
    stellarCodeInput.disabled = true;
    codeChakraInput.disabled = true;

    const chakrasData = {
        '1': { name: 'Chakra Raíz', color: 'var(--chakra-1)' },
        '2': { name: 'Chakra Sacro', color: 'var(--chakra-2)' },
        '3': { name: 'Chakra Plexo Solar', color: 'var(--chakra-3)' },
        '4': { name: 'Chakra Corazón', color: 'var(--chakra-4)' },
        '5': { name: 'Chakra Garganta', color: 'var(--chakra-5)' },
        '6': { name: 'Chakra Tercer Ojo', color: 'var(--chakra-6)' },
        '7': { name: 'Chakra Corona', color: 'var(--chakra-7)' }
    };

    let selectedRepresentatives = [];
    let selectedStellarCodes = [];
    let isShuffled = false; 
    const maxSelections = 99;
    let currentRepresentativesData = { ...originalRepresentativesData };
    let currentStellarCodesData = { ...originalStellarCodesData };

    function showStartButtons() {
        readButton.style.display = 'block';
        shuffleButton.style.display = 'block';
        clearButton.style.display = 'none';
        exportPDFButton.style.display = 'none';
    }

    function hideShuffleButton() {
        shuffleButton.style.display = 'none';
    }
    
    function showEndButtons() {
        readButton.style.display = 'none';
        shuffleButton.style.display = 'none';
        clearButton.style.display = 'block';
        exportPDFButton.style.display = 'block';
    }

    function getChakraColor(chakraNumber) {
        return chakrasData[chakraNumber]?.color || '#999';
    }

    function displayList(list, element) {
        element.innerHTML = '';
        if (list.length === 0) return;
        list.forEach(item => {
            const span = document.createElement('span');
            span.className = 'chakra-number';
            span.textContent = item.number;
            span.style.color = getChakraColor(item.chakra);
            element.appendChild(span);
        });
    }

    function shuffleData(dataObject) {
        const keys = Object.keys(dataObject);
        const values = Object.values(dataObject);
        const crypto = window.crypto || window.msCrypto;
        for (let i = values.length - 1; i > 0; i--) {
            const randomBuffer = new Uint32Array(1);
            crypto.getRandomValues(randomBuffer);
            const j = randomBuffer[0] % (i + 1);
            [values[i], values[j]] = [values[j], values[i]];
        }
        const shuffledData = {};
        keys.forEach((key, index) => {
            shuffledData[key] = values[index];
        });
        return shuffledData;
    }

    function displayResults() {
        const consultantName = consultantNameInput.value || 'Consultante Anónimo';
        const now = new Date();
        const dateStr = now.toLocaleDateString('es-ES');
        const timeStr = now.toLocaleTimeString('es-ES');
        
        let output = `<strong>Resultados de la Lectura:</strong><br>`;
        output += `Fecha: ${dateStr}<br>`;
        output += `Hora: ${timeStr}<br>`;
        output += `Consultante: ${consultantName}<br><br>`;
        
        const groupedByChakra = {};
        for (let i = 1; i <= 7; i++) {
            groupedByChakra[i] = { representatives: [], stellarCodes: [] };
        }

        selectedRepresentatives.forEach(rep => {
            const chakra = rep.chakra;
            if (groupedByChakra[chakra]) groupedByChakra[chakra].representatives.push(rep);
        });

        selectedStellarCodes.forEach(code => {
            const chakra = code.chakra;
            if (groupedByChakra[chakra]) groupedByChakra[chakra].stellarCodes.push(code);
        });

        for (let i = 1; i <= 7; i++) {
            const chakraGroup = groupedByChakra[i];
            if (chakraGroup.representatives.length > 0 || chakraGroup.stellarCodes.length > 0) {
                const chakraName = chakrasData[i]?.name || 'Desconocido';
                const chakraColor = getChakraColor(i);
                
                output += `<span style="color: ${chakraColor};"><strong>Chakra ${i} (${chakraName}):</strong></span><br><br>`;

                if (chakraGroup.representatives.length > 0) {
                    output += `<span style="color: #FF8C00;"><strong>Representantes Asociados:</strong></span><br>`;
                    chakraGroup.representatives.forEach(rep => {
                        const repData = currentRepresentativesData[rep.number] || 'Desconocido';
                        output += `  - ${rep.number} (${repData})<br>`;
                    });
                    output += `<br>`;
                }

                if (chakraGroup.stellarCodes.length > 0) {
                    output += `<span style="color: #0000FF;"><strong>Códigos Estelares:</strong></span><br>`;
                    chakraGroup.stellarCodes.forEach(code => {
                        const codeData = currentStellarCodesData[code.number] || null;
                        if (codeData) {
                            output += `<span style="color: #333333;">- <strong>${codeData.title}:</strong></span><br>`;
                            output += `<em>"${codeData.phrase}"</em><br>`;
                            output += `<span style="color: #008000;"><strong>Ante Frase:</strong></span> ${codeData.act}<br><br>`;
                        } else {
                            output += `  - Código no encontrado para el número ${code.number}<br><br>`;
                        }
                    });
                }
            }
        }
        
        resultsDisplay.innerHTML = output;
    }

    addRepresentativeButton.addEventListener('click', () => {
        if (!isShuffled) {
            document.getElementById('results-display').innerHTML = '<p style="text-align: center; color: red; font-weight: bold;">🛑 ERROR: Debes activar el **Nuevo Orden Divino** antes de cargar representantes.</p>';
            return;
        }
        const repNumber = representativeInput.value.trim();
        let repChakra = repChakraInput.value.trim();
        if (!repChakra) repChakra = '1';
        if (!repNumber) { alert('Ingresa un número de representante.'); return; }
        if (!originalRepresentativesData[repNumber]) { alert('Número de representante no válido.'); return; }
        if (!chakrasData[repChakra]) { alert('Chakra no válido (1-7).'); return; }
        if (selectedRepresentatives.length >= maxSelections) { alert('Límite alcanzado.'); return; }
        selectedRepresentatives.push({ number: repNumber, chakra: repChakra });
        displayList(selectedRepresentatives, representativesList);
        representativeInput.value = '';
        repChakraInput.value = '';
        hideShuffleButton();
    });

    addStellarCodeButton.addEventListener('click', () => {
        const codeNumber = stellarCodeInput.value.trim();
        let codeChakra = codeChakraInput.value.trim();
        if (!codeChakra) codeChakra = '1';
        if (!codeNumber) { alert('Ingresa un número de código.'); return; }
        if (!originalStellarCodesData[codeNumber]) { alert('Código no válido.'); return; }
        if (!chakrasData[codeChakra]) { alert('Chakra no válido (1-7).'); return; }
        if (selectedStellarCodes.length >= maxSelections) { alert('Límite alcanzado.'); return; }
        selectedStellarCodes.push({ number: codeNumber, chakra: codeChakra });
        displayList(selectedStellarCodes, stellarCodesList);
        stellarCodeInput.value = '';
        codeChakraInput.value = '';
        hideShuffleButton();
    });
    
    readButton.addEventListener('click', () => {
        if (!isShuffled) {
            document.getElementById('results-display').innerHTML = '<p style="text-align: center; color: red; font-weight: bold;">🛑 ERROR: Debes activar el **Nuevo Orden Divino** antes de realizar una Lectura.</p>';
            return;
        }
        if (selectedRepresentatives.length === 0 && selectedStellarCodes.length === 0) {
             alert('Agrega representantes o códigos.');
             return;
        }
        displayResults();
        showEndButtons();
    });

    shuffleButton.addEventListener('click', () => {
        currentRepresentativesData = shuffleData(originalRepresentativesData);
        currentStellarCodesData = shuffleData(originalStellarCodesData);
        selectedRepresentatives = [];
        selectedStellarCodes = [];
        representativesList.innerHTML = '';
        stellarCodesList.innerHTML = '';
        consultantNameInput.value = ''; 
        representativeInput.value = ''; 
        repChakraInput.value = ''; 
        stellarCodeInput.value = ''; 
        codeChakraInput.value = ''; 
        consultantNameInput.disabled = false;
        representativeInput.disabled = false;
        repChakraInput.disabled = false;
        stellarCodeInput.disabled = false;
        codeChakraInput.disabled = false;
        addRepresentativeButton.disabled = false;
        addStellarCodeButton.disabled = false;
        resultsDisplay.innerHTML = '<p style="text-align: center; color: #8A2BE2; font-weight: bold;">✅ Nuevo Orden Divino Activado. ¡Comienza!</p>';
        showStartButtons(); 
        isShuffled = true; 
    });
    
    clearButton.addEventListener('click', () => {
        consultantNameInput.value = '';
        representativeInput.value = '';
        repChakraInput.value = '';
        stellarCodeInput.value = '';
        codeChakraInput.value = '';
        selectedRepresentatives = [];
        selectedStellarCodes = [];
        representativesList.innerHTML = '';
        stellarCodesList.innerHTML = '';
        resultsDisplay.innerHTML = '<p style="text-align: center;">Agrega tus selecciones y haz clic en "Lectura".</p>';
        showStartButtons();
    });

    exportPDFButton.addEventListener('click', () => {
        const consultantName = consultantNameInput.value || 'Consultante Anónimo';
        let cleanContent = resultsDisplay.innerHTML;
        cleanContent = cleanContent.replace(/-\s*\d+/g, "");
        cleanContent = cleanContent.replace(/^\s*\d+[\.\)\-]\s*/gm, ""); 
        cleanContent = cleanContent.replace(/\(?\b\d{6,}\b\)?/g, "");
        cleanContent = cleanContent.replace(/\s\s+/g, ' ');

        const logoURL = "https://cdn.jsdelivr.net/gh/EL-ALQUIMISTA-ARG/sisdivpago@main/ziz.png";
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>Lectura Sistema Divino - ${consultantName}</title>
                <style>
                    @page { margin-top: 80px; margin-bottom: 80px; }
                    body { 
                        font-family: 'Segoe UI', Arial, sans-serif; 
                        padding: 60px; 
                        position: relative; 
                        -webkit-print-color-adjust: exact; 
                        print-color-adjust: exact; 
                    }
                    .header-text { padding-right: 230px; display: block; }
                    .header-text h1 { color: #8A2BE2; margin: 0; font-size: 24px; word-wrap: break-word; }
                    .header-text h2 { color: #333; margin: 5px 0 0 0; font-size: 16px; border: none; line-height: 1.3; word-wrap: break-word; }
                    .logo-right { 
                        position: absolute;
                        width: 160px; 
                        height: 160px; 
                        object-fit: contain; 
                        top: 80px;    
                        right: 80px;  
                    }
                    .content { margin-top: 50px; line-height: 1.6; font-size: 14px; }
                    .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 15px; }
                    @media print {
                        body { padding: 60px; }
                        h1 { color: #8A2BE2 !important; }
                    }
                </style>
            </head>
            <body>
                <img src="${logoURL}" class="logo-right" alt="Logo">
                <div class="header-text">
                    <h1>Sistema Divino</h1>
                    <h2>Consultante: ${consultantName}</h2>
                </div>
                <div class="content">${cleanContent}</div>
                <div class="footer" style="font-size:13px; text-align:center; font-weight:normal;">
                    Este sistema es desarrollado por El.Alquimista.Arg® 🔮
                    <br>
                    <a href="https://www.alquimiasdelavida.com/una-energia-que-limpia" target="_blank" style="color:#0000EE; text-decoration:underline; font-weight:normal;">
                        "Una energía que limpia, un propósito que sana"
                    </a>
                    <br>
                    Contacto:
                    <a href="https://www.alquimiasdelavida.com" target="_blank" style="color:#0000EE; text-decoration:underline; font-weight:normal;">
                        www.alquimiasdelavida.com
                    </a>
                    <br>
                    Prohibida su reproducción total o parcial del sistema.
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.addEventListener('load', () => {
            setTimeout(() => { printWindow.print(); }, 1000); 
        });
    });
});
