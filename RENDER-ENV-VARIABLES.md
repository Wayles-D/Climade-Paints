# 🔐 Render Environment Variables Reference

## Required Environment Variables for Render Deployment

Add these in your Render dashboard under **Environment** section:

### 1. MONGODB_URI

**Description:** MongoDB Atlas connection string  
**Example:** `mongodb+srv://username:password@cluster.mongodb.net/climade-paints?retryWrites=true&w=majority`  
**Where to get it:** MongoDB Atlas Dashboard → Connect → Connect your application

### 2. EMAIL_USER

**Description:** Gmail address for sending emails  
**Example:** `your-email@gmail.com`  
**Note:** This is the email that will send all notifications

### 3. EMAIL_PASS

**Description:** Gmail App Password (NOT your regular Gmail password)  
**Example:** `abcd efgh ijkl mnop` (16 characters with spaces)  
**Where to get it:**

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Name it "Climade Paints Backend"
4. Click "Generate"
5. Copy the 16-character password

### 4. ADMIN_EMAIL ⚠️ **MISSING - ADD THIS NOW**

**Description:** Email address to receive contact form submissions and site visit bookings  
**Example:** `admin@larrmedasdecor.com` or `your-email@gmail.com`  
**Note:** This can be the same as EMAIL_USER or different

### 5. NODE_ENV

**Description:** Environment mode  
**Value:** `production`  
**Note:** This is optional but recommended

---

## ⚠️ IMPORTANT: Gmail App Password Setup

If you haven't created a Gmail App Password yet:

1. **Enable 2-Factor Authentication** on your Gmail account

   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Create App Password**

   - Go to https://myaccount.google.com/apppasswords
   - Sign in if prompted
   - Select "Mail" and "Other"
   - Name it "Climade Paints"
   - Click "Generate"
   - Copy the 16-character password
   - Use this as EMAIL_PASS in Render

3. **Never use your regular Gmail password** - it won't work and is less secure

---

## 🔄 After Adding Variables

1. Click **"Save Changes"** in Render
2. Render will automatically redeploy your service
3. Wait 2-3 minutes for deployment to complete
4. Check the logs to ensure no errors
5. Test your API endpoints

---

## ✅ Verification Checklist

- [ ] MONGODB_URI added and tested
- [ ] EMAIL_USER added (valid Gmail address)
- [ ] EMAIL_PASS added (16-character App Password, not regular password)
- [ ] ADMIN_EMAIL added (where you want to receive emails)
- [ ] NODE_ENV set to "production"
- [ ] All variables saved in Render
- [ ] Service redeployed successfully
- [ ] No errors in deployment logs

---

## 🧪 Testing After Setup

Test your endpoints using these curl commands or Postman:

### Test Contact Form

```bash
curl -X POST https://larr-medas.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Test Site Visit Booking

```bash
curl -X POST https://larr-medas.onrender.com/api/site-visits \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "address": "123 Test St",
    "preferredDate": "2025-12-01",
    "preferredTime": "10:00 AM",
    "message": "Test booking"
  }'
```

### Test Projects API

```bash
curl https://larr-medas.onrender.com/api/projects
```

---

**Last Updated:** November 26, 2025
