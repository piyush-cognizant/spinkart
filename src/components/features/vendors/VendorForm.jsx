import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";

const VendorForm = ({ vendor, onSave, onCancel }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: vendor?.name || "",
      email: vendor?.email || "",
      phone: vendor?.phone || "",
      address: vendor?.address || "",
      category: vendor?.category || "Logistics",
      rating: vendor?.rating || 4.5,
      status: vendor?.status || "active",
    },
  });

  useEffect(() => {
    if (vendor) {
      reset({
        name: vendor.name,
        email: vendor.email,
        phone: vendor.phone,
        address: vendor.address,
        category: vendor.category,
        rating: vendor.rating,
        status: vendor.status,
      });
    }
  }, [vendor, reset]);

  const handleFormSubmit = (formData) => {
    onSave(formData);
  };

  return (
    <>
      <DialogTitle>{vendor ? "Edit Vendor" : "Add New Vendor"}</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Vendor Name"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      type="email"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: "Address is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      multiline
                      rows={2}
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select {...field} label="Category">
                        <MenuItem value="Logistics">Logistics</MenuItem>
                        <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                        <MenuItem value="Distribution">Distribution</MenuItem>
                        <MenuItem value="Wholesale">Wholesale</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select {...field} label="Status">
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                        <MenuItem value="suspended">Suspended</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Rating (0-5)"
                      type="number"
                      inputProps={{ min: 0, max: 5, step: 0.1 }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit(handleFormSubmit)}
          color="primary"
        >
          {vendor ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </>
  );
};

export default VendorForm;
