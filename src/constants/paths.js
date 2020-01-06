const nonAuthenticatedRoutes = {
    INDEX: '/',
    HOME: '/home',
    LOGIN: '/login',
    REGISTER: '/register'
  };
  
  const authenticatedRoutes = {
    LOGOUT: '/logout',
    DASHBOARD: '/dashboard',
    CLINICS: '/clinics',
    PENDING_USERS: '/pending_users'
  }
  
  export {
    nonAuthenticatedRoutes,
    authenticatedRoutes
  }
  