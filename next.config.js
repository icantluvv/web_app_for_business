const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    domains: ["storage.googleapis.com"]
  }
});
