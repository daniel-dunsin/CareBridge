# CareBridge

**CareBridge** is a healthcare platform designed to connect patients with freelance doctors for personalized and flexible medical services. It enhances traditional telemedicine by incorporating AI features to provide intelligent, efficient, and patient-centered care.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [Contact](#contact)

## About the Project

CareBridge addresses the need for accessible, flexible healthcare services by leveraging AI to assist in patient-doctor interactions. From symptom checking to seamless appointment scheduling, CareBridge aims to provide a modern, intelligent approach to telemedicine.

## Features

- **AI-Powered Symptom Checker**: Guides patients with preliminary advice based on their symptoms.
- **Real-Time Doctor Appointments**: Book consultations with freelance doctors at your convenience.
- **Secure Medical Records**: Safe storage and visualization of patient data.
- **Personalized Health Insights**: Get tailored health recommendations driven by AI.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/daniel-dunsin/CareBridge.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd CareBridge
   ```

3. **Checkout the API branch for the backend**

   ```bash
   git checkout api
   ```

4. **Install dependencies**

   - **Frontend Setup**

     ```bash
     cd frontend
     npm install
     ```

   - **Backend Setup**
     ```bash
     cd ../backend
     npm install
     ```

5. **Set up environment variables**

   Configure your `.env` files in both the frontend and backend directories with the appropriate settings.

6. **Run the application**

   - **Run Backend**

     ```bash
     cd backend
     npm run start:dev
     ```

   - **Run Frontend**
     ```bash
     cd ../frontend
     npm run dev
     ```

## Usage

- **Navigate to the frontend URL**: Access the application through your browser.
- **Sign Up and Explore**: Register as a patient or a doctor to start using CareBridge’s features.

## Technology Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeORM, MongoDB (located on the `api` branch)
- **AI Integration**: None for now...
- **Real-Time Features**: WebRTC, Socket.io (optional)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

- **Project Link**: [GitHub Repository](https://carebridge-xi.vercel.app/)
- **Email**: adejaredaniel12@gmail.com
