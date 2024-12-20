import axios from "axios";

const createBackendServer = (baseURL) => {
  // console.log("BASEURL", baseURL);
  const api = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
    },
    timeout: 60 * 1000,
  });

  //Interceptor
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // console.log("axioseroor", error);
      const message = error?.response?.data?.message;
      // console.log("message", message);
      error.message = message ?? error.message;
      if (error?.response?.data?.errors)
        error.errors = error?.response?.data?.errors;
      if (error?.response?.status === 401) {
        // console.log("unauthorize");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      return Promise.reject(error);
    }
  );

  // const headers = {
  //   "Content-Type": "multipart/form-data",
  // };

  /*==========    GET REQUESTS    ==========*/

  // const getProfile = async (id) => await api.get(`/api/user/${id}`);

  /*==========    POST REQUESTS JTC   ==========*/
  // const authLogin = async (body) => api.post("ecomuser/login", body);

  // const authLogout = async (body) => api.post("logout", body);

  // const authVerify = async (body) => api.post("ecomuser/otp-verify", body);
  // const authResend = (body) => api.post("ecomuser/resend-otp", body);
  // const authForget = async (body) =>
  //   api.post("ecomuser/sendPasswordResetLinkEmailEcom", body);
  // const authResetPassword = async (body) =>
  //   api.post("ecomuser/resetPasswordEcom", body);
  // const authChangePassword = async (body) =>
  //   api.post("ecomuser/change-password", body);

  // const removeProductFromCart = async (body) =>
  //   api.post("ecomuser/remove-cart", body);

  // const updateProfile = async (body) =>
  //   api.post("ecommerceProfile/updateProfileEcom", body);

  // const authResendForgot = async (body) =>
  //   api.post("ecomuser/resend-otp-not-valid", body);

  /*==========    GET REQUESTS  JTC ==========*/

  // const getAllProductWithCategory = async (id) =>
  //   await api.get(`getProductCategory?userId=${id}`);
  // const getProductDetails = async (id, userId) =>
  //   await api.get(`product/product/${id}?user_id=${userId}`);

  // const authRegisterReferral = ({ body, code }) =>
  //   api.post(`auth/register?referralCode=${code}`, body);
  // const updateUser = ({ id, body }) => api.put(`user/update/${id}`, body);

  // const getStoreDetails = async (id) => api.get(`store/slug/${id}?type=store`);

  // const getStoreSlot = ({ id, duration, staff_Id }) =>
  //   api.get(`store/slots/${id}?duration=${duration}&staff_Id=${staff_Id}`);

  // const getStoreSlotwithoutStaff = ({ id, duration }) =>
  //   api.get(`store/slots/${id}?duration=${duration}
  //   `);
  // const addFavorite = (body) => api.post(`user/favourite-add`, body);

  // const getOrderDetails = (id) => api.get(`/getSalesApp/${id}`);

  // ---------------------------------------------------------------------------------------

  /*========== POST REQUESTS  ==========*/
  const signup = (body) => api.post("signup", body);
  const login = (body) => api.post("login", body);
  const logout = (body) => api.post("logout", body);
  const sendPasswordResetEmail = (body) => api.post(`restpassword`, body);
  const changePassword = (body) => api.post("changepassword", body);

  const generateQrCode = (body) => api.post("generate", body);
  const validateQrCode = (type) => api.get(`validations/${type}`);
  const updateProfile = (body) => api.post(`update-name`, body);
  const updateEmail = (body) => api.post(`update-email`, body);
  const scanQrCode = (body) => api.post(`qr_scan`, body);
  const QRCount = () => api.get(`qr_count`);
  const GETAllQrCode = ({type,sort}) => api.get(`user_qr?type=${type}&sort_by=${sort}`);
  const getScanCount = () => api.get(`getScanCount`);
  const deleteQrCode = (body) => api.delete(`delete_user`, { data: body });
  const checkout = (body) => api.post(`craetePayment`, body);
  const getSingleQr = (id) => api.get(`Get_user_qr/${id}`);
  const getQRStats = () => api.get(`qr_stats`);
  const getQRScansActivity = () => api.get(`qr_stats_30days`);
  const exportAnalyticData = (startDate, endDate) =>
    api.get(`export?startDate=${startDate}&endDate=${endDate}`);
  const viewQrCode = (id) => api.get(`increase-views/${id}`);


  
  //EACH USER STATS
  const getEachUserQRStat = (id) => api.get(`admin/each_analytics/${id}`);
  const getEachUserQRSystem = (id) => api.get(`admin/qr_stats_system_each/${id}`);
  const getEachUserQRScanActivity = (id) => api.get(`admin/qr_stats_each/${id}`);

  // REVIEWS APIS ELABELS
  const PostReviews = (body) => api.post(`create_answer`, body);
  const getReviews = (id) => api.get(`get-reviews/${id}`);
  const PostReviewsRating = (body) => api.post(`create_ratings`, body);
  const getReviewsRating = (id) => api.get(`rating/${id}`);

  

  //Returning all the API
  return {
    signup,
    login,
    logout,
    generateQrCode,
    validateQrCode,
    updateProfile,
    updateEmail,
    sendPasswordResetEmail,
    QRCount,
    GETAllQrCode,
    scanQrCode,
    getScanCount,
    deleteQrCode,
    checkout,
    getSingleQr,
    getQRStats,
    getQRScansActivity,
    changePassword,
    exportAnalyticData,
    viewQrCode,
    getEachUserQRStat,
    getEachUserQRSystem,
    getEachUserQRScanActivity,
    PostReviews,
    getReviews,
    PostReviewsRating,
    getReviewsRating
  };
};

const apis = createBackendServer(process.env.REACT_APP_SERVER_URL);

export default apis;
