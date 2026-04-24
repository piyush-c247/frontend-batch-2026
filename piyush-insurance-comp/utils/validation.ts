export const patterns = {
  companyName: /^[a-zA-Z0-9 .,'()/-]+$/,
  locationName: /^[a-zA-Z0-9 .(),]+$/,
  address: /^[a-zA-Z0-9\s,.\-/#]+$/,
  city: /^[a-zA-Z\s-]+$/,
  alphanumeric: /^[A-Z0-9]+$/,
  zip: /^[A-Za-z0-9\s-]{3,10}$/,
};

export const validations = {
  company_name: {
    required: "Company name is required",
    minLength: {
      value: 2,
      message: "Company name must be at least 2 characters",
    },
    maxLength: {
      value: 100,
      message: "Company name must be less than 100 characters",
    },
    pattern: {
      value: patterns.companyName,
      message: "Invalid company name",
    },
  },

  location_name: {
    required: "Location name is required",
    minLength: {
      value: 2,
      message: "Location name must be at least 2 characters",
    },
    maxLength: {
      value: 100,
      message: "Location name must be less than 100 characters",
    },
    pattern: {
      value: patterns.locationName,
      message: "Invalid location name",
    },
  },

  address_1: {
    required: "Address is required",
    minLength: { value: 5, message: "Address must be at least 5 characters" },
    maxLength: {
      value: 200,
      message: "Address must be less than 200 characters",
    },
    pattern: {
      value: patterns.address,
      message: "Invalid address",
    },
  },

  city: {
    required: "City is required",
    minLength: { value: 2, message: "City must be at least 2 characters" },
    maxLength: { value: 50, message: "City must be less than 50 characters" },
    pattern: {
      value: patterns.city,
      message: "Invalid city",
    },
  },

  postal_code: {
    required: "Postal code is required",
    pattern: {
      value: patterns.zip,
      message: "Invalid postal code",
    },
  },

  am_best_code: {
    minLength: {
      value: 5,
      message: "AM Best code must be at least 5 characters",
    },
    maxLength: {
      value: 10,
      message: "AM Best code must be less than 10 characters",
    },
    pattern: {
      value: patterns.alphanumeric,
      message: "Invalid AM Best code",
    },
  },

  ibc_code: {
    minLength: { value: 3, message: "IBC code must be at least 3 characters" },
    maxLength: {
      value: 15,
      message: "IBC code must be less than 15 characters",
    },
    pattern: {
      value: patterns.alphanumeric,
      message: "Invalid IBC code",
    },
  },

  fein_code: {
    minLength: { value: 8, message: "FEIN must be at least 8 characters" },
    maxLength: { value: 21, message: "FEIN must be less than 21 characters" },
    pattern: {
      value: patterns.alphanumeric,
      message: "Invalid FEIN code",
    },
  },

  naic_code: {
    pattern: {
      value: /^[0-9]{5}$/,
      message: "NAIC must be exactly 5 digits",
    },
  },

  aiin_code: {
    pattern: {
      value: /^[0-9]{5}$/,
      message: "AIIN must be exactly 5 digits",
    },
  },

  am_best_rating: {
    required: "AM Best rating is required",
  },
};
