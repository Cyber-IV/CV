export async function getHTMLlayout(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener el HTML: ${response.statusText}`);
        }
        return await response.text();
    }
    catch (error) {
        console.error('Error al obtener el HTML:', error);
        return null;
    }
}
function isMobileDevice() {
    return /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}
export const deviceType = isMobileDevice();
//# sourceMappingURL=utils.js.map