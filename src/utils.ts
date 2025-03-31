export async function getHTMLlayout(url: string): Promise<string | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener el HTML: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error al obtener el HTML:', error);
      return null;
    }
}