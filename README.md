---
## Installation

Follow these steps to get the Node Blog API up and running on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Moztafaa/mobile_api.git
   ```

2. Install the project dependencies using npm:

   ```bash
   cd node-blog-api
   npm install
   ```

3. Create a `.env` file in the root directory and add the required environment variables:

   ```env
   PORT=8000
   MONGO_URI=your_mongodb_uri
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the server:

   ```bash
   npm run build && npm run start
   ```

## Deployment

The Node Blog API is deployed on Render at the following URL:

https://node-blog-api-ihsp.onrender.com

You can use this URL to access the API and test its functionality.

## API Documentation

This project includes a Postman collection that can be used to test the API endpoints. The collection includes examples of how to use each endpoint and the expected response.

[View Postman Collection](https://documenter.getpostman.com/view/28126411/2s9YJc2Nec)

## Usage

To use the Node Blog API, follow these steps:

1. Open your web browser and navigate to `http://localhost:4000`.

2. Use the following API endpoints to interact with the project:

   - `POST /api/auth/login`: Logs in a user and returns a JWT token.
   - `POST /api/auth/register`: Registers a new user.
   - `GET /api/users/profile`: Returns a list of all users.
   - `GET /api/users/count`: Returns the count of all users.
   - `GET /api/users/profile/:id`: Returns a single user by ID.
   - `PUT /api/users/profile/:id`: Updates a user by ID.
   - `DELETE /api/users/profile/:id`: Deletes a user by ID.
   - `POST /api/users/profile/profile-photo-upload`: Upload profile photo.

## License

This project is licensed under the MIT License.

## Contact Information

For any inquiries or feedback, please contact imoztafa@gmail.com

---
