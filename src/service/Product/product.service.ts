import axios from "axios"

export const fetchProduct = async (
    page:number,
) => {
    const url = `http://localhost:3006/api/products?page=${page}`; 
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (e) {
      console.error("Error fetching products:", e);
      return null; 
    }
}

export default { fetchProduct }