// === CUENTA REGRESIVA ===
// Cambia esta fecha por la de tu evento
const FECHA_EVENTO = new Date('2025-04-12T19:00:00');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = FECHA_EVENTO - ahora;

    if (diferencia <= 0) {
        document.getElementById('countdown').innerHTML =
            '<p style="color: #f0a5d3; font-size: 1.1rem;">🎉 ¡Hoy es el gran día!</p>';
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segs = Math.floor((diferencia / 1000) % 60);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segs).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);