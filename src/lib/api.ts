import axios from 'axios';

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL;
const SHIPPING_API_KEY = process.env.SHIPPING_API_KEY;

export async function getProducts() {
  try {
    const response = await axios.get(`${CMS_API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    // Add other product fields as necessary
}

export async function getProductDetails(id: string): Promise<Product> {
    try {
        const response = await axios.get<Product>(`${CMS_API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch product details');
    }
}

interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface ShippingRatesResponse {
    data: any; // Replace `any` with the actual type if known
}

export async function getShippingRates(weight: number, dimensions: Dimensions): Promise<ShippingRatesResponse> {
    try {
        const response = await axios.post<ShippingRatesResponse>('https://api.shippo.com/shipments', {
            weight,
            dimensions
        }, {
            headers: {
                'Authorization': `ShippoToken ${SHIPPING_API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch shipping rates');
    }
}