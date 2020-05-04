require("dotenv").config();

module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
    NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
