---
description: Deploy backend to Render
---

# Deploy Backend to Render

This workflow guides you through deploying the Climade Paints backend to Render.

## Prerequisites

1. **GitHub Repository**: Your code must be pushed to a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com) (free tier available)
3. **MongoDB Atlas**: Have your MongoDB connection string ready
4. **Email Credentials**: Gmail account credentials for nodemailer

## Step 1: Prepare Your Code

Ensure your backend code is committed and pushed to GitHub:

```bash
cd server
git add .
git commit -m "Prepare backend for Render deployment"
git push origin main
```

## Step 2: Create a Render Account

1. Go to [https://render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up using your GitHub account (recommended for easier integration)

## Step 3: Create a New Web Service

1. From your Render Dashboard, click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository:
   - Click "Connect account" if not already connected
   - Find and select your `Climade-Paints` repository
   - Click "Connect"

## Step 4: Configure the Web Service

Fill in the following settings:

- **Name**: `climade-paints-backend` (or your preferred name)
- **Region**: Choose the closest region to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `server`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free` (or choose a paid plan for better performance)

## Step 5: Add Environment Variables

Click on **"Advanced"** and add the following environment variables:

1. **MONGODB_URI**

   - Value: Your MongoDB Atlas connection string
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/climade-paints?retryWrites=true&w=majority`

2. **EMAIL_USER**

   - Value: Your Gmail address
   - Example: `your-email@gmail.com`

3. **EMAIL_PASS**

   - Value: Your Gmail App Password (NOT your regular password)
   - Get it from: [Google App Passwords](https://myaccount.google.com/apppasswords)

4. **PORT** (Optional - Render sets this automatically)

   - Value: `5000`

5. **NODE_ENV**
   - Value: `production`

## Step 6: Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your server
3. Monitor the deployment logs in real-time

## Step 7: Verify Deployment

Once deployed, Render will provide you with a URL like:
`https://climade-paints-backend.onrender.com`

Test your API:

- Visit: `https://your-service-name.onrender.com/`
- Should see: "Climade Paints API is running"
- Test endpoints:
  - `https://your-service-name.onrender.com/api/projects`
  - `https://your-service-name.onrender.com/api/site-visits`

## Step 8: Update Frontend

Update your frontend to use the new backend URL:

1. Open your frontend `.env` file
2. Update the API URL:
   ```
   VITE_API_URL=https://your-service-name.onrender.com
   ```
3. Commit and push changes

## Important Notes

### Free Tier Limitations

- **Cold Starts**: Free services spin down after 15 minutes of inactivity
- **First Request**: May take 30-60 seconds to wake up
- **Solution**: Consider upgrading to a paid plan or use a service like [UptimeRobot](https://uptimerobot.com) to ping your API every 14 minutes

### Auto-Deploy

- Render automatically redeploys when you push to your connected branch
- You can disable auto-deploy in the service settings if needed

### Custom Domain (Optional)

1. Go to your service settings
2. Click "Custom Domain"
3. Add your domain and follow DNS configuration instructions

## Troubleshooting

### Build Fails

- Check the build logs for errors
- Ensure `package.json` has all required dependencies
- Verify Node version compatibility

### Database Connection Issues

- Verify MongoDB URI is correct
- Check MongoDB Atlas network access (allow all IPs: `0.0.0.0/0`)
- Ensure database user has correct permissions

### Email Not Sending

- Verify Gmail credentials are correct
- Use App Password, not regular password
- Enable "Less secure app access" if using regular password (not recommended)

### CORS Errors

- Ensure your backend CORS configuration allows your frontend domain
- Update CORS settings in `index.js` if needed

## Monitoring

- **Logs**: View real-time logs in the Render dashboard
- **Metrics**: Monitor CPU, memory usage, and request counts
- **Alerts**: Set up email alerts for service failures

## Next Steps

1. Set up a custom domain (optional)
2. Configure environment-specific settings
3. Set up monitoring and alerts
4. Consider upgrading to a paid plan for better performance
5. Implement CI/CD pipeline for automated testing before deployment
