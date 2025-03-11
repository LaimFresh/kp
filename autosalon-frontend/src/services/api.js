import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Адрес вашего бэкенда
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Методы для работы с автомобилями (оставляем без изменений)
export const carApi = {
  getCars() {
    return apiClient.get('/cars');
  },
  getCar(id) {
    return apiClient.get(`/cars/${id}`);
  },
  createCar(car) {
    return apiClient.post('/cars', car);
  },
  updateCar(id, car) {
    return apiClient.put(`/cars/${id}`, car);
  },
  deleteCar(id) {
    return apiClient.delete(`/cars/${id}`);
  }
};

// Методы для работы с клиентами
export const customerApi = {
  getAllCustomers() {
    return apiClient.get('/customers'); // Получение всех клиентов
  },
  getCustomerById(id) {
    return apiClient.get(`/customers/${id}`); // Получение клиента по ID
  },
  createCustomer(customer) {
    return apiClient.post('/customers', customer); // Создание нового клиента
  },
  updateCustomer(id, customer) {
    return apiClient.put(`/customers/${id}`, customer); // Обновление клиента
  },
  deleteCustomer(id) {
    return apiClient.delete(`/customers/${id}`); // Удаление клиента
  }
};