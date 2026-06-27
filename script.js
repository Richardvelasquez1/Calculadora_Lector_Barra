:root {
    --bg-color: #f0f4f8;
    --calc-bg: #ffffff;
    --text-main: #2d3748;
    --text-muted: #718096;
    --primary: #4299e1;
    --primary-hover: #3182ce;
    --danger: #fc8181;
    --key-bg: #edf2f7;
    --key-active: #e2e8f0;
    --border-radius: 12px;
}

* { box-sizing: border-box; font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; }

body {
    background-color: var(--bg-color);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.calculator {
    background-color: var(--calc-bg);
    width: 100%;
    max-width: 400px;
    height: 100vh;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
}

/* Header & Autocomplete */
.header {
    display: flex;
    padding: 15px;
    gap: 10px;
    background-color: var(--calc-bg);
    border-bottom: 1px solid var(--key-bg);
    z-index: 10;
}

.autocomplete {
    position: relative;
    flex-grow: 1;
}

.autocomplete input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
}

.autocomplete-items {
    position: absolute;
    border: 1px solid #cbd5e0;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #edf2f7;
}

.autocomplete-items div:hover { background-color: #ebf8ff; }

#btnExport {
    padding: 10px 15px;
    background-color: #48bb78;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}

/* Screen */
.screen {
    padding: 20px 15px;
    text-align: right;
    background-color: var(--calc-bg);
}

#operationDisplay {
    color: var(--text-muted);
    font-size: 14px;
    min-height: 20px;
    margin-bottom: 5px;
}

#priceDisplay {
    color: var(--text-main);
    font-size: 42px;
    font-weight: bold;
    overflow-x: auto;
}

/* Quantity Section */
.quantity-section {
    padding: 10px 15px;
    position: relative;
    border-bottom: 1px solid var(--key-bg);
}

#btnToggleQuantity {
    background-color: var(--key-bg);
    border: 1px solid #cbd5e0;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    text-align: left;
}

.mini-pad {
    position: absolute;
    top: 55px;
    left: 15px;
    right: 15px;
    background: white;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.mini-pad-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
}

.mini-pad button {
    padding: 15px 0;
    border: none;
    border-radius: 4px;
    background: var(--key-bg);
    font-size: 16px;
    cursor: pointer;
}

.mini-pad-actions {
    display: flex;
    gap: 5px;
}
.mini-pad-actions button { flex: 1; background: var(--text-muted); color: white;}

/* Main Pad */
.main-pad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
    padding: 15px;
    flex-grow: 1;
    background-color: var(--bg-color);
}

.main-pad button {
    border: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    background-color: var(--calc-bg);
    color: var(--text-main);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: background 0.1s;
}

.main-pad button:active { background-color: var(--key-active); }

.action-btn { background-color: #edf2f7 !important; color: #4a5568 !important; font-size: 16px !important; }
.action-btn.danger { color: var(--danger) !important; }
.action-btn#btnSave { font-size: 14px !important; }

.margin-key { background-color: #ebf8ff !important; color: var(--primary) !important; }
.margin-key.active { background-color: var(--primary) !important; color: white !important; }

.iva-key { background-color: #fefcbf !important; color: #d69e2e !important; }
.iva-key.active { background-color: #d69e2e !important; color: white !important; }

.hidden { display: none !important; }

/* Scan Button */
#btnScan {
    padding: 10px 15px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

#btnScan:active {
    transform: scale(0.95);
}

#btnScan:hover {
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Scanner Modal */
.scanner-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.2s ease;
}

.scanner-modal.hidden {
    display: none !important;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.scanner-modal-content {
    background: white;
    border-radius: 16px;
    width: 90%;
    max-width: 400px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.scanner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.scanner-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
}

.scanner-header button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
}

.scanner-header button:hover {
    background: rgba(255, 255, 255, 0.35);
}

#reader {
    width: 100%;
    min-height: 250px;
    background: #1a1a2e;
}

#reader video {
    border-radius: 0 !important;
}

.scan-result {
    padding: 12px 20px;
    font-size: 14px;
    color: var(--text-muted);
    text-align: center;
    min-height: 20px;
}

.scan-result.found {
    color: #38a169;
    font-weight: 600;
}

.scan-result.not-found {
    color: #e53e3e;
}

.scan-result.searching {
    color: var(--primary);
}

.manual-barcode {
    display: flex;
    gap: 8px;
    padding: 12px 20px 20px;
}

.manual-barcode input {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
}

.manual-barcode input:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
}

.manual-barcode button {
    padding: 10px 14px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: transform 0.15s;
}

.manual-barcode button:active {
    transform: scale(0.95);
}
/* ============================================================
   BARCODE INDICATOR — muestra el código vinculado al producto
   ============================================================ */
.barcode-indicator {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    font-size: 11px;
    color: #667eea;
    background: #ebf4ff;
    border: 1px solid #bee3f8;
    border-radius: 20px;
    padding: 3px 10px;
    font-family: monospace;
    letter-spacing: 0.5px;
    float: right;
}

/* ============================================================
   SCANNER MODAL — mejoras visuales
   ============================================================ */

/* Header con ícono */
.scanner-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
}
.scanner-header-icon {
    font-size: 20px;
    opacity: 0.9;
}

/* Wrapper del lector con overlay encima */
.reader-wrapper {
    position: relative;
    width: 100%;
    background: #0d0d1a;
    overflow: hidden;
    min-height: 240px;
}

#reader {
    width: 100%;
    min-height: 240px;
    background: #0d0d1a;
}

#reader video {
    border-radius: 0 !important;
    object-fit: cover;
}

/* Ocultar UI por defecto de html5-qrcode */
#reader > img,
#reader > div > select,
#reader > div > label {
    display: none !important;
}

/* Overlay con mira de escaneo */
.scan-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.45) 0%,
        transparent 30%,
        transparent 70%,
        rgba(0,0,0,0.45) 100%
    );
}

.scan-frame {
    position: relative;
    width: 240px;
    height: 100px;
}

/* Esquinas de la mira */
.corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: #a78bfa;
    border-style: solid;
}
.corner.tl { top: 0; left: 0;  border-width: 3px 0 0 3px; border-radius: 4px 0 0 0; }
.corner.tr { top: 0; right: 0; border-width: 3px 3px 0 0; border-radius: 0 4px 0 0; }
.corner.bl { bottom: 0; left: 0;  border-width: 0 0 3px 3px; border-radius: 0 0 0 4px; }
.corner.br { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-radius: 0 0 4px 0; }

/* Línea de escaneo animada */
.scan-line {
    position: absolute;
    left: 6px;
    right: 6px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #a78bfa, #667eea, #a78bfa, transparent);
    border-radius: 2px;
    animation: scanMove 1.8s ease-in-out infinite;
    box-shadow: 0 0 8px rgba(167,139,250,0.7);
}

@keyframes scanMove {
    0%   { top: 8px;  opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { top: calc(100% - 10px); opacity: 0; }
}

/* Footer con info de fuentes */
.scanner-footer {
    padding: 8px 20px 14px;
    text-align: center;
    font-size: 10px;
    color: #a0aec0;
    letter-spacing: 0.2px;
}
