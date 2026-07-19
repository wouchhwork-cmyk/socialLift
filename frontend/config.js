window.WOUCHH_CONFIG = {
  /* ---------- Company ---------- */
  COMPANY_NAME: "Wouchh",
  CONTACT_EMAIL: "support@wouchh.com",

  /* ---------- Facebook / Meta ---------- */
  FB_APP_ID: "1174274799094721",
  BACKEND_BASE_URL: (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.endsWith(".ngrok-free.dev") ||
    window.location.hostname.endsWith(".ngrok.io")
  )
    ? (window.location.port === "8080" || window.location.hostname.includes("ngrok")
        ? window.location.origin
        : "http://localhost:8080")
    : "https://sociallift-backend-production.up.railway.app",
  GRAPH_API_VERSION: "v25.0",
  FB_SCOPES: [
    "public_profile",
    "pages_show_list",
    "pages_read_engagement",
    "instagram_basic",
    "instagram_manage_comments",
    "instagram_manage_messages",
  ],

  /* ---------- TikTok ---------- */
  TIKTOK_CLIENT_KEY: "REPLACE_WITH_YOUR_CLIENT_KEY",
  TIKTOK_REDIRECT_URI: "https://app.wouchh.com/auth/tiktok/callback/",
  TIKTOK_SCOPES: [
    "user.info.basic",
    "user.info.profile",
    "user.info.stats",
    "message.list.read",
    "message.list.manage",
    "comment.list",
    "comment.list.manage",
    "video.list",
    "video.publish",
    "biz.brand.insights",
    "biz.creator.insights",
  ],

  /* ---------- Endpoints ---------- */
  BACKEND_TOKEN_ENDPOINT: "/api/store-tokens",
};
