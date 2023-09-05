export function convertirTiempo(payload) {
    const fechaComanda = new Date(payload);
    const tiempoTranscurrido = (new Date() - fechaComanda) / 1000;
    const tiempoTranscurridoFormateado = `${Math.floor(tiempoTranscurrido / 3600).toString().padStart(2, '0')}:${Math.floor((tiempoTranscurrido % 3600) / 60).toString().padStart(2, '0')}`;
      return tiempoTranscurridoFormateado
  }