Lifedrop- Blood Donation Application is a full-stack MERN application designed to connect blood donors with those in need.
Live: https://tamanna-b12a11-lifedrop.netlify.app/

Features
User Roles & Permissions
Admin: Full access including user management, donation requests, and content management.
Donor: Register, view donation requests, respond, and manage their own profile.
Volunteer: Create and manage donation requests; update donation statuses.

Authentication
Registration and login via Email & Password
Role-based access control with protected routes
Profile management (view & edit)

Donor Dashboard
Create, view, edit, and delete donation requests
Recent donation requests summary on dashboard home
Pagination and filtering of donation requests by status

Admin Dashboard
Manage all users (block/unblock, assign roles)
View and manage all donation requests
Dashboard statistics (total donors, total donations, total funds)

Volunteer Dashboard
View all donation requests
Update donation status only

Public Pages
Home page with banner, featured section, contact form, and footer
Search donors by blood group, district, and upazila

View pending blood donation requests
Blood Donation Request Details
Private route to see full details
Confirm donation to update status from pending to in-progress

Funding Page
Users can donate funds via Stripe
Display all contributions in tabular format
Total funds visible in admin & volunteer dashboards


Technologies Used
Frontend: React.js, Tailwind CSS, React Router
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase Authentication
Payment Integration: Stripe (for donations)
Deployment: Netlify (Frontend)

Other Libraries: react-hot-toast, framer-motion, swiper
