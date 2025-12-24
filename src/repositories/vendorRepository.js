import axios from "axios";
import { VENDOR_ENDPOINTS } from "../constants/api-routes";
import { mapMessage } from "../constants/message-mapper";

export const vendorRepository = {
  // Get all vendors
  getAll: async () => {
    try {
      const response = await axios.get(VENDOR_ENDPOINTS.GET_ALL);
      return {
        success: true,
        data: response.data,
        message: mapMessage("SUCCESS"),
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: mapMessage("SOMETHING_WENT_WRONG"),
        error: error.message,
      };
    }
  },

  // Get vendor by ID
  getById: async (id) => {
    try {
      const response = await axios.get(VENDOR_ENDPOINTS.GET_BY_ID(id));
      return {
        success: true,
        data: response.data,
        message: mapMessage("SUCCESS"),
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: mapMessage("VENDOR_NOT_FOUND"),
        error: error.message,
      };
    }
  },

  // Create vendor
  create: async (vendorData) => {
    try {
      const response = await axios.post(VENDOR_ENDPOINTS.CREATE, vendorData);
      return {
        success: true,
        data: response.data,
        message: mapMessage("VENDOR_CREATED"),
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: mapMessage("INVALID_INPUT"),
        error: error.message,
      };
    }
  },

  // Update vendor
  update: async (id, vendorData) => {
    try {
      const response = await axios.put(
        VENDOR_ENDPOINTS.UPDATE(id),
        vendorData
      );
      return {
        success: true,
        data: response.data,
        message: mapMessage("VENDOR_UPDATED"),
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: mapMessage("VENDOR_NOT_FOUND"),
        error: error.message,
      };
    }
  },

  // Delete vendor
  delete: async (id) => {
    try {
      await axios.delete(VENDOR_ENDPOINTS.DELETE(id));
      return {
        success: true,
        data: null,
        message: mapMessage("VENDOR_DELETED"),
        error: null,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: mapMessage("VENDOR_NOT_FOUND"),
        error: error.message,
      };
    }
  },
};
