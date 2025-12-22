import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
} from "@mui/material";
import { analyticsRepository } from "../repositories/analyticsRepository";

function AnalyticsPage() {
  const [dashboard, setDashboard] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dashboardResponse = await analyticsRepository.getDashboard();
      const metricsResponse = await analyticsRepository.getMetrics();

      if (dashboardResponse.success) {
        setDashboard(dashboardResponse.data);
      } else {
        setError(dashboardResponse.message);
      }

      if (metricsResponse.success) {
        setMetrics(metricsResponse.data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>Loading analytics...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <h1>Analytics & Reports</h1>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Dashboard Summary */}
      {dashboard && (
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total Orders
                </Typography>
                <Typography variant="h5">
                  {dashboard.totalOrders || 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Pending Orders
                </Typography>
                <Typography variant="h5" sx={{ color: "warning.main" }}>
                  {dashboard.pendingOrders || 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Active Vendors
                </Typography>
                <Typography variant="h5" sx={{ color: "success.main" }}>
                  {dashboard.activeVendors || 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  In Transit Shipments
                </Typography>
                <Typography variant="h5" sx={{ color: "info.main" }}>
                  {dashboard.inTransitShipments || 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Metrics Section */}
      {metrics && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Revenue Summary
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Total Revenue</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    ${metrics.totalRevenue?.toFixed(2) || "0.00"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Average Order Value</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    ${metrics.avgOrderValue?.toFixed(2) || "0.00"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Total Purchases</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    ${metrics.totalPurchases?.toFixed(2) || "0.00"}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Operational Metrics
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Total Inventory Items</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {metrics.totalInventoryItems || 0}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Low Stock Items</Typography>
                  <Typography sx={{ fontWeight: "bold", color: "warning.main" }}>
                    {metrics.lowStockItems || 0}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Total Shipments</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {metrics.totalShipments || 0}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Performing Vendors
              </Typography>
              <Box sx={{ mt: 2 }}>
                {metrics.topVendors && metrics.topVendors.length > 0 ? (
                  metrics.topVendors.map((vendor, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        pb: 1,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography>{vendor.name}</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {vendor.orders || 0} orders - ${vendor.totalValue?.toFixed(2) || "0.00"}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography color="textSecondary">No vendor data available</Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default AnalyticsPage;
