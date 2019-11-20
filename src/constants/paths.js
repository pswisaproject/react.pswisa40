const nonAuthenticatedRoutes = {
    INDEX: '/',
    HOME: '/home',
    LOGIN: '/login',
    REGISTER: '/register'
  };
  
  const authenticatedRoutes = {
    LOGOUT: '/logout',
    DASHBOARD: '/dashboard'
  }
  
  export {
    nonAuthenticatedRoutes,
    authenticatedRoutes
  }
  