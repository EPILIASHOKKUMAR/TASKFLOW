
import axios from "axios";
import { Capacitor } from "@capacitor/core";

// Automatically select API URL
const API_URL = Capacitor.isNativePlatform()
  ? "http://10.0.2.2:8080/api/tasks"
  : "http://localhost:8080/api/tasks";

const API = axios.create({
  baseURL: API_URL
});

// Get all tasks
export const getTasks = async () => {
  const response = await API.get("");
  return response.data;
};

// Create task
export const createTask = async (task) => {
  const response = await API.post("", task);
  return response.data;
};

// Update task
export const updateTask = async (id, task) => {
  const response = await API.put(`/${id}`, task);
  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  await API.delete(`/${id}`);
};