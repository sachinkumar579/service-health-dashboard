# service-health-dashboard

### Project setup steps:
- clone project 
- Navigate to project directory 
- Run npm install
- Run npm run dev
- It will launch a UI running in dev server at http://localhost:3000/
  
### Project details
- This is a dashboard UI for displaying health check results of various services. It has a login page for admins . On successful login it will display all services
 with their health check status. A search option is also provided in the dashboard for a quick lookup.   
- UI is developed using React library and vite build tool is used for packaging of project  
- There are 5 components 
  - App - Contains a custom hook for storing user login information in session storage. This will also re render when the user is in login page .  
  - Dashboard - Contains the UI and logic to show service health check data with a Search option for quick lookup of services. Green indicates service is healthy and Red indicates the service is down. 
  - Login - Simple login form . Login works only with admin credentials . Authentication will be added next  
  - Modals - This is for displaying dialog box . Contains error dialog for Login page
  - UI - Contains custom built elements and other default styling to be applied in the page
  - Charts - Contains charts for displaying service usage history. Built using Recharts library https://recharts.org/ 
- Service.json - Contains all service data for display. This must be replaced with Health Check APIs to get current running status of services 
- The UI is published using Github Actions - https://sachinkumar579.github.io/service-health-dashboard/dist/ 
- Login credentials - admin and admin 
