const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error('Error al traer productos:', error);
    return [];
  }
};
