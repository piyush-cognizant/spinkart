import axios from "axios";
import { ANALYTICS_ENDPOINTS } from "../constants/api-routes";
import { mapMessage } from "../constants/message-mapper";

export const analyticsRepository = {
  getDashboard: async () => {
    try {
      const response = await axios.get(ANALYTICS_ENDPOINTS.GET_DASHBOARD);
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

  getMetrics: async () => {
    try {
      const response = await axios.get(ANALYTICS_ENDPOINTS.GET_METRICS);
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
};
