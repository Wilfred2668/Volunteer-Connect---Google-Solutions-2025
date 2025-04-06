# VolunteerConnect

A platform connecting volunteers with NGOs and community initiatives based on interests, skills, and location. Built for the Google Solutions Challenge 2025.

## Features (Most of the features are not implemented yet)

- User Authentication with Google Sign-In
- Volunteer Opportunity Discovery
- NGO Registration and Management
- Real-time Messaging System
- Event Calendar Integration
- Certificate Generation
- AI-powered Skill Matching
- Google Maps Integration
- Donation System
- Gamification – Earn points, unlock levels & rank weekly

## Technologies To be Used

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Firebase (Authentication, Firestore, Storage, Cloud Messaging)
- Google Maps API
- Google Calendar API
- Google Cloud Functions
- Google Analytics
- Google Pay API
- Gemini AI

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Wilfred2668/Volunteer-Connect-Google-Solutions-2025.git
cd volunteer-connect
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and enable the following services:
   - Authentication (with Google Sign-In)
   - Firestore
   - Storage
   - Cloud Messaging

4. Copy the Firebase configuration values to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
volunteer-connect/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   ├── contexts/           # React contexts
│   ├── lib/                # Utility functions and configurations
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Google Solutions Challenge 2025
- Next.js team for the amazing framework
- Firebase team for the backend services
