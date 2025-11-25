# WhatsApp Integration Setup

## Configuration Required

To enable WhatsApp integration on your website, you need to update the WhatsApp number in the following files:

### 1. WhatsApp Button Component

**File:** `src/components/WhatsAppButton.jsx`

- **Line 7:** Update `whatsappNumber` variable
- **Format:** Country code + phone number (no spaces, no + sign)
- **Example:** `'12345678900'` for a US number

### 2. Contact Page

**File:** `src/Pages/Contact.jsx`

- **Line 52:** Update `whatsappNumber` variable in `handleWhatsApp` function
- **Format:** Same as above

### How to Find Your WhatsApp Business Number

1. Open WhatsApp Business on your phone
2. Go to Settings > Business Settings > Business Profile
3. Note your business phone number
4. Format it as: Country Code + Number (remove all spaces, dashes, and the + sign)

### Examples:

- US Number: +1 (555) 123-4567 → `'15551234567'`
- UK Number: +44 20 1234 5678 → `'442012345678'`
- Nigeria: +234 803 123 4567 → `'2348031234567'`

### Testing

After updating the numbers, click the WhatsApp button to ensure it opens WhatsApp with the correct number.

## Features Implemented

✅ Floating WhatsApp button on all pages
✅ WhatsApp integration on Contact page
✅ Contact form with email notifications
✅ Quote request form with detailed information
✅ Book Site Visit form (already existed)
✅ All forms send emails to both admin and user
✅ Success/error states for all forms
✅ Mobile-responsive design

## Important Notes

- The WhatsApp button appears on ALL pages
- Users can choose between forms or WhatsApp
- All forms require backend server to be running
- Make sure your `.env` file in the server folder has the correct email credentials
