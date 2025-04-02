let browserInfo = getBrowserInfo();
let osInfo = getOsInfo();
let connectionInfo = getConnectionInfo();
let locationInfo = null;
let timeInfo = getTimeInfo();
let historyInfo = getHistoryInfo();
let performanceMetrics = getPerformanceMetrics();
let userTimeRetention = getUserTimeRetention();
function getUserAgent() {
    return navigator.userAgent;
}
function getBrowserInfo() {
    const userAgent = getUserAgent();
    const browserInfo = {
        name: '',
        version: '',
        languaje: navigator.language,
        mobile: false
    };
    if (/chrome|crios|crmo/i.test(userAgent)) {
        browserInfo.name = 'Chrome';
        browserInfo.version = userAgent.match(/(?:chrome|crios|crmo)[ \/]([\d.]+)/i)[1];
    }
    else if (/firefox|fxios/i.test(userAgent)) {
        browserInfo.name = 'Firefox';
        browserInfo.version = userAgent.match(/(?:firefox|fxios)[ \/]([\d.]+)/i)[1];
    }
    else if (/safari/i.test(userAgent)) {
        browserInfo.name = 'Safari';
        browserInfo.version = userAgent.match(/version[ \/]([\d.]+)/i)[1];
    }
    else if (/opr\//i.test(userAgent)) {
        browserInfo.name = 'Opera';
        browserInfo.version = userAgent.match(/opr\/([\d.]+)/i)[1];
    }
    else if (/edg/i.test(userAgent)) {
        browserInfo.name = 'Edge';
        browserInfo.version = userAgent.match(/edg[ \/]([\d.]+)/i)[1];
    }
    // Detect mobile devices
    if (/mobile|android|iphone|ipad|ipod/i.test(userAgent)) {
        browserInfo.mobile = true;
    }
    return browserInfo;
}
function getOsInfo() {
    const userAgent = getUserAgent();
    let OS = 'Unknown OS';
    // Detect OS
    if (/windows/i.test(userAgent)) {
        OS = 'Windows';
    }
    else if (/macintosh|mac os x/i.test(userAgent)) {
        OS = 'Mac OS X';
    }
    else if (/linux/i.test(userAgent)) {
        OS = 'Linux';
    }
    else if (/android/i.test(userAgent)) {
        OS = 'Android';
    }
    else if (/iphone|ipad|ipod/i.test(userAgent)) {
        OS = 'iOS';
    }
    return OS;
}
function getConnectionInfo() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const connectionType = {
        effectiveType: 'Unknown',
        type: 'Unknown',
        downlink: 0,
        rtt: 0
    };
    if (connection) {
        connectionType.effectiveType = connection.effectiveType || 'Unknown';
        connectionType.type = connection.type || 'Unknown';
        connectionType.downlink = connection.downlink || 0;
        connectionType.rtt = connection.rtt || 0;
    }
    return connectionType;
}
function getLocationInfo() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, (error) => {
                reject(error);
            });
        }
        else {
            reject(new Error('La geolocalización no está soportada en este navegador.'));
        }
    });
}
getLocationInfo()
    .then((location) => {
    locationInfo = location; // Asigna el resultado cuando esté disponible
    console.log("Información de ubicación:", locationInfo);
})
    .catch((error) => {
    console.error("Error al obtener la ubicación:", error.message);
});
function getTimeInfo() {
    const date = new Date();
    const timeData = {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    };
    return timeData;
}
function getHistoryInfo() {
    const historyInfo = {
        length: window.history.length,
        state: window.history.state
    };
    return historyInfo;
}
function getPerformanceMetrics() {
    const timing = window.performance.timing;
    const performanceData = {
        navigation: window.performance.getEntriesByType('navigation'),
        resource: window.performance.getEntriesByType('resource'),
        pageLoadTime: timing.loadEventEnd - timing.navigationStart, // Tiempo total de carga
        domContentLoadedTime: timing.domContentLoadedEventEnd - timing.navigationStart, // Tiempo hasta DOMContentLoaded
        redirectTime: timing.redirectEnd - timing.redirectStart, // Tiempo en redirecciones
        dnsLookupTime: timing.domainLookupEnd - timing.domainLookupStart, // Tiempo de búsqueda DNS
        tcpHandshakeTime: timing.connectEnd - timing.connectStart, // Tiempo de conexión TCP
        requestTime: timing.responseEnd - timing.requestStart, // Tiempo de solicitud HTTP
        responseTime: timing.responseEnd - timing.responseStart, // Tiempo de respuesta del servidor
    };
    return performanceData;
}
function getUserTimeRetention() {
    const startTime = window.performance.now(); // Tiempo en milisegundos desde que se cargó la página
    let timeSpent = 0; // Inicializa el tiempo de permanencia
    window.addEventListener('beforeunload', () => {
        timeSpent = window.performance.now() - startTime; // Tiempo total en milisegundos
    });
    return timeSpent / 1000; // Devuelve el tiempo en segundos
}
//# sourceMappingURL=user_info.js.map