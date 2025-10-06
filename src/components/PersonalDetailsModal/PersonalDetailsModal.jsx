import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  IconButton,
  Paper,
  Avatar,
  Divider,
  InputAdornment,
  Fade,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  LocationCity as LocationIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { handlePayment } from "../../../utils";
import { useSelector } from "react-redux";

const PersonalDetailsModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItemsInStore = useSelector((state) => state.cart.cartItems);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Calculate delivery charge
  const DELIVERY_CHARGE = 99;
  const FREE_DELIVERY_THRESHOLD = 799;
  const deliveryCharge = totalPrice >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  const finalTotal = totalPrice + deliveryCharge;

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Customer Details:", data);
    handlePayment(finalTotal, totalPrice, deliveryCharge, cartItemsInStore, data);
  };

  const handleCloseModal = () => {
    reset();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="lg"
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: theme.shadows[24],
          overflow: "hidden",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Custom Header */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          position: "relative",
          p: 3,
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.1),
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            sx={{
              bgcolor: alpha(theme.palette.common.white, 0.2),
              width: 56,
              height: 56,
            }}
          >
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Personal Details
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Please provide your information to continue
            </Typography>
          </Box>
        </Box>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent
          sx={{
            p: 4,
            backgroundColor: theme.palette.grey[50],
            maxHeight: "calc(90vh - 200px)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: theme.palette.grey[100],
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: theme.palette.grey[300],
              borderRadius: "4px",
              "&:hover": {
                background: theme.palette.grey[400],
              },
            },
          }}
        >
          <Grid container spacing={3}>
            {/* Personal Information Section */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "white",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <PersonIcon color="primary" />
                  <Typography variant="h6" color="primary" fontWeight="600">
                    Personal Information
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      {...register("firstName", {
                        required: "First Name is required",
                        minLength: {
                          value: 2,
                          message: "First name must be at least 2 characters",
                        },
                      })}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      {...register("lastName", {
                        required: "Last Name is required",
                        minLength: {
                          value: 2,
                          message: "Last name must be at least 2 characters",
                        },
                      })}
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Contact Information Section */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "white",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <EmailIcon color="primary" />
                  <Typography variant="h6" color="primary" fontWeight="600">
                    Contact Information
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Address Information Section */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "white",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <LocationIcon color="primary" />
                  <Typography variant="h6" color="primary" fontWeight="600">
                    Address Information
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      multiline
                      rows={3}
                      variant="outlined"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      error={!!errors.address}
                      helperText={errors.address?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignSelf: "flex-start", mt: 1 }}
                          >
                            <HomeIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      {...register("city", { required: "City is required" })}
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="State"
                      variant="outlined"
                      {...register("state", { required: "State is required" })}
                      error={!!errors.state}
                      helperText={errors.state?.message}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Zip Code"
                      variant="outlined"
                      {...register("zip", {
                        required: "Zip Code is required",
                        pattern: {
                          value: /^[0-9]{5,6}$/,
                          message: "Enter a valid Zip Code",
                        },
                      })}
                      error={!!errors.zip}
                      helperText={errors.zip?.message}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Country"
                      variant="outlined"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      error={!!errors.country}
                      helperText={errors.country?.message}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>

        {/* Actions */}
        <DialogActions
          sx={{
            p: 3,
            backgroundColor: "white",
            borderTop: `1px solid ${theme.palette.divider}`,
            gap: 2,
          }}
        >
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            size="large"
            sx={{
              minWidth: 120,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            startIcon={isSubmitting ? null : <SaveIcon />}
            sx={{
              minWidth: 120,
              textTransform: "none",
              fontWeight: 600,
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              "&:hover": {
                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
              },
            }}
          >
            {isSubmitting ? "Saving..." : "Proceed to Pay"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PersonalDetailsModal;
