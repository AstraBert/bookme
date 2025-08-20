# BookMe 📅

A simple, elegant booking system that allows visitors to request meeting slots and automatically sends email notifications to both the requester and the calendar owner.

## Features

- **Date & Time Selection**: Interactive calendar with time picker (9:00 AM - 11:45 AM CET)
- **Dual Email Notifications**: Automatically sends confirmation emails to both parties
- **Responsive Design**: Clean, mobile-friendly interface using shadcn/ui components
- **Form Validation**: Client-side validation for time slots and required fields
- **Drawer UI**: Smooth user experience with a slide-up drawer for contact information

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: Supabase Edge Functions
- **Email Service**: Resend Email (via Supabase Edge Functions)

## Prerequisites

- Node.js 20+
- npm
- Supabase account with Edge Functions enabled
- Resend Email service configured in Supabase

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AstraBert/bookme
   cd bookme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Configure Supabase Edge Function**
   Make sure you have a `send-email` edge function deployed in your Supabase project that accepts:
   ```typescript
   {
     html: string,
     to: string,
     subject: string
   }
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Usage

1. **For Visitors**:
   - Select a desired date from the calendar
   - Choose a time between 9:00 AM and 11:45 AM (CET)
   - Click "Reach out" and provide name and email
   - Submit the request

2. **Email Notifications**:
   - **Visitor receives**: Confirmation email with booking details
   - **Calendar owner receives**: Notification email with requester's information

## Configuration

### Time Restrictions
Currently set to allow bookings between 9:00 AM - 11:45 AM CET. Modify the time constraints in:
- `handleTimeChange` function (client-side validation)
- `min` and `max` attributes on the time input

### Email Recipients
The calendar owner's email is hardcoded in `sendEmails` function:
```typescript
to: "astraberte9@gmail.com"  // Change this to your email
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Supabase
