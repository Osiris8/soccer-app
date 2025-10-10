# Soccer App – A Soccer Management App Built with Next.js 15

**Soccer App** is a modern web application designed for managing a list of football players, offering full **CRUD** functionality—add, edit, delete, and view players. Built with **Next.js 15**, it provides a clean, intuitive, and smooth user interface for an exceptional user experience, backed by a robust backend and secure authentication.

**Live Demo**: [https://soccer-app-ruddy.vercel.app](https://soccer-app-ruddy.vercel.app/)

---

## Features

- Full **CRUD** operations for managing football players (add, edit, delete, view).
- Secure user authentication with **Kinde Authentication**.
- Efficient data storage with **MongoDB**.
- File uploads for player images using **EdgeStore**.
- Responsive and modern UI styled with **Tailwind CSS** and **Daisy UI**.
- Fast and scalable app deployed on **Vercel**.
- API testing with **Postman** for backend endpoints.

---

## Getting Started

Follow these steps to set up and run the Soccer App locally.

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (18.x or higher, as Next.js 15 may require it)
- **npm** or **yarn** (package manager)
- **Git**
- **Postman** (optional, for API testing)
- A **MongoDB** account (e.g., MongoDB Atlas: [mongodb.com](https://www.mongodb.com))
- A **JSON wEB Authentication** account ([jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken))
- An **EdgeStore** account ([edgestore.dev](https://edgestore.dev))
- A **Vercel** account for deployment ([vercel.com](https://vercel.com))

### 2. Clone the Repository

```bash
git clone https://github.com/Osiris8/soccer-app.git
cd soccer-app
```

### 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root to store sensitive configuration:

```bash
touch .env.local  # On Windows: echo. > .env.local
```

Open the `.env.local` file and add the following environment variables, replacing placeholders with your actual values:

```bash
JWT_SECRET="your-secret-key-here"
MONGODB_URI="YOUR_MONGODB_URI"
EDGE_STORE_ACCESS_KEY="YOUR_EDGE_STORE_ACCESS_KEY"
EDGE_STORE_SECRET_KEY="YOUR_EDGE_STORE_SECRET_KEY"
```

#### How to Obtain Environment Variables:

- **MONGODB_URI**: Get from your MongoDB Atlas dashboard (e.g., `mongodb+srv://user:password@cluster0.mongodb.net/dbname`).
- **EDGE_STORE_ACCESS_KEY**, **EDGE_STORE_SECRET_KEY**: Create an EdgeStore account at [edgestore.dev](https://edgestore.dev) and obtain these from your project settings.

### 5. Run the Application Locally

Start the Next.js development server:

```bash
npm run dev
```

The app will run on `http://localhost:3000`. Open your browser to view the UI or test API endpoints with Postman.

### 6. Deploy to Vercel

To deploy the app to Vercel:

1. Push your repository to GitHub.
2. Connect your repository to Vercel via the Vercel dashboard.
3. Set the environment variables (listed above) in Vercel’s project settings.
4. Deploy the project. The app is available at a URL like `https://soccer-app-ruddy.vercel.app/`.

---

## Testing with Postman

To test the API endpoints, use **Postman** to send requests to the deployed API (`https://soccer-app-ruddy.vercel.app/`) or locally (`http://localhost:3000`). Below are the key endpoints for managing players. Ensure you’re authenticated via Kinde (include the JWT token in the `Authorization` header as `Bearer <token>` if required).

### 1. Create a Player

- **Method**: POST
- **URL**: `https://soccer-app-ruddy.vercel.app`
- **Headers**: `Authorization: Bearer <your_jwt_token>`
- **Body** (JSON):
  ```json
  {
    "name": "Lionel Messi",
    "imageUrl": "https://example.com/images/messi.jpg",
    "club": "Inter Miami",
    "country": "Argentina",
    "position": "Forward",
    "age": 37,
    "description": "Widely regarded as one of the greatest footballers of all time, known for his exceptional dribbling and playmaking.",
    "history": "Started his career at FC Barcelona's youth academy, La Masia, before making his senior debut in 2004.",
    "career": "FC Barcelona (2004-2021), Paris Saint-Germain (2021-2023), Inter Miami (2023-present)",
    "goals": 819
  }
  ```
- **Response**: Returns the created player with an ID and details.

### 2. Retrieve All Players

- **Method**: GET
- **URL**: `https://soccer-app-ruddy.vercel.app/api/myplayers/yourUserId`
- **Headers**: `Authorization: Bearer <your_jwt_token>` (if authentication is required)
- **Response**: Returns a list of all players.

### 3. Display a Player

- **Method**: GET
- **URL**: `https://soccer-app-ruddy.vercel.app/api/players/your-player-id`
- **Headers**: `Authorization: Bearer <your_jwt_token>` (if authentication is required)
- **Response**: Returns a list of all players.

### 3. Update a Player

- **Method**: PATCH
- **URL**: `https://soccer-app-ruddy.vercel.app/api/player/your-player-id`
- **Headers**: `Authorization: Bearer <your_jwt_token>` (if authentication is required)
- **Body** (JSON):
  ```json
  {
    "name": "Lionel Messi",
    "imageUrl": "https://example.com/images/messi.jpg",
    "club": "Inter Miami",
    "country": "Argentina",
    "position": "Forward",
    "age": 37,
    "description": "Widely regarded as one of the greatest footballers of all time, known for his exceptional dribbling and playmaking.",
    "history": "Started his career at FC Barcelona's youth academy, La Masia, before making his senior debut in 2004.",
    "career": "FC Barcelona (2004-2021), Paris Saint-Germain (2021-2023), Inter Miami (2023-present)",
    "goals": 819
  }
  ```
- **Response**: Returns the updated player. Replace `your-player-id` with the actual player ID.

### 4. Delete a Player

- **Method**: DELETE
- **URL**: `https://soccer-app-ruddy.vercel.app/api/player/your-player-id`
- **Headers**: `Authorization: Bearer <your_jwt_token>` (if authentication is required)
- **Response**: Confirms the player is deleted. Replace `your-player-id` with the actual player ID.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: Json Web Token,
- **Database**: MongoDB
- **File Storage**: EdgeStore
- **Styling**: Tailwind CSS, Daisy UI, Shadcn UI
- **API Testing**: Postman
- **Deployment**: Vercel
- **Language**: JavaScript/TypeScript

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## Contact

Have questions or suggestions? Connect on [X](https://x.com/migan_osiris).

---

**Star this repo if you find it useful!**
