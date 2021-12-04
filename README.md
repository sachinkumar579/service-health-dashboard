# service-health-dashboard

### Project setup steps:
- clone project 
- Navigate to project directory 
- Run npm install
- Run npm run dev
- It will launch a UI running in dev server at http://localhost:3000/
  
### Project details
- This is a dashboard UI for displaying health of various services. It has a login page for admins . On successful login it will display all services
 with their current running status. A search option is also provided in the dashboard for a quick lookup.   
- UI is developed using React library and vite build tool is used for packaging of the project  
- Therer are 5 components 
  - App - Contains a custom hook for storing user login information in session storage. This will also re render when the user is in login page .  
  - Dashboard - Contains the UI and logic for displaying service health with a search option  
  - Login - Simple login form . Login works only with admin credentials . Authentication will be added next  
  - Modals - This is for displaying dialog box . Contains error dialog for Login page
  - UI - Contains custom built elements and other default styling to be applied in the page
- The UI is published using Github pages - https://sachinkumar579.github.io/service-health-dashboard/dist/ 
