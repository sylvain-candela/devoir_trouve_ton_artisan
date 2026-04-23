const API_URL = 'http://localhost:3000/api';

export const getCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error('Erreur 404 sur les catégories');
    return await response.json();
};

export const getArtisans = async () => {
    try {
        const response = await fetch(`${API_URL}/artisans`);
        if (!response.ok) throw new Error('Erreur réseau lors de la récupération des artisans');
        return await response.json();
    } catch (error) {
        console.error("API Error (getArtisans):", error);
        return [];
    }
};

export const getArtisanById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/artisans/${id}`);
        if (!response.ok) throw new Error('Erreur lors de la récupération de l\'artisan');
        return await response.json();
    } catch (error) {
        console.error("API Error (getArtisanById):", error);
        return null;
    }
};


export const getArtisansByCategory = async (id_categorie) => {
    try {
        const response = await fetch(`${API_URL}/artisans/category/${id_categorie}`);
        if (!response.ok) throw new Error('Erreur lors du filtrage');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Error (getArtisansByCategory):", error);
        return [];
    }
};

export const getTopArtisans = async () => {
    try {
        const response = await fetch(`${API_URL}/artisans/top`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des tops');
        return await response.json();
    } catch (error) {
        console.error("API Error (getTopArtisans):", error);
        return [];
    }
};

export const getSpecialities = async () => {
    const response = await fetch(`${API_URL}/specialites`);
    return await response.json();
};