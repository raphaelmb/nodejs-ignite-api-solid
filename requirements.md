## FRs (Functional Requirements)

- [x] Should be able to register;
- [x] Should be able to authenticate;
- [x] Should be able to get the profile of a logged in user;
- [x] Should be able to get a number of check-ins done by the logged in user;
- [x] Should be able to the user to get his check-in history;
- [x] Should be able to the user to find nearby gyms (10km max);
- [x] Should be able to the user to find gyms by name;
- [x] Should be able to the user to check-in in a gym;
- [] Should be able to validate a user's check-in;
- [x] Should be able to register a gym;

## BL (Business Logic)

- [x] The user should not be able to register with an registered email;
- [x] The user should not do 2 check-ins on the same day;
- [x] The user should not check-in if he's not close (at least 100m) to the gym;
- [] The check-in should be validated up to 20 minutes after created;
- [] The check-in should be validated by admins only;
- [] The gym should be registered by admin only;

## NFRs (Non Functional Requirements)

- [x] The user's password should be encrypted;
- [x] The app's data should be saved in a PostgreSQL database;
- [x] All data lists should be paginated with 20 items per per page;
- [] The user should be identified with a JWT;
