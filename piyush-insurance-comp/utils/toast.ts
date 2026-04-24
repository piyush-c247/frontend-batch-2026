import { toast } from "react-toastify";

export const toastSuccess = {
  companyCreated: () =>
    toast.success("Insurance company created successfully."),
  companyUpdated: () =>
    toast.success("Insurance company updated successfully."),
  companyDeleted: () =>
    toast.success("Insurance company deleted successfully."),
};

export const toastError = {
  companyCreate: () =>
    toast.error("Failed to create company. Please try again."),
  companyUpdate: () =>
    toast.error("Failed to update company. Please try again."),
  companyDelete: () =>
    toast.error("Failed to delete company. Please try again."),
};
