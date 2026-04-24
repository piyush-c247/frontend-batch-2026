export const IMAGE_UPLOAD_CONSTANTS = {
  VALIDATION: {
    ALLOWED_TYPES: ["image/png", "image/jpeg"],
    MAX_SIZE_BYTES: 5 * 1024 * 1024,
    TYPE_ERROR: "Invalid file type. Only PNG and JPG are allowed.",
    SIZE_ERROR: "File size exceeds 5MB limit.",
  },
  UI: {
    BROWSE_BTN: "Browse files",
    DRAG_TEXT: "Drag your file here",
    OR_TEXT: "Or",
    MAX_SIZE_LABEL: "Maximum file size: 5MB",
  },
};
