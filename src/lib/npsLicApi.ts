import axios from 'axios';

const NPS_LIC_API_URL = process.env.NPS_LIC_API_URL;
const NPS_LIC_API_KEY = process.env.NPS_LIC_API_KEY;

const apiClient = axios.create({
  baseURL: NPS_LIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': NPS_LIC_API_KEY,
  },
});

export async function fetchVehicleDetails(identifier: string) {
  try {
    const response = await apiClient.post('/api/v1/vehicle/details', {
      identifier,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle details:', error);
    throw error;
  }
}

export async function fetchLicenseDetails(licenseNumber: string) {
  try {
    const response = await apiClient.post('/api/v1/license/details', {
      licenseNumber,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching license details:', error);
    throw error;
  }
}

export async function fetchVehicleHistory(vin: string) {
  try {
    const response = await apiClient.post('/api/v1/vehicle/history', { vin });
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle history:', error);
    throw error;
  }
}
